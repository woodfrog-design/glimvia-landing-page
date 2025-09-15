// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import clsx from "clsx";
// // import { 
// //   Smartphone, 
// //   Filter, 
// //   RefreshCw, 
// //   Bell, 
// //   Shield, 
// //   Database, 
// //   Star, 
// //   Wifi, 
// //   Zap 
// // } from "lucide-react";

// // const features = [
// //   {
// //     id: "mobile",
// //     icon: Smartphone,
// //     title: "Mobile-Optimized Dashboards",
// //     description: "Fully responsive UI designed specifically for phones and tablets with touch-first interactions.",
// //     gradient: "from-blue-500 to-cyan-400",
// //     size: "large", // 2x2
// //     position: { row: 1, col: 1, rowSpan: 2, colSpan: 2 }
// //   },
// //   {
// //     id: "filtering",
// //     icon: Filter,
// //     title: "Interactive Filtering",
// //     description: "Slice and dice your data with intuitive tap gestures.",
// //     gradient: "from-purple-500 to-pink-400",
// //     size: "tall", // 2x1
// //     position: { row: 1, col: 3, rowSpan: 2, colSpan: 1 }
// //   },
// //   {
// //     id: "realtime",
// //     icon: RefreshCw,
// //     title: "Real-Time Refresh",
// //     description: "Latest numbers without delays.",
// //     gradient: "from-green-500 to-emerald-400",
// //     size: "square", // 1x1
// //     position: { row: 1, col: 4, rowSpan: 1, colSpan: 1 }
// //   },
// //   {
// //     id: "notifications",
// //     icon: Bell,
// //     title: "Push Notifications",
// //     description: "Instant alerts when metrics change.",
// //     gradient: "from-orange-500 to-red-400",
// //     size: "square", // 1x1
// //     position: { row: 2, col: 4, rowSpan: 1, colSpan: 1 }
// //   },
// //   {
// //     id: "security",
// //     icon: Shield,
// //     title: "Secure Authentication",
// //     description: "Safe connection with existing Superset credentials.",
// //     gradient: "from-indigo-500 to-blue-400",
// //     size: "wide", // 1x2
// //     position: { row: 3, col: 1, rowSpan: 1, colSpan: 2 }
// //   },
// //   {
// //     id: "instances",
// //     icon: Database,
// //     title: "Multiple Instances",
// //     description: "Switch workspaces easily.",
// //     gradient: "from-teal-500 to-cyan-400",
// //     size: "square", // 1x1
// //     position: { row: 3, col: 3, rowSpan: 1, colSpan: 1 }
// //   },
// //   {
// //     id: "favorites",
// //     icon: Star,
// //     title: "Favorites",
// //     description: "Quick dashboard access.",
// //     gradient: "from-yellow-500 to-orange-400",
// //     size: "square", // 1x1
// //     position: { row: 3, col: 4, rowSpan: 1, colSpan: 1 }
// //   },
// //   {
// //     id: "bandwidth",
// //     icon: Wifi,
// //     title: "Low-Bandwidth Mode",
// //     description: "Optimized performance for slower internet connections worldwide.",
// //     gradient: "from-gray-500 to-slate-400",
// //     size: "wide", // 1x2
// //     position: { row: 4, col: 1, rowSpan: 1, colSpan: 2 }
// //   },
// //   {
// //     id: "updates",
// //     icon: Zap,
// //     title: "Regular Updates",
// //     description: "Continuous improvements and new features.",
// //     gradient: "from-violet-500 to-purple-400",
// //     size: "wide", // 1x2
// //     position: { row: 4, col: 3, rowSpan: 1, colSpan: 2 }
// //   }
// // ];

// // export default function Features() {
// //   const sectionRef = useRef<HTMLDivElement>(null);
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
// //   // Create scroll runway - each feature gets screen time
// //   const totalHeight = features.length * 100;

// //   const { scrollYProgress } = useScroll({
// //     target: sectionRef,
// //     offset: ["start start", "end end"],
// //   });

// //   // Transform scroll progress to feature index
// //   const activeIndexFloat = useTransform(scrollYProgress, [0, 1], [0, features.length - 1]);

// //   useEffect(() => {
// //     const unsubscribe = activeIndexFloat.on("change", (value) => {
// //       const newIndex = Math.round(value);
// //       setActiveIndex(Math.max(0, Math.min(newIndex, features.length - 1)));
// //     });
// //     return unsubscribe;
// //   }, [activeIndexFloat]);

// //   // Golden ratio based grid system
// //   const getGridClass = (feature: typeof features[0]) => {
// //     const { size } = feature;
    
// //     switch (size) {
// //       case "large": return "row-span-2 col-span-2"; // 2x2 - golden rectangle
// //       case "tall": return "row-span-2 col-span-1";  // 2x1 - half golden
// //       case "wide": return "row-span-1 col-span-2";  // 1x2 - wide golden
// //       case "square": 
// //       default: return "row-span-1 col-span-1";      // 1x1 - square
// //     }
// //   };

// //   return (
// //     <section 
// //       ref={sectionRef}
// //       id="features" 
// //       className="relative"
// //       style={{ height: `${totalHeight}vh` }}
// //     >
// //       {/* Sticky viewport */}
// //       <div className="sticky top-0 w-full h-screen overflow-hidden">
// //         <div className="max-w-7xl mx-auto px-4 md:px-12 h-full flex flex-col lg:flex-row items-center">
          
// //           {/* Left Column: Info Panel */}
// //           <div className="flex-1 pr-0 lg:pr-12 pt-16 pb-4 md:py-20 flex flex-col justify-center">
            
// //             {/* Header */}
// //             <div className="mb-8 flex-shrink-0">
// //               <p className="text-xs uppercase tracking-wider opacity-60 mb-2">
// //                 Features
// //               </p>
// //               <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
// //                 Everything you need
// //               </h2>
// //               <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl">
// //                 Powerful analytics features designed for mobile-first professionals who need their data on the go.
// //               </p>
// //             </div>

// //             {/* Active Feature Detail */}
// //             <div className="flex-1 flex items-center">
// //               <motion.div
// //                 key={activeIndex}
// //                 initial={{ opacity: 0, x: -20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.5 }}
// //                 className="w-full"
// //               >
// //                 <div className="p-6 md:p-8 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-200/20 dark:border-white/10">
// //                   <div className="flex items-center gap-4 mb-6">
// //                     <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${features[activeIndex].gradient} flex items-center justify-center shadow-lg`}>
// //                       {(() => {
// //                         const IconComponent = features[activeIndex].icon;
// //                         return <IconComponent className="w-7 h-7 text-white" />;
// //                       })()}
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
// //                         {features[activeIndex].title}
// //                       </h3>
// //                       <div className="flex gap-1 mt-1">
// //                         {features.map((_, i) => (
// //                           <div
// //                             key={i}
// //                             className={clsx(
// //                               "h-1 rounded-full transition-all duration-300",
// //                               i === activeIndex 
// //                                 ? `w-8 bg-gradient-to-r ${features[activeIndex].gradient}`
// //                                 : "w-1 bg-gray-300 dark:bg-gray-600"
// //                             )}
// //                           />
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
// //                     {features[activeIndex].description}
// //                   </p>
// //                 </div>
// //               </motion.div>
// //             </div>
// //           </div>

// //           {/* Right Column: Bento Grid */}
// //           <div className="flex-1 h-full flex items-center justify-center py-8">
// //             <div className="w-full max-w-lg">
// //               {/* Grid Container with Golden Ratio proportions */}
// //               <div className="grid grid-cols-4 grid-rows-4 gap-3 aspect-square">
// //                 {features.map((feature, index) => {
// //                   const IconComponent = feature.icon;
// //                   const isActive = index === activeIndex;
                  
// //                   return (
// //                     <motion.div
// //                       key={feature.id}
// //                       className={clsx(
// //                         getGridClass(feature),
// //                         "relative overflow-hidden rounded-xl cursor-pointer",
// //                         "bg-white/40 dark:bg-white/5 backdrop-blur-xl",
// //                         "border border-white/30 dark:border-white/10",
// //                         "transition-all duration-500",
// //                         isActive 
// //                           ? "scale-105 shadow-2xl z-10" 
// //                           : "hover:scale-102 hover:shadow-lg"
// //                       )}
// //                       whileHover={{ y: -2 }}
// //                       animate={{
// //                         opacity: isActive ? 1 : 0.6,
// //                         scale: isActive ? 1.05 : 1,
// //                       }}
// //                       transition={{ duration: 0.3 }}
// //                     >
// //                       {/* Active gradient background */}
// //                       <div 
// //                         className={clsx(
// //                           "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
// //                           feature.gradient,
// //                           isActive ? "opacity-10" : "opacity-0"
// //                         )}
// //                       />
                      
// //                       {/* Active border glow */}
// //                       {isActive && (
// //                         <div 
// //                           className={clsx(
// //                             "absolute inset-0 rounded-xl",
// //                             "bg-gradient-to-br opacity-30",
// //                             feature.gradient
// //                           )}
// //                           style={{
// //                             padding: "2px",
// //                             mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
// //                             maskComposite: "xor"
// //                           }}
// //                         />
// //                       )}
                      
// //                       {/* Content */}
// //                       <div className="relative h-full p-3 md:p-4 flex flex-col justify-center items-center text-center">
// //                         <div className={clsx(
// //                           "p-2 md:p-3 rounded-lg mb-2 md:mb-3 transition-all duration-300",
// //                           isActive 
// //                             ? `bg-gradient-to-br ${feature.gradient} shadow-lg`
// //                             : "bg-gray-100 dark:bg-gray-800"
// //                         )}>
// //                           <IconComponent className={clsx(
// //                             "w-4 h-4 md:w-5 md:h-5 transition-colors duration-300",
// //                             isActive ? "text-white" : "text-gray-600 dark:text-gray-400"
// //                           )} />
// //                         </div>
                        
// //                         <h4 className={clsx(
// //                           "font-semibold text-xs md:text-sm leading-tight transition-colors duration-300",
// //                           isActive 
// //                             ? "text-gray-900 dark:text-white" 
// //                             : "text-gray-700 dark:text-gray-300"
// //                         )}>
// //                           {feature.title}
// //                         </h4>
// //                       </div>
// //                     </motion.div>
// //                   );
// //                 })}
// //               </div>
              
// //               {/* Scroll indicator */}
// //               <div className="mt-6 text-center">
// //                 <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
// //                   Scroll to explore
// //                 </p>
// //                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
// //                   <motion.div 
// //                     className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
// //                     style={{ 
// //                       width: `${((activeIndex + 1) / features.length) * 100}%` 
// //                     }}
// //                     transition={{ duration: 0.3 }}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// // src/components/Features.tsx
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import clsx from "clsx";
// import {
//   Smartphone,
//   Filter,
//   RefreshCw,
//   Bell,
//   Shield,
//   Database,
//   Star,
//   Wifi,
//   Zap,
// } from "lucide-react";

// /** ------------------------------
//  * SHARED DATA (desktop + mobile)
//  * ------------------------------ */
// const features = [
//   {
//     id: "mobile",
//     icon: Smartphone,
//     title: "Mobile-Optimized Dashboards",
//     description:
//       "Fully responsive UI designed specifically for phones and tablets with touch-first interactions.",
//     gradient: "from-blue-500 to-cyan-400",
//     size: "large", // 2x2
//     position: { row: 1, col: 1, rowSpan: 2, colSpan: 2 },
//   },
//   {
//     id: "filtering",
//     icon: Filter,
//     title: "Interactive Filtering",
//     description: "Slice and dice your data with intuitive tap gestures.",
//     gradient: "from-purple-500 to-pink-400",
//     size: "tall", // 2x1
//     position: { row: 1, col: 3, rowSpan: 2, colSpan: 1 },
//   },
//   {
//     id: "realtime",
//     icon: RefreshCw,
//     title: "Real-Time Refresh",
//     description: "Latest numbers without delays.",
//     gradient: "from-green-500 to-emerald-400",
//     size: "square", // 1x1
//     position: { row: 1, col: 4, rowSpan: 1, colSpan: 1 },
//   },
//   {
//     id: "notifications",
//     icon: Bell,
//     title: "Push Notifications",
//     description: "Instant alerts when metrics change.",
//     gradient: "from-orange-500 to-red-400",
//     size: "square", // 1x1
//     position: { row: 2, col: 4, rowSpan: 1, colSpan: 1 },
//   },
//   {
//     id: "security",
//     icon: Shield,
//     title: "Secure Authentication",
//     description: "Safe connection with existing Superset credentials.",
//     gradient: "from-indigo-500 to-blue-400",
//     size: "wide", // 1x2
//     position: { row: 3, col: 1, rowSpan: 1, colSpan: 2 },
//   },
//   {
//     id: "instances",
//     icon: Database,
//     title: "Multiple Instances",
//     description: "Switch workspaces easily.",
//     gradient: "from-teal-500 to-cyan-400",
//     size: "square", // 1x1
//     position: { row: 3, col: 3, rowSpan: 1, colSpan: 1 },
//   },
//   {
//     id: "favorites",
//     icon: Star,
//     title: "Favorites",
//     description: "Quick dashboard access.",
//     gradient: "from-yellow-500 to-orange-400",
//     size: "square", // 1x1
//     position: { row: 3, col: 4, rowSpan: 1, colSpan: 1 },
//   },
//   {
//     id: "bandwidth",
//     icon: Wifi,
//     title: "Low-Bandwidth Mode",
//     description:
//       "Optimized performance for slower internet connections worldwide.",
//     gradient: "from-gray-500 to-slate-400",
//     size: "wide", // 1x2
//     position: { row: 4, col: 1, rowSpan: 1, colSpan: 2 },
//   },
//   {
//     id: "updates",
//     icon: Zap,
//     title: "Regular Updates",
//     description: "Continuous improvements and new features.",
//     gradient: "from-violet-500 to-purple-400",
//     size: "wide", // 1x2
//     position: { row: 4, col: 3, rowSpan: 1, colSpan: 2 },
//   },
// ] as const;

