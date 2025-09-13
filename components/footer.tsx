"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaTelegram, FaDiscord, FaGithub } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 ">
            <Image
              src="/images/logo.png"
              alt="Warp Onchain"
              width={200}
              height={40}
              className="h-12 w-auto bg-black/90 rounded-md p-1"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              The future of onchain building. Launch, stake, trade, and earn
              with one elegant platform.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-medium mb-4">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#platform"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Launchpad
                </Link>
              </li>
              <li>
                <Link
                  href="#platform"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Restaking
                </Link>
              </li>
              <li>
                <Link
                  href="#platform"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  AI Agents
                </Link>
              </li>
              <li>
                <Link
                  href="#platform"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Trading
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://docs.warponchain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://sepolia.warpscan.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Testnet Explorer
                </a>
              </li>
              <li>
                <a
                  href="https://faucet.warponchain.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Faucet
                </a>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-medium mb-4">Community</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://discord.gg/warponchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/warponchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/warponchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/warponchain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © 2024 Warp Onchain. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://x.com/warponchain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FaXTwitter className="w-4 h-4 text-gray-600" />
            </a>
            <a
              href="https://discord.gg/warponchain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FaDiscord className="w-4 h-4 text-gray-600" />
            </a>
            <a
              href="https://t.me/warponchain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FaTelegram className="w-4 h-4 text-gray-600" />
            </a>
            <a
              href="https://github.com/warponchain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <FaGithub className="w-4 h-4 text-gray-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
