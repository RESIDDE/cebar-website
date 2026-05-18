"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "About Us", href: "/about", index: "01" },
  { label: "Services", href: "/services", index: "02" },
  { label: "Our Team", href: "/our-team", index: "03" },
  { label: "Events", href: "/events", index: "04" },
  { label: "Contact", href: "/contact", index: "05" },
];

const OverlayMenu = ({ isOpen, onClose }: OverlayMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] bg-[#020202] text-white flex flex-col overflow-hidden"
          data-theme="dark"
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6 z-10">
            <motion.button
              onClick={onClose}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors duration-300"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5 text-white/70" strokeWidth={2} />
            </motion.button>
          </div>

          {/* Brand Mark */}
          <div className="absolute top-7 left-[5vw] z-10">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-white/30 text-sm font-semibold tracking-widest uppercase"
            >
              CEBAR Group
            </motion.span>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col justify-center h-full px-[5vw] pt-24 pb-16">
            <nav>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="border-t border-white/5 last:border-b"
                >
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center justify-between py-7 md:py-8"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="text-[0.6rem] font-mono text-white/20 w-6">
                        {item.index}
                      </span>
                      <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-medium tracking-tight leading-none uppercase group-hover:text-accent transition-colors duration-500">
                        {item.label}
                      </h2>
                    </div>
                    <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-16 flex flex-wrap gap-8 text-white/25 text-xs font-light tracking-widest uppercase"
            >
              <a href="mailto:info@cebargroup.co.uk" className="hover:text-white transition-colors">
                info@cebargroup.co.uk
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Facebook
              </a>
            </motion.div>
          </div>

          {/* Cinematic Background Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-accent/[0.02] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-white/[0.01] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayMenu;