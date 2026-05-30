"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TypingEquationProps = {
  text: string;
  x: number;
  y: number;
  color: string;
  delay?: number;
};

export default function TypingEquation({
  text,
  x,
  y,
  color,
  delay = 0,
}: TypingEquationProps) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    const start = window.setTimeout(() => {
      let index = 0;

      const interval = window.setInterval(() => {
        setVisibleText(text.slice(0, index + 1));
        index++;

        if (index >= text.length) {
          window.clearInterval(interval);
        }
      }, 80);
    }, delay * 1000);

    return () => {
      window.clearTimeout(start);
    };
  }, [text, delay]);

  return (
    <motion.text
      x={x}
      y={y}
      fontSize="28"
      fill={color}
      opacity="0.55"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.55 }}
      transition={{ delay }}
    >
      {visibleText}
    </motion.text>
  );
}