import type { ReactNode } from "react";
import Reveal from "./reveal";

interface SectionHeaderProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  /** A link shown opposite a left-aligned heading, e.g. "See all ›" */
  action?: ReactNode;
}

/** The eyebrow / headline / grey lead block that opens most sections. */
export default function SectionHeader({ id, eyebrow, title, lead, align = "center", action }: SectionHeaderProps) {
  if (align === "left") {
    return (
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[720px]">
          {eyebrow && <p className="ap-eyebrow mb-3">{eyebrow}</p>}
          <h2 id={id} className="ap-h2">
            {title}
          </h2>
          {lead && <p className="ap-lead mt-5">{lead}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </Reveal>
    );
  }

  return (
    <Reveal className="mx-auto max-w-[980px] text-center">
      {eyebrow && <p className="ap-eyebrow mb-3">{eyebrow}</p>}
      <h2 id={id} className="ap-h2">
        {title}
      </h2>
      {lead && <p className="ap-lead mx-auto mt-5 max-w-[680px]">{lead}</p>}
      {action && <div className="mt-6">{action}</div>}
    </Reveal>
  );
}
