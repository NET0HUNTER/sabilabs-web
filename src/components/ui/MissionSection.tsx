'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const values = [
  {
    id: 1,
    title: 'Discovery First',
    description: 'We understand before we build.',
  },
  {
    id: 2,
    title: 'Integrity',
    description: "We recommend what's right, not what's easy.",
  },
  {
    id: 3,
    title: 'Security',
    description: 'Protection is never optional.',
  },
  {
    id: 4,
    title: 'Partnership',
    description: 'Your success is our business model.',
  },
  {
    id: 5,
    title: 'Excellence',
    description: "We deliver work we're proud to stand behind.",
  },
];

export default function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const elements = gsap.utils.toArray('.reveal-item') as HTMLElement[];
      elements.forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="mission" className="bg-[var(--bg-dark)] text-white py-32 px-6 md:px-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Mission Block */}
        <div className="max-w-4xl mx-auto text-center reveal-item mb-12">
          <h3 className="text-[var(--accent-start)] text-xs uppercase tracking-widest font-bold mb-6">
            Our Mission
          </h3>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-white">
            To help organizations across Africa replace guesswork with clarity, manual work with automation, and risk with resilience — through technology that is understood, secure, and built to last.
          </p>
        </div>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-[var(--accent-start)] mx-auto my-12 reveal-item" />

        {/* Vision Block */}
        <div className="max-w-4xl mx-auto text-center reveal-item mb-20">
          <h3 className="text-[var(--accent-start)] text-xs uppercase tracking-widest font-bold mb-6">
            Our Vision
          </h3>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-white">
            To become Africa's most trusted technology and business transformation partner — known for depth of understanding, integrity of execution, and measurable business impact.
          </p>
        </div>

        {/* Values Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {values.map((val) => (
            <div
              key={val.id}
              className="glass-card rounded-xl p-6 text-center reveal-item w-full md:w-[calc(33.333%-1rem)] min-w-[240px]"
            >
              <div className="text-[var(--accent-start)] text-2xl font-black mb-4">
                0{val.id}
              </div>
              <h4 className="font-black uppercase tracking-tighter mb-2 text-white">
                {val.title}
              </h4>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
