/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Warp Onchain – Launchpad, Restaking, AI Agents, Yields, Fast Trading",
  description:
    "Launch memecoins, restake for layered security, orchestrate AI agents and earn high yields—all in a fast, clean interface across multiple networks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/warp.png" />
        {/* og image */}
        <meta property="og:image" content="/images/warp.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Launch memecoins, restake for layered security, orchestrate AI agents and earn high yields—all in a fast, clean interface across multiple networks."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-YJBRGN40NF"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YJBRGN40NF');`}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  );
}
