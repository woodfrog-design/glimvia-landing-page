// // import { Check } from "lucide-react";

// // const items = [
// //   "Mobile-Optimized Dashboards — Fully responsive UI for phones and tablets.",
// //   "Interactive Filtering & Drilldowns — Slice and dice data with a few taps.",
// //   "Real-Time Data Refresh — See the latest numbers without delays.",
// //   "Push Notifications & Alerts — Get notified instantly when metrics change.",
// //   "Secure Authentication — Connect safely with your existing Superset credentials.",
// //   "Multiple Superset Instance Support — Switch between workspaces easily.",
// //   "Favorite Dashboard — Pin your most important dashboards to a quick-view screen.",
// //   "Low-Bandwidth Mode — Optimized performance for slower connections.",
// //   "Regular Updates — Continuous feature additions and performance improvements.",
// // ];

// // export default function Features(){
// //   return (
// //     <section id="features" data-reveal className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
// //       <div className="flex items-center gap-3">
// //         <div className="hr-accent w-14 rounded-full" />
// //         <h2 className="text-2xl md:text-3xl font-semibold">Features</h2>
// //       </div>
// //       <div className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-4 relative">
// //         {/* vertical accent line between columns */}
// //         <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10 dark:bg-white/15" aria-hidden />
// //         {items.map((t,i)=>(
// //           <div key={i} className="flex gap-3 items-start">
// //             <Check className="mt-1 shrink-0 text-sky-500 dark:text-sky-300" size={18}/>
// //             <p className="text-slate-700 dark:text-slate-300">{t}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// import { 
//   Smartphone, 
//   Filter, 
//   RefreshCw, 
//   Bell, 
//   Shield, 
//   Database, 
//   Star, 
//   Wifi, 
//   Zap 
// } from "lucide-react";

// const features = [
//   {
//     icon: Smartphone,
//     title: "Mobile-Optimized Dashboards",
//     description: "Fully responsive UI designed specifically for phones and tablets.",
//     gradient: "from-blue-500 to-cyan-400"
//   },
//   {
//     icon: Filter,
//     title: "Interactive Filtering & Drilldowns",
//     description: "Slice and dice your data with intuitive tap gestures.",
//     gradient: "from-purple-500 to-pink-400"
//   },
//   {
//     icon: RefreshCw,
//     title: "Real-Time Data Refresh",
//     description: "See the latest numbers without delays or manual refreshes.",
//     gradient: "from-green-500 to-emerald-400"
//   },
//   {
//     icon: Bell,
//     title: "Push Notifications & Alerts",
//     description: "Get notified instantly when your metrics change.",
//     gradient: "from-orange-500 to-red-400"
//   },
//   {
//     icon: Shield,
//     title: "Secure Authentication",
//     description: "Connect safely with your existing Superset credentials.",
//     gradient: "from-indigo-500 to-blue-400"
//   },
//   {
//     icon: Database,
//     title: "Multiple Instance Support",
//     description: "Switch between different Superset workspaces easily.",
//     gradient: "from-teal-500 to-cyan-400"
//   },
//   {
//     icon: Star,
//     title: "Favorite Dashboards",
//     description: "Pin your most important dashboards for quick access.",
//     gradient: "from-yellow-500 to-orange-400"
//   },
//   {
//     icon: Wifi,
//     title: "Low-Bandwidth Mode",
//     description: "Optimized performance for slower internet connections.",
//     gradient: "from-gray-500 to-slate-400"
//   },
//   {
//     icon: Zap,
//     title: "Regular Updates",
//     description: "Continuous feature additions and performance improvements.",
//     gradient: "from-violet-500 to-purple-400"
//   }
// ];

// export default function Features() {
//   return (
//     <section 
//       id="features" 
//       data-reveal 
//       className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24"
//     >
//       {/* Section Header */}
//       <div className="text-center mb-16">
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <div className="hr-accent w-14 rounded-full" />
//           <h2 className="text-3xl md:text-4xl font-bold title-gradient">
//             Features
//           </h2>
//           <div className="hr-accent w-14 rounded-full" />
//         </div>
//         <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//           Everything you need to access your Apache Superset dashboards on mobile, 
//           designed for professionals on the move.
//         </p>
//       </div>

//       {/* Features Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {features.map((feature, index) => {
//           const IconComponent = feature.icon;
//           return (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-2xl bg-white/40 dark:bg-white/5 
//                          backdrop-blur-xl border border-white/20 dark:border-white/10 
//                          hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-500
//                          hover:scale-[1.02] hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20"
//             >
//               {/* Gradient Background Effect */}
//               <div 
//                 className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} 
//                            opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//               />
              
