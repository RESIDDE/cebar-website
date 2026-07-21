"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Sponsors() {
  return (
    <section className="py-24 bg-background border-t border-border relative overflow-x-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-foreground text-sm font-sans font-semibold tracking-[0.2em] uppercase text-center"
          >
            Sponsors
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="bg-card p-8 md:p-12 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-border hover:border-foreground/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-center justify-center gap-8 relative overflow-hidden group">
              
              {/* Subtle hover background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center justify-center w-full">
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm">
                  <img
                    src="/sydani group.jpeg"
                    alt="Sydani Group Logo"
                    className="h-16 md:h-24 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              
              <div className="relative z-10 text-center space-y-2">
                 <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    Sydani Group
                 </h3>
                 <p className="text-sm md:text-base text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    Committed to fostering innovation and empowering education across Nigeria.
                 </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
