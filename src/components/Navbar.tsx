// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";

// const LINKS = [
//   { label: "About", href: "#about" },
//   { label: "Features", href: "#features" },
//   { label: "Experience", href: "#experience" },
// ];

// export default function Navbar() {
//   const { resolvedTheme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   // UI state
//   const [collapsedIdle, setCollapsedIdle] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Refs & measurements
//   const headerRef = useRef<HTMLDivElement>(null);
//   const brandRef  = useRef<HTMLAnchorElement>(null);
//   const overNavRef = useRef(false);
//   const idleT = useRef<number | null>(null);
//   const isTouch = useRef(false);
//   const mobileOpenRef = useRef(false);
//   const [navWidth, setNavWidth] = useState<number | null>(null);

//   useEffect(() => {
//     setMounted(true);
//     isTouch.current = (navigator.maxTouchPoints || 0) > 0;
//   }, []);
//   useEffect(() => { mobileOpenRef.current = mobileOpen; }, [mobileOpen]);

//   const isDark = mounted ? resolvedTheme === "dark" : false;

//   // Measure full vs collapsed width
//   const measureAndSetWidth = (collapse: boolean) => {
//     const header = headerRef.current;
//     if (!header) return;

//     const fullW = Math.min(1100, Math.floor(window.innerWidth * 0.92)); // container
//     const brandW = brandRef.current?.getBoundingClientRect().width ?? 0;
//     const styles = getComputedStyle(header);
//     const pad =
//       parseFloat(styles.paddingLeft || "0") +
//       parseFloat(styles.paddingRight || "0");
//     const collapsedW = Math.ceil(brandW + pad + 4); // just the brand width
//     setNavWidth(collapse ? collapsedW : fullW);
//   };

//   useEffect(() => {
//     const onResize = () => measureAndSetWidth(collapsedIdle);
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [collapsedIdle]);

//   // Idle-only shrink (pick-a-boo disabled). Never shrink while hovered or while menu is open.
//   const armIdleTimer = () => {
//     if (isTouch.current) return;
//     if (idleT.current) window.clearTimeout(idleT.current);
//     idleT.current = window.setTimeout(() => {
//       if (!overNavRef.current && !mobileOpenRef.current) setCollapsedIdle(true);
//     }, 2200) as unknown as number;
//   };
//   const cancelIdle = () => {
//     setCollapsedIdle(false);
//     if (idleT.current) window.clearTimeout(idleT.current);
//     armIdleTimer();
//   };
//   useEffect(() => {
//     if (isTouch.current) return;
//     armIdleTimer();
//     const onActivity = () => cancelIdle();
//     const events: (keyof WindowEventMap)[] = [
//       "mousemove", "pointermove", "keydown", "scroll", "pointerdown", "wheel", "touchstart"
//     ];
//     events.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));
//     return () => events.forEach((e) => window.removeEventListener(e, onActivity));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // Theme-aware CTA classes (instant switch)
//   const ctaClass = clsx(
//     "glow-cta cta-shine rounded-full px-3.5 py-1.5 text-sm transition shadow-sm hover:opacity-95 active:scale-[.98]",
//     isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
//   );

//   return (
//     <>
//       {/* Sticky frosted navbar */}
//       <header
//         ref={headerRef}
//         className={clsx(
//           "fixed top-3 z-40 rounded-2xl px-3 sm:px-4 py-2",
//           "glass glass-nav nav-anim",
//           "transition-[width,left,transform] duration-300 ease-out",
//           // Expanded: centered; Collapsed: hug the left (no duplicate logo—same brand element)
//           collapsedIdle ? "left-4 -translate-x-0" : "left-1/2 -translate-x-1/2"
//         )}
//         style={{ width: navWidth ? `${navWidth}px` : undefined, willChange: "width, transform" }}
//         aria-label="Primary"
//         onMouseEnter={() => { overNavRef.current = true; cancelIdle(); }}
//         onMouseLeave={() => { overNavRef.current = false; armIdleTimer(); }}
//       >
//         <nav className="flex items-center justify-between gap-3">
//           {/* Brand (always visible; same element when collapsed) */}
//           <a
//             ref={brandRef}
//             href="#cta"
//             className="font-semibold tracking-tight text-sm sm:text-base"
//             aria-label="Glimvia — back to top"
//           >
//             Glimvia
//           </a>

