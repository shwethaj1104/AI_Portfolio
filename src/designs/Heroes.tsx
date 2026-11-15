import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { ProfileFacts } from "../components/ProfileFacts";
import { sitecore } from "../data/sitecore";
import { ResumeLink } from "../components/Primitives";

export function OrbitHero({ visual }: { visual: ReactNode }) {
  return (
    <section className="hero orbit-hero">
      <div className="hero-copy">
        <div className="hero-role hero-enter">
          <span>{sitecore.profile.combinedRole}</span>
        </div>
        <h1 className="hero-enter identity-name">
          {sitecore.profile.name.split(" ").map((part, index) => (
            <span key={index}>{part}</span>
          ))}
        </h1>
        <ProfileFacts />
        <div className="hero-actions hero-enter">
          <a href="#work" className="button primary">
            <Play size={18} />
            {sitecore.labels.viewDemoVideos}
          </a>
          <ResumeLink />
        </div>
      </div>
      <div className="hero-visual hero-enter interactive-hero-visual">
        {visual}
      </div>
    </section>
  );
}
