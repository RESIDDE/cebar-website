"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import SectionHeader from "@/components/site/section-header";
import ClosingCta from "@/components/site/closing-cta";
import { cdnLoader } from "@/components/site/image-loader";
import { snappy } from "@/components/site/motion";
import { useNow } from "@/components/site/use-now";
import { cebarEvents, eventImage, eventTheme, eventYear, isPast, type EventItem } from "@/lib/events-data";

const sponsors = [
  { name: "Wema Bank", logo: "/wema%20bank%20logo.png" },
  { name: "Sydani Group", logo: "/sydani%20group.jpeg" },
];

function EventImage({ evt, sizes, priority }: { evt: EventItem; sizes: string; priority?: boolean }) {
  const img = eventImage(evt);
  return (
    <Image
      loader={img.src.startsWith("http") ? cdnLoader : undefined}
      src={img.src}
      alt={evt.title}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${img.position}`}
    />
  );
}

/** Date, time, venue and entry as an Apple-style spec list. */
function Specs({ evt }: { evt: EventItem }) {
  const rows = [
    ["Date", evt.dateStr],
    ["Time", evt.time],
    ["Venue", evt.location],
    ...(evt.ticketPrice !== "Completed" ? [["Entry", evt.ticketPrice]] : []),
  ];
  return (
    <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
      {rows.map(([k, v]) => (
        <div key={k} className="border-t border-ap-hairline pt-3">
          <dt className="text-[14px] text-ap-ink-3">{k}</dt>
          <dd className="mt-1 text-[17px] text-ap-ink">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function StatusChip({ evt, now }: { evt: EventItem; now: Date | null }) {
  if (!now) return null;
  const past = isPast(evt, now);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold ${
        past ? "bg-ap-fill text-ap-ink-2" : "bg-ap-accent text-white"
      }`}
    >
      {!past && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-white" />}
      {past ? "Past event" : "Upcoming"}
    </span>
  );
}

function Featured({ evt, now }: { evt: EventItem; now: Date | null }) {
  const upcoming = now ? !isPast(evt, now) : false;

  return (
    <section aria-labelledby="featured-title" className="ap-dark ap-section">
      <div className="ap-container-wide grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[1950/2250] overflow-hidden rounded-[28px] bg-ap-tile">
            <EventImage evt={evt} sizes="(min-width: 1024px) 520px, 100vw" priority />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <p className="ap-eyebrow">Latest edition</p>
            <StatusChip evt={evt} now={now} />
          </div>
          <h2 id="featured-title" className="ap-h2">
            {evt.title}
          </h2>
          <p className="ap-lead mt-4">{eventTheme(evt)}</p>
          <p className="mt-6 max-w-[60ch] text-ap-ink-2">{evt.description}</p>
          <div className="mt-10">
            <Specs evt={evt} />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
            <div className="flex items-center gap-3">
              <p className="text-[14px] text-ap-ink-3">Sponsored by</p>
              {sponsors.map((s) => (
                <span key={s.name} className="relative h-11 w-11 overflow-hidden rounded-[12px] bg-white">
                  <Image src={s.logo} alt={s.name} fill sizes="44px" className="object-contain p-1.5" />
                </span>
              ))}
            </div>
            <a href={evt.registerUrl} target="_blank" rel="noopener noreferrer" className="ap-link text-[17px]">
              {upcoming ? "Register to attend" : "View event"}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Edition({ evt, open, onToggle }: { evt: EventItem; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-ap-hairline">
      <h3>
        <button
          type="button"
          id={`edition-${evt.id}`}
          aria-expanded={open}
          aria-controls={`edition-panel-${evt.id}`}
          onClick={onToggle}
          className="flex w-full items-center gap-6 py-7 text-left md:gap-10 md:py-9"
        >
          <span className="w-[3.2ch] shrink-0 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-none tracking-[-0.02em] text-ap-ink">
            {eventYear(evt)}
          </span>
          <span className="flex-1">
            <span className="ap-h4 block">{eventTheme(evt)}</span>
            <span className="mt-1 block text-[15px] text-ap-ink-2">
              {evt.dateStr} · {evt.location}
            </span>
          </span>
          <motion.span
            aria-hidden
            animate={{ rotate: open ? 45 : 0 }}
            transition={snappy}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ap-fill"
          >
            <Plus className="h-4 w-4" strokeWidth={2.25} />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`edition-panel-${evt.id}`}
            role="region"
            aria-labelledby={`edition-${evt.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={snappy}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-10 md:grid-cols-12 md:gap-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-ap-alt md:col-span-5">
                <EventImage evt={evt} sizes="(min-width: 768px) 420px, 100vw" />
              </div>
              <div className="md:col-span-7">
                <p className="text-ap-ink-2">{evt.description}</p>
                <div className="mt-8">
                  <Specs evt={evt} />
                </div>
                <a
                  href={evt.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ap-link mt-8 text-[17px]"
                >
                  View event<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EventsClient() {
  const now = useNow();
  const [latest] = cebarEvents;
  const [open, setOpen] = useState<string | null>(cebarEvents[1]?.id ?? null);

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Where educators come together."
        lead="Workshops, seminars and the flagship Abuja Educators Conference, with practical insight and a network of peers."
        actions={
          <>
            <Link href="/contact" className="ap-pill">
              Register interest
            </Link>
            <a href="#editions" className="ap-link text-[17px]">
              Every edition
            </a>
          </>
        }
      />

      <Featured evt={latest} now={now} />

      <section id="editions" aria-labelledby="editions-title" className="ap-section scroll-mt-12 bg-ap-canvas">
        <div className="ap-container-wide">
          <SectionHeader
            id="editions-title"
            align="left"
            eyebrow="Archive"
            title="Every edition."
            lead="Each year the Abuja Educators Conference brings school owners, teachers and leaders together for masterclasses, policy and partnership."
          />
          <Reveal className="mt-12 border-t border-ap-hairline md:mt-16">
            {cebarEvents.map((evt) => (
              <Edition
                key={evt.id}
                evt={evt}
                open={open === evt.id}
                onToggle={() => setOpen(open === evt.id ? null : evt.id)}
              />
            ))}
          </Reveal>
        </div>
      </section>

      <ClosingCta
        eyebrow="Stay in the loop"
        title="Be first to hear about the next edition."
        lead="Tell us you’re interested and we’ll share dates, speakers and masterclasses as soon as they’re confirmed."
        primary={{ label: "Register interest", href: "/contact" }}
      />
    </>
  );
}
