"use client";

import React from "react";
import {
  ArrowRight,
  Rocket,
  Shield,
  Bot,
  Zap,
  Check,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

export function Platform() {
  return (
    <section
      id="platform"
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Platform Overview
          </div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-[1.1]">
            Everything you need.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-medium">
              Nothing you don&apos;t.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            Four essential tools unified in one elegant platform. Launch with
            confidence, maximize rewards, automate intelligently, and execute
            flawlessly.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {/* Launchpad - Featured */}
          <div className="lg:col-span-3 group">
            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg shadow-blue-500/25">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900">
                    Launchpad
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Launch your token with institutional-grade security.
                    Pre-audited templates, configurable tokenomics, and advanced
                    anti-bot protection ensure fair and secure launches every
                    time.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Audited smart contract templates",
                      "Advanced anti-bot protection",
                      "Fair launch mechanisms",
                      "Real-time monitoring",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white">
                        <div className="text-2xl font-bold">1000+</div>
                        <div className="text-blue-100 text-sm">
                          Successful Launches
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-4 text-white">
                        <div className="text-2xl font-bold">$50M+</div>
                        <div className="text-green-100 text-sm">
                          Total Volume
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 text-white">
                        <div className="text-2xl font-bold">99.8%</div>
                        <div className="text-purple-100 text-sm">
                          Success Rate
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 text-white">
                        <div className="text-2xl font-bold">&lt;30s</div>
                        <div className="text-orange-100 text-sm">
                          Deploy Time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Restaking */}
          <div className="group">
            <div className="relative h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-lg shadow-purple-500/25">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Restaking
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Maximize staking rewards by securing additional services.
                  Compound yields while contributing to network security across
                  protocols.
                </p>
                <div className="space-y-3">
                  {[
                    "Compound staking rewards",
                    "Multi-protocol security",
                    "Automated distribution",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Current APY</span>
                    <span className="text-lg font-bold text-purple-600">
                      12.5%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Agents */}
          <div className="group">
            <div className="relative h-full bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 mb-6 shadow-lg shadow-orange-500/25">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  AI Agents
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Automate trading strategies with intelligent agents. Built-in
                  guardrails and risk management keep you in complete control.
                </p>
                <div className="space-y-3">
                  {[
                    "Strategy backtesting",
                    "Risk limit controls",
                    "Manual approval gates",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-orange-600" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Active Agents</span>
                    <span className="text-lg font-bold text-orange-600">
                      Growing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fast Trading */}
          <div className="group">
            <div className="relative h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 shadow-lg shadow-green-500/25">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Fast Trading
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Lightning-fast execution with intelligent routing. MEV
                  protection and optimized fees ensure optimal trade outcomes.
                </p>
                <div className="space-y-3">
                  {[
                    "Sub-second execution",
                    "MEV protection",
                    "Minimal fees (<0.25%)",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Avg Speed</span>
                    <span className="text-lg font-bold text-green-600">
                      &lt;1.2s
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Performance Stats */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light mb-4">
                Built for{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  performance
                </span>
              </h3>
              <p className="text-gray-600">Real metrics from our platform</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "<2s",
                  label: "Median Transaction",
                  icon: TrendingUp,
                  color: "blue",
                },
                {
                  metric: "99.9%",
                  label: "Uptime",
                  icon: Shield,
                  color: "green",
                },
                {
                  metric: "4+",
                  label: "Live Networks",
                  icon: Globe,
                  color: "purple",
                },
                {
                  metric: "1000s",
                  label: "Successful Launches",
                  icon: Users,
                  color: "orange",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${stat.color}-100 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                  </div>
                  <div
                    className={`text-4xl font-light text-${stat.color}-600 mb-2`}
                  >
                    {stat.metric}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platform;
