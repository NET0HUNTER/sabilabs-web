'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const capabilities = [
  {
    id: 'cyber',
    title: 'Cybersecurity & Compliance',
    description: 'We assess, protect, and continuously monitor your organization\'s digital infrastructure. From penetration testing to Kenya DPA readiness, we help you stay secure and compliant — without disrupting operations.',
  },
  {
    id: 'software',
    title: 'Custom Software Engineering',
    description: 'Every system we build starts with a deep understanding of your workflows, pain points, and growth trajectory. The result is software that fits your business — not software your business has to fit around.',
  },
  {
    id: 'cloud',
    title: 'Cloud & Digital Transformation',
    description: 'Whether you\'re migrating legacy systems to the cloud, deploying Microsoft 365, or integrating Zoho and Xero — we design cloud strategies that reduce cost, improve performance, and scale with you.',
  },
  {
    id: 'automation',
    title: 'Business Automation & AI',
    description: 'We identify the repetitive, manual processes that slow your organization down — and automate them. From approval workflows to AI-assisted decision making, we help you do more with less.',
  },
];

export default function CapabilitiesSection() {
  const [activeCap, setActiveCap] = useState(capabilities[0].id);

  return (
    <section id="capabilities" className="section-shell pointer-events-auto">
      <div className="site-container grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        
        {/* Left: Interactive Accordion */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter text-[var(--text-primary)]">
            CORE<br/>CAPABILITIES.
          </h2>
          
          <div className="flex flex-col gap-4">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveCap(cap.id)}
                className={`text-left group relative py-6 border-b border-[var(--border)] transition-colors ${
                  activeCap === cap.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <span className="block text-xl font-bold uppercase tracking-wider mb-2 text-[var(--text-primary)]">
                  {cap.title}
                </span>
                
                <AnimatePresence>
                  {activeCap === cap.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'circOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[var(--text-secondary)] font-normal leading-relaxed max-w-md">
                        {cap.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Animated Indicator */}
                {activeCap === cap.id && (
                  <motion.div 
                    layoutId="indicator"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[var(--accent)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right: restrained system diagram */}
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)]">
          <div className="absolute inset-x-10 top-1/3 h-px bg-[var(--border)]" />
          <div className="absolute inset-x-10 top-2/3 h-px bg-[var(--border)]" />
          <div className="absolute inset-y-10 left-1/3 w-px bg-[var(--border)]" />
          <div className="absolute inset-y-10 left-2/3 w-px bg-[var(--border)]" />
          <motion.div 
            key={activeCap}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-[32%] rounded-[var(--radius-sm)] border border-[var(--accent)] bg-[var(--accent-soft)]"
          />
        </div>

      </div>
    </section>
  );
}
