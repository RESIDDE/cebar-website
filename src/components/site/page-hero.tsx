"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { reveal } from "./motion";

/** Staggered blur-to-sharp entrance used by every page's opening lines. */
export const enter = (i: number) => ({
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } },
  transition: { ...reveal, duration: 1, delay: 0.1 + i * 0.09 },
});

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Pills and links under the lead */
  actions?: ReactNode;
  align?: "center" | "left";
  /** Extra content under the heading block, e.g. a hero image */
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, lead, actions, align = "center", children }: PageHeroProps) {
  const centered = align === "center";

  return (
    <section aria-labelledby="page-title" className="bg-ap-canvas">
      <div
        className={`${centered ? "ap-container text-center" : "ap-container-wide"} pb-12 pt-[clamp(56px,9vw,112px)] md:pb-16`}
      >
        <motion.p {...enter(0)} className="ap-eyebrow mb-3">
          {eyebrow}
        </motion.p>
        <motion.h1 {...enter(1)} id="page-title" className={`ap-hero ${centered ? "mx-auto" : ""} max-w-[16ch]`}>
          {title}
        </motion.h1>
        {lead && (
          <motion.p {...enter(2)} className={`ap-lead mt-6 max-w-[640px] ${centered ? "mx-auto" : ""}`}>
            {lead}
          </motion.p>
        )}
        {actions && (
          <motion.div
            {...enter(3)}
            className={`mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 ${centered ? "justify-center" : ""}`}
          >
            {actions}
          </motion.div>
        )}
      </div>
      {children}
    </section>
  );
}
