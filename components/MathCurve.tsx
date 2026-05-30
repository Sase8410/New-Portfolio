"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

function generateCurvePoints(type: string) {
  const length = 240;

  return Array.from({ length }, (_, i) => {
    const t = (i / length) * Math.PI * 2;

    let x = 0;
    let y = 0;

    if (type === "Heart") {
      x = 16 * Math.pow(Math.sin(t), 3) * 8;

      y =
        -(
          13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t)
        ) * 8;
    }

    if (type === "Rose") {
      const r = 110 * Math.cos(5 * t);

      x = r * Math.cos(t);
      y = r * Math.sin(t);
    }

    if (type === "Lissajous") {
      x = 120 * Math.sin(3 * t + Math.PI / 2);
      y = 120 * Math.sin(4 * t);
    }

    if (type === "Infinity") {
      x = 130 * Math.sin(t);
      y = 70 * Math.sin(2 * t);
    }

    return `${(x + 170).toFixed(3)},${(y + 170).toFixed(3)}`;
  }).join(" ");
}

const curveNames = [
  "Heart",
  "Rose",
  "Lissajous",
  "Infinity",
];

export default function MathCurve() {
  const [curveIndex, setCurveIndex] = useState(0);

  const curveName = curveNames[curveIndex];

  const points = useMemo(() => {
    return generateCurvePoints(curveName);
  }, [curveName]);

  return (
    <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 opacity-90 md:block">
      <svg width="360" height="360" viewBox="0 0 340 340">
        <motion.polyline
          key={curveName}
          points={points}
          fill="none"
          stroke="url(#curveGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: 0,
            ease: "easeInOut",
            times: [0, 0.4, 0.7, 1],
          }}
          onAnimationComplete={() => {
            setCurveIndex(
              (current) => (current + 1) % curveNames.length
            );
          }}
          style={{
            filter:
              "drop-shadow(0 0 12px rgba(244,114,182,0.7))",
          }}
        />

        <defs>
          <linearGradient
            id="curveGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="50%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>

      <p className="mt-2 text-center text-sm tracking-[0.25em] text-pink-200/70">
        {curveName}
      </p>
    </div>
  );
}