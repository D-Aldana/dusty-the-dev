/* Entry animations on this page all run from a hidden state to the element's
   natural one, so skipping them leaves content visible rather than blank. */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
