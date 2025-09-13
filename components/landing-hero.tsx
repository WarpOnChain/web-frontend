"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Vote, DollarSign, Target, Star } from "lucide-react";

export function LandingHero() {
  return (
    <header className="relative bg-black text-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-24 text-center">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-light tracking-[-0.02em] leading-[1.1] mb-8">
          The future of
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
            onchain building
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12 max-w-4xl mx-auto">
          Launch tokens, stake assets, deploy AI agents, and trade — all through
          one elegant, secure platform that puts simplicity first.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="#platform"
            className="group bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-base font-medium transition-all duration-200 inline-flex items-center"
          >
            Explore Platform
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#community"
            className="text-white hover:text-gray-300 px-8 py-4 text-base font-medium transition-colors"
          >
            Join Community →
          </Link>
        </div>

        {/* WARP Token Features */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Introducing{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                WARP Token
              </span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The native utility token powering the entire Warp ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Governance Power",
                description:
                  "Shape the future of Warp through decentralized governance",
                icon: Vote,
                gradient: "from-blue-500/20 to-cyan-500/20",
              },
              {
                title: "Fee Discounts",
                description: "Enjoy reduced trading fees and priority access",
                icon: DollarSign,
                gradient: "from-green-500/20 to-emerald-500/20",
              },
              {
                title: "Staking Rewards",
                description: "Earn passive income by staking your tokens",
                icon: Target,
                gradient: "from-purple-500/20 to-pink-500/20",
              },
              {
                title: "Premium Access",
                description: "Unlock exclusive features and advanced tools",
                icon: Star,
                gradient: "from-orange-500/20 to-red-500/20",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 text-center">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default LandingHero;
