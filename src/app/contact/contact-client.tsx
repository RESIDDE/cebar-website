"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import OverlayMenu from "@/components/sections/overlay-menu";
import Footer from "@/components/sections/footer";
import { FiArrowUpRight } from "react-icons/fi";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

export default function ContactClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="bg-[#111] text-[#f0ebe3] min-h-screen selection:bg-[#D1000A] selection:text-white">
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* --- HERO SECTION --- */}
      <section className="pt-[25vh] pb-[10vh] px-[5vw]">
        <div className="max-w-[1600px] mx-auto">
          <FadeUp>
            <h1 className="text-[clamp(4rem,15vw,13rem)] leading-[0.8] font-medium uppercase tracking-tighter mb-12 italic">
              Get in <br /> <span className="text-[#D1000A] not-italic">Touch.</span>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="px-[5vw] pb-[20vh]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-8">

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-16">
            <FadeUp delay={0.1}>
              <div className="space-y-10">
                <div>
                  <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-3">Email Us</p>
                  <a href="mailto:info@cebargroup.co.uk" className="text-xl md:text-2xl font-light underline decoration-[#D1000A]/30 underline-offset-8 hover:decoration-[#D1000A] transition-all">
                    info@cebargroup.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-3">Phone</p>
                  <a href="tel:+447000000000" className="text-xl md:text-2xl font-light underline decoration-[#D1000A]/30 underline-offset-8 hover:decoration-[#D1000A] transition-all">
                    +44 (0) 700 000 0000
                  </a>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-8">Follow Us</p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "LinkedIn", href: "https://www.linkedin.com/company/cebar-learning-hub/" },
                    { name: "Instagram", href: "https://www.instagram.com/cebar_consultancy/" },
                    { name: "Facebook", href: "https://www.facebook.com/share/164onuEitD/" },
                  ].map(s => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold tracking-widest uppercase border border-white/10 px-5 py-2.5 rounded-full hover:border-[#D1000A] hover:text-[#D1000A] transition-all duration-300"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-md">
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-4">Our Office</p>
                <h4 className="text-lg leading-relaxed mb-4">
                  London, United Kingdom
                </h4>
                <div className="flex items-center gap-2 text-[#D1000A] text-sm font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-[#D1000A] animate-pulse"></span>
                  Open for partnerships
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <FadeUp delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    id="contact-name"
                    className="w-full bg-transparent border-b-2 border-white/10 py-6 text-2xl md:text-4xl font-light focus:outline-none focus:border-[#D1000A] transition-colors peer"
                  />
                  <label htmlFor="contact-name" className="absolute top-6 left-0 text-2xl md:text-4xl font-light text-white/20 pointer-events-none transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:font-black peer-focus:tracking-[0.4em] peer-focus:uppercase peer-focus:text-[#D1000A] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:tracking-[0.4em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#D1000A]">
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    id="contact-org"
                    className="w-full bg-transparent border-b-2 border-white/10 py-6 text-2xl md:text-4xl font-light focus:outline-none focus:border-[#D1000A] transition-colors peer"
                  />
                  <label htmlFor="contact-org" className="absolute top-6 left-0 text-2xl md:text-4xl font-light text-white/20 pointer-events-none transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:font-black peer-focus:tracking-[0.4em] peer-focus:uppercase peer-focus:text-[#D1000A] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:tracking-[0.4em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#D1000A]">
                    Organisation / School
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    id="contact-email"
                    className="w-full bg-transparent border-b-2 border-white/10 py-6 text-2xl md:text-4xl font-light focus:outline-none focus:border-[#D1000A] transition-colors peer"
                  />
                  <label htmlFor="contact-email" className="absolute top-6 left-0 text-2xl md:text-4xl font-light text-white/20 pointer-events-none transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:font-black peer-focus:tracking-[0.4em] peer-focus:uppercase peer-focus:text-[#D1000A] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:tracking-[0.4em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#D1000A]">
                    Email Address
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    required
                    placeholder=" "
                    id="contact-message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white/10 py-6 text-2xl md:text-4xl font-light focus:outline-none focus:border-[#D1000A] transition-colors peer resize-none"
                  />
                  <label htmlFor="contact-message" className="absolute top-6 left-0 text-2xl md:text-4xl font-light text-white/20 pointer-events-none transition-all duration-500 peer-focus:-top-6 peer-focus:text-xs peer-focus:font-black peer-focus:tracking-[0.4em] peer-focus:uppercase peer-focus:text-[#D1000A] peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:tracking-[0.4em] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:text-[#D1000A]">
                    How can we help?
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative flex items-center justify-between w-full md:w-auto md:min-w-[280px] border-2 border-white/20 rounded-full px-10 py-6 transition-all hover:border-[#D1000A] overflow-hidden"
                  >
                    <span className="relative z-10 text-xs font-black tracking-[0.3em] uppercase transition-colors group-hover:text-white">
                      {isSubmitted ? "Message Sent!" : "Send Message"}
                    </span>
                    <div className="relative z-10 w-7 h-7 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:rotate-45">
                      <FiArrowUpRight size={16} className="text-[#D1000A]" />
                    </div>
                    <div className="absolute inset-0 bg-[#D1000A] scale-x-0 origin-right transition-transform duration-700 group-hover:scale-x-100" />
                  </button>
                </div>
              </form>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
