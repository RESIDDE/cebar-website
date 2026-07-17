"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sectors = [
  { name: "Primary Schools", count: "250+" },
  { name: "Secondary Schools", count: "180+" },
  { name: "Universities", count: "40+" },
  { name: "Corporate Clients", count: "120+" },
  { name: "Government Depts.", count: "35+" },
  { name: "Educators Trained", count: "5,000+" },
];

const trustLogos = [
  { name: "UK Government", label: "Gov't Partner" },
  { name: "Ofsted Aligned", label: "Ofsted Framework" },
  { name: "CPD Certified", label: "CPD Certified" },
  { name: "ISO Compliant", label: "ISO Standards" },
];

const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-background text-foreground overflow-hidden py-[80px] md:py-[140px]"
    >
      {/* Decorative horizontal marquee lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <motion.div style={{ x: xLeft }} className="absolute top-[25%] w-full flex gap-24 whitespace-nowrap text-[clamp(6rem,12vw,12rem)] font-bold uppercase tracking-tighter text-foreground/20">
          IMPACT · IMPACT · IMPACT · IMPACT · IMPACT · IMPACT ·&nbsp;
        </motion.div>
        <motion.div style={{ x: xRight }} className="absolute bottom-[20%] w-full flex gap-24 whitespace-nowrap text-[clamp(6rem,12vw,12rem)] font-bold uppercase tracking-tighter text-foreground/20">
          GROWTH · GROWTH · GROWTH · GROWTH · GROWTH · GROWTH ·&nbsp;
        </motion.div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[0.65rem] font-bold tracking-[0.4em] uppercase text-accent mb-4 block"
            >
              Our Reach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.9] tracking-tighter uppercase"
            >
              Trusted across <br /><span className="italic text-muted-foreground font-light">all sectors.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-sm text-muted-foreground text-base leading-relaxed font-light"
          >
            From individual educators to government departments — CEBAR's cross-sector expertise creates transformative impact at every level.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 border-t border-border"
        >
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex flex-col gap-2 py-10 md:py-14 px-6 border-b border-r border-border last:border-r-0 even:md:border-r-0 md:[&:nth-child(3n)]:border-r-0"
            >
              <span className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tighter text-foreground leading-none">
                {s.count}
              </span>
              <span className="text-[0.75rem] font-medium tracking-[0.25em] uppercase text-muted-foreground">
                {s.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance / Standard Badges */}
        <div className="mt-20 pt-12 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-8">
          <span className="text-[0.65rem] font-semibold tracking-[0.4em] uppercase text-muted-foreground">
            Standards & Compliance
          </span>
          <div className="flex flex-wrap gap-4">
            {trustLogos.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 border border-border rounded-full flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-[0.7rem] font-medium tracking-widest uppercase text-foreground/60">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
