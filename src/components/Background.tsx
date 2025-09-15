// // src/components/Background.tsx
// // Single, fixed, deterministic underlay — no JS, no randomness.

// import type { CSSProperties } from "react";

// type Vars = CSSProperties & Record<string, string | number>;

// export default function Background() {
//   return (
//     <div
//       className="fixed inset-0 -z-50 pointer-events-none select-none"
//       aria-hidden="true"
//     >
//       {/* Uniform base tint — gives glass elements a stable backdrop */}
//       <div className="absolute inset-0 bg-[hsl(210_40%_98%)] dark:bg-[hsl(222_47%_8%)]" />

//       {/* Light/dark gradient field (fixed, no movement) */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="absolute -inset-1"
//           style={
//             {
//               "--g1": "radial-gradient(1100px 700px at 8% -12%, hsl(206 100% 96% / .98) 0%, transparent 58%)",
//               "--g2": "radial-gradient(1300px 800px at 92% -6%, hsl(197 100% 94% / .95) 0%, transparent 58%)",
//               "--g3": "radial-gradient(1100px 760px at 14% 104%, hsl(28 100% 94% / .92) 0%, transparent 60%)",
//               "--dg1": "radial-gradient(1100px 700px at -10% -10%, hsl(219 58% 15% / .92) 0%, transparent 58%)",
//               "--dg2": "radial-gradient(1100px 700px at 110% -8%, hsl(198 64% 16% / .88) 0%, transparent 58%)",
//               "--dg3": "radial-gradient(800px 600px at 100% 100%, hsl(259 56% 18% / .84) 0%, transparent 62%)",
//             } as Vars
//           }
//         >
//           <div className="absolute inset-0 dark:hidden" style={{ background: "var(--g1), var(--g2), var(--g3)" }} />
//           <div className="absolute inset-0 hidden dark:block" style={{ background: "var(--dg1), var(--dg2), var(--dg3)" }} />
//         </div>
//       </div>

//       {/* Orbs — purely CSS variables, deterministic */}
//       <div className="absolute inset-0">
//         <span
//           className="orb blue"
//           style={{ ["--x0" as any]: "-12%", ["--y0" as any]: "-10%", ["--s" as any]: "1.02" }}
//         />
//         <span
//           className="orb azure"
//           style={{ ["--x0" as any]: "72%", ["--y0" as any]: "-16%", ["--s" as any]: "1.06" }}
//         />
//         <span
//           className="orb violet"
//           style={{ ["--x0" as any]: "-8%", ["--y0" as any]: "62%", ["--s" as any]: "0.96" }}
//         />
//         <span
//           className="orb pink"
//           style={{ ["--x0" as any]: "58%", ["--y0" as any]: "66%", ["--s" as any]: "0.94" }}
//         />
//         <span
//           className="orb peach"
//           style={{ ["--x0" as any]: "18%", ["--y0" as any]: "26%", ["--s" as any]: "0.90" }}
//         />
//       </div>
//     </div>
//   );
// }


// src/components/Background.tsx
// Fixed, hydration-safe underlay with gentle animated gradients.
// No randomness, no JS state. Motion is pure CSS.









// "use client";

// import type { CSSProperties } from "react";

// type Vars = CSSProperties & Record<string, string | number>;

// export default function Background() {
//   return (
//     <div
//       className="fixed inset-0 -z-50 pointer-events-none select-none"
//       aria-hidden="true"
//     >
//       {/* Base tint (keeps glass stable) */}
//       <div className="absolute inset-0 bg-[hsl(210_40%_98%)] dark:bg-[hsl(222_47%_8%)]" />

