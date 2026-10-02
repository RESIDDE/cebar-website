"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import NumberFlow from "@number-flow/react";
import Reveal from "@/components/site/reveal";
import { impactStats, standards } from "./data";

const COUNT_TIMING = { duration: 1400, easing: "cubic-bezier(0.28, 0.11, 0.32, 1)" };

function Stat({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <span ref={ref} className={className}>
      <NumberFlow
        value={inView ? value : 0}
        suffix="+"
        format={{ useGrouping: true }}
        locales="en-GB"
        transformTiming={COUNT_TIMING}
        spinTiming={COUNT_TIMING}
        willChange
      />
    </span>
  );
}

export default function Impact() {
  const [headline, ...rest] = impactStats;

  return (
    <section aria-labelledby="impact-title" className="ap-section bg-ap-alt">
      <div className="ap-container-wide">
        <Reveal className="mx-auto max-w-[980px] text-center">
          <p className="ap-eyebrow mb-3">Our reach</p>
          <h2 id="impact-title" className="ap-h2">
            Impact you can measure.
          </h2>
          <p className="ap-lead mx-auto mt-5 max-w-[680px]">
            From individual educators to government departments, our cross-sector work creates change at every level.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:gap-5 lg:grid-cols-4">
          <Reveal className="col-span-2 flex min-h-[320px] flex-col justify-between rounded-[28px] bg-ap-tile p-8 md:p-10 lg:row-span-2 lg:min-h-[520px]">
            <p className="ap-h4 max-w-[16ch] text-ap-ink-2">From classroom teachers to C-suite executives.</p>
            <div>
              <Stat
                value={headline.value}
                className="block text-[clamp(4.5rem,10vw,9rem)] text-ap-accent-text font-semibold leading-none tracking-[-0.03em]"
              />
              <p className="ap-h4 mt-3">{headline.label}</p>
            </div>
          </Reveal>

          {rest.map((s, i) => (
            <Reveal
              key={s.label}
              delay={0.05 * (i + 1)}
              className={`flex min-h-[180px] flex-col justify-end rounded-[28px] bg-ap-tile p-6 md:min-h-[250px] md:p-8 ${
                i === rest.length - 1 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Stat
                value={s.value}
                className="block text-[clamp(2.5rem,4.5vw,3.75rem)] font-semibold leading-none tracking-[-0.02em]"
              />
              <p className="mt-2 text-[15px] leading-[1.33] text-ap-ink-2 md:text-[17px]">{s.label}</p>
            </Reveal>
          ))}

          <Reveal
            delay={0.3}
            className="col-span-2 flex flex-col justify-between gap-8 rounded-[28px] bg-ap-tile p-8 md:flex-row md:items-end md:p-10 lg:col-span-3"
          >
            <div>
              <p className="ap-caption mb-2 font-semibold uppercase tracking-[0.06em] text-ap-ink-3">Since 2018</p>
              <p className="ap-h3 max-w-[18ch]">Three sectors. One standard of excellence.</p>
            </div>
            <dl className="flex gap-10">
              <div>
                <dt className="text-[15px] text-ap-ink-2">Based in</dt>
                <dd className="ap-h4">United Kingdom</dd>
              </div>
              <div>
                <dt className="text-[15px] text-ap-ink-2">Reach</dt>
                <dd className="ap-h4">International</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-4 md:mt-14 md:flex-row md:justify-center md:gap-6">
          <p className="ap-caption font-semibold uppercase tracking-[0.06em] text-ap-ink-3">Standards & compliance</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {standards.map((s) => (
              <li
                key={s}
                className="inline-flex items-center gap-2 rounded-full bg-ap-tile px-4 py-2 text-[14px] text-ap-ink-2"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ap-accent" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