//           {/* Center links (desktop) — hide when collapsed idle */}
//           <ul
//             className={clsx(
//               "hidden md:flex items-center justify-center gap-5 lg:gap-7 text-sm transition-opacity",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//           >
//             {LINKS.map((l) => (
//               <li key={l.href}>
//                 <a href={l.href} className="link-ux opacity-90 hover:opacity-100 transition">
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Right (desktop) — hide when collapsed idle */}
//           <div
//             className={clsx(
//               "hidden md:flex items-center gap-2 transition-opacity",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//           >
//             <a href="#download" className={ctaClass}>Get the app</a>

//             <button
//               type="button"
//               aria-label="Toggle theme"
//               onClick={() => setTheme(isDark ? "light" : "dark")}
//               className="inline-flex items-center justify-center size-9 rounded-xl glass active:scale-[.98] transition"
//               title={isDark ? "Switch to light" : "Switch to dark"}
//             >
//               {!mounted ? (
//                 <span aria-hidden className="block size-4 rounded-full bg-slate-400/60 dark:bg-slate-500/60" />
//               ) : isDark ? (
//                 <Sun size={16} />
//               ) : (
//                 <Moon size={16} />
//               )}
//             </button>
//           </div>

//           {/* Right (mobile) — hamburger; hide when collapsed idle */}
//           <button
//             aria-label="Open menu"
//             className={clsx(
//               "md:hidden size-9 rounded-xl glass flex items-center justify-center active:scale-[.98] transition",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//             onClick={() => setMobileOpen(true)}
//           >
//             <Menu size={18} />
//           </button>
//         </nav>
//       </header>

//       {/* MOBILE OVERLAY MENU — heavier blur + stronger separators + theme toggle + CTA */}
//       <div
//         className={clsx(
//           "md:hidden fixed inset-0 z-40 transition",
//           mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         )}
//         aria-hidden={!mobileOpen}
//       >
//         {/* Heavier glass on mobile overlay */}
//         <div className="absolute inset-0 glass glass-strong" />

//         {/* Close */}
//         <button
//           aria-label="Close menu"
//           className="absolute top-4 right-4 size-10 rounded-xl glass flex items-center justify-center active:scale-[.98] transition"
//           onClick={() => setMobileOpen(false)}
//         >
//           <X size={18} />
//         </button>

//         {/* Content block — centered from top */}
//         <div className="absolute left-1/2 -translate-x-1/2 top-[18vh] w-[min(92vw,520px)] text-center">
//           {/* Links with stronger separators */}
//           <ul className="rounded-xl overflow-hidden bg-transparent text-lg font-medium text-center divide-y divide-strong">
//             {LINKS.map((l, idx) => (
//               <li key={l.href} className="fade-slide-in" style={{ animationDelay: `${idx * 60}ms` }}>
//                 <a
//                   href={l.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="block py-3 px-6 link-ux"
//                 >
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile theme toggle */}
//           <div className="mt-8 fade-slide-in" style={{ animationDelay: `${LINKS.length * 60}ms` }}>
//             <button
//               onClick={() => setTheme(isDark ? "light" : "dark")}
//               className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass active:scale-[.98] transition"
//               aria-label="Toggle theme"
//               title={isDark ? "Switch to light" : "Switch to dark"}
//             >
//               {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <span className="size-4 rounded-full bg-slate-400/60" />}
//               <span className="text-sm">{mounted ? (isDark ? "Light mode" : "Dark mode") : "Theme"}</span>
//             </button>
//           </div>