//       {/* LIGHT MODE animated gradients */}
//       <div
//         className="absolute inset-0 overflow-hidden dark:hidden"
//         style={
//           {
//             // tuned toward cool blues/violets, less orange
//             "--g1": "radial-gradient(1200px 800px at 0% -10%, hsl(208 100% 95% / .90) 0%, transparent 60%)",
//             "--g2": "radial-gradient(1400px 900px at 100% -8%, hsl(200 100% 94% / .88) 0%, transparent 60%)",
//             "--g3": "radial-gradient(1200px 900px at 10% 110%, hsl(258 95% 94% / .80) 0%, transparent 62%)",
//           } as Vars
//         }
//       >
//         <div className="grad-layer grad-move-a" style={{ background: "var(--g1)" }} />
//         <div className="grad-layer grad-move-b" style={{ background: "var(--g2)" }} />
//         <div className="grad-layer grad-move-c" style={{ background: "var(--g3)" }} />
//       </div>

//       {/* DARK MODE animated gradients */}
//       <div
//         className="absolute inset-0 overflow-hidden hidden dark:block"
//         style={
//           {
//             "--dg1": "radial-gradient(1200px 800px at -10% -10%, hsl(220 55% 16% / .85) 0%, transparent 60%)",
//             "--dg2": "radial-gradient(1200px 800px at 110% -8%, hsl(201 60% 18% / .78) 0%, transparent 60%)",
//             "--dg3": "radial-gradient(900px 700px at 95% 105%, hsl(260 60% 20% / .72) 0%, transparent 64%)",
//           } as Vars
//         }
//       >
//         <div className="grad-layer grad-move-a" style={{ background: "var(--dg1)" }} />
//         <div className="grad-layer grad-move-b" style={{ background: "var(--dg2)" }} />
//         <div className="grad-layer grad-move-c" style={{ background: "var(--dg3)" }} />
//       </div>

//       {/* Orbs — deterministic, with subtle float using your Tailwind keyframes */}
//       <div className="absolute inset-0">
//         <span
//           className="orb blue animate-orb-float"
//           style={{ ["--x0" as any]: "-12%", ["--y0" as any]: "-10%", ["--s" as any]: "1.02" }}
//         />
//         <span
//           className="orb azure animate-orb-float"
//           style={{ ["--x0" as any]: "72%", ["--y0" as any]: "-16%", ["--s" as any]: "1.06" }}
//         />
//         <span
//           className="orb violet animate-orb-float"
//           style={{ ["--x0" as any]: "-8%", ["--y0" as any]: "62%", ["--s" as any]: "0.96" }}
//         />
//         {/* toned down warm hues */}
//         <span
//           className="orb pink animate-orb-float"
//           style={{ ["--x0" as any]: "58%", ["--y0" as any]: "66%", ["--s" as any]: "0.92", opacity: 0.45 }}
//         />
//         <span
//           className="orb peach animate-orb-float"
//           style={{ ["--x0" as any]: "18%", ["--y0" as any]: "26%", ["--s" as any]: "0.88", opacity: 0.35 }}
//         />
//       </div>

//       {/* Component-scoped CSS for smooth gradient motion */}
//       <style jsx>{`
//         .grad-layer {
//           position: absolute;
//           inset: -10%;
//           will-change: transform, opacity;
//           filter: saturate(1.05);
//         }
//         /* Three slightly different paths/speeds so motion feels organic */
//         .grad-move-a {
//           animation: gmA 26s ease-in-out infinite alternate;
//         }
//         .grad-move-b {
//           animation: gmB 34s ease-in-out infinite alternate;
//         }
//         .grad-move-c {
//           animation: gmC 42s ease-in-out infinite alternate;
//         }
//         @keyframes gmA {
//           0% { transform: translate3d(-2%, -1%, 0) scale(1.02); opacity: .95; }
//           100% { transform: translate3d(2%, 1.5%, 0) scale(1.06); opacity: .90; }
//         }
//         @keyframes gmB {
//           0% { transform: translate3d(1%, -1%, 0) scale(1.00); opacity: .88; }
//           100% { transform: translate3d(-1.5%, 1%, 0) scale(1.04); opacity: .84; }
//         }
//         @keyframes gmC {
//           0% { transform: translate3d(0.5%, 1%, 0) scale(1.00); opacity: .80; }
//           100% { transform: translate3d(-1%, -1.5%, 0) scale(1.05); opacity: .76; }
//         }
//       `}</style>
//     </div>
//   );
// }




