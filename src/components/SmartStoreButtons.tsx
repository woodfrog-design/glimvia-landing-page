// "use client";

// type Props = {
//   iosStoreUrl?: string;
//   androidStoreUrl?: string;
// };

// export default function SmartStoreButtons({
//   iosStoreUrl,
//   androidStoreUrl,
// }: Props) {
//   return (
//     <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
//       {iosStoreUrl && (
//         <a
//           href={iosStoreUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex"
//         >
//           {/* Render both images, hide with dark/light classes to avoid hydration mismatch */}
//           <img
//             src="/store-badges/apple-app-store-badge-black.svg"
//             alt="Download on the App Store"
//             className="h-10 w-auto md:h-12 dark:hidden"
//             draggable={false}
//           />
//           <img
//             src="/store-badges/apple-app-store-badge-white.svg"
//             alt="Download on the App Store"
//             className="hidden h-10 w-auto md:h-12 dark:block"
//             draggable={false}
//           />
//         </a>
//       )}

//       {androidStoreUrl && (
//         <a
//           href={androidStoreUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex"
//         >
//           <img
//             src="/store-badges/google-play-badge.svg"
//             alt="Get it on Google Play"
//             className="h-10 w-auto md:h-12"
//             draggable={false}
//           />
//         </a>
//       )}
//     </div>
//   );
// }

"use client";

import { useEffect, useMemo, useState } from "react";

export default function SmartStoreButtons({
  iosStoreUrl,
  androidStoreUrl,
  utm,
  className = "",
}: {
  iosStoreUrl: string;
  androidStoreUrl: string;
  utm?: string;
  className?: string;
}) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [os, setOs] = useState<"ios" | "android" | "other" | null>(null);
  const [isDark, setIsDark] = useState<boolean | null>(null);

  // build URLs with optional UTM
  const withUtm = (url: string) => {
    if (!utm) return url;
    try {
      const u = new URL(url);
      const add = new URLSearchParams(utm.startsWith("?") ? utm.slice(1) : utm);
      add.forEach((v, k) => u.searchParams.set(k, v));
      return u.toString();
    } catch {
      return url + (url.includes("?") ? "&" : "?") + (utm.startsWith("?") ? utm.slice(1) : utm);
    }
  };
  const iosHref = useMemo(() => withUtm(iosStoreUrl), [iosStoreUrl, utm]);
  const androidHref = useMemo(() => withUtm(androidStoreUrl), [androidStoreUrl, utm]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // viewport
    const mq = window.matchMedia("(max-width: 767px)");
    const updateMQ = () => setIsMobile(mq.matches);
    updateMQ();
    mq.addEventListener("change", updateMQ);

    // OS
    const ua = navigator.userAgent || "";
    const isiOS = /iPad|iPhone|iPod/.test(ua) || (/(Macintosh|Mac OS X)/.test(ua) && "ontouchend" in window);
    const isAndroid = /Android/.test(ua);
    setOs(isiOS ? "ios" : isAndroid ? "android" : "other");

    // theme (listen to class on <html>)
    const html = document.documentElement;
    const computeDark = () => html.classList.contains("dark");
    const setDark = () => setIsDark(computeDark());
    setDark();

    const obs = new MutationObserver(setDark);
    obs.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => {
      mq.removeEventListener("change", updateMQ);
      obs.disconnect();
    };
  }, []);

  const badgeSrc = {
    app: isDark ? "/store-badges/apple-app-store-badge-white.svg" : "/store-badges/apple-app-store-badge-black.svg",
    play: isDark ? "/store-badges/google-play-badge.svg" : "/store-badges/google-play-badge.svg",
  };

  const BadgeShell = ({ children }: { children?: React.ReactNode }) => (
    <div className="inline-flex h-12 w-[184px] items-center justify-center rounded-xl bg-white/90 dark:bg-slate-900/80 ring-1 ring-black/5 dark:ring-white/10 shadow-sm dark:shadow-[0_2px_10px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {children ?? <div className="h-6 w-28 rounded bg-slate-300/40 dark:bg-slate-600/40" />}
    </div>
  );

  const AppStoreBadge = () => (
    <BadgeShell>
      <img src={badgeSrc.app} alt="Download on the App Store" className="h-6 w-auto object-contain" />
    </BadgeShell>
  );

  const PlayBadge = () => (
    <BadgeShell>
      <img src={badgeSrc.play} alt="Get it on Google Play" className="h-6 w-auto object-contain" />
    </BadgeShell>
  );

  // MOBILE: single device-aware badge
  if (isMobile) {
    if (!os || isDark === null) return (
      <div className={["flex items-center justify-center", className].join(" ")}>
        <BadgeShell />
      </div>
    );
    const isIOS = os === "ios";
    const href = isIOS ? iosHref : androidHref;
    const Badge = isIOS ? AppStoreBadge : PlayBadge;

    return (
      <div className={["flex flex-col items-center gap-3", className].join(" ")}>
        <a href={href} rel="noopener noreferrer">
          <Badge />
        </a>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          Also available on{" "}
          <a href={isIOS ? androidHref : iosHref} className="underline decoration-slate-400/60 hover:decoration-slate-600 dark:decoration-slate-500/60">
            {isIOS ? "Google Play" : "App Store"}
          </a>
        </p>
      </div>
    );
  }

  // DESKTOP: both, exact same sizing
  if (isDark === null) {
    return (
      <div className={["flex items-center justify-center gap-3 sm:gap-4", className].join(" ")}>
        <BadgeShell /><BadgeShell />
      </div>
    );
  }

  return (
    <div className={["flex items-center justify-center gap-3 sm:gap-4", className].join(" ")}>
      <a href={iosHref} rel="noopener noreferrer"><AppStoreBadge /></a>
      <a href={androidHref} rel="noopener noreferrer"><PlayBadge /></a>
    </div>
  );
}
