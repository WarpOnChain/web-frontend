import React from "react";
import { Rocket, Layers, Bot, Percent, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Memecoin Launchpad",
    description:
      "Launch fair and fast with audited templates and anti-bot presets.",
    icon: Rocket,
    gradient: "from-cyan-500/20 via-blue-500/15 to-cyan-500/20",
    iconColor: "text-cyan-300",
  },
  {
    title: "Restaking",
    description: "Restake assets to secure services and earn layered rewards.",
    icon: Layers,
    gradient: "from-blue-500/20 via-indigo-500/15 to-blue-500/20",
    iconColor: "text-blue-300",
  },
  {
    title: "AI Agents",
    description:
      "Strategy bots with guardrails: backtests, risk caps, approvals.",
    icon: Bot,
    gradient: "from-sky-500/20 via-cyan-500/15 to-sky-500/20",
    iconColor: "text-sky-300",
  },
  {
    title: "High Yields",
    description:
      "Incentivized vaults, auto-compound LP, and programmatic boosts.",
    icon: Percent,
    gradient: "from-emerald-500/20 via-teal-500/15 to-emerald-500/20",
    iconColor: "text-emerald-300",
  },
  {
    title: "Fast Trading",
    description: "Optimized routing, MEV-aware execution, and minimal fees.",
    icon: Zap,
    gradient: "from-fuchsia-500/20 via-pink-500/15 to-fuchsia-500/20",
    iconColor: "text-pink-300",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute -inset-10 opacity-50" />
      </div>
      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight heading-split">
            Features of the Web
          </h2>
          <p className="text-slate-300/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Build, trade and earn with a clean, fast and modular experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden glass-panel glow-border transition-all duration-300 group hover:-translate-y-0.5"
            >
              <div
                className={`absolute inset-0 opacity-60 bg-gradient-to-br ${feature.gradient} pointer-events-none`}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 mb-4 border border-white/10">
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <CardTitle className="text-base font-semibold text-white tracking-wide">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
