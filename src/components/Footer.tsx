// export default function Footer() {
//   return (
//     <footer className="relative mt-16">
//       {/* Enhanced frosted glass background */}
//       <div className="absolute inset-0 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl backdrop-saturate-150" />
//       <div className="absolute inset-0 bg-gradient-to-t from-slate-100/40 to-transparent dark:from-slate-800/40 dark:to-transparent" />
//       <div className="absolute inset-x-0 top-0 h-px bg-slate-200/60 dark:bg-slate-700/60" />
      
//       <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-12 pb-8">
        
//         {/* Main content - Compact grid */}
//         <div className="grid md:grid-cols-12 gap-8 mb-10">
          
//           {/* Brand section - Streamlined */}
//           <div className="md:col-span-4">
//             <h3 className="text-2xl font-bold title-gradient mb-2">Glimvia</h3>
//             <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
//               Monitor. Explore. Act. Wherever business takes you.
//             </p>
//           </div>

//           {/* Navigation - Clean 3-column layout */}
//           <div className="md:col-span-8 grid grid-cols-3 gap-6">
            
//             {/* Product */}
//             <div>
//               <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Product</h4>
//               <nav className="space-y-2">
//                 {[
//                   { label: "Features", href: "#features" },
//                   { label: "Experience", href: "#experience" },
//                   { label: "Roadmap", href: "#roadmap" },
//                   { 
//                     label: "Tech Specs", 
//                     href: "https://www.notion.so/glimvia-technical-specification-document-v1-0-2602428418a880c098e5ed4de7269ee9",
//                     external: true
//                   }
//                 ].map((link) => (
//                   <a 
//                     key={link.label}
//                     href={link.href} 
//                     {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//                     className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
//                   >
//                     {link.external && (
//                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                       </svg>
//                     )}
//                     {link.label}
//                   </a>
//                 ))}
//               </nav>
//             </div>

//             {/* Resources */}
//             <div>
//               <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Resources</h4>
//               <nav className="space-y-2">
//                 {[
//                   { label: "FAQ", href: "#faq" },
//                   { label: "Support", href: "/support" },
//                   { label: "Download", href: "#download" }
//                 ].map((link) => (
//                   <a 
//                     key={link.label}
//                     href={link.href} 
//                     className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
//                   >
//                     {link.label}
//                   </a>
//                 ))}
//               </nav>
//             </div>

//             {/* Company */}
//             <div>
//               <h4 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Company</h4>
//               <nav className="space-y-2">
//                 <a href="#about" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
//                   About
//                 </a>
//                 <a 
//                   href="https://woodfrog.tech" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
//                 >
//                   <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                   Woodfrog Tech
//                 </a>
//               </nav>
//             </div>
//           </div>
//         </div>

//         {/* Clean divider */}
//         <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mb-6" />

//         {/* Attribution row - Side by side layout with responsive logos */}
//         <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
          
//           {/* Left: Woodfrog attribution with responsive logo */}
//           <div className="flex flex-col items-center sm:items-start">
//             <a 
//               href="https://woodfrog.tech" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex flex-col items-center sm:items-start gap-3 hover:opacity-80 transition-opacity"
//             >
//               <div className="w-32 h-16 sm:w-48 sm:h-24 flex items-center justify-center">
//                 {/* Context-aware Woodfrog logo - responsive size */}
//                 <img 
//                   src="/Woodfrog-logo-light.svg" 
//                   alt="Woodfrog Tech Logo"
//                   className="w-32 h-16 sm:w-48 sm:h-24 object-contain dark:hidden"
//                 />
//                 <img 
//                   src="/Woodfrog-logo-dark.svg" 
//                   alt="Woodfrog Tech Logo"
//                   className="w-32 h-16 sm:w-48 sm:h-24 object-contain hidden dark:block"
//                 />
//               </div>
//               <div className="text-center sm:text-left">
//                 <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Woodfrog Tech</p>
//                 <p className="text-xs text-slate-500 dark:text-slate-500">Software Development</p>
//               </div>
//             </a>
//           </div>

