'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 'software',
    title: 'Software Engineering',
    tagline: 'Custom systems built around how your business actually operates.',
    items: [
      'Distribution Management Systems',
      'Enterprise Resource Planning (ERP)',
      'CRM & Customer Management',
      'HRMS & Payroll',
      'Point of Sale & Retail Systems',
      'School & Hospital Management',
      'Accounting & Financial Systems',
      'Custom Business Applications'
    ]
  },
  {
    id: 'automation',
    title: 'Business Automation',
    tagline: 'Eliminate repetitive work. Accelerate decisions. Scale operations.',
    items: [
      'Workflow & Process Automation',
      'AI-Assisted Automation',
      'Digital Transformation Strategy',
      'Business Process Optimization'
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    tagline: 'Modern infrastructure without the complexity.',
    items: [
      'Cloud Migration & Modernization',
      'Microsoft 365 Deployment',
      'Google Workspace Setup',
      'Zoho & Xero Integration'
    ]
  },
  {
    id: 'security',
    title: 'Cybersecurity & Compliance',
    tagline: 'Protect your organization. Satisfy regulators. Sleep better.',
    items: [
      'Penetration Testing & Vulnerability Assessments',
      'Security & Risk Assessments',
      'Managed Security & IT',
      'Security Awareness Training',
      'Kenya Data Protection Act (DPA) Readiness',
      'SACCO Regulatory Compliance',
      'Data Protection Impact Assessments (DPIA)'
    ]
  }
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(SERVICES[0].id);

  return (
    <section id="services" className="py-32 px-6 md:px-24 bg-[var(--bg-dark)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <p className="text-[var(--accent-start)] text-sm tracking-[0.2em] font-bold uppercase mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            End-to-End Technology & Security Consulting
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-[70%]">
            <div className="flex flex-col gap-4">
              {SERVICES.map((service) => (
                <div key={service.id} className="relative">
                  {activeService === service.id && (
                    <motion.div
                      layoutId="service-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-start)] to-[var(--accent-end)] rounded-full z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <button
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left pl-6 pr-6 py-6 rounded-r-xl transition-all duration-300 ${activeService === service.id ? 'glass-card bg-white/5' : 'hover:bg-white/5 border border-transparent'}`}
                    aria-expanded={activeService === service.id}
                  >
                    <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 italic font-light">{service.tagline}</p>
                  </button>
                  
                  <AnimatePresence>
                    {activeService === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden pl-6 pr-6"
                      >
                        <ul className="pt-4 pb-6 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-start text-slate-300 font-light text-sm md:text-base leading-relaxed">
                              <span className="text-[var(--accent-start)] mr-3 mt-1 flex-shrink-0">■</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex w-[30%] items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--accent-start)] to-[var(--accent-end)] opacity-20 blur-3xl animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-white/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[var(--accent-start)]/5 rounded-full backdrop-blur-md" />
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-[var(--accent-start)] to-[var(--accent-end)] opacity-80 mix-blend-screen animate-spin" style={{ animationDuration: '10s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
