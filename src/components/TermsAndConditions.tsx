export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold title-gradient mb-4">Terms and Conditions</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
        
        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-700 dark:text-slate-300">
            By downloading, installing, or using the Glimvia mobile application ("the App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the App.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Glimvia is a mobile application that provides a client interface for Apache Superset installations. The App allows users to:
          </p>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Connect to their Apache Superset instances</li>
            <li>View dashboards and charts on mobile devices</li>
            <li>Access data visualizations in a mobile-optimized format</li>
            <li>Submit support tickets and feature requests</li>
          </ul>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Account Security</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">You are responsible for:</p>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Maintaining the confidentiality of your Superset credentials</li>
            <li>All activities that occur under your account</li>
            <li>Ensuring your device is secure and protected</li>
            <li>Notifying us immediately of any unauthorized access</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Acceptable Use</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Use the App for any illegal or unauthorized purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with or disrupt the App's functionality</li>
            <li>Reverse engineer, modify, or create derivative works</li>
            <li>Use the App to violate any third-party rights</li>
          </ul>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            The App and its original content, features, and functionality are owned by Woodfrog Tech and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            Apache Superset is an open-source project. Glimvia is an independent client application and is not affiliated with the Apache Software Foundation.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">5. Privacy and Data</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Your privacy is important to us. Our Privacy Notice explains how we collect, use, and protect your information when you use the App.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            The App does not store your Superset data on our servers. All dashboard data remains on your configured Superset instances.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimers and Limitation of Liability</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Service Availability</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            We strive to keep the App available, but we do not guarantee uninterrupted access. The App may be unavailable due to maintenance, updates, or technical issues.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Limitation of Liability</h3>
          <p className="text-slate-700 dark:text-slate-300">
            To the maximum extent permitted by law, Woodfrog Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the App.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">7. Third-Party Dependencies</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            The App relies on Apache Superset instances that you configure. We are not responsible for:
          </p>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>The availability or performance of your Superset installations</li>
            <li>Data integrity or security of your Superset instances</li>
            <li>Compatibility issues with different Superset versions</li>
            <li>Third-party services integrated with your Superset setup</li>
          </ul>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">8. Updates and Modifications</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            We may update the App from time to time to add features, fix bugs, or improve performance. We may also modify these Terms, and will notify you of significant changes.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            Continued use of the App after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p className="text-slate-700 dark:text-slate-300">
            You may stop using the App at any time. We may suspend or terminate your access if you violate these Terms or engage in harmful behavior.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p className="text-slate-700 dark:text-slate-300">
            These Terms are governed by and construed in accordance with applicable laws. Any disputes will be resolved through appropriate legal channels.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            If you have questions about these Terms, please contact us:
          </p>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Woodfrog Tech</strong><br />
              Email: legal@woodfrog.tech<br />
              Website: https://woodfrog.tech
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}