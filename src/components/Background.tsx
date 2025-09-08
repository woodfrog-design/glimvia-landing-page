// "use client";

// export default function Background(){
//   return (
//     <>
//       <div id="bg-orbs" className="bg-orbs">
//         <span className="orb sky"    style={{left:"-10%", top:"-15%", ["--x0" as any]:"-25%", ["--y0" as any]:"-20%", ["--x1" as any]:"15%", ["--y1" as any]:"10%", ["--s" as any]:"1.0"}}/>
//         <span className="orb teal"   style={{left:"65%",  top:"-20%", ["--x0" as any]:"65%",  ["--y0" as any]:"-20%", ["--x1" as any]:"35%", ["--y1" as any]:"15%", ["--s" as any]:"1.05"}}/>
//         <span className="orb violet" style={{left:"-15%", top:"55%",  ["--x0" as any]:"-15%", ["--y0" as any]:"55%",  ["--x1" as any]:"10%", ["--y1" as any]:"75%", ["--s" as any]:"0.9"}}/>
//         <span className="orb pink"   style={{left:"55%",  top:"60%",  ["--x0" as any]:"55%",  ["--y0" as any]:"60%",  ["--x1" as any]:"70%", ["--y1" as any]:"40%", ["--s" as any]:"0.95"}}/>
//         <span className="orb peach"  style={{left:"20%",  top:"20%",  ["--x0" as any]:"20%",  ["--y0" as any]:"20%",  ["--x1" as any]:"5%",  ["--y1" as any]:"45%", ["--s" as any]:"0.85"}}/>
//       </div>
//       <div className="glass-sheet" />
//       <div className="grid-lines" />
//     </>
//   );
// }

// src/components/Background.tsx
"use client";

import { useEffect } from "react";

export default function Background(){
  useEffect(()=>{
    // optional: randomize positions slightly on mount
    const r = (min:number,max:number)=> Math.random()*(max-min)+min;
    document.querySelectorAll<HTMLElement>(".orb").forEach((el)=>{
      el.style.setProperty("--x0", `${r(10,90)}%`);
      el.style.setProperty("--y0", `${r(5,85)}%`);
      el.style.setProperty("--x1", `${r(12,88)}%`);
      el.style.setProperty("--y1", `${r(8,88)}%`);
      el.style.setProperty("--s", `${r(0.85,1.1)}`);
    });
  },[]);
  return (
    <div className="bg-orbs">
      <div className="orb blue" />
      <div className="orb azure" />
      <div className="orb violet" />
      <div className="orb pink" />
      <div className="orb peach" />
    </div>
  );
}
