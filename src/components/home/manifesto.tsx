"use client";

import Reveal from "@/components/site/reveal";
import ScrubStatement from "@/components/site/scrub-statement";

export default function Manifesto() {
  return (
    <ScrubStatement
      id="manifesto-title"
      eyebrow="Who we are"
      segments={[
        {
          text: "We empower educators. We deliver with absolute excellence. We drive transformative impact. We shape organisations for growth. We are",
        },
        { text: "CEBAR Group.", accent: true },
      ]}
    >
      <Reveal className="mt-14 grid gap-8 border-t border-ap-hairline pt-10 md:grid-cols-2 md:gap-16">
        <p className="ap-body text-[clamp(1.0625rem,1.5vw,1.3125rem)] leading-[1.38] text-ap-ink-2">
          CEBAR Group is a UK-based education and training consultancy on a mission to transform how organisations
          learn, grow and lead.
        </p>
        <p className="ap-body text-[clamp(1.0625rem,1.5vw,1.3125rem)] leading-[1.38] text-ap-ink-2">
          Founded in 2018, we deliver measurable impact across the{" "}
          <span className="text-ap-ink">education, corporate and government</span> sectors — from classroom teachers to
          C-suite executives.
        </p>
      </Reveal>
    </ScrubStatement>
  );
}
