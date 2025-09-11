"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Firebase integration would go here
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      inquiryType: '',
      phone: ''
    });
    alert('Thank you for contacting us! We\'ll get back to you within 24 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="relative max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <div className="hr-accent w-14 rounded-full bg-gradient-to-r from-green-500 to-blue-600 h-1" />
        <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Have questions about Glimvia? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <div className="mt-6 glass p-5 md:p-6 rounded-2xl space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            aria-label="Full name" 
            placeholder="Full Name *" 
            className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          />
          <input 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            aria-label="Email address" 
            placeholder="Email Address *" 
            type="email"
            className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <input 
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            aria-label="Company" 
            placeholder="Company/Organization" 
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          />
          <input 
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            aria-label="Phone number" 
            placeholder="Phone Number" 
            type="tel"
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <select 
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleInputChange}
            aria-label="Inquiry type" 
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          >
            <option value="">Type of Inquiry</option>
            <option value="general">General Information</option>
            <option value="partnership">Partnership</option>
            <option value="enterprise">Enterprise Solutions</option>
            <option value="media">Media/Press</option>
            <option value="technical">Technical Questions</option>
            <option value="other">Other</option>
          </select>
          <input 
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            aria-label="Subject" 
            placeholder="Subject *" 
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500"
          />
        </div>

        <textarea 
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          aria-label="Message" 
          placeholder="Your Message *" 
          rows={6} 
          className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-green-500" 
        />

        <div className="flex items-center gap-4 pt-2">
          <button 
            onClick={handleSubmit}
            className="px-6 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-95 transition active:scale-95"
          >
            Send Message
          </button>
          <div className="text-sm text-slate-500">
            We typically respond within 24 hours
          </div>
        </div>
      </div>

      {/* Additional contact info */}
      <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
        <div className="glass p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Business Inquiries</h3>
          <p className="text-slate-600 dark:text-slate-400">
            For partnership and enterprise solutions, reach out to our business team.
          </p>
        </div>
        <div className="glass p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Technical Support</h3>
          <p className="text-slate-600 dark:text-slate-400">
            For technical issues, please use our dedicated support ticket system.
          </p>
        </div>
      </div>
    </section>
  );
}