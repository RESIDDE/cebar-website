"use client";

import { motion } from "framer-motion";
import { snappy } from "./motion";

interface SegmentedControlProps {
  /** Unique per page so the sliding pill animates within its own control */
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

/** Apple-style segmented filter: a grey track with a white pill that slides to the selection. */
export default function SegmentedControl({ id, label, options, value, onChange }: SegmentedControlProps) {
  return (
    <div
      role="group"
      aria-label={label}
      className="ap-no-scrollbar inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-ap-fill p-1"
    >
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(opt)}
            className={`relative shrink-0 rounded-full px-4 py-1.5 text-[14px] transition-colors duration-200 ${
              active ? "text-ap-ink" : "text-ap-ink-2 hover:text-ap-ink"
            }`}
          >
            {active && (
              <motion.span
                layoutId={`${id}-pill`}
                transition={snappy}
                className="absolute inset-0 rounded-full bg-ap-tile shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
              />
            )}
            <span className="relative">{opt}</span>
          </button>
        );
      })}
    </div>
  );
}