//           {/* Mobile CTA (theme-aware + strong shine) */}
//           <div className="mt-6 fade-slide-in" style={{ animationDelay: `${(LINKS.length + 1) * 60}ms` }}>
//             <a
//               href="#cta"
//               onClick={() => setMobileOpen(false)}
//               className={clsx("inline-block", ctaClass)}
//             >
//               Get the app
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";

// const LINKS = [
//   { label: "About", href: "#about" },
//   { label: "Features", href: "#features" },
//   { label: "Experience", href: "#experience" },
// ];

// export default function Navbar() {
//   const { resolvedTheme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   const [collapsedIdle, setCollapsedIdle] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const headerRef = useRef<HTMLDivElement>(null);
//   const brandRef  = useRef<HTMLAnchorElement>(null);
//   const overNavRef = useRef(false);
//   const idleT = useRef<number | null>(null);
//   const isTouch = useRef(false);
//   const mobileOpenRef = useRef(false);
//   const [navWidth, setNavWidth] = useState<number | null>(null);

//   useEffect(() => {
//     setMounted(true);
//     isTouch.current = (navigator.maxTouchPoints || 0) > 0;
//   }, []);
//   useEffect(() => { mobileOpenRef.current = mobileOpen; }, [mobileOpen]);

//   const isDark = mounted ? resolvedTheme === "dark" : false;

//   const measureAndSetWidth = (collapse: boolean) => {
//     const header = headerRef.current;
//     if (!header) return;

//     const fullW = Math.min(1100, Math.floor(window.innerWidth * 0.92));
//     const brandW = brandRef.current?.getBoundingClientRect().width ?? 0;
//     const styles = getComputedStyle(header);
//     const pad =
//       parseFloat(styles.paddingLeft || "0") +
//       parseFloat(styles.paddingRight || "0");
//     const collapsedW = Math.ceil(brandW + pad + 4);
//     setNavWidth(collapse ? collapsedW : fullW);
//   };

//   useEffect(() => {
//     const onResize = () => measureAndSetWidth(collapsedIdle);
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [collapsedIdle]);

//   const armIdleTimer = () => {
//     if (isTouch.current) return;
//     if (idleT.current) window.clearTimeout(idleT.current);
//     idleT.current = window.setTimeout(() => {
//       if (!overNavRef.current && !mobileOpenRef.current) setCollapsedIdle(true);
//     }, 2200) as unknown as number;
//   };
//   const cancelIdle = () => {
//     setCollapsedIdle(false);
//     if (idleT.current) window.clearTimeout(idleT.current);
//     armIdleTimer();
//   };
//   useEffect(() => {
//     if (isTouch.current) return;
//     armIdleTimer();
//     const onActivity = () => cancelIdle();
//     const events: (keyof WindowEventMap)[] = [
//       "mousemove", "pointermove", "keydown", "scroll", "pointerdown", "wheel", "touchstart"
//     ];
//     events.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));
//     return () => events.forEach((e) => window.removeEventListener(e, onActivity));
//   }, []);

//   const ctaClass = clsx(
//     "glow-cta cta-shine rounded-full px-3.5 py-1.5 text-sm transition shadow-sm hover:opacity-95 active:scale-[.98]",
//     isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
//   );

//   return (
//     <>
//       <header
//         ref={headerRef}
//         className={clsx(
//           "fixed top-3 z-40 rounded-2xl px-3 sm:px-4 py-2",
//           "glass glass-nav nav-anim",
//           "transition-[width,left,transform] duration-300 ease-out",
//           collapsedIdle ? "left-4 -translate-x-0" : "left-1/2 -translate-x-1/2"
//         )}
//         style={{ width: navWidth ? `${navWidth}px` : undefined, willChange: "width, transform" }}
//         aria-label="Primary"
//         onMouseEnter={() => { overNavRef.current = true; cancelIdle(); }}
//         onMouseLeave={() => { overNavRef.current = false; armIdleTimer(); }}
//       >
//         <nav className="flex items-center justify-between gap-3">
//           <a
//             ref={brandRef}
//             href="#cta"
//             className="font-semibold tracking-tight text-sm sm:text-base"
//             aria-label="Glimvia — back to top"
//           >
//             Glimvia
//           </a>

