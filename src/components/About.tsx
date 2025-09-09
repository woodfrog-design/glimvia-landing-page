// last working version
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useScroll } from "framer-motion";
// import clsx from "clsx";
// import { aboutSlides } from "./about/aboutData";
// import PhoneMock from "./PhoneMock";

// export default function About() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   // Use the useScroll hook to track scroll progress within the tall section
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"], // Track from start to end
//   });

//   // When the scroll progress changes, update the active card index
//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (latestValue) => {
//       const newIndex = Math.floor(latestValue * aboutSlides.length);
//       setActiveIndex(Math.min(aboutSlides.length - 1, newIndex)); // Ensure index doesn't go out of bounds
//     });
//     return () => unsubscribe(); // Cleanup listener on component unmount
//   }, [scrollYProgress]);

//   const activeSlide = aboutSlides[activeIndex];
//   const Icon = activeSlide.icon;

//   return (
//     <section 
//       id="about" 
//       ref={sectionRef} 
//       className="relative" 
//       // The section is made very tall to create a "scroll runway" for the animation
//       style={{ height: `${aboutSlides.length * 100}vh` }}
//     >
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <div className="mx-auto flex w-full max-w-7xl items-center gap-8 px-4 md:px-6">
          
//           {/* Left Column (60%): Cards and Controls */}
//           <div className="flex h-full basis-3/5 flex-col justify-center py-12">
//             {/* The active card is displayed here, based on the scroll position */}
//             <motion.div
//               key={activeIndex} // Re-trigger animation when index changes
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="w-full"
//             >
//               <div className="rounded-2xl bg-white/70 p-6 shadow-xl backdrop-blur-lg dark:bg-slate-900/60 md:p-8">
//                 <div className="mb-4 flex items-center gap-3">
//                   <span className="inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-200 via-violet-200 to-pink-200 dark:from-sky-500/25 dark:via-violet-500/25 dark:to-pink-500/25">
//                     <Icon className="size-4 text-slate-700 dark:text-slate-200" />
//                   </span>
//                   <span className="text-[11px] font-semibold uppercase tracking-widest opacity-80">
//                     {activeSlide.title}
//                   </span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 md:text-3xl">
//                   {activeSlide.title}
//                 </h3>
//                 <p className="mt-3 text-base leading-relaxed opacity-90 md:text-lg">{activeSlide.body}</p>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column (40%): Phone Mockup */}
//           <div className="relative hidden h-full basis-2/5 items-center justify-center md:flex">
//             <div className="h-[80vh] max-h-[650px] w-full p-4">
//               <PhoneMock
//                 screens={aboutSlides.map((s) => ({ id: s.id, title: s.title, shot: s.image }))}
//                 activeIndex={activeIndex}
//                 className="h-full"
//                 tilt={3}
//               />
//             </div>
//           </div>
//         </div>
        
//         {/* Status Dots */}
//         <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
//           <div className="flex items-center gap-2">
//             {aboutSlides.map((_, i) => (
//               <div
//                 key={i}
//                 className={clsx(
//                   "h-2 rounded-full transition-all duration-300",
//                   activeIndex === i ? "w-6 bg-sky-500" : "w-2 bg-slate-400/60"
//                 )}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValue, animate } from "framer-motion";
import { aboutSlides } from "./about/aboutData";
import PhoneMock from "./PhoneMock";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);

  // Track scroll progress for scroll-driven animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % aboutSlides.length;
        animate(x, `-${100 * next}%`, {
          duration: 0.8,
          ease: "easeInOut"
        });
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, x]);

  // Manual scroll override
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.01 && latest < 0.99) {
        const index = Math.min(
          aboutSlides.length - 1,
          Math.floor(latest * aboutSlides.length)
        );
        setCurrentIndex(index);
        x.set(`-${100 * index}%`);
      }
    });
    return unsubscribe;
  }, [scrollYProgress, x]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative"
      style={{ height: `${aboutSlides.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 md:px-6">
          
          {/* Section Header */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              About
            </p>
            <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
              Glimvia at a glance
            </h2>
          </div>
          
          <div className="flex w-full items-center gap-8">
            {/* Left Column: Cards - 65% width */}
            <div 
              className="relative h-[65vh] basis-[65%] overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div className="flex h-full" style={{ x }}>
                {aboutSlides.map((slide) => {
                  const SlideIcon = slide.icon;
                  return (
                    <motion.article 
                      key={slide.id} 
                      className="relative h-full w-full shrink-0 px-3"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex h-full w-full flex-col justify-center rounded-2xl bg-white dark:bg-slate-800 p-10 shadow-xl ring-1 ring-gray-200 dark:ring-white/10">
                        <div className="mb-6 flex items-center gap-4">
                          <motion.span 
                            className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 via-violet-100 to-pink-100 dark:from-sky-900/30 dark:via-violet-900/30 dark:to-pink-900/30"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <SlideIcon className="size-6 text-slate-700 dark:text-slate-200" />
                          </motion.span>
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {slide.title}
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">
                          {slide.title}
                        </h3>
                        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:text-xl">
                          {slide.body}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
              
              {/* Progress dots */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {aboutSlides.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => {
                      setCurrentIndex(i);
                      animate(x, `-${100 * i}%`, { duration: 0.5 });
                    }}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === currentIndex 
                        ? "w-10 bg-gradient-to-r from-sky-400 to-violet-400" 
                        : "w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Phone - 35% width */}
            <div className="relative hidden h-full basis-[35%] items-center justify-center py-8 md:flex">
              <motion.div 
                className="h-full max-h-[calc(100vh-12rem)] w-auto"
                style={{ rotate: 5 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3,
                }}
                transition={{ duration: 0.3 }}
              >
                <PhoneMock
                  screens={aboutSlides.map((s) => ({ 
                    id: s.id, 
                    title: s.title, 
                    shot: s.image
                  }))}
                  activeIndex={currentIndex}
                  className="h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}