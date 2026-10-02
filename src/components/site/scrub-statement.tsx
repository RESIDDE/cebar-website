"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

export interface StatementSegment {
  text: string;
  accent?: boolean;
}

function Word({
  text,
  accent,
  index,
  total,
  progress,
}: {
  text: string;
  accent?: boolean;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Words light up across the middle 80% of the pinned scroll.
  const start = 0.05 + (0.8 * index) / total;
  const end = start + 0.8 / total;
  const opacity = useTransform(progress, [start, end], [0.16, 1]);

  return (
    // .ap-scrub-word is forced to full opacity under reduced motion (site.css).
    <motion.span style={{ opacity }} className={`ap-scrub-word ${accent ? "text-ap-accent-text" : ""}`}>
      {text}{" "}
    </motion.span>
  );
}

interface ScrubStatementProps {
  id: string;
  eyebrow: string;
  segments: StatementSegment[];
  /** Supporting content under the pinned statement */
  children?: ReactNode;
}

/** A black tile whose statement pins and lights up word by word as you scroll. */
export default function ScrubStatement({ id, eyebrow, segments, children }: ScrubStatementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const words = segments.flatMap((seg) => seg.text.split(" ").map((text) => ({ text, accent: seg.accent })));

  return (
    <section aria-labelledby={id} className="ap-dark pb-[clamp(88px,12vw,160px)]">
      <div ref={ref} className="relative h-[240vh] motion-reduce:h-auto">
        <div className="sticky top-0 flex h-svh items-center motion-reduce:static motion-reduce:h-auto motion-reduce:pt-[clamp(88px,12vw,160px)]">
          <div className="ap-container">
            <h2 id={id} className="ap-eyebrow mb-8">
              {eyebrow}
            </h2>
            <p className="max-w-[920px] text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.012em]">
              {words.map((w, i) => (
                <Word key={i} {...w} index={i} total={words.length} progress={scrollYProgress} />
              ))}
            </p>
          </div>
        </div>
      </div>
      {children && <div className="ap-container">{children}</div>}
    </section>
  );
}