//               {/* Content */}
//               <div className="relative p-6">
//                 {/* Icon */}
//                 <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} 
//                                 shadow-lg shadow-black/10 mb-4`}>
//                   <IconComponent className="w-6 h-6 text-white" />
//                 </div>
                
//                 {/* Title */}
//                 <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 
//                               group-hover:text-slate-800 dark:group-hover:text-slate-100 
//                               transition-colors duration-300">
//                   {feature.title}
//                 </h3>
                
//                 {/* Description */}
//                 <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed
//                               group-hover:text-slate-700 dark:group-hover:text-slate-300
//                               transition-colors duration-300">
//                   {feature.description}
//                 </p>
                
//                 {/* Shine Effect on Hover */}
//                 <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r 
//                                from-transparent via-white/20 to-transparent rotate-12 
//                                group-hover:left-full transition-all duration-700 ease-out" />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Bottom Call-to-Action */}
//       <div className="text-center mt-16">
//         <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
//                         bg-gradient-to-r from-blue-500/10 to-purple-500/10 
//                         border border-blue-500/20 dark:border-blue-400/20">
//           <Zap className="w-4 h-4 text-blue-500 dark:text-blue-400" />
//           <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
//             And many more features coming soon
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { 
//   Smartphone, 
//   Filter, 
//   RefreshCw, 
//   Bell, 
//   Shield, 
//   Database, 
//   Star, 
//   Wifi, 
//   Zap 
// } from "lucide-react";

// const features = [
//   {
//     icon: Smartphone,
//     title: "Mobile-Optimized",
//     description: "Responsive UI for phones and tablets",
//     gradient: "from-blue-500 to-cyan-400",
//     size: "large" // Takes 2 columns
//   },
//   {
//     icon: Filter,
//     title: "Interactive Filtering",
//     description: "Slice and dice with taps",
//     gradient: "from-purple-500 to-pink-400",
//     size: "small"
//   },
//   {
//     icon: RefreshCw,
//     title: "Real-Time Refresh",
//     description: "Latest data instantly",
//     gradient: "from-green-500 to-emerald-400",
//     size: "small"
//   },
//   {
//     icon: Bell,
//     title: "Push Notifications",
//     description: "Instant metric alerts",
//     gradient: "from-orange-500 to-red-400",
//     size: "medium"
//   },
//   {
//     icon: Shield,
//     title: "Secure Auth",
//     description: "Safe Superset connection",
//     gradient: "from-indigo-500 to-blue-400",
//     size: "small"
//   },
//   {
//     icon: Database,
//     title: "Multiple Instances",
//     description: "Switch workspaces easily",
//     gradient: "from-teal-500 to-cyan-400",
//     size: "medium"
//   },
//   {
//     icon: Star,
//     title: "Favorites",
//     description: "Quick dashboard access",
//     gradient: "from-yellow-500 to-orange-400",
//     size: "small"
//   },
//   {
//     icon: Wifi,
//     title: "Low-Bandwidth Mode",
//     description: "Optimized for slower connections",
//     gradient: "from-gray-500 to-slate-400",
//     size: "large"
//   },
//   {
//     icon: Zap,
//     title: "Regular Updates",
//     description: "Continuous improvements",
//     gradient: "from-violet-500 to-purple-400",
//     size: "small"
//   }
// ];

// export default function Features() {
//   return (
//     <section 
//       id="features" 
//       data-reveal 
//       className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24"
//     >
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <div className="flex items-center justify-center gap-3 mb-4">
//           <div className="hr-accent w-14 rounded-full" />
//           <h2 className="text-3xl md:text-4xl font-bold title-gradient">
//             Features
//           </h2>
//           <div className="hr-accent w-14 rounded-full" />
//         </div>
//         <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//           Everything you need for mobile analytics in a beautifully compact design
//         </p>
//       </div>

//       {/* Bento Box Layout */}
//       <div className="grid grid-cols-4 md:grid-cols-6 gap-3 auto-rows-fr">
//         {features.map((feature, index) => {
//           const IconComponent = feature.icon;
          
//           // Define grid spans based on size
//           const gridClass = {
//             small: "col-span-2 row-span-1",
//             medium: "col-span-2 md:col-span-3 row-span-1", 
//             large: "col-span-4 md:col-span-6 row-span-1"
//           }[feature.size];
          
//           return (
//             <div
//               key={index}
//               className={`group relative overflow-hidden rounded-xl ${gridClass}
//                          bg-white/60 dark:bg-white/5 backdrop-blur-xl 
//                          border border-white/30 dark:border-white/10 
//                          hover:bg-white/80 dark:hover:bg-white/10 
//                          hover:scale-[1.02] hover:shadow-lg transition-all duration-300
//                          min-h-[120px] flex flex-col justify-center`}
//             >
//               {/* Gradient Background Effect */}
//               <div 
//                 className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} 
//                            opacity-0 group-hover:opacity-8 transition-opacity duration-300`}
//               />
              
//               {/* Content */}
//               <div className="relative p-4 text-center">
//                 {/* Icon */}
//                 <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${feature.gradient} 
//                                 shadow-md mb-3 mx-auto`}>
//                   <IconComponent className="w-4 h-4 text-white" />
//                 </div>
                
//                 {/* Title */}
//                 <h3 className="font-semibold text-slate-900 dark:text-white mb-1.5
//                               text-sm md:text-base leading-tight">
//                   {feature.title}
//                 </h3>
                
//                 {/* Description - Only show on larger cards or desktop */}
//                 <p className={`text-slate-600 dark:text-slate-400 text-xs leading-relaxed
//                               ${feature.size === 'small' ? 'hidden md:block' : ''}`}>
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Floating Action Card */}
//       <div className="mt-8 text-center">
//         <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl 
//                         bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
//                         border border-blue-500/20 dark:border-blue-400/20
//                         backdrop-blur-xl">
//           <div className="flex -space-x-2">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-0.5">
//               <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
//                 <Zap className="w-3 h-3 text-blue-500" />
//               </div>
//             </div>
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 p-0.5">
//               <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
//                 <Star className="w-3 h-3 text-purple-500" />
//               </div>
//             </div>
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 p-0.5">
//               <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
//                 <RefreshCw className="w-3 h-3 text-green-500" />
//               </div>
//             </div>
//           </div>
//           <div className="text-left">
//             <div className="text-sm font-medium text-slate-900 dark:text-white">
//               And many more features
//             </div>
//             <div className="text-xs text-slate-600 dark:text-slate-400">
//               Coming in future updates
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import { 
  Smartphone, 
  Filter, 
  RefreshCw, 
  Bell, 
  Shield, 
  Database, 
  Star, 
  Wifi, 
  Zap 
} from "lucide-react";

