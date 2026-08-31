import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { ContactFormData } from '../types';
import { SocialLinks } from './SocialLinks';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAF7] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(249,202,49,0.06),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F9CA31]/40 text-[#050505] text-xs font-semibold mb-4 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A915]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#050505] tracking-tight leading-snug sm:leading-tight break-words">
            "Have a project in mind? <span className="gold-gradient-text block mt-1">Let's create something amazing together."</span>
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-[#666666] font-light max-w-2xl mx-auto">
            Reach out via email, phone, or drop a message below. I respond promptly to all inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="brand-card p-8 rounded-2xl space-y-8">
              <h3 className="text-lg font-bold text-[#050505] border-b border-black/10 pb-4">
                Contact Information
              </h3>

              {/* Emails */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#D8A915] font-semibold text-xs uppercase tracking-wider">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>Email Addresses</span>
                </div>
                <div className="space-y-2 pl-7">
                  {PERSONAL_INFO.emails.map((email, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${email}`}
                      className="block text-[#050505] hover:text-[#D8A915] text-xs transition-colors font-light break-all"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* Phones */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#D8A915] font-semibold text-xs uppercase tracking-wider">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Phone / WhatsApp</span>
                </div>
                <div className="space-y-2 pl-7">
                  {PERSONAL_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/-/g, '')}`}
                      className="block text-[#050505] hover:text-[#D8A915] text-xs transition-colors font-light"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#D8A915] font-semibold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Location & Availability</span>
                </div>
                <div className="pl-7 text-[#050505] text-xs font-light">
                  {PERSONAL_INFO.location}
                </div>
              </div>

              {/* Social Media & Direct Channels */}
              <div className="space-y-3 pt-4 border-t border-black/10">
                <div className="text-[#050505] font-bold text-xs uppercase tracking-wider mb-2">
                  Social & Direct Channels
                </div>
                <SocialLinks />
              </div>

              <div className="pt-6 border-t border-black/10">
                <div className="p-4 rounded-xl bg-[#F9CA31]/20 border border-[#F9CA31]/40 text-[#050505] text-xs leading-relaxed font-light">
                  <strong>Working Hours:</strong> Monday – Saturday. Available for international freelance contracts, agency collaborations, and Fiverr/Upwork projects.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="brand-card p-8 sm:p-10 rounded-2xl relative">
              {submitted && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-8 text-center z-20 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#050505] mb-2">Message Sent Successfully!</h3>
                  <p className="text-[#666666] text-xs max-w-md font-light">
                    Thank you for reaching out to Usman Graphics. Rai Usman will review your message and get back to you shortly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#050505] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-[#050505] text-xs focus:outline-none focus:border-[#F9CA31] focus:ring-2 focus:ring-[#F9CA31]/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#050505] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-[#050505] text-xs focus:outline-none focus:border-[#F9CA31] focus:ring-2 focus:ring-[#F9CA31]/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#050505] mb-2">
                    Subject / Project Type
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Brand Identity & Logo Design"
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-[#050505] text-xs focus:outline-none focus:border-[#F9CA31] focus:ring-2 focus:ring-[#F9CA31]/20 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#050505] mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project goals, timeline, and deliverables..."
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-[#050505] text-xs focus:outline-none focus:border-[#F9CA31] focus:ring-2 focus:ring-[#F9CA31]/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F9CA31] text-[#050505] font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-[#D8A915] transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-wider disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
