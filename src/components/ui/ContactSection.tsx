'use client';

import { useState } from 'react';
import { Button, Eyebrow, SectionContainer, SectionIntro } from './Primitives';

type FormData = { name: string; company: string; email: string; phone: string; interest: string; message: string; website: string };
const initialData: FormData = { name: '', company: '', email: '', phone: '', interest: '', message: '', website: '' };

export default function ContactSection() {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.website) return;
    const nextErrors: Record<string, string> = {};
    if (formData.name.trim().length < 2) nextErrors.name = 'Please enter your name.';
    if (formData.company.trim().length < 2) nextErrors.company = 'Please enter your organisation.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email.';
    if (!formData.interest) nextErrors.interest = 'Please select an area of interest.';
    if (formData.message.trim().length < 10) nextErrors.message = 'Please share a little more about the project.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE', subject: `New enquiry from ${formData.name} — ${formData.company}`, from_name: 'SabiLabs Website', ...formData }) });
      const result = await response.json();
      if (!result.success) throw new Error('Submission failed');
      setStatus('sent');
      setFormData(initialData);
    } catch {
      setErrors({ submit: 'We could not send this enquiry. Please email us directly.' });
      setStatus('idle');
    }
  };

  const fieldClass = 'glass-input min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-[15px] text-white placeholder:text-slate-600';

  return (
    <section id="contact" className="section-shell border-t border-white/5">
      <SectionContainer>
        <SectionIntro
          eyebrow="Let's Talk"
          heading="Start With a Conversation."
          description={<>No sales pitch. Just a focused discussion about your business challenge and whether we&apos;re the right partner to solve it.</>}
        />
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)] lg:gap-24">
          <div>
            {status === 'sent' ? (
              <div className="sabi-card flex min-h-[420px] flex-col justify-center"><Eyebrow>Enquiry Received</Eyebrow><h3 className="mb-4 text-3xl font-bold text-white">Thank you for reaching out.</h3><p className="max-w-xl text-[var(--text-muted)]">We&apos;ll review your enquiry and get back to you within one business day.</p></div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" className="visually-hidden-honeypot" aria-hidden="true" />
                <Field label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} className={fieldClass} required />
                <Field label="Company / Organisation" name="company" value={formData.company} onChange={handleChange} error={errors.company} className={fieldClass} required />
                <Field label="Email" name="email" value={formData.email} onChange={handleChange} error={errors.email} className={fieldClass} type="email" required />
                <Field label="Phone" name="phone" value={formData.phone} onChange={handleChange} className={fieldClass} type="tel" optional />
                <label className="grid gap-2 sm:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-300">Area of Interest</span>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={`${fieldClass} theme-select`}
                    aria-invalid={Boolean(errors.interest)}
                    aria-describedby={errors.interest ? 'interest-error' : undefined}
                    required
                  >
                    <option value="" disabled>Select an area of interest</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="Cloud Solutions">Cloud Solutions</option>
                    <option value="Cybersecurity &amp; Compliance">Cybersecurity &amp; Compliance</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                  {errors.interest ? <span id="interest-error" className="text-xs text-rose-300">{errors.interest}</span> : null}
                </label>
                <label className="grid gap-2 sm:col-span-2"><span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-300">Project Details / Message</span><textarea name="message" value={formData.message} onChange={handleChange} rows={5} className={`${fieldClass} resize-y`} placeholder="Tell us about the challenge, your goals, and any important timing." />{errors.message ? <span className="text-xs text-rose-300">{errors.message}</span> : null}</label>
                {errors.submit ? <p className="text-sm text-rose-300 sm:col-span-2">{errors.submit}</p> : null}
                <div className="sm:col-span-2"><Button type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send Enquiry'}<span aria-hidden="true">→</span></Button></div>
              </form>
            )}
          </div>

          <aside className="border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-1">
            <Eyebrow>Direct Contact</Eyebrow>
            <div className="mt-10 grid gap-10">
              <ContactDetail label="Email"><a href="mailto:contact@sabilabs.co.ke" className="break-all hover:text-[var(--accent-start)]">contact@sabilabs.co.ke</a></ContactDetail>
              <ContactDetail label="Phone"><a href="tel:+254700000000" className="hover:text-[var(--accent-start)]">+254 700 000 000</a></ContactDetail>
              <ContactDetail label="Location">Nairobi, Kenya</ContactDetail>
            </div>
            <div className="mt-12 flex flex-col items-start gap-5">
              <a href="mailto:contact@sabilabs.co.ke?subject=Schedule%20a%20SabiLabs%20Demo" className="button button-secondary">Schedule a Demo</a>
              <a href="mailto:contact@sabilabs.co.ke?subject=Security%20Assessment" className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-start)] transition-colors hover:text-white">Get a Security Assessment →</a>
            </div>
          </aside>
        </div>
      </SectionContainer>
    </section>
  );
}

function Field({ label, error, optional, className, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; optional?: boolean }) {
  return <label className="grid gap-2"><span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-300">{label}{optional ? <span className="ml-2 font-medium normal-case tracking-normal text-slate-500">optional</span> : null}</span><input {...props} className={className} />{error ? <span className="text-xs text-rose-300">{error}</span> : null}</label>;
}

function ContactDetail({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-start)]">{label}</p><div className="text-xl font-medium leading-7 text-white transition-colors">{children}</div></div>;
}
