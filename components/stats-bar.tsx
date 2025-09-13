"use client";
import React from "react";

const stats = [
  { label: "Avg Swap Fee", value: "<0.25%" },
  { label: "Median Tx Time", value: "<2s" },
  { label: "Supported Chains", value: "4 live" },
  { label: "Launchpad Deploys", value: "1000s" },
  { label: "Active Agents", value: "Growing" },
];

export function StatsBar() {
  return (
    <div className="sticky top-0 z-30 hidden md:block border-b border-white/10 backdrop-blur bg-black/60">
      <div className="mx-auto max-w-7xl px-6 py-3 grid grid-cols-5 gap-6 text-xs font-medium tracking-wide">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="text-slate-400 uppercase tracking-[0.18em] mb-1">
              {s.label}
            </span>
            <span className="text-white/90 text-sm font-semibold">
              {s.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsBar;
