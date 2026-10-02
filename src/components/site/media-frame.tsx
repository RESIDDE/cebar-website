"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FallbackImage from "./fallback-image";
import { cssVars } from "./motion";

interface MediaFrameProps {
  src: string;
  alt: string;
  /** Sizing classes for the frame, usually an aspect ratio */
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** object-position utility for the image */
  position?: string;
  children?: ReactNode;
}

/** A rounded image tile whose photo settles from a slight zoom as it scrolls into view. */
export default function MediaFrame({
  src,
  alt,
  className = "aspect-[16/9]",
  sizes = "(min-width: 1304px) 1260px, 100vw",
  priority,
  position = "object-center",
  children,
}: MediaFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <div ref={ref} className={`relative overflow-hidden rounded-[28px] bg-ap-alt ${className}`}>
      <motion.div className="ap-media-img absolute inset-0" style={cssVars({ "--media-scale": scale })}>
        <FallbackImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${position}`}
        />
      </motion.div>
      {children}
    </div>
  );
}
