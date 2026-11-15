import { sitecore } from "../data/sitecore";
import { SectionAtmosphere } from "./SectionAtmosphere";
export function PersonSection() {
  return (
    <section id="about" className="section person-section simple-person">
      <SectionAtmosphere mode="constellation" />
      <span className="eyebrow">04 / THE PERSON BEHIND THE SYSTEMS</span>
      <h2 className="person-section-title">{sitecore.person.sectionTitle}</h2>
      <div className="person-foundations">
        <div>
          <span className="eyebrow">THE FOUNDATION / EDUCATION</span>
          {sitecore.education.map((item) => (
            <div className="credential" key={item.degree}>
              <h3>
                {item.degree}
                <span>{item.result}</span>
              </h3>
              <p>{item.school}</p>
              <small>{item.period}</small>
            </div>
          ))}
        </div>
        <div>
          <span className="eyebrow">MOMENTS THAT MATTER / RECOGNITION</span>
          {sitecore.awards.map((item) => (
            <div className="credential" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
