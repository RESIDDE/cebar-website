"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type FocusEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { cebarEvents } from "@/components/sections/upcoming-events";
import { cdnLoader } from "./image-loader";
import Reveal from "./reveal";
import { cssVars } from "./motion";
import { wixOriginal } from "./data";

const PINNED_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

// The 2026 Wix flyer is only 526px wide; the local copy of the same programme is 1950px.
const imageFor: Record<string, { src: string; position?: string }> = {
  "aec-2026": { src: "/ait%20interview.jpeg", position: "object-top" },
};

const SMALL_WORDS = new Set(["in", "of", "for", "and", "the", "a"]);
const titleCase = (s: string) =>
  s
    .toLowerCase()
    .split(" ")
    .map((w, i) => (i > 0 && SMALL_WORDS.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");

export default function EventsHighlights() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLUListElement>(null);
  const lenis = useLenis();

  // How far the rail must travel sideways; vertical scroll maps to it 1:1.
  const [distance, setDistance] = useState(0);
  const distanceMv = useMotionValue(0);

  useEffect(() => {
    const rail = railRef.current;
    const stage = stageRef.current;
    if (!rail || !stage) return;
    const measure = () => {
      const d = Math.max(0, rail.offsetWidth - stage.clientWidth);
      setDistance(d);
      distanceMv.set(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(rail);
    ro.observe(stage);
    return () => ro.disconnect();
  }, [distanceMv]);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const railX = useTransform(() => `${-scrollYProgress.get() * distanceMv.get()}px`);

  // Keyboard users: bring a focused card into view by scrolling the page to the matching point.
  const onCardFocus = useCallback(
    (e: FocusEvent<HTMLLIElement>) => {
      if (!window.matchMedia(PINNED_QUERY).matches) return;
      const track = trackRef.current;
      const rail = railRef.current;
      const stage = stageRef.current;
      if (!track || !rail || !stage || distance === 0) return;
      stage.scrollLeft = 0; // undo the browser's own focus scroll on the clipped stage
      const inset = parseFloat(getComputedStyle(rail).paddingLeft);
      const p = Math.min(1, Math.max(0, (e.currentTarget.offsetLeft - inset) / distance));
      const top = track.getBoundingClientRect().top + window.scrollY + p * distance;
      if (lenis) lenis.scrollTo(top);
      else window.scrollTo({ top });
    },
    [distance, lenis]
  );

  return (
    <section id="events" aria-labelledby="events-title" className="ap-dark pt-[clamp(88px,12vw,160px)]">
      <div className="ap-container-wide">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px]">
            <p className="ap-eyebrow mb-3">Abuja Educators Conference</p>
            <h2 id="events-title" className="ap-h2">
              A conference that keeps growing.
            </h2>
            <p className="ap-lead mt-5">
              Each year, school owners, teachers and leaders gather for masterclasses, policy and partnership.
            </p>
          </div>
          <Link href="/events" className="ap-link shrink-0">
            See all events
          </Link>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="ap-hrail-track"
        style={{ "--track-h": `calc(100svh + ${distance}px)` } as CSSProperties}
      >
        <div ref={stageRef} className="ap-hrail-stage pt-12 lg:pt-0">
          <motion.ul
            ref={railRef}
            className="ap-hrail ap-rail-inset ap-no-scrollbar gap-4 md:gap-5"
            style={cssVars({ "--rail-x": railX })}
          >
            {cebarEvents.map((evt, i) => {
              const year = evt.title.match(/\d{4}/)?.[0] ?? "";
              const img = imageFor[evt.id] ?? { src: wixOriginal(evt.image) };
              return (
                <li
                  key={evt.id}
                  onFocus={onCardFocus}
                  className="flex w-[84vw] flex-col overflow-hidden rounded-[28px] bg-ap-tile sm:w-[64vw] lg:grid lg:h-[72svh] lg:max-h-[760px] lg:w-[min(78vw,1100px)] lg:grid-cols-[5fr_6fr]"
                >
                  <div className="relative aspect-[4/3] lg:order-2 lg:aspect-auto">
                    <Image
                      loader={img.src.startsWith("http") ? cdnLoader : undefined}
                      src={img.src}
                      alt={`${evt.title}`}
                      fill
                      sizes="(min-width: 1024px) 45vw, 84vw"
                      className={`object-cover ${img.position ?? "object-center"}`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-10">
                    <p className="ap-caption font-semibold uppercase tracking-[0.06em] text-ap-ink-3">
                      Edition {String(cebarEvents.length - i).padStart(2, "0")}
                    </p>
                    <p
                      aria-hidden
                      className={`mt-3 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.035em] ${
                        i === 0 ? "ap-gradient-text" : "text-ap-ink"
                      }`}
                    >
                      {year}
                    </p>
                    <div className="mt-auto pt-10">
                      <h3 className="ap-h4">
                        <span className="sr-only">{evt.title}: </span>
                        {titleCase(evt.theme)}
                      </h3>
                      <p className="mt-3 line-clamp-3 max-w-[46ch] text-[15px] leading-[1.47] text-ap-ink-2">
                        {evt.description}
                      </p>
                      <p className="mt-4 text-[14px] text-ap-ink-3">{evt.location}</p>
                      <a
                        href={evt.registerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ap-link mt-5 text-[17px]"
                      >
                        View event<span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
            <li
              onFocus={onCardFocus}
              className="flex w-[70vw] flex-col justify-end rounded-[28px] border border-ap-hairline p-7 sm:w-[44vw] md:p-10 lg:h-[72svh] lg:max-h-[760px] lg:w-[min(34vw,460px)]"
            >
              <p className="ap-h3">Workshops, masterclasses and conferences all year round.</p>
              <Link href="/events" className="ap-link mt-6 text-[17px]">
                Explore all events
              </Link>
            </li>
          </motion.ul>

          <div className="ap-hrail-progress ap-container-wide mt-8">
            <div className="h-[2px] overflow-hidden rounded-full bg-ap-hairline">
              <motion.div className="h-full origin-left bg-ap-ink" style={{ scaleX: scrollYProgress }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