// /** ------------------------------
//  * MOBILE VIEW (compact rail)
//  * ------------------------------ */
// function MobileRail() {
//   const mobileItems = features.map((f) => ({
//     title: f.title,
//     blurb: f.description,
//     tint: f.gradient.replace("to-", "to-").replace("from-", "from-") + "/20",
//   }));

//   return (
//     <div className="md:hidden">
//       <div className="mx-auto max-w-7xl px-4">
//         <div
//           className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 pt-1"
//           aria-label="Scrollable list of features"
//         >
//           {mobileItems.map((it) => (
//             <div key={it.title} className="snap-start shrink-0 w-[85%]">
//               <div
//                 className={[
//                   "group relative select-none rounded-xl border border-slate-200/60 bg-white/70 p-4",
//                   "shadow-sm backdrop-blur-md transition-[transform,box-shadow] duration-200",
//                   "active:scale-[0.99] dark:border-slate-800/60 dark:bg-slate-900/60",
//                 ].join(" ")}
//               >
//                 {/* semi-transparent default + brighter on touch */}
//                 <div
//                   className={[
//                     "pointer-events-none absolute inset-0 rounded-xl",
//                     "bg-gradient-to-br",
//                     it.tint,
//                     "to-transparent opacity-0 transition-opacity duration-200",
//                     "group-active:opacity-100 group-hover:opacity-100",
//                   ].join(" ")}
//                 />
//                 <div
//                   className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-active:opacity-100"
//                   style={{
//                     background:
//                       "radial-gradient(120px 80px at 30% 20%, rgba(255,255,255,0.25), transparent 60%)",
//                   }}
//                 />
//                 <div className="relative z-10">
//                   <h3 className="text-base font-semibold leading-tight text-slate-900 dark:text-white">
//                     {it.title}
//                   </h3>
//                   <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
//                     {it.blurb}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="shrink-0 basis-2" />
//         </div>

//         {/* Subtle divider + hint */}
//         <div className="mx-auto mt-3 h-px w-full max-w-md bg-slate-200/70 dark:bg-slate-800/70" />
//         <p className="mt-2 text-center text-xs text-slate-500 dark:text-slate-500">
//           Swipe to explore
//         </p>
//       </div>
//     </div>
//   );
// }

// /** ------------------------------
//  * DESKTOP VIEW (your original sticky bento)
//  * ------------------------------ */
// function DesktopStickyBento() {
//   // IMPORTANT: we keep your original layout/logic; just scope it to md+ screens.
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // runway so each feature gets screen time
//   const totalHeight = features.length * 100;

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const activeIndexFloat = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, features.length - 1]
//   );

//   useEffect(() => {
//     const unsub = activeIndexFloat.on("change", (v) => {
//       const newIndex = Math.round(v);
//       setActiveIndex(Math.max(0, Math.min(newIndex, features.length - 1)));
//     });
//     return unsub;
//   }, [activeIndexFloat]);

//   const getGridClass = (feature: (typeof features)[number]) => {
//     switch (feature.size) {
//       case "large":
//         return "row-span-2 col-span-2"; // 2x2
//       case "tall":
//         return "row-span-2 col-span-1"; // 2x1
//       case "wide":
//         return "row-span-1 col-span-2"; // 1x2
//       case "square":
//       default:
//         return "row-span-1 col-span-1";
//     }
//   };

//   return (
//     <div className="hidden md:block">
//       <div
//         ref={sectionRef}
//         className="relative"
//         style={{ height: `${totalHeight}vh` }}
//       >
//         {/* Sticky viewport */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <div className="mx-auto flex h-full max-w-7xl flex-col items-center px-4 md:flex-row md:px-12">
//             {/* Left: Info Panel */}
//             <div className="flex-1 py-20 pb-4 pt-16 md:py-20 md:pr-12">
//               <div className="mb-8">
//                 <p className="mb-2 text-xs uppercase tracking-wider opacity-60">
//                   Features
//                 </p>
//                 <h2 className="mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl">
//                   Everything you need
//                 </h2>
//                 <p className="max-w-xl text-sm text-gray-600 dark:text-gray-300 md:text-base">
//                   Powerful analytics features designed for mobile-first
//                   professionals who need their data on the go.
//                 </p>
//               </div>

//               <div className="flex items-center">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="w-full"
//                 >
//                   <div className="rounded-2xl border border-gray-200/20 bg-white/60 p-6 backdrop-blur-lg dark:border-white/10 dark:bg-gray-900/60 md:p-8">
//                     <div className="mb-6 flex items-center gap-4">
//                       <div
//                         className={clsx(
//                           "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
//                           features[activeIndex].gradient
//                         )}
//                       >
//                         {(() => {
//                           const Icon = features[activeIndex].icon;
//                           return <Icon className="h-7 w-7 text-white" />;
//                         })()}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
//                           {features[activeIndex].title}
//                         </h3>
//                         <div className="mt-1 flex gap-1">
//                           {features.map((_, i) => (
//                             <div
//                               key={i}
//                               className={clsx(
//                                 "h-1 rounded-full transition-all duration-300",
//                                 i === activeIndex
//                                   ? `w-8 bg-gradient-to-r ${features[activeIndex].gradient}`
//                                   : "w-1 bg-gray-300 dark:bg-gray-600"
//                               )}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
//                       {features[activeIndex].description}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Right: Bento Grid */}
//             <div className="flex h-full flex-1 items-center justify-center py-8">
//               <div className="w-full max-w-lg">
//                 <div className="grid aspect-square grid-cols-4 grid-rows-4 gap-3">
//                   {features.map((feature, index) => {
//                     const Icon = feature.icon;
//                     const isActive = index === activeIndex;

