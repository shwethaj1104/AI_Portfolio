import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  MapPin,
} from "lucide-react";
import { sitecore } from "../data/sitecore";
import { SectionAtmosphere } from "./SectionAtmosphere";
import { GenerativeScene } from "./GenerativeScene";
export function CareerJourney() {
  const [selected, setSelected] = useState(0);
  const job = sitecore.experience[selected];
  const chapters = sitecore.experience.map((job, index) => ({ job, index }));
  function choose(index: number) {
    setSelected(index);
  }
  return (
    <section id="experience" className="section career-section">
      <SectionAtmosphere mode="wave" align="left" />
      <div className="career-heading reveal">
        <div>
          <span className="eyebrow">03 / EXPERIENCE IN MOTION</span>
          <h2>{sitecore.careerIntro.headline}</h2>
        </div>
      </div>
      <div className="career-explorer">
        <aside className="career-route">
          <div className="career-route-label">
            <BriefcaseBusiness size={16} />
            <span>THE JOURNEY / {sitecore.experience.length} CHAPTERS</span>
          </div>
          <div
            className="career-stations"
            role="group"
            aria-label="Explore career chapters"
          >
            {chapters.map(({ job: item, index }, i) => (
              <button
                key={item.company}
                onClick={() => choose(index)}
                className={`career-station ${selected === index ? "selected" : ""}`}
                aria-pressed={selected === index}
                aria-controls="career-detail"
              >
                <span className="career-station-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="career-station-copy">
                  <small>{item.period}</small>
                  <strong>{item.company}</strong>
                  <span>{item.chapter}</span>
                </span>
                <ArrowUpRight size={17} />
              </button>
            ))}
          </div>
          <span className="career-route-hint">
            {sitecore.careerIntro.mapHint}
          </span>
        </aside>
        <div className="career-detail" id="career-detail">
          <article key={job.company} className="career-chapter">
            <div className="career-scene">
              <GenerativeScene mode="wave" />
            </div>
            <div className="career-chapter-top">
              <h3>{job.company}</h3>
              <span className="career-location">
                <MapPin size={13} />
                {job.location}
              </span>
            </div>
            <div className="career-role">
              {job.role}
              {job.context && <span>{job.context}</span>}
            </div>
            <div
              className="career-outcomes career-resume-points"
              aria-live="polite"
            >
              {job.highlights.map((item) => (
                <div key={item}>
                  <span aria-hidden="true">
                    <Check size={14} />
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>
          <div className="career-navigation">
            <button
              onClick={() => choose(selected - 1)}
              disabled={selected === 0}
            >
              <ArrowLeft size={16} />
              Previous role
            </button>
            <span>
              {String(selected + 1).padStart(2, "0")} /{" "}
              {String(sitecore.experience.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => choose(selected + 1)}
              disabled={selected === sitecore.experience.length - 1}
            >
              Next role
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
