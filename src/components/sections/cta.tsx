"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="relative bg-background overflow-hidden" data-theme="dark">
      {/* Full-width accent line at top */}
      <div className="w-full h-px bg-border" />
      
      <div className="container py-[80px] md:py-[120px] flex flex-col items-center justify-center text-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.65rem] md:text-[0.75rem] font-bold tracking-[0.4em] uppercase text-accent mb-6 block"
        >
          Start Your Journey
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-[clamp(3rem,10vw,8.5rem)] font-semibold tracking-[-0.04em] leading-[0.9] uppercase max-w-[10ch] mb-16"
        >
          Ready to transform?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-12"
        >
          Whether you're a school looking to elevate your educators, a corporation developing your talent, or a government department strengthening your teams — CEBAR has a programme for you.
        </motion.p>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="group inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-[0.875rem] font-bold tracking-[0.15em] uppercase hover:bg-accent transition-colors duration-500"
        >
          Book a Consultation
          <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
        </motion.a>
      </div>

      <div className="w-full h-px bg-border" />
    </section>
  );
};

export default CtaSection;
