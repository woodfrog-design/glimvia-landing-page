import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Specification — Glimvia",
};

export default function TechSpecPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-24 md:py-32">
      <h1 className="text-3xl md:text-4xl font-bold title-gradient">
        Glimvia - Technical Specification Document v1.0
      </h1>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-white/15 pb-2">1. Overview</h2>
        <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          Glimvia is a mobile-first analytics application built on top of Apache Superset, leveraging Superset’s APIs and backend capabilities. The app enables users to access and view their Apache Superset dashboards on mobile devices through a fast, intuitive, and mobile-optimized interface. Dashboards are created in the web version and made instantly available on mobile, so business insights and KPIs are always within reach—anytime, anywhere. With secure authentication, real-time data refresh, and interactive filtering, Glimvia empowers professionals to monitor and act on their data wherever business takes them.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-white/15 pb-2">2. Objectives</h2>
        <ul className="mt-4 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-2">
          <li>Bring Apache Superset dashboards and business insights to mobile devices.</li>
          <li>Provide a streamlined, intuitive, and responsive user experience tailored for professionals on the move.</li>
          <li>Promote open access to analytics by offering Glimvia free of charge for core features, contributing to the free usage ecosystem and empowering a wider community to make data-driven decisions.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-white/15 pb-2">3. Architecture</h2>
        <h3 className="text-xl font-semibold mt-4">3.1 High-Level Architecture</h3>
        <p className="mt-2 text-slate-700 dark:text-slate-300">
          - **Frontend:** Custom mobile application (iOS/Android) with a fully responsive interface.
          <br />
          - **Backend:** Apache Superset server and APIs.
          <br />
          - **Database:** No backend database is used by the app. Glimvia stores only the Superset instance URL and username locally on the mobile device for authentication and connection purposes.
        </p>
        <h3 className="text-xl font-semibold mt-4">3.2 Architecture Diagram</h3>
        {/* Note: The diagram below is formatted as pre-formatted text */}
        <pre className="mt-2 p-4 rounded-lg bg-slate-800 text-slate-300 text-sm overflow-x-auto">
          <code>
{`architecture-beta
    group mobile[Mobile App]
    group api[Superset APIs]
    group superset[Superset]

    service app(internet)[App] in mobile
    service superset_api(server)[Superset APIs] in api
    service backend(database)[Superset Backend] in superset

    app:R -- L:superset_api
    superset_api:R -- L:backend`}
          </code>
        </pre>
        <h3 className="text-xl font-semibold mt-4">3.3 Sequence Diagram</h3>
        <pre className="mt-2 p-4 rounded-lg bg-slate-800 text-slate-300 text-sm overflow-x-auto">
          <code>
{`sequenceDiagram
    Mobile APP->>Superset APIs: Please check my authentication details?
    Superset APIs-->>Mobile APP: You are a valid user!
    Mobile APP->>Superset APIs: Thank you! Give me List of dashboards
    Superset APIs-->>Mobile APP: Here is the list
    Mobile APP->>Superset APIs: User requested Dashboard 1 Chart, give me data
    Superset APIs-->>Mobile APP: Here we go.
    Mobile APP->> Mobile APP: I dont understand some charts! show in table format.
    Mobile APP->>Superset APIs: User wants to log out! Terminate the session
    Superset APIs-->>Mobile APP: Done`}
          </code>
        </pre>
      </section>

      {/* Add other sections similarly */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-white/15 pb-2">4. Functional Specification</h2>
        <h3 className="text-xl font-semibold mt-4">4.5 Usage Guidelines and Recommendations</h3>
        <p className="mt-2 text-slate-700 dark:text-slate-300 leading-relaxed">
          - **Superset Version Compatibility:** Glimvia is built on Apache Superset version 5.0.0. Using older Superset versions may result in compatibility issues.
          <br />
          - **App Version Updates:** When Superset launches major updates, we will release a compatible version of Glimvia within a few weeks.
          <br />
          - **Secure Connections Only:** Glimvia supports only HTTPS URLs for Superset instances.
        </p>
      </section>
    </div>
  );
}