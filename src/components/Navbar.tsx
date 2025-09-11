"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Experience", href: "/#experience" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // This logic is for the shrink-on-idle animation
  const [collapsedIdle, setCollapsedIdle] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);
  const overNavRef = useRef(false);
  const idleT = useRef<number | null>(null);
  const isTouch = useRef(false);
  const mobileOpenRef = useRef(false);
  const [navWidth, setNavWidth] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    isTouch.current = (navigator.maxTouchPoints || 0) > 0;
    
    // Check initial theme
    const isDarkTheme = document.documentElement.classList.contains('dark');
    setIsDark(isDarkTheme);
  }, []);

  useEffect(() => { 
    mobileOpenRef.current = mobileOpen; 
  }, [mobileOpen]);

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

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Helper function to combine classes
  const cn = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(' ');
  };

  const ctaClass = cn(
    "glow-cta cta-shine rounded-full px-3.5 py-1.5 text-sm transition shadow-sm hover:opacity-95 active:scale-[.98]",
    isDark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
  );

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed top-3 z-40 rounded-full px-4 sm:px-6 py-3",
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
          <a ref={brandRef} href="/" className="font-semibold tracking-tight text-sm sm:text-base" aria-label="Glimvia — back to home">
            Glimvia
          </a>
          <ul className={cn("hidden md:flex items-center justify-center gap-5 lg:gap-7 text-sm transition-opacity", collapsedIdle && "opacity-0 pointer-events-none")}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-ux opacity-90 hover:opacity-100 transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={cn("hidden md:flex items-center gap-2 transition-opacity", collapsedIdle && "opacity-0 pointer-events-none")}>
            <a href="/#download" className={ctaClass}>Get the app</a>
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center size-10 rounded-full glass active:scale-[.98] transition"
              title={isDark ? "Switch to light" : "Switch to dark"}
            >
              {!mounted ? (
                <span aria-hidden className="block size-4 rounded-full bg-slate-400/60" />
              ) : isDark ? (
                <SunIcon />
              ) : (
                <MoonIcon />
              )}
            </button>
          </div>
          <button
            aria-label="Open menu"
            className={cn("md:hidden size-10 rounded-full glass flex items-center justify-center active:scale-[.98] transition", collapsedIdle && "opacity-0 pointer-events-none")}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={cn("md:hidden fixed inset-0 z-40 transition", mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      >
        <div className="absolute inset-0 glass glass-strong" />
        <button
          aria-label="Close menu"
          className="absolute top-4 right-4 size-10 rounded-full glass flex items-center justify-center active:scale-[.98] transition"
          onClick={() => setMobileOpen(false)}
        >
          <XIcon />
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

          <div className="mt-8">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass active:scale-[.98] transition"
              aria-label="Toggle theme"
              title={isDark ? "Switch to light" : "Switch to dark"}
            >
              {mounted ? (isDark ? <SunIcon /> : <MoonIcon />) : <span className="size-4 rounded-full bg-slate-400/60" />}
              <span className="text-sm">{mounted ? (isDark ? "Light mode" : "Dark mode") : "Theme"}</span>
            </button>
          </div>
          <div className="mt-6">
            <a href="/#download" onClick={() => setMobileOpen(false)} className={cn("inline-block", ctaClass)}>
              Get the app
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// Icon components
function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12"/>
      <line x1="4" x2="20" y1="6" y2="6"/>
      <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="m12 2 0 2"/>
      <path d="m12 20 0 2"/>
      <path d="m4.93 4.93 1.41 1.41"/>
      <path d="m17.66 17.66 1.41 1.41"/>
      <path d="m2 12 2 0"/>
      <path d="m20 12 2 0"/>
      <path d="m6.34 17.66-1.41 1.41"/>
      <path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  );
}