import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveals an element once it scrolls into view.
 *
 * Starts in the *visible* state whenever we can't animate — no
 * IntersectionObserver, or the visitor asked for reduced motion. That matters:
 * if the initial state were always hidden, anyone in those situations would get
 * a permanently blank page instead of a page without animation.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(
    () =>
      typeof IntersectionObserver === "undefined" || prefersReducedMotion(),
  );

  useEffect(() => {
    if (visible) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            // One-shot: the element doesn't re-hide when scrolled back past.
            observer.unobserve(entry.target);
          }
        }
      },
      // Fires slightly before the element is fully on screen, so the motion
      // finishes as it settles rather than starting late.
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return { ref, visible };
}
