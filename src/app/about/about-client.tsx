"use client";

import Link from "next/link";
import { Briefcase, Building2, GraduationCap } from "lucide-react";
import PageHero from "@/components/site/page-hero";
import MediaFrame from "@/components/site/media-frame";
import Reveal from "@/components/site/reveal";
import SectionHeader from "@/components/site/section-header";
import ScrubStatement from "@/components/site/scrub-statement";
import TeamCarousel from "@/components/site/team-carousel";
import ClosingCta from "@/components/site/closing-cta";

const TEAM_PHOTO = "https://static.wixstatic.com/media/343e49_a76105e3cb5548cb8521c889cd711599~mv2.jpeg";
const STORY_PHOTO = "https://static.wixstatic.com/media/343e49_6c65ec77ac924e4ead95d9b2f10d2638~mv2.jpeg";

const sectors = [
  {
    title: "Education",
    icon: GraduationCap,
    href: "/services#educator-training",
    text: "We support schools and educational institutions with staff development, HR support, and training for educational leadership — helping institutions of every size reach international standards.",
  },
  {
    title: "Corporate",
    icon: Briefcase,
    href: "/services#corporate-training",
    text: "We help companies improve leadership, workplace productivity, digital capability, and staff skills through targeted, results-driven training programmes tailored to business objectives.",
  },
  {
    title: "Government",
    icon: Building2,
    href: "/services#government-programmes",
    text: "We provide structured training for public sector teams to enhance service delivery, operational performance, ethical decision-making, and digital readiness across departments.",
  },
];

const values = [
  { title: "Excellence", text: "We are committed to delivering reliable, professional training solutions that consistently meet the highest standards our clients deserve." },
  { title: "Integrity", text: "We build genuine, lasting working relationships by taking time to understand each client's unique circumstances, goals, and constraints." },
  { title: "Innovation", text: "Our programmes integrate cutting-edge pedagogical advancements and digital tools to ensure educators are equipped with the latest knowledge." },
  { title: "Impact", text: "Our mission goes beyond education — we assist organisations across private and government sectors to achieve excellence and long-term success." },
  { title: "Growth", text: "Everything rises and falls on leadership, and we believe in training and mentoring leaders for long-term sustainable improvement." },
];

export default function AboutClient() {
  return (
    <>
      <PageHero
        eyebrow="About CEBAR Group"
        title="Empowering growth across every sector."
        lead="We support educators, business professionals and public-sector leaders with high-quality training and comprehensive HR services."
        actions={
          <>
            <Link href="/contact" className="ap-pill">
              Work with us
            </Link>
            <Link href="/services" className="ap-link text-[17px]">
              Our services
            </Link>
          </>
        }
      >
        <Reveal className="ap-container-wide pb-[clamp(56px,8vw,96px)]">
          <MediaFrame
            src={TEAM_PHOTO}
            alt="The CEBAR Group team"
            className="aspect-[4/3] md:aspect-[16/9]"
            position="object-[50%_30%]"
            priority
          />
        </Reveal>
      </PageHero>

      <ScrubStatement
        id="mission-title"
        eyebrow="Our mission"
        segments={[
          { text: "Our mission goes beyond education. We help organisations in the private and government sectors achieve" },
          { text: "excellence and long-term success.", accent: true },
        ]}
      >
        <Reveal className="mt-14 border-t border-ap-hairline pt-10">
          <p className="max-w-[640px] text-[clamp(1.0625rem,1.5vw,1.3125rem)] leading-[1.38] text-ap-ink-2">
            We believe that effective training and reliable HR support can create real and lasting improvements across
            all areas of work.
          </p>
        </Reveal>
      </ScrubStatement>

      <section aria-labelledby="sectors-title" className="ap-section bg-ap-alt">
        <div className="ap-container-wide">
          <SectionHeader
            id="sectors-title"
            eyebrow="Who we serve"
            title="Tailored support for every sector."
            lead="Whether you run a school, lead a company or manage a government department, our services are designed around your needs."
          />
          <div className="mt-14 grid gap-3 md:mt-20 md:grid-cols-3 md:gap-5">
            {sectors.map(({ title, icon: Icon, href, text }, i) => (
              <Reveal
                key={title}
                delay={0.06 * i}
                className="flex min-h-[380px] flex-col rounded-[28px] bg-ap-tile p-8 md:p-10"
              >
                <Icon className="h-10 w-10 text-ap-accent-text" strokeWidth={1.5} aria-hidden />
                <h3 className="ap-h3 mt-8">{title}</h3>
                <p className="mt-4 text-ap-ink-2">{text}</p>
                <Link href={href} className="ap-link mt-auto pt-8">
                  {title} services
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="story-title" className="ap-section bg-ap-canvas">
        <div className="ap-container-wide grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <MediaFrame
              src={STORY_PHOTO}
              alt="Carol Barlow, CEO of CEBAR Group, at her desk"
              className="aspect-[4/5]"
              sizes="(min-width: 1024px) 520px, 100vw"
              position="object-[45%_center]"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="ap-eyebrow mb-3">Our story</p>
            <h2 id="story-title" className="ap-h2">
              Trusted relationships across industries.
            </h2>
            <div className="mt-8 space-y-5 text-[clamp(1.0625rem,1.3vw,1.1875rem)] leading-[1.5] text-ap-ink-2">
              <p>
                CEBAR Group was founded with a clear purpose: to build a bridge between quality training and the
                real-world challenges faced by educators, businesses, and governments. We build genuine working
                relationships with schools, businesses, and government bodies.
              </p>
              <p>
                By taking the time to understand each client&rsquo;s circumstances, we offer the right level of guidance
                and support to meet their objectives effectively. Our team brings wide-ranging experience from the
                education, corporate, and public service sectors.
              </p>
              <p>
                We understand the daily challenges of each environment and offer programmes that are both relevant and
                results-driven. Our trainers and consultants are experts in their fields, bringing practical knowledge to
                every session.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="values-title" className="ap-section bg-ap-alt">
        <div className="ap-container-wide">
          <SectionHeader
            id="values-title"
            eyebrow="Our values"
            title="A commitment to standards."
            lead="Every client — in education, business or government — receives high-quality, effective support that delivers measurable results."
          />
          <div className="mt-14 grid gap-3 md:mt-20 md:grid-cols-6 md:gap-5">
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={0.05 * i}
                className={`flex min-h-[280px] flex-col rounded-[28px] bg-ap-tile p-8 md:p-10 ${
                  i < 3 ? "md:col-span-2" : "md:col-span-3"
                }`}
              >
                <p className="ap-caption font-semibold text-ap-ink-3">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="ap-h3 mt-auto pt-10">{v.title}</h3>
                <p className="mt-3 max-w-[44ch] text-ap-ink-2">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TeamCarousel />

      <ClosingCta />
    </>
  );
}
