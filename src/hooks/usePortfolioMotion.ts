import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import type { DesignId } from "../data/sitecore";
gsap.registerPlugin(ScrollTrigger);
export function usePortfolioMotion(design: DesignId) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    let disposed = false;
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        duration: 0.95,
        smoothWheel: true,
        anchors: { offset: -112 },
        prevent: (node) =>
          !!node.closest(
            ".project-dialog, .design-menu, .project-rail, .projects-carousel-track",
          ),
      });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      const context = gsap.context(() => {
        gsap.fromTo(
          ".hero-enter",
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.11,
            ease: "power3.out",
            clearProps: "transform,opacity",
          },
        );
        gsap.utils
          .toArray<HTMLElement>(
            ".section-heading, .reveal, .project-card, .experience-row, .skill-groups>div, .credential",
          )
          .forEach((el) => {
            gsap.fromTo(
              el,
              { y: 28, opacity: 0.15 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: "power2.out",
                scrollTrigger: { trigger: el, start: "top 93%", once: true },
                clearProps: "transform,opacity",
              },
            );
          });
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) =>
          gsap.fromTo(
            el,
            { y: -22 },
            {
              y: 22,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          ),
        );
      });
      const observer = new ResizeObserver(() => ScrollTrigger.refresh());
      const main = document.querySelector("main");
      if (main) observer.observe(main);
      document.fonts.ready.then(() => {
        if (!disposed) ScrollTrigger.refresh();
      });
      return () => {
        observer.disconnect();
        context.revert();
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });
    return () => {
      disposed = true;
      media.revert();
    };
  }, [design]);
}
