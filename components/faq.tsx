"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What is Warp Onchain?",
    a: "A comprehensive platform that unifies token launching, asset restaking, AI trading agents, and fast execution into one seamless experience. Built for both beginners and professionals.",
  },
  {
    q: "How secure is the launchpad?",
    a: "Every smart contract template is audited by leading security firms. We include configurable anti-bot mechanisms, fair launch mechanics, and multi-signature security by default.",
  },
  {
    q: "How does restaking work?",
    a: "Restaking allows you to use your staked assets to secure additional protocols while earning extra rewards. Your original stake remains secure while generating additional yield.",
  },
  {
    q: "Can I control AI trading agents?",
    a: "Absolutely. All AI agents operate with strict guardrails including position limits, approved trading venues, mandatory backtesting, and manual approval requirements for all strategies.",
  },
  {
    q: "Which networks do you support?",
    a: "Currently live on Avalanche, Hedera, Flare, and Songbird. Base and X Layer support is coming soon, with more networks added based on community needs.",
  },
  {
    q: "What are the trading fees?",
    a: "Trading fees are typically under 0.25%, with exact rates varying by network and trade size. We optimize routing to minimize both fees and slippage for every transaction.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-gray-50 text-gray-900 py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
            Questions?
            <br />
            <span className="font-medium">We have answers.</span>
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about launching, trading, and earning on
            our platform.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.q}
                  </span>
                  <div className="flex-shrink-0 ml-6">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="inline-flex items-center gap-6">
            <a
              href="#community"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Join our Discord →
            </a>
            <a
              href="mailto:support@warponchain.com"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              Email Support →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
