import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.errors?.[0]?.msg || data.message || 'Something went wrong.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Make sure the backend server is running.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = "w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded-xl text-dark-100 placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/25 transition-all";

  const socials = [
    { name: 'Email', href: `mailto:${personalInfo.email}`, value: personalInfo.email, emoji: '✉️', color: 'hover:border-red-500/30' },
    { name: 'Phone', href: `tel:${personalInfo.phone}`, value: personalInfo.phone, emoji: '📱', color: 'hover:border-green-500/30' },
    { name: 'LinkedIn', href: personalInfo.linkedin, value: 'LinkedIn Profile', emoji: '💼', color: 'hover:border-blue-500/30' },
    { name: 'GitHub', href: personalInfo.github, value: 'GitHub Profile', emoji: '🐙', color: 'hover:border-gray-400/30' },
  ];

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="section-container" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Have a project idea or just want to say hello? I'd love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Social Links */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-4">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target={s.name === 'LinkedIn' || s.name === 'GitHub' ? '_blank' : undefined}
                   rel="noopener noreferrer"
                   className={`flex items-center gap-4 p-4 glass-card border border-dark-600/50 transition-all duration-300 ${s.color}`}>
                  <span className="text-xl">{s.emoji}</span>
                  <div>
                    <div className="text-sm font-semibold text-dark-200">{s.name}</div>
                    <div className="text-xs text-dark-400">{s.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 glass-card p-4 border border-dark-600/50">
              <div className="flex items-center gap-3">
                <span className="text-lg">📍</span>
                <div>
                  <div className="text-sm font-semibold text-dark-200">Location</div>
                  <div className="text-xs text-dark-400">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 border border-dark-600/50">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-1.5">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputCls} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-1.5">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputCls} placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-1.5">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputCls} placeholder="Project Inquiry" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-1.5">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputCls} resize-none`} placeholder="Tell me about your project..." />
              </div>
              {status.message && (
                <div className={`mb-4 p-3 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'}`}>
                  {status.message}
                </div>
              )}
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
