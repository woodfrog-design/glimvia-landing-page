"use client";
import { ReactNode, useRef } from "react";

export default function Magnetic({ children, strength=10 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current; if(!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;   // -1..1
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    el.style.transform = `translate(${x*strength}px, ${y*strength}px)`;
  }
  function onLeave() {
    const el = ref.current; if(!el) return;
    el.style.transform = "translate(0,0)";
  }

  return (
    <div onMouseMove={onMove} onMouseLeave={onLeave} className="will-change-transform inline-block" ref={ref}>
      {children}
    </div>
  );
}
