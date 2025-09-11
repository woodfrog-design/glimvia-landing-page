// Clean, Compact, Sophisticated Footer Design
export default function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/60 to-transparent dark:from-slate-900/40 dark:to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-12 pb-8">
        
        {/* Main content - Compact grid */}
        <div className="grid md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand section - Streamlined */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold title-gradient mb-2">Glimvia</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Monitor. Explore. Act. Wherever business takes you.
            </p>
          </div>

          {/* Navigation - Clean 3-column layout */}
          <div className="md:col-span-8 grid grid-cols-3 gap-6">
            
            {/* Product */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Product</h4>
              <nav className="space-y-2">
                {[
                  { label: "Features", href: "#features" },
                  { label: "Experience", href: "#experience" },
                  { label: "Roadmap", href: "#roadmap" },
                  { label: "Tech Specs", href: "/technical-specification" }
                ].map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Resources</h4>
              <nav className="space-y-2">
                {[
                  { label: "FAQ", href: "#faq" },
                  { label: "Support", href: "/support" },
                  { label: "Download", href: "#download" }
                ].map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Company</h4>
              <nav className="space-y-2">
                <a href="#about" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  About
                </a>
                <a 
                  href="https://woodfrog.tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  Woodfrog Tech
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Clean divider */}
        <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mb-6" />

        {/* Attribution row - Left/Right layout */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          
          {/* Left: Woodfrog attribution */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <FrogIcon className="size-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Woodfrog Tech</p>
              <p className="text-xs text-slate-500 dark:text-slate-500">Software Development</p>
            </div>
          </div>

          {/* Right: Apache Superset disclaimer */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">AS</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Powered by Apache Superset</p>
              <p className="text-xs text-slate-500 dark:text-slate-500">Independent client, not affiliated</p>
            </div>
          </div>
        </div>

        {/* Bottom: Centered copyright */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-500">
            <span>© {new Date().getFullYear()} Glimvia. All rights reserved.</span>
            <div className="flex items-center gap-1">
              <HeartIcon className="size-3 text-red-500 fill-current" />
              <span>Made with care</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Clean, minimal icons
function FrogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 2c-2.2 0-4 1.8-4 4v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-2.2-1.8-4-4-4z"/>
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}