//           <ul
//             className={clsx(
//               "hidden md:flex items-center justify-center gap-5 lg:gap-7 text-sm transition-opacity",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//           >
//             {LINKS.map((l) => (
//               <li key={l.href}>
//                 <a href={l.href} className="link-ux opacity-90 hover:opacity-100 transition">
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div
//             className={clsx(
//               "hidden md:flex items-center gap-2 transition-opacity",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//           >
//             <a href="#download" className={ctaClass}>Get the app</a>

//             <button
//               type="button"
//               aria-label="Toggle theme"
//               onClick={() => setTheme(isDark ? "light" : "dark")}
//               className="inline-flex items-center justify-center size-9 rounded-xl glass active:scale-[.98] transition"
//               title={isDark ? "Switch to light" : "Switch to dark"}
//             >
//               {!mounted ? (
//                 <span aria-hidden className="block size-4 rounded-full bg-slate-400/60 dark:bg-slate-500/60" />
//               ) : isDark ? (
//                 <Sun size={16} />
//               ) : (
//                 <Moon size={16} />
//               )}
//             </button>
//           </div>

//           <button
//             aria-label="Open menu"
//             className={clsx(
//               "md:hidden size-9 rounded-xl glass flex items-center justify-center active:scale-[.98] transition",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//             onClick={() => setMobileOpen(true)}
//           >
//             <Menu size={18} />
//           </button>
//         </nav>
//       </header>

//       <div
//         className={clsx(
//           "md:hidden fixed inset-0 z-40 transition",
//           mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         )}
//         aria-hidden={!mobileOpen}
//       >
//         <div className="absolute inset-0 glass glass-strong" />

//         <button
//           aria-label="Close menu"
//           className="absolute top-4 right-4 size-10 rounded-xl glass flex items-center justify-center active:scale-[.98] transition"
//           onClick={() => setMobileOpen(false)}
//         >
//           <X size={18} />
//         </button>

//         <div className="absolute left-1/2 -translate-x-1/2 top-[18vh] w-[min(92vw,520px)] text-center">
//           <ul className="rounded-xl overflow-hidden bg-transparent text-lg font-medium text-center divide-y divide-strong">
//             {LINKS.map((l, idx) => (
//               <li key={l.href} className="fade-slide-in" style={{ animationDelay: `${idx * 60}ms` }}>
//                 <a
//                   href={l.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="block py-3 px-6 link-ux"
//                 >
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-8 fade-slide-in" style={{ animationDelay: `${LINKS.length * 60}ms` }}>
//             <button
//               onClick={() => setTheme(isDark ? "light" : "dark")}
//               className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass active:scale-[.98] transition"
//               aria-label="Toggle theme"
//               title={isDark ? "Switch to light" : "Switch to dark"}
//             >
//               {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <span className="size-4 rounded-full bg-slate-400/60" />}
//               <span className="text-sm">{mounted ? (isDark ? "Light mode" : "Dark mode") : "Theme"}</span>
//             </button>
//           </div>

//           <div className="mt-6 fade-slide-in" style={{ animationDelay: `${(LINKS.length + 1) * 60}ms` }}>
//             <a
//               href="#download"
//               onClick={() => setMobileOpen(false)}
//               className={clsx("inline-block", ctaClass)}
//             >
//               Get the app
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";
// import { Menu, X, Sun, Moon } from "lucide-react";
// import { useTheme } from "next-themes";

// const LINKS = [
//   { label: "About", href: "#about" },
//   { label: "Features", href: "#features" },
//   { label: "Experience", href: "#experience" },
// ];

