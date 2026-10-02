"use client";

import Link from "next/link";

type FooterLink = { name: string; href: string; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Services: [
    { name: "Educator Training", href: "/services#educator-training" },
    { name: "HR Solutions", href: "/services#hr-solutions" },
    { name: "Corporate Training", href: "/services#corporate-training" },
    { name: "Government Programmes", href: "/services#government-programmes" },
    { name: "School Consulting", href: "/services#hr-solutions" },
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

export default function SiteFooter() {
  return (
    <footer className="ap-caption border-t border-ap-hairline bg-ap-alt text-ap-ink-2">
      <div className="ap-container py-10">
        <p className="border-b border-ap-hairline pb-4">
          CEBAR Training and Consultancy Services Limited is driven by the passion to empower educators and enrich the
          educational experience, across the UK and internationally.
        </p>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <img src="/loo.png" alt="CEBAR Group" width={512} height={154} className="h-5 w-auto" />
            <p className="mt-3 max-w-[22ch]">Education & Training Consultancy. London, UK.</p>
          </div>
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="mb-2 font-semibold text-ap-ink">{heading}</h3>
              <ul className="space-y-2">
                {items.map((l) => (
                  <li key={l.name}>
                    {l.external ? (
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="hover:text-ap-ink hover:underline"
                      >
                        {l.name}
                      </a>
                    ) : (
                      <Link href={l.href} className="hover:text-ap-ink hover:underline">
                        {l.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-3 border-t border-ap-hairline pt-4 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright © {new Date().getFullYear()} CEBAR Training and Consultancy Services Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-ap-ink hover:underline">
              Privacy Policy
            </Link>
            <span aria-hidden className="h-3 w-px bg-ap-hairline" />
            <Link href="/terms" className="hover:text-ap-ink hover:underline">
              Terms of Use
            </Link>
            <span aria-hidden className="h-3 w-px bg-ap-hairline" />
            <span>United Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
