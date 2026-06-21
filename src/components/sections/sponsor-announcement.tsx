"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SponsorAnnouncement() {
  return (
    <section className="relative py-24 bg-white text-[#111111] overflow-x-hidden" data-theme="light">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-black text-sm font-sans font-semibold tracking-[0.2em] uppercase"
          >
            Headline Sponsor
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-semibold tracking-tight leading-[1.1] text-[#111]">
              Announcing Our Headline Sponsor for <br />
              <span className="italic font-light text-[#D1000A]">Abuja Educators Conference 2026</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-black/60 max-w-2xl mx-auto leading-relaxed">
              We are incredibly proud to partner with Wema Bank as the official headline sponsor for the most anticipated educational symposium of the year. Together, we are empowering educators and shaping the future of education in Nigeria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 relative overflow-hidden max-w-4xl w-full mx-auto"
          >
            {/* Background glowing accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D1000A]/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/5 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="flex-shrink-0 relative z-10">
              <img 
                src="/wema bank logo.png" 
                alt="Wema Bank Logo" 
                className="h-20 md:h-28 w-auto object-contain drop-shadow-sm"
              />
            </div>
            
            <div className="w-px h-24 bg-black/10 hidden md:block" />
            <div className="w-full h-px bg-black/10 md:hidden" />
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left relative z-10">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#111] mb-3">
                Empowering Educational Growth
              </h3>
              <p className="text-sm md:text-base text-black/60 mb-6 max-w-sm leading-relaxed">
                Discover exclusive financial solutions, partnership details, and special benefits tailored specifically for school owners and educators.
              </p>
              
              {/* Button Removed - PDF is now embedded directly on the page */}
            </div>
          </motion.div>

          {/* Embedded Image Ad */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative border border-black/5 bg-white"
          >
            <img 
              src="/wema ad confirmed .PNG" 
              alt="Wema Bank Official Ad" 
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Autoplaying Background Video Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative aspect-video border border-black/5"
          >
            {/* Subtle dark overlay for aesthetic depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
            
            <iframe
              src="https://www.youtube.com/embed/Plr0OTzJ3xg?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=Plr0OTzJ3xg&modestbranding=1&playsinline=1"
              className="absolute inset-0 w-full h-full scale-[1.05] pointer-events-none z-0"
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
