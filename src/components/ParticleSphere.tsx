import { GenerativeScene } from "./GenerativeScene";
export function ParticleSphere() {
  return (
    <div className="sphere-wrap">
      <div className="sphere-ring ring-one" />
      <div className="sphere-ring ring-two" />
      <GenerativeScene
        mode="sphere"
        label="A rotating sphere of connected intelligence, responsive to your pointer"
      />
    </div>
  );
}
