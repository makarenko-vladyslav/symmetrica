"use client";

/**
 * Smooth scrolling, mounted once in the layout.
 *
 * Two guards, both deliberate. Touch platforms already have momentum scrolling
 * the OS has tuned — overriding it fights the platform and is where "smooth
 * scroll" earns its bad name. And under reduced motion, easing the whole page is
 * precisely the movement the setting asks us to stop.
 *
 * `anchors` routes in-page links through the same easing, so a nav click glides
 * instead of teleporting while everything else glides.
 */

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    const skip =
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (skip) return;

    const lenis = new Lenis({ autoRaf: true, anchors: true });
    return () => lenis.destroy();
  }, []);

  return null;
}

/**
 * Also the default export.
 *
 * The prompt shows a named import and the sanitiser injects one, but the model
 * writes `import SmoothScroll from "@/components/smooth-scroll"` often enough
 * that it shipped: a default import of a module without one is `undefined`, and
 * the static export died with "Element type is invalid" on every page. One line
 * here costs nothing and removes the whole class of failure.
 */
export default SmoothScroll;
