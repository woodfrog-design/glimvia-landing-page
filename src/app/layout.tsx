// // import "./globals.css";
// // import type { Metadata } from "next";

// // import { ThemeProvider } from "@/components/ThemeProvider";
// // import Background from "@/components/Background";
// // import PauseButton from "@/components/PauseButton";
// // import RevealClient from "@/components/RevealClient";

// // export const metadata: Metadata = {
// //   title: "Glimvia — Apache Superset on Mobile",
// //   description: "Your dashboards, KPIs and alerts in your pocket.",
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en" suppressHydrationWarning>
// //       <body className="min-h-screen antialiased">
// //         <ThemeProvider>
// //           {/* Background stack (orbs → glass → lines) */}
// //           <Background />

// //           {/* Optional: pause/resume the moving orbs */}
// //           <PauseButton />

// //           {/* One-time client hook for scroll reveal animations */}
// //           <RevealClient />

// //           {children}
// //         </ThemeProvider>
// //       </body>
// //     </html>
// //   );
// // }

// // import "./globals.css";
// // import type { Metadata } from "next";
// // import { ThemeProvider } from "@/components/ThemeProvider";
// // import Background from "@/components/Background";
// // import SmoothScroll from "@/components/SmoothScroll";
// // import MotionSetup from "@/components/MotionSetup";

// // // Typography – Work Sans (clean, unobtrusive, sharp)
// // import { Work_Sans } from "next/font/google";
// // const workSans = Work_Sans({
// //   subsets: ["latin"],
// //   variable: "--font-work-sans",
// //   display: "swap",
// // });

// // export const metadata: Metadata = {
// //   title: "Glimvia — Apache Superset on Mobile",
// //   description: "Your dashboards, KPIs and alerts in your pocket.",
// // };

// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //   return (
// //     <html lang="en" suppressHydrationWarning>
// //       <body className={`${workSans.variable} font-sans`}>
// //         <ThemeProvider>
// //           <MotionSetup>
// //             <Background />
// //             <SmoothScroll />
// //             {children}
// //           </MotionSetup>
// //         </ThemeProvider>
// //       </body>
// //     </html>
// //   );
// // }

// // import "./globals.css";
// // import type { Metadata } from "next";
// // import { Inter } from "next/font/google";

// // import { ThemeProvider } from "@/components/ThemeProvider";
// // import Background from "@/components/Background";
// // import SmoothScroll from "@/components/SmoothScroll";
// // import MotionSetup from "@/components/MotionSetup";

// // const inter = Inter({
// //   subsets: ["latin"],
// //   variable: "--font-inter",
// //   display: "swap",
// // });

// // export const metadata: Metadata = {
// //   title: "Glimvia — Apache Superset on Mobile",
// //   description: "Your dashboards, KPIs and alerts in your pocket.",
// // };

// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //   return (
// //     <html lang="en" suppressHydrationWarning>
// //       <body className={inter.variable}>
// //         <ThemeProvider>
// //           <MotionSetup>
// //             <Background />
// //             <SmoothScroll />
// //             {children}
// //           </MotionSetup>
// //         </ThemeProvider>
// //       </body>
// //     </html>
// //   );
// // }

// // import "./globals.css";
// // import type { Metadata } from "next";
// // import { Inter } from "next/font/google";

// // import { ThemeProvider } from "@/components/ThemeProvider";
// // import Background from "@/components/Background";
// // import SmoothScroll from "@/components/SmoothScroll";
// // import MotionSetup from "@/components/MotionSetup";
// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";

// // const inter = Inter({
// //   subsets: ["latin"],
// //   variable: "--font-inter",
// //   display: "swap",
// // });

// // export const metadata: Metadata = {
// //   title: "Glimvia — Apache Superset on Mobile",
// //   description: "Your dashboards, KPIs and alerts in your pocket.",
// // };

// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //   return (
// //     <html lang="en" suppressHydrationWarning>
// //       <body className={inter.variable}>
// //         <ThemeProvider>
// //           <MotionSetup>
// //             <Background />
// //             <SmoothScroll />
// //             <Navbar />
// //             <main>{children}</main>
// //             <Footer />
// //           </MotionSetup>
// //         </ThemeProvider>
// //       </body>
// //     </html>
// //   );
// // }

// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// import { ThemeProvider } from "@/components/ThemeProvider";
// import Background from "@/components/Background";
// import SmoothScroll from "@/components/SmoothScroll";
// import MotionSetup from "@/components/MotionSetup";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Glimvia — Apache Superset on Mobile",
//   description: "Your dashboards, KPIs and alerts in your pocket.",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.variable}>
//         <ThemeProvider>
//           <MotionSetup>
//             <Background />
//             <SmoothScroll />

//             {/* The main layout now correctly wraps the Navbar, main content, and Footer */}
//             <div className="relative z-10 flex min-h-screen flex-col">
//               <Navbar />
//               <main className="flex-grow">
//                 {children}
//               </main>
//               <Footer />
//             </div>

//           </MotionSetup>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

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
      <body className={inter.variable}>
        <ThemeProvider>
          <MotionSetup>
            <Background />
            <SmoothScroll />
            
            <div className="relative z-10 flex min-h-screen flex-col overflow-x-clip">
              <Navbar />
              {/* === TEST CLASS ADDED TO THE LINE BELOW === */}
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