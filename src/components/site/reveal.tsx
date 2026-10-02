"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { reveal } from "./motion";

const tags = { div: motion.div, li: motion.li, article: motion.article };

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** Render as a list item or article where the markup calls for it */
  as?: keyof typeof tags;
};

/**
 * Fades content up and into focus the first time it enters the viewport.
 * Under reduced motion, the surrounding MotionConfig drops the movement and keeps the fade.
 */
export default function Reveal({ delay = 0, as = "div", children, ...rest }: RevealProps) {
  const Tag = tags[as] as typeof motion.div;

  return (
    <Tag
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ ...reveal, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
