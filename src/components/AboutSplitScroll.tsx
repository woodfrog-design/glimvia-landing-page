"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { Smartphone, Activity, Lock, Sliders, Heart } from "lucide-react";

/**
 * If you already keep the copy elsewhere, you can delete this array and
 * import your data instead. Just keep the shape { id, tag, title, body, icon, screenshot }.
 */
const PANELS = [
  {
    id: "mobile-first",
    tag: "Mobile-First Design",
    title: "Mobile-First Design",
    body:
      "Enjoy Apache Superset in a sleek, responsive interface made for mobile. Dashboards, filters, and drilldowns optimized for your fingertips.",
    icon: Smartphone,
    screenshot: "/about/mobile-first.png", // ← drop your image or leave empty to show the gradient fill
  },
  {
    id: "realtime",
    tag: "Live Dashboards",
    title: "Real-Time Insights",
    body:
      "Stay ahead with instant updates, live dashboards, and push notifications—keeping your KPIs and metrics always within reach.",
    icon: Activity,
    screenshot: "/about/realtime.png",
  },
  {
    id: "easy-setup",
    tag: "Minutes, not days",
    title: "Easy Setup",
    body:
      "Connect your existing Apache Superset instance in minutes with secure login. No complex setup or extra sign-ups required.",
    icon: Lock,
    screenshot: "/about/setup.png",
  },
  {
    id: "extendable",
    tag: "Built for your team",
    title: "Customizable & Extendable",
    body:
      "We extend Glimvia quickly and cost-effectively to fit your needs. Add features, adjust views, and personalize your analytics experience.",
    icon: Sliders,
    screenshot: "/about/extendable.png",
  },
  {
    id: "free",
    tag: "User-Focused",
    title: "Free & User-Focused",
    body:
      "Offered free of charge and continuously improved based on user feedback—Glimvia keeps getting better for everyone.",
    icon: Heart,
    screenshot: "/about/free.png",
  },
];

export default function AboutSplitScroll() {
  const [active, setActive] = useState(0);

  // Refs for intersection observer
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Build observer once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible card
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const idx = Number((visible.target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActive(idx);
        }
      },
      {
        // Root viewport; consider a nice center slice so snapping feels perfect
        root: null,
        rootMargin: "0px",
        threshold: [0.35, 0.6, 0.85],
      }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeScreenshot = useMemo(
    () => PANELS[active]?.screenshot || "",
    [active]
  );

  return (
    <section
      id="about"
      className={clsx(
        // The container will stretch to N * 100vh due to the left column cards.
        "relative",
        "max-w-6xl mx-auto px-4 md:px-6",
        "pt-24 md:pt-28 pb-8"
      )}
      aria-label="About Glimvia"
    >
      {/* Section heading */}
      <div className="mx-auto mb-8 md:mb-12 text-center">
        <span className="inline-block text-[10px] md:text-xs tracking-widest uppercase text-slate-600 dark:text-slate-400">
          About Glimvia
        </span>
        <h2
          className={clsx(
            "mt-2 text-2xl md:text-[28px] font-semibold tracking-tight",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500"
          )}
        >
          Glimvia, at a glance
        </h2>
        <p className="mt-3 max-w-3xl mx-auto text-sm md:text-base text-slate-700 dark:text-slate-300">
          Glimvia is a mobile-first app that brings the power of Apache Superset
          to your fingertips—fast, intuitive, and built for professionals on the
          move.
        </p>
      </div>

      {/* Grid: left = scrolling cards; right = sticky phone (≈60% on lg) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* LEFT — scroll-snap stack. Each card is exactly 100vh so the section is 'frozen' until all cards are done. */}
        <div
          className={clsx(
            "lg:col-span-5",
            // isolate the scroll snapping to the page (we still use viewport scroll),
            // but ensure each card consumes a full screen height:
            "space-y-0"
          )}
        >
          {PANELS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                ref={(el) => (cardRefs.current[i] = el)}
                data-index={i}
                className={clsx(
                  "h-screen snap-start flex items-center",
                  "py-24 md:py-28"
                )}
              >
                <div
                  className={clsx(
                    "glass w-full rounded-2xl p-5 md:p-6",
                    "ring-1 ring-black/5 dark:ring-white/10",
                    "shadow-lg"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 size-9 md:size-10 rounded-xl bg-gradient-to-br from-sky-400/20 via-indigo-400/20 to-fuchsia-400/20 grid place-items-center ring-1 ring-black/5 dark:ring-white/10">
                      <Icon className="size-4 md:size-5 text-slate-700 dark:text-slate-200" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs tracking-wider uppercase text-slate-500 dark:text-slate-400">
                        {p.tag}
                      </p>
                      <h3 className="mt-1 text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-slate-700 dark:text-slate-300">
                        {p.body}
                      </p>
                    </div>
                  </div>

                  {/* tiny accent line */}
                  <div className="mt-5 h-[2px] w-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 opacity-40" />
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT — sticky phone */}
        <div className="lg:col-span-7 relative">
          <div
            className={clsx(
              "sticky",
              // keep it clear of the navbar; tune if your header height changes
              "top-28",
              "w-full flex justify-center"
            )}
          >
            <PhoneShell
              screenshot={activeScreenshot}
              label={PANELS[active]?.title || ""}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Minimal phone shell so we don't depend on any other component.
 * Rotated slightly, sized for impact, and theme-aware.
 */
function PhoneShell({ screenshot, label }: { screenshot?: string; label?: string }) {
  return (
    <figure
      className={clsx(
        "relative",
        "w-[min(680px,90vw)] lg:w-[min(840px,60vw)]",
        "aspect-[9/19.5]",
        "rotate-2 md:rotate-3",
        "rounded-[34px] p-3",
        "bg-white dark:bg-slate-900",
        "ring-1 ring-black/10 dark:ring-white/10",
        "shadow-2xl"
      )}
      aria-label={label}
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 -translate-x-1/2 top-3 h-5 w-24 rounded-full bg-slate-900/90 dark:bg-black/90" />

      {/* Screen */}
      <div className="absolute inset-3 rounded-[26px] overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
        {screenshot ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={screenshot}
            alt={label || "App screen"}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-sky-200/70 via-indigo-200/70 to-fuchsia-200/70 dark:from-sky-900/40 dark:via-indigo-900/40 dark:to-fuchsia-900/40" />
        )}
      </div>

      {/* Soft floor shadow */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-8 w-[65%] rounded-[40%] bg-black/20 blur-2xl opacity-30" />
    </figure>
  );
}
