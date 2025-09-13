"use client";

import React from "react";
import Image from "next/image";

export function Premium() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Security first.
            <br />
            <span className="font-medium text-blue-400">Speed always.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            Every component is designed with institutional-grade security and
            consumer-grade simplicity. No compromises.
          </p>
        </div>

        {/* Three-column benefits */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white rounded"></div>
            </div>
            <h3 className="text-xl font-medium mb-4">Audited by Design</h3>
            <p className="text-gray-400 leading-relaxed">
              Every smart contract template undergoes rigorous security audits.
              Launch with confidence knowing your code has been battle-tested.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white rounded-full"></div>
            </div>
            <h3 className="text-xl font-medium mb-4">Intelligent Routing</h3>
            <p className="text-gray-400 leading-relaxed">
              Advanced algorithms find the best execution paths across chains,
              protecting you from MEV while minimizing fees and slippage.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white rounded-lg"></div>
            </div>
            <h3 className="text-xl font-medium mb-4">Always in Control</h3>
            <p className="text-gray-400 leading-relaxed">
              AI agents require your approval for every action. Set strict
              limits, review strategies, and maintain complete control over your
              assets.
            </p>
          </div>
        </div>

        {/* Feature highlight with visual */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              One platform.
              <br />
              <span className="font-medium">Endless possibilities.</span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <div>
                  <h4 className="font-medium mb-2">Cross-Chain Native</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Seamlessly operate across Avalanche, Hedera, Flare, and
                    more. One interface, all networks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <div>
                  <h4 className="font-medium mb-2">Modular Architecture</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Use only what you need. Add features as your requirements
                    grow. Everything integrates seamlessly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
                <div>
                  <h4 className="font-medium mb-2">Institutional Grade</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Built to handle serious volume with enterprise-level
                    security, monitoring, and compliance features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-xs text-gray-400 mb-2">
                    LAUNCH SUCCESS
                  </div>
                  <div className="text-2xl font-light">99.8%</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-xs text-gray-400 mb-2">AVG TX TIME</div>
                  <div className="text-2xl font-light">1.2s</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-xs text-gray-400 mb-2">TOTAL VOLUME</div>
                  <div className="text-2xl font-light">$50M+</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-xs text-gray-400 mb-2">NETWORKS</div>
                  <div className="text-2xl font-light">4+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Premium;
