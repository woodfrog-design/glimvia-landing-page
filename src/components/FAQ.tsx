// "use client";
// import { useEffect, useState } from "react";

// const Q = [
//   ["What is Glimvia?","Glimvia is a mobile application designed to help clients easily view Apache Superset dashboards on their mobile devices. It provides a simple, mobile-friendly interface to access dashboards anytime, anywhere."],
//   ["I cannot log in. What should I do?","Make sure you have the correct username, password, and server URL; check your internet; if it still fails, contact your admin to verify Superset server access."],
//   ["My dashboard is not loading or shows a blank screen.","Ensure a stable internet connection, refresh, log out/in, save charts from Superset, confirm the dashboard is active."],
//   ["Why am I getting an “Invalid Credentials” error?","Double-check username/password; ensure the Superset instance URL is correct; reset via your org’s admin if needed."],
//   ["How do I switch between dashboards?","After logging in, go to Dashboard View or Table View, then select a dashboard."],
//   ["Can I use Glimvia on desktop?","No — Glimvia is mobile-only for a lightweight, optimized experience. Use Superset’s web app on desktop."],
//   ["The app logs me out automatically. Why?","Security timeout after inactivity. Log in again to continue."],
//   ["How can I see info about the app and my account?","Navigate to About App & User from the menu to see version and user details."],
//   ["What should I do if the app crashes?","Restart the app; if it persists, clear cache/data; then contact support with device details and app version."],
//   ["How do I share a dashboard?","Open the dashboard, tap Share at the top, copy the link, and send it. The recipient opens it in the Superset instance."]
// ];

// export default function FAQ(){
//   const [open,setOpen]=useState<number[]>([]);
//   useEffect(()=>{ if(window.matchMedia("(min-width:768px)").matches){ setOpen(Q.map((_,i)=>i)); } },[]);
//   const toggle=(i:number)=>setOpen(prev=>prev.includes(i)?prev.filter(x=>x!==i):[...prev,i]);
//   return (
//     <section id="faq" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
//       <h2 className="text-3xl md:text-4xl font-semibold">FAQ</h2>
//       <div className="mt-6 space-y-3">
//         {Q.map(([q,a],i)=>(
//           <div key={i} className="glass">
//             <button
//               className="w-full text-left px-5 py-4 flex items-center justify-between"
//               aria-expanded={open.includes(i)}
//               aria-controls={`faq-${i}`}
//               onClick={()=>toggle(i)}
//             >
//               <span className="font-semibold">{q}</span>
//               <span className="text-slate-500">{open.includes(i)?"–":"+"}</span>
//             </button>
//             <div id={`faq-${i}`} className={`px-5 pb-5 text-slate-700 dark:text-slate-300 ${open.includes(i)?"block":"hidden"}`}>{a}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
const faqs = [
  ["What is Glimvia?","Glimvia is a mobile application designed to help clients easily view Apache Superset dashboards on their mobile devices."],
  ["I cannot log in. What should I do?","Check the username, password, and server URL. Verify internet. If it still fails, ask your admin to confirm Superset access."],
  ["My dashboard is not loading or shows a blank screen.","Ensure a stable connection. Refresh the view. If it continues, log out and back in, save charts in Superset, and confirm the dashboard is active."],
  ["Why am I getting an “Invalid Credentials” error?","Double-check your credentials and Superset URL; reset password via your organization’s admin if needed."],
  ["How do I switch between dashboards?","After logging in, go to Dashboard or Table view and select the dashboard."],
  ["Can I use Glimvia on desktop?","No. Glimvia is mobile-only for a lightweight, optimized experience. Use Superset’s web app for desktop."],
  ["The app logs me out automatically. Why?","For security after long inactivity. Log in again."],
  ["How can I see information about the app and my account?","Open “About App & User” in the menu to see app version and user details."],
  ["What should I do if the app crashes?","Restart the app. If it continues, clear cache/data and contact support with device details and app version."],
  ["How do I copy or share a dashboard?","Open the dashboard, tap Share at the top, copy the link, and send it (recipient opens it in the Superset instance)."],
];

export default function FAQ(){
  return (
    <section id="faq" data-reveal className="relative max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <div className="hr-accent w-14 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
      </div>

      <div className="mt-6 divide-y divide-black/10 dark:divide-white/15 rounded-2xl overflow-hidden">
        {faqs.map(([q,a],i)=>(
          <details key={i} className="glass open:!bg-white/16 dark:open:!bg-black/25">
            <summary className="cursor-pointer list-none px-5 py-4 font-medium flex items-center justify-between">
              <span>{q}</span>
              <span className="text-slate-500">+</span>
            </summary>
            <div className="px-5 pb-5 text-slate-700 dark:text-slate-300">{a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