//                     return (
//                       <motion.div
//                         key={feature.id}
//                         className={clsx(
//                           getGridClass(feature),
//                           "relative cursor-pointer overflow-hidden rounded-xl",
//                           "bg-white/40 backdrop-blur-xl dark:bg-white/5",
//                           "border border-white/30 dark:border-white/10",
//                           "transition-all duration-500",
//                           isActive
//                             ? "z-10 scale-105 shadow-2xl"
//                             : "hover:scale-[1.02] hover:shadow-lg"
//                         )}
//                         whileHover={{ y: -2 }}
//                         animate={{
//                           opacity: isActive ? 1 : 0.6,
//                           scale: isActive ? 1.05 : 1,
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {/* Active gradient background */}
//                         <div
//                           className={clsx(
//                             "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
//                             feature.gradient,
//                             isActive ? "opacity-10" : "opacity-0"
//                           )}
//                         />

//                         {/* Active border glow */}
//                         {isActive && (
//                           <div
//                             className={clsx(
//                               "absolute inset-0 rounded-xl",
//                               "bg-gradient-to-br opacity-30",
//                               feature.gradient
//                             )}
//                             style={{
//                               padding: "2px",
//                               mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                               maskComposite: "xor",
//                             }}
//                           />
//                         )}

//                         {/* Content */}
//                         <div className="relative flex h-full flex-col items-center justify-center p-3 text-center md:p-4">
//                           <div
//                             className={clsx(
//                               "mb-2 rounded-lg p-2 transition-all duration-300 md:mb-3 md:p-3",
//                               isActive
//                                 ? `bg-gradient-to-br ${feature.gradient} shadow-lg`
//                                 : "bg-gray-100 dark:bg-gray-800"
//                             )}
//                           >
//                             <Icon
//                               className={clsx(
//                                 "h-4 w-4 transition-colors duration-300 md:h-5 md:w-5",
//                                 isActive
//                                   ? "text-white"
//                                   : "text-gray-600 dark:text-gray-400"
//                               )}
//                             />
//                           </div>

//                           <h4
//                             className={clsx(
//                               "text-xs font-semibold leading-tight transition-colors duration-300 md:text-sm",
//                               isActive
//                                 ? "text-gray-900 dark:text-white"
//                                 : "text-gray-700 dark:text-gray-300"
//                             )}
//                           >
//                             {feature.title}
//                           </h4>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>

//                 {/* Scroll indicator */}
//                 <div className="mt-6 text-center">
//                   <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
//                     Scroll to explore
//                   </p>
//                   <div className="h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
//                     <motion.div
//                       className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
//                       style={{
//                         width: `${
//                           ((activeIndex + 1) / features.length) * 100
//                         }%`,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>  
//     </div>
//   );
// }

// /** ------------------------------
//  * MAIN SECTION (shared anchor & header)
//  * ------------------------------ */
// export default function Features() {
//   return (
//     <section
//       id="features"
//       className="relative scroll-mt-24 md:scroll-mt-28"
//       aria-labelledby="features-title"
//     >
//       {/* Header (shared) */}
//       <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
//         <h2
//           id="features-title"
//           className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white"
//         >
//           Everything you need
//         </h2>
//         <p className="mt-2 text-slate-600 dark:text-slate-400">
//           Powerful analytics features designed for mobile-first professionals.
//         </p>
//       </div>

//       {/* Mobile: compact swipe rail */}
//       <div className="mt-6 md:hidden">
//         <MobileRail />
//       </div>

//       {/* Desktop: your sticky bento, unchanged in behavior */}
//       <DesktopStickyBento />
//     </section>
//   );
// }


// // src/components/Features.tsx
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import clsx from "clsx";
// import {
//   Smartphone,
//   Filter,
//   RefreshCw,
//   Bell,
//   Shield,
//   Database,
//   Star,
//   Wifi,
//   Zap,
// } from "lucide-react";

// /** ------------------------------
//  * SHARED DATA (desktop + mobile)
//  * ------------------------------ */
// const features = [
//   {
//     id: "mobile",
//     icon: Smartphone,
//     title: "Mobile-Optimized Dashboards",
//     description:
//       "Fully responsive UI designed specifically for phones and tablets with touch-first interactions.",
//     gradient: "from-blue-500 to-cyan-400",
//     size: "large", // 2x2
//     position: { row: 1, col: 1, rowSpan: 2, colSpan: 2 },
//   },
//   {
//     id: "filtering",
//     icon: Filter,
//     title: "Interactive Filtering",
//     description: "Slice and dice your data with intuitive tap gestures.",
//     gradient: "from-purple-500 to-pink-400",
//     size: "tall", // 2x1
//     position: { row: 1, col: 3, rowSpan: 2, colSpan: 1 },
//   },
//   {
//     id: "realtime",
//     icon: RefreshCw,
//     title: "Real-Time Refresh",
//     description: "Latest numbers without delays.",
//     gradient: "from-green-500 to-emerald-400",
//     size: "square", // 1x1
//     position: { row: 1, col: 4, rowSpan: 1, colSpan: 1 },
//   },
//   {
//     id: "notifications",
//     icon: Bell,
//     title: "Push Notifications",
//     description: "Instant alerts when metrics change.",
//     gradient: "from-orange-500 to-red-400",
//     size: "square", // 1x1
//     position: { row: 2, col: 4, rowSpan: 1, colSpan: 1 },
//   },
//   {
//     id: "security",
//     icon: Shield,
//     title: "Secure Authentication",
//     description: "Safe connection with existing Superset credentials.",
//     gradient: "from-indigo-500 to-blue-400",
//     size: "wide", // 1x2
//     position: { row: 3, col: 1, rowSpan: 1, colSpan: 2 },
//   },
//   {
//     id: "instances",
//     icon: Database,
//     title: "Multiple Instances",
//     description: "Switch workspaces easily.",
//     gradient: "from-teal-500 to-cyan-400",
//     size: "square", // 1x1
//     position: { row: 3, col: 3, rowSpan: 1, colSpan: 1 },
//   },
//   {
//     id: "favorites",
//     icon: Star,
//     title: "Favorites",
//     description: "Quick dashboard access.",
//     gradient: "from-yellow-500 to-orange-400",
//     size: "square", // 1x1
//     position: { row: 3, col: 4, rowSpan: 1, colSpan: 1 },
//   },
//   {
//     id: "bandwidth",
//     icon: Wifi,
//     title: "Low-Bandwidth Mode",
//     description:
//       "Optimized performance for slower internet connections worldwide.",
//     gradient: "from-gray-500 to-slate-400",
//     size: "wide", // 1x2
//     position: { row: 4, col: 1, rowSpan: 1, colSpan: 2 },
//   },
//   {
//     id: "updates",
//     icon: Zap,
//     title: "Regular Updates",
//     description: "Continuous improvements and new features.",
//     gradient: "from-violet-500 to-purple-400",
//     size: "wide", // 1x2
//     position: { row: 4, col: 3, rowSpan: 1, colSpan: 2 },
//   },
// ] as const;

