import { GenerativeScene } from "./GenerativeScene";
import {
  Braces,
  Cloud,
  Code2,
  Database,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { sitecore } from "../data/sitecore";

const icons = [Workflow, Braces, Code2, Network, Database, Cloud, ShieldCheck];

export function HeroSkills() {
  return (
    <aside
      className="hero-skills-card skills-layout-bands"
      id="skills"
      aria-labelledby="hero-skills-heading"
    >
      <div className="hero-skills-atmosphere" aria-hidden="true">
        <GenerativeScene mode="wave" />
      </div>
      <div className="hero-skills-heading">
        <h2 id="hero-skills-heading">{sitecore.profile.skillsHeading}</h2>
      </div>
      <dl className="hero-skills-list">
        {sitecore.skills.map((group, index) => {
          const Icon = icons[index];
          return (
            <div
              className={`hero-skill-group skill-group-${group.id}`}
              key={group.id}
            >
              <dt>
                <Icon size={16} strokeWidth={1.6} />
                <span>{group.label}</span>
              </dt>
              <dd>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </dd>
            </div>
          );
        })}
      </dl>
    </aside>
  );
}
