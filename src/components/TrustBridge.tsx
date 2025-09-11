// import { Star, Users, Shield, Clock, ArrowRight, Zap, Code2, Smartphone, Heart, CheckCircle } from "lucide-react";

// export default function TrustBridge() {
//   return (
//     <section data-reveal className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
//       {/* Section header */}
//       <div className="flex items-center gap-3 mb-12">
//         <div className="hr-accent w-14 rounded-full" />
//         <h2 className="text-2xl md:text-3xl font-semibold">Why we're building this</h2>
//       </div>

//       {/* The Problem → Solution narrative as a visual story */}
//       <div className="relative">
//         {/* Problem side */}
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
//           <div className="order-2 md:order-1">
//             <div className="glass p-6 md:p-8 rounded-2xl border-2 border-dashed border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10">
//               <div className="text-center">
//                 <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
//                   <Smartphone className="w-8 h-8 text-red-500 transform rotate-12" />
//                 </div>
//                 <h3 className="font-semibold text-lg mb-3 text-red-700 dark:text-red-300">
//                   The Current Reality
//                 </h3>
//                 <div className="space-y-3 text-sm text-red-600 dark:text-red-400">
//                   <p>📱 Squinting at tiny desktop dashboards</p>
//                   <p>⏰ Missing critical alerts while mobile</p>
//                   <p>😤 Frustrated teams waiting for desktop access</p>
//                   <p>📊 Beautiful Superset data trapped on big screens</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="order-1 md:order-2 text-center md:text-left">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm mb-4">
//               <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
//               <span className="text-slate-700 dark:text-slate-300">The Problem</span>
//             </div>
//             <h3 className="text-xl md:text-2xl font-semibold mb-4">
//               Apache Superset is incredible.<br />
//               <span className="text-slate-600 dark:text-slate-400">Mobile experience? Not so much.</span>
//             </h3>
//             <p className="text-slate-700 dark:text-slate-300">
//               We've all been there. You're away from your desk, need to check KPIs, and end up 
//               pinching and zooming on a dashboard that was never meant for mobile.
//             </p>
//           </div>
//         </div>

//         {/* Arrow transition */}
//         <div className="flex justify-center mb-16">
//           <div className="glass p-4 rounded-full">
//             <ArrowRight className="w-6 h-6 text-sky-500 animate-pulse" />
//           </div>
//         </div>

//         {/* Solution side */}
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
//           <div className="text-center md:text-left">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-100 to-purple-100 dark:from-sky-900/30 dark:to-purple-900/30 text-sm mb-4">
//               <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
//               <span className="text-sky-700 dark:text-sky-300">Our Solution</span>
//             </div>
//             <h3 className="text-xl md:text-2xl font-semibold mb-4">
//               What if your dashboards<br />
//               <span className="title-gradient">felt native on mobile?</span>
//             </h3>
//             <p className="text-slate-700 dark:text-slate-300">
//               Same data, same security, same Superset instance. But with an interface 
//               designed for your fingertips, not your mouse.
//             </p>
//           </div>

//           <div>
//             <div className="glass p-6 md:p-8 rounded-2xl bg-gradient-to-br from-sky-50/50 to-purple-50/50 dark:from-sky-900/10 dark:to-purple-900/10">
//               <div className="text-center">
//                 <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-500 to-purple-600 flex items-center justify-center">
//                   <Heart className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="font-semibold text-lg mb-3">
//                   The Glimvia Experience
//                 </h3>
//                 <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
//                   <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Mobile-first dashboard interface</p>
//                   <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Touch-optimized interactions</p>
//                   <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Real-time notifications anywhere</p>
//                   <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Your existing data, zero migration</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Development approach */}
//         <div className="glass p-8 rounded-2xl">
//           <div className="text-center mb-6">
//             <h3 className="text-xl font-semibold mb-3">Built by teams who get it</h3>
//             <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
//               We're data professionals who've felt this pain. That's why we're building Glimvia 
//               free and open, the way it should be.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="text-center">
//               <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-sky-500/20 to-purple-500/20 dark:from-sky-400/30 dark:to-purple-400/30 flex items-center justify-center">
//                 <Code2 className="w-6 h-6 text-sky-600 dark:text-sky-400" />
//               </div>
//               <div className="font-medium mb-1">Apache Superset v5.0+</div>
//               <div className="text-sm text-slate-600 dark:text-slate-400">Built for the latest features</div>
//             </div>
            
//             <div className="text-center">
//               <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-sky-500/20 to-purple-500/20 dark:from-sky-400/30 dark:to-purple-400/30 flex items-center justify-center">
//                 <Shield className="w-6 h-6 text-sky-600 dark:text-sky-400" />
//               </div>
//               <div className="font-medium mb-1">Enterprise Security</div>
//               <div className="text-sm text-slate-600 dark:text-slate-400">Your existing auth & permissions</div>
//             </div>
            
//             <div className="text-center">
//               <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-sky-500/20 to-purple-500/20 dark:from-sky-400/30 dark:to-purple-400/30 flex items-center justify-center">
//                 <Zap className="w-6 h-6 text-sky-600 dark:text-sky-400" />
//               </div>
//               <div className="font-medium mb-1">5-Minute Setup</div>
//               <div className="text-sm text-slate-600 dark:text-slate-400">Connect your instance & go</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Clock, Shield, Code2, ArrowRight } from "lucide-react";

export default function TrustBridge() {
  return (
    <section data-reveal className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      {/* Clean section header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="hr-accent w-14 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-semibold">Why Glimvia</h2>
      </div>

      {/* Core value proposition */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          Apache Superset transformed how teams work with data on desktop. 
          Glimvia brings that same power to mobile—built specifically for touch interfaces, 
          not desktop dashboards squeezed onto phones.
        </p>
      </div>

      {/* Key differentiators */}
      <div className="grid gap-6 mb-12">
        <div className="glass p-6 rounded-xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Native Mobile Experience</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Purpose-built interface optimized for touch, swipe, and mobile workflows—not a desktop port.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Your Existing Infrastructure</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Connects directly to your current Superset instance. No data migration, no new servers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Enterprise-Ready Security</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Uses your existing authentication and permissions. Your security model stays intact.
              </p>
            </div>
          </div>
        </div>

        <div className="glass p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Free and Open Source</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                Built by data professionals, for data professionals. No vendor lock-in, no hidden costs.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Apache Superset 5.0+</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>&lt; 5 minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Production ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple status and next steps */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
          <div className="w-2 h-2 bg-sky-500 rounded-full" />
          <span className="text-sm text-slate-700 dark:text-slate-300">Currently in development</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
          <span className="text-sm">Ready to transform your mobile analytics experience?</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}