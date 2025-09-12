// "use client";

// import { useEffect, useMemo, useState } from "react";
// import { useTheme } from "next-themes";

// type Device = "ios" | "android" | "desktop";

// function detectDevice(ua?: string): Device {
//   if (typeof navigator === "undefined" && !ua) return "desktop";
//   const U = (ua ?? navigator.userAgent).toLowerCase();

//   const isiOS =
//     /iphone|ipod/.test(U) ||
//     // iPadOS 13+ (reports "Mac" but has touch)
//     (/(ipad|macintosh)/.test(U) &&
//       typeof navigator !== "undefined" &&
//       "maxTouchPoints" in navigator &&
//       (navigator as any).maxTouchPoints > 1);

//   if (isiOS) return "ios";
//   if (/android/.test(U)) return "android";
//   return "desktop";
// }

// type Props = {
//   iosStoreUrl?: string;         // e.g. https://apps.apple.com/app/id1234567890
//   androidStoreUrl?: string;     // e.g. https://play.google.com/store/apps/details?id=com.woodfrog.glimvia
//   appSchemeUrl?: string;        // e.g. glimvia://open   (optional deep link)
//   mobileSingleButton?: boolean; // show only relevant store on mobile (default true)
//   utm?: string;                 // e.g. utm_source=site&utm_medium=cta&utm_campaign=download
// };

// const DEFAULTS = {
//   iosStoreUrl: "https://apps.apple.com/app/________IOS_APP_ID________",
//   androidStoreUrl: "https://play.google.com/store/apps/details?id=________ANDROID_PACKAGE________",
// };

// export default function SmartStoreButtons({
//   iosStoreUrl = DEFAULTS.iosStoreUrl,
//   androidStoreUrl = DEFAULTS.androidStoreUrl,
//   appSchemeUrl,
//   mobileSingleButton = true,
//   utm,
// }: Props) {
//   const { resolvedTheme } = useTheme(); // "light" | "dark"
//   const [device, setDevice] = useState<Device>("desktop");

//   useEffect(() => setDevice(detectDevice()), []);

//   const urls = useMemo(() => {
//     const withUtm = (url: string) => (utm ? (url.includes("?") ? `${url}&${utm}` : `${url}?${utm}`) : url);
//     return {
//       ios: withUtm(iosStoreUrl),
//       android: withUtm(androidStoreUrl),
//     };
//   }, [iosStoreUrl, androidStoreUrl, utm]);

//   const appleSrc =
//     resolvedTheme === "dark"
//       ? "/public/store-badges/apple-app-store-badge-white.svg".replace("/public", "")
//       : "/public/store-badges/apple-app-store-badge-black.svg".replace("/public", "");
//   const googleSrc = "/public/store-badges/google-play-badge.svg".replace("/public", "");

//   function openSmart(target: "ios" | "android") {
//     if (!appSchemeUrl) {
//       window.location.href = target === "ios" ? urls.ios : urls.android;
//       return;
//     }
//     const fallback = target === "ios" ? urls.ios : urls.android;
//     const t = Date.now();
//     window.location.href = appSchemeUrl;
//     setTimeout(() => {
//       if (Date.now() - t < 1500) window.location.href = fallback;
//     }, 1200);
//   }

//   const AppleBadge = () => (
//     <button
//       onClick={() => openSmart("ios")}
//       className="group relative inline-flex items-center justify-center px-4 py-3 bg-black hover:bg-neutral-900
//                  rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
//       aria-label="Download on the App Store"
//     >
//       <img src={appleSrc} alt="Download on the App Store" className="h-12 w-auto" draggable={false} />
//       <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full
//                       bg-gradient-to-r from-transparent via-white/20 to-transparent
//                       transition-transform duration-700 ease-out" />
//     </button>
//   );

//   const GoogleBadge = () => (
//     <button
//       onClick={() => openSmart("android")}
//       className="group relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
//       aria-label="Get it on Google Play"
//     >
//       {/* neutral chip to keep contrast in dark mode; badge itself stays unmodified */}
//       <div className="rounded-2xl bg-white/90 dark:bg-white/95 px-2 py-1">
//         <img src={googleSrc} alt="Get it on Google Play" className="h-12 w-auto" draggable={false} />
//       </div>
//       <div className="pointer-events-none absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full
//                       bg-gradient-to-r from-transparent via-white/30 to-transparent
//                       transition-transform duration-700 ease-out" />
//     </button>
//   );

