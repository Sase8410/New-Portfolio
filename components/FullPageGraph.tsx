"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { WIDTH, HEIGHT } from "@/lib/graph";

type FullPageGraphProps = {
  graphIndex?: number;
  onCycleComplete?: () => void;
};

type Point = {
  x: number;
  y: number;
};

type Graph = {
  name: string;
  color: string;
  strokeWidth: number;
  duration: number;
  paths: Point[][];
};

function clean(value: number) {
  return Number(value.toFixed(2));
}

function buildTanImplicitCirclePaths(circleCount = 32, scale = 62) {
  return Array.from({ length: circleCount }, (_, k) => {
    const radius = Math.sqrt(Math.PI / 4 + k * Math.PI);
    return buildCirclePoints(radius, scale, 0.006);
  });
}

function pointsToPath(points: Point[]) {
  if (points.length === 0) return "";

  return `M ${points.map((p) => `${clean(p.x)},${clean(p.y)}`).join(" L ")}`;
}

function buildCirclePoints(radius: number, scale: number, step = 0.01) {
  const points: Point[] = [];

  for (let t = 0; t <= Math.PI * 2 + 0.05; t += step) {
    points.push({
      x: WIDTH / 2 + radius * Math.cos(t) * scale,
      y: HEIGHT / 2 - radius * Math.sin(t) * scale,
    });
  }

  return points;
}

function buildClosedGraphPoints(
  fn: (t: number) => Point,
  startT: number,
  endT: number,
  step: number,
  scale: number
) {
  const points: Point[] = [];

  for (let t = startT; t <= endT; t += step) {
    const p = fn(t);

    points.push({
      x: WIDTH / 2 + p.x * scale,
      y: HEIGHT / 2 - p.y * scale,
    });
  }

  return points;
}

function buildFunctionPoints(
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

    points.push({
      x: px,
      y: HEIGHT / 2 - fn(mathX) * yScale,
    });
  }

  return points;
}

function getGraphs(): Graph[] {
  return [
    {
      name: "sine",
      color: "#7c3aed",
      strokeWidth: 5,
      duration: 6,
      paths: [buildFunctionPoints((x) => 2.2 * Math.sin(0.65 * x), -55, 55)],
    },
    {
      name: "sigmoid",
      color: "#db2777",
      strokeWidth: 5,
      duration: 6,
      paths: [
        buildFunctionPoints(
          (x) => 3 / (1 + Math.exp(-1.1 * x)) - 1.5,
          -55,
          55
        ),
      ],
    },
    {
      name: "rose",
      color: "#2563eb",
      strokeWidth: 5,
      duration: 8,
      paths: [
        buildClosedGraphPoints(
          (t) => {
            const r = 1.6 * Math.cos(5 * t);

            return {
              x: r * Math.cos(t),
              y: r * Math.sin(t),
            };
          },
          0,
          Math.PI * 2 + 0.05,
          0.01,
          125
        ),
      ],
    },
    {
      name: "heart",
      color: "#ec4899",
      strokeWidth: 4,
      duration: 8,
      paths: [
        buildClosedGraphPoints(
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
          Math.PI * 2 + 0.05,
          0.01,
          22
        ),
      ],
    },
    {
      name: "lissajous",
      color: "#8b5cf6",
      strokeWidth: 4,
      duration: 8,
      paths: [
        buildClosedGraphPoints(
          (t) => ({
            x: Math.sin(3 * t + Math.PI / 2),
            y: Math.sin(4 * t),
          }),
          0,
          Math.PI * 2 + 0.05,
          0.01,
          190
        ),
      ],
    },
    {
      name: "spiral",
      color: "#0ea5e9",
      strokeWidth: 4,
      duration: 8,
      paths: [
        buildClosedGraphPoints(
          (t) => {
            const r = t;

            return {
              x: r * Math.cos(t),
              y: r * Math.sin(t),
            };
          },
          0,
          Math.PI * 7,
          0.025,
          14
        ),
      ],
    },
    {
      name: "damped-wave",
      color: "#16a34a",
      strokeWidth: 4,
      duration: 6,
      paths: [
        buildFunctionPoints(
          (x) => 2.4 * Math.exp(-0.18 * Math.abs(x)) * Math.sin(2.8 * x),
          -55,
          55
        ),
      ],
    },
    {
      name: "tan-implicit-circles",
      color: "#c2410c",
      strokeWidth: 3,
      duration: 10,
      paths: buildTanImplicitCirclePaths(36, 62),
    },
  ];
}

export default function FullPageGraph({
  graphIndex = 0,
  onCycleComplete,
}: FullPageGraphProps) {
  const graphs = useMemo(() => getGraphs(), []);
  const graph = graphs[graphIndex % graphs.length];

  const [drawProgress, setDrawProgress] = useState(0);

  useEffect(() => {
    setDrawProgress(0);

    let frameId: number;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (graph.duration * 1000), 1);

      setDrawProgress(progress);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        window.setTimeout(() => {
          onCycleComplete?.();
        }, 1200);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [graph.name, graph.duration]);

  const visiblePaths = graph.paths.map((path) => {
    const visiblePointCount = Math.max(
      2,
      Math.floor(path.length * drawProgress)
    );

    return pointsToPath(path.slice(0, visiblePointCount));
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block">
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {visiblePaths.map((path, index) => (
          <motion.path
            key={`${graph.name}-${index}`}
            d={path}
            fill="none"
            stroke={graph.color}
            strokeWidth={graph.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}