import { useState } from "react";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import type { Project } from "../data/sitecore";
import { sitecore } from "../data/sitecore";
import { ProjectArt } from "./ProjectArt";
export function assetUrl(path: string) {
  return /^(https?:|data:|blob:)/.test(path)
    ? path
    : `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
export function ProjectMedia({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const [broken, setBroken] = useState(false);
  const item = project.media[index];
  const move = (n: number) => {
    setIndex((index + n + project.media.length) % project.media.length);
    setBroken(false);
  };
  return (
    <div className="media-carousel" aria-label={`${project.shortTitle} media`}>
      <div className="media-stage">
        {item && !broken ? (
          <img
            src={assetUrl(item.src)}
            alt={item.alt}
            onError={() => setBroken(true)}
          />
        ) : (
          <>
            <ProjectArt project={project} large />
            {broken && (
              <span className="media-error">
                <ImageOff size={16} /> Image unavailable
              </span>
            )}
          </>
        )}
      </div>
      <div className="media-toolbar">
        <span>
          {item
            ? `${index + 1} / ${project.media.length} · ${item.alt}`
            : sitecore.labels.mediaHint}
        </span>
        <div>
          {project.media.length > 1 && (
            <>
              <button aria-label="Previous image" onClick={() => move(-1)}>
                <ChevronLeft size={18} />
              </button>
              <button aria-label="Next image" onClick={() => move(1)}>
                <ChevronRight size={18} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
