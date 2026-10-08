'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const differentiators = [
  {
    id: 1,
    title: 'Strategy Before Software',
    description: 'We invest time understanding your business before proposing a single technology decision.',
  },
  {
    id: 2,
    title: 'Security by Design',
    description: 'Every system we build has security woven into its architecture — not bolted on as an afterthought.',
  },
  {
    id: 3,
    title: 'Business-First Thinking',
    description: 'We measure success by your operational outcomes, not lines of code delivered.',
  },
  {
    id: 4,
    title: 'Scalable Infrastructure',
    description: 'We build systems designed to handle your growth seamlessly, ensuring you don\'t need a costly rebuild in two years.',
  },
  {
    id: 5,
    title: 'Transparent Communication',
    description: 'No black boxes. Regular progress updates, demos, and honest conversations about trade-offs.',
  },
  {
    id: 6,
    title: 'Vendor-Neutral Recommendations',
    description: 'We recommend the right technology for your problem — not the technology we\'re most comfortable with.',
  },
  {
    id: 7,
    title: 'Long-Term Partnerships',
    description: 'We don\'t disappear after deployment. We stay, optimize, and grow with your business.',
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
  }, { scope: sectionRef });

  return (
    <section id="why-us" ref={sectionRef} className="py-32 px-6 md:px-24 bg-[var(--bg-dark)] pointer-events-auto z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Not the Right Fit for Everyone.
          </h2>
          <p className="text-slate-400 tracking-widest uppercase text-sm font-bold">
            And That's the Point.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 md:p-12 mb-16 max-w-4xl mx-auto reveal-item">
          <p className="italic text-lg text-slate-300 leading-relaxed mb-6">
            "If you're looking for someone to simply build exactly what you ask for — without questioning whether it's the right solution — we're probably not the right partner."
          </p>
          <p className="italic text-lg text-slate-300 leading-relaxed mb-8">
            "If you're looking for a technology partner who will challenge your assumptions, understand your business deeply, and build solutions that create long-term value — let's talk."
          </p>
          <a href="#contact" className="text-[var(--accent-start)] font-bold tracking-widest uppercase text-sm hover:text-white transition-colors">
            Start the Conversation &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentiators.map((diff, index) => (
            <div key={diff.id} className="glass-card rounded-xl p-8 reveal-item flex flex-col gap-4">
              <span className="text-[var(--accent-start)] text-2xl font-black">
                0{index + 1}
              </span>
              <h3 className="text-xl font-bold text-white uppercase tracking-tighter">
                {diff.title}
              </h3>
              <p className="text-slate-300 font-light leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
