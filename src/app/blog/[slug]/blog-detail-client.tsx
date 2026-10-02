"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { enter } from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import PostCard from "@/components/site/post-card";
import AuthorAvatar from "@/components/site/author-avatar";
import { blogPosts, type BlogPost } from "@/lib/blog-data";

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-12 z-40 h-[2px] origin-left bg-ap-accent-text"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <ReadingProgress />

      <article aria-labelledby="page-title">
        <header className="ap-container pt-[clamp(40px,6vw,72px)]">
          <div className="mx-auto max-w-[692px]">
            <motion.div {...enter(0)}>
              <Link href="/blog" className="ap-caption inline-flex items-center gap-1 text-ap-ink-2 hover:text-ap-ink">
                <span aria-hidden>‹</span> All insights
              </Link>
            </motion.div>
            <motion.p {...enter(1)} className="ap-caption mt-8 font-semibold uppercase tracking-[0.06em] text-ap-accent-text">
              {post.category} · {post.date}
            </motion.p>
            <motion.h1
              {...enter(2)}
              id="page-title"
              className="mt-3 text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.012em]"
            >
              {post.title}
            </motion.h1>
            <motion.p {...enter(3)} className="ap-lead mt-6">
              {post.summary}
            </motion.p>
            <motion.div {...enter(4)} className="mt-8 flex items-center gap-3">
              <AuthorAvatar author={post.author} size={44} />
              <div className="text-[14px] leading-[1.35]">
                <p className="font-semibold text-ap-ink">{post.author}</p>
                <p className="text-ap-ink-3">
                  {post.authorRole} · {post.readTime}
                </p>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Most article photos are ~600px wide, so they sit at the reading-column width rather than full bleed. */}
        <motion.div {...enter(5)} className="ap-container mt-12 md:mt-16">
          <div className="relative mx-auto aspect-[4/3] max-w-[692px] overflow-hidden rounded-[28px] bg-ap-alt">
            <Image src={post.heroImage} alt="" fill priority sizes="(min-width: 736px) 692px, 100vw" className="object-cover" />
          </div>
        </motion.div>

        <div className="ap-container pb-[clamp(72px,10vw,128px)] pt-[clamp(48px,7vw,88px)]">
          <div className="mx-auto max-w-[692px] text-[19px] leading-[1.58] tracking-[-0.012em] text-ap-ink">
            {post.content.map((sec, i) => (
              <div key={i}>
                {sec.sectionTitle && <h2 className="ap-h3 mb-6 mt-14">{sec.sectionTitle}</h2>}
                {sec.text && <p className="mb-7 whitespace-pre-line">{sec.text}</p>}
                {sec.quote && (
                  <figure className="my-14 border-l-[3px] border-ap-accent pl-6 md:-ml-8 md:pl-8">
                    <blockquote className="text-[clamp(1.5rem,2.6vw,2rem)] font-semibold leading-[1.25] tracking-[-0.01em]">
                      “{sec.quote}”
                    </blockquote>
                    {sec.quoteAuthor && (
                      <figcaption className="mt-4 text-[15px] text-ap-ink-3">{sec.quoteAuthor}</figcaption>
                    )}
                  </figure>
                )}
              </div>
            ))}

            <ul aria-label="Topics" className="mt-14 flex flex-wrap gap-2 border-t border-ap-hairline pt-8">
              {post.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-ap-alt px-3.5 py-1.5 text-[14px] text-ap-ink-2">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4 rounded-[28px] bg-ap-alt p-6">
              <AuthorAvatar author={post.author} size={56} />
              <div className="text-[15px] leading-[1.4]">
                <p className="text-ap-ink-3">Written by</p>
                <p className="font-semibold">{post.author}</p>
                <p className="text-ap-ink-2">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section aria-labelledby="related-title" className="ap-section bg-ap-alt">
        <div className="ap-container-wide">
          <div className="flex items-end justify-between gap-6">
            <h2 id="related-title" className="ap-h2">
              More insights.
            </h2>
            <Link href="/blog" className="ap-link shrink-0">
              All insights
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal as="li" key={p.id} delay={0.05 * i}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
