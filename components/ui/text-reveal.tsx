"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  highlightWords = [],
  highlightClass = "gradient-text",
}: TextRevealProps) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          className={`inline-block mr-[0.25em] ${
            highlightWords.includes(word) ? highlightClass : ""
          }`}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
