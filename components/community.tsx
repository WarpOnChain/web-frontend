"use client";

import React from "react";
import { FaXTwitter, FaTelegram, FaDiscord, FaGithub } from "react-icons/fa6";

export function Community() {
  return (
    <section id="community" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Join the community.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            Connect with builders, traders, and innovators shaping the future of
            DeFi. Get support, share ideas, and stay updated.
          </p>
        </div>

        {/* Community links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <a
            href="https://discord.gg/M7rCWeEyXH"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 hover:bg-white/10 rounded-2xl p-8 transition-all duration-200 border border-white/10 text-center"
          >
            <FaDiscord className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg font-medium mb-2">Discord</h3>
            <p className="text-sm text-gray-400">
              Real-time support and community discussions
            </p>
          </a>

          <a
            href="https://x.com/warponchain"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 hover:bg-white/10 rounded-2xl p-8 transition-all duration-200 border border-white/10 text-center"
          >
            <FaXTwitter className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-medium mb-2">Twitter/X</h3>
            <p className="text-sm text-gray-400">
              Latest updates and announcements
            </p>
          </a>

          <a
            href="https://t.me/warponchain"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 hover:bg-white/10 rounded-2xl p-8 transition-all duration-200 border border-white/10 text-center"
          >
            <FaTelegram className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
            <h3 className="text-lg font-medium mb-2">Telegram</h3>
            <p className="text-sm text-gray-400">
              Community chat and quick support
            </p>
          </a>

          <a
            href="https://github.com/warponchain"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 hover:bg-white/10 rounded-2xl p-8 transition-all duration-200 border border-white/10 text-center"
          >
            <FaGithub className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-medium mb-2">GitHub</h3>
            <p className="text-sm text-gray-400">
              Open source code and contributions
            </p>
          </a>
        </div>

        {/* Newsletter signup */}
        {/* <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 text-center backdrop-blur-sm border border-white/10">
          <h3 className="text-2xl md:text-3xl font-light mb-4">
            Stay in the loop
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get notified about new features, network additions, and important
            updates. No spam, just the essentials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-medium transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default Community;
