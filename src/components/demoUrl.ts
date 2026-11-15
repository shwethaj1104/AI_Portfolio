import type { Project } from "../data/sitecore";

export function demoUrl(project: Project, video: string) {
  const params = new URLSearchParams({ demo: project.id });
  const mediaIndex = project.media.findIndex((item) => item.videoUrl === video);
  if (mediaIndex >= 0) params.set("media", String(mediaIndex));
  return `${import.meta.env.BASE_URL}?${params}`;
}
