// // "use client";

// // import { useState } from "react";
// // import { ChevronDown, HelpCircle, Search, Tag } from "lucide-react";

// // const faqs = [
// //   {
// //     question: "What is Glimvia?",
// //     answer: "Glimvia is a mobile application designed to help clients easily view Apache Superset dashboards on their mobile devices. It provides a simple, mobile-friendly interface to access dashboards anytime, anywhere.",
// //     category: "General",
// //     tags: ["basics", "overview"]
// //   },
// //   {
// //     question: "I cannot log in. What should I do?",
// //     answer: "Check the username, password, and server URL. Verify your internet connection. If it still fails, ask your admin to confirm Superset access permissions.",
// //     category: "Authentication",
// //     tags: ["login", "troubleshooting"]
// //   },
// //   {
// //     question: "My dashboard is not loading or shows a blank screen.",
// //     answer: "Ensure a stable connection. Refresh the view. If it continues, log out and back in, save charts in Superset, and confirm the dashboard is active.",
// //     category: "Technical",
// //     tags: ["dashboard", "loading", "troubleshooting"]
// //   },
// //   {
// //     question: "Why am I getting an \"Invalid Credentials\" error?",
// //     answer: "Double-check your credentials and Superset URL. Reset password via your organization's admin if needed.",
// //     category: "Authentication",
// //     tags: ["credentials", "error", "troubleshooting"]
// //   },
// //   {
// //     question: "How do I switch between dashboards?",
// //     answer: "After logging in, go to Dashboard or Table view and select the dashboard you want to access.",
// //     category: "Navigation",
// //     tags: ["dashboard", "navigation"]
// //   },
// //   {
// //     question: "Can I use Glimvia on desktop?",
// //     answer: "No. Glimvia is mobile-only for a lightweight, optimized experience. Use Superset's web app for desktop access.",
// //     category: "General",
// //     tags: ["platform", "desktop", "mobile"]
// //   },
// //   {
// //     question: "The app logs me out automatically. Why?",
// //     answer: "This is a security feature after periods of inactivity. Simply log in again to continue using the app.",
// //     category: "Security",
// //     tags: ["logout", "security", "timeout"]
// //   },
// //   {
// //     question: "How can I see information about the app and my account?",
// //     answer: "Navigate to \"About App & User\" from the menu to see app version and user details.",
// //     category: "Navigation",
// //     tags: ["account", "version", "info"]
// //   },
// //   {
// //     question: "What should I do if the app crashes?",
// //     answer: "Restart the app. If it continues, clear cache/data and contact support with device details and app version.",
// //     category: "Technical",
// //     tags: ["crash", "troubleshooting", "support"]
// //   },
// //   {
// //     question: "How do I copy or share a dashboard?",
// //     answer: "Open the dashboard, tap Share at the top, copy the link, and send it. The recipient opens it in the Superset instance.",
// //     category: "Features",
// //     tags: ["share", "dashboard", "collaboration"]
// //   }
// // ];

// // const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];

// // export default function FAQ() {
// //   const [openItems, setOpenItems] = useState<number[]>([]);
// //   const [selectedCategory, setSelectedCategory] = useState("All");
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const toggleItem = (index: number) => {
// //     setOpenItems(prev => 
// //       prev.includes(index) 
// //         ? prev.filter(i => i !== index)
// //         : [...prev, index]
// //     );
// //   };

// //   const filteredFaqs = faqs.filter(faq => {
// //     const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
// //     const matchesSearch = searchTerm === "" || 
// //       faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
// //     return matchesCategory && matchesSearch;
// //   });

// //   return (
// //     <section id="faq" data-reveal className="relative max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
// //       <div className="flex items-center gap-3 mb-8">
// //         <div className="hr-accent w-14 rounded-full" />
// //         <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
// //       </div>

// //       <div className="mb-6">
// //         <p className="text-slate-700 dark:text-slate-300 text-lg mb-6">
// //           Find quick answers to common questions about using Glimvia.
// //         </p>

// //         {/* Search and Filter Controls */}
// //         <div className="space-y-4">
// //           {/* Search Bar */}
// //           <div className="relative">
// //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
// //             <input
// //               type="text"
// //               placeholder="Search questions..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-full pl-10 pr-4 py-3 rounded-lg glass outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500/50 transition-all"
// //             />
// //           </div>

// //           {/* Category Filter */}
// //           <div className="flex flex-wrap gap-2">
// //             {categories.map(category => (
// //               <button
// //                 key={category}
// //                 onClick={() => setSelectedCategory(category)}
// //                 className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
// //                   selectedCategory === category
// //                     ? 'bg-blue-500 text-white shadow-lg'
// //                     : 'glass hover:bg-white/60 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
// //                 }`}
// //               >
// //                 {category}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* FAQ Items */}
// //       <div className="space-y-2">
// //         {filteredFaqs.length > 0 ? (
// //           filteredFaqs.map((faq, index) => {
// //             const originalIndex = faqs.indexOf(faq);
// //             const isOpen = openItems.includes(originalIndex);
            
// //             return (
// //               <div key={originalIndex} className="glass rounded-xl overflow-hidden">
// //                 <button
// //                   onClick={() => toggleItem(originalIndex)}
// //                   className="w-full text-left p-5 flex items-center justify-between hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-200 group"
// //                   aria-expanded={isOpen}
// //                 >
// //                   <div className="flex-1 pr-4">
// //                     <div className="flex items-center gap-2 mb-1">
// //                       <HelpCircle className="w-4 h-4 text-blue-500" />
// //                       <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
// //                         {faq.category}
// //                       </span>
// //                     </div>
// //                     <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
// //                       {faq.question}
// //                     </h3>
// //                   </div>
// //                   <ChevronDown className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${
// //                     isOpen ? 'rotate-180' : ''
// //                   }`} />
// //                 </button>
                
// //                 {isOpen && (
// //                   <div className="px-5 pb-5 border-t border-black/5 dark:border-white/10">
// //                     <div className="pt-4">
// //                       <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
// //                         {faq.answer}
// //                       </p>
                      
// //                       {/* Tags */}
// //                       <div className="flex items-center gap-2 flex-wrap">
// //                         <Tag className="w-3 h-3 text-slate-400" />
// //                         {faq.tags.map(tag => (
// //                           <span
// //                             key={tag}
// //                             className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
// //                           >
// //                             {tag}
// //                           </span>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             );
// //           })
// //         ) : (
// //           <div className="text-center py-12">
// //             <div className="glass p-8 rounded-xl">
// //               <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
// //               <h3 className="font-semibold text-lg mb-2">No questions found</h3>
// //               <p className="text-slate-600 dark:text-slate-400">
// //                 Try adjusting your search or category filter.
// //               </p>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Help Footer */}
// //       <div className="mt-12 text-center">
// //         <div className="glass p-6 rounded-xl">
// //           <h3 className="font-semibold text-lg mb-2">Still need help?</h3>
// //           <p className="text-slate-700 dark:text-slate-300 mb-4">
// //             Can't find what you're looking for? Our support team is here to help.
// //           </p>
// //           <button className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-1 to-accent-2 text-white hover:from-accent-2 hover:to-accent-3 hover:scale-105 transition-all duration-200 shadow-lg">
// //             Contact Support
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import { ChevronDown, HelpCircle, Search, Tag } from "lucide-react";

// const faqs = [
//   {
//     question: "What is Glimvia?",
//     answer: "Glimvia is a mobile application designed to help clients easily view Apache Superset dashboards on their mobile devices. It provides a simple, mobile-friendly interface to access dashboards anytime, anywhere.",
//     category: "General",
//     tags: ["basics", "overview"]
//   },
//   {
//     question: "I cannot log in. What should I do?",
//     answer: "Check the username, password, and server URL. Verify your internet connection. If it still fails, ask your admin to confirm Superset access permissions.",
//     category: "Authentication",
//     tags: ["login", "troubleshooting"]
//   },
//   {
//     question: "My dashboard is not loading or shows a blank screen.",
//     answer: "Ensure a stable connection. Refresh the view. If it continues, log out and back in, save charts in Superset, and confirm the dashboard is active.",
//     category: "Technical",
//     tags: ["dashboard", "loading", "troubleshooting"]
//   },
//   {
//     question: "Why am I getting an \"Invalid Credentials\" error?",
//     answer: "Double-check your credentials and Superset URL. Reset password via your organization's admin if needed.",
//     category: "Authentication",
//     tags: ["credentials", "error", "troubleshooting"]
//   },
//   {
//     question: "How do I switch between dashboards?",
//     answer: "After logging in, go to Dashboard or Table view and select the dashboard you want to access.",
//     category: "Navigation",
//     tags: ["dashboard", "navigation"]
//   },
//   {
//     question: "Can I use Glimvia on desktop?",
//     answer: "No. Glimvia is mobile-only for a lightweight, optimized experience. Use Superset's web app for desktop access.",
//     category: "General",
//     tags: ["platform", "desktop", "mobile"]
//   },
//   {
//     question: "The app logs me out automatically. Why?",
//     answer: "This is a security feature after periods of inactivity. Simply log in again to continue using the app.",
//     category: "Security",
//     tags: ["logout", "security", "timeout"]
//   },
//   {
//     question: "How can I see information about the app and my account?",
//     answer: "Navigate to \"About App & User\" from the menu to see app version and user details.",
//     category: "Navigation",
//     tags: ["account", "version", "info"]
//   },
//   {
//     question: "What should I do if the app crashes?",
//     answer: "Restart the app. If it continues, clear cache/data and contact support with device details and app version.",
//     category: "Technical",
//     tags: ["crash", "troubleshooting", "support"]
//   },
//   {
//     question: "How do I copy or share a dashboard?",
//     answer: "Open the dashboard, tap Share at the top, copy the link, and send it. The recipient opens it in the Superset instance.",
//     category: "Features",
//     tags: ["share", "dashboard", "collaboration"]
//   }
// ];

// const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];

// // Color mapping for different tag types
// const getTagColor = (tag: string) => {
//   const colorMap: { [key: string]: string } = {
//     // Blue family - for basic/core concepts
//     "basics": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
//     "overview": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
//     "dashboard": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    
//     // Green family - for success/good states
//     "login": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
//     "navigation": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    
//     // Orange family - for issues/problems
//     "troubleshooting": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
//     "error": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
//     "crash": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    
//     // Purple family - for features/functionality
//     "share": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
//     "collaboration": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
//     "platform": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    
//     // Red family - for security/sensitive
//     "security": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
//     "credentials": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
//     "logout": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
    
//     // Teal family - for technical/system
//     "loading": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
//     "timeout": "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300",
    
//     // Indigo family - for info/details
//     "account": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
//     "version": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
//     "info": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    
//     // Pink family - for support/help
//     "support": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
    
//     // Cyan family - for platform/device specific
//     "desktop": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
//     "mobile": "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
//   };
  
//   return colorMap[tag] || "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
// };

// export default function FAQ() {
//   const [openItems, setOpenItems] = useState<number[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   const toggleItem = (index: number) => {
//     setOpenItems(prev => 
//       prev.includes(index) 
//         ? prev.filter(i => i !== index)
//         : [...prev, index]
//     );
//   };

//   const filteredFaqs = faqs.filter(faq => {
//     const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
//     const matchesSearch = searchTerm === "" || 
//       faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section id="faq" data-reveal className="relative max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
//       <div className="flex items-center gap-3 mb-8">
//         <div className="hr-accent w-14 rounded-full" />
//         <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
//       </div>

//       <div className="mb-6">
//         <p className="text-slate-700 dark:text-slate-300 text-lg mb-6">
//           Find quick answers to common questions about using Glimvia.
//         </p>

//         {/* Search and Filter Controls */}
//         <div className="space-y-4">
//           {/* Search Bar */}
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
//             <input
//               type="text"
//               placeholder="Search questions..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 rounded-lg glass outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500/50 transition-all"
//             />
//           </div>

//           {/* Category Filter */}
//           <div className="flex flex-wrap gap-2">
//             {categories.map(category => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
//                   selectedCategory === category
//                     ? 'bg-blue-500 text-white shadow-lg'
//                     : 'glass hover:bg-white/60 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* FAQ Items */}
//       <div className="space-y-2">
//         {filteredFaqs.length > 0 ? (
//           filteredFaqs.map((faq, index) => {
//             const originalIndex = faqs.indexOf(faq);
//             const isOpen = openItems.includes(originalIndex);
            
//             return (
//               <div key={originalIndex} className="glass rounded-xl overflow-hidden">
//                 <button
//                   onClick={() => toggleItem(originalIndex)}
//                   className="w-full text-left p-5 flex items-center justify-between hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-200 group"
//                   aria-expanded={isOpen}
//                 >
//                   <div className="flex-1 pr-4">
//                     <div className="flex items-center gap-2 mb-1">
//                       <HelpCircle className="w-4 h-4 text-blue-500" />
//                       <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
//                         {faq.category}
//                       </span>
//                     </div>
//                     <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                       {faq.question}
//                     </h3>
//                   </div>
//                   <ChevronDown className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${
//                     isOpen ? 'rotate-180' : ''
//                   }`} />
//                 </button>
                
//                 {isOpen && (
//                   <div className="px-5 pb-5 border-t border-black/5 dark:border-white/10">
//                     <div className="pt-4">
//                       <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
//                         {faq.answer}
//                       </p>
                      
//                       {/* Tags with different colors */}
//                       <div className="flex items-center gap-2 flex-wrap">
//                         <Tag className="w-3 h-3 text-slate-400" />
//                         {faq.tags.map(tag => (
//                           <span
//                             key={tag}
//                             className={`px-2 py-1 text-xs font-medium rounded-full ${getTagColor(tag)}`}
//                           >
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })
//         ) : (
//           <div className="text-center py-12">
//             <div className="glass p-8 rounded-xl">
//               <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
//               <h3 className="font-semibold text-lg mb-2">No questions found</h3>
//               <p className="text-slate-600 dark:text-slate-400">
//                 Try adjusting your search or category filter.
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Help Footer */}
//       <div className="mt-12 text-center">
//         <div className="glass p-6 rounded-xl">
//           <h3 className="font-semibold text-lg mb-2">Still need help?</h3>
//           <p className="text-slate-700 dark:text-slate-300 mb-4">
//             Can't find what you're looking for? Our support team is here to help.
//           </p>
//           <button className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-1 to-accent-2 text-white hover:from-accent-2 hover:to-accent-3 hover:scale-105 transition-all duration-200 shadow-lg">
//             Contact Support
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Smartphone, 
  Lock, 
  AlertTriangle, 
  Navigation, 
  Monitor, 
  Shield, 
  Info, 
  Bug, 
  Share2 
} from "lucide-react";

const faqs = [
  {
    question: "What is Glimvia?",
    answer: "Glimvia is a mobile application designed to help clients easily view Apache Superset dashboards on their mobile devices. It provides a simple, mobile-friendly interface to access dashboards anytime, anywhere.",
    category: "General",
    icon: Smartphone,
    tags: [
      { label: "Mobile App", type: "platform" },
      { label: "Overview", type: "info" }
    ]
  },
  {
    question: "I cannot log in. What should I do?",
    answer: "Check the username, password, and server URL. Verify your internet connection. If it still fails, ask your admin to confirm Superset access permissions.",
    category: "Authentication",
    icon: Lock,
    tags: [
      { label: "Login Issues", type: "problem" },
      { label: "Troubleshooting", type: "solution" }
    ]
  },
  {
    question: "My dashboard is not loading or shows a blank screen.",
    answer: "Ensure a stable connection. Refresh the view. If it continues, log out and back in, save charts in Superset, and confirm the dashboard is active.",
    category: "Technical",
    icon: Monitor,
    tags: [
      { label: "Loading Error", type: "problem" },
      { label: "Dashboard", type: "feature" }
    ]
  },
  {
    question: "Why am I getting an \"Invalid Credentials\" error?",
    answer: "Double-check your credentials and Superset URL. Reset password via your organization's admin if needed.",
    category: "Authentication",
    icon: AlertTriangle,
    tags: [
      { label: "Error Message", type: "problem" },
      { label: "Credentials", type: "security" }
    ]
  },
  {
    question: "How do I switch between dashboards?",
    answer: "After logging in, go to Dashboard or Table view and select the dashboard you want to access.",
    category: "Navigation",
    icon: Navigation,
    tags: [
      { label: "Navigation", type: "feature" },
      { label: "Dashboard", type: "feature" }
    ]
  },
  {
    question: "Can I use Glimvia on desktop?",
    answer: "No. Glimvia is mobile-only for a lightweight, optimized experience. Use Superset's web app for desktop access.",
    category: "General",
    icon: Monitor,
    tags: [
      { label: "Platform", type: "platform" },
      { label: "Mobile Only", type: "info" }
    ]
  },
  {
    question: "The app logs me out automatically. Why?",
    answer: "This is a security feature after periods of inactivity. Simply log in again to continue using the app.",
    category: "Security",
    icon: Shield,
    tags: [
      { label: "Auto Logout", type: "security" },
      { label: "Session", type: "info" }
    ]
  },
  {
    question: "How can I see information about the app and my account?",
    answer: "Navigate to \"About App & User\" from the menu to see app version and user details.",
    category: "Navigation",
    icon: Info,
    tags: [
      { label: "Account Info", type: "feature" },
      { label: "App Details", type: "info" }
    ]
  },
  {
    question: "What should I do if the app crashes?",
    answer: "Restart the app. If it continues, clear cache/data and contact support with device details and app version.",
    category: "Technical",
    icon: Bug,
    tags: [
      { label: "App Crash", type: "problem" },
      { label: "Support", type: "solution" }
    ]
  },
  {
    question: "How do I copy or share a dashboard?",
    answer: "Open the dashboard, tap Share at the top, copy the link, and send it. The recipient opens it in the Superset instance.",
    category: "Features",
    icon: Share2,
    tags: [
      { label: "Sharing", type: "feature" },
      { label: "Collaboration", type: "feature" }
    ]
  }
];

