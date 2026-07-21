"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ExperienceIntro = () => {
  return (
    <section className="relative bg-background py-16 sm:py-24 md:py-32 overflow-hidden border-t border-border">
      <div className="w-full mx-auto px-4 sm:px-[5vw] max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[850px] shadow-sm border border-border card-shadow-md"
          >
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
              alt="CEBAR Group Story"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-16 md:gap-24 py-8 lg:pl-8">
            
            {/* Phase 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="block text-xs font-bold tracking-[0.4em] uppercase text-accent mb-4">
                Founded 2018
              </span>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.05] tracking-tight text-foreground uppercase">
                Born from a passion for education.
              </h2>
            </motion.div>

            {/* Phase 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-8 sm:gap-12 relative"
            >
              {/* Soft blob behind stats */}
              <div className="absolute -top-8 -left-8 w-32 h-32 blob-red opacity-50 pointer-events-none" />
              <div className="flex flex-col relative z-10">
                <span className="text-[6rem] md:text-[8rem] font-extrabold leading-none tracking-tighter text-foreground">3</span>
                <span className="text-[0.65rem] font-bold tracking-[0.35em] uppercase text-muted-foreground mt-1 pill-badge bg-accent/10 text-accent w-fit px-3 py-1 rounded-full">Key Sectors</span>
              </div>
              <div className="w-full sm:w-px h-px sm:h-auto bg-border flex-shrink-0" />
              <div className="flex flex-col justify-center gap-5">
                <p className="text-base text-muted-foreground font-light leading-relaxed max-w-sm">
                  Operating across <span className="text-foreground font-medium">Education, Corporate,</span> and <span className="text-foreground font-medium">Government</span> — bringing unified excellence to every sector.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-2xl font-semibold text-foreground">UK</div>
                    <div className="text-[0.65rem] tracking-widest uppercase text-muted-foreground">Based</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-foreground">Int'l</div>
                    <div className="text-[0.65rem] tracking-widest uppercase text-muted-foreground">Reach</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-[clamp(2.2rem,3.5vw,3.5rem)] font-semibold leading-[1.1] tracking-tight uppercase text-foreground">
                Empowering <span className="italic font-light text-accent">5,000+</span> professionals.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed font-light">
                From classroom teachers to C-suite executives, CEBAR has trained thousands of professionals to reach their full potential.
              </p>
            </motion.div>

            {/* Phase 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="block text-xs font-bold tracking-[0.4em] uppercase text-accent mb-4">
                Our Vision
              </span>
              <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-semibold leading-[1.05] tracking-tight uppercase text-foreground">
                To be at the forefront of <span className="italic font-light">educational excellence.</span>
              </h2>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceIntro;