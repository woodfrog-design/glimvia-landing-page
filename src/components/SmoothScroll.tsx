// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";

// export default function SmoothScroll() {
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     // Check if the user prefers reduced motion
//     const prefersReduced =
//       window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     if (prefersReduced) return; // If so, don't apply smooth scrolling

//     // Initialize Lenis for smooth scrolling
//     const lenis = new Lenis({
//       duration: 1.2, // A slightly longer duration can feel smoother
//       easing: (t: number) => 1 - Math.pow(1 - t, 4), // A more pronounced ease-out
//     });

//     // === NEW CODE TO FIX ANCHOR LINKS ===
//     // This function is called every time a link is clicked
//     function handleLinkClick(e: Event) {
//       const target = e.currentTarget as HTMLAnchorElement;
//       const href = target.getAttribute("href");

//       // If it's not an anchor link, do nothing
//       if (!href || !href.startsWith("#")) return;

//       e.preventDefault(); // Prevent the default browser jump
//       lenis.scrollTo(href); // Tell Lenis to scroll to the element
//     }

//     // Find all anchor links on the page and attach the click handler
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener("click", handleLinkClick);
//     });
//     // === END OF NEW CODE ===


//     // Animation frame loop for Lenis
//     let raf = 0;
//     const loop = (time: number) => {
//       lenis.raf(time);
//       raf = requestAnimationFrame(loop);
//     };
//     raf = requestAnimationFrame(loop);

//     // Cleanup function when the component is unmounted
//     return () => {
//       cancelAnimationFrame(raf);
//       lenis.destroy();
//       // Remove the event listeners to prevent memory leaks
//       document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//         anchor.removeEventListener("click", handleLinkClick);
//       });
//     };
//   }, []);

//   return null; // This component does not render anything visible
// }


// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";

// export default function SmoothScroll() {
//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const prefersReduced =
//       window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     if (prefersReduced) return;

//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t: number) => 1 - Math.pow(1 - t, 4),
//     });

//     const isDesktop = window.innerWidth >= 768;

//     function handleLinkClick(e: Event) {
//       const target = e.currentTarget as HTMLAnchorElement;
//       const href = target.getAttribute("href");
//       if (!href || !href.startsWith("#")) return;

//       e.preventDefault();
//       lenis.scrollTo(href);
//     }

//     if (isDesktop) {
//       document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//         anchor.addEventListener("click", handleLinkClick);
//       });
//     }

//     let raf = 0;
//     const loop = (time: number) => {
//       lenis.raf(time);
//       raf = requestAnimationFrame(loop);
//     };
//     raf = requestAnimationFrame(loop);

//     return () => {
//       cancelAnimationFrame(raf);
//       lenis.destroy();
//       if (isDesktop) {
//         document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//           anchor.removeEventListener("click", handleLinkClick);
//         });
//       }
//     };
//   }, []);

//   return null;
// }



"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // === NEW LOGIC: Check for mobile viewport width ===
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // On mobile, do not initialize smooth scrolling at all.
      return;
    }
    // === END OF NEW LOGIC ===

    if (typeof window === "undefined") return;

    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });

    function handleLinkClick(e: Event) {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      lenis.scrollTo(href);
    }

    // This now only runs on desktop because of the check above
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleLinkClick);
    });
    
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return null;
}