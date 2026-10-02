"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import SegmentedControl from "@/components/site/segmented-control";
import PostCard from "@/components/site/post-card";
import AuthorAvatar from "@/components/site/author-avatar";
import ClosingCta from "@/components/site/closing-cta";
import { snappy } from "@/components/site/motion";
import { blogPosts } from "@/lib/blog-data";

const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogClient() {
  const [category, setCategory] = useState("All");
  const posts = blogPosts.filter((p) => p.id !== featured.id && (category === "All" || p.category === category));
  const featuredHref = featured.externalLink ?? `/blog/${featured.slug}`;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives from the classroom and beyond."
        lead="Research, methods and practical strategies from our academic and corporate consultants."
      />

      <section aria-labelledby="featured-post-title" className="bg-ap-canvas pb-[clamp(56px,8vw,96px)]">
        <div className="ap-container-wide">
          <Reveal as="article" className="group relative grid overflow-hidden rounded-[28px] bg-ap-alt lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[480px]">
              <Image
                src={featured.heroImage}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 630px, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.28,0.11,0.32,1)] group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col p-8 md:p-12">
              <p className="ap-caption font-semibold uppercase tracking-[0.06em] text-ap-accent-text">
                Featured · {featured.category}
              </p>
              <h2 id="featured-post-title" className="ap-h3 mt-3">
                <Link
                  href={featuredHref}
                  className="ap-stretched-link"
                >
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-4 text-ap-ink-2">{featured.summary}</p>
              <div className="mt-auto flex items-center gap-3 pt-10">
                <AuthorAvatar author={featured.author} size={44} />
                <div className="text-[14px] leading-[1.35]">
                  <p className="font-semibold text-ap-ink">{featured.author}</p>
                  <p className="text-ap-ink-3">
                    {featured.date} · {featured.readTime}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="latest-title" className="ap-section bg-ap-alt">
        <div className="ap-container-wide">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 id="latest-title" className="ap-h2">
              Latest insights.
            </h2>
            <SegmentedControl
              id="blog-filter"
              label="Filter by category"
              options={categories}
              value={category}
              onChange={setCategory}
            />
          </div>

          <motion.ul layout className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {posts.map((post) => (
                <motion.li
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={snappy}
                >
                  <PostCard post={post} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
          {posts.length === 0 && (
            <p className="mt-10 text-ap-ink-2">No other articles in {category} yet.</p>
          )}
        </div>
      </section>

      <ClosingCta
        eyebrow="Put ideas into practice"
        title="Bring these ideas to your institution."
        lead="Our consultants turn research into training your people can use the next day."
      />
    </>
  );
}
