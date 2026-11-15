import { useEffect, useRef } from "react";
export type SceneMode =
  "sphere" | "torus" | "wave" | "constellation" | "helix" | "ambient";
interface Props {
  mode?: SceneMode;
  className?: string;
  label?: string;
}
/** Original mathematical particle fields. No models, network calls, or WebGL required. */
export function GenerativeScene({
  mode = "sphere",
  className = "",
  label,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;
    let w = 500,
      h = 500,
      frame = 0,
      last = 0,
      time = 0,
      visible = true,
      disposed = false;
    let mouseX = 0,
      mouseY = 0,
      targetX = 0,
      targetY = 0;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const ambient = mode === "ambient";
    const count = ambient ? 65 : mode === "wave" ? 1800 : 1500;
    const points = Array.from({ length: count }, (_, i) => {
      const y = 1 - (2 * i) / (count - 1),
        r = Math.sqrt(1 - y * y),
        a = i * Math.PI * (3 - Math.sqrt(5));
      return { x: Math.cos(a) * r, y, z: Math.sin(a) * r, px: 0, py: 0 };
    });
    let primary = "#176c62",
      secondary = "#bc6443";
    const resize = () => {
      const rect = el.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(devicePixelRatio, 1.75);
      el.width = Math.round(w * dpr);
      el.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const styles = getComputedStyle(el);
      primary = styles.getPropertyValue("--scene-primary").trim() || "#176c62";
      secondary =
        styles.getPropertyValue("--scene-secondary").trim() || "#bc6443";
      if (reduced.matches) draw(0);
      else schedule();
    };
    function draw(now: number) {
      frame = 0;
      if (disposed) return;
      if (now - last < 1000 / 40 && !reduced.matches) {
        schedule();
        return;
      }
      last = now;
      ctx!.clearRect(0, 0, w, h);
      if (w === 0 || h === 0) return;
      mouseX += (targetX - mouseX) * 0.035;
      mouseY += (targetY - mouseY) * 0.035;
      const t = reduced.matches ? 0.7 : time;
      const radius = Math.min(w, h) * 0.35;
      if (ambient) {
        for (let i = 0; i < count; i++) {
          const p = points[i];
          p.px = ((i * 0.6180339887) % 1) * w + Math.sin(t * 0.23 + i) * 24;
          p.py = ((i * 0.4142135623) % 1) * h + Math.cos(t * 0.17 + i) * 24;
        }
        ctx!.strokeStyle = primary;
        ctx!.lineWidth = 0.65;
        for (let i = 0; i < count; i++) {
          const p = points[i];
          ctx!.globalAlpha = 0.36;
          ctx!.fillStyle = i % 5 === 0 ? secondary : primary;
          ctx!.beginPath();
          ctx!.arc(p.px, p.py, i % 6 === 0 ? 2.4 : 1.2, 0, Math.PI * 2);
          ctx!.fill();
          for (let j = i + 1; j < Math.min(i + 7, count); j++) {
            const q = points[j],
              dist = Math.hypot(p.px - q.px, p.py - q.py);
            if (dist < 150) {
              ctx!.globalAlpha = (1 - dist / 150) * 0.18;
              ctx!.beginPath();
              ctx!.moveTo(p.px, p.py);
              ctx!.lineTo(q.px, q.py);
              ctx!.stroke();
            }
          }
        }
      } else {
        const ry = t * 0.15 + mouseX * 0.3,
          rx = -0.2 + mouseY * 0.22;
        const cy = Math.cos(ry),
          sy = Math.sin(ry),
          cx = Math.cos(rx),
          sx = Math.sin(rx);
        for (let i = 0; i < count; i++) {
          const p = points[i];
          let x = p.x,
            y = p.y,
            z = p.z;
          if (mode === "torus") {
            const a = ((i % 75) / 75) * Math.PI * 2,
              b = (Math.floor(i / 75) / 20) * Math.PI * 2;
            const r = 0.76 + 0.29 * Math.cos(b);
            x = r * Math.cos(a);
            y = 0.29 * Math.sin(b);
            z = r * Math.sin(a);
            const ty = y;
            y = ty * 0.65 - z * 0.65;
            z = ty * 0.65 + z * 0.65;
          }
          if (mode === "wave") {
            const col = i % 60,
              row = Math.floor(i / 60);
            x = (col / 59 - 0.5) * 3.2;
            z = (row / 29 - 0.5) * 2;
            y =
              Math.sin(x * 2.2 + t) * 0.19 + Math.cos(z * 2.4 + t * 0.65) * 0.2;
          }
          if (mode === "helix") {
            const a = (i / count) * Math.PI * 13 + t * 0.18;
            const band = i % 2 === 0 ? 0 : Math.PI;
            x = Math.cos(a + band) * 0.58;
            z = Math.sin(a + band) * 0.58;
            y = (i / count - 0.5) * 2.5;
          }
          if (mode === "constellation") {
            const ring = i % 3,
              a = (i / count) * Math.PI * 2 * 17;
            x = Math.cos(a) * (ring * 0.25 + 0.55);
            y = Math.sin(a) * (ring * 0.25 + 0.55);
            z = Math.sin(a * 3 + t * 0.4) * 0.16;
            const ty = y;
            y = ty * Math.cos(ring * 0.8) - z * Math.sin(ring * 0.8);
            z = ty * Math.sin(ring * 0.8) + z * Math.cos(ring * 0.8);
          }
          const nx = x * cy + z * sy,
            nz = -x * sy + z * cy,
            ny = y * cx - nz * sx,
            depth = y * sx + nz * cx;
          const scale = 1 / (1 - depth * 0.13);
          const px = w / 2 + nx * radius * scale,
            py = h / 2 + ny * radius * scale;
          p.px = px;
          p.py = py;
          ctx!.globalAlpha = Math.max(0.13, Math.min(0.9, 0.45 + depth * 0.35));
          ctx!.fillStyle = i % 7 === 0 ? secondary : primary;
          ctx!.beginPath();
          ctx!.arc(
            px,
            py,
            Math.max(0.45, (0.8 + depth * 0.45) * scale),
            0,
            Math.PI * 2,
          );
          ctx!.fill();
        }
        if (mode === "helix" || mode === "constellation") {
          ctx!.strokeStyle = primary;
          ctx!.lineWidth = 0.5;
          ctx!.globalAlpha = 0.12;
          for (let i = 0; i < count - 28; i += 28) {
            ctx!.beginPath();
            ctx!.moveTo(points[i].px, points[i].py);
            ctx!.lineTo(points[i + 28].px, points[i + 28].py);
            ctx!.stroke();
          }
        }
      }
      ctx!.globalAlpha = 1;
      time += 0.021;
      schedule();
    }
    function schedule() {
      if (
        !frame &&
        !disposed &&
        visible &&
        !document.hidden &&
        !reduced.matches
      )
        frame = requestAnimationFrame(draw);
    }
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          if (reduced.matches) draw(0);
          else schedule();
        } else stop();
      },
      { rootMargin: "60px" },
    );
    const resizeObserver = new ResizeObserver(resize);
    window.addEventListener("portfolio-palette-change", resize);
    resizeObserver.observe(el);
    observer.observe(el);
    const visibility = () => {
      if (document.hidden) stop();
      else schedule();
    };
    const motion = () => {
      stop();
      draw(0);
    };
    const pointer = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      targetX = (e.clientX - r.left) / r.width - 0.5;
      targetY = (e.clientY - r.top) / r.height - 0.5;
    };
    const leave = () => {
      targetX = 0;
      targetY = 0;
    };
    el.addEventListener("pointermove", pointer);
    el.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", motion);
    resize();
    schedule();
    return () => {
      disposed = true;
      stop();
      window.removeEventListener("portfolio-palette-change", resize);
      resizeObserver.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", motion);
      el.removeEventListener("pointermove", pointer);
      el.removeEventListener("pointerleave", leave);
    };
  }, [mode]);
  return (
    <canvas
      ref={ref}
      className={`generative-scene scene-${mode} ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
