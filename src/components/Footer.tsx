  // export default function Footer(){
  //   return (
  //     <footer className="mt-20">
  //       <div className="hr-hairline w-full" />
  //       <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
  //         <div>
  //           <div className="font-semibold">Product</div>
  //           <a className="block mt-2 hover:underline" href="#features">Features</a>
  //           <a className="block hover:underline" href="#roadmap">Roadmap</a>
  //           <a className="block hover:underline" href="#support">Support</a>
  //         </div>
  //         <div>
  //           <div className="font-semibold">Resources</div>
  //           <a className="block mt-2 hover:underline" href="#faq">FAQ</a>
  //         </div>
  //         <div>
  //           <div className="font-semibold">Company</div>
  //           <a className="block mt-2 hover:underline" href="#about">About</a>
  //         </div>
  //         <div>
  //           <div className="font-semibold">Connect</div>
  //           <div className="mt-2 opacity-80">X · Instagram · LinkedIn</div>
  //         </div>
  //       </div>
  //       <div className="text-center text-xs opacity-70 pb-10">
  //         © {new Date().getFullYear()} Glimvia. Designed with ❤️.
  //       </div>
  //     </footer>
  //   );
  // }
  export default function Footer() {
    return (
      <footer className="relative max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 mt-20">
        {/* Top section with brand and tagline */}
        <div className="text-center pb-12">
          <h3 className="text-2xl md:text-3xl font-semibold title-gradient">
            Glimvia
          </h3>
          <p className="mt-2 text-slate-700 dark:text-slate-300">
            Monitor. Explore. Act. Wherever business takes you.
          </p>
        </div>

        <div className="w-full h-px bg-black/10 dark:bg-white/15" />

        {/* Links section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm py-12">
          {/* Woodfrog Logo Placeholder */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-semibold">A Woodfrog Tech Project</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              {/* Placeholder for the logo image */}
            </p>
          </div>

          <div>
            <div className="font-semibold">Product</div>
            <a className="block mt-3 hover:underline opacity-80 hover:opacity-100" href="#features">
              Features
            </a>
            <a className="block mt-1 hover:underline opacity-80 hover:opacity-100" href="#roadmap">
              Roadmap
            </a>
          </div>

          <div>
            <div className="font-semibold">Resources</div>
            <a className="block mt-3 hover:underline opacity-80 hover:opacity-100" href="#faq">
              FAQ
            </a>
            <a className="block mt-1 hover:underline opacity-80 hover:opacity-100" href="/support">
              Support
            </a>
          </div>

          <div>
            <div className="font-semibold">Company</div>
            <a className="block mt-3 hover:underline opacity-80 hover:opacity-100" href="#about">
              About
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs opacity-70 py-8 border-t border-black/10 dark:border-white/15">
          © {new Date().getFullYear()} Glimvia. All rights reserved.
        </div>
      </footer>
    );
  }