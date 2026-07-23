"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import UpcomingEvents from "@/components/sections/upcoming-events";
import OverlayMenu from "@/components/sections/overlay-menu";

const SplitText = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`flex flex-wrap ${className}`}>
    {text.split(" ").map((word, i) => (
      <div key={i} className="overflow-hidden mr-[0.2em] py-[0.05em]">
        <motion.span
          initial={{ y: "105%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      </div>
    ))}
  </div>
);

export default function EventsClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="selection:bg-[#D1000A] selection:text-white">
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* HERO */}
      <section className="min-h-[50vh] flex items-end px-[5vw] pt-40 pb-0 bg-background text-foreground relative z-10">
        <div className="max-w-[1600px] w-full">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] font-black tracking-[0.5em] uppercase text-[#D1000A] mb-10 block"
          >
            Connect & Learn
          </motion.span>
          <h1 className="text-[clamp(4.5rem,13vw,13rem)] leading-[0.87] font-medium uppercase tracking-tighter mb-16">
            <SplitText text="Upcoming" />
            <SplitText text="Events" className="text-white italic" />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-2xl ml-auto"
          >
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
              Join our workshops, seminars, and the flagship Abuja Educators Conference to gain actionable insights and network with top-tier professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <div className="-mt-16">
        <UpcomingEvents />
      </div>

      <Footer />
    </main>
  );
}
