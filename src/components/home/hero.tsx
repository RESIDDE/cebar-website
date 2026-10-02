"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { cdnLoader } from "@/components/site/image-loader";
import { cssVars, reveal } from "@/components/site/motion";
import { HERO_IMAGE } from "./data";

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Progress runs while the image stage is pinned (desktop only — see .ap-hero-* in home.css).
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const clip = useTransform(
    scrollYProgress,
    [0, 0.55],
    ["inset(5% 9% 5% 9% round 28px)", "inset(0% 0% 0% 0% round 0px)"]
  );
  const imgScale = useTransform(scrollYProgress, [0, 0.55], [1.12, 1]);
  const capOpacity = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const capY = useTransform(scrollYProgress, [0.5, 0.75], ["24px", "0px"]);

  const enter = (i: number) => ({
    initial: { opacity: 0, y: 28, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } },
    transition: { ...reveal, duration: 1, delay: 0.1 + i * 0.09 },
  });

  return (
    <section aria-labelledby="hero-title" className="relative bg-ap-canvas">
      <div className="ap-container pb-12 pt-[clamp(56px,9vw,112px)] text-center md:pb-16">
        <motion.p {...enter(0)} className="ap-eyebrow mb-3">
          CEBAR Group
        </motion.p>
        <h1 id="hero-title" className="ap-hero">
          <motion.span {...enter(1)} className="block">
            Education,
          </motion.span>
          <motion.span {...enter(2)} className="ap-gradient-text block pb-[0.08em]">
            elevated.
          </motion.span>
        </h1>
        <motion.p {...enter(3)} className="ap-lead mx-auto mt-6 max-w-[640px]">
          Training and consultancy for educators, organisations and governments — in the UK and around the world.
        </motion.p>
        <motion.div {...enter(4)} className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link href="/contact" className="ap-pill">
            Book a consultation
          </Link>
          <Link href="/services" className="ap-link text-[17px]">
            Explore services
          </Link>
        </motion.div>
      </div>

      <div ref={trackRef} className="ap-hero-track">
        <div className="ap-hero-stage">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, duration: 1.2, delay: 0.45 }}
            className="ap-hero-frame"
            style={cssVars({ "--clip": clip })}
          >
            <motion.div className="ap-hero-img absolute inset-0" style={cssVars({ "--img-scale": imgScale })}>
              <Image
                loader={cdnLoader}
                src={HERO_IMAGE}
                alt="Four CEBAR team members in branded shirts walking arm in arm"
                fill
                priority
                sizes="(min-width: 768px) 100vw, 92vw"
                className="object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
            <motion.p
              className="ap-hero-caption ap-h3 absolute inset-x-0 bottom-[7%] px-6 text-center text-white"
              style={cssVars({ "--cap-opacity": capOpacity, "--cap-y": capY })}
            >
              Trusted by 5,000+ educators
              <br className="hidden sm:block" /> and professionals.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
