import type { MotionStyle } from "framer-motion";

/**
 * Shared motion tokens for the landing page.
 * Springs are critically damped (bounce 0): nothing here is thrown by a flick,
 * so nothing should overshoot.
 */
export const EASE_APPLE = [0.28, 0.11, 0.32, 1] as const;

export const reveal = { type: "spring", bounce: 0, duration: 0.8 } as const;
export const snappy = { type: "spring", bounce: 0, duration: 0.4 } as const;

/** Bind motion values to CSS custom properties, so CSS media queries decide where they apply. */
export const cssVars = (vars: Record<`--${string}`, unknown>) => vars as MotionStyle;