// export default function Navbar() {
//   const { resolvedTheme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   // UI state for shrink animation and mobile menu
//   const [collapsedIdle, setCollapsedIdle] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Refs for measurements and event handling
//   const headerRef = useRef<HTMLDivElement>(null);
//   const brandRef  = useRef<HTMLAnchorElement>(null);
//   const overNavRef = useRef(false);
//   const idleT = useRef<number | null>(null);
//   const isTouch = useRef(false);
//   const mobileOpenRef = useRef(false);
//   const [navWidth, setNavWidth] = useState<number | null>(null);

//   useEffect(() => {
//     setMounted(true);
//     isTouch.current = (navigator.maxTouchPoints || 0) > 0;
//   }, []);
  
//   useEffect(() => { 
//     mobileOpenRef.current = mobileOpen; 
//   }, [mobileOpen]);

//   const isDark = mounted ? resolvedTheme === "dark" : false;

//   // Function to measure navbar width
//   const measureAndSetWidth = (collapse: boolean) => {
//     const header = headerRef.current;
//     if (!header) return;

//     const fullW = Math.min(1100, Math.floor(window.innerWidth * 0.92));
//     const brandW = brandRef.current?.getBoundingClientRect().width ?? 0;
//     const styles = getComputedStyle(header);
//     const pad =
//       parseFloat(styles.paddingLeft || "0") +
//       parseFloat(styles.paddingRight || "0");
//     const collapsedW = Math.ceil(brandW + pad + 4);
//     setNavWidth(collapse ? collapsedW : fullW);
//   };

//   useEffect(() => {
//     const onResize = () => measureAndSetWidth(collapsedIdle);
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [collapsedIdle]);

//   // Logic for idle timer to trigger shrink
//   const armIdleTimer = () => {
//     if (isTouch.current) return;
//     if (idleT.current) window.clearTimeout(idleT.current);
//     idleT.current = window.setTimeout(() => {
//       if (!overNavRef.current && !mobileOpenRef.current) setCollapsedIdle(true);
//     }, 2200) as unknown as number;
//   };

//   const cancelIdle = () => {
//     setCollapsedIdle(false);
//     if (idleT.current) window.clearTimeout(idleT.current);
//     armIdleTimer();
//   };

//   useEffect(() => {
//     if (isTouch.current) return;
//     armIdleTimer();
//     const onActivity = () => cancelIdle();
//     const events: (keyof WindowEventMap)[] = [
//       "mousemove", "pointermove", "keydown", "scroll", "pointerdown", "wheel", "touchstart"
//     ];
//     events.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));
//     return () => events.forEach((e) => window.removeEventListener(e, onActivity));
//   }, []);

//   const ctaClass = clsx(
//     "glow-cta cta-shine rounded-full px-3.5 py-1.5 text-sm transition shadow-sm hover:opacity-95 active:scale-[.98]",
//     isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
//   );

//   return (
//     <>
//       <header
//         ref={headerRef}
//         className={clsx(
//           "fixed top-3 z-40 rounded-2xl px-3 sm:px-4 py-2",
//           "glass glass-nav",
//           "transition-[width,left,transform] duration-300 ease-out",
//           collapsedIdle ? "left-4 -translate-x-0" : "left-1/2 -translate-x-1/2"
//         )}
//         style={{ width: navWidth ? `${navWidth}px` : undefined }}
//         aria-label="Primary"
//         onMouseEnter={() => { overNavRef.current = true; cancelIdle(); }}
//         onMouseLeave={() => { overNavRef.current = false; armIdleTimer(); }}
//       >
//         <nav className="flex items-center justify-between gap-3">
//           <a
//             ref={brandRef}
//             href="#cta"
//             className="font-semibold tracking-tight text-sm sm:text-base"
//             aria-label="Glimvia — back to top"
//           >
//             Glimvia
//           </a>