// src/components/Background.tsx
// Server component. No styled-jsx. Animations come from Tailwind keyframes.

import type { CSSProperties } from "react";

type Vars = CSSProperties & Record<string, string | number>;

export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-50 pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Base tint */}
      <div className="absolute inset-0 bg-[hsl(210_40%_98%)] dark:bg-[hsl(222_47%_8%)]" />

      {/* LIGHT MODE gradients */}
      <div
        className="absolute inset-0 overflow-hidden dark:hidden"
        style={
          {
            "--g1": "radial-gradient(1200px 800px at 0% -10%, hsl(208 100% 95% / .90) 0%, transparent 60%)",
            "--g2": "radial-gradient(1400px 900px at 100% -8%, hsl(200 100% 94% / .88) 0%, transparent 60%)",
            "--g3": "radial-gradient(1200px 900px at 10% 110%, hsl(258 95% 94% / .80) 0%, transparent 62%)",
          } as Vars
        }
      >
        <div
          className="absolute -inset-[10%] animate-grad-a will-change-transform"
          style={{ background: "var(--g1)" }}
        />
        <div
          className="absolute -inset-[10%] animate-grad-b will-change-transform"
          style={{ background: "var(--g2)" }}
        />
        <div
          className="absolute -inset-[10%] animate-grad-c will-change-transform"
          style={{ background: "var(--g3)" }}
        />
      </div>

      {/* DARK MODE gradients — rebalanced for better top-left contrast */}
      <div
        className="absolute inset-0 overflow-hidden hidden dark:block"
        style={
          {
            // Darker top-left for headings
            "--dg1": "radial-gradient(1100px 700px at -20% -20%, hsl(220 50% 10% / .92) 0%, transparent 70%)",
            // Blue glow toward center-right
            "--dg2": "radial-gradient(1200px 900px at 60% 40%, hsl(210 65% 22% / .80) 0%, transparent 70%)",
            // Violet bottom-right
            "--dg3": "radial-gradient(900px 700px at 95% 105%, hsl(260 60% 20% / .72) 0%, transparent 64%)",
          } as Vars
        }
      >
        <div
          className="absolute -inset-[10%] animate-grad-a will-change-transform"
          style={{ background: "var(--dg1)" }}
        />
        <div
          className="absolute -inset-[10%] animate-grad-b will-change-transform"
          style={{ background: "var(--dg2)" }}
        />
        <div
          className="absolute -inset-[10%] animate-grad-c will-change-transform"
          style={{ background: "var(--dg3)" }}
        />
      </div>

      {/* Orbs — deterministic + subtle float (you already have .orb styles in globals) */}
      <div className="absolute inset-0">
        <span
          className="orb blue animate-orb-float"
          style={{ ["--x0" as any]: "-12%", ["--y0" as any]: "-10%", ["--s" as any]: "1.02" }}
        />
        <span
          className="orb azure animate-orb-float"
          style={{ ["--x0" as any]: "72%", ["--y0" as any]: "-16%", ["--s" as any]: "1.06" }}
        />
        <span
          className="orb violet animate-orb-float"
          style={{ ["--x0" as any]: "-8%", ["--y0" as any]: "62%", ["--s" as any]: "0.96" }}
        />
        <span
          className="orb pink animate-orb-float"
          style={{ ["--x0" as any]: "58%", ["--y0" as any]: "66%", ["--s" as any]: "0.92", opacity: 0.45 }}
        />
        <span
          className="orb peach animate-orb-float"
          style={{ ["--x0" as any]: "18%", ["--y0" as any]: "26%", ["--s" as any]: "0.88", opacity: 0.35 }}
        />
      </div>
    </div>
  );
}