const features = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile-Optimized Dashboards",
    description: "Fully responsive UI designed specifically for phones and tablets with touch-first interactions.",
    gradient: "from-blue-500 to-cyan-400",
    size: "large", // 2x2
    position: { row: 1, col: 1, rowSpan: 2, colSpan: 2 }
  },
  {
    id: "filtering",
    icon: Filter,
    title: "Interactive Filtering",
    description: "Slice and dice your data with intuitive tap gestures.",
    gradient: "from-purple-500 to-pink-400",
    size: "tall", // 2x1
    position: { row: 1, col: 3, rowSpan: 2, colSpan: 1 }
  },
  {
    id: "realtime",
    icon: RefreshCw,
    title: "Real-Time Refresh",
    description: "Latest numbers without delays.",
    gradient: "from-green-500 to-emerald-400",
    size: "square", // 1x1
    position: { row: 1, col: 4, rowSpan: 1, colSpan: 1 }
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Push Notifications",
    description: "Instant alerts when metrics change.",
    gradient: "from-orange-500 to-red-400",
    size: "square", // 1x1
    position: { row: 2, col: 4, rowSpan: 1, colSpan: 1 }
  },
  {
    id: "security",
    icon: Shield,
    title: "Secure Authentication",
    description: "Safe connection with existing Superset credentials.",
    gradient: "from-indigo-500 to-blue-400",
    size: "wide", // 1x2
    position: { row: 3, col: 1, rowSpan: 1, colSpan: 2 }
  },
  {
    id: "instances",
    icon: Database,
    title: "Multiple Instances",
    description: "Switch workspaces easily.",
    gradient: "from-teal-500 to-cyan-400",
    size: "square", // 1x1
    position: { row: 3, col: 3, rowSpan: 1, colSpan: 1 }
  },
  {
    id: "favorites",
    icon: Star,
    title: "Favorites",
    description: "Quick dashboard access.",
    gradient: "from-yellow-500 to-orange-400",
    size: "square", // 1x1
    position: { row: 3, col: 4, rowSpan: 1, colSpan: 1 }
  },
  {
    id: "bandwidth",
    icon: Wifi,
    title: "Low-Bandwidth Mode",
    description: "Optimized performance for slower internet connections worldwide.",
    gradient: "from-gray-500 to-slate-400",
    size: "wide", // 1x2
    position: { row: 4, col: 1, rowSpan: 1, colSpan: 2 }
  },
  {
    id: "updates",
    icon: Zap,
    title: "Regular Updates",
    description: "Continuous improvements and new features.",
    gradient: "from-violet-500 to-purple-400",
    size: "wide", // 1x2
    position: { row: 4, col: 3, rowSpan: 1, colSpan: 2 }
  }
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Create scroll runway - each feature gets screen time
  const totalHeight = features.length * 100;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to feature index
  const activeIndexFloat = useTransform(scrollYProgress, [0, 1], [0, features.length - 1]);

  useEffect(() => {
    const unsubscribe = activeIndexFloat.on("change", (value) => {
      const newIndex = Math.round(value);
      setActiveIndex(Math.max(0, Math.min(newIndex, features.length - 1)));
    });
    return unsubscribe;
  }, [activeIndexFloat]);

  // Golden ratio based grid system
  const getGridClass = (feature: typeof features[0]) => {
    const { size } = feature;
    
    switch (size) {
      case "large": return "row-span-2 col-span-2"; // 2x2 - golden rectangle
      case "tall": return "row-span-2 col-span-1";  // 2x1 - half golden
      case "wide": return "row-span-1 col-span-2";  // 1x2 - wide golden
      case "square": 
      default: return "row-span-1 col-span-1";      // 1x1 - square
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="relative"
      style={{ height: `${totalHeight}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-full flex flex-col lg:flex-row items-center">
          
          {/* Left Column: Info Panel */}
          <div className="flex-1 pr-0 lg:pr-12 pt-16 pb-4 md:py-20 flex flex-col justify-center">
            
            {/* Header */}
            <div className="mb-8 flex-shrink-0">
              <p className="text-xs uppercase tracking-wider opacity-60 mb-2">
                Features
              </p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Everything you need
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl">
                Powerful analytics features designed for mobile-first professionals who need their data on the go.
              </p>
            </div>

            {/* Active Feature Detail */}
            <div className="flex-1 flex items-center">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="p-6 md:p-8 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-200/20 dark:border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${features[activeIndex].gradient} flex items-center justify-center shadow-lg`}>
                      {(() => {
                        const IconComponent = features[activeIndex].icon;
                        return <IconComponent className="w-7 h-7 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {features[activeIndex].title}
                      </h3>
                      <div className="flex gap-1 mt-1">
                        {features.map((_, i) => (
                          <div
                            key={i}
                            className={clsx(
                              "h-1 rounded-full transition-all duration-300",
                              i === activeIndex 
                                ? `w-8 bg-gradient-to-r ${features[activeIndex].gradient}`
                                : "w-1 bg-gray-300 dark:bg-gray-600"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {features[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Bento Grid */}
          <div className="flex-1 h-full flex items-center justify-center py-8">
            <div className="w-full max-w-lg">
              {/* Grid Container with Golden Ratio proportions */}
              <div className="grid grid-cols-4 grid-rows-4 gap-3 aspect-square">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  const isActive = index === activeIndex;
                  
                  return (
                    <motion.div
                      key={feature.id}
                      className={clsx(
                        getGridClass(feature),
                        "relative overflow-hidden rounded-xl cursor-pointer",
                        "bg-white/40 dark:bg-white/5 backdrop-blur-xl",
                        "border border-white/30 dark:border-white/10",
                        "transition-all duration-500",
                        isActive 
                          ? "scale-105 shadow-2xl z-10" 
                          : "hover:scale-102 hover:shadow-lg"
                      )}
                      whileHover={{ y: -2 }}
                      animate={{
                        opacity: isActive ? 1 : 0.6,
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Active gradient background */}
                      <div 
                        className={clsx(
                          "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
                          feature.gradient,
                          isActive ? "opacity-10" : "opacity-0"
                        )}
                      />
                      
                      {/* Active border glow */}
                      {isActive && (
                        <div 
                          className={clsx(
                            "absolute inset-0 rounded-xl",
                            "bg-gradient-to-br opacity-30",
                            feature.gradient
                          )}
                          style={{
                            padding: "2px",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "xor"
                          }}
                        />
                      )}
                      
                      {/* Content */}
                      <div className="relative h-full p-3 md:p-4 flex flex-col justify-center items-center text-center">
                        <div className={clsx(
                          "p-2 md:p-3 rounded-lg mb-2 md:mb-3 transition-all duration-300",
                          isActive 
                            ? `bg-gradient-to-br ${feature.gradient} shadow-lg`
                            : "bg-gray-100 dark:bg-gray-800"
                        )}>
                          <IconComponent className={clsx(
                            "w-4 h-4 md:w-5 md:h-5 transition-colors duration-300",
                            isActive ? "text-white" : "text-gray-600 dark:text-gray-400"
                          )} />
                        </div>
                        
                        <h4 className={clsx(
                          "font-semibold text-xs md:text-sm leading-tight transition-colors duration-300",
                          isActive 
                            ? "text-gray-900 dark:text-white" 
                            : "text-gray-700 dark:text-gray-300"
                        )}>
                          {feature.title}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Scroll indicator */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Scroll to explore
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
                    style={{ 
                      width: `${((activeIndex + 1) / features.length) * 100}%` 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}