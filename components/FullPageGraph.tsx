"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { WIDTH, HEIGHT } from "@/lib/graph";

type FullPageGraphProps = {
  graphIndex: number;
  onCycleComplete: () => void;
};

type Point = {
  x: number;
  y: number;
};

function clean(value: number) {
  return Number(value.toFixed(2));
}

function pointsToPath(points: Point[], closed = false) {
  const path = `M ${points.map((p) => `${clean(p.x)},${clean(p.y)}`).join(" L ")}`;
  return closed ? `${path} Z` : path;
}

function buildFunctionPath(
  fn: (x: number) => number,
  minX: number,
  maxX: number,
  step = 2
) {
  const points: Point[] = [];

  const startPx = -WIDTH * 0.35;
  const endPx = WIDTH * 1.35;
  const yScale = HEIGHT * 0.18;

  for (let px = startPx; px <= endPx; px += step) {
    const ratio = (px - startPx) / (endPx - startPx);
    const mathX = minX + ratio * (maxX - minX);
    const mathY = fn(mathX);

    points.push({
      x: px,
      y: HEIGHT / 2 - mathY * yScale,
    });
  }

  return pointsToPath(points);
}

function buildParametricPath(
  fn: (t: number) => Point,
  startT: number,
  endT: number,
  step: number,
  scale: number,
  closed = true
) {
  const points: Point[] = [];

  for (let t = startT; t <= endT; t += step) {
    const p = fn(t);

    points.push({
      x: WIDTH / 2 + p.x * scale,
      y: HEIGHT / 2 - p.y * scale,
    });
  }

  return pointsToPath(points, closed);
}

function getGraphs() {
  return [
    {
      name: "sine",
      color: "#7c3aed",
      strokeWidth: 5,
      duration: 8,
      path: buildFunctionPath((x) => 2.2 * Math.sin(0.65 * x), -55, 55),
    },
    {
      name: "sigmoid",
      color: "#db2777",
      strokeWidth: 5,
      duration: 8,
      path: buildFunctionPath(
        (x) => 3 / (1 + Math.exp(-1.1 * x)) - 1.5,
        -55,
        55
      ),
    },
    {
      name: "rose",
      color: "#2563eb",
      strokeWidth: 5,
      duration: 16,
      path: buildParametricPath(
        (t) => {
          const r = 1.6 * Math.cos(5 * t);
          return {
            x: r * Math.cos(t),
            y: r * Math.sin(t),
          };
        },
        0,
        Math.PI * 2,
        0.004,
        125,
        true
      ),
    },
    {
      name: "heart",
      color: "#ec4899",
      strokeWidth: 4,
      duration: 16,
      path: buildParametricPath(
        (t) => {
          const x = 16 * Math.pow(Math.sin(t), 3);
          const y =
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t);

          return { x, y };
        },
        0,
        Math.PI * 2,
        0.004,
        22,
        true
      ),
    },
    {
      name: "lissajous",
      color: "#8b5cf6",
      strokeWidth: 4,
      duration: 16,
      path: buildParametricPath(
        (t) => ({
          x: Math.sin(3 * t + Math.PI / 2),
          y: Math.sin(4 * t),
        }),
        0,
        Math.PI * 2,
        0.004,
        190,
        true
      ),
    },
    {
      name: "spiral",
      color: "#0ea5e9",
      strokeWidth: 4,
      duration: 16,
      path: buildParametricPath(
        (t) => {
          const r = t;
          return {
            x: r * Math.cos(t),
            y: r * Math.sin(t),
          };
        },
        0,
        Math.PI * 7,
        0.008,
        14,
        false
      ),
    },
    {
      name: "damped-wave",
      color: "#16a34a",
      strokeWidth: 4,
      duration: 8,
      path: buildFunctionPath(
        (x) => 2.4 * Math.exp(-0.18 * Math.abs(x)) * Math.sin(2.8 * x),
        -55,
        55
      ),
    },
  ];
}

export default function FullPageGraph({
  graphIndex,
  onCycleComplete,
}: FullPageGraphProps) {
  const graphs = useMemo(() => getGraphs(), []);
  const graph = graphs[graphIndex % graphs.length];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block">
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
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
            pathLength: 1,
            opacity: 0.35,
          }}
          transition={{
            pathLength: {
              duration: graph.duration,
              ease: "easeInOut",
            },
            opacity: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          onAnimationComplete={onCycleComplete}
        />
      </svg>
    </div>
  );
}