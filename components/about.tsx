"use client";

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute -inset-10 opacity-50" />
      </div>
      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] tracking-[0.22em] text-slate-300">
              ABOUT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Simple building blocks for a fast onchain web
            </h2>
            <p className="text-slate-300/85 text-base md:text-lg leading-relaxed mt-4">
              Warp Onchain unifies essential primitives—launchpad, restaking,
              agents, yields and trading—into a minimal surface that’s fast,
              safe and easy to extend.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300/85">
              {[
                "Audited templates and anti-bot presets for launches",
                "Guardrails for agents: caps, approvals and backtests",
                "Restaking that compounds security and rewards",
                "Execution tuned for speed, cost and fairness",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400/70" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { k: "Launches", v: "1000s" },
                { k: "Median Tx", v: "<2s" },
                { k: "Swap Fee", v: "<0.25%" },
                { k: "Chains", v: "4 live" },
                { k: "Agents", v: "Growing" },
                { k: "Uptime", v: ">99.9%" },
              ].map((s) => (
                <div key={s.k} className="glass-panel glow-border p-5">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                    {s.k}
                  </div>
                  <div className="text-2xl font-semibold mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
