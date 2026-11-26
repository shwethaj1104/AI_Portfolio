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
      ) : project.number === "04" ? (
        <div className="mcp-orbit-visual" aria-hidden="true">
          <svg viewBox="0 0 340 172" fill="none" focusable="false">
            <circle className="mcp-halo" cx="170" cy="83" r="60" />
            <circle className="mcp-halo inner" cx="170" cy="83" r="46" />
            <path className="mcp-link" d="M78 83H135M205 83H262" />
            <g className="mcp-document">
              <rect x="38" y="56" width="40" height="54" rx="9" />
              <path d="M49 72h18M49 81h18M49 90h11" />
            </g>
            <g className="mcp-hub">
              <rect x="135" y="48" width="70" height="70" rx="23" />
              <text x="170" y="90" textAnchor="middle">
                MCP
              </text>
              <circle cx="150" cy="62" r="2" />
              <circle cx="190" cy="104" r="2" />
            </g>
            <g className="mcp-review">
              <rect x="262" y="62" width="42" height="42" rx="14" />
              <path d="m273 83 7 7 13-15" />
            </g>
            <circle className="mcp-packet packet-to-hub" r="3" />
            <circle className="mcp-packet packet-to-review" r="3" />
            <g className="mcp-satellites">
              <circle cx="170" cy="23" r="4" />
              <circle cx="170" cy="143" r="4" />
            </g>
          </svg>
          <span className="mcp-art-caption">
            Connected tools. Reviewed decisions.
          </span>
        </div>
      ) : (
        <div className="loan-agent-visual" aria-hidden="true">
          <svg viewBox="0 0 400 200" fill="none" focusable="false">
            <g className="loan-flow-lines">
              <path d="M54 100H92M148 100C166 100 162 42 184 42M148 100H184M148 100C166 100 162 158 184 158M242 42C265 42 256 100 278 100M242 100H278M242 158C265 158 256 100 278 100M330 100H352" />
            </g>
            <g className="loan-input">
              <rect x="8" y="78" width="46" height="44" rx="10" />
              <path d="M22 91h18M22 99h18M22 107h11" />
              <text x="31" y="140">
                Application
              </text>
            </g>
            <g className="loan-supervisor">
              <rect x="92" y="76" width="56" height="48" rx="12" />
              <circle cx="120" cy="92" r="5" />
              <path d="M109 110v-3a11 8 0 0 1 22 0v3" />
              <text x="120" y="142">
                Supervisor
              </text>
            </g>
            {[42, 100, 158].map((y, i) => (
              <g className={`loan-specialist specialist-${i}`} key={y}>
                <rect x="184" y={y - 19} width="58" height="38" rx="9" />
                <circle cx="199" cy={y} r="4" />
                <path d={`M210 ${y - 4}h20M210 ${y + 4}h14`} />
                <text x="213" y={y + 32}>
                  Specialist {i + 1}
                </text>
              </g>
            ))}
            <g className="loan-approval">
              <rect x="278" y="76" width="52" height="48" rx="12" />
              <path d="m291 99 9 9 16-18" />
              <text x="304" y="143">
                Human
              </text>
              <text x="304" y="156">
                approval
              </text>
            </g>
            <g className="loan-assessment">
              <rect x="352" y="78" width="40" height="44" rx="9" />
              <path d="M362 91h20M362 100h20M362 109h12" />
              <text x="369" y="141">
                Assessment
              </text>
            </g>
            <g className="loan-signals">
              <circle className="loan-signal signal-input" r="3" />
              <circle className="loan-signal signal-top" r="3" />
              <circle className="loan-signal signal-middle" r="3" />
              <circle className="loan-signal signal-bottom" r="3" />
              <circle className="loan-signal signal-output" r="3" />
            </g>
          </svg>
          <span className="loan-flow-caption">
            PARALLEL REVIEW · HUMAN CHECKPOINT
          </span>
        </div>
      )}
    </div>
  );
}

// Landing cards use concept art; uploaded screenshots belong to ProjectMedia's gallery.
export function ProjectCover({ project }: { project: Project }) {
  return <ProjectArt project={project} />;
}
