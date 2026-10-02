"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { enter } from "@/components/site/page-hero";
import MediaFrame from "@/components/site/media-frame";
import Reveal from "@/components/site/reveal";
import FallbackImage from "@/components/site/fallback-image";
import { getProjectBySlug, type ProjectData } from "@/lib/project-data";

export default function ClientProjectDetails({ project }: { project: ProjectData }) {
  const next = project.nextProjectSlug ? getProjectBySlug(project.nextProjectSlug) : undefined;
  const facts = [
    ["Client", project.client],
    ["Role", project.role],
    ["Timeline", project.timeline],
    ["Category", project.category],
  ];

  return (
    <>
      <section aria-labelledby="page-title" className="bg-ap-canvas">
        <div className="ap-container-wide pt-[clamp(40px,6vw,72px)]">
          <motion.div {...enter(0)}>
            <Link href="/work" className="ap-caption inline-flex items-center gap-1 text-ap-ink-2 hover:text-ap-ink">
              <span aria-hidden>‹</span> All case studies
            </Link>
          </motion.div>
          <motion.p {...enter(1)} className="ap-eyebrow mb-3 mt-8">
            {project.category}
          </motion.p>
          <motion.h1 {...enter(2)} id="page-title" className="ap-hero max-w-[14ch]">
            {project.title}
          </motion.h1>
          <motion.ul {...enter(3)} aria-label="Tags" className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-ap-alt px-3.5 py-1.5 text-[14px] text-ap-ink-2">
                {tag}
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.div {...enter(4)} className="ap-container-wide mt-12 md:mt-16">
          <MediaFrame src={project.heroImage} alt="" className="aspect-[4/3] md:aspect-[21/9]" priority />
        </motion.div>

        <div className="ap-container-wide py-[clamp(72px,10vw,128px)]">
          <Reveal as="article" className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1 lg:content-start">
              {facts.map(([k, v]) => (
                <div key={k} className="border-t border-ap-hairline pt-3">
                  <dt className="text-[14px] text-ap-ink-3">{k}</dt>
                  <dd className="mt-1 text-[17px] text-ap-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="lg:col-span-8">
              <h2 className="sr-only">Overview</h2>
              <p className="text-[clamp(1.5rem,2.6vw,2.125rem)] font-semibold leading-[1.24] tracking-[-0.01em]">
                {project.overview}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label="Challenge and solution" className="ap-section bg-ap-alt">
        <div className="ap-container-wide">
          {project.detailImages[1] && (
            <Reveal className="mb-5">
              <MediaFrame src={project.detailImages[1]} alt="" className="aspect-[4/3] md:aspect-[21/9]" />
            </Reveal>
          )}
          <div className="grid gap-3 md:grid-cols-2 md:gap-5">
            {[
              ["The challenge", project.challenge],
              ["Our approach", project.solution],
            ].map(([title, text], i) => (
              <Reveal key={title} delay={0.06 * i} className="rounded-[28px] bg-ap-tile p-8 md:p-12">
                <h2 className="ap-eyebrow">{title}</h2>
                <p className="mt-5 text-[clamp(1.125rem,1.6vw,1.375rem)] leading-[1.45] text-ap-ink">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="impact-title" className="ap-dark ap-section">
        <Reveal className="ap-container">
          <h2 id="impact-title" className="ap-eyebrow mb-6">
            Impact
          </h2>
          <p className="text-[clamp(2rem,4.4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.012em]">
            {project.impact}
          </p>
        </Reveal>
      </section>

      {next && (
        <section aria-label="Next case study" className="ap-section bg-ap-canvas">
          <div className="ap-container-wide">
            <Reveal as="article" className="group relative grid overflow-hidden rounded-[28px] bg-ap-alt md:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[360px]">
                <FallbackImage
                  src={next.heroImage}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 630px, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.28,0.11,0.32,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="ap-caption font-semibold uppercase tracking-[0.06em] text-ap-ink-3">Next case study</p>
                <h2 className="ap-h3 mt-2">
                  <Link href={`/work/${next.slug}`} className="ap-stretched-link">
                    {next.title}
                  </Link>
                </h2>
                <p className="mt-3 text-ap-ink-2">{next.category}</p>
                <p aria-hidden className="ap-link mt-6">
                  Read case study
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
