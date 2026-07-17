"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Services: [
    { name: "Educator Training", href: "/services" },
    { name: "HR Solutions", href: "/services" },
    { name: "Corporate Training", href: "/services" },
    { name: "Government Programmes", href: "/services" },
    { name: "School Consulting", href: "/services" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/our-team" },
    { name: "Our Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  Connect: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/cebar-learning-hub/", external: true },
    { name: "Instagram", href: "https://www.instagram.com/cebar_consultancy/", external: true },
    { name: "Facebook", href: "https://www.facebook.com/share/164onuEitD/", external: true },
    { name: "info@cebargroup.co.uk", href: "mailto:info@cebargroup.co.uk", external: true },
  ],
};

const LiveClock = () => {
  const [time, setTime] = React.useState<string>("");
  
  React.useEffect(() => {
    const formatTime = () => {
      const now = new Date();
      return now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
    };
    setTime(formatTime());
    const interval = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-[clamp(0.75rem,1.5vw,0.875rem)]">
      {time}
    </span>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground overflow-hidden">
      
      {/* Top border */}
      <div className="w-full h-px bg-border" />
      
      <div className="w-full mx-auto px-4 sm:px-[5vw] max-w-[1440px] py-12 sm:py-16 md:py-24">
        
        {/* Top Row: Brand + Tagline */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 sm:mb-20 pb-12 sm:pb-20 border-b border-border">
          <div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.03em] uppercase">
              CEBAR Group
            </h2>
            <p className="text-muted-foreground text-base mt-3 max-w-xs font-light leading-relaxed">
              Education & Training Consultancy. London, UK.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground mb-1">
              London, United Kingdom
            </div>
            <div className="text-muted-foreground">
              <LiveClock />
            </div>
            <a 
              href="mailto:info@cebargroup.co.uk" 
              className="mt-4 group inline-flex items-center gap-2 text-[0.85rem] font-medium tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              info@cebargroup.co.uk
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-20 pb-12 sm:pb-20 border-b border-border">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
            <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-muted-foreground">
              About CEBAR
            </span>
            <p className="text-muted-foreground text-[0.875rem] leading-[1.7] font-light max-w-[250px]">
              Driven by passion to empower educators and enrich the educational experience across the UK and internationally.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-5">
              <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-muted-foreground">
                {category}
              </span>
              <ul className="flex flex-col gap-3">
                {links.map((link: any) => {
                  const isExternal = link.external;
                  const LinkComponent = isExternal ? "a" : Link;
                  return (
                    <li key={link.name}>
                      <LinkComponent 
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer noopener" : undefined}
                        className="group text-muted-foreground text-sm font-light hover:text-foreground transition-colors duration-300 flex items-center gap-1.5"
                      >
                        {link.name}
                        {isExternal && (
                          <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        )}
                      </LinkComponent>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="text-muted-foreground text-[0.7rem] font-light tracking-widest uppercase">
            © {new Date().getFullYear()} CEBAR Training and Consultancy Services Limited. All rights reserved.
          </span>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-muted-foreground text-[0.7rem] hover:text-foreground/80 transition-colors uppercase tracking-wider">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground text-[0.7rem] hover:text-foreground/80 transition-colors uppercase tracking-wider">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;