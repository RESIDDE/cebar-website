import type { ReactNode } from "react";

/** Plain reading layout for policy pages. */
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <article className="bg-ap-canvas">
      <div className="ap-container pb-[clamp(88px,12vw,160px)] pt-[clamp(56px,9vw,112px)]">
        <div className="mx-auto max-w-[692px]">
          <p className="ap-eyebrow mb-3">Legal</p>
          <h1 id="page-title" className="ap-h2">
            {title}
          </h1>
          <p className="mt-4 text-[14px] text-ap-ink-3">Last updated {updated}</p>
          <div className="mt-12 space-y-6 border-t border-ap-hairline pt-10 text-[17px] leading-[1.6] text-ap-ink-2 [&_h2]:pt-6 [&_h2]:text-[21px] [&_h2]:font-semibold [&_h2]:leading-[1.19] [&_h2]:text-ap-ink">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
