import { GenerativeScene } from "./GenerativeScene";
import type { SceneMode } from "./GenerativeScene";
export function SectionAtmosphere({
  mode = "wave",
  align = "right",
}: {
  mode?: SceneMode;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`section-atmosphere atmosphere-${align}`}
      aria-hidden="true"
    >
      <GenerativeScene mode={mode} />
    </div>
  );
}
