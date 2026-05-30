"use client";

import {
  ChevronLeft,
  ChevronRight,
  Plus,
  RotateCcw,
  RotateCw,
  Settings,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

const formulas = [
  "y = 2.2sin(0.65x)",
  "σ(x) = 3/(1 + e^{-1.1x}) - 1.5",
  "r = 1.6cos(5θ)",
  "x = 16sin³(t), y = 13cos(t) - 5cos(2t)",
  "x = 2.1sin(3t + π/2), y = 2.1sin(4t)",
  "r = 0.18t",
  "y = 2.4e^{-0.18|x|}sin(2.8x)",
];

type DesmosPanelProps = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  formulaIndex: number;
  typingDelay?: number;
};

export default function DesmosPanel({
  collapsed,
  setCollapsed,
  formulaIndex,
  typingDelay = 900,
}: DesmosPanelProps) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
  const formula = formulas[formulaIndex % formulas.length];

  let i = 0;
  let typing: number | undefined;

  const startTyping = window.setTimeout(() => {
    setVisibleText("");

    typing = window.setInterval(() => {
      setVisibleText(formula.slice(0, i + 1));
      i++;

      if (i >= formula.length && typing) {
        window.clearInterval(typing);
      }
    }, 55);
  }, 900);

  return () => {
    window.clearTimeout(startTyping);

    if (typing) {
      window.clearInterval(typing);
    }
  };
}, [formulaIndex]);

  return (
    <aside
      className={`fixed left-0 top-[64px] z-10 hidden h-[calc(100vh-64px)] border-r border-black/20 bg-white transition-all duration-500 ease-in-out md:block ${
        collapsed ? "w-[72px]" : "w-[420px]"
      }`}
    >
      <div className="flex h-12 items-center justify-between border-b border-black/10 bg-[#f7f7f7] px-3 text-gray-600">
        <Plus size={24} className="shrink-0 text-gray-700" />

        {!collapsed && (
          <div className="flex items-center gap-4">
            <RotateCcw size={20} className="text-gray-300" />
            <RotateCw size={20} className="text-gray-300" />
          </div>
        )}

        <div className="flex items-center gap-3">
          {!collapsed && <Settings size={22} className="text-gray-600" />}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center justify-center"
            aria-label={
              collapsed ? "Expand Desmos panel" : "Collapse Desmos panel"
            }
          >
            {collapsed ? (
              <ChevronRight size={22} strokeWidth={2.5} className="text-gray-600" />
            ) : (
              <ChevronLeft size={22} strokeWidth={2.5} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {!collapsed && (
        <>
          <div className="relative h-[54px] border-b border-blue-500 bg-white">
            <div className="absolute left-0 top-0 flex h-full w-9 items-start justify-center bg-blue-500 pt-2 text-xs text-white">
              1
            </div>

            <div className="ml-9 flex h-full items-center gap-3 px-3">
              <div className="h-3 w-3 rounded-full bg-violet-600" />

              <p className="font-mono text-sm text-gray-800">
                {visibleText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <X
              size={26}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300"
            />
          </div>

          <div className="flex h-8 border-b border-black/5 bg-[#fafafa]">
            <div className="flex w-9 items-start justify-center pt-1 text-xs text-gray-500">
              2
            </div>
          </div>

          <div className="absolute bottom-4 left-0 w-full text-center text-xs text-gray-300">
            powered by
            <div className="text-2xl font-semibold tracking-tight text-gray-300">
              desmos
            </div>
          </div>
        </>
      )}
    </aside>
  );
}