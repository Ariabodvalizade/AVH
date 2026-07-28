"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver per page for both motion primitives:
 *  - `.reveal` blocks get `.is-in` (fade/translate entrance)
 *  - `.media-rest[data-reveal="in-view"]` gets `.in-view` (grayscale → color)
 * Elements are observed once and unobserved after entering.
 */
export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add(el.classList.contains("reveal") ? "is-in" : "in-view");
          io.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );
    const els = document.querySelectorAll(".reveal, .media-rest[data-reveal='in-view']");
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
