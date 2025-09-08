export default function Experience(){
  return (
    <section id="experience" data-reveal className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <div className="hr-accent w-14 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-semibold">Experience Glimvia</h2>
      </div>
      <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
        From connection to insight, Glimvia streamlines every step of your analytics workflow.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="glass p-5 rounded-xl">
          <h3 className="font-medium">Connect instantly</h3>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">Connect and view dashboards in seconds.</p>
        </div>
        <div className="glass p-5 rounded-xl">
          <h3 className="font-medium">Explore beautifully</h3>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">Navigate with a clean, optimized interface.</p>
        </div>
        <div className="glass p-5 rounded-xl">
          <h3 className="font-medium">Share effortlessly</h3>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">Send insights to your team instantly.</p>
        </div>
      </div>
    </section>
  );
}
