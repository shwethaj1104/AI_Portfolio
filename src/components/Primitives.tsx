import { ArrowUpRight, ArrowRight, Download } from "lucide-react";
import { sitecore } from "../data/sitecore";
export function Arrow({
  diagonal = false,
  size = 18,
}: {
  diagonal?: boolean;
  size?: number;
}) {
  return diagonal ? (
    <ArrowUpRight size={size} aria-hidden="true" />
  ) : (
    <ArrowRight size={size} aria-hidden="true" />
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
export function SectionHeading({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        <span className="section-number">{number}</span> {eyebrow}
      </span>
      <h2>{title}</h2>
    </div>
  );
}
export function ResumeLink({ className = "" }: { className?: string }) {
  return (
    <a
      className={`resume-link ${className}`}
      href={`${import.meta.env.BASE_URL}${sitecore.profile.resume.slice(1)}`}
      target="_blank"
      rel="noreferrer"
    >
      {sitecore.labels.resume}
      <Download size={15} />
    </a>
  );
}
export function ContactLink({
  className = "button primary",
}: {
  className?: string;
}) {
  return (
    <a className={className} href="#contact">
      {sitecore.labels.email}
      <Arrow diagonal />
    </a>
  );
}
