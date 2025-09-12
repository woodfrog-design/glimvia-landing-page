// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { ThemeProvider } from "@/components/ThemeProvider";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";
import MotionSetup from "@/components/MotionSetup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookiesNotice from "@/components/CookiesNotice";
import AnalyticsListener from "./AnalyticsListener";
import SEOJsonLd from "@/components/SEOJsonLd";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" }
  ],
  keywords: [
    "Glimvia", "Apache Superset", "mobile analytics", "dashboards",
    "KPI alerts", "business intelligence", "data visualization", "BI app"
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Glimvia",
    title,
    description,
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Glimvia" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        {/* JSON-LD (Organization + WebSite) */}
        <SEOJsonLd />

        {gaId && (
          <>
            {/* GA4 tag: always load */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-setup" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  anonymize_ip: true,
                  send_page_view: false
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.variable} h-full`} suppressHydrationWarning>
        <ThemeProvider>
          <MotionSetup>
            <Background />
            <SmoothScroll />

            <div className="relative z-10 flex min-height-screen flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>

            {/* Sends page_view on route changes */}
            <AnalyticsListener />
            <CookiesNotice />
          </MotionSetup>
        </ThemeProvider>
      </body>
    </html>
  );
}
