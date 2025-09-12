"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    // @ts-ignore
    window.gtag?.("event", "page_view", {
      page_location: window.location.origin + url,
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
