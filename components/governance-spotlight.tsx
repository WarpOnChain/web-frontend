"use client";
import React from "react";
import { ShieldCheck, Gavel, Lock, Scale, AlertTriangle } from "lucide-react";

const items = [
  {
    title: "Transparent Proposals",
    desc: "Time-boxed reviews and onchain votes ensure clear ownership and intent.",
    icon: Gavel,
    accent: "from-cyan-500/20 to-blue-600/20",
  },
  {
    title: "Agent Guardrails",
    desc: "Caps, whitelisted venues and approvals before action keeps agents safe.",
    icon: ShieldCheck,
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Treasury Controls",
    desc: "Streamed budgets with pause/modify hooks aligned to policy windows.",
    icon: Lock,
    accent: "from-indigo-500/20 to-slate-600/20",
  },
  {
    title: "Risk Disclosures",
    desc: "APY variability and risk notes presented up-front for clarity.",
    icon: AlertTriangle,
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Fair Execution",
    desc: "MEV-aware routing and anti-bot presets support equitable access.",
    icon: Scale,
    accent: "from-fuchsia-500/20 to-pink-500/20",
  },
];

export function GovernanceSpotlight() {
  return (
    <section
      id="governance"
      className="relative py-24 border-y border-white/5 bg-[#06090f]"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_600px_at_30%_25%,rgba(0,160,255,0.22),transparent),radial-gradient(900px_600px_at_75%_70%,rgba(0,160,255,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-[36%] space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] tracking-[0.22em] text-slate-300">
              GOVERNANCE & SAFETY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Safety-first coordination without friction
            </h2>
            <p className="text-slate-300/85 text-base md:text-lg leading-relaxed">
              Clear reviews, transparent voting and runtime guardrails protect
              users while keeping iteration fast for builders.
            </p>
          </div>
          <div className="lg:flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {items.map((it, i) => (
              <div
                key={it.title}
                className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-5 overflow-hidden"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${it.accent} opacity-40`}
                />
                <div className="relative flex items-center justify-center w-10 h-10 rounded-md bg-white/5 border border-white/10 mb-4">
                  <it.icon className="w-5 h-5 text-white/80" />
                </div>
                <div className="relative text-sm font-semibold tracking-wide text-white/90">
                  {it.title}
                </div>
                <div className="relative mt-1 text-xs leading-relaxed text-slate-400">
                  {it.desc}
                </div>
                <div className="absolute right-3 top-3 text-[10px] text-slate-500">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GovernanceSpotlight;
