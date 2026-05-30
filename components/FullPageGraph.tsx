"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { WIDTH, HEIGHT, buildParametricPath } from "@/lib/graph";

const FULL_MIN_X = -50;
const FULL_MAX_X = 50;

function clean(value: number) {
  return Number(value.toFixed(2));
}

function buildFullWidthFunctionPath(
  fn: (x: number) => number,
  minX: number,
  maxX: number,
  step = 2
) {
  const points: string[] = [];

  const stretch = 2.0;
  const center = WIDTH / 2;
  const start = center - (WIDTH * stretch) / 2;
  const end = center + (WIDTH * stretch) / 2;

  for (let px = start; px <= end; px += step) {
    const screenRatio = (px - start) / (end - start);
    const mathX = minX + screenRatio * (maxX - minX);
    const mathY = fn(mathX);
    const py = HEIGHT / 2 - mathY * 70;

    points.push(`${clean(px)},${clean(py)}`);
  }

  return `M ${points.join(" L ")}`;
}

function getGraphs() {
  return [
    {
      name: "sine",
      color: "#7c3aed",
      strokeWidth: 5,
      path: buildFullWidthFunctionPath(
        (x) => 2.2 * Math.sin(0.65 * x),
        FULL_MIN_X,
        FULL_MAX_X
      ),
    },
    {
      name: "sigmoid",
      color: "#db2777",
      strokeWidth: 5,
      path: buildFullWidthFunctionPath(
        (x) => 3 / (1 + Math.exp(-1.1 * x)) - 1.5,
        FULL_MIN_X,
        FULL_MAX_X
      ),
    },
    {
      name: "rose",
      color: "#2563eb",
      strokeWidth: 5,
      path: buildParametricPath(
        (t) => {
          const r = 1.6 * Math.cos(5 * t);

          return {
            x: r * Math.cos(t),
            y: r * Math.sin(t),
          };
        },
        0,
        Math.PI * 2
      ),
    },
    {
      name: "heart",
      color: "#ec4899",
      strokeWidth: 4,
      path: buildParametricPath(
        (t) => {
          const x = 0.12 * 16 * Math.pow(Math.sin(t), 3);
          const y =
            0.12 *
            (13 * Math.cos(t) -
              5 * Math.cos(2 * t) -
              2 * Math.cos(3 * t) -
              Math.cos(4 * t));

          return { x, y };
        },
        0,
        Math.PI * 2
      ),
    },
    {
      name: "lissajous",
      color: "#8b5cf6",
      strokeWidth: 4,
      path: buildParametricPath(
        (t) => ({
          x: 2.1 * Math.sin(3 * t + Math.PI / 2),
          y: 2.1 * Math.sin(4 * t),
        }),
        0,
        Math.PI * 2
      ),
    },
    {
      name: "spiral",
      color: "#0ea5e9",
      strokeWidth: 4,
      path: buildParametricPath(
        (t) => {
          const r = 0.18 * t;

          return {
            x: r * Math.cos(t),
            y: r * Math.sin(t),
          };
        },
        0,
        Math.PI * 7,
        0.03
      ),
    },
    {
      name: "damped-wave",
      color: "#16a34a",
      strokeWidth: 4,
      path: buildFullWidthFunctionPath(
        (x) => 2.4 * Math.exp(-0.18 * Math.abs(x)) * Math.sin(2.8 * x),
        FULL_MIN_X,
        FULL_MAX_X
      ),
    },
  ];
}

export default function FullPageGraph() {
  const [graphIndex, setGraphIndex] = useState(0);

  const graphs = useMemo(() => getGraphs(), []);
  const graph = graphs[graphIndex];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setGraphIndex((current) => (current + 1) % graphs.length);
    }, 9000);

    return () => window.clearTimeout(timer);
  }, [graphIndex, graphs.length]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block">
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="none"
      >
        <motion.path
          key={graph.name}
          d={graph.path}
          fill="none"
          stroke={graph.color}
          strokeWidth={graph.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: [0, 1, 1],
            opacity: [0, 0.35, 0.35],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            times: [0, 0.4, 1],
          }}
        />
      </svg>
    </div>
  );
}