// /** ------------------------------
//  * MOBILE VIEW (enhanced rail: icons + auto-scroll + center highlight + dots)
//  * ------------------------------ */
// function MobileRail() {
//   const railRef = useRef<HTMLDivElement>(null);
//   const [activeIdx, setActiveIdx] = useState(0);
//   const userInteractedRef = useRef(false);
//   const autoTimerRef = useRef<number | null>(null);

//   // Build mobile items with icons + tints
//   const mobileItems = features.map((f) => ({
//     title: f.title,
//     blurb: f.description,
//     Icon: f.icon,
//     tint: f.gradient + "/20",
//   }));

//   // Center-highlighting logic
//   useEffect(() => {
//     const rail = railRef.current;
//     if (!rail) return;

//     const updateActive = () => {
//       const { clientWidth } = rail;
//       const railRect = rail.getBoundingClientRect();
//       const centerX = railRect.left + clientWidth / 2;

//       const cards = Array.from(
//         rail.querySelectorAll<HTMLDivElement>("[data-card]")
//       );
//       let best = 0;
//       let bestDist = Infinity;

//       cards.forEach((card, i) => {
//         const rect = card.getBoundingClientRect();
//         const cardCenter = rect.left + rect.width / 2;
//         const dist = Math.abs(cardCenter - centerX);
//         if (dist < bestDist) {
//           bestDist = dist;
//           best = i;
//         }
//       });

//       setActiveIdx(best);
//     };

//     updateActive();
//     const onScroll = () => {
//       userInteractedRef.current = true; // any scroll counts as interaction
//       updateActive();
//     };

//     rail.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", updateActive);
//     return () => {
//       rail.removeEventListener("scroll", onScroll as any);
//       window.removeEventListener("resize", updateActive);
//     };
//   }, []);

//   // Auto-scroll (pauses after any user interaction; resumes after 6s idle)
//   useEffect(() => {
//     const rail = railRef.current;
//     if (!rail) return;

//     const goTo = (idx: number) => {
//       const cards = Array.from(
//         rail.querySelectorAll<HTMLDivElement>("[data-card]")
//       );
//       const card = cards[idx];
//       if (!card) return;
//       rail.scrollTo({
//         left: card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2,
//         behavior: "smooth",
//       });
//     };

//     const schedule = () => {
//       if (autoTimerRef.current) window.clearTimeout(autoTimerRef.current);
//       autoTimerRef.current = window.setTimeout(() => {
//         // if user interacted recently, wait and try again
//         if (userInteractedRef.current) {
//           userInteractedRef.current = false;
//           schedule();
//           return;
//         }
//         const next = (activeIdx + 1) % mobileItems.length;
//         goTo(next);
//         schedule();
//       }, 3500);
//     };

//     schedule();
//     return () => {
//       if (autoTimerRef.current) window.clearTimeout(autoTimerRef.current);
//     };
//   }, [activeIdx, mobileItems.length]);

//   return (
//     <div className="md:hidden">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="mb-2">
//           <p className="text-xs uppercase tracking-wider opacity-60">Features</p>
//           <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
//             Everything you need
//           </h3>
//         </div>

//         <div
//           ref={railRef}
//           className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 pt-1"
//           aria-label="Scrollable list of features"
//           onPointerDown={() => {
//             // Any touch/drag pauses auto-scroll immediately
//             userInteractedRef.current = true;
//           }}
//         >
//           {mobileItems.map(({ title, blurb, Icon, tint }, i) => {
//             const isActive = i === activeIdx;
//             return (
//               <div
//                 key={title}
//                 data-card
//                 className="snap-center shrink-0 w-[85%]"
//               >
//                 <div
//                   className={clsx(
//                     "group relative select-none rounded-xl border p-4 shadow-sm backdrop-blur-md transition-all duration-300",
//                     "border-slate-200/60 dark:border-slate-800/60",
//                     "bg-white/70 dark:bg-slate-900/60",
//                     isActive
//                       ? "ring-2 ring-offset-0 ring-slate-300/60 dark:ring-slate-700/60 scale-[1.01]"
//                       : "ring-0"
//                   )}
//                 >
//                   {/* semi-transparent default + brighter on touch/active */}
//                   <div
//                     className={clsx(
//                       "pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br to-transparent transition-opacity duration-200",
//                       tint,
//                       isActive ? "opacity-100" : "opacity-0",
//                       "group-active:opacity-100 group-hover:opacity-100"
//                     )}
//                   />
//                   <div
//                     className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-active:opacity-100"
//                     style={{
//                       background:
//                         "radial-gradient(120px 80px at 30% 20%, rgba(255,255,255,0.25), transparent 60%)",
//                     }}
//                   />

//                   <div className="relative z-10">
//                     <div className="mb-2 inline-flex items-center gap-2">
//                       <div
//                         className={clsx(
//                           "grid h-9 w-9 place-items-center rounded-lg transition-colors",
//                           isActive
//                             ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
//                             : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
//                         )}
//                       >
//                         <Icon className="h-5 w-5" />
//                       </div>
//                       <h4 className="text-base font-semibold leading-tight text-slate-900 dark:text-white">
//                         {title}
//                       </h4>
//                     </div>
//                     <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
//                       {blurb}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//           <div className="shrink-0 basis-2" />
//         </div>

//         {/* Dots + hint */}
//         <div className="mt-3 flex items-center justify-center gap-2">
//           {mobileItems.map((_, i) => (
//             <button
//               key={i}
//               aria-label={`Go to feature ${i + 1}`}
//               onClick={() => {
//                 const rail = railRef.current;
//                 if (!rail) return;
//                 const card = rail.querySelectorAll<HTMLDivElement>("[data-card]")[i];
//                 if (!card) return;
//                 rail.scrollTo({
//                   left:
//                     card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2,
//                   behavior: "smooth",
//                 });
//               }}
//               className={clsx(
//                 "h-1.5 w-1.5 rounded-full transition-all",
//                 i === activeIdx
//                   ? "w-4 bg-slate-900 dark:bg-white"
//                   : "bg-slate-300 dark:bg-slate-600"
//               )}
//             />
//           ))}
//         </div>
//         <p className="mt-1 text-center text-xs text-slate-500 dark:text-slate-500">
//           Swipe to explore
//         </p>
//       </div>
//     </div>
//   );
// }

// /** ------------------------------
//  * DESKTOP VIEW (your original sticky bento — unchanged behavior)
//  * ------------------------------ */
// function DesktopStickyBento() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const totalHeight = features.length * 100;

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const activeIndexFloat = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, features.length - 1]
//   );

