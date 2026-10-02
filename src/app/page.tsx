import { Inter } from "next/font/google";
import "@/components/home/home.css";
import HomeShell from "@/components/home/home-shell";
import AppleNav from "@/components/home/apple-nav";
import Hero from "@/components/home/hero";
import Manifesto from "@/components/home/manifesto";
import Impact from "@/components/home/impact";
import ServicesBento from "@/components/home/services-bento";
import EventsHighlights from "@/components/home/events-highlights";
import PartnersPress from "@/components/home/partners-press";
import TeamCarousel from "@/components/home/team-carousel";
import Faq from "@/components/home/faq";
import ClosingCta from "@/components/home/closing-cta";
import AppleFooter from "@/components/home/apple-footer";

// Fallback face for non-Apple devices; Apple devices render SF Pro via the system font stack.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export default function Home() {
  return (
    <HomeShell className={inter.variable}>
      <a href="#content" className="ap-skip">
        Skip to content
      </a>
      <AppleNav />
      <main id="content">
        <Hero />
        <Manifesto />
        <Impact />
        <ServicesBento />
        <EventsHighlights />
        <PartnersPress />
        <TeamCarousel />
        <Faq />
      </main>
      <ClosingCta />
      <AppleFooter />
    </HomeShell>
  );
}
