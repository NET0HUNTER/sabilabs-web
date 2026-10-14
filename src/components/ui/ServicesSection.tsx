'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { Card, SectionContainer, SectionIntro } from './Primitives';

export const services = [
  {
    id: 'analysis',
    title: 'Business Analysis & Advisory',
    tagline: 'Define the right problem before investing in the solution.',
    items: ['Business Discovery', 'Stakeholder Workshops', 'Current Process Mapping', 'Pain Point Identification', 'Requirements Engineering', 'Risk Assessment'],
  },
  {
    id: 'software',
    title: 'Software Engineering',
    tagline: 'Custom systems built around how your business actually operates.',
    items: ['Distribution Management Systems', 'Enterprise Resource Planning (ERP)', 'CRM & Customer Management', 'HRMS & Payroll', 'Point of Sale & Retail Systems', 'School & Hospital Management', 'Accounting & Financial Systems', 'Custom Business Applications'],
  },
  {
    id: 'automation',
    title: 'Business Automation',
    tagline: 'Eliminate repetitive work. Accelerate decisions. Scale operations.',
    items: ['Workflow & Process Automation', 'AI-Assisted Automation', 'Digital Transformation Strategy', 'Business Process Optimization'],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    tagline: 'Modern infrastructure without the complexity.',
    items: ['Cloud Migration & Modernization', 'Microsoft 365 Deployment', 'Google Workspace Setup', 'Zoho & Xero Integration'],
  },
  {
    id: 'security',
    title: 'Cybersecurity & Compliance',
    tagline: 'Protect your organization. Satisfy regulators. Sleep better.',
    items: ['Penetration Testing & Vulnerability Assessments', 'Security & Risk Assessments', 'Managed Security & IT', 'Security Awareness Training', 'Kenya Data Protection Act (DPA) Readiness', 'SACCO Regulatory Compliance', 'Data Protection Impact Assessments (DPIA)'],
  },
  {
    id: 'support',
    title: 'Support & Continuous Improvement',
    tagline: 'Keep systems reliable, secure, and aligned as your business evolves.',
    items: ['Ongoing System Support', 'Performance Monitoring', 'Security Updates', 'Workflow Optimization', 'User Training & Documentation', 'Continuous Improvement Planning'],
  },
];

const previewServices = ['analysis', 'software', 'security', 'automation'];

export default function ServicesSection({ preview = false }: { preview?: boolean }) {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section id="services" className="section-shell overflow-hidden">
      <SectionContainer className="relative z-10">
        <SectionIntro
          eyebrow="What We Do"
          heading="End-to-End Technology & Security Consulting"
          description="Business-first technology services designed around operational clarity, resilience, and measurable outcomes."
        />

        {preview ? (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              {services.filter((service) => previewServices.includes(service.id)).map((service) => (
                <Card key={service.id} className="group transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-white/25">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-start)]">Core Service</p>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-white">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">{service.tagline}</p>
                </Card>
              ))}
            </div>
            <Link href="/services" className="button button-secondary mt-10">Explore All Services <span aria-hidden="true">→</span></Link>
          </>
        ) : (
          <div className="flex flex-col gap-16 lg:flex-row">
            <div className="w-full lg:w-[70%]">
              <div className="flex flex-col gap-4">
                {services.map((service) => (
                  <div key={service.id} className="relative">
                    {activeService === service.id ? <motion.div layoutId="service-indicator" className="absolute inset-y-0 left-0 z-10 w-1 rounded-full bg-gradient-to-b from-[var(--accent-start)] to-[var(--accent-end)]" initial={false} transition={{ type: 'spring', stiffness: 300, damping: 30 }} /> : null}
                    <button onClick={() => setActiveService(service.id)} className={`w-full rounded-r-xl py-6 pl-6 pr-6 text-left transition-all duration-300 ${activeService === service.id ? 'glass-card bg-white/5' : 'border border-transparent hover:bg-white/5'}`} aria-expanded={activeService === service.id}>
                      <h3 className="mb-2 text-xl font-bold uppercase tracking-wider text-white">{service.title}</h3>
                      <p className="font-light italic text-slate-400">{service.tagline}</p>
                    </button>

                    <AnimatePresence>
                      {activeService === service.id ? (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden px-6">
                          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 pb-6 pt-4 md:grid-cols-2">
                            {service.items.map((item) => <li key={item} className="flex items-start text-sm font-light leading-relaxed text-slate-300 md:text-base"><span className="mr-3 mt-1 shrink-0 text-[var(--accent-start)]">■</span>{item}</li>)}
                          </ul>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden w-[30%] items-center justify-center lg:flex" aria-hidden="true">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-[var(--accent-start)] to-[var(--accent-end)] opacity-20 blur-3xl" />
                <div className="absolute inset-4 flex items-center justify-center rounded-full border border-white/10">
                  <div className="absolute inset-0 rounded-full bg-[var(--accent-start)]/5 backdrop-blur-md" />
                  <div className="relative h-24 w-24 animate-spin rounded-full bg-gradient-to-tr from-[var(--accent-start)] to-[var(--accent-end)] opacity-80 mix-blend-screen" style={{ animationDuration: '10s' }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </SectionContainer>
    </section>
  );
}
