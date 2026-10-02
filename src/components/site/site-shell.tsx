"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export default function SiteShell({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className={`apple-site relative ${className}`}>{children}</div>
    </MotionConfig>
  );
}
