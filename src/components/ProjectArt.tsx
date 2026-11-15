import { useState, useEffect, useRef } from "react";
import type { Project } from "../data/sitecore";
export function ProjectArt({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
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
    <div
      ref={ref}
      className={`project-art art-${project.number} ${large ? "art-large" : ""} ${visible ? "art-visible" : ""}`}
      aria-label={`${project.shortTitle}: illustrative system diagram`}
      role="img"
    >
      {project.number === "01" ? (
        <div className="rag-visual">
          <div className="document-stack">
            <div />
            <div />
            <div>
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="flow-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="knowledge-core" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="flow-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="answer-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : project.number === "02" ? (
        <div className="tuning-visual">
          <div className="bars">
            {[30, 52, 38, 75, 48, 90, 70, 105, 92, 124, 110, 146].map(
              (h, i) => (
                <i key={i} style={{ height: h }} />
              ),
            )}
          </div>
          <div className="tuning-line" />
          <span>BASE → ADAPTED</span>
        </div>
      ) : (
        <div className="agent-visual">
          <span className="agent-node node-plan">Plan</span>
          <span className="agent-node node-research">Research</span>
          <span className="agent-node node-review">Review</span>
          <span className="agent-node node-eval">Evaluate</span>
          <svg viewBox="0 0 300 150" aria-hidden="true">
            <path d="M150 30 L55 80 L150 130 L245 80 Z M150 30 V130" />
          </svg>
        </div>
      )}
    </div>
  );
}

// Landing cards use concept art; uploaded screenshots belong to ProjectMedia's gallery.
export function ProjectCover({ project }: { project: Project }) {
  return <ProjectArt project={project} />;
}
