'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [4, 6, 1, 8];

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Title reveal
      gsap.from('.trust-reveal', {
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

      // Animated counters
      const obj = { val0: 0, val1: 0, val2: 0, val3: 0 };
      gsap.to(obj, {
        val0: targets[0],
        val1: targets[1],
        val2: targets[2],
        val3: targets[3],
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          setCounts([
            Math.round(obj.val0),
            Math.round(obj.val1),
            Math.round(obj.val2),
            Math.round(obj.val3),
          ]);
        },
      });
    },
    { scope: sectionRef }
  );

  const stats = [
    { label: 'Clients Served', suffix: '' },
    { label: 'Projects Delivered', suffix: '' },
    { label: 'Country', subtitle: 'Expanding across East Africa', suffix: '' },
    { label: 'Team Members', suffix: '' },
  ];

  return (
    <section id="trust" className="bg-[var(--bg-dark)] py-32 px-6 md:px-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20 trust-reveal">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
            Measured by Impact, Not Volume
          </h2>
        </div>

        {/* Stats Flex Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center trust-reveal">
              <div className="text-5xl md:text-7xl font-black accent-gradient-text mb-4">
                {counts[i]}
                {stat.suffix}
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-widest font-bold">
                {stat.label}
              </div>
              {stat.subtitle && (
                <div className="text-slate-500 text-xs mt-2 font-light">
                  {stat.subtitle}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Card */}
        <div className="glass-card rounded-2xl p-8 mt-16 text-center max-w-3xl mx-auto trust-reveal">
          <p className="text-lg md:text-xl font-light leading-relaxed text-slate-300">
            "We don't measure our success in volume. We measure it in the depth of every engagement and the business outcomes we deliver."
          </p>
        </div>
        
      </div>
    </section>
  );
}
