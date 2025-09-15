"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { aboutSlides } from "./aboutData";
import PhoneMock from "./PhoneMock";

export default function DesktopSticky() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrollControlled, setIsScrollControlled] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();
  const totalHeight = aboutSlides.length * 100;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (p) => {
      if (p > 0 && p < 1) {
        setIsScrollControlled(true);
        const idx = Math.min(
          Math.max(Math.floor(p * aboutSlides.length), 0),
          aboutSlides.length - 1
        );
        setActiveIndex(idx);
      } else {
        setIsScrollControlled(false);
      }
    });
    return unsub;
  }, [scrollYProgress]);

  useEffect(() => {
    if (isHovered || isScrollControlled) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(
      () => setActiveIndex((p) => (p + 1) % aboutSlides.length),
      3200
    );
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [isHovered, isScrollControlled]);

  const slide = aboutSlides[activeIndex];
  const Icon = slide.icon;

  return (
    <section
      ref={sectionRef}
      className="relative hidden md:block"
      style={{ height: `${totalHeight}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="mx-auto flex h-full max-w-7xl flex-col lg:flex-row px-4 md:px-12">
          {/* Left content */}
          <div
            className="flex-1 pr-0 lg:pr-12 pt-28 pb-6 md:py-24 flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="mb-8">
              <p className="mb-2 text-xs uppercase tracking-wider opacity-70">
                About
              </p>
              <h2 className="mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
                Glimvia at a glance
              </h2>
              <p className="max-w-xl text-base text-gray-600 dark:text-gray-300">
                Experience the power of Apache Superset redesigned for mobile.
              </p>
            </div>

            <div className="mb-6 flex flex-1 items-center md:mb-8">
              <div className="relative h-64 w-full md:h-72">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                      }}
                      className="h-full rounded-2xl border border-gray-200/20 bg-white/70 p-8 shadow-xl backdrop-blur-lg dark:border-white/10 dark:bg-gray-900/60"
                    >
                      <div className="mb-5 flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {slide.title}
                        </h3>
                      </div>
                      <p className="leading-relaxed text-gray-700 opacity-80 dark:text-gray-300">
                        {slide.body}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dots */}
            <div className="flex flex-shrink-0 justify-center gap-2">
              {aboutSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={clsx(
                    "h-3 rounded-full border-2 border-transparent transition-all duration-300 hover:border-blue-300",
                    i === activeIndex
                      ? "w-10 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                      : "w-3 bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Right — phone mock (desktop only) */}
          <div className="hidden h-full w-96 items-center justify-center lg:flex">
            <motion.div
              style={{ transform: "rotate(8deg)", transformOrigin: "center" }}
              whileHover={{ scale: 1.02, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="h-[70vh] w-full max-w-xs max-h-[600px]"
            >
              <PhoneMock
                screens={aboutSlides.map((s) => ({
                  id: s.id,
                  title: s.title,
                  shot: s.image,
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
