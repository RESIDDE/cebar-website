"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import OverlayMenu from "@/components/sections/overlay-menu";
import Footer from "@/components/sections/footer";
import Team from "@/components/sections/team";
import Image from "next/image";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

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

const pillars = [
  {
    num: "01",
    title: "Education",
    text: "We support schools and educational institutions with staff development, HR support, and training for educational leadership — helping institutions of every size reach international standards."
  },
  {
    num: "02",
    title: "Corporate",
    text: "We help companies improve leadership, workplace productivity, digital capability, and staff skills through targeted, results-driven training programmes tailored to business objectives."
  },
  {
    num: "03",
    title: "Government",
    text: "We provide structured training for public sector teams to enhance service delivery, operational performance, ethical decision-making, and digital readiness across departments."
  }
];

const values = [
  { title: "Excellence", text: "We are committed to delivering reliable, professional training solutions that consistently meet the highest standards our clients deserve." },
  { title: "Integrity", text: "We build genuine, lasting working relationships by taking time to understand each client's unique circumstances, goals, and constraints." },
  { title: "Innovation", text: "Our programmes integrate cutting-edge pedagogical advancements and digital tools to ensure educators are equipped with the latest knowledge." },
  { title: "Impact", text: "Our mission goes beyond education — we assist organisations across private and government sectors to achieve excellence and long-term success." },
  { title: "Growth", text: "Everything rises and falls on leadership, and we believe in training and mentoring leaders for long-term sustainable improvement." }
];

export default function AboutClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const missionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: missionProgress } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"]
  });
  const missionScale = useTransform(missionProgress, [0, 0.4, 0.8, 1], [0.85, 1, 1, 1.1]);
  const missionOpacity = useTransform(missionProgress, [0, 0.2, 0.75, 1], [0, 1, 1, 0]);

  return (
    <main className="bg-[#f0ebe3] text-[#111] selection:bg-[#D1000A] selection:text-white">
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* HERO */}
      <section className="min-h-[100vh] flex items-end px-[5vw] pt-40 pb-24">
        <div className="max-w-[1600px] w-full">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] font-black tracking-[0.5em] uppercase text-[#111]/40 mb-10 block"
          >
            About CEBAR Group
          </motion.span>
          <h1 className="text-[clamp(4.5rem,13vw,13rem)] leading-[0.87] font-medium uppercase tracking-tighter mb-16">
            <SplitText text="Empowering" />
            <SplitText text="Growth" className="text-amber-600 italic" />
            <SplitText text="Across Sectors" />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-2xl ml-auto"
          >
            <p className="text-xl md:text-2xl text-[#111]/60 font-light leading-relaxed">
              We are committed to supporting educators, business professionals, and public sector leaders by delivering high-quality training and comprehensive human resources services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section ref={missionRef} className="h-screen flex items-center justify-center relative overflow-hidden bg-[#111] text-white rounded-[4rem] mx-4">
        <motion.div
          style={{ scale: missionScale, opacity: missionOpacity }}
          className="max-w-[1100px] text-center px-[5vw] z-10"
        >
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/30 mb-8 block">Our Mission</span>
          <h2 className="text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] font-medium tracking-tight mb-10">
            Our mission goes beyond education — we assist organisations in the private and government sectors to achieve{" "}
            <span className="text-amber-400 italic">excellence and long-term success.</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/50 leading-relaxed max-w-2xl mx-auto">
            We believe that effective training and reliable HR support can create real and lasting improvements across all areas of work.
          </p>
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full border border-amber-400/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] rounded-full border border-white/5 pointer-events-none" />
      </section>

      {/* SECTORS */}
      <section className="py-[160px] px-[5vw]">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <FadeUp>
              <h2 className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-medium uppercase tracking-tighter">
                Tailored Support<br />For Every Sector
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="max-w-md text-lg text-[#111]/60 font-light leading-relaxed">
                Whether you run a school, lead a company, or manage a government department, CEBAR Group offers services designed to suit your specific needs.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <FadeUp key={p.num} delay={i * 0.15}>
                <div className="group relative border border-[#111]/10 rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-between overflow-hidden bg-white/50 hover:bg-amber-50 transition-colors duration-700 min-h-[420px]">
                  <div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#111]/30 group-hover:text-amber-600 mb-10 block transition-colors">{p.num}</span>
                    <h3 className="text-[clamp(2.5rem,5vw,4rem)] font-medium uppercase tracking-tight leading-none mb-8 group-hover:italic transition-all">{p.title}</h3>
                  </div>
                  <p className="text-[#111]/60 leading-relaxed font-light text-lg">{p.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-[160px] px-[5vw] bg-white rounded-t-[4rem]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="relative aspect-[3/4] w-full rounded-[3rem] overflow-hidden group">
                <Image
                  src="https://static.wixstatic.com/media/343e49_a76105e3cb5548cb8521c889cd711599~mv2.jpeg"
                  alt="CEBAR Group Training Event"
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
              </div>
            </FadeUp>
          </div>
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#111]/40 mb-8 block">Our Story</span>
              <h3 className="text-4xl md:text-6xl font-medium uppercase tracking-tight mb-12 leading-none">
                Trusted Relationships<br /><span className="italic">Across Industries</span>
              </h3>
              <div className="space-y-8 text-xl text-[#111]/65 font-light leading-relaxed">
                <p>
                  CEBAR Group was founded with a clear purpose: to build a bridge between quality training and the real-world challenges faced by educators, businesses, and governments. We build genuine working relationships with schools, businesses, and government bodies.
                </p>
                <p>
                  By taking the time to understand each client's circumstances, we offer the right level of guidance and support to meet their objectives effectively. Our team brings wide-ranging experience from the education, corporate, and public service sectors.
                </p>
                <p>
                  We understand the daily challenges of each environment and offer programmes that are both relevant and results-driven. Our trainers and consultants are experts in their fields, bringing practical knowledge to every session.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-[150px] px-[5vw]">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <FadeUp>
              <h2 className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-medium uppercase tracking-tighter">
                Commitment<br />To Standards
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="max-w-md text-lg text-[#111]/60 font-light leading-relaxed">
                All our clients — whether in education, business, or government — receive high-quality, effective support that delivers measurable results.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="border border-[#111]/10 rounded-[2rem] p-10 flex flex-col justify-between min-h-[320px] group hover:bg-amber-50 transition-colors duration-700">
                  <div>
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#111]/25 group-hover:text-amber-600 mb-10 block transition-colors">0{i + 1}</span>
                    <h4 className="text-3xl md:text-4xl font-medium uppercase mb-6 group-hover:italic transition-all">{item.title}</h4>
                  </div>
                  <p className="text-[#111]/60 leading-relaxed font-light">{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-[120px] relative">
        <div className="max-w-[1600px] mx-auto px-[5vw] mb-16">
          <FadeUp>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#111]/40 mb-6 block">Meet the People</span>
            <h2 className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-medium uppercase tracking-tighter">
              Our<br />Leadership
            </h2>
          </FadeUp>
        </div>
        <Team />
      </section>

      <Footer />
    </main>
  );
}
