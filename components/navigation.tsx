"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#platform");

  const navigationItems = [
    { name: "Docs", href: "https://docs.warponchain.com", external: true },
    { name: "Bridge", href: "https://bridge.warponchain.com", external: true },
    { name: "Explorer", href: "https://sepolia.warpscan.org", external: true },
    { name: "Faucet", href: "https://faucet.warponchain.com", external: true },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = [
      "platform",
      "architecture",
      "networks",
      "faq",
      "community",
    ];
    const observers: IntersectionObserver[] = [];

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveHash(`#${id}`);
              }
            });
          },
          { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
        );

        observer.observe(el);
        observers.push(observer);
      });
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleMobileNavClick = (href: string) => {
    scrollToSection(href.substring(1));
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Container */}
      <div className="fixed top-0 inset-x-0 z-50 px-4 md:px-6 pt-4">
        <nav
          className={cn(
            "mx-auto max-w-5xl rounded-2xl transition-all duration-300 relative overflow-hidden",
            isScrolled
              ? "bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-md shadow-xl shadow-blue-900/10"
              : "bg-gradient-to-r from-gray-900/90 via-black/90 to-gray-900/90 backdrop-blur-sm shadow-lg shadow-cyan-900/10"
          )}
        >
          {/* Glow effect */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-60" /> */}
          {/* <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" /> */}

          <div className="relative px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Warp Onchain"
                width={44}
                height={44}
                className="h-14 w-auto drop-shadow-lg"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => {
                const isActive = activeHash === item.href;
                return item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium transition-colors hover:text-blue-400 text-gray-300"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.substring(1));
                    }}
                    className={cn(
                      "font-medium transition-colors hover:text-blue-400",
                      isActive ? "text-blue-400" : "text-gray-300"
                    )}
                  >
                    {item.name}
                  </a>
                );
              })}
              <Link
                href="#platform"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-all"
              >
                Enter Portal
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={cn(
                    "block w-5 h-0.5 bg-current transition-all duration-300 ease-out",
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-1.5"
                      : "rotate-0 translate-y-0"
                  )}
                />
                <span
                  className={cn(
                    "block w-5 h-0.5 bg-current transition-all duration-300 ease-out my-1",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "block w-5 h-0.5 bg-current transition-all duration-300 ease-out",
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-1.5"
                      : "rotate-0 translate-y-0"
                  )}
                />
              </div>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-gray-700/50",
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="relative bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-md rounded-b-2xl">
              {/* Inner glow for dropdown */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-blue-500/5 rounded-b-2xl" />
              <div className="relative px-6 py-4 space-y-3">
                {navigationItems.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 px-2 text-base font-medium transition-all duration-200 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileNavClick(item.href);
                      }}
                      className={cn(
                        "block py-3 px-2 text-base font-medium transition-all duration-200 rounded-lg hover:bg-white/5",
                        activeHash === item.href
                          ? "text-cyan-400 bg-cyan-500/10"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      {item.name}
                    </a>
                  )
                )}
                <div className="pt-3">
                  <Link
                    href="#platform"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl text-center font-medium transition-all duration-200 shadow-md shadow-blue-500/15"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Enter Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
