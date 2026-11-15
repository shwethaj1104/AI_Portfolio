import { ProjectCarousel } from "./ProjectCarousel";
import { ContactDetails } from "./ContactPanel";
import { SectionAtmosphere } from "./SectionAtmosphere";
import { ArrowUpRight, Play, ArrowRight } from "lucide-react";
import { sitecore } from "../data/sitecore";
import type { Project } from "../data/sitecore";
import { SectionHeading, Tags } from "./Primitives";
import { ProjectCover } from "./ProjectArt";
export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <button className="project-card" onClick={() => onOpen(project)}>
      <span className="project-card-action">
        <span className="project-action-icon" aria-hidden="true">
          {project.videoUrl || project.media.some((item) => item.videoUrl) ? (
            <Play size={15} />
          ) : (
            <ArrowUpRight size={16} />
          )}
        </span>
        <span>
          {project.videoUrl || project.media.some((item) => item.videoUrl)
            ? sitecore.labels.projectDemoAction
            : project.modelUrl
              ? "View model on Hugging Face"
              : sitecore.labels.projectDetailsAction}
        </span>
        <ArrowRight
          className="project-action-arrow"
          size={17}
          aria-hidden="true"
        />
      </span>
      <ProjectCover project={project} />
      <div className="project-card-info">
        <div className="project-meta">
          <span>
            {project.number} / {project.category}
          </span>
          <ArrowUpRight size={21} />
        </div>
        <h3>{project.shortTitle}</h3>
        <div className="project-card-details">
          <div>
            <h4>{sitecore.labels.projectImplementation}</h4>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{sitecore.labels.projectEvaluation}</h4>
            <ul className="project-evaluation-list">
              {project.evaluation.map((dimension) => (
                <li key={dimension}>{dimension}</li>
              ))}
            </ul>
          </div>
        </div>
        <Tags items={project.tags} />
      </div>
    </button>
  );
}
export function WorkSection({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <section id="work" className="section work-section">
      <SectionAtmosphere mode="wave" />
      <div className="work-heading">
        <SectionHeading
          number="01"
          eyebrow="SELECTED WORK"
          title={sitecore.labels.workSubtitle}
        />
      </div>
      <ProjectCarousel count={sitecore.projects.length}>
        {sitecore.projects.map((project) => (
          <ProjectCard project={project} key={project.id} onOpen={onOpen} />
        ))}
      </ProjectCarousel>
    </section>
  );
}
export { CareerJourney as ExperienceSection } from "./CareerJourney";
export { PersonSection as AboutSection } from "./PersonSection";
export function ContactSection() {
  return (
    <>
      <section id="contact" className="section contact-section">
        <SectionAtmosphere mode="helix" />
        <div className="contact-section-heading reveal">
          <span className="eyebrow">05 / NEXT CHAPTER</span>
          <h2>{sitecore.contact.headline}</h2>
        </div>
        <ContactDetails />
      </section>
      <footer>
        <span>
          © {new Date().getFullYear()} {sitecore.profile.name}
        </span>
        <span>{sitecore.profile.location}</span>
        <div>
          <a href={sitecore.profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          {sitecore.profile.github && (
            <a href={sitecore.profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          )}
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
export function Stats() {
  return (
    <div className="stats">
      {sitecore.stats.map((stat) => (
        <div className="stat" key={stat.label}>
          <span className="stat-value">
            {stat.value}
            <small>{stat.suffix}</small>
          </span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
