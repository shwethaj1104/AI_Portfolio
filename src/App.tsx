import { HeroSkills } from "./components/HeroSkills";
import { useState, useEffect, useLayoutEffect } from "react";
import { Menu, X, Moon, Sun, MapPin } from "lucide-react";
import { sitecore } from "./data/sitecore";
import type { Project } from "./data/sitecore";
import { ContactLink } from "./components/Primitives";
import { OrbitHero } from "./designs/Heroes";
import {
  WorkSection,
  ExperienceSection,
  AboutSection,
  ContactSection,
} from "./components/Sections";
import { GenerativeScene } from "./components/GenerativeScene";
import { usePalette } from "./hooks/usePalette";
import { usePortfolioMotion } from "./hooks/usePortfolioMotion";
import { ProjectDialog } from "./components/ProjectDialog";
export default function App() {
  const design = "skills-first";
  const [project, setProject] = useState<Project | null>(null);
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { dark, toggleTheme } = usePalette();
  usePortfolioMotion(design);
  useLayoutEffect(() => {
    document.documentElement.dataset.design = design;
    const url = new URL(location.href);
    url.searchParams.delete("design");
    history.replaceState({}, "", url);
    document.title = `${sitecore.profile.name} — Engineering, applied.`;
  }, [design]);
  useEffect(() => {
    setActiveSection("");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: 0 },
    );
    for (const link of [...sitecore.nav, { href: "#contact" }]) {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [design]);
  return (
    <div className="portfolio theme-orbit identity-layout" id="top">
      <div className="ambient-background" key={`ambient-${design}`}>
        <GenerativeScene mode="ambient" />
      </div>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a
          href="#top"
          className="brand"
          aria-label={`${sitecore.profile.name}, home`}
        >
          <span className="brand-name">
            <span className="header-location">
              <MapPin size={19} />
              {sitecore.profile.location}
            </span>
          </span>
        </a>
        <nav
          id="site-navigation"
          className={menu ? "open" : ""}
          aria-label="Main navigation"
        >
          {sitecore.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href ? "active" : undefined}
              aria-current={
                activeSection === link.href ? "location" : undefined
              }
              onClick={() => setMenu(false)}
            >
              {link.label}
            </a>
          ))}
          <ContactLink
            className={`header-contact${activeSection === "#contact" ? " active" : ""}`}
          />
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            className="mobile-menu-toggle icon-button"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Close navigation" : "Open navigation"}
            aria-expanded={menu}
            aria-controls="site-navigation"
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main" key={design}>
        <OrbitHero visual={<HeroSkills />} />
        <WorkSection onOpen={setProject} />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <ProjectDialog project={project} onClose={() => setProject(null)} />
    </div>
  );
}
