// src/lib/smartStore.ts
export type Device = "ios" | "android" | "desktop";

export function detectDevice(ua?: string): Device {
  if (typeof navigator === "undefined" && !ua) return "desktop";
  const U = (ua ?? navigator.userAgent).toLowerCase();

  const isiOS =
    /iphone|ipod/.test(U) ||
    // iPadOS 13+ reports "Mac" but has touch
    (/(ipad|macintosh)/.test(U) &&
      typeof navigator !== "undefined" &&
      "maxTouchPoints" in navigator &&
      (navigator as any).maxTouchPoints > 1);

  if (isiOS) return "ios";
  if (/android/.test(U)) return "android";
  return "desktop";
}

function withUtm(url: string, utm?: string) {
  if (!utm) return url;
  return url.includes("?") ? `${url}&${utm}` : `${url}?${utm}`;
}

/**
 * Try app deep link first (if provided), then fall back to the correct store.
 * On desktop, opens both stores by returning the appropriate URL (so caller can decide).
 */
export function smartNavigate(opts: {
  target?: "auto" | "ios" | "android";
  iosStoreUrl: string;          // e.g. https://apps.apple.com/app/id123...
  androidStoreUrl: string;      // e.g. https://play.google.com/store/apps/details?id=com.xyz
  appSchemeUrl?: string;        // e.g. glimvia://open
  utm?: string;                 // e.g. utm_source=nav&utm_medium=cta
}) {
  const { iosStoreUrl, androidStoreUrl, appSchemeUrl, utm } = opts;
  const device = opts.target && opts.target !== "auto" ? opts.target : detectDevice();

  const ios = withUtm(iosStoreUrl, utm);
  const android = withUtm(androidStoreUrl, utm);

  if (device === "desktop") {
    // Let caller decide what to do on desktop; default behavior can be to scroll to #download.
    return { device, ios, android };
  }

  const fallback = device === "ios" ? ios : android;

  if (!appSchemeUrl) {
    window.location.href = fallback;
    return { device, ios, android };
  }

  // Attempt deep link, then fall back if app isn't installed.
  const t = Date.now();
  window.location.href = appSchemeUrl;
  setTimeout(() => {
    if (Date.now() - t < 1500) window.location.href = fallback;
  }, 1200);

  return { device, ios, android };
}
