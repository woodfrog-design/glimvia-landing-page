"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { aboutSlides } from "./aboutData";

export default function MobileRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const userInteracted = useRef(false);
  const timerRef = useRef<number | null>(null);

  // Identify the card closest to the viewport center
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const updateActive = () => {
      const center = rail.scrollLeft + rail.clientWidth / 2;
      const cards = Array.from(
        rail.querySelectorAll<HTMLDivElement>("[data-card]")
      );
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const mid = card.offsetLeft + card.clientWidth / 2;
        const d = Math.abs(mid - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActiveIdx(best);
    };

    updateActive();
    const onScroll = () => {
      userInteracted.current = true;
      updateActive();
    };

    rail.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      rail.removeEventListener("scroll", onScroll as any);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  // Smooth auto-advance (pauses after interaction, resumes later)
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const goTo = (idx: number) => {
      const cards = rail.querySelectorAll<HTMLDivElement>("[data-card]");
      const card = cards[idx];
      if (!card) return;
      rail.scrollTo({
        left: card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2,
        behavior: "smooth",
      });
    };

    const schedule = () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        if (userInteracted.current) {
          userInteracted.current = false;
          schedule();
          return;
        }
        const next = (activeIdx + 1) % aboutSlides.length;
        goTo(next);
        schedule();
      }, 4600);
    };

    schedule();
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [activeIdx]);

  return (
    <div className="md:hidden">
      {/* Header — breathing room below navbar */}
      <div className="mx-auto max-w-4xl px-5 pt-24">
        <p className="mb-1 text-xs uppercase tracking-wider opacity-70">About</p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Glimvia at a glance
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          A quick overview — swipe the cards to explore.
        </p>
      </div>

      {/* Prevent page-level horizontal scroll */}
      <div className="mt-3 overflow-x-clip">
        <div
          ref={railRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 pt-1 touch-pan-x overscroll-x-contain"
          aria-label="About highlights"
          onPointerDown={() => (userInteracted.current = true)}
        >
          {/* Leading spacer for comfy left gutter */}
          <div className="shrink-0 basis-1.5" />

          {aboutSlides.map((s, i) => {
            const Icon = s.icon;
            const active = i === activeIdx;
            return (
              <div
                key={s.id}
                data-card
                className="snap-center shrink-0 w-[80%] xs:w-[72%] sm:w-[66%]"
              >
                {/* Shell with delicate gradient edge */}
                <div className="relative rounded-2xl p-[1px]">
                  <div
                    className={clsx(
                      "absolute inset-0 rounded-2xl",
                      active
                        ? "bg-[conic-gradient(at_28%_18%,theme(colors.blue.500/.45),theme(colors.purple.500/.45),theme(colors.fuchsia.500/.38),transparent_75%)]"
                        : "bg-[conic-gradient(at_28%_18%,theme(colors.blue.500/.25),theme(colors.purple.500/.25),theme(colors.fuchsia.500/.18),transparent_75%)]",
                      "transition-opacity duration-300"
                    )}
                  />

                  {/* Card body — glass, better dark contrast */}
                  <div
                    className={clsx(
                      "group relative aspect-[7/10] h-[430px] rounded-2xl transform-gpu",
                      // Light
                      "bg-white/75 border border-slate-200/40 shadow-[0_10px_30px_rgba(2,6,23,0.08)] backdrop-blur-xl",
                      // Dark
                      "dark:bg-slate-900/70 dark:border-white/8 dark:shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
                      "transition-all duration-300",
                      active ? "scale-[1.012]" : "active:scale-[0.995]"
                    )}
                  >
                    {/* Soft radial tints (much subtler in dark) */}
                    <div
                      className={clsx(
                        "pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300",
                        "bg-[radial-gradient(140%_90%_at_15%_-10%,theme(colors.blue.400/0.08),transparent_60%),radial-gradient(120%_100%_at_100%_100%,theme(colors.fuchsia.500/0.08),transparent_62%)]",
                        "dark:bg-[radial-gradient(140%_90%_at_15%_-10%,theme(colors.blue.300/0.10),transparent_60%),radial-gradient(120%_100%_at_100%_100%,theme(colors.purple.400/0.08),transparent_62%)]",
                        active ? "opacity-100" : "opacity-70 group-active:opacity-100 group-hover:opacity-100"
                      )}
                    />

                    {/* Subtle sheen (fixed: thinner, softer, only on interaction/active) */}
                    <div
                      className={clsx(
                        "pointer-events-none absolute inset-0 overflow-hidden rounded-2xl",
                        active ? "opacity-90" : "opacity-0",
                        "transition-opacity duration-300"
                      )}
                    >
                      <span
                        className={clsx(
                          "absolute -left-1/3 top-0 h-full w-1/3 rotate-[12deg] rounded-2xl",
                          "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent)]",
                          "opacity-0 group-hover:opacity-100 group-active:opacity-100"
                        )}
                        style={{
                          transform: "translateX(-120%) rotate(12deg)",
                          animation: "shine 1.35s ease-in-out 1",
                          animationPlayState: "paused",
                        }}
                        onAnimationStart={(e) => {
                          // keep TS happy
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.animationPlayState = "running";
                        }}
                        onTouchStart={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.animationPlayState = "running";
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col p-5">
                      {/* Top: icon + title */}
                      <div className="mb-3 inline-flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-slate-700 shadow dark:bg-slate-800 dark:text-slate-200">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-[17px] font-semibold text-slate-900 dark:text-slate-50">
                          {s.title}
                        </h3>
                      </div>

                      {/* Centered body copy */}
                      <div className="flex-1 grid place-items-center px-1">
                        <p className="text-[13.5px] leading-relaxed text-center text-slate-700 dark:text-slate-300">
                          {s.body}
                        </p>
                      </div>

                      {/* Fine ring for definition */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Right spacer so last card can center */}
          <div className="shrink-0 basis-1.5" />
        </div>

        {/* Dots / quick jump */}
        <div className="mt-1.5 flex items-center justify-center gap-2">
          {aboutSlides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to card ${i + 1}`}
              onClick={() => {
                const rail = railRef.current;
                if (!rail) return;
                const card =
                  rail.querySelectorAll<HTMLDivElement>("[data-card]")[i];
                if (!card) return;
                rail.scrollTo({
                  left:
                    card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2,
                  behavior: "smooth",
                });
              }}
              className={clsx(
                "h-1.5 w-1.5 rounded-full transition-all",
                i === activeIdx
                  ? "w-4 bg-slate-900 dark:bg-white"
                  : "bg-slate-300 dark:bg-slate-600"
              )}
            />
          ))}
        </div>

        <p className="mt-1 text-center text-xs text-slate-500 dark:text-slate-500">
          Swipe to explore
        </p>
      </div>
    </div>
  );
}
