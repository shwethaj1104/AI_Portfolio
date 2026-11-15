import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Database,
  FileText,
  GitBranch,
  Layers3,
  ListChecks,
  MessageSquare,
  Pause,
  Play,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { sitecore } from "../data/sitecore";
import { GenerativeScene } from "./GenerativeScene";
export type WalkthroughKind = "retrieval" | "agents" | "delivery";
const stageIcons = {
  retrieval: [FileText, Search, ShieldCheck, MessageSquare],
  agents: [GitBranch, Wrench, ShieldCheck, ListChecks],
  delivery: [Search, Layers3, ShieldCheck, Check],
};
const agentPositions = [
  { x: 23, y: 22 },
  { x: 77, y: 22 },
  { x: 23, y: 76 },
  { x: 77, y: 76 },
];
export function HeroWalkthrough({ kind }: { kind: WalkthroughKind }) {
  const content = sitecore.heroWalkthroughs[kind];
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(
    () => !matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [visible, setVisible] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(
    () => !document.hidden,
  );
  const [reduced, setReduced] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const ref = useRef<HTMLDivElement>(null);
  const running = playing && visible && documentVisible && !reduced;
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setReduced(preference.matches);
      if (preference.matches) setPlaying(false);
    };
    const updateVisibility = () => setDocumentVisible(!document.hidden);
    observer.observe(element);
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(
      () => setStep((previous) => (previous + 1) % content.stages.length),
      3600,
    );
    return () => clearInterval(timer);
  }, [running, content.stages.length]);
  function selectStage(index: number) {
    setStep(index);
    setPlaying(false);
  }
  const stage = content.stages[step];
  const ActiveIcon = stageIcons[kind][step];
  return (
    <div
      className={`hero-walkthrough walkthrough-${kind} ${running ? "is-running" : ""}`}
      ref={ref}
    >
      <div className="walkthrough-top">
        <span className="walkthrough-title">
          <span className="status-dot" />
          {content.title}
        </span>
        <span className="walkthrough-label">{content.label}</span>
      </div>
      {kind === "retrieval" && (
        <div className="retrieval-scene">
          <div className="walkthrough-particles">
            <GenerativeScene mode="wave" />
          </div>
          <div className="retrieval-question">
            <MessageSquare size={16} />
            <span>{content.input}</span>
          </div>
          <div className="retrieval-graph">
            <svg viewBox="0 0 560 150" aria-hidden="true">
              <path className="workflow-edge" d="M55 60 H505" />
              {running && (
                <circle r="3" className="workflow-packet">
                  <animateMotion
                    dur="3.6s"
                    repeatCount="indefinite"
                    path="M55 60 H505"
                  />
                </circle>
              )}
            </svg>
            {content.stages.map((item, index) => {
              const Icon = stageIcons.retrieval[index];
              return (
                <button
                  key={item.title}
                  onClick={() => selectStage(index)}
                  className={`retrieval-node ${step === index ? "selected" : ""} ${index < step ? "complete" : ""}`}
                  style={{ left: `${10 + index * 26.666}%` }}
                  aria-label={`Explore ${item.title}`}
                  aria-pressed={step === index}
                  aria-controls="walkthrough-detail"
                >
                  <span>
                    {index < step ? <Check size={22} /> : <Icon size={23} />}
                  </span>
                  <strong>{item.title}</strong>
                </button>
              );
            })}
          </div>
          <div className="retrieval-result">
            <span className="result-icon">
              <ShieldCheck size={19} />
            </span>
            <div>
              <strong>{content.output}</strong>
              <span>{content.caption}</span>
            </div>
            <span className="result-source">
              <FileText size={13} />
              Context
            </span>
          </div>
        </div>
      )}
      {kind === "agents" && (
        <div className="agents-scene">
          <div className="agent-context-art">
            <GenerativeScene mode="torus" />
            <span>
              Shared
              <br />
              context
            </span>
          </div>
          <svg
            className="agent-workflow-edges"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {agentPositions.map((position, index) => (
              <g key={index}>
                <path
                  className={step === index ? "active" : ""}
                  d={`M50 48 Q50 ${position.y} ${position.x} ${position.y}`}
                />
                {running && step === index && (
                  <circle r=".8" className="workflow-packet">
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={`M50 48 Q50 ${position.y} ${position.x} ${position.y}`}
                    />
                  </circle>
                )}
              </g>
            ))}
          </svg>
          {content.stages.map((item, index) => {
            const Icon = stageIcons.agents[index];
            return (
              <button
                key={item.title}
                className={`agent-workflow-node ${step === index ? "selected" : ""}`}
                style={{
                  left: `${agentPositions[index].x}%`,
                  top: `${agentPositions[index].y}%`,
                }}
                onClick={() => selectStage(index)}
                aria-pressed={step === index}
                aria-controls="walkthrough-detail"
              >
                <span className="agent-workflow-icon">
                  <Icon size={20} />
                </span>
                <strong>{item.title}</strong>
                <small>{item.tag}</small>
              </button>
            );
          })}
          <div className="agent-workflow-tools">
            <span>LangGraph</span>
            <span>Tool calling</span>
            <span>MCP</span>
          </div>
        </div>
      )}
      {kind === "delivery" && (
        <div className="delivery-model-scene">
          <div className="walkthrough-particles">
            <GenerativeScene mode="helix" />
          </div>
          <div
            className="delivery-model-tabs"
            role="group"
            aria-label="Explore the delivery approach"
          >
            {content.stages.map((item, index) => (
              <button
                key={item.title}
                aria-pressed={step === index}
                onClick={() => selectStage(index)}
              >
                <span>{index < step ? <Check size={12} /> : index + 1}</span>
                {item.title}
              </button>
            ))}
          </div>
          <div className={`delivery-model model-step-${step}`}>
            <div className="delivery-sheet sheet-data">
              <Database size={20} />
              <span>Data & context</span>
              <i />
              <i />
              <i />
            </div>
            <div className="delivery-sheet sheet-services">
              <GitBranch size={21} />
              <span>Services & integration</span>
              <i />
              <i />
            </div>
            <div className="delivery-sheet sheet-interface">
              <Layers3 size={22} />
              <div>
                <span>{content.input}</span>
                <strong>{stage.tag}</strong>
              </div>
              <div className="mini-product-lines">
                <i />
                <i />
                <i />
              </div>
              <span className="mini-product-state">
                <ActiveIcon size={13} />
                {stage.title}
              </span>
            </div>
          </div>
          <div className="delivery-proof">
            <span>
              <Check size={15} />
              {content.output}
            </span>
            <small>{content.caption}</small>
          </div>
        </div>
      )}
      <div
        className="walkthrough-detail"
        id="walkthrough-detail"
        key={`${kind}-${step}`}
      >
        <span className="walkthrough-detail-icon">
          <ActiveIcon size={19} />
        </span>
        <div>
          <h3>{stage.heading}</h3>
          <p>{stage.description}</p>
        </div>
      </div>
      <div className="walkthrough-controls">
        <span>
          {step + 1} / {content.stages.length}
          <span className="walkthrough-progress">
            <i
              style={{
                width: `${((step + 1) / content.stages.length) * 100}%`,
              }}
            />
          </span>
        </span>
        <div>
          <button
            onClick={() => selectStage((step + 1) % content.stages.length)}
          >
            Next stage
            <ArrowRight size={14} />
          </button>
          <button
            onClick={() => setPlaying(!playing)}
            disabled={reduced}
            aria-label={playing ? "Pause walkthrough" : "Play walkthrough"}
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
            <span>{playing ? "Pause" : "Play"}</span>
          </button>
        </div>
      </div>
      <a className="walkthrough-project-link" href={content.href}>
        {content.linkLabel}
        <ArrowRight size={15} />
      </a>
    </div>
  );
}
