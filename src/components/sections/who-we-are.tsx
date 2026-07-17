"use client";

import React from 'react';
import { motion } from 'framer-motion';

const captions = [
  { text: "WE EMPOWER", highlight: "EDUCATORS.", color: "#ef4444" },
  { text: "WE DELIVER WITH ABSOLUTE", highlight: "EXCELLENCE.", color: "#ef4444" },
  { text: "WE DRIVE TRANSFORMATIVE", highlight: "IMPACT.", color: "#ef4444" },
  { text: "WE SHAPE ORGANISATIONS FOR", highlight: "GROWTH.", color: "#ef4444" },
  { text: "WE ARE", highlight: "CEBAR GROUP.", color: "#ef4444" },
];

const WhoWeAre = () => {
  return (
    <section className="relative bg-background py-16 sm:py-24 md:py-32 overflow-hidden border-t border-border rounded-[2rem] sm:rounded-[4rem]">
      <div className="w-full mx-auto px-4 sm:px-[5vw] max-w-[1440px]">

        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block text-xs font-bold tracking-[0.4em] uppercase text-accent mb-12 text-center"
        >
          Who We Are
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">

          {/* Left: Stacked statements */}
          <div className="flex flex-col gap-8">
            {captions.map((caption, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl p-5 border border-border card-shadow bg-card hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-[0.6rem] font-black text-white bg-accent w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1">
                  {i + 1}
                </span>
                <h2 className="text-[clamp(1.6rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-tight text-foreground uppercase">
                  {caption.text}{" "}
                  <span style={{ color: caption.color }} className="italic font-light">
                    {caption.highlight}
                  </span>
                </h2>
              </motion.div>
            ))}
          </div>

          {/* Right: Image + supporting text */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-border shadow-sm"
            >
              <img
                src="https://static.wixstatic.com/media/f167bf_fe3e5bdeaa294769a4936bf5b10f268b~mv2.jpg/v1/fit/w_960,h_724,q_90,enc_avif,quality_auto/f167bf_fe3e5bdeaa294769a4936bf5b10f268b~mv2.jpg"
                alt="CEBAR Group Training Session"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed font-light"
            >
              CEBAR Group is a UK-based education and training consultancy on a mission to transform how organisations learn, grow, and lead — delivering measurable impact across education, corporate, and government sectors.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
