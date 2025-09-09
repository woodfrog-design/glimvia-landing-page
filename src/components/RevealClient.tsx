"use client";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function PauseButton(){
  const [paused,setPaused]=useState(false);

  useEffect(()=>{ setPaused(localStorage.getItem("bgPaused")==="true"); },[]);
  useEffect(()=>{
    const el=document.getElementById("bg-orbs");
    if(!el) return;
    el.classList.toggle("paused", paused);
    localStorage.setItem("bgPaused", String(paused));
  },[paused]);

  return (
    <button
      aria-label={paused?"Play background":"Pause background"}
      onClick={()=>setPaused(p=>!p)}
      className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 size-10 rounded-full glass flex items-center justify-center"
      title={paused?"Play background":"Pause background"}
    >
      {paused? <Play size={18}/> : <Pause size={18}/> }
    </button>
  );
}