//   useEffect(() => {
//     const unsub = activeIndexFloat.on("change", (v) => {
//       const newIndex = Math.round(v);
//       setActiveIndex(Math.max(0, Math.min(newIndex, features.length - 1)));
//     });
//     return unsub;
//   }, [activeIndexFloat]);

//   const getGridClass = (feature: (typeof features)[number]) => {
//     switch (feature.size) {
//       case "large":
//         return "row-span-2 col-span-2"; // 2x2
//       case "tall":
//         return "row-span-2 col-span-1"; // 2x1
//       case "wide":
//         return "row-span-1 col-span-2"; // 1x2
//       case "square":
//       default:
//         return "row-span-1 col-span-1";
//     }
//   };

//   return (
//     <div className="hidden md:block">
//       <div
//         ref={sectionRef}
//         className="relative"
//         style={{ height: `${totalHeight}vh` }}
//       >
//         {/* Sticky viewport */}
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <div className="mx-auto flex h-full max-w-7xl flex-col items-center px-4 md:flex-row md:px-12">
//             {/* Left: Info Panel */}
//             <div className="flex-1 py-20 pb-4 pt-16 md:py-20 md:pr-12">
//               <div className="mb-8">
//                 <p className="mb-2 text-xs uppercase tracking-wider opacity-60">
//                   Features
//                 </p>
//                 <h2 className="mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl">
//                   Everything you need
//                 </h2>
//                 <p className="max-w-xl text-sm text-gray-600 dark:text-gray-300 md:text-base">
//                   Powerful analytics features designed for mobile-first
//                   professionals who need their data on the go.
//                 </p>
//               </div>

//               <div className="flex items-center">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="w-full"
//                 >
//                   <div className="rounded-2xl border border-gray-200/20 bg-white/60 p-6 backdrop-blur-lg dark:border-white/10 dark:bg-gray-900/60 md:p-8">
//                     <div className="mb-6 flex items-center gap-4">
//                       <div
//                         className={clsx(
//                           "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
//                           features[activeIndex].gradient
//                         )}
//                       >
//                         {(() => {
//                           const Icon = features[activeIndex].icon;
//                           return <Icon className="h-7 w-7 text-white" />;
//                         })()}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
//                           {features[activeIndex].title}
//                         </h3>
//                         <div className="mt-1 flex gap-1">
//                           {features.map((_, i) => (
//                             <div
//                               key={i}
//                               className={clsx(
//                                 "h-1 rounded-full transition-all duration-300",
//                                 i === activeIndex
//                                   ? `w-8 bg-gradient-to-r ${features[activeIndex].gradient}`
//                                   : "w-1 bg-gray-300 dark:bg-gray-600"
//                               )}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
//                       {features[activeIndex].description}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Right: Bento Grid */}
//             <div className="flex h-full flex-1 items-center justify-center py-8">
//               <div className="w-full max-w-lg">
//                 <div className="grid aspect-square grid-cols-4 grid-rows-4 gap-3">
//                   {features.map((feature, index) => {
//                     const Icon = feature.icon;
//                     const isActive = index === activeIndex;

//                     return (
//                       <motion.div
//                         key={feature.id}
//                         className={clsx(
//                           getGridClass(feature),
//                           "relative cursor-pointer overflow-hidden rounded-xl",
//                           "bg-white/40 backdrop-blur-xl dark:bg-white/5",
//                           "border border-white/30 dark:border-white/10",
//                           "transition-all duration-500",
//                           isActive
//                             ? "z-10 scale-105 shadow-2xl"
//                             : "hover:scale-[1.02] hover:shadow-lg"
//                         )}
//                         whileHover={{ y: -2 }}
//                         animate={{
//                           opacity: isActive ? 1 : 0.6,
//                           scale: isActive ? 1.05 : 1,
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {/* Active gradient background */}
//                         <div
//                           className={clsx(
//                             "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
//                             feature.gradient,
//                             isActive ? "opacity-10" : "opacity-0"
//                           )}
//                         />

//                         {/* Active border glow */}
//                         {isActive && (
//                           <div
//                             className={clsx(
//                               "absolute inset-0 rounded-xl",
//                               "bg-gradient-to-br opacity-30",
//                               feature.gradient
//                             )}
//                             style={{
//                               padding: "2px",
//                               mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                               // @ts-ignore – browser supports composite on modern engines
//                               maskComposite: "xor",
//                             }}
//                           />
//                         )}

//                         {/* Content */}
//                         <div className="relative flex h-full flex-col items-center justify-center p-3 text-center md:p-4">
//                           <div
//                             className={clsx(
//                               "mb-2 rounded-lg p-2 transition-all duration-300 md:mb-3 md:p-3",
//                               isActive
//                                 ? `bg-gradient-to-br ${feature.gradient} shadow-lg`
//                                 : "bg-gray-100 dark:bg-gray-800"
//                             )}
//                           >
//                             <Icon
//                               className={clsx(
//                                 "h-4 w-4 transition-colors duration-300 md:h-5 md:w-5",
//                                 isActive
//                                   ? "text-white"
//                                   : "text-gray-600 dark:text-gray-400"
//                               )}
//                             />
//                           </div>

//                           <h4
//                             className={clsx(
//                               "text-xs font-semibold leading-tight transition-colors duration-300 md:text-sm",
//                               isActive
//                                 ? "text-gray-900 dark:text-white"
//                                 : "text-gray-700 dark:text-gray-300"
//                             )}
//                           >
//                             {feature.title}
//                           </h4>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>

//                 {/* Scroll indicator */}
//                 <div className="mt-6 text-center">
//                   <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
//                     Scroll to explore
//                   </p>
//                   <div className="h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
//                     <motion.div
//                       className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
//                       style={{
//                         width: `${
//                           ((activeIndex + 1) / features.length) * 100
//                         }%`,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>  
//     </div>
//   );
// }

// /** ------------------------------
//  * MAIN SECTION (shared anchor & header)
//  * ------------------------------ */
// export default function Features() {
//   return (
//     <section
//       id="features"
//       className="relative scroll-mt-24 md:scroll-mt-28"
//       aria-labelledby="features-title"
//     >
//       {/* Header (mobile version duplicates the label to match desktop) */}
//       <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 md:hidden">
//         <p className="text-xs uppercase tracking-wider opacity-60">Features</p>
//         <h2
//           id="features-title"
//           className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white"
//         >
//           Everything you need
//         </h2>
//         <p className="mt-2 text-slate-600 dark:text-slate-400">
//           Powerful analytics features designed for mobile-first professionals.
//         </p>
//       </div>

//       {/* Mobile: enhanced swipe rail */}
//       <div className="mt-3 md:hidden">
//         <MobileRail />
//       </div>

