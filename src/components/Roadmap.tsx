"use client";

import { useState } from "react";
import { Clock, Bell, BarChart3, Star, Zap, MapPin, CheckCircle2 } from "lucide-react";

const roadmapStations = [
  {
    title: "Custom Alerts",
    description: "Get notified when key metrics change or thresholds are met.",
    icon: Bell,
    status: "In Development",
    timeline: "Q1 2026",
    line: "blue",
    position: "current"
  },
  {
    title: "Expanded Chart Library", 
    description: "Access more visualization types from Superset.",
    icon: BarChart3,
    status: "Planning",
    timeline: "Q2 2026",
    line: "purple",
    position: "next"
  },
  {
    title: "Smart Navigation Tools",
    description: "Mark dashboards as favourites and jump to them instantly.",
    icon: Star,
    status: "Planning", 
    timeline: "Q2 2026",
    line: "pink",
    position: "future"
  },
  {
    title: "Performance Optimizations",
    description: "Faster loading times and smoother interactions across all devices.",
    icon: Zap,
    status: "Coming Soon",
    timeline: "Q3 2026",
    line: "violet",
    position: "future"
  }
];

const lineColors = {
  blue: "rgb(59 130 246)",
  purple: "rgb(147 51 234)", 
  pink: "rgb(236 72 153)",
  violet: "rgb(168 85 247)"
};

export default function Roadmap() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSuggestRoute = async () => {
    setIsSubmitting(true);
    
    try {
      // Firebase integration would go here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real implementation:
      // const response = await fetch('/api/suggest-route', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ 
      //     timestamp: new Date().toISOString(),
      //     suggestion: 'User clicked suggest route button'
      //   })
      // });
      
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
    } catch (error) {
      console.error('Failed to submit suggestion:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="roadmap" data-reveal className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3 mb-8">
        <div className="hr-accent w-14 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-semibold">Feature Roadmap</h2>
      </div>
      
      <div className="mb-8">
        <p className="text-slate-700 dark:text-slate-300 text-lg">
          Follow our development journey as we build the future of mobile analytics.
        </p>
      </div>

      {/* Subway Map Container */}
      <div className="relative bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 overflow-hidden">
        {/* Grid background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgb(148 163 184) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(148 163 184) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Main transit line */}
        <div className="relative">
          {/* Horizontal main line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-violet-500 rounded-full shadow-sm" />
          
          {/* Vertical line for mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-pink-500 to-violet-500 rounded-full" />

          {/* Station stops */}
          <div className="grid gap-8 md:gap-0 md:grid-cols-4">
            {roadmapStations.map((station, index) => (
              <div key={index} className="relative">
                {/* Station marker */}
                <div className="flex md:flex-col items-start md:items-center">
                  {/* Station circle */}
                  <div className={`relative shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10 flex items-center justify-center transition-transform hover:scale-110 ${
                    station.position === 'current' 
                      ? 'bg-blue-500 animate-pulse' 
                      : station.position === 'next'
                      ? 'bg-purple-500'
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`} style={{
                    backgroundColor: station.position !== 'future' ? lineColors[station.line] : undefined
                  }}>
                    <station.icon className={`w-5 h-5 md:w-7 md:h-7 ${
                      station.position === 'future' 
                        ? 'text-slate-500 dark:text-slate-400' 
                        : 'text-white'
                    }`} />
                    
                    {/* Current location indicator */}
                    {station.position === 'current' && (
                      <div className="absolute -inset-2 rounded-full border-2 border-blue-500 animate-ping" />
                    )}
                  </div>

                  {/* Station info card */}
                  <div className="ml-4 md:ml-0 md:mt-6 flex-1">
                    <div className="glass p-4 md:p-5 rounded-lg hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-300 group">
                      {/* Station header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full`} style={{
                            backgroundColor: station.position !== 'future' ? lineColors[station.line] : 'rgb(148 163 184)'
                          }} />
                          <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                            LINE {station.line.toUpperCase()}
                          </span>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          station.status === 'In Development' 
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            : station.status === 'Planning'
                            ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                        }`}>
                          {station.status}
                        </span>
                      </div>

                      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {station.title}
                      </h3>
                      
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                        {station.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>ETA {station.timeline}</span>
                        </div>
                        <MapPin className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection line to next station (mobile only) */}
                {index < roadmapStations.length - 1 && (
                  <div className="md:hidden absolute left-6 top-12 w-px h-8 bg-slate-300 dark:bg-slate-600" />
                )}
              </div>
            ))}
          </div>

          {/* Terminal station - Future destination */}
          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-block glass p-6 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-mono font-medium text-slate-600 dark:text-slate-400">
                  TERMINAL • EXPANSION ZONE
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">More Destinations Ahead</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4 max-w-md mx-auto">
                Our network is constantly expanding. Help us chart the next stations on this journey.
              </p>
              
              <a 
  href="/suggestion"
  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-95 transition text-sm font-medium"
>
  <span>Share Your Ideas</span>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
</a>
            </div>
          </div>
        </div>

        {/* Map legend */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-slate-600 dark:text-slate-400">Active Development</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-slate-600 dark:text-slate-400">Planning Phase</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-400" />
            <span className="text-slate-600 dark:text-slate-400">Future Station</span>
          </div>
        </div>
      </div>
    </section>
  );
}