"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import Reveal from "./reveal";
import { snappy } from "./motion";

const VIDEO_SRC = "/weekly%20politics%20interview%20(3).mp4";

const partners = [
  {
    name: "Wema Bank",
    role: "Headline sponsor, AEC 2026",
    copy: "Financial solutions and partnership benefits tailored for school owners and educators.",
    logo: "/wema%20bank%20logo.png",
    links: [
      { label: "View the Wema Bank offer", href: "/Wema%20Ad%20pdf.pdf" },
      { label: "Watch the film", href: "https://www.youtube.com/watch?v=Plr0OTzJ3xg" },
    ],
  },
  {
    name: "Sydani Group",
    role: "Sponsor",
    copy: "Committed to fostering innovation and empowering education across Nigeria.",
    logo: "/sydani%20group.jpeg",
    links: [],
  },
];

function PressVideo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    setPlaying(true);
    const v = videoRef.current;
    if (!v) return;
    v.controls = true;
    v.currentTime = 0;
    void v.play();
    v.focus();
  };

  return (
    <div className="ap-dark relative h-full min-h-[420px] overflow-hidden rounded-[28px]">
      {/* #t=120 shows Carol Barlow on the studio screen as the poster frame */}
      <video
        ref={videoRef}
        src={`${VIDEO_SRC}#t=120`}
        preload="metadata"
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-label="Weekly Politics interview featuring CEBAR Group"
        onEnded={() => setPlaying(false)}
      />
      <AnimatePresence>
        {!playing && (
          <motion.div
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={snappy}
            className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/20 to-black/10 p-7 md:p-10"
          >
            <p className="ap-caption font-semibold uppercase tracking-[0.06em] text-white/70">In the press</p>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-[15px] text-white/70">As featured on</p>
                <h3 className="ap-h3 mt-1 text-white">Weekly Politics</h3>
                <p className="mt-3 max-w-[42ch] text-[15px] leading-[1.47] text-white/75">
                  An exclusive conversation on our educational initiatives, the power of collaboration, and the future
                  of learning in Nigeria.
                </p>
              </div>
              <button
                type="button"
                onClick={play}
                aria-label="Play the Weekly Politics interview"
                className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/75 text-black backdrop-blur-xl backdrop-saturate-150 transition-[transform,background-color] duration-200 hover:bg-white/90 active:scale-95 md:h-[72px] md:w-[72px]"
              >
                <Play className="ml-1 h-6 w-6 fill-current" strokeWidth={0} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PartnersPress() {
  return (
    <section aria-labelledby="partners-title" className="ap-section bg-ap-alt">
      <div className="ap-container-wide">
        <Reveal className="mx-auto max-w-[980px] text-center">
          <p className="ap-eyebrow mb-3">Partners & press</p>
          <h2 id="partners-title" className="ap-h2">
            In good company.
          </h2>
          <p className="ap-lead mx-auto mt-5 max-w-[680px]">
            Backed by partners who share our commitment to education, and featured on national television.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-3 md:mt-20 md:gap-5 lg:grid-cols-12">
          <div className="grid gap-3 md:grid-cols-2 md:gap-5 lg:col-span-5 lg:grid-cols-1">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={0.06 * i} className="flex flex-col rounded-[28px] bg-ap-tile p-7 md:p-9">
                <div className="flex items-center gap-5">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[18px] bg-white p-2 shadow-[0_0_0_1px_var(--ap-hairline)]">
                    <Image src={p.logo} alt={`${p.name} logo`} fill sizes="64px" className="object-contain p-1.5" />
                  </div>
                  <div>
                    <h3 className="ap-h4">{p.name}</h3>
                    <p className="text-[14px] text-ap-ink-2">{p.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-ap-ink-2">{p.copy}</p>
                {p.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="ap-link">
                        {l.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12} className="lg:col-span-7">
            <PressVideo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
