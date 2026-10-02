"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useLenis } from "lenis/react";
import ThemeToggle from "@/components/ui/theme-toggle";
import { EASE_APPLE, snappy } from "./motion";
import { useOverDark } from "./use-over-dark";

const links = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/our-team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onDark = useOverDark(headerRef, 24);
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 8));

  // The mobile sheet should not survive navigation.
  useEffect(() => {
    setOpen(false);
    setScrolled(window.scrollY > 8);
  }, [pathname]);

  // Freeze the page behind the mobile sheet.
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  // Close the sheet if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // The open sheet supplies its own material; never stack two translucent layers.
  const glass = scrolled && !open;

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <div
        className={`relative z-10 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          glass ? "ap-glass shadow-[0_1px_0_var(--ap-hairline)]" : "bg-transparent"
        } ${onDark && !open ? "ap-nav-dark" : ""}`}
      >
        <nav aria-label="Primary" className="mx-auto flex h-12 max-w-[1068px] items-center justify-between px-[22px]">
          <Link href="/" aria-label="CEBAR Group home" className="-ml-1 flex items-center rounded-md px-1 py-1">
            <img src="/loo.png" alt="" width={512} height={154} className="h-[18px] w-auto" />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="ap-caption text-ap-ink/80 transition-colors duration-200 hover:text-ap-ink aria-[current=page]:text-ap-ink"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="text-ap-ink/80 [&_button]:h-9 [&_button]:w-9 [&_button]:hover:scale-100 [&_svg]:h-4 [&_svg]:w-4">
              <ThemeToggle />
            </div>
            <Link href="/contact" className="ap-pill ap-pill-sm hidden md:inline-flex">
              Book a consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="ap-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative -mr-2 grid h-11 w-11 place-items-center md:hidden"
            >
              <motion.span
                className="absolute h-[1.5px] w-[18px] rounded-full bg-ap-ink"
                animate={open ? { y: 0, rotate: 45 } : { y: -3.5, rotate: 0 }}
                transition={snappy}
              />
              <motion.span
                className="absolute h-[1.5px] w-[18px] rounded-full bg-ap-ink"
                animate={open ? { y: 0, rotate: -45 } : { y: 3.5, rotate: 0 }}
                transition={snappy}
              />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="ap-mobile-menu"
            key="sheet"
            className="fixed inset-0 z-0 bg-ap-canvas/[0.97] pt-12 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: EASE_APPLE }}
          >
            <ul className="px-[38px] pt-6">
              {[{ name: "Home", href: "/" }, ...links].map((l, i) => (
                <motion.li
                  key={l.name}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4, transition: { duration: 0.15 } }}
                  transition={{ ...snappy, delay: 0.04 + i * 0.03 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === l.href ? "page" : undefined}
                    className="block py-[7px] text-[28px] font-semibold leading-[1.14] tracking-[0.007em] text-ap-ink aria-[current=page]:text-ap-accent-text"
                  >
                    {l.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="px-[38px] pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...snappy, delay: 0.3 }}
            >
              <Link href="/contact" onClick={() => setOpen(false)} className="ap-pill">
                Book a consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
