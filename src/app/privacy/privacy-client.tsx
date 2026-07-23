"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import OverlayMenu from "@/components/sections/overlay-menu";

export default function PrivacyClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="selection:bg-[#D1000A] selection:text-white min-h-screen flex flex-col">
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="flex-1 max-w-[800px] mx-auto px-[5vw] pt-48 pb-32">
        <h1 className="text-4xl md:text-6xl font-medium uppercase tracking-tight mb-12">
          Privacy <span className="italic text-[#D1000A]">Policy</span>
        </h1>
        <div className="prose prose-invert prose-p:text-white/60 prose-p:font-light prose-p:leading-relaxed max-w-none">
          <p className="mb-6">
            At CEBAR Group, we are committed to protecting and respecting your privacy. This policy explains when and why we collect personal information, how we use it, the conditions under which we may disclose it to others, and how we keep it secure.
          </p>
          <p className="mb-6">
            We may change this policy from time to time, so please check this page occasionally to ensure that you’re happy with any changes. By using our website, you’re agreeing to be bound by this policy.
          </p>
          <h2 className="text-2xl font-medium mt-12 mb-6">How do we collect information from you?</h2>
          <p className="mb-6">
            We obtain information about you when you use our website, for example, when you contact us about our services, register for an event, or if you register to receive our newsletter.
          </p>
          <p className="text-white/40 italic mt-12 text-sm">
            Last updated: May 2026. This is a placeholder for the full privacy policy.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
