export default function Roadmap(){
  return (
    <section id="roadmap" data-reveal className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <div className="hr-accent w-14 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-semibold">Coming soon</h2>
      </div>
      <div className="mt-6 space-y-3">
        {[
          {t:"Custom Alerts", d:"Get notified when key metrics change or thresholds are met."},
          {t:"Expanded Chart Library", d:"Access more visualization types from Superset."},
          {t:"Smart Navigation Tools", d:"Mark dashboards as favourites and jump to them instantly."},
          {t:"…and much more", d:"Your analytics experience is about to get even better."},
        ].map((r,i)=>(
          <div key={i} className="glass p-4 rounded-xl">
            <div className="font-medium">{r.t}</div>
            <div className="text-sm text-slate-700 dark:text-slate-300">{r.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
