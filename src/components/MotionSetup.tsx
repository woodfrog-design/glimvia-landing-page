"use client";
import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

export default function MotionSetup({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.35, ease: [0.2, 0.6, 0.2, 1] }}>
      {children}
    </MotionConfig>
  );
}
