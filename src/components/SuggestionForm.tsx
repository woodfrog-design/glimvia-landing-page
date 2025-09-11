"use client";
import { useState } from "react";

export default function SuggestionForm() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    useCase: '',
    name: '',
    email: '',
    priority: '',
    wantsUpdates: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Firebase integration would go here
    console.log('Suggestion submitted:', formData);
    // Reset form
    setFormData({
      title: '',
      category: '',
      description: '',
      useCase: '',
      name: '',
      email: '',
      priority: '',
      wantsUpdates: false
    });
    alert('Thank you for your suggestion! We\'ll review it soon.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="suggestion" className="relative max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <div className="hr-accent w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 h-1" />
        <h2 className="text-2xl md:text-3xl font-semibold">Share Your Ideas</h2>
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Help us improve Glimvia by sharing your feature suggestions and ideas.
      </p>

      <div className="mt-6 glass p-5 md:p-6 rounded-2xl space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input 
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            aria-label="Suggestion title" 
            placeholder="Feature/Improvement Title *" 
            className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
          />
          <select 
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            aria-label="Category" 
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="new-feature">New Feature</option>
            <option value="ui-ux">UI/UX Improvement</option>
            <option value="performance">Performance Enhancement</option>
            <option value="integration">Integration Request</option>
            <option value="other">Other</option>
          </select>
        </div>

        <textarea 
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          aria-label="Detailed description" 
          placeholder="Describe your suggestion in detail *" 
          rows={5} 
          className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500" 
        />

        <textarea 
          name="useCase"
          value={formData.useCase}
          onChange={handleInputChange}
          aria-label="Use case" 
          placeholder="How would this help you? (Use case/scenario)" 
          rows={3} 
          className="w-full rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500" 
        />

        <div className="grid md:grid-cols-2 gap-3">
          <input 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            aria-label="Name" 
            placeholder="Your Name" 
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
          />
          <input 
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            aria-label="Email" 
            placeholder="Email Address *" 
            type="email" 
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <select 
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
            aria-label="Priority" 
            className="rounded-lg px-3 py-2 bg-transparent outline-none ring-1 ring-black/10 dark:ring-white/15 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Priority Level</option>
            <option value="nice-to-have">Nice to Have</option>
            <option value="important">Important</option>
            <option value="critical">Critical</option>
          </select>
          <label className="inline-flex items-center gap-2 text-sm">
            <input 
              name="wantsUpdates"
              type="checkbox" 
              checked={formData.wantsUpdates}
              onChange={handleInputChange}
              className="accent-blue-600" 
            /> 
            I'd like updates on this suggestion
          </label>
        </div>

        <button 
          onClick={handleSubmit}
          className="mt-2 px-5 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-95 transition active:scale-95"
        >
          Submit Suggestion
        </button>
      </div>
    </section>
  );
}