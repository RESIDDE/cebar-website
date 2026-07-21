"use client";

import { useState } from "react";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import OverlayMenu from "@/components/sections/overlay-menu";
import ExperienceIntro from "@/components/sections/experience-intro";
import WhoWeAre from "@/components/sections/who-we-are";
import SponsorAnnouncement from "@/components/sections/sponsor-announcement";
import Sponsors from "@/components/sections/sponsors";
import EventInterview from "@/components/sections/event-interview";
import Services from "@/components/sections/services";
import UpcomingEvents from "@/components/sections/upcoming-events";
import Partners from "@/components/sections/partners";
import TeamSection from "@/components/sections/team";
import FAQSection from "@/components/sections/faq";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

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

