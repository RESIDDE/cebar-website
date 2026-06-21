"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import OverlayMenu from "@/components/sections/overlay-menu";

const ExperienceIntro = dynamic(() => import("@/components/sections/experience-intro"));
const WhoWeAre = dynamic(() => import("@/components/sections/who-we-are"));
const SponsorAnnouncement = dynamic(() => import("@/components/sections/sponsor-announcement"));
const Sponsors = dynamic(() => import("@/components/sections/sponsors"));
const EventInterview = dynamic(() => import("@/components/sections/event-interview"));
const Services = dynamic(() => import("@/components/sections/services"));
const UpcomingEvents = dynamic(() => import("@/components/sections/upcoming-events"));
const Partners = dynamic(() => import("@/components/sections/partners"));
const TeamSection = dynamic(() => import("@/components/sections/team"));
const FAQSection = dynamic(() => import("@/components/sections/faq"));
const CtaSection = dynamic(() => import("@/components/sections/cta"));
const Footer = dynamic(() => import("@/components/sections/footer"));

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>
        <Hero />
        <ExperienceIntro />
        <WhoWeAre />
        <SponsorAnnouncement />
        <Sponsors />
        <EventInterview />
        <UpcomingEvents />
        <Services />
        <Partners />
        <TeamSection />
        <FAQSection />
      </main>
      <CtaSection />
      <Footer />
    </>
  );
}