//       {/* Desktop: your sticky bento, unchanged in behavior and header */}
//       <DesktopStickyBento />
//     </section>
//   );
// }


// src/components/Features.tsx
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
  Zap,
} from "lucide-react";

/** ------------------------------
 * SHARED DATA (desktop + mobile)
 * ------------------------------ */
const features = [
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile-Optimized Dashboards",
    description:
      "Fully responsive UI designed specifically for phones and tablets with touch-first interactions.",
    gradient: "from-blue-500 to-cyan-400",
    size: "large", // 2x2
  },
  {
    id: "filtering",
    icon: Filter,
    title: "Interactive Filtering",
    description: "Slice and dice your data with intuitive tap gestures.",
    gradient: "from-purple-500 to-pink-400",
    size: "tall", // 2x1
  },
  {
    id: "realtime",
    icon: RefreshCw,
    title: "Real-Time Refresh",
    description: "Latest numbers without delays.",
    gradient: "from-green-500 to-emerald-400",
    size: "square", // 1x1
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Push Notifications",
    description: "Instant alerts when metrics change.",
    gradient: "from-orange-500 to-red-400",
    size: "square", // 1x1
  },
  {
    id: "security",
    icon: Shield,
    title: "Secure Authentication",
    description: "Safe connection with existing Superset credentials.",
    gradient: "from-indigo-500 to-blue-400",
    size: "wide", // 1x2
  },
  {
    id: "instances",
    icon: Database,
    title: "Multiple Instances",
    description: "Switch workspaces easily.",
    gradient: "from-teal-500 to-cyan-400",
    size: "square", // 1x1
  },
  {
    id: "favorites",
    icon: Star,
    title: "Favorites",
    description: "Quick dashboard access.",
    gradient: "from-yellow-500 to-orange-400",
    size: "square", // 1x1
  },
  {
    id: "bandwidth",
    icon: Wifi,
    title: "Low-Bandwidth Mode",
    description:
      "Optimized performance for slower internet connections worldwide.",
    gradient: "from-gray-500 to-slate-400",
    size: "wide", // 1x2
  },
  {
    id: "updates",
    icon: Zap,
    title: "Regular Updates",
    description: "Continuous improvements and new features.",
    gradient: "from-violet-500 to-purple-400",
    size: "wide", // 1x2
  },
] as const;

/** ------------------------------
 * MOBILE VIEW (enhanced rail — stable)
 * ------------------------------ */
function MobileRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const userInteractedRef = useRef(false);
  const autoTimerRef = useRef<number | null>(null);

  const mobileItems = features.map((f) => ({
    title: f.title,
    blurb: f.description,
    Icon: f.icon,
    grad: f.gradient,
    tint: f.gradient + "/20",
  }));

  // Center-highlighting logic
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const updateActive = () => {
      const { clientWidth } = rail;
      const railRect = rail.getBoundingClientRect();
      const centerX = railRect.left + clientWidth / 2;

      const cards = Array.from(
        rail.querySelectorAll<HTMLDivElement>("[data-card]")
      );
      let best = 0;
      let bestDist = Infinity;

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenter - centerX);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      setActiveIdx(best);
    };

    updateActive();
    const onScroll = () => {
      userInteractedRef.current = true;
      updateActive();
    };

    rail.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      rail.removeEventListener("scroll", onScroll as any);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  // Auto-scroll — slowed to 5s
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const goTo = (idx: number) => {
      const cards = Array.from(
        rail.querySelectorAll<HTMLDivElement>("[data-card]")
      );
      const card = cards[idx];
      if (!card) return;
      rail.scrollTo({
        left: card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2,
        behavior: "smooth",
      });
    };

    const schedule = () => {
      if (autoTimerRef.current) window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = window.setTimeout(() => {
        if (userInteractedRef.current) {
          userInteractedRef.current = false;
          schedule();
          return;
        }
        const next = (activeIdx + 1) % mobileItems.length;
        goTo(next);
        schedule();
      }, 2500);
    };

    schedule();
    return () => {
      if (autoTimerRef.current) window.clearTimeout(autoTimerRef.current);
    };
  }, [activeIdx, mobileItems.length]);

  return (
    <div className="md:hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div
          ref={railRef}
          className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 pt-1"
          aria-label="Scrollable list of features"
          onPointerDown={() => {
            userInteractedRef.current = true;
          }}
        >
          {mobileItems.map(({ title, blurb, Icon, tint, grad }, i) => {
            const isActive = i === activeIdx;
            return (
              <div
                key={title}
                data-card
                className="snap-center shrink-0 w-[85%]"
              >
                <div
                  className={clsx(
                    "group relative select-none rounded-xl border p-4 shadow-sm backdrop-blur-md transition-all duration-300",
                    "border-slate-200/60 dark:border-slate-800/60",
                    "bg-white/70 dark:bg-slate-900/60",
                    isActive
                      ? "ring-2 ring-offset-0 ring-slate-300/60 dark:ring-slate-700/60 scale-[1.01]"
                      : "ring-0"
                  )}
                >
                  {/* gradient tint */}
                  <div
                    className={clsx(
                      "pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br to-transparent transition-opacity duration-200",
                      tint,
                      isActive ? "opacity-100" : "opacity-0",
                      "group-active:opacity-100 group-hover:opacity-100"
                    )}
                  />
                  {/* shimmer shine */}
                  <motion.div
                    className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-active:opacity-100"
                    animate={
                      isActive
                        ? { x: ["-20%", "140%"] }
                        : { x: "-20%" }
                    }
                    transition={{
                      duration: 1.1,
                      ease: "easeOut",
                      repeat: isActive ? Infinity : 0,
                      repeatDelay: 1.4,
                    }}
                  />
                  {/* gradient border glow when active */}
                  {isActive && (
                    <div
                      className={clsx(
                        "pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br opacity-40",
                        grad
                      )}
                      style={{
                        padding: "1.5px",
                        WebkitMask:
                          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />
                  )}

                  <div className="relative z-10">
                    <div className="mb-2 inline-flex items-center gap-2">
                      <div
                        className={clsx(
                          "grid h-9 w-9 place-items-center rounded-lg transition-colors",
                          isActive
                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                            : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-semibold leading-tight text-slate-900 dark:text-white">
                        {title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {blurb}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="shrink-0 basis-2" />
        </div>

        {/* Dots + hint */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {mobileItems.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to feature ${i + 1}`}
              onClick={() => {
                const rail = railRef.current;
                if (!rail) return;
                const card = rail.querySelectorAll<HTMLDivElement>("[data-card]")[i];
                if (!card) return;
                rail.scrollTo({
                  left:
                    card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2,
                  behavior: "smooth",
                });
              }}
              className={clsx(
                "h-1.5 w-1.5 rounded-full transition-all",
                i === activeIdx
                  ? "w-4 bg-slate-900 dark:bg-white"
                  : "bg-slate-300 dark:bg-slate-600"
              )}
            />
          ))}
        </div>
        <p className="mt-1 text-center text-xs text-slate-500 dark:text-slate-500">
          Swipe to explore
        </p>
      </div>
    </div>
  );
}

/** ------------------------------
 * DESKTOP VIEW (sticky bento — stable)
 * + hover preview & click lock
 * ------------------------------ */
function DesktopStickyBento() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // three-layer index control:
  const [computedIndex, setComputedIndex] = useState(0); // from scroll
  const [hoverIndex, setHoverIndex] = useState<number | null>(null); // transient
  const [manualIndex, setManualIndex] = useState<number | null>(null); // click lock

  const displayIndex = hoverIndex ?? manualIndex ?? computedIndex;

  const totalHeight = features.length * 100; // runway just like before

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const activeIndexFloat = useTransform(
    scrollYProgress,
    [0, 1],
    [0, features.length - 1]
  );

  // update computed index; also release manual lock when user scrolls
  useEffect(() => {
    const unsub = activeIndexFloat.on("change", (v) => {
      const idx = Math.max(0, Math.min(Math.round(v), features.length - 1));
      setComputedIndex(idx);
      setManualIndex(null); // scrolling regains control
    });
    return unsub;
  }, [activeIndexFloat]);

  const getGridClass = (size: string) =>
    size === "large"
      ? "row-span-2 col-span-2"
      : size === "tall"
      ? "row-span-2 col-span-1"
      : size === "wide"
      ? "row-span-1 col-span-2"
      : "row-span-1 col-span-1";

  return (
    <div className="hidden md:block">
      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${totalHeight}vh` }}
      >
        {/* Sticky below navbar; vertically centered to avoid “cut top” */}
        <div className="sticky top-24 md:top-28 h-[calc(100vh-6rem)] md:h-[calc(100vh-7rem)] w-full overflow-hidden flex items-center">
          <div className="mx-auto flex h-full max-w-7xl flex-col items-center px-4 md:flex-row md:px-12">
            {/* Left: Info Panel */}
            <div className="flex-1 py-12 pb-4 pt-8 md:py-16 md:pr-12">
              <div className="mb-8">
                <p className="mb-2 text-xs uppercase tracking-wider opacity-60">
                  Features
                </p>
                <h2 className="mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent md:text-4xl lg:text-5xl">
                  Everything you need
                </h2>
                <p className="max-w-xl text-sm text-gray-600 dark:text-gray-300 md:text-base">
                  Powerful analytics features designed for mobile-first
                  professionals who need their data on the go.
                </p>
              </div>

              <motion.div
                key={displayIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-gray-200/20 bg-white/60 p-6 backdrop-blur-lg dark:border-white/10 dark:bg-gray-900/60 md:p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={clsx(
                      "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg",
                      features[displayIndex].gradient
                    )}
                  >
                    {(() => {
                      const Icon = features[displayIndex].icon;
                      return <Icon className="h-7 w-7 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
                      {features[displayIndex].title}
                    </h3>
                    <div className="mt-1 flex gap-1">
                      {features.map((_, i) => (
                        <div
                          key={i}
                          className={clsx(
                            "h-1 rounded-full transition-all duration-300",
                            i === displayIndex
                              ? `w-8 bg-gradient-to-r ${features[displayIndex].gradient}`
                              : "w-1 bg-gray-300 dark:bg-gray-600"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
                  {features[displayIndex].description}
                </p>
              </motion.div>
            </div>

            {/* Right: Bento Grid */}
            <div className="flex h-full flex-1 items-center justify-center py-6">
              <div className="w-full max-w-lg">
                <div className="grid aspect-square grid-cols-4 grid-rows-4 gap-3">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    const isActive = index === displayIndex;

                    return (
                      <motion.div
                        key={feature.id}
                        className={clsx(
                          getGridClass(feature.size),
                          "relative cursor-pointer overflow-hidden rounded-xl",
                          "bg-white/40 backdrop-blur-xl dark:bg-white/5",
                          "border border-white/30 dark:border-white/10",
                          "transition-all duration-500",
                          isActive
                            ? "z-10 scale-105 shadow-2xl"
                            : "hover:scale-[1.02] hover:shadow-lg"
                        )}
                        whileHover={{ y: -2 }}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        onClick={() => setManualIndex(index)}
                        aria-pressed={isActive}
                        role="button"
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
                              WebkitMask:
                                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                              WebkitMaskComposite: "xor",
                              maskComposite: "exclude",
                            }}
                          />
                        )}

                        {/* Content */}
                        <div className="relative flex h-full flex-col items-center justify-center p-3 text-center md:p-4">
                          <div
                            className={clsx(
                              "mb-2 rounded-lg p-2 transition-all duration-300 md:mb-3 md:p-3",
                              isActive
                                ? `bg-gradient-to-br ${feature.gradient} shadow-lg`
                                : "bg-gray-100 dark:bg-gray-800"
                            )}
                          >
                            <Icon
                              className={clsx(
                                "h-4 w-4 transition-colors duration-300 md:h-5 md:w-5",
                                isActive
                                  ? "text-white"
                                  : "text-gray-600 dark:text-gray-400"
                              )}
                            />
                          </div>

                          <h4
                            className={clsx(
                              "text-xs font-semibold leading-tight transition-colors duration-300 md:text-sm",
                              isActive
                                ? "text-gray-900 dark:text-white"
                                : "text-gray-700 dark:text-gray-300"
                            )}
                          >
                            {feature.title}
                          </h4>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Scroll indicator */}
                <div className="mt-5 text-center">
                  <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
                    Scroll to explore
                  </p>
                  <div className="h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{
                        width: `${
                          ((displayIndex + 1) / features.length) * 100
                        }%`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

/** ------------------------------
 * MAIN SECTION (single mobile header)
 * ------------------------------ */
export default function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 md:scroll-mt-28"
      aria-labelledby="features-title"
    >
      {/* Mobile header (desktop uses the sticky panel header) */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 md:hidden">
        <p className="text-xs uppercase tracking-wider opacity-60">Features</p>
        <h2
          id="features-title"
          className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          Everything you need
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Powerful analytics features designed for mobile-first professionals.
        </p>
      </div>

      {/* Mobile: swipe rail */}
      <div className="mt-3 md:hidden">
        <MobileRail />
      </div>

      {/* Desktop: sticky bento */}
      <DesktopStickyBento />
    </section>
  );
}
