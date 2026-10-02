import Hero from "@/components/home/hero";
import Manifesto from "@/components/home/manifesto";
import Impact from "@/components/home/impact";
import ServicesBento from "@/components/home/services-bento";
import EventsHighlights from "@/components/home/events-highlights";
import PartnersPress from "@/components/home/partners-press";
import Faq from "@/components/site/faq";
import TeamCarousel from "@/components/site/team-carousel";
import ClosingCta from "@/components/site/closing-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Impact />
      <ServicesBento />
      <EventsHighlights />
      <PartnersPress />
      <TeamCarousel />
      <Faq />
      <ClosingCta />
    </>
  );
}
