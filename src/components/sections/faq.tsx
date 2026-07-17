"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-t border-border group last:border-b">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-[3.5rem] text-left transition-colors duration-300 hover:text-accent focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-[1.5rem] md:text-[2.5rem] font-medium leading-[1.2] tracking-tight">
          {question}
        </h3>
        <div
          className={cn(
            "ml-4 flex-shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isOpen ? "rotate-45" : "rotate-0"
          )}
        >
          <Plus className="w-8 h-8 md:w-10 md:h-10 text-foreground" strokeWidth={1.5} />
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "max-h-[500px] pb-[3.5rem]" : "max-h-0"
        )}
      >
        <p className="max-w-[800px] text-[1.125rem] md:text-[1.25rem] leading-[1.6] text-muted-foreground font-sans">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can benefit from CEBAR's training programmes?",
      answer:
        "CEBAR's programmes are designed for a wide range of stakeholders — school owners, educators, corporate professionals, and government employees. Whether you are an individual looking to enhance your skills or an organisation seeking to transform your team's performance, we have a tailored programme for you.",
    },
    {
      question: "What sectors do you specialise in?",
      answer:
        "We specialise in three key sectors: Education (schools, colleges, universities), Corporate (businesses of all sizes), and Government (public sector departments and agencies). Our cross-sector expertise allows us to adapt best practices from each environment to enrich the others.",
    },
    {
      question: "How are CEBAR training programmes delivered?",
      answer:
        "We offer flexible delivery options including in-person workshops, online webinars, hybrid sessions, and on-site institutional training. Our bespoke programmes can be customised to your schedule and organisational context to ensure maximum engagement and impact.",
    },
    {
      question: "What makes CEBAR's approach different?",
      answer:
        "CEBAR's unique selling point is our integrated approach — we don't just train, we transform. Our post-placement training support, school audit services, and ongoing consultancy ensure that the improvements made stick. We are driven by measurable outcomes, not just programme completion.",
    },
    {
      question: "Do you offer recruitment services for educational institutions?",
      answer:
        "Yes. Our dedicated HR Solutions division provides comprehensive educator recruitment — from sourcing and structured interviews to shortlisting and leadership panel interviews. We also offer a unique 3-month post-appointment support programme to help new hires embed successfully.",
    },
    {
      question: "How do I get started with CEBAR?",
      answer:
        "Simply reach out through our contact page or book a consultation call. We'll begin with a discovery session to understand your goals, context, and challenges before designing a programme that delivers real, lasting results.",
    },
  ];

  return (
    <section className="bg-background py-[100px] md:py-[150px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Column - Heading */}
          <div className="lg:w-1/3">
            <h2 className="text-[3.5rem] md:text-[5.5rem] font-medium leading-[1.1] tracking-tight sticky top-[100px]">
              FAQs
            </h2>
          </div>

          {/* Right Column - Accordions */}
          <div className="lg:w-2/3">
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;