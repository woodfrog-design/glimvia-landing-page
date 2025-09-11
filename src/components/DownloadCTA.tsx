// Enhanced Download CTA with consistent hover animations
export default function DownloadCTA() {
  return (
    <section id="download" className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="glass p-8 md:p-12 rounded-2xl text-center relative">
        {/* Main heading - Consistent style */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
          Ready to transform your analytics?
        </h2>
        
        {/* Subheading */}
        <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals accessing their dashboards anywhere.
        </p>

        {/* Feature highlights - Elegant presentation */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-10">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Free to download</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>No signup required</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <span>Works with your existing Superset</span>
          </div>
        </div>

        {/* Download buttons - Consistent with Hero styling */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#" 
            className="glow-cta cta-shine inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium text-base shadow-sm hover:opacity-95 active:scale-[.98]"
          >
            <AppleIcon className="size-5" />
            <span>Download on App Store</span>
          </a>

          <a 
            href="#" 
            className="glow-cta cta-shine glass inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium text-base shadow-sm hover:opacity-95 active:scale-[.98]"
          >
            <GooglePlayIcon className="size-5" />
            <span>Get it on Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Icons
function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
    </svg>
  );
}