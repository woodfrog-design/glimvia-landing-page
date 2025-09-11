"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import clsx from "clsx";
import { aboutSlides } from "./about/aboutData";
import PhoneMock from "./about/PhoneMock";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrollControlled, setIsScrollControlled] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Create a scroll runway - total height for all slides
  const totalHeight = aboutSlides.length * 100;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Handle scroll-based control
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (progress > 0 && progress < 1) {
        setIsScrollControlled(true);
        const slideIndex = Math.floor(progress * aboutSlides.length);
        const clampedIndex = Math.min(Math.max(slideIndex, 0), aboutSlides.length - 1);
        setActiveIndex(clampedIndex);
      } else {
        setIsScrollControlled(false);
      }
    });

    return unsubscribe;
  }, [scrollYProgress]);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered || isScrollControlled) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    const slideCount = aboutSlides.length;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, 3000); // 3 seconds per slide

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, isScrollControlled]); // Removed aboutSlides.length from dependencies

  const activeSlide = aboutSlides[activeIndex];
  const Icon = activeSlide.icon;

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative"
      style={{ height: `${totalHeight}vh` }}
    >
      {/* Sticky viewport that fills screen */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-full flex flex-col lg:flex-row">
          
          {/* Left Column: Header + Cards + Dots */}
          <div 
            className="flex-1 pr-0 lg:pr-12 pt-16 pb-4 md:py-20 flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Header Section */}
            <div className="mb-6 md:mb-8 flex-shrink-0">
              <p className="text-xs uppercase tracking-wider opacity-60 mb-2">
                About
              </p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 md:mb-4">
                Glimvia at a glance
              </h2>
              <p className="text-sm md:text-sm text-gray-600 dark:text-gray-300 max-w-xl">
                Experience the power of Apache Superset redesigned for mobile. See how we&apos;ve reimagined analytics for the modern, mobile-first world.
              </p>
            </div>

            {/* Cards - Flexible height */}
            <div className="flex-1 flex items-center mb-6 md:mb-8">
              <div className="relative w-full h-72 md:h-60">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <motion.div 
                      whileHover={{ 
                        y: -8,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                      }}
                      className="h-full p-6 md:p-8 rounded-2xl bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg shadow-xl border border-gray-200/20 dark:border-white/10"
                    >
                      <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <div className="w-12 md:w-12 h-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                          <Icon className="w-6 md:w-6 h-6 md:h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
                        {activeSlide.title}
                      </h3>
                      <p className="text-base md:text-base leading-relaxed opacity-80 text-gray-700 dark:text-gray-300">
                        {activeSlide.body}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Dots - Always visible at bottom */}
            <div className="flex justify-center gap-2 md:gap-3 flex-shrink-0">
              {aboutSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={clsx(
                    "h-2 md:h-3 rounded-full transition-all duration-300 border-2 border-transparent hover:border-blue-300",
                    activeIndex === i 
                      ? "w-8 md:w-10 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg" 
                      : "w-2 md:w-3 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Phone Mockup - Hidden on mobile */}
          <div className="hidden lg:flex w-96 h-full items-center justify-center">
            <motion.div
              style={{ 
                transform: "rotate(8deg)",
                transformOrigin: "center center"
              }}
              whileHover={{ 
                scale: 1.02,
                rotate: 5
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="h-[70vh] max-h-[600px] w-full max-w-xs"
            >
              <PhoneMock
                screens={aboutSlides.map(s => ({ 
                  id: s.id, 
                  title: s.title, 
                  shot: s.image 
                }))}
                activeIndex={activeIndex}
                className="h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

