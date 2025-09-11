import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";
import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";
import MotionSetup from "@/components/MotionSetup";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className={inter.variable} suppressHydrationWarning>
        <ThemeProvider>
          <MotionSetup>
            <Background />
            <SmoothScroll />
            
            <div className="relative z-10 flex min-h-screen flex-col overflow-x-clip">
              <Navbar />
              <main className="flex-grow pt-20">
                {children}
              </main>
              <Footer />
            </div>

          </MotionSetup>
        </ThemeProvider>
      </body>
    </html>
  );
}