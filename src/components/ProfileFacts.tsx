import { BriefcaseBusiness, CalendarDays, Mail, Phone } from "lucide-react";
import { sitecore } from "../data/sitecore";

export function ProfileFacts() {
  const current = sitecore.experience[0];
  const experience = sitecore.stats[0];
  return (
    <div className="profile-facts hero-enter">
      <dl className="profile-career-facts">
        <div>
          <dt>Experience</dt>
          <dd>
            {experience.value} {experience.suffix}
          </dd>
        </div>
        <div>
          <dt>
            <CalendarDays size={14} />
            Notice period
          </dt>
          <dd>{sitecore.profile.noticePeriod}</dd>
        </div>
      </dl>
      <div className="profile-current-role">
        <BriefcaseBusiness size={18} />
        <div>
          <span>Currently at</span>
          <strong>{current.company}</strong>
          <small>
            {current.role} · {current.context}
          </small>
        </div>
      </div>
      <div className="profile-direct-contact">
        <a href={`mailto:${sitecore.profile.email}`}>
          <Mail size={17} />
          <span>{sitecore.profile.email}</span>
        </a>
        <a href={`tel:${sitecore.profile.phone.replace(/[^+\d]/g, "")}`}>
          <Phone size={17} />
          <span>{sitecore.profile.phone}</span>
        </a>
      </div>
    </div>
  );
}
