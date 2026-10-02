"use client";

import Image from "next/image";
import PageHero from "@/components/site/page-hero";
import MediaFrame from "@/components/site/media-frame";
import Reveal from "@/components/site/reveal";
import ClosingCta from "@/components/site/closing-cta";
import { cdnLoader } from "@/components/site/image-loader";
import { teamMembers } from "@/lib/team-data";

const TEAM_PHOTO = "https://static.wixstatic.com/media/343e49_a76105e3cb5548cb8521c889cd711599~mv2.jpeg";

export default function OurTeamClient() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The people behind the mission."
        lead="A dedicated team of educators, HR specialists and consultants united by a single purpose: transforming education and empowering organisations."
      />

      <section aria-label="Leadership team" className="bg-ap-canvas pb-[clamp(88px,12vw,160px)]">
        <ul className="ap-container-wide grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((m, i) => (
            <Reveal as="li" key={m.name} delay={0.05 * (i % 3)} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-ap-alt">
                <Image
                  loader={cdnLoader}
                  src={m.image}
                  alt={m.name}
                  fill
                  priority={i < 3}
                  sizes="(min-width: 1024px) 410px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.28,0.11,0.32,1)] group-hover:scale-[1.03]"
                />
              </div>
              <h2 className="ap-h4 mt-6">{m.name}</h2>
              <p className="mt-1 text-[15px] font-semibold text-ap-accent-text">{m.role}</p>
              <p className="mt-3 max-w-[40ch] text-ap-ink-2">{m.bio}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-labelledby="together-title" className="ap-section bg-ap-alt">
        <div className="ap-container-wide">
          <Reveal className="mx-auto max-w-[860px] text-center">
            <h2 id="together-title" className="ap-h2">
              Experience from the classroom, the boardroom and public service.
            </h2>
            <p className="ap-lead mx-auto mt-5 max-w-[640px]">
              Our trainers and consultants are experts in their fields, bringing practical knowledge to every session.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-14 md:mt-20">
            <MediaFrame
              src={TEAM_PHOTO}
              alt="The CEBAR Group team"
              className="aspect-[4/3] md:aspect-[21/9]"
              position="object-[50%_25%]"
            />
          </Reveal>
        </div>
      </section>

      <ClosingCta
        eyebrow="Work with us"
        title="Let’s build something lasting together."
        lead="Talk to our team about training, recruitment or consultancy for your organisation."
      />
    </>
  );
}
