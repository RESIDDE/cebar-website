"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers } from "@/components/sections/team";
import { cdnLoader } from "./image-loader";
import Reveal from "./reveal";

export default function TeamCarousel() {
  const railRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setAtStart(rail.scrollLeft <= 2);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2);
  }, []);

  useEffect(() => {
    sync();
    const rail = railRef.current;
    if (!rail) return;
    const ro = new ResizeObserver(sync);
    ro.observe(rail);
    return () => ro.disconnect();
  }, [sync]);

  const page = (dir: 1 | -1) => {
    const rail = railRef.current;
    const card = rail?.querySelector("li");
    if (!rail || !card) return;
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
    rail.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section id="team" aria-labelledby="team-title" className="ap-section bg-ap-canvas">
      <div className="ap-container-wide">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[720px]">
            <p className="ap-eyebrow mb-3">Leadership</p>
            <h2 id="team-title" className="ap-h2">
              The people behind the mission.
            </h2>
            <p className="ap-lead mt-5">Educators, HR specialists and consultants united by a single purpose.</p>
          </div>
          <Link href="/our-team" className="ap-link shrink-0">
            Meet the full team
          </Link>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <ul
          ref={railRef}
          onScroll={sync}
          aria-label="Leadership team"
          className="ap-hrail ap-rail-inset ap-no-scrollbar mt-12 gap-4 md:mt-16 md:gap-5"
        >
          {teamMembers.map((m) => (
            <li
              key={m.name}
              className="group relative aspect-[3/4] w-[74vw] overflow-hidden rounded-[28px] bg-ap-alt sm:w-[300px] lg:w-[340px]"
            >
              <Image
                loader={cdnLoader}
                src={m.image}
                alt={m.name}
                fill
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 74vw"
                className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.28,0.11,0.32,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 pt-24">
                <h3 className="ap-h4 text-white">{m.name}</h3>
                <p className="mt-1 text-[14px] leading-[1.35] text-white/75">{m.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="ap-container-wide mt-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => page(-1)}
          disabled={atStart}
          aria-label="Previous team member"
          className="ap-icon-btn"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={() => page(1)}
          disabled={atEnd}
          aria-label="Next team member"
          className="ap-icon-btn"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
