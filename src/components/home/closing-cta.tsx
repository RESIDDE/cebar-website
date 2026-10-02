"use client";

import Link from "next/link";
import Reveal from "./reveal";

export default function ClosingCta() {
  return (
    <section aria-labelledby="cta-title" className="ap-dark relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[70%] h-[900px] w-[1200px] max-w-[160vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(209,0,10,0.32),transparent)]"
      />
      <Reveal className="ap-container relative py-[clamp(120px,16vw,200px)] text-center">
        <p className="ap-eyebrow mb-4">Start your journey</p>
        <h2 id="cta-title" className="ap-hero mx-auto max-w-[14ch]">
          Ready to transform your institution?
        </h2>
        <p className="ap-lead mx-auto mt-6 max-w-[620px]">
          Whether you&rsquo;re a school elevating its educators, a business developing its talent, or a department
          strengthening its teams, there&rsquo;s a CEBAR programme for you.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link href="/contact" className="ap-pill">
            Book a consultation
          </Link>
          <a href="mailto:info@cebargroup.co.uk" className="ap-link text-[17px]">
            Email us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
