"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./reveal";
import { snappy } from "./motion";
import { faqs } from "@/lib/faq-data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-title" className="ap-section bg-ap-alt">
      <div className="ap-container">
        <Reveal className="text-center">
          <h2 id="faq-title" className="ap-h2">
            Questions? Answers.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-[860px] border-t border-ap-hairline md:mt-16">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question} className="border-b border-ap-hairline">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                  >
                    <span className="ap-h4">{f.question}</span>
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={snappy}
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ap-fill"
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.25} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={snappy}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[720px] pb-7 pr-12 text-ap-ink-2">{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
