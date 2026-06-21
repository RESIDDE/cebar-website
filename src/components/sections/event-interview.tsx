"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function EventInterview() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/10" data-theme="dark">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[0.75rem] font-bold tracking-[0.3em] uppercase text-red-500 block">
                Exclusive Feature
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
                Weekly Politics <br className="hidden lg:block" />
                <span className="text-white/60 font-light italic">Interview</span>
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Catch up on the latest discussions and exclusive insights from our recent feature on Weekly Politics. We dive deep into the impact of our educational initiatives, the power of collaboration, and our vision for the future of learning in Nigeria.
            </p>
            
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <PlayCircle className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium tracking-wide">Watch Full Interview</span>
              </div>
            </div>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 w-full max-w-3xl"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden bg-black/50 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-video group">
              <video 
                className="absolute inset-0 w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/ait interview.jpeg"
              >
                <source src="/weekly%20politics%20interview%20(3).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Optional custom play button overlay could go here, but native controls are enabled */}
            </div>
            
            <div className="mt-6 flex items-center justify-between text-sm text-white/40 px-4">
              <span>Weekly Politics Broadcast</span>
              <span>HD Streaming</span>
            </div>
          </motion.div>

        </div>

        {/* AIT Interview Feature Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative border border-white/10"
        >
          <img 
            src="/ait interview.jpeg" 
            alt="AIT Interview Feature" 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
