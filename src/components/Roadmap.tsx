// import { Clock, Bell, BarChart3, Star, Zap, ArrowRight } from "lucide-react";

// const roadmapItems = [
//   {
//     title: "Custom Alerts",
//     description: "Get notified when key metrics change or thresholds are met.",
//     icon: Bell,
//     status: "In Development",
//     timeline: "Q2 2025"
//   },
//   {
//     title: "Expanded Chart Library", 
//     description: "Access more visualization types from Superset.",
//     icon: BarChart3,
//     status: "Planning",
//     timeline: "Q3 2025"
//   },
//   {
//     title: "Smart Navigation Tools",
//     description: "Mark dashboards as favourites and jump to them instantly.",
//     icon: Star,
//     status: "Planning", 
//     timeline: "Q3 2025"
//   },
//   {
//     title: "Performance Optimizations",
//     description: "Faster loading times and smoother interactions across all devices.",
//     icon: Zap,
//     status: "Coming Soon",
//     timeline: "Q4 2025"
//   }
// ];

// export default function Roadmap() {
//   return (
//     <section id="roadmap" data-reveal className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
//       <div className="flex items-center gap-3 mb-8">
//         <div className="hr-accent w-14 rounded-full" />
//         <h2 className="text-2xl md:text-3xl font-semibold">Coming Soon</h2>
//       </div>
      
//       <div className="mb-8">
//         <p className="text-slate-700 dark:text-slate-300 text-lg">
//           Your analytics experience is about to get even better with these upcoming features.
//         </p>
//       </div>

//       {/* Roadmap with flowing path */}
//       <div className="relative">
//         {/* SVG Path for the flowing road */}
//         <svg 
//           className="absolute inset-0 w-full h-full pointer-events-none z-0" 
//           viewBox="0 0 800 600"
//           preserveAspectRatio="none"
//         >
//           <defs>
//             <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.6" />
//               <stop offset="50%" stopColor="rgb(147 51 234)" stopOpacity="0.4" />
//               <stop offset="100%" stopColor="rgb(236 72 153)" stopOpacity="0.3" />
//             </linearGradient>
//             <filter id="glow">
//               <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//               <feMerge> 
//                 <feMergeNode in="coloredBlur"/>
//                 <feMergeNode in="SourceGraphic"/>
//               </feMerge>
//             </filter>
//           </defs>
          
//           {/* Main flowing path */}
//           <path
//             d="M 100 80 Q 200 40, 300 80 T 500 120 Q 600 140, 700 100 T 900 140"
//             fill="none"
//             stroke="url(#roadGradient)"
//             strokeWidth="3"
//             strokeDasharray="8,4"
//             filter="url(#glow)"
//             className="animate-pulse"
//           />
          
//           {/* Milestone dots on the path */}
//           <circle cx="150" cy="65" r="8" fill="rgb(59 130 246)" className="animate-pulse" />
//           <circle cx="350" cy="85" r="8" fill="rgb(147 51 234)" className="animate-pulse" style={{animationDelay: '0.5s'}} />
//           <circle cx="550" cy="125" r="8" fill="rgb(236 72 153)" className="animate-pulse" style={{animationDelay: '1s'}} />
//           <circle cx="750" cy="105" r="8" fill="rgb(168 85 247)" className="animate-pulse" style={{animationDelay: '1.5s'}} />
//         </svg>

//         {/* Roadmap items positioned along the path */}
//         <div className="relative z-10 space-y-8 md:space-y-12">
//           {roadmapItems.map((item, index) => (
//             <div 
//               key={index}
//               className={`flex items-start gap-4 md:gap-6 ${
//                 index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//               }`}
//             >
//               {/* Milestone marker */}
//               <div className="relative shrink-0">
//                 <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
//                   index === 0 ? 'from-blue-500 to-blue-600' :
//                   index === 1 ? 'from-purple-500 to-purple-600' :
//                   index === 2 ? 'from-pink-500 to-pink-600' :
//                   'from-violet-500 to-violet-600'
//                 } flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
//                   <item.icon className="w-7 h-7 text-white" />
//                 </div>
                
//                 {/* Connecting line to next milestone */}
//                 {index < roadmapItems.length - 1 && (
//                   <div className={`absolute top-16 ${
//                     index % 2 === 0 ? 'left-8 md:left-12' : 'left-8 md:right-12'
//                   } w-px h-12 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-600`} />
//                 )}
//               </div>

//               {/* Content card */}
//               <div className={`flex-1 max-w-md ${
//                 index % 2 === 0 ? '' : 'md:text-right'
//               }`}>
//                 <div className="glass p-5 md:p-6 rounded-xl hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-300 group">
//                   <div className="flex items-center justify-between mb-3">
//                     <span className={`px-3 py-1 text-xs font-medium rounded-full ${
//                       item.status === 'In Development' 
//                         ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
//                         : item.status === 'Planning'
//                         ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
//                         : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
//                     }`}>
//                       {item.status}
//                     </span>
//                     <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
//                       <Clock className="w-4 h-4" />
//                       <span>{item.timeline}</span>
//                     </div>
//                   </div>
                  
//                   <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                     {item.title}
//                   </h3>
                  
//                   <p className="text-slate-700 dark:text-slate-300 mb-3">
//                     {item.description}
//                   </p>
                  
//                   <div className={`flex items-center ${
//                     index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'
//                   }`}>
//                     <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Future possibilities section */}
//         <div className="relative z-10 mt-12 pt-8">
//           <div className="text-center">
//             <div className="glass p-6 md:p-8 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10">
//               <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 relative">
//                 <Zap className="w-8 h-8" />
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 animate-ping opacity-20" />
//               </div>
//               <h3 className="font-semibold text-xl mb-3">The Journey Continues</h3>
//               <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-md mx-auto">
//                 This roadmap represents just the beginning. Have ideas for features that could make your analytics experience even better?
//               </p>
//               <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg">
//                 Share Your Vision
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Clock, Bell, BarChart3, Star, Zap, ArrowRight, MapPin } from "lucide-react";

const roadmapStations = [
  {
    title: "Custom Alerts",
    description: "Get notified when key metrics change or thresholds are met.",
    icon: Bell,
    status: "In Development",
    timeline: "Q2 2025",
    line: "blue",
    position: "current"
  },
  {
    title: "Expanded Chart Library", 
    description: "Access more visualization types from Superset.",
    icon: BarChart3,
    status: "Planning",
    timeline: "Q3 2025",
    line: "purple",
    position: "next"
  },
  {
    title: "Smart Navigation Tools",
    description: "Mark dashboards as favourites and jump to them instantly.",
    icon: Star,
    status: "Planning", 
    timeline: "Q3 2025",
    line: "pink",
    position: "future"
  },
  {
    title: "Performance Optimizations",
    description: "Faster loading times and smoother interactions across all devices.",
    icon: Zap,
    status: "Coming Soon",
    timeline: "Q4 2025",
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
              <button className="px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:scale-105 transition-transform text-sm font-medium">
                Suggest Route
              </button>
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