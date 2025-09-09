export default function SupportForm(){
  return (
    <section id="support" data-reveal className="relative max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <div className="hr-accent w-14 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-semibold">Support ticket</h2>
      </div>

      <form className="mt-6 glass p-5 md:p-6 rounded-2xl space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input aria-label="Ticket title" placeholder="Ticket Title / Subject *" className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15"/>
          <div className="grid grid-cols-2 gap-3">
            <select aria-label="Category" className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15">
              <option>Bug</option><option>Feature Request</option><option>General Query</option>
            </select>
            <select aria-label="Priority" className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15">
              <option>Low</option><option>Medium</option><option>High</option>
            </select>
          </div>
        </div>

        <textarea aria-label="Description" placeholder="Issue Description *" rows={4} className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15" />

        <div className="grid md:grid-cols-2 gap-3">
          <input aria-label="Name" placeholder="Name" className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15"/>
          <input aria-label="Email" placeholder="Email Address *" type="email" className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15"/>
          <input aria-label="Phone" placeholder="Phone Number" className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15"/>
          <input aria-label="Organization" placeholder="Organization" className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15"/>
          <input aria-label="Superset Version" placeholder="Superset Version *" className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15"/>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-blue-600" /> Open for call?
          </label>
        </div>

        <button type="submit" className="mt-2 px-5 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">Submit</button>
      </form>
    </section>
  );
}
