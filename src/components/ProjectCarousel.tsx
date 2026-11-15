import { Children, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ProjectCarousel({
  children,
  count,
}: {
  children: ReactNode;
  count: number;
}) {
  const slides = Children.toArray(children);
  const [compact, setCompact] = useState(
    () => matchMedia("(max-width: 1000px)").matches,
  );
  useEffect(() => {
    const query = matchMedia("(max-width: 1000px)");
    const update = () => setCompact(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const [center, setCenter] = useState(() => (count > 1 ? 1 : 0));
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function move(direction: number) {
    if (count < 2) return;
    setCenter((previous) => (previous + direction + count) % count);
  }

  return (
    <div
      className="projects-carousel projects-carousel-centered"
      role="region"
      aria-roledescription="carousel"
      aria-label="Projects"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <button
        className="project-side-arrow project-arrow-left"
        onClick={() => move(-1)}
        disabled={count < 2}
        aria-label="Previous project"
        aria-controls="project-carousel-track"
      >
        <ArrowLeft size={22} />
      </button>
      <div
        className="projects-centered-track"
        id="project-carousel-track"
        onTouchStart={(event) => {
          const touch = event.touches[0];
          touchStart.current = { x: touch.clientX, y: touch.clientY };
        }}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          touchStart.current = null;
          if (!start) return;
          const touch = event.changedTouches[0];
          const distance = touch.clientX - start.x;
          if (
            Math.abs(distance) > 45 &&
            Math.abs(distance) > Math.abs(touch.clientY - start.y) * 1.3
          )
            move(distance < 0 ? 1 : -1);
        }}
      >
        {slides.map((slide, index) => {
          const half = Math.floor(count / 2);
          const offset = ((index - center + count + half) % count) - half;
          const visible = compact ? offset === 0 : Math.abs(offset) <= 1;
          return (
            <div
              key={index}
              className={`project-carousel-slide${offset === 0 ? " is-center" : ""}${visible ? "" : " is-outside"}`}
              style={{ "--slide-offset": offset } as CSSProperties}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              aria-hidden={!visible}
              inert={!visible}
            >
              {slide}
            </div>
          );
        })}
      </div>
      <button
        className="project-side-arrow project-arrow-right"
        onClick={() => move(1)}
        disabled={count < 2}
        aria-label="Next project"
        aria-controls="project-carousel-track"
      >
        <ArrowRight size={22} />
      </button>
      <span
        className="carousel-announcement"
        aria-live="polite"
        aria-atomic="true"
      >
        Project {center + 1} of {count} centered
      </span>
    </div>
  );
}
