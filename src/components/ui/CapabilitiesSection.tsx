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
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter text-white">
            CORE<br/>CAPABILITIES.
          </h2>
          
          <div className="flex flex-col gap-4">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveCap(cap.id)}
                className={`text-left group relative py-6 border-b border-white/10 transition-colors ${
                  activeCap === cap.id ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <span className="block text-xl font-bold uppercase tracking-wider mb-2 text-white">
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
                      <p className="pt-4 text-slate-300 font-light leading-relaxed max-w-md">
                        {cap.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Animated Indicator */}
                {activeCap === cap.id && (
                  <motion.div 
                    layoutId="indicator"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-[var(--accent-start)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Abstract UI Representation */}
        <div className="relative aspect-square w-full max-w-md mx-auto glass-card rounded-full flex items-center justify-center overflow-hidden">
          {/* Dynamic glowing core based on active capability */}
          <motion.div 
            key={activeCap}
            initial={{ scale: 0.8, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'backOut' }}
            className="absolute inset-20 border border-[var(--accent-start)] rounded-full mix-blend-screen"
            style={{ 
              boxShadow: '0 0 60px var(--accent-start)',
              borderStyle: activeCap === 'automation' ? 'dotted' : activeCap === 'software' ? 'dashed' : 'solid',
            }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz4KPC9zdmc+')] opacity-50" />
        </div>

      </div>
    </section>
  );
}
