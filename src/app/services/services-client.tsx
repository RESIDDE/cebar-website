"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/sections/navbar";
import OverlayMenu from "@/components/sections/overlay-menu";
import Footer from "@/components/sections/footer";
import { GraduationCap, Users, BookOpen, Crown, UserSearch, Settings, BarChart3, Briefcase, Laptop, Building2, Globe, Lightbulb, ArrowRight } from "lucide-react";

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

const serviceAreas = [
  {
    id: "01",
    title: "School Owner Training",
    subtitle: "Leadership Development for Educators",
    color: "#f59e0b",
    icon: Crown,
    image: "https://static.wixstatic.com/media/343e49_b0e1d2610a564085a35537e3b8463d25~mv2.jpg",
    description: "Everything rises and falls on leadership, and that's why we believe in training and mentoring leaders for long-term sustainable growth. Our local and international workshops are designed to empower leaders to lead schools internationally.",
    offerings: [
      { name: "Local & International Workshops", desc: "Empowering school leaders to operate at international standards.", icon: Globe },
      { name: "Educator Development Programmes", desc: "Comprehensive programmes on pedagogical advancements, classroom management, and technology integration.", icon: GraduationCap },
      { name: "Training Curriculum Design", desc: "Meticulously crafted, industry-relevant training modules covering a wide array of educational topics.", icon: BookOpen },
      { name: "Professional Development Workshops", desc: "International-standard workshops equipping teachers and school leaders to operate with personal and professional excellence.", icon: Lightbulb }
    ]
  },
  {
    id: "02",
    title: "HR Services for Educators",
    subtitle: "Comprehensive Recruitment & Advisory",
    color: "#10b981",
    icon: UserSearch,
    image: "https://static.wixstatic.com/media/343e49_261c6abd535f4fa2bb1eed625ce902d4~mv2.jpg",
    description: "We offer a range of recruitment services including sourcing and interviewing staff, shortlisting, panel interviews, and advisory services. We specialise in leadership recruitment. Our unique service is that we train for 3 months after appointment.",
    offerings: [
      { name: "Leadership Recruitment", desc: "Sourcing, interviewing, shortlisting and panel interviews specialising in educational leadership.", icon: Users },
      { name: "Post-Placement Training", desc: "Our unique 3-month post-appointment training ensures new staff are set up for long-term success.", icon: UserSearch },
      { name: "School Consultation & Audit", desc: "Robust school audits incorporating improvement systemisation and policy development.", icon: Building2 },
      { name: "Performance Management", desc: "Curriculum review, performance management implementation, and data systems setup.", icon: BarChart3 }
    ]
  },
  {
    id: "03",
    title: "Corporate Training",
    subtitle: "Building High-Performing Teams",
    color: "#6366f1",
    icon: Briefcase,
    image: "https://static.wixstatic.com/media/343e49_2c7efb109c944cfaa2a8e6a08e4b8650~mv2.jpg",
    description: "Our Corporate Training programmes are designed to equip your team with the skills and knowledge needed to excel in today's competitive business environment. We offer a range of training solutions tailored to your organisation.",
    offerings: [
      { name: "Leadership & Management Training", desc: "Develop leadership qualities that inspire and empower teams across corporate environments.", icon: Crown },
      { name: "Professional Development", desc: "Enhance time management, resilience, presentation skills, and personal effectiveness.", icon: Users },
      { name: "Technical & Industry Training", desc: "Data analytics, digital transformation, project management, and IT training tailored for industry.", icon: Laptop },
      { name: "Soft Skills & Interpersonal", desc: "Improve emotional intelligence, conflict resolution, and communication skills across teams.", icon: Lightbulb }
    ]
  },
  {
    id: "04",
    title: "Government Programmes",
    subtitle: "Public Sector Capability Enhancement",
    color: "#ef4444",
    icon: Building2,
    image: "https://static.wixstatic.com/media/343e49_25707ab3bad64d468f74b2a17a1b6653~mv2.jpg",
    description: "CEBAR Group provides specialised training programmes for government organisations, focusing on enhancing public sector capabilities and performance across leadership, operations, and digital readiness.",
    offerings: [
      { name: "Public Sector Leadership", desc: "Strengthen leadership skills to drive public sector excellence and service delivery.", icon: Building2 },
      { name: "Operational Efficiency", desc: "Targeted training programmes to boost productivity and performance across government departments.", icon: Settings },
      { name: "Digital Readiness", desc: "Essential IT skills for government employees to modernise service delivery and operations.", icon: Laptop },
      { name: "Cultural Competence", desc: "Foster better communication, ethical decision-making, and cultural competence in the public service.", icon: Globe }
    ]
  }
];

