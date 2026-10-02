"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Plus, X } from "lucide-react";
import { cdnLoader } from "./image-loader";
import Reveal from "./reveal";
import { snappy } from "./motion";
import { CLASSROOM_IMAGE, serviceAreas, type ServiceArea } from "./data";

const RADIUS = { borderRadius: 28 };

function IconRow({ area }: { area: ServiceArea }) {
  return (
    <ul aria-hidden className="flex gap-2.5">
      {area.capabilities.map(({ icon: Icon, title }) => (
        <li key={title} className="grid h-12 w-12 place-items-center rounded-full bg-ap-tile md:h-14 md:w-14">
          <Icon className="h-5 w-5 text-ap-accent-text md:h-6 md:w-6" strokeWidth={1.75} />
        </li>
      ))}
    </ul>
  );
}

function Tile({
  area,
  featured,
  onOpen,
}: {
  area: ServiceArea;
  featured?: boolean;
  onOpen: (area: ServiceArea, trigger: HTMLButtonElement) => void;
}) {
  return (
    <motion.article
      layoutId={`svc-${area.num}`}
      style={RADIUS}
      className={`group relative flex h-full flex-col overflow-hidden bg-ap-alt ${
        featured ? "min-h-[520px] md:min-h-[480px]" : "min-h-[440px] md:min-h-[480px]"
      }`}
    >
      <div className={`relative z-[1] flex flex-1 flex-col p-8 md:p-10 ${featured ? "md:max-w-[50%]" : ""}`}>
        <p className="ap-caption font-semibold text-ap-ink-3">{area.num}</p>
        <motion.h3 layoutId={`svc-title-${area.num}`} className="ap-h3 mt-2 w-fit">
          {area.title}
        </motion.h3>
        <p className="mt-3 max-w-[34ch] text-ap-ink-2">{area.summary}</p>
        <div className="mt-auto pt-10">
          <IconRow area={area} />
        </div>
      </div>

      {featured && (
        <div className="relative h-[260px] md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-1/2">
          <Image
            loader={cdnLoader}
            src={CLASSROOM_IMAGE}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.28,0.11,0.32,1)] group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ap-alt via-transparent to-transparent md:bg-gradient-to-r md:via-ap-alt/0" />
        </div>
      )}

      <button
        type="button"
        aria-haspopup="dialog"
        aria-label={`More about ${area.title}`}
        onClick={(e) => onOpen(area, e.currentTarget)}
        className="absolute inset-0 z-[2] rounded-[28px]"
      >
        <span className="ap-icon-btn absolute bottom-6 right-6 bg-ap-ink text-ap-canvas transition-transform duration-300 group-hover:scale-110 md:bottom-8 md:right-8">
          <Plus className="h-[18px] w-[18px]" strokeWidth={2.25} />
        </span>
      </button>
    </motion.article>
  );
}

function ServiceDialog({ area, onClose }: { area: ServiceArea; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });
  }, []);

  // Keep keyboard focus inside the dialog.
  const onKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key !== "Tab" || !dialogRef.current) return;
    const focusables = dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[90] bg-black/45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      <div className="pointer-events-none fixed inset-0 z-[91] flex items-end justify-center p-2 md:items-center md:p-8">
        <motion.div
          ref={dialogRef}
          layoutId={`svc-${area.num}`}
          style={RADIUS}
          role="dialog"
          aria-modal="true"
          aria-labelledby="svc-dialog-title"
          onKeyDown={onKeyDown}
          data-lenis-prevent
          className="pointer-events-auto relative max-h-[92svh] w-full max-w-[880px] overflow-y-auto overscroll-contain bg-ap-alt"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ap-icon-btn absolute right-5 top-5 z-10 bg-ap-ink text-ap-canvas"
          >
            <X className="h-[18px] w-[18px]" strokeWidth={2.25} />
          </button>
          <div className="p-8 pt-14 md:p-14">
            <p className="ap-caption font-semibold text-ap-ink-3">{area.num}</p>
            <motion.h2 id="svc-dialog-title" layoutId={`svc-title-${area.num}`} className="ap-h2 mt-2 w-fit">
              {area.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { ...snappy, delay: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
              <p className="ap-lead mt-4 max-w-[36ch]">{area.summary}</p>
              <ul className="mt-10 grid gap-3 md:grid-cols-2">
                {area.capabilities.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="rounded-[18px] bg-ap-tile p-6">
                    <Icon className="h-6 w-6 text-ap-accent-text" strokeWidth={1.75} aria-hidden />
                    <h3 className="ap-h4 mt-4">{title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.47] text-ap-ink-2">{description}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link href="/contact" className="ap-pill">
                  Book a consultation
                </Link>
                <Link href="/services" className="ap-link">
                  Full service details
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default function ServicesBento() {
  const [active, setActive] = useState<ServiceArea | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const lenis = useLenis();

  const open = useCallback((area: ServiceArea, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive(area);
  }, []);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [active, lenis, close]);

  return (
    <section id="services" aria-labelledby="services-title" className="ap-section bg-ap-canvas">
      <div className="ap-container-wide">
        <Reveal className="mx-auto max-w-[980px] text-center">
          <p className="ap-eyebrow mb-3">Services</p>
          <h2 id="services-title" className="ap-h2">
            Four ways we help you grow.
          </h2>
          <p className="ap-lead mx-auto mt-5 max-w-[680px]">
            Programmes for schools, businesses and the public sector — each built around outcomes you can measure.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-3 md:mt-20 md:grid-cols-3 md:gap-5">
          {serviceAreas.map((area, i) => (
            <Reveal key={area.num} delay={i === 0 ? 0 : 0.06 * i} className={i === 0 ? "md:col-span-3" : ""}>
              <Tile area={area} featured={i === 0} onOpen={open} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>{active && <ServiceDialog key={active.num} area={active} onClose={close} />}</AnimatePresence>
    </section>
  );
}
