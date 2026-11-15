import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Database,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { sitecore } from "../data/sitecore";
import { SectionAtmosphere } from "./SectionAtmosphere";
import { GenerativeScene } from "./GenerativeScene";
const icons = [
  Sparkles,
  Braces,
  Layers3,
  Network,
  Database,
  Cloud,
  ShieldCheck,
];
export function SkillsGalaxy() {
  const [selected, setSelected] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const group = sitecore.skills[selected];
  const Icon = icons[selected % icons.length];
  const count = new Set(sitecore.skills.flatMap((g) => g.items)).size;
  const positions = sitecore.skills.map((_, i) => {
    const angle = -Math.PI / 2 + (i / sitecore.skills.length) * Math.PI * 2;
    return { x: 50 + 36 * Math.cos(angle), y: 50 + 36 * Math.sin(angle) };
  });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="skills"
      ref={ref}
      className={`section skills-section ${visible ? "skills-visible" : ""}`}
    >
      <SectionAtmosphere mode="torus" align="left" />
      <div className="skills-heading reveal">
        <div>
          <span className="eyebrow">02 / THE CONNECTED TOOLKIT</span>
          <h2>{sitecore.skillsIntro.headline}</h2>
        </div>
        <p>{sitecore.skillsIntro.description}</p>
      </div>
      <div className="skills-experience">
        <div
          className="skills-map"
          role="group"
          aria-label="Choose an engineering domain to explore its tools and real-world context"
        >
          <div className="skills-map-orbit outer-orbit" />
          <div className="skills-map-orbit inner-orbit" />
          <svg
            className="skills-edges"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {positions.map((p, i) => (
              <path
                className={selected === i ? "active" : ""}
                key={i}
                d={`M 50 50 Q ${50 + (p.x - 50) * 0.15} ${p.y} ${p.x} ${p.y}`}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
          <div className="skills-core">
            <GenerativeScene mode="sphere" />
            <div>
              <span>{count}</span>
              <small>CONNECTED TOOLS</small>
            </div>
          </div>
          {sitecore.skills.map((g, i) => {
            const NodeIcon = icons[i % icons.length];
            return (
              <button
                key={g.id}
                className={`skill-domain ${selected === i ? "selected" : ""}`}
                style={{
                  left: `${positions[i].x}%`,
                  top: `${positions[i].y}%`,
                }}
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
                aria-controls="skill-lens"
              >
                <NodeIcon size={21} />
                <span>{g.label}</span>
                <small>{String(g.items.length).padStart(2, "0")} tools</small>
              </button>
            );
          })}
          <span className="map-instruction">
            {sitecore.skillsIntro.mapHint}
          </span>
        </div>
        <div
          className="skill-lens"
          id="skill-lens"
          aria-live="polite"
          aria-atomic="true"
        >
          <div key={group.id} className="skill-lens-content">
            <div className="skill-lens-top">
              <span className="skill-lens-icon">
                <Icon size={25} />
              </span>
              <span className="eyebrow">
                CONNECTION {String(selected + 1).padStart(2, "0")} /{" "}
                {String(sitecore.skills.length).padStart(2, "0")}
              </span>
            </div>
            <h3>{group.label}</h3>
            <p>{group.summary}</p>
            <div className="skill-tool-grid">
              {group.items.map((tool, i) => (
                <div
                  key={tool}
                  style={{ animationDelay: `${Math.min(i * 0.035, 0.3)}s` }}
                >
                  <span className="tool-dot" />
                  {tool}
                </div>
              ))}
            </div>
            <div className="skill-evidence">
              <span className="eyebrow">
                <Code2 size={14} />
                IN PRACTICE
              </span>
              <h4>{group.evidence.title}</h4>
              <p>{group.evidence.detail}</p>
              <a className="text-link" href={group.evidence.href}>
                {group.evidence.linkLabel}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-footnote">
        <span>
          <span className="status-dot" />
          {sitecore.skillsIntro.footnote}
        </span>
        <span>
          {sitecore.skills.length} domains · {count} distinct tools & practices
        </span>
      </div>
    </section>
  );
}
