"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Whether a black ".ap-dark" tile sits under a floating bar, sampled at `probeY` px from the top.
 * Bars switch to a dark material there, so light glass never turns muddy grey over black.
 */
export function useOverDark(bar: RefObject<HTMLElement | null>, probeY: number) {
  const [dark, setDark] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const probe = useCallback(() => {
    const under = document.elementsFromPoint(window.innerWidth / 2, probeY);
    setDark(under.some((el) => !bar.current?.contains(el) && el.closest(".ap-dark")));
  }, [bar, probeY]);

  useMotionValueEvent(scrollY, "change", probe);
  // A new page may start under a different material.
  useEffect(probe, [probe, pathname]);

  return dark;
}
