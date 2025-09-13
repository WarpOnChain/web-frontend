"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation";
import LandingHero from "@/components/landing-hero";
import { Platform } from "@/components/platform";
import { Premium } from "@/components/premium";
import Architecture from "@/components/architecture";

import FAQ from "@/components/faq";
import { Community } from "@/components/community";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <LandingHero />
      <main>
        <Platform />
        {/* <Premium /> */}
        {/* <Architecture /> */}

        {/* <FAQ /> */}
        <Community />
      </main>
      <Footer />
    </div>
  );
}
