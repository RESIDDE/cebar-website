"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useLenis } from "lenis/react";
import PageHero from "@/components/site/page-hero";
import MediaFrame from "@/components/site/media-frame";
import Reveal from "@/components/site/reveal";
import SectionHeader from "@/components/site/section-header";
import ClosingCta from "@/components/site/closing-cta";
import { useOverDark } from "@/components/site/use-over-dark";
import { processSteps, serviceAreas } from "@/lib/services-data";

/** Height of the global nav plus this page's local nav. */
const STICKY_OFFSET = 100;

const sections = [...serviceAreas.map((a) => ({ id: a.slug, label: a.title })), { id: "process", label: "How we work" }];

function LocalNav() {
  const navRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const lenis = useLenis();
  const onDark = useOverDark(navRef, 74);

  // Highlight whichever service section crosses the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el || !lenis) return;
    e.preventDefault();
    lenis.scrollTo(el, { offset: -STICKY_OFFSET + 1 });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav
      ref={navRef}
      aria-label="Services"
      className={`ap-glass sticky top-12 z-40 shadow-[0_1px_0_var(--ap-hairline)] transition-[background-color] duration-300 ${
        onDark ? "ap-nav-dark" : ""
      }`}
    >
      <div className="mx-auto flex h-[52px] max-w-[1068px] items-center justify-between gap-6 px-[22px]">
        <p className="hidden shrink-0 text-[21px] font-semibold tracking-[0.011em] text-ap-ink md:block">Services</p>
        <ul className="ap-no-scrollbar -mx-[22px] flex flex-1 items-center gap-6 overflow-x-auto px-[22px] md:mx-0 md:flex-none md:px-0">
          {sections.map(({ id, label }) => (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                aria-current={active === id ? "true" : undefined}
                className="ap-caption relative block py-4 text-ap-ink-2 transition-colors hover:text-ap-ink aria-[current=true]:text-ap-ink"
              >
                {label}
                {active === id && (
                  <motion.span
                    layoutId="services-local-active"
                    className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-ap-ink"
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });

  return (
    <section id="process" aria-labelledby="process-title" className="ap-dark ap-section scroll-mt-[100px]">
      <div className="ap-container-wide">
        <SectionHeader
          id="process-title"
          align="left"
          eyebrow="How we work"
          title="From discovery to lasting impact."
          lead="Every programme is built around your organisation's circumstances, so what people learn actually sticks."
        />
        <div className="relative mt-14 md:mt-20">
          {/* The rail fills as the steps scroll past. */}
          <div aria-hidden className="absolute inset-x-0 top-0 hidden h-[2px] overflow-hidden rounded-full bg-ap-hairline md:block">
            <motion.div className="h-full origin-left bg-ap-accent-text" style={{ scaleX: scrollYProgress }} />
          </div>
          <ol ref={ref} className="grid gap-10 md:grid-cols-4 md:gap-8">
            {processSteps.map((p, i) => (
              <Reveal as="li" key={p.step} delay={0.08 * i} className="md:pt-10">
                <p className="text-[clamp(2.5rem,4vw,3.5rem)] font-semibold leading-none tracking-[-0.02em] text-ap-accent-text">
                  {p.step}
                </p>
                <h3 className="ap-h3 mt-5">{p.title}</h3>
                <p className="mt-3 text-ap-ink-2">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function ServicesClient() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Training and HR, built for every sector."
        lead="Training, HR consultancy and development programmes that equip leaders, educators, corporate teams and public servants to excel."
        actions={
          <>
            <Link href="/contact" className="ap-pill">
              Book a consultation
            </Link>
            <a href="#process" className="ap-link text-[17px]">
              How we work
            </a>
          </>
        }
      />

      <LocalNav />

      {serviceAreas.map((area, i) => {
        const tile = i % 2 === 0 ? "bg-ap-alt" : "bg-ap-tile";
        return (
          <section
            key={area.slug}
            id={area.slug}
            aria-labelledby={`${area.slug}-title`}
            className={`ap-section scroll-mt-[100px] ${i % 2 === 0 ? "bg-ap-canvas" : "bg-ap-alt"}`}
          >
            <div className="ap-container-wide">
              <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
                <div className="lg:col-span-7">
                  <p className="ap-eyebrow mb-3">
                    {area.num} · {area.subtitle}
                  </p>
                  <h2 id={`${area.slug}-title`} className="ap-h2">
                    {area.title}
                  </h2>
                </div>
                <p className="text-[clamp(1.0625rem,1.4vw,1.25rem)] leading-[1.45] text-ap-ink-2 lg:col-span-5">
                  {area.description}
                </p>
              </Reveal>

              <Reveal delay={0.05} className="mt-12 md:mt-16">
                <MediaFrame src={area.image} alt={area.imageAlt} className="aspect-[4/3] md:aspect-[21/9]" />
              </Reveal>

              <ul className="mt-3 grid gap-3 md:mt-5 md:grid-cols-2 md:gap-5">
                {area.capabilities.map(({ icon: Icon, title, description }, j) => (
                  <Reveal as="li" key={title} delay={0.05 * j} className={`rounded-[28px] p-8 md:p-10 ${tile}`}>
                    <Icon className="h-7 w-7 text-ap-accent-text" strokeWidth={1.6} aria-hidden />
                    <h3 className="ap-h4 mt-6">{title}</h3>
                    <p className="mt-2 max-w-[48ch] text-ap-ink-2">{description}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <Process />

      <ClosingCta
        title="Ready to transform your organisation?"
        lead="Book a consultation to discuss how CEBAR Group can support your training and HR objectives."
      />
    </>
  );
}
