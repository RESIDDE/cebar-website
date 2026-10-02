"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import PageHero from "@/components/site/page-hero";
import SegmentedControl from "@/components/site/segmented-control";
import ClosingCta from "@/components/site/closing-cta";
import FallbackImage from "@/components/site/fallback-image";
import { snappy } from "@/components/site/motion";
import type { ProjectData } from "@/lib/project-data";

const categories = ["All", "Education", "Corporate", "Government"];

const matches = (p: ProjectData, category: string) =>
  category === "All" ||
  p.category.toLowerCase().includes(category.toLowerCase()) ||
  p.tags.some((tag) => tag.toLowerCase().includes(category.toLowerCase()));

export default function WorkIndexClient({ projects }: { projects: ProjectData[] }) {
  const [category, setCategory] = useState("All");
  const visible = projects.filter((p) => matches(p, category));

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Case studies."
        lead="How we’ve helped schools, businesses and public-sector teams build lasting capability."
      />

      <section aria-label="Case studies" className="bg-ap-canvas pb-[clamp(88px,12vw,160px)]">
        <div className="ap-container-wide">
          <div className="flex justify-center">
            <SegmentedControl
              id="work-filter"
              label="Filter by sector"
              options={categories}
              value={category}
              onChange={setCategory}
            />
          </div>

          <motion.ul layout className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((p, i) => (
                <motion.li
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={snappy}
                >
                  <article className="group relative overflow-hidden rounded-[28px] bg-ap-alt">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <FallbackImage
                        src={p.heroImage}
                        alt=""
                        fill
                        priority={i < 2}
                        sizes="(min-width: 768px) 630px, 100vw"
                        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.28,0.11,0.32,1)] group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-8 md:p-10">
                      <p className="ap-caption font-semibold uppercase tracking-[0.06em] text-ap-ink-3">{p.category}</p>
                      <h2 className="ap-h3 mt-2">
                        <Link href={`/work/${p.slug}`} className="ap-stretched-link">
                          {p.title}
                        </Link>
                      </h2>
                      <p className="mt-3 text-ap-ink-2">{p.client}</p>
                      <p aria-hidden className="ap-link mt-6">
                        View case study
                      </p>
                    </div>
                  </article>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </section>

      <ClosingCta
        eyebrow="Work with us"
        title="Let’s work together."
        lead="Tell us what you’re trying to change, and we’ll design a programme around it."
      />
    </>
  );
}
