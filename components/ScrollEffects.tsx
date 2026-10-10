"use client";

import { useEffect } from "react";

/**
 * Scroll-effecten onder de hero.
 * - Elementen met .rv die nog onder de vouw staan, schuiven rustig in beeld.
 *   Wat al zichtbaar is bij het laden blijft staan, dus er knippert niets.
 * - De polijst-schaal ([data-gauge]) loopt op met de scroll.
 * Zonder JavaScript of met prefers-reduced-motion staat alles direct klaar.
 */
export default function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Reveals
    let observer: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      const fold = window.innerHeight * 0.92;
      const pending = Array.from(document.querySelectorAll<HTMLElement>(".rv")).filter(
        (el) => el.getBoundingClientRect().top > fold
      );
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.remove("is-pending");
            observer?.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -10% 0px" }
      );
      for (const el of pending) {
        el.classList.add("is-pending");
        observer.observe(el);
      }
    }

    // Polijst-schaal
    const gauges = Array.from(document.querySelectorAll<HTMLElement>("[data-gauge]"));
    gauges.forEach((g) => g.setAttribute("data-live", ""));

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const gauge of gauges) {
        const box = gauge.getBoundingClientRect();
        const steps = Array.from(gauge.querySelectorAll<HTMLElement>("[data-step]"));
        const horizontal = steps.length > 1 && steps[0].offsetTop === steps[1].offsetTop;
        const span = horizontal ? vh * 0.4 : box.height;
        const fill = Math.min(1, Math.max(0, (vh * 0.8 - box.top) / span));
        gauge.style.setProperty("--fill", fill.toFixed(3));

        for (const step of steps) {
          const at = horizontal
            ? step.offsetLeft / gauge.offsetWidth
            : step.offsetTop / gauge.offsetHeight;
          step.classList.toggle("is-lit", fill > at || fill === 1);
        }
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return null;
}
