"use client";

import { useState } from "react";
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import ExperienceIntro from "@/components/sections/experience-intro";
import WhoWeAre from "@/components/sections/who-we-are";
import SponsorAnnouncement from "@/components/sections/sponsor-announcement";
import Services from "@/components/sections/services";
import UpcomingEvents from "@/components/sections/upcoming-events";
import Partners from "@/components/sections/partners";
import TeamSection from "@/components/sections/team";
import FAQSection from "@/components/sections/faq";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import OverlayMenu from "@/components/sections/overlay-menu";

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

