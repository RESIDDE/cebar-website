"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue, useInView } from "framer-motion";
import { ArrowRight, Clock, Calendar, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import OverlayMenu from "@/components/sections/overlay-menu";
import Footer from "@/components/sections/footer";
import { blogPosts } from "@/lib/blog-data";

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
      cursorX.set(e.clientX - 40);
      cursorY.set(e.clientY - 40);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
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
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024);
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = ["All", "Education", "HR & Recruitment", "Corporate", "Government"];
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts.filter((post) => post.id !== featuredPost.id)
      : blogPosts.filter((post) => post.category === activeCategory);

  const handlePostClick = (slug: string, externalLink?: string) => {
    if (externalLink) {
      window.open(externalLink, "_blank", "noopener,noreferrer");
    } else {
      router.push(`/blog/${slug}`);
    }
  };

  return (
    <main className="selection:bg-[#D1000A] selection:text-white min-h-screen flex flex-col justify-between">
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

      {/* FEATURED POST */}
      {(activeCategory === "All" || activeCategory === featuredPost.category) && (
        <section className="px-[5vw] pb-24">
          <div className="max-w-[1600px] mx-auto">
            <FadeUp>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#D1000A] mb-8 block">
                Featured Editorial
              </span>
              <div
                onClick={() => handlePostClick(featuredPost.slug, featuredPost.externalLink)}
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
                    sizes="(max-width: 1024px) 100vw, 60vw"
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
                  onClick={() => handlePostClick(post.slug, post.externalLink)}
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      <Footer />
    </main>
  );
}
