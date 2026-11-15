import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import type { Project } from "../data/sitecore";
import { sitecore } from "../data/sitecore";
import { assetUrl } from "./ProjectMedia";

export function VideoDemo() {
  const params = new URLSearchParams(window.location.search);
  const project: Project | undefined = sitecore.projects.find(
    (item) => item.id === params.get("demo"),
  );
  const mediaIndex = Number(params.get("media") ?? -1);
  const video = project?.media[mediaIndex]?.videoUrl || project?.videoUrl;
  const [failed, setFailed] = useState(false);

  return (
    <main className="video-demo-page">
      <a className="video-demo-back" href={import.meta.env.BASE_URL}>
        <ArrowLeft size={18} /> Back to portfolio
      </a>
      <h1>{project?.shortTitle || "Project demo"}</h1>
      {video ? (
        <>
          <video
            className="project-demo-player"
            src={assetUrl(video)}
            poster={
              project?.media[0] ? assetUrl(project.media[0].src) : undefined
            }
            controls
            autoPlay
            playsInline
            preload="metadata"
            onError={() => setFailed(true)}
            aria-label={`${project?.shortTitle} project demo`}
          />
          {failed && (
            <p role="alert">
              This video could not be played. Please reload the page to try
              again.
            </p>
          )}
        </>
      ) : (
        <p>This project demo is unavailable.</p>
      )}
    </main>
  );
}
