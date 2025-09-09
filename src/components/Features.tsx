import { Check } from "lucide-react";

const items = [
  "Mobile-Optimized Dashboards — Fully responsive UI for phones and tablets.",
  "Interactive Filtering & Drilldowns — Slice and dice data with a few taps.",
  "Real-Time Data Refresh — See the latest numbers without delays.",
  "Push Notifications & Alerts — Get notified instantly when metrics change.",
  "Secure Authentication — Connect safely with your existing Superset credentials.",
  "Multiple Superset Instance Support — Switch between workspaces easily.",
  "Favorite Dashboard — Pin your most important dashboards to a quick-view screen.",
  "Low-Bandwidth Mode — Optimized performance for slower connections.",
  "Regular Updates — Continuous feature additions and performance improvements.",
];

export default function Features(){
  return (
    <section id="features" data-reveal className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <div className="hr-accent w-14 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-semibold">Features</h2>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-x-10 gap-y-4 relative">
        {/* vertical accent line between columns */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10 dark:bg-white/15" aria-hidden />
        {items.map((t,i)=>(
          <div key={i} className="flex gap-3 items-start">
            <Check className="mt-1 shrink-0 text-sky-500 dark:text-sky-300" size={18}/>
            <p className="text-slate-700 dark:text-slate-300">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