const process = [
  { step: "01", title: "Discovery", text: "We begin with a comprehensive audit of your organisation's needs, goals, and performance gaps to design the right programme." },
  { step: "02", title: "Design", text: "Our experts craft a bespoke training curriculum tailored to your sector, team size, and specific objectives." },
  { step: "03", title: "Deliver", text: "Industry-experienced trainers deliver sessions in-person or virtually, using proven methodologies for maximum engagement." },
  { step: "04", title: "Embed", text: "Post-training support, resources, and our unique follow-up coaching ensure knowledge is embedded for lasting impact." }
];

export default function ServicesClient() {
  const [activeSector, setActiveSector] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.6], [1, 0]);
  const scaleBackground = useTransform(heroProgress, [0, 1], [1, 1.15]);

  return (
    <main className="selection:bg-[#D1000A] selection:text-white">
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-[110vh] flex items-center justify-center overflow-hidden">
        {/* Cinematic Background Image with Parallax & Scale */}
        <motion.div 
          style={{ 
            backgroundImage: "url('https://static.wixstatic.com/media/343e49_2bda18569d4c4f8d9bf27fd9f92a11d9~mv2.jpg')",
            scale: scaleBackground,
            opacity: heroOpacity
          }} 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat filter brightness-[0.25]"
        />
        {/* Dark radial and linear gradient overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/90 to-[#0a0a0a]" />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_70%)] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="text-center px-[5vw] z-10 relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[10px] font-black tracking-[0.5em] uppercase text-amber-400 mb-8 block"
          >
            OUR SECTOR CAPABILITIES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-[clamp(3.5rem,10vw,8.5rem)] leading-[0.85] font-medium uppercase tracking-tighter mb-10"
          >
            EMPOWERING<br /><span className="text-amber-400 italic">EVERY SECTOR</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-light leading-relaxed"
          >
            At CEBAR Group, we are dedicated to providing top-tier training, HR consultation, and development programmes designed specifically to equip leaders, educators, corporate teams, and public service personnel to operate with excellence.
          </motion.p>
        </motion.div>
        
        {/* Bottom indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[9px] tracking-[0.3em] text-white/30 uppercase">
          <span>Scroll to explore</span>
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-amber-400"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </div>
      </section>

      {/* SECTOR SHOWCASE SECTION */}
      <section className="relative py-32 px-[5vw] bg-background overflow-hidden border-t border-black/5">
        {/* Subtle ambient glows */}
        <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto mb-20 text-center relative z-10">
          <FadeUp>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-amber-400 mb-6 block">
              Tailored Solutions
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] font-medium uppercase tracking-tighter mb-12">
              Our Core <span className="italic font-light text-white/40">Sectors</span>
            </h2>
          </FadeUp>

          {/* Elegant tab switcher */}
          <FadeUp delay={0.1}>
            <div className="inline-flex flex-wrap md:flex-nowrap items-center justify-center bg-white/[0.02] border border-white/5 backdrop-blur-md p-1.5 rounded-2xl md:rounded-full gap-2 max-w-full overflow-x-auto no-scrollbar">
              {serviceAreas.map((area, index) => {
                const isActive = activeSector === index;
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveSector(index)}
                    className={`relative px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-500 cursor-pointer ${
                      isActive ? "text-[#111]" : "text-white/60 hover:text-white hover:bg-white/[0.02]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full z-0"
                        style={{ backgroundColor: area.color }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="font-mono text-[9px] opacity-70">0{index + 1}</span>
                      {area.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </FadeUp>
        </div>

        {/* Split Screen Sector Showcase */}
        <div className="max-w-[1600px] mx-auto min-h-[750px] relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSector}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch"
            >
              {/* Left Column: Visual Anchor */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="relative h-[450px] lg:h-[650px] w-full rounded-[2.5rem] overflow-hidden group border border-white/10 shadow-2xl">
                  {/* Subtle hover scale of the image */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${serviceAreas[activeSector].image})` }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  {/* Glassmorphic/gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-black tracking-[0.4em] uppercase" style={{ color: serviceAreas[activeSector].color }}>
                        Sector {serviceAreas[activeSector].id}
                      </span>
                      <h3 className="text-3xl font-medium uppercase text-white tracking-tight mt-2">
                        {serviceAreas[activeSector].title}
                      </h3>
                    </div>
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10"
                      style={{ backgroundColor: `${serviceAreas[activeSector].color}15` }}
                    >
                      {React.createElement(serviceAreas[activeSector].icon, {
                        className: "w-8 h-8",
                        style: { color: serviceAreas[activeSector].color },
                        strokeWidth: 1.5
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Content Showcase */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
                <div className="space-y-6">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: serviceAreas[activeSector].color }}>
                    {serviceAreas[activeSector].subtitle}
                  </span>
                  <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed">
                    {serviceAreas[activeSector].description}
                  </p>
                </div>

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceAreas[activeSector].offerings.map((offering, oIdx) => {
                    const OfferingIcon = offering.icon || ArrowRight;
                    return (
                      <motion.div
                        key={offering.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: oIdx * 0.1, duration: 0.5 }}
                        className="group relative border border-white/5 hover:border-white/15 bg-white/[0.01] hover:bg-white/[0.03] backdrop-blur-md p-8 rounded-[2rem] transition-all duration-500 flex flex-col justify-between min-h-[220px]"
                      >
                        {/* Interactive hover glow */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]"
                          style={{
                            background: `radial-gradient(circle at 10% 10%, ${serviceAreas[activeSector].color}08 0%, transparent 80%)`
                          }}
                        />
                        
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div 
                              className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 transition-colors duration-500 group-hover:border-white/15"
                              style={{ backgroundColor: `${serviceAreas[activeSector].color}08` }}
                            >
                              <OfferingIcon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                            </div>
                            <span className="text-[10px] font-mono text-white/20">
                              0{activeSector + 1}.0{oIdx + 1}
                            </span>
                          </div>
                          
                          <h4 className="text-lg md:text-xl font-medium uppercase tracking-tight mb-3 text-white/90 group-hover:italic group-hover:text-white transition-all">
                            {offering.name}
                          </h4>
                        </div>
                        
                        <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                          {offering.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-[180px] px-[5vw] bg-background text-foreground rounded-t-[4rem]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
            <div className="lg:col-span-8">
              <FadeUp>
                <h2 className="text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-medium uppercase tracking-tighter">
                  How We<br />Work
                </h2>
              </FadeUp>
            </div>
            <div className="lg:col-span-4">
              <FadeUp delay={0.2}>
                <p className="text-lg text-[#111]/60 font-light leading-relaxed">
                  Our methodology is built around your organisation's specific circumstances, ensuring every programme we deliver achieves lasting impact.
                </p>
              </FadeUp>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <FadeUp key={p.step} delay={i * 0.12}>
                <div className="group border border-[#111]/10 rounded-[2rem] p-10 hover:bg-amber-50 transition-colors duration-500 min-h-[300px] flex flex-col justify-between">
                  <div>
                    <span className="block text-[10px] font-black tracking-widest text-[#111]/30 mb-12 group-hover:text-amber-600 transition-colors">
                      {p.step}
                    </span>
                    <h4 className="text-3xl font-medium uppercase mb-4 group-hover:italic transition-all">{p.title}</h4>
                  </div>
                  <p className="text-[#111]/60 leading-relaxed font-light">{p.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-[150px] px-[5vw] bg-background text-foreground text-center rounded-t-[4rem]">
        <FadeUp>
          <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/30 mb-8 block">Get Started</span>
          <h3 className="text-[clamp(2.5rem,7vw,6rem)] font-medium leading-tight tracking-tight mb-6 uppercase">
            Ready to Transform<br /><span className="text-amber-400 italic">Your Organisation?</span>
          </h3>
          <p className="max-w-xl mx-auto text-lg text-white/50 font-light leading-relaxed mb-14">
            Book a consultation with our team to discuss how CEBAR Group can support your training and HR objectives.
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-4 bg-amber-400 text-[#111] px-10 py-5 rounded-full text-xs font-black tracking-[0.3em] uppercase hover:bg-amber-300 transition-colors"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeUp>
      </section>

      <Footer />
    </main>
  );
}
