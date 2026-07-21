"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useInView } from "framer-motion";
import { X, ArrowRight, Clock, Tag, Calendar, User, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/sections/navbar";
import OverlayMenu from "@/components/sections/overlay-menu";
import Footer from "@/components/sections/footer";
import { blogPosts, BlogPost } from "@/lib/blog-data";

// FadeUp Utility Animation Component
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

// Word Spacing / Text Reveal
const SplitText = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`flex flex-wrap ${className}`}>
    {text.split(" ").map((word, i) => (
      <div key={i} className="overflow-hidden mr-[0.25em] py-[0.05em]">
        <motion.span
          initial={{ y: "105%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      </div>
    ))}
  </div>
);

// Mouse-tracking Custom Cursor Badge (Desktop only)
const CustomCursor = ({ isHovered }: { isHovered: boolean }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 40); // Center the 80px badge
      cursorY.set(e.clientY - 40);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-20 h-20 bg-[#D1000A] text-white rounded-full flex items-center justify-center pointer-events-none z-[9999] text-[10px] font-black tracking-widest uppercase shadow-2xl"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale: isHovered ? 1 : 0,
        opacity: isHovered ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      Read
    </motion.div>
  );
};

export default function BlogClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);

  // Initialize Desktop layout checking for Custom Cursor
  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024);
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Block body scroll when Reading panel is open
  useEffect(() => {
    if (activePost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePost]);

  const categories = ["All", "Education", "HR & Recruitment", "Corporate", "Government"];

  // Find Featured article
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];

  // Filter posts (excluding the featured one from the main list when viewing "All" to avoid duplication)
  const filteredPosts = activeCategory === "All"
    ? blogPosts.filter((post) => post.id !== featuredPost.id)
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="bg-[#f0ebe3] text-[#111] selection:bg-[#D1000A] selection:text-white min-h-screen flex flex-col justify-between">
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {isDesktop && <CustomCursor isHovered={isHoveringCard} />}

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-[5vw] flex items-end">
        <div className="max-w-[1600px] w-full">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] font-black tracking-[0.5em] uppercase text-[#111]/40 mb-8 block"
          >
            Insights & Perspectives
          </motion.span>
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] leading-[0.85] font-medium uppercase tracking-tighter mb-16">
            <SplitText text="CEBAR" />
            <SplitText text="Perspectives" className="text-amber-600 italic font-serif" />
            <SplitText text="& Intel" />
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-lg md:text-xl text-[#111]/60 font-light leading-relaxed">
              In-depth research, professional methodologies, educational blueprints, and capacity building strategies from our lead academic and corporate consultants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST - Render only if category is 'All' or matches featured category */}
      {(activeCategory === "All" || activeCategory === featuredPost.category) && (
        <section className="px-[5vw] pb-24">
          <div className="max-w-[1600px] mx-auto">
            <FadeUp>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#D1000A] mb-8 block">
                Featured Editorial
              </span>
              <div 
                onClick={() => {
                  if (featuredPost.externalLink) {
                    window.open(featuredPost.externalLink, "_blank", "noopener,noreferrer");
                  } else {
                    setActivePost(featuredPost);
                  }
                }}
                onMouseEnter={() => setIsHoveringCard(true)}
                onMouseLeave={() => setIsHoveringCard(false)}
                className="group relative cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border border-[#111]/10 rounded-[3rem] p-6 lg:p-12 bg-white/40 hover:bg-white transition-all duration-700"
              >
                {/* Visual Image Banner */}
                <div className="lg:col-span-7 aspect-[16/9] w-full rounded-[2rem] overflow-hidden relative">
                  <Image
                    src={featuredPost.heroImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    sizes="(max-w-1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                  <span className="absolute top-6 left-6 bg-white/90 text-[#111] backdrop-blur text-[10px] tracking-widest font-black uppercase px-4 py-1.5 rounded-full shadow-sm">
                    {featuredPost.category}
                  </span>
                </div>

                {/* Meta details */}
                <div className="lg:col-span-5 flex flex-col justify-center h-full">
                  <div className="flex items-center gap-4 text-xs font-light text-[#111]/50 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-medium uppercase tracking-tight leading-tight mb-8 transition-all duration-500 group-hover:text-[#D1000A] group-hover:italic group-hover:font-serif">
                    {featuredPost.title}
                  </h2>

                  <p className="text-base text-[#111]/60 font-light leading-relaxed mb-8 max-w-md">
                    {featuredPost.summary}
                  </p>

                  {/* Author profile row */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#111]/5">
                      <Image
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wider text-[#111]">
                        {featuredPost.author}
                      </div>
                      <div className="text-xs text-[#111]/50 font-light">
                        {featuredPost.authorRole}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#111]/60 group-hover:text-[#D1000A] transition-colors duration-500">
                    Read Article
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* CATEGORY SELECTOR TABS */}
      <section className="px-[5vw] pb-12 border-t border-[#111]/5 pt-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#111]/30">
              Browse by Pillar
            </span>
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors duration-500 ${
                      isActive ? "text-white" : "text-[#111]/60 hover:text-[#111] bg-white/20 border border-[#111]/5"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-[#D1000A] rounded-full z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN ARTICLES GRID */}
      <section className="px-[5vw] pb-40">
        <div className="max-w-[1600px] mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  layout
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  onClick={() => {
                    if (post.externalLink) {
                      window.open(post.externalLink, "_blank", "noopener,noreferrer");
                    } else {
                      setActivePost(post);
                    }
                  }}
                  onMouseEnter={() => setIsHoveringCard(true)}
                  onMouseLeave={() => setIsHoveringCard(false)}
                  className="group cursor-pointer flex flex-col h-full bg-white/30 hover:bg-white border border-[#111]/5 rounded-[2.5rem] p-6 transition-all duration-700"
                >
                  {/* Aspect image frame */}
                  <div className="aspect-[4/3] rounded-[1.8rem] overflow-hidden relative mb-8">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                      sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
                    <span className="absolute top-5 left-5 bg-white/90 text-[#111] backdrop-blur text-[9px] tracking-widest font-black uppercase px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Details metadata */}
                  <div className="flex items-center gap-3 text-[10px] tracking-wider text-[#111]/45 uppercase font-medium mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium uppercase tracking-tight leading-snug mb-6 flex-grow transition-all duration-500 group-hover:text-[#D1000A] group-hover:italic group-hover:font-serif">
                    {post.title}
                  </h3>

                  <p className="text-sm text-[#111]/60 font-light leading-relaxed mb-8 line-clamp-3">
                    {post.summary}
                  </p>

                  {/* Horizontal Author & CTA spacer */}
                  <div className="pt-6 border-t border-[#111]/5 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#111]">
                          {post.author}
                        </div>
                        <div className="text-[9px] text-[#111]/40 uppercase font-light">
                          {post.authorRole}
                        </div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#111]/10 flex items-center justify-center group-hover:bg-[#111] group-hover:border-[#111] transition-all duration-500">
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#111]/40 group-hover:text-white transition-all duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* FULL SCREEN IMMERSIVE READING DRAWER */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            ref={drawerRef}
            className="fixed inset-0 z-[300] bg-[#f0ebe3] text-[#111] overflow-y-auto"
            data-theme="light"
          >
            {/* Scroll Progress Bar */}
            <DrawerProgress scrollContainerRef={drawerRef} />

            {/* Header Sticky Action Bar */}
            <div className="sticky top-0 w-full z-10 px-[5vw] py-6 flex items-center justify-between bg-[#f0ebe3]/80 backdrop-blur-md border-b border-[#111]/5">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#111]/30">
                Insights • {activePost.category}
              </span>
              <button
                onClick={() => setActivePost(null)}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-[#111]/10 hover:bg-[#111] hover:border-[#111] transition-all duration-500"
                aria-label="Close article"
              >
                <X className="w-4 h-4 text-[#111] group-hover:text-white transition-colors duration-300" />
              </button>
            </div>

            {/* Content Container */}
            <div className="max-w-[1200px] mx-auto px-[5vw] pt-16 pb-32">
              {/* Category & Title */}
              <div className="mb-12">
                <span className="inline-block text-[11px] font-black tracking-[0.3em] uppercase text-amber-600 mb-6 bg-amber-600/5 px-4 py-1.5 rounded-full border border-amber-600/10">
                  {activePost.category}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium uppercase tracking-tighter leading-[0.95] mb-8">
                  {activePost.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-[#111]/50 font-light">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D1000A]" />
                    Published {activePost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D1000A]" />
                    {activePost.readTime}
                  </span>
                </div>
              </div>

              {/* Big Parallax Visual Frame */}
              <div className="aspect-[21/9] w-full rounded-[2.5rem] overflow-hidden relative mb-20 shadow-lg">
                <Image
                  src={activePost.heroImage}
                  alt={activePost.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="90vw"
                />
              </div>

              {/* Editorial Layout Grid (Author Sidebar + Post Body) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Author Sidebar */}
                <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-32 h-fit">
                  <span className="text-[9px] font-black tracking-[0.4em] uppercase text-[#111]/30 mb-6 block">
                    Author Profile
                  </span>
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 p-6 rounded-[2rem] border border-[#111]/10 bg-white/20 w-full mb-8">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={activePost.authorImage}
                        alt={activePost.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-lg font-bold uppercase tracking-wider text-[#111]">
                        {activePost.author}
                      </div>
                      <div className="text-xs text-[#111]/50 font-light mt-1">
                        {activePost.authorRole}
                      </div>
                    </div>
                  </div>

                  <span className="text-[9px] font-black tracking-[0.4em] uppercase text-[#111]/30 mb-4 block">
                    Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activePost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-widest text-[#111]/50 bg-white/40 border border-[#111]/5 px-3 py-1 rounded-full flex items-center gap-1.5"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#D1000A]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Article Body Content */}
                <div className="lg:col-span-8">
                  {activePost.content.map((sec, i) => (
                    <div key={i} className="mb-12">
                      {sec.sectionTitle && (
                        <h3 className="text-2xl md:text-3xl font-medium uppercase tracking-tight text-[#111] mt-16 mb-8">
                          {sec.sectionTitle}
                        </h3>
                      )}
                      
                      <p className="text-lg md:text-xl font-light text-[#111]/80 leading-[1.8] tracking-wide mb-8">
                        {sec.text}
                      </p>

                      {sec.quote && (
                        <blockquote className="my-16 pl-8 border-l-4 border-[#D1000A] italic font-serif text-2xl md:text-3xl text-amber-600 leading-relaxed relative">
                          <span className="text-[6rem] text-[#D1000A]/5 absolute -top-8 -left-4 pointer-events-none select-none font-serif leading-none">“</span>
                          "{sec.quote}"
                          {sec.quoteAuthor && (
                            <cite className="block not-italic text-[10px] font-sans font-black tracking-[0.3em] uppercase text-[#111]/40 mt-6">
                              — {sec.quoteAuthor}
                            </cite>
                          )}
                        </blockquote>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Giant Return CTA */}
            <div className="w-full mt-auto">
              <button
                onClick={() => {
                  setActivePost(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full py-16 md:py-24 text-center border-t border-[#111]/10 bg-[#111] hover:bg-[#D1000A] transition-all duration-700 group cursor-pointer"
              >
                <div className="max-w-[1200px] mx-auto px-[5vw] flex items-center justify-center gap-6">
                  <span className="text-[clamp(1.5rem,4vw,3.5rem)] font-medium uppercase tracking-tighter leading-none text-white group-hover:italic transition-all duration-700">
                    Finish Reading & Return
                  </span>
                  <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-white/50 group-hover:text-white group-hover:translate-x-6 transition-all duration-700" />
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}

// Sub-component to track scroll progress inside the Drawer container
function DrawerProgress({ scrollContainerRef }: { scrollContainerRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-[#D1000A] z-[320] origin-left"
      style={{ scaleX }}
    />
  );
}
