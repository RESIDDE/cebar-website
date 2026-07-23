"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import OverlayMenu from "@/components/sections/overlay-menu";

export default function TermsClient() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="selection:bg-[#D1000A] selection:text-white min-h-screen flex flex-col">
      <Navbar onMenuToggle={() => setMenuOpen(true)} />
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="flex-1 max-w-[800px] mx-auto px-[5vw] pt-48 pb-32">
        <h1 className="text-4xl md:text-6xl font-medium uppercase tracking-tight mb-12">
          Terms of <span className="italic text-[#D1000A]">Use</span>
        </h1>
        <div className="prose prose-invert prose-p:text-white/60 prose-p:font-light prose-p:leading-relaxed max-w-none">
          <p className="mb-6">
            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern CEBAR Group's relationship with you in relation to this website.
          </p>
          <p className="mb-6">
            The term 'CEBAR Group' or 'us' or 'we' refers to the owner of the website. The term 'you' refers to the user or viewer of our website.
          </p>
          <h2 className="text-2xl font-medium mt-12 mb-6">Use of Website</h2>
          <p className="mb-6">
            The content of the pages of this website is for your general information and use only. It is subject to change without notice. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.
          </p>
          <p className="text-white/40 italic mt-12 text-sm">
            Last updated: May 2026. This is a placeholder for the full terms of use.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
