// Bold, Distinctive TrustBridge Design
export default function TrustBridge() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-32">
      
      {/* Dramatic split layout */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
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
              
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Built by data teams who know the frustration of being locked out of dashboards when you're away from your desk.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Visual proof points */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl blur-xl" />
          
          <div className="relative glass p-8 rounded-3xl border border-white/20 dark:border-white/10">
            
            {/* Top indicator */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 bg-gradient-to-r from-sky-500 to-purple-500 rounded-full" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                In Development
              </span>
            </div>

            {/* Key metrics in a grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/50 to-white/20 dark:from-white/5 dark:to-white/0 border border-white/30 dark:border-white/10">
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-1">v5.0+</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Superset</div>
              </div>
              
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/50 to-white/20 dark:from-white/5 dark:to-white/0 border border-white/30 dark:border-white/10">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">&lt;5min</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Setup</div>
              </div>
              
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/50 to-white/20 dark:from-white/5 dark:to-white/0 border border-white/30 dark:border-white/10">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">Free</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Forever</div>
              </div>
              
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-white/50 to-white/20 dark:from-white/5 dark:to-white/0 border border-white/30 dark:border-white/10">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">Zero</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">Migration</div>
              </div>
            </div>

            {/* Bottom tagline */}
            <div className="mt-8 pt-6 border-t border-white/20 dark:border-white/10">
              <p className="text-center text-sm text-slate-600 dark:text-slate-400 italic">
                "Your data deserves a mobile experience as good as your desktop one"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Simple three-point validation */}
      <div className="mt-20 pt-16 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="w-2 h-2 bg-sky-500 rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform duration-300" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Mobile-native interface</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Built for touch, not adapted from desktop</p>
          </div>
          <div className="group">
            <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform duration-300" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Your existing setup</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Connects to your current Superset instance</p>
          </div>
          <div className="group">
            <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto mb-3 group-hover:scale-150 transition-transform duration-300" />
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Instant deployment</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Connect once, access anywhere</p>
          </div>
        </div>
      </div>

    </section>
  );
}