//   if (mobileSingleButton && (device === "ios" || device === "android")) {
//     return (
//       <div className="flex justify-center">
//         {device === "ios" ? <AppleBadge /> : <GoogleBadge />}
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//       <AppleBadge />
//       <GoogleBadge />
//     </div>
//   );
// }


// src/components/SmartStoreButtons.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

type Device = "ios" | "android" | "desktop";

function detectDevice(ua?: string): Device {
  if (typeof navigator === "undefined" && !ua) return "desktop";
  const U = (ua ?? navigator.userAgent).toLowerCase();
  const isiOS =
    /iphone|ipod/.test(U) ||
    (/(ipad|macintosh)/.test(U) && "maxTouchPoints" in navigator && (navigator as any).maxTouchPoints > 1);
  if (isiOS) return "ios";
  if (/android/.test(U)) return "android";
  return "desktop";
}

type Props = {
  iosStoreUrl?: string;
  androidStoreUrl?: string;
  appSchemeUrl?: string;
  mobileSingleButton?: boolean;
  utm?: string;
};

const DEFAULTS = {
  iosStoreUrl: "https://apps.apple.com/app/________IOS_APP_ID________",
  androidStoreUrl: "https://play.google.com/store/apps/details?id=________ANDROID_PACKAGE________",
};

export default function SmartStoreButtons({
  iosStoreUrl = DEFAULTS.iosStoreUrl,
  androidStoreUrl = DEFAULTS.androidStoreUrl,
  appSchemeUrl,
  mobileSingleButton = true,
  utm,
}: Props) {
  const { resolvedTheme } = useTheme();
  const [device, setDevice] = useState<Device>("desktop");
  useEffect(() => setDevice(detectDevice()), []);

  const urls = useMemo(() => {
    const withUtm = (url: string) => (utm ? (url.includes("?") ? `${url}&${utm}` : `${url}?${utm}`) : url);
    return { ios: withUtm(iosStoreUrl), android: withUtm(androidStoreUrl) };
  }, [iosStoreUrl, androidStoreUrl, utm]);

  const appleSrc =
    resolvedTheme === "dark"
      ? "/store-badges/apple-app-store-badge-white.svg"
      : "/store-badges/apple-app-store-badge-black.svg";
  const googleSrc = "/store-badges/google-play-badge.svg";

  function openSmart(target: "ios" | "android") {
    const fallback = target === "ios" ? urls.ios : urls.android;
    if (!appSchemeUrl) {
      window.location.href = fallback;
      return;
    }
    const t = Date.now();
    window.location.href = appSchemeUrl;
    setTimeout(() => {
      if (Date.now() - t < 1500) window.location.href = fallback;
    }, 1200);
  }

  // symmetric wrapper style for BOTH badges
  const chipClass =
    "inline-flex items-center justify-center rounded-2xl " +
    "bg-white/92 dark:bg-white/95 ring-1 ring-black/10 shadow-sm " +
    "px-3 py-2 hover:shadow-md transition-transform hover:scale-[1.02] active:scale-[.98]";
  const imgClass = "h-10 w-auto md:h-12"; // equal visual height

  const Apple = () => (
    <button onClick={() => openSmart("ios")} aria-label="Download on the App Store" className={chipClass}>
      <img src={appleSrc} alt="Download on the App Store" className={imgClass} draggable={false} />
    </button>
  );

  const Google = () => (
    <button onClick={() => openSmart("android")} aria-label="Get it on Google Play" className={chipClass}>
      <img src={googleSrc} alt="Get it on Google Play" className={imgClass} draggable={false} />
    </button>
  );

  if (mobileSingleButton && (device === "ios" || device === "android")) {
    return (
      <div className="flex justify-center">
        {device === "ios" ? <Apple /> : <Google />}
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
      <Apple />
      <Google />
    </div>
  );
}
