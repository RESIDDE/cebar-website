"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { reveal } from "./motion";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/**
 * Fades content up and into focus the first time it enters the viewport.
 * Under reduced motion, the surrounding MotionConfig drops the movement and keeps the fade.
 */
export default function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ ...reveal, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
