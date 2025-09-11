export default function PrivacyNotice() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold title-gradient mb-4">Privacy Notice</h1>
        <p className="text-slate-600 dark:text-slate-400">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
        
        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Information You Provide</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            When you use Glimvia or contact us, we may collect:
          </p>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Contact information (name, email address, phone number)</li>
            <li>Organization details (company name, role)</li>
            <li>Apache Superset server URL and credentials you provide</li>
            <li>Support ticket information and correspondence</li>
            <li>Feature suggestions and feedback</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Automatically Collected Information</h3>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>App usage analytics and performance data</li>
            <li>Device information (operating system, app version)</li>
            <li>Error logs and crash reports</li>
            <li>IP address and general location data</li>
          </ul>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Provide and maintain the Glimvia mobile application</li>
            <li>Enable connection to your Apache Superset instances</li>
            <li>Respond to your support requests and inquiries</li>
            <li>Improve our app's functionality and user experience</li>
            <li>Send important updates about the service</li>
            <li>Analyze usage patterns to enhance performance</li>
          </ul>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Local Storage</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Glimvia stores minimal data locally on your device, including:
          </p>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Your Superset server URL and authentication credentials</li>
            <li>App preferences and settings</li>
            <li>Temporary cache data for performance</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Data Security</h3>
          <p className="text-slate-700 dark:text-slate-300">
            We implement appropriate security measures to protect your information, including encryption of sensitive data and secure transmission protocols. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            We do not sell, trade, or rent your personal information. We may share information in these limited circumstances:
          </p>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
            <li>With trusted service providers who assist in app operations</li>
          </ul>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Glimvia integrates with Apache Superset instances that you configure. We are not responsible for the privacy practices of your Superset installations or the data they contain.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            We may use third-party analytics and crash reporting services to improve our app. These services have their own privacy policies.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
            <li>Access the personal information we have about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of non-essential communications</li>
            <li>Export your data in a portable format</li>
          </ul>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
          <p className="text-slate-700 dark:text-slate-300">
            Glimvia is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Notice</h2>
          <p className="text-slate-700 dark:text-slate-300">
            We may update this Privacy Notice from time to time. We will notify you of any changes by posting the new Privacy Notice on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            If you have questions about this Privacy Notice or our privacy practices, please contact us:
          </p>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300">
              <strong>Woodfrog Tech</strong><br />
              Email: privacy@woodfrog.tech<br />
              Website: https://woodfrog.tech
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}