const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];

// Consistent color system based on tag type
const getTagStyle = (type: string) => {
  const styles = {
    // Blue - Features and functionality
    feature: "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/30",
    
    // Red - Problems and errors
    problem: "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800/30",
    
    // Green - Solutions and fixes
    solution: "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800/30",
    
    // Purple - Platform and technical info
    platform: "bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800/30",
    
    // Orange - Security related
    security: "bg-orange-50 text-orange-700 border border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800/30",
    
    // Slate - General information
    info: "bg-slate-50 text-slate-700 border border-slate-200 dark:bg-slate-800/50 dark:text-slate-300 dark:border-slate-700/50"
  };
  
  return styles[type as keyof typeof styles] || styles.info;
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some(tag => tag.label.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" data-reveal className="relative max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3 mb-8">
        <div className="hr-accent w-14 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
      </div>

      <div className="mb-6">
        <p className="text-slate-700 dark:text-slate-300 text-lg mb-6">
          Find quick answers to common questions about using Glimvia.
        </p>

        {/* Search and Filter Controls */}
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg glass outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'glass hover:bg-white/60 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-2">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const originalIndex = faqs.indexOf(faq);
            const isOpen = openItems.includes(originalIndex);
            const IconComponent = faq.icon;
            
            return (
              <div key={originalIndex} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleItem(originalIndex)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-200 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-5 h-5 text-blue-500" />
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 border-t border-black/5 dark:border-white/10">
                    <div className="pt-4">
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      
                      {/* Redesigned tags with consistent logic */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {faq.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${getTagStyle(tag.type)}`}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12">
            <div className="glass p-8 rounded-xl">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">No questions found</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try adjusting your search or category filter.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Help Footer */}
      <div className="mt-12 text-center">
        <div className="glass p-6 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Still need help?</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a 
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-95 transition-all duration-200 shadow-lg"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}