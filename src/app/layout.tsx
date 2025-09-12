// src/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";
import MotionSetup from "@/components/MotionSetup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookiesNotice from "@/components/CookiesNotice";
import SEOJsonLd from "@/components/SEOJsonLd";
import AnalyticsListener from "./AnalyticsListener";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = "Glimvia — Apache Superset on Mobile";
const description = "Your dashboards, KPIs and alerts in your pocket.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Glimvia",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  keywords: [
    "Glimvia",
    "Apache Superset",
    "mobile analytics",
    "dashboards",
    "KPI alerts",
    "business intelligence",
    "data visualization",
    "BI app",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Glimvia",
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Glimvia" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

// Move themeColor to viewport (fixes build warning)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        {/* Structured data */}
        <SEOJsonLd />
      </head>
      <body className={`${inter.variable} h-full`} suppressHydrationWarning>
        {/* GA4 pageview + event wiring (also injects gtag) */}
        <AnalyticsListener />

        <ThemeProvider>
          <MotionSetup>
            <Background />
            <SmoothScroll />
            <div className="relative z-10 flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <CookiesNotice />
          </MotionSetup>
        </ThemeProvider>
      </body>
    </html>
  );
}
