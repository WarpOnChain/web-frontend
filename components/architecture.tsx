"use client";
import React from "react";

export function Architecture() {
  return (
    <section
      id="architecture"
      className="relative bg-gray-50 text-gray-900 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Built to scale.
            <br />
            <span className="font-medium">Designed to last.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            Modular architecture that grows with you. Add capabilities when you
            need them, without compromising performance or security.
          </p>
        </div>

        {/* Architecture components */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <h3 className="text-lg font-medium mb-3">Core Protocol</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Battle-tested foundation handling authentication, asset
              management, and cross-chain communication.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            </div>
            <h3 className="text-lg font-medium mb-3">Smart Router</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Intelligent routing engine that finds optimal paths for trades,
              launches, and cross-chain operations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-green-500 rounded-lg"></div>
            </div>
            <h3 className="text-lg font-medium mb-3">Security Layer</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Multi-signature wallets, time delays, and approval mechanisms
              ensure your assets stay secure.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-orange-500 rounded-lg transform rotate-45"></div>
            </div>
            <h3 className="text-lg font-medium mb-3">Agent Framework</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sandboxed environment for AI agents with built-in risk controls
              and manual override capabilities.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-cyan-500 rounded-full border-4 border-white"></div>
            </div>
            <h3 className="text-lg font-medium mb-3">Network Bridge</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Seamless connectivity across supported chains with automatic
              optimization for speed and cost.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-pink-500 rounded border-2 border-white"></div>
            </div>
            <h3 className="text-lg font-medium mb-3">Extension Points</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Open architecture allows for future modules and third-party
              integrations without breaking changes.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full text-sm text-gray-600">
            Open source components available on GitHub
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
