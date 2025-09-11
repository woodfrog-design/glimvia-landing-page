export default function TrustBridge() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 min-h-screen flex items-center">
      
      {/* Dramatic split layout */}
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Bold statement */}
        <div className="lg:pr-8">
          <div className="relative">
            {/* Large quote mark */}
            <div className="absolute -top-4 -left-4 text-6xl md:text-8xl font-serif text-sky-500/20 dark:text-sky-400/20 leading-none select-none">
              "
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Apache Superset is incredible on desktop.
                <br />
                <span className="text-slate-500 dark:text-slate-400 font-normal">
                  Mobile? We can do better.
                </span>
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full mb-6" />
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                Built by data teams who know the frustration of being locked out of dashboards when you're away from your desk.
              </p>

              {/* Three key points - minimal clean design */}
              <div className="space-y-4 border-l-2 border-slate-200 dark:border-slate-700 pl-6">
                <div className="group">
                  <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                    Mobile-native interface
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Built for touch, not adapted from desktop</p>
                </div>

                <div className="group">
                  <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Your existing setup
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Connects to your current Superset instance</p>
                </div>

                <div className="group">
                  <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    Instant deployment
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Connect once, access anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Visual proof points */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl blur-xl" />
          
          <div className="relative glass p-6 md:p-8 rounded-3xl border border-white/20 dark:border-white/10">
            
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20 border border-blue-200/50 dark:border-blue-400/30 rounded-full">
              <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                In Development
              </span>
            </div>

            {/* Key metrics in a playful grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="group text-center p-4 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 dark:from-sky-900/30 dark:to-sky-800/20 border border-sky-200/50 dark:border-sky-600/30 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-1 group-hover:scale-110 transition-transform">v5.0+</div>
                <div className="text-xs text-sky-700 dark:text-sky-300 uppercase tracking-wide font-medium">Superset</div>
              </div>
              
              <div className="group text-center p-4 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 border border-green-200/50 dark:border-green-600/30 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1 group-hover:scale-110 transition-transform">&lt;5min</div>
                <div className="text-xs text-green-700 dark:text-green-300 uppercase tracking-wide font-medium">Setup</div>
              </div>
              
              <div className="group text-center p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 border border-purple-200/50 dark:border-purple-600/30 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1 group-hover:scale-110 transition-transform">Free</div>
                <div className="text-xs text-purple-700 dark:text-purple-300 uppercase tracking-wide font-medium">Forever</div>
              </div>
              
              <div className="group text-center p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/20 border border-orange-200/50 dark:border-orange-600/30 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1 group-hover:scale-110 transition-transform">Zero</div>
                <div className="text-xs text-orange-700 dark:text-orange-300 uppercase tracking-wide font-medium">Migration</div>
              </div>
            </div>

            {/* Bottom tagline */}
            <div className="pt-4 border-t border-white/20 dark:border-white/10">
              <p className="text-center text-sm text-slate-600 dark:text-slate-400 italic">
                "Your data deserves a mobile experience as good as your desktop one"
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}