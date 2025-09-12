// src/components/DownloadCTA.tsx
import SmartStoreButtons from "@/components/SmartStoreButtons";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20 lg:py-24"
      aria-labelledby="download-title"
    >
      {/* Clean card without section-level overlay */}
      <div className="glass rounded-[2rem] p-8 md:p-12 lg:p-14 shadow-lg">
        {/* eyebrow */}
        <div className="mx-auto mb-4 flex items-center justify-center gap-2 text-sm font-medium">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-slate-700/80 dark:text-slate-300/80">
            Available on iOS & Android
          </span>
        </div>

        <h2
          id="download-title"
          className="text-center font-bold tracking-tight text-3xl md:text-4xl lg:text-[2.5rem] leading-tight"
        >
          <span className="block text-slate-900 dark:text-white">Ready to transform</span>
          <span className="block title-gradient">your analytics?</span>
        </h2>

        <p className="mt-4 md:mt-5 text-center text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Access your Apache Superset dashboards anywhere. Secure, fast, and designed for mobile productivity.
        </p>

        <div className="mt-8 md:mt-10">
          <SmartStoreButtons
            iosStoreUrl="https://apps.apple.com/app/________IOS_APP_ID________"
            androidStoreUrl="https://play.google.com/store/apps/details?id=________ANDROID_PACKAGE________"
            // appSchemeUrl="glimvia://open"
            mobileSingleButton={true}
            utm="utm_source=site&utm_medium=download_cta"
          />
        </div>

        {/* trust row removed per request */}
      </div>
    </section>
  );
}
