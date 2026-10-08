'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    service: 'Software Engineering',
    description: '',
    website: '', // honeypot
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      gsap.from('.contact-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: sectionRef }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }
    if (!formData.organization || formData.organization.length < 2) {
      newErrors.organization = 'Please enter a valid organization name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) {
      // Honeypot triggered, silently exit
      return;
    }
    
    if (validate()) {
      setIsSubmitting(true);
      
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          subject: `New Inquiry from ${formData.fullName} - ${formData.organization}`,
          from_name: 'SabiLabs Website Form',
          name: formData.fullName,
          email: formData.email,
          organization: formData.organization,
          phone: formData.phone,
          service: formData.service,
          message: formData.description,
        })
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setIsSubmitted(true);
        } else {
          setErrors({ submit: 'Something went wrong. Please try again or email us directly.' });
        }
      })
      .catch(() => {
        setErrors({ submit: 'Network error. Please email us directly.' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  return (
    <section id="contact" className="bg-[var(--bg-dark)] py-32 px-6 md:px-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 contact-reveal">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
            Let's Start With a Conversation
          </h2>
          <p className="text-slate-400 font-light leading-relaxed max-w-3xl mx-auto">
            No sales pitch. No pressure. Just a focused discussion about your business challenges and whether we're the right partner to solve them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="glass-card rounded-2xl p-8 md:p-10 contact-reveal relative overflow-hidden">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 h-full">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">
                  Thank you for reaching out.
                </h3>
                <p className="text-slate-400 font-light leading-relaxed">
                  We'll review your inquiry and get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                  className="hidden absolute -left-[9999px]"
                  aria-hidden="true"
                />

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-300 block">
                    Full Name <span className="text-[var(--accent-start)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-input text-sm text-white placeholder:text-slate-500 bg-white/5 border border-white/10 focus:border-[var(--accent-start)] focus:outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                  {errors.fullName && <span className="text-red-400 text-xs">{errors.fullName}</span>}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-300 block">
                    Organization <span className="text-[var(--accent-start)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-input text-sm text-white placeholder:text-slate-500 bg-white/5 border border-white/10 focus:border-[var(--accent-start)] focus:outline-none transition-colors"
                    placeholder="Acme Corp"
                  />
                  {errors.organization && <span className="text-red-400 text-xs">{errors.organization}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-300 block">
                      Email <span className="text-[var(--accent-start)]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-input text-sm text-white placeholder:text-slate-500 bg-white/5 border border-white/10 focus:border-[var(--accent-start)] focus:outline-none transition-colors"
                      placeholder="jane@example.com"
                    />
                    {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-300 block">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-input text-sm text-white placeholder:text-slate-500 bg-white/5 border border-white/10 focus:border-[var(--accent-start)] focus:outline-none transition-colors"
                      placeholder="+254..."
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-300 block">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-input text-sm text-white bg-slate-900 border border-white/10 focus:border-[var(--accent-start)] focus:outline-none transition-colors"
                  >
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="Cybersecurity & Compliance">Cybersecurity & Compliance</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-300 block">
                    Brief Description (Optional)
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg glass-input text-sm text-white placeholder:text-slate-500 bg-white/5 border border-white/10 focus:border-[var(--accent-start)] focus:outline-none transition-colors resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                {errors.submit && (
                  <div className="text-red-400 text-sm font-semibold text-center mt-2 bg-red-400/10 py-2 rounded-lg border border-red-400/20">
                    {errors.submit}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full font-bold uppercase tracking-widest text-sm text-white bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    'Request a Discovery Session'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info & CTAs */}
          <div className="contact-reveal flex flex-col justify-center h-full">
            <div className="mb-12">
              <h3 className="text-[var(--accent-start)] text-xs uppercase tracking-widest font-bold mb-8">
                Direct Contact
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Email</div>
                  <a href="mailto:contact@sabilabs.co.ke" className="text-xl font-light text-white hover:text-[var(--accent-start)] transition-colors">
                    contact@sabilabs.co.ke
                  </a>
                </div>
                
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Phone</div>
                  <div className="text-xl font-light text-white">
                    +254 700 000 000
                  </div>
                </div>

                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">Location</div>
                  <div className="text-xl font-light text-white">
                    Nairobi, Kenya
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full sm:w-auto py-3 px-8 rounded-full font-bold uppercase tracking-widest text-sm text-white border border-white/20 hover:bg-white/5 transition-colors">
                Schedule a Demo
              </button>
              <div>
                <a href="#assessment" className="inline-flex items-center text-[var(--accent-start)] font-bold text-sm tracking-widest uppercase hover:opacity-80 transition-opacity mt-4 group">
                  Get a Security Assessment
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
