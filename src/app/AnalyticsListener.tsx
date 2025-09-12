"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

function AnalyticsCore() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Send a page_view on route change (client-side)
  useEffect(() => {
    if (!GA_ID || typeof window === "undefined" || !("gtag" in window)) return;

    const page_path = `${pathname}${searchParams?.toString() ? `?${searchParams}` : ""}`;
    // @ts-ignore
    window.gtag("event", "page_view", {
      page_path,
      page_location: window.location.href,
      send_to: GA_ID,
    });
  }, [pathname, searchParams]);

  return null;
}

/**
 * Loads GA4 and sends page_view on every route change.
 * We keep GA separate from Firebase; Firebase Analytics is optional (init'd lazily in firebase.js).
 */
export default function AnalyticsListener() {
  if (!GA_ID) return null;

  return (
    <>
      {/* GA loader */}
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`}
      />
      {/* GA bootstrap */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());

          // Default consent (not gated)
          gtag('consent', 'default', {
            ad_storage: 'granted',
            analytics_storage: 'granted',
            functionality_storage: 'granted',
            personalization_storage: 'granted',
            security_storage: 'granted'
          });

          // Basic config (keeps IP anonymization on)
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
      
      {/* Wrap the useSearchParams part in Suspense */}
      <Suspense fallback={null}>
        <AnalyticsCore />
      </Suspense>
    </>
  );
}