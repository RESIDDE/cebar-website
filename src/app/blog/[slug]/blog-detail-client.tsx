"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/sections/navbar";
import OverlayMenu from "@/components/sections/overlay-menu";
import Footer from "@/components/sections/footer";
import { BlogPost } from "@/lib/blog-data";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#D1000A] z-[500] origin-left"
      style={{ scaleX }}
    />
  );
}

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-[#111] selection:bg-[#D1000A] selection:text-white">
      <ScrollProgress />
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Back nav bar */}
      <div className="pt-28 pb-8 px-[5vw]">
        <div className="max-w-[1200px] mx-auto">
          <motion.button
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group inline-flex items-center gap-3 text-[11px] font-black tracking-[0.3em] uppercase text-[#111]/40 hover:text-[#D1000A] transition-colors duration-300"
          >
            <span className="w-8 h-8 rounded-full border border-[#111]/10 flex items-center justify-center group-hover:bg-[#D1000A] group-hover:border-[#D1000A] transition-all duration-300">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:text-white transition-colors duration-300" />
            </span>
            Back to Insights
          </motion.button>
        </div>
      </div>

      {/* Article Header */}
      <header className="px-[5vw] pb-16">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[11px] font-black tracking-[0.3em] uppercase text-amber-600 mb-6 bg-amber-600/8 px-4 py-1.5 rounded-full border border-amber-600/15">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-medium uppercase tracking-tighter leading-[0.95] mb-10 max-w-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#111]/50 font-light">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D1000A]" />
                Published {post.date}
              </span>
              <span className="text-[#111]/20">•</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D1000A]" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="px-[5vw] pb-20"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="aspect-[21/9] w-full rounded-[2.5rem] overflow-hidden relative shadow-2xl">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Article Body */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="px-[5vw] pb-32"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Author Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-8">
                <div>
                  <span className="text-[9px] font-black tracking-[0.4em] uppercase text-[#111]/30 mb-5 block">
                    Author Profile
                  </span>
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 p-6 rounded-[2rem] border border-[#111]/10 bg-white/30 backdrop-blur-sm">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-base font-bold uppercase tracking-wider text-[#111]">
                        {post.author}
                      </div>
                      <div className="text-xs text-[#111]/50 font-light mt-1">
                        {post.authorRole}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-black tracking-[0.4em] uppercase text-[#111]/30 mb-4 block">
                    Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-widest text-[#111]/50 bg-white/40 border border-[#111]/8 px-3 py-1 rounded-full flex items-center gap-1.5"
                      >
                        <Tag className="w-2.5 h-2.5 text-[#D1000A]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back to blog link */}
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-[#111]/30 hover:text-[#D1000A] transition-colors duration-300 mt-4"
                >
                  <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" />
                  All Insights
                </Link>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:col-span-8">
              {post.content.map((sec, i) => (
                <div key={i} className="mb-12">
                  {sec.sectionTitle && (
                    <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight text-[#111] mt-16 mb-8 pb-4 border-b border-[#111]/8">
                      {sec.sectionTitle}
                    </h2>
                  )}
                  {sec.text && (
                    <p className="text-lg md:text-xl font-light text-[#111]/80 leading-[1.85] tracking-wide mb-8 whitespace-pre-line">
                      {sec.text}
                    </p>
                  )}
                  {sec.quote && (
                    <blockquote className="my-16 pl-8 border-l-4 border-[#D1000A] italic font-serif text-2xl md:text-3xl text-amber-600 leading-relaxed relative">
                      <span className="text-[6rem] text-[#D1000A]/5 absolute -top-8 -left-4 pointer-events-none select-none font-serif leading-none">
                        "
                      </span>
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
            </article>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA banner */}
      <Link
        href="/blog"
        className="block w-full py-16 md:py-24 text-center border-t border-[#111]/10 bg-[#111] hover:bg-[#D1000A] transition-all duration-700 group"
      >
        <div className="max-w-[1200px] mx-auto px-[5vw] flex items-center justify-center gap-6">
          <ArrowLeft className="w-8 h-8 md:w-12 md:h-12 text-white/50 group-hover:text-white group-hover:-translate-x-4 transition-all duration-700" />
          <span className="text-[clamp(1.5rem,4vw,3.5rem)] font-medium uppercase tracking-tighter leading-none text-white group-hover:italic transition-all duration-700">
            Back to All Insights
          </span>
        </div>
      </Link>

      <Footer />
    </main>
  );
}