//           {/* Right: Apache Superset disclaimer with responsive logo */}
//           <div className="flex flex-col items-center sm:items-end">
//             <a 
//               href="https://superset.apache.org/" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex flex-col items-center sm:items-end gap-3 hover:opacity-80 transition-opacity"
//             >
//               <div className="w-32 h-16 sm:w-48 sm:h-24 flex items-center justify-center">
//                 {/* Context-aware Apache Superset logo - responsive size */}
//                 <img 
//                   src="/superset-logo-horiz-light.svg" 
//                   alt="Apache Superset Logo"
//                   className="w-32 h-16 sm:w-48 sm:h-24 object-contain dark:hidden"
//                 />
//                 <img 
//                   src="/superset-logo-horiz-dark.svg" 
//                   alt="Apache Superset Logo"
//                   className="w-32 h-16 sm:w-48 sm:h-24 object-contain hidden dark:block"
//                 />
//               </div>
//               <div className="text-center sm:text-right">
//                 <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Powered by Apache Superset</p>
//                 <p className="text-xs text-slate-500 dark:text-slate-500">Independent client, not affiliated</p>
//               </div>
//             </a>
//           </div>
//         </div>

//         {/* Bottom: Centered copyright */}
//         <div className="text-center">
//           <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-500">
//             <span>© {new Date().getFullYear()} Glimvia. All rights reserved.</span>
//             <div className="flex items-center gap-1">
//               <HeartIcon className="size-3 text-red-500 fill-current" />
//               <span>Made with care</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function HeartIcon({ className }: { className?: string }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//     </svg>
//   );
// }



export default function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Enhanced frosted glass background */}
      <div className="absolute inset-0 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl backdrop-saturate-150" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/40 to-transparent dark:from-slate-800/40 dark:to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/60 dark:bg-slate-700/60" />
      
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
                  { label: "Features", href: "/#features" },
                  { label: "Experience", href: "/#experience" },
                  { label: "Roadmap", href: "/#roadmap" },
                  { 
                    label: "Tech Specs", 
                    href: "https://www.notion.so/glimvia-technical-specification-document-v1-0-2602428418a880c098e5ed4de7269ee9",
                    external: true
                  }
                ].map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.external && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
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
                  { label: "FAQ", href: "/#faq" },
                  { label: "Support", href: "/support" },
                  { label: "Contact", href: "/contact" }
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
                <a href="/#about" className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  About
                </a>
                <a 
                  href="https://woodfrog.tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Woodfrog Tech
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Clean divider */}
        <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mb-6" />

        {/* Attribution row - Side by side layout with responsive logos */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
          
          {/* Left: Woodfrog attribution with responsive logo */}
          <div className="flex flex-col items-center sm:items-start">
            <a 
              href="https://woodfrog.tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center sm:items-start gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-32 h-16 sm:w-48 sm:h-24 flex items-center justify-center">
                {/* Context-aware Woodfrog logo - responsive size */}
                <img 
                  src="/Woodfrog-logo-light.svg" 
                  alt="Woodfrog Tech Logo"
                  className="w-32 h-16 sm:w-48 sm:h-24 object-contain dark:hidden"
                />
                <img 
                  src="/Woodfrog-logo-dark.svg" 
                  alt="Woodfrog Tech Logo"
                  className="w-32 h-16 sm:w-48 sm:h-24 object-contain hidden dark:block"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Woodfrog Tech</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">Software Development</p>
              </div>
            </a>
          </div>

          {/* Right: Apache Superset disclaimer with responsive logo */}
          <div className="flex flex-col items-center sm:items-end">
            <a 
              href="https://superset.apache.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center sm:items-end gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-32 h-16 sm:w-48 sm:h-24 flex items-center justify-center">
                {/* Context-aware Apache Superset logo - responsive size */}
                <img 
                  src="/superset-logo-horiz-light.svg" 
                  alt="Apache Superset Logo"
                  className="w-32 h-16 sm:w-48 sm:h-24 object-contain dark:hidden"
                />
                <img 
                  src="/superset-logo-horiz-dark.svg" 
                  alt="Apache Superset Logo"
                  className="w-32 h-16 sm:w-48 sm:h-24 object-contain hidden dark:block"
                />
              </div>
              <div className="text-center sm:text-right">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Powered by Apache Superset</p>
                <p className="text-xs text-slate-500 dark:text-slate-500">Independent client, not affiliated</p>
              </div>
            </a>
          </div>
        </div>

        {/* Legal links and copyright */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-500 mb-4">
            <a href="/privacy" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Privacy Notice
            </a>
            <a href="/terms" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
          </div>
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

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );
}