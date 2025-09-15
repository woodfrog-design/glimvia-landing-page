"use client";

import { motion, useInView } from "framer-motion";
import clsx from "clsx";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const journeySteps = [
  {
    id: "connect",
    step: "CONNECT",
    title: "Connect Instantly",
    description: "Enter your Superset credentials and connect securely in seconds",
    features: ["Secure HTTPS connection", "Remember credentials", "Multiple instances"],
    gradient: "from-blue-500 to-cyan-400",
    delay: 0
  },
  {
    id: "explore",
    step: "EXPLORE", 
    title: "Explore Beautifully",
    description: "Browse dashboards with our mobile-optimized interface",
    features: ["Touch-first design", "Smooth navigation", "Quick search"],
    gradient: "from-purple-500 to-pink-400",
    delay: 0.2
  },
  {
    id: "interact",
    step: "INTERACT",
    title: "Interact Naturally", 
    description: "Filter, drill-down, and explore with intuitive gestures",
    features: ["Real-time filtering", "Gesture controls", "Touch interactions"],
    gradient: "from-green-500 to-emerald-400",
    delay: 0.4
  },
  {
    id: "share",
    step: "SHARE",
    title: "Share Effortlessly",
    description: "Export insights and collaborate with your team instantly",
    features: ["Instant sharing", "Export options", "Team collaboration"],
    gradient: "from-orange-500 to-red-400",
    delay: 0.6
  }
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [activeStep, setActiveStep] = useState(-1);
  const [hoveredStep, setHoveredStep] = useState(-1);

  // Auto-highlight steps sequence
  useEffect(() => {
    if (!isInView) return;
    
    const timer = setTimeout(() => {
      setActiveStep(0);
    }, 500);

    const intervals = journeySteps.map((_, index) => {
      return setTimeout(() => {
        setActiveStep(index);
      }, 1000 + (index * 2000));
    });

    // Reset after showing all steps
    const resetTimer = setTimeout(() => {
      setActiveStep(-1);
    }, 1000 + (journeySteps.length * 2000) + 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(resetTimer);
      intervals.forEach(clearTimeout);
    };
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      data-reveal 
      className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="hr-accent w-14 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold title-gradient">
            Experience Glimvia
          </h2>
          <div className="hr-accent w-14 rounded-full" />
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          From connection to insight, streamline every step of your analytics workflow
        </p>
      </div>

      {/* Journey Timeline */}
      <div className="relative">
        
        {/* Continuously Flowing Progress Line */}
        <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-slate-200/30 dark:bg-slate-700/30 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 rounded-full"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
          
          {/* Continuous flowing light effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent w-1/4"
            animate={{ 
              x: ["-100%", "500%"] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          
          {/* Additional sparkle effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/40 via-purple-300/40 via-green-300/40 via-orange-300/40 to-transparent w-1/6"
            animate={{ 
              x: ["-100%", "600%"] 
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.8
            }}
          />
        </div>
        
        {/* Journey Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {journeySteps.map((step, index) => {
            const isHighlighted = activeStep === index || hoveredStep === index;
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.delay }}
                className="relative"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(-1)}
              >
                {/* Step Card */}
                <motion.div 
                  className={clsx(
                    "group relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-500 cursor-pointer",
                    "bg-white/20 dark:bg-white/5 border-white/30 dark:border-white/10",
                    "hover:bg-white/40 dark:hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl",
                    isHighlighted && "bg-white/50 dark:bg-white/15 scale-[1.02] shadow-xl ring-2 ring-white/50"
                  )}
                  whileHover={{ y: -5 }}
                  animate={{
                    scale: isHighlighted ? 1.02 : 1,
                    boxShadow: isHighlighted 
                      ? "0 20px 40px rgba(0,0,0,0.1)" 
                      : "0 4px 6px rgba(0,0,0,0.05)"
                  }}
                >
                  
                  {/* Gradient Background Effect */}
                  <motion.div 
                    className={clsx(
                      "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
                      step.gradient
                    )}
                    animate={{
                      opacity: isHighlighted ? 0.15 : 0
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative p-6">
                    
                    {/* Action Word Badge */}
                    <motion.div 
                      className={clsx(
                        "inline-flex items-center justify-center px-4 py-3 rounded-2xl mb-4 transition-all duration-500",
                        "backdrop-blur-xl border-2 shadow-lg relative overflow-hidden min-w-[120px]",
                        // Subtle colored borders instead of filled backgrounds
                        step.gradient.includes('blue') 
                          ? 'border-blue-400/30 bg-blue-50/20 dark:bg-blue-900/10' 
                          : step.gradient.includes('purple') 
                          ? 'border-purple-400/30 bg-purple-50/20 dark:bg-purple-900/10'
                          : step.gradient.includes('green')
                          ? 'border-green-400/30 bg-green-50/20 dark:bg-green-900/10'
                          : 'border-orange-400/30 bg-orange-50/20 dark:bg-orange-900/10'
                      )}
                      animate={{
                        scale: isHighlighted ? 1.05 : 1,
                        rotate: isHighlighted ? [0, 2, 0] : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Enhanced glass frosting */}
                      <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-2xl" />
                      
                      {/* Subtle gradient glow only on highlight */}
                      <motion.div
                        className={clsx(
                          "absolute inset-0 bg-gradient-to-br rounded-2xl",
                          step.gradient
                        )}
                        animate={{
                          opacity: isHighlighted ? 0.15 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <span className={clsx(
                        "text-sm font-bold tracking-wider transition-colors duration-300 relative z-10",
                        // Subtle text colors that match the borders
                        step.gradient.includes('blue') 
                          ? "text-blue-600 dark:text-blue-400" 
                          : step.gradient.includes('purple') 
                          ? "text-purple-600 dark:text-purple-400"
                          : step.gradient.includes('green')
                          ? "text-green-600 dark:text-green-400"
                          : "text-orange-600 dark:text-orange-400"
                      )}>
                        {step.step}
                      </span>
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Enhanced Features with Separators */}
                    <div className="space-y-0 border border-white/20 dark:border-white/10 rounded-lg overflow-hidden backdrop-blur-sm bg-white/10 dark:bg-white/5">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: step.delay + (featureIndex * 0.1) }}
                          className={clsx(
                            "flex items-center gap-3 px-3 py-2.5 transition-all duration-300 group/feature",
                            "hover:bg-white/20 dark:hover:bg-white/10 hover:scale-[1.02]",
                            featureIndex < step.features.length - 1 && "border-b border-white/10 dark:border-white/5"
                          )}
                          whileHover={{ x: 4 }}
                        >
                          <CheckCircle className={clsx(
                            "w-4 h-4 flex-shrink-0 transition-colors duration-300",
                            isHighlighted ? "text-green-400" : "text-green-500"
                          )} />
                          <motion.span 
                            className="text-xs text-slate-700 dark:text-slate-300 transition-colors duration-300 group-hover/feature:text-slate-900 dark:group-hover/feature:text-white"
                            animate={{
                              x: isHighlighted ? [0, 2, 0] : 0
                            }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          >
                            {feature}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Shine Effect */}
                    <motion.div 
                      className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12"
                      animate={{
                        left: isHighlighted ? "100%" : "-100%"
                      }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>

                {/* Animated Arrow Connection (Desktop) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 z-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: step.delay + 0.3 }}
                      className={clsx(
                        "w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-lg transition-all duration-500",
                        "bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl",
                        isHighlighted || hoveredStep === index + 1 
                          ? "border-blue-400 scale-110" 
                          : "border-slate-200 dark:border-slate-600"
                      )}
                    >
                      <motion.div
                        animate={{
                          x: (isHighlighted || hoveredStep === index + 1) ? [0, 3, 0] : 0
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight className={clsx(
                          "w-4 h-4 transition-colors duration-300",
                          isHighlighted || hoveredStep === index + 1 
                            ? "text-blue-500" 
                            : "text-slate-600 dark:text-slate-400"
                        )} />
                      </motion.div>
                    </motion.div>
                  </div>
                )}
                
                {/* Step Connector Line (Mobile) */}
                {index < journeySteps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: step.delay + 0.2 }}
                      className={clsx(
                        "w-0.5 h-8 bg-gradient-to-b origin-top",
                        step.gradient
                      )}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <motion.div 
          className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 backdrop-blur-xl shadow-xl"
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex -space-x-2">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={clsx(
                  "w-10 h-10 rounded-full p-0.5 backdrop-blur-xl",
                  `bg-gradient-to-r ${step.gradient}`
                )}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + (index * 0.1), duration: 0.3 }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <div className="w-full h-full rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex items-center justify-center px-1">
                  <span className={clsx(
                    "text-xs font-bold bg-gradient-to-r bg-clip-text text-transparent",
                    step.gradient
                  )}>
                    {step.step.slice(0, 3)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-left">
            <div className="text-base font-semibold text-slate-900 dark:text-white">
              Ready to transform your analytics?
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Experience the complete journey from connection to insight
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

