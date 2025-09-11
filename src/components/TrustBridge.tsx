// Sophisticated TrustBridge with Visual Design Elements
import { Zap, Smartphone, Database, Clock } from "lucide-react";

export default function TrustBridge() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      
      {/* Background design elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-sky-500/10 to-purple-500/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500/8 to-pink-500/8 rounded-full blur-3xl" />
      </div>

      {/* Status indicator with style */}
      <div className="flex items-center justify-center mb-12">
        <div className="glass px-4 py-2 rounded-full border border-sky-200/50 dark:border-sky-800/50">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-sky-500/30 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-sky-700 dark:text-sky-300">
              In Active Development
            </span>
          </div>
        </div>
      </div>

      {/* Main content with visual hierarchy */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
          Built by data teams who
          <span className="block title-gradient">felt this pain</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Apache Superset is powerful on desktop. We're making it just as powerful in your pocket—no compromises.
        </p>
      </div>

      {/* Visual feature cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        
        {/* Mobile-first card */}
        <div className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group border border-white/20 dark:border-white/10">
          <div className="relative mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Mobile-first</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Purpose-built for touch interfaces, not desktop dashboards squeezed down
          </p>
        </div>

        {/* Infrastructure card */}
        <div className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group border border-white/20 dark:border-white/10">
          <div className="relative mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Your infrastructure</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Connects directly to your existing Superset instance—zero migration
          </p>
        </div>

        {/* Setup card */}
        <div className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 group border border-white/20 dark:border-white/10">
          <div className="relative mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">5-minute setup</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Connect your instance and start analyzing immediately
          </p>
        </div>
      </div>

      {/* Elegant specs bar */}
      <div className="glass p-6 rounded-2xl border border-white/20 dark:border-white/10">
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
          <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>Apache Superset v5.0+</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>iOS & Android</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <span>Free forever</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <span>Enterprise ready</span>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <Zap className="w-4 h-4 text-sky-500" />
          <span className="text-sm font-medium">Your data deserves better mobile access</span>
        </div>
      </div>

    </section>
  );
}