import { demoUrl } from "./demoUrl";
import { useEffect, useRef } from "react";
import { X, ArrowUpRight, Play, Github } from "lucide-react";
import { sitecore } from "../data/sitecore";
import type { Project } from "../data/sitecore";
import { ProjectMedia } from "./ProjectMedia";
export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !project) return;
    const previous = document.activeElement as HTMLElement | null;
    el.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      el.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      data-project={project?.id}
      aria-labelledby="project-dialog-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project && (
        <article key={project.id}>
          <div className="dialog-top">
            <span className="eyebrow">PROJECT / {project.number}</span>
            <button
              className="icon-button"
              onClick={onClose}
              aria-label={sitecore.labels.close}
            >
              <X />
            </button>
          </div>
          <h2 id="project-dialog-title">
            {project.modalTitle || project.shortTitle}
          </h2>
          <p className="dialog-summary">{project.description}</p>
          <div className="project-dialog-actions">
            {project.videoUrl && (
              <a
                className="button primary project-demo-button"
                href={demoUrl(project, project.videoUrl)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play size={17} />
                {sitecore.labels.watchDemo}
                <ArrowUpRight size={17} />
              </a>
            )}
            {project.modelUrl && (
              <a
                className="button primary project-demo-button"
                href={project.modelUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View model on Hugging Face
                <ArrowUpRight size={17} />
              </a>
            )}
            {project.githubUrl && (
              <a
                className="button"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} />
                GitHub
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
          <ProjectMedia project={project} />
        </article>
      )}
    </dialog>
  );
}
