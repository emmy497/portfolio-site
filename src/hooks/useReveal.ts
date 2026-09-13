import { useEffect, useRef, useState } from "react";

const canAnimate = () => {
  if (typeof window === "undefined") return false;
  if (typeof IntersectionObserver === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  // Chrome stops delivering IntersectionObserver callbacks while a document
  // isn't being painted (background tab, hidden window). Animating from a
  // hidden start state there would leave the content invisible until the tab
  // is focused, so skip the animation entirely — nobody is watching it anyway.
  if (document.visibilityState === "hidden") return false;
  return true;
};

/**
 * Reveals an element once it scrolls into view.
 *
 * Starts in the *visible* state whenever we can't animate. That matters: if the
 * initial state were always hidden, anyone in one of those situations would get
 * a permanently blank page rather than a page without animation.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(() => !canAnimate());

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

    // If the tab is hidden after mount, the observer above goes quiet. Reveal
    // on the way back rather than waiting for a callback that may never come.
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") setVisible(true);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [visible]);

  return { ref, visible };
}
