"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

const USE_HOOK_IN_CHILD = (scrollYProgress: MotionValue<number>, start: number, end: number, fromValue: number, toValue: number) => {
  return useTransform(scrollYProgress, [start, end], [fromValue, toValue]);
};

const PhaseOne = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.20, 0.28], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.08, 0.20, 0.28], [0.95, 1, 1, 1.04]);
  const y = useTransform(scrollYProgress, [0, 0.08, 0.20, 0.28], [40, 0, 0, -40]);

  return (
    <motion.div 
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-[5vw]"
    >
      <span className="block text-[0.65rem] font-bold tracking-[0.4em] uppercase text-accent mb-8">
        Founded 2018
      </span>
      <h2 className="text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.85] tracking-[-0.04em] uppercase text-white text-balance max-w-[12ch]">
        Born from a passion for education.
      </h2>
    </motion.div>
  );
};

const PhaseTwo = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const opacity = useTransform(scrollYProgress, [0.28, 0.36, 0.50, 0.58], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.28, 0.36, 0.50, 0.58], [0.95, 1, 1, 1.04]);
  const y = useTransform(scrollYProgress, [0.28, 0.36, 0.50, 0.58], [40, 0, 0, -40]);

  return (
    <motion.div 
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto px-[5vw] gap-16 items-center">
        {/* Left stat */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <span className="text-[clamp(5rem,15vw,13rem)] font-semibold leading-none tracking-[-0.05em] text-white">
            3
          </span>
          <span className="text-[0.75rem] font-bold tracking-[0.35em] uppercase text-white/30 mt-2">
            Key Sectors
          </span>
        </div>
        {/* Center divider */}
        <div className="w-px md:h-64 h-px md:w-px bg-white/10 flex-shrink-0" />
        {/* Right description */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-8 text-center md:text-left">
          <p className="text-[clamp(1.2rem,2.5vw,2rem)] font-light leading-[1.4] text-white/60 max-w-sm">
            Operating across <span className="text-white font-medium">Education, Corporate,</span> and <span className="text-white font-medium">Government</span> — bringing unified excellence to every sector.
          </p>
          <div className="flex gap-8 text-center">
            <div>
              <div className="text-[2rem] font-semibold text-white">UK</div>
              <div className="text-[0.6rem] tracking-widest uppercase text-white/30">Based</div>
            </div>
            <div>
              <div className="text-[2rem] font-semibold text-white">Int'l</div>
              <div className="text-[0.6rem] tracking-widest uppercase text-white/30">Reach</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PhaseThree = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const opacity = useTransform(scrollYProgress, [0.58, 0.66, 0.82, 0.90], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.58, 0.66, 0.82, 0.90], [0.95, 1, 1, 1.04]);
  const y = useTransform(scrollYProgress, [0.58, 0.66, 0.82, 0.90], [40, 0, 0, -40]);

  return (
    <motion.div 
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-[5vw]"
    >
      <h2 className="text-[clamp(3rem,9vw,8.5rem)] font-semibold leading-[0.85] tracking-[-0.04em] uppercase text-white text-balance max-w-[14ch]">
        Empowering <span className="italic font-light text-accent">5,000+</span> professionals.
      </h2>
      <p className="mt-8 text-white/40 text-xl max-w-lg leading-relaxed font-light">
        From classroom teachers to C-suite executives, CEBAR has trained thousands of professionals to reach their full potential.
      </p>
    </motion.div>
  );
};

const PhaseFour = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const opacity = useTransform(scrollYProgress, [0.90, 0.96, 1, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0.90, 0.96], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0.90, 0.96], [40, 0]);

  return (
    <motion.div 
      style={{ opacity, scale, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-[5vw]"
    >
      <span className="block text-[0.65rem] font-bold tracking-[0.4em] uppercase text-accent mb-8">
        Our Vision
      </span>
      <h2 className="text-[clamp(2.5rem,8vw,7.5rem)] font-semibold leading-[0.85] tracking-[-0.04em] uppercase text-white text-balance max-w-[16ch]">
        To be at the forefront of <span className="italic font-light">educational excellence.</span>
      </h2>
    </motion.div>
  );
};

const ExperienceIntro = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springScrollProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
    restDelta: 0.001
  });

  // Background image transforms
  const bgScale = useTransform(springScrollProgress, [0, 0.5, 1], [1, 1.05, 1.12]);
  const bgOpacity = useTransform(springScrollProgress, [0, 0.1, 0.9, 1], [0, 0.25, 0.25, 0.1]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#020202]"
      style={{ height: '600vh' }}
      data-theme="dark"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Parallax Background Image */}
        <motion.div 
          style={{ scale: bgScale }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
            alt="CEBAR Group Story Background"
            className="w-full h-full object-cover object-center grayscale"
          />
          <motion.div 
            style={{ opacity: bgOpacity }}
            className="absolute inset-0 bg-white/10"
          />
        </motion.div>

        {/* Persistent dark overlay */}
        <div className="absolute inset-0 bg-[#020202]/80 mix-blend-multiply" />

        {/* Animated Phases */}
        <PhaseOne scrollYProgress={springScrollProgress} />
        <PhaseTwo scrollYProgress={springScrollProgress} />
        <PhaseThree scrollYProgress={springScrollProgress} />
        <PhaseFour scrollYProgress={springScrollProgress} />

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          <motion.div className="w-24 h-px bg-white/10 relative overflow-hidden">
            <motion.div 
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              className="absolute inset-0 bg-accent"
            />
          </motion.div>
          <span className="text-[0.55rem] font-mono tracking-widest uppercase text-white/20">Our Story</span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceIntro;