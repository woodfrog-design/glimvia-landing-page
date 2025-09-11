import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";
import MotionSetup from "@/components/MotionSetup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookiesNotice from "@/components/CookiesNotice";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glimvia — Apache Superset on Mobile",
  description: "Your dashboards, KPIs and alerts in your pocket.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <MotionSetup>
            <Background />
            <SmoothScroll />
            
            {/* The main layout now correctly wraps the Navbar, main content, and Footer */}
            <div className="relative z-10 flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>

            {/* Cookies notice appears on all pages */}
            <CookiesNotice />
          </MotionSetup>
        </ThemeProvider>
      </body>
    </html>
  );
}