//           <ul
//             className={clsx(
//               "hidden md:flex items-center justify-center gap-5 lg:gap-7 text-sm transition-opacity",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//           >
//             {LINKS.map((l) => (
//               <li key={l.href}>
//                 <a href={l.href} className="link-ux opacity-90 hover:opacity-100 transition">
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <div
//             className={clsx(
//               "hidden md:flex items-center gap-2 transition-opacity",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//           >
//             <a href="#download" className={ctaClass}>Get the app</a>
//             <button
//               type="button"
//               aria-label="Toggle theme"
//               onClick={() => setTheme(isDark ? "light" : "dark")}
//               className="inline-flex items-center justify-center size-9 rounded-xl glass active:scale-[.98] transition"
//               title={isDark ? "Switch to light" : "Switch to dark"}
//             >
//               {!mounted ? (
//                 <span aria-hidden className="block size-4 rounded-full bg-slate-400/60" />
//               ) : isDark ? (
//                 <Sun size={16} />
//               ) : (
//                 <Moon size={16} />
//               )}
//             </button>
//           </div>

//           <button
//             aria-label="Open menu"
//             className={clsx(
//               "md:hidden size-9 rounded-xl glass flex items-center justify-center active:scale-[.98] transition",
//               collapsedIdle ? "opacity-0 pointer-events-none" : "opacity-100"
//             )}
//             onClick={() => setMobileOpen(true)}
//           >
//             <Menu size={18} />
//           </button>
//         </nav>
//       </header>

//       {/* Mobile Menu */}
//       <div
//         className={clsx(
//           "md:hidden fixed inset-0 z-40 transition",
//           mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         )}
//         aria-hidden={!mobileOpen}
//       >
//         <div className="absolute inset-0 glass" />
//         <button
//           aria-label="Close menu"
//           className="absolute top-4 right-4 size-10 rounded-xl glass flex items-center justify-center"
//           onClick={() => setMobileOpen(false)}
//         >
//           <X size={18} />
//         </button>
//         <div className="absolute left-1/2 -translate-x-1/2 top-[18vh] w-[min(92vw,520px)] text-center">
//           <ul className="rounded-xl overflow-hidden text-lg font-medium">
//             {LINKS.map((l, idx) => (
//               <li key={l.href}>
//                 <a
//                   href={l.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="block py-3 px-6 link-ux"
//                 >
//                   {l.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // This logic is for the shrink-on-idle animation
  const [collapsedIdle, setCollapsedIdle] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const brandRef  = useRef<HTMLAnchorElement>(null);
  const overNavRef = useRef(false);
  const idleT = useRef<number | null>(null);
  const isTouch = useRef(false);
  const mobileOpenRef = useRef(false);
  const [navWidth, setNavWidth] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    isTouch.current = (navigator.maxTouchPoints || 0) > 0;
  }, []);

  useEffect(() => { 
    mobileOpenRef.current = mobileOpen; 
  }, [mobileOpen]);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  const measureAndSetWidth = (collapse: boolean) => {
    const header = headerRef.current;
    if (!header) return;
    const fullW = Math.min(1100, Math.floor(window.innerWidth * 0.92));
    const brandW = brandRef.current?.getBoundingClientRect().width ?? 0;
    const styles = getComputedStyle(header);
    const pad = parseFloat(styles.paddingLeft || "0") + parseFloat(styles.paddingRight || "0");
    const collapsedW = Math.ceil(brandW + pad + 4);
    setNavWidth(collapse ? collapsedW : fullW);
  };

  useEffect(() => {
    const onResize = () => measureAndSetWidth(collapsedIdle);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [collapsedIdle]);

  const armIdleTimer = () => {
    if (isTouch.current) return;
    if (idleT.current) window.clearTimeout(idleT.current);
    idleT.current = window.setTimeout(() => {
      if (!overNavRef.current && !mobileOpenRef.current) setCollapsedIdle(true);
    }, 2200) as unknown as number;
  };

  const cancelIdle = () => {
    setCollapsedIdle(false);
    if (idleT.current) window.clearTimeout(idleT.current);
    armIdleTimer();
  };

  useEffect(() => {
    if (isTouch.current) return;
    armIdleTimer();
    const onActivity = () => cancelIdle();
    const events: (keyof WindowEventMap)[] = ["mousemove", "pointermove", "keydown", "scroll", "pointerdown", "wheel", "touchstart"];
    events.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, onActivity));
  }, []);

  const ctaClass = clsx(
    "glow-cta cta-shine rounded-full px-3.5 py-1.5 text-sm transition shadow-sm hover:opacity-95 active:scale-[.98]",
    isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
  );

  return (
    <>
      <header
        ref={headerRef}
        className={clsx(
          "fixed top-3 z-40 rounded-2xl px-3 sm:px-4 py-2",
          "glass glass-nav",
          "transition-[width,left,transform] duration-300 ease-out",
          collapsedIdle ? "left-4 -translate-x-0" : "left-1/2 -translate-x-1/2"
        )}
        style={{ width: navWidth ? `${navWidth}px` : undefined }}
        aria-label="Primary"
        onMouseEnter={() => { overNavRef.current = true; cancelIdle(); }}
        onMouseLeave={() => { overNavRef.current = false; armIdleTimer(); }}
      >
        <nav className="flex items-center justify-between gap-3">
          <a ref={brandRef} href="#cta" className="font-semibold tracking-tight text-sm sm:text-base" aria-label="Glimvia — back to top">
            Glimvia
          </a>
          <ul className={clsx("hidden md:flex items-center justify-center gap-5 lg:gap-7 text-sm transition-opacity", collapsedIdle && "opacity-0 pointer-events-none")}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-ux opacity-90 hover:opacity-100 transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={clsx("hidden md:flex items-center gap-2 transition-opacity", collapsedIdle && "opacity-0 pointer-events-none")}>
            <a href="#download" className={ctaClass}>Get the app</a>
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="inline-flex items-center justify-center size-9 rounded-xl glass active:scale-[.98] transition"
              title={isDark ? "Switch to light" : "Switch to dark"}
            >
              {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <span aria-hidden className="block size-4 rounded-full bg-slate-400/60" />}
            </button>
          </div>
          <button
            aria-label="Open menu"
            className={clsx("md:hidden size-9 rounded-xl glass flex items-center justify-center active:scale-[.98] transition", collapsedIdle && "opacity-0 pointer-events-none")}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={18} />
          </button>
        </nav>
      </header>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={clsx("md:hidden fixed inset-0 z-40 transition", mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
        aria-hidden={!mobileOpen}
      >
        <div className="absolute inset-0 glass glass-strong" />
        <button
          aria-label="Close menu"
          className="absolute top-4 right-4 size-10 rounded-xl glass flex items-center justify-center active:scale-[.98] transition"
          onClick={() => setMobileOpen(false)}
        >
          <X size={18} />
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 top-[18vh] w-[min(92vw,520px)] text-center">
          <ul className="rounded-xl overflow-hidden bg-transparent text-lg font-medium text-center divide-y divide-black/10 dark:divide-white/15">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMobileOpen(false)} className="block py-3 px-6 link-ux">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* === THEME TOGGLE ADDED BACK BELOW === */}
          <div className="mt-8">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass active:scale-[.98] transition"
              aria-label="Toggle theme"
              title={isDark ? "Switch to light" : "Switch to dark"}
            >
              {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <span className="size-4 rounded-full bg-slate-400/60" />}
              <span className="text-sm">{mounted ? (isDark ? "Light mode" : "Dark mode") : "Theme"}</span>
            </button>
          </div>
          <div className="mt-6">
            <a href="#download" onClick={() => setMobileOpen(false)} className={clsx("inline-block", ctaClass)}>
              Get the app
            </a>
          </div>
        </div>
      </div>
    </>
  );
}