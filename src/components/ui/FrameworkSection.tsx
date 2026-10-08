'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STAGES = [
  { title: 'Business Discovery', desc: "We study your organization's goals, market, and competitive landscape." },
  { title: 'Stakeholder Workshops', desc: 'Every voice that matters is heard before a single decision is made.' },
  { title: 'Current Process Mapping', desc: 'We document how your business actually operates — not how people think it operates.' },
  { title: 'Pain Point Identification', desc: 'We surface the bottlenecks, redundancies, and revenue leaks hiding in your workflows.' },
  { title: 'Requirements Engineering', desc: 'Precise, documented requirements that leave no room for misinterpretation.' },
  { title: 'Risk Assessment', desc: 'We identify what could go wrong before it does.' },
  { title: 'Solution Architecture', desc: 'Technology decisions are made based on your business requirements, not trends.' },
  { title: 'Validation', desc: 'You approve the complete blueprint before development begins.' },
  { title: 'Development', desc: 'Agile sprints with transparent progress and regular demos.' },
  { title: 'Testing', desc: 'Rigorous quality assurance across security, performance, and usability.' },
  { title: 'Deployment', desc: 'Controlled rollouts with training, documentation, and support.' },
  { title: 'Continuous Improvement', desc: 'Your systems evolve as your business grows.' },
];

export default function FrameworkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const elements = gsap.utils.toArray('.reveal-item') as HTMLElement[];
    elements.forEach((el, i) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: (i % 5) * 0.1,
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
    <section id="framework" ref={sectionRef} className="py-32 px-6 md:px-24 bg-[var(--bg-dark)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 reveal-item max-w-5xl">
          <p className="text-[var(--accent-start)] text-sm tracking-[0.2em] font-bold uppercase mb-4">Our Methodology</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Understanding Your Business Before Writing a Single Line of Code
          </h2>
          <p className="text-slate-300 font-light leading-relaxed max-w-3xl text-lg">
            According to industry research, over 70% of ERP implementations fail to deliver expected outcomes — typically because teams start building before they understand what they're solving. Our structured Business Analysis Framework eliminates that risk.
          </p>
        </div>

        <div className="relative pl-8 md:pl-16 mb-16 before:content-[''] before:absolute before:left-3 md:before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[var(--accent-start)] before:to-transparent">
          {STAGES.map((stage, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0 reveal-item">
              <div className="absolute -left-[38px] md:-left-[58px] top-4 w-8 h-8 rounded-full bg-[var(--accent-start)] flex items-center justify-center text-white text-xs font-bold ring-4 ring-[var(--bg-dark)] z-10">
                {String(idx + 1).padStart(2, '0')}
              </div>
              
              <div className="glass-card rounded-xl p-6 accent-border-left border-l-4 border-[var(--accent-start)]">
                <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                <p className="text-slate-300 font-light leading-relaxed">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 text-center max-w-4xl mx-auto reveal-item mb-12">
          <p className="text-lg md:text-xl text-white font-light leading-relaxed">
            This is why our projects succeed. We invest the time upfront to understand your business, so you don't pay the cost of rework, scope creep, and failed implementations later.
          </p>
        </div>

        <div className="text-center reveal-item">
          <button className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 bg-[#0a0a0a] rounded-full group overflow-hidden border border-[var(--accent-start)] hover:shadow-[0_0_20px_var(--accent-start)] hover:shadow-[var(--accent-start)]/20">
            <span className="relative z-10 flex items-center gap-2">
              Start With a Discovery Session <span className="text-[var(--accent-start)] transition-transform group-hover:translate-x-1">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
