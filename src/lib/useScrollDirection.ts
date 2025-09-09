"use client";
import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [dir, setDir] = useState<"up" | "down">("up");
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const curr = window.scrollY;
      if (Math.abs(curr - last) > 8) {
        setDir(curr > last ? "down" : "up");
        last = curr;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return dir;
}
