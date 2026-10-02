"use client";

import { useState, type FormEvent, type InputHTMLAttributes } from "react";
import PageHero from "@/components/site/page-hero";
import Reveal from "@/components/site/reveal";
import Faq from "@/components/site/faq";
import { serviceAreas } from "@/lib/services-data";

const EMAIL = "info@cebargroup.co.uk";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/cebar-learning-hub/" },
  { name: "Instagram", href: "https://www.instagram.com/cebar_consultancy/" },
  { name: "Facebook", href: "https://www.facebook.com/share/164onuEitD/" },
];

const topics = [...serviceAreas.map((a) => a.title), "Events", "Something else"];

type FieldProps = { id: string; label: string } & InputHTMLAttributes<HTMLInputElement>;

function Field({ id, label, type = "text", ...rest }: FieldProps) {
  return (
    <div className="ap-field">
      <input id={id} name={id} type={type} placeholder=" " className="ap-input peer" {...rest} />
      <label htmlFor={id} className="ap-label">
        {label}
      </label>
    </div>
  );
}

export default function ContactClient() {
  const [sent, setSent] = useState(false);

  // There's no mail backend, so hand the message to the visitor's email app, ready to send.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Enquiry: ${get("topic")}${get("organisation") ? ` — ${get("organisation")}` : ""}`;
    const signature = [get("name"), get("organisation"), get("email")].filter(Boolean).join("\n");
    const body = `${get("message")}\n\n—\n${signature}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        lead="Tell us about your school, organisation or department, and we’ll get back to you."
      />

      <section aria-label="Contact details and form" className="bg-ap-canvas pb-[clamp(88px,12vw,160px)]">
        <div className="ap-container-wide grid gap-5 lg:grid-cols-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:content-start">
            <Reveal className="rounded-[28px] bg-ap-alt p-8 md:p-10">
              <h2 className="text-[14px] text-ap-ink-3">Email us</h2>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 block break-words text-[clamp(1.3125rem,2vw,1.75rem)] font-semibold leading-[1.15] text-ap-ink hover:text-ap-accent-text"
              >
                {EMAIL}
              </a>
              <p className="mt-3 text-ap-ink-2">For training, recruitment, partnerships and events.</p>
            </Reveal>
            <Reveal delay={0.05} className="rounded-[28px] bg-ap-alt p-8 md:p-10">
              <h2 className="text-[14px] text-ap-ink-3">Our office</h2>
              <p className="mt-2 text-[clamp(1.3125rem,2vw,1.75rem)] font-semibold leading-[1.15]">
                London, United Kingdom
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-[15px] text-ap-ink-2">
                <span aria-hidden className="h-2 w-2 rounded-full bg-[#30d158]" />
                Open for partnerships
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[28px] bg-ap-alt p-8 sm:col-span-2 md:p-10 lg:col-span-1">
              <h2 className="text-[14px] text-ap-ink-3">Follow us</h2>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="ap-link">
                      {s.name}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="rounded-[28px] bg-ap-alt p-8 md:p-12 lg:col-span-7">
            <h2 id="form-title" className="ap-h3">
              Send us a message
            </h2>
            <form aria-labelledby="form-title" onSubmit={onSubmit} className="mt-8 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field id="name" label="Your name" autoComplete="name" required />
                <Field id="organisation" label="Organisation or school" autoComplete="organization" />
              </div>
              <Field id="email" label="Email address" type="email" autoComplete="email" required />
              <div className="ap-field">
                <select id="topic" name="topic" className="ap-input" defaultValue={topics[0]}>
                  {topics.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <label htmlFor="topic" className="ap-label ap-label-floated">
                  I’m interested in
                </label>
              </div>
              <div className="ap-field">
                <textarea id="message" name="message" placeholder=" " rows={6} required className="ap-input peer" />
                <label htmlFor="message" className="ap-label">
                  How can we help?
                </label>
              </div>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="ap-pill w-full sm:w-auto">
                  Send message
                </button>
                <p className="text-[14px] text-ap-ink-3">Opens your email app with your message ready to send.</p>
              </div>
              <p role="status" className="min-h-[1.5em] text-[15px] text-ap-ink-2">
                {sent && (
                  <>
                    Your email app should now be open with the message filled in. If nothing happened, email us at{" "}
                    <a href={`mailto:${EMAIL}`} className="text-ap-accent-text underline">
                      {EMAIL}
                    </a>
                    .
                  </>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <Faq />
    </>
  );
}
