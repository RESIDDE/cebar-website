"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Reveal from "./reveal";

const statements = [
  "We empower educators.",
  "We deliver with absolute excellence.",
  "We drive transformative impact.",
  "We shape organisations for growth.",
];
const signature = "We are CEBAR Group.";

const words = [
  ...statements.join(" ").split(" ").map((text) => ({ text, accent: false })),
  ...signature.split(" ").map((text, i) => ({ text, accent: i >= 2 })),
];

function Word({
  text,
  accent,
  index,
  progress,
}: {
  text: string;
  accent: boolean;
  index: number;
  progress: MotionValue<number>;
}) {
  // Words light up across the middle 80% of the pinned scroll.
  const start = 0.05 + (0.8 * index) / words.length;
  const end = start + 0.8 / words.length;
  const opacity = useTransform(progress, [start, end], [0.16, 1]);

  return (
    // .ap-scrub-word is forced to full opacity under reduced motion (home.css).
    <motion.span style={{ opacity }} className={`ap-scrub-word ${accent ? "text-ap-accent-text" : ""}`}>
      {text}{" "}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section aria-labelledby="manifesto-title" className="ap-dark pb-[clamp(88px,12vw,160px)]">
      {/* The statement pins while it lights up, word by word. */}
      <div ref={ref} className="relative h-[240vh] motion-reduce:h-auto">
        <div className="sticky top-0 flex h-svh items-center motion-reduce:static motion-reduce:h-auto motion-reduce:pt-[clamp(88px,12vw,160px)]">
          <div className="ap-container">
            <h2 id="manifesto-title" className="ap-eyebrow mb-8">
              Who we are
            </h2>
            <p className="max-w-[920px] text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.012em]">
              {words.map((w, i) => (
                <Word key={i} {...w} index={i} progress={scrollYProgress} />
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="ap-container">
        <Reveal className="mt-14 grid gap-8 border-t border-ap-hairline pt-10 md:grid-cols-2 md:gap-16">
          <p className="ap-body text-[clamp(1.0625rem,1.5vw,1.3125rem)] leading-[1.38] text-ap-ink-2">
            CEBAR Group is a UK-based education and training consultancy on a mission to transform how organisations
            learn, grow and lead.
          </p>
          <p className="ap-body text-[clamp(1.0625rem,1.5vw,1.3125rem)] leading-[1.38] text-ap-ink-2">
            Founded in 2018, we deliver measurable impact across the{" "}
            <span className="text-ap-ink">education, corporate and government</span> sectors — from classroom teachers
            to C-suite executives.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
