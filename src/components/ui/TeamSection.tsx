'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionIntro } from './Primitives';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const teamRoles = [
  {
    id: 1,
    role: 'Business Development',
    focus: 'Organizational priorities, market context, and sustainable value',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
  },
  {
    id: 2,
    role: 'Finance & Accounting',
    focus: 'Financial processes, controls, feasibility, and reporting requirements',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 14h-6"/><path d="M13 18H8"/><path d="M16 10h-6"/></svg>
    ),
  },
  {
    id: 3,
    role: 'Business-Process Analysis',
    focus: 'Workflows, responsibilities, requirements, and operational improvement',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
    ),
  },
  {
    id: 4,
    role: 'Cybersecurity',
    focus: 'Risk, access, infrastructure security, and responsible data handling',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 6.5 2a1 1 0 0 1 1 1z"/></svg>
    ),
  },
  {
    id: 5,
    role: 'Software Engineering',
    focus: 'Solution architecture, system development, integration, and quality',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
  },
  {
    id: 6,
    role: 'Data & Analytics',
    focus: 'Data foundations, reporting, analysis, and decision intelligence',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
    ),
  },
];

export default function TeamSection() {
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
    <section id="about" ref={sectionRef} className="section-shell pointer-events-auto">
      <div className="site-container">
        <SectionIntro
          className="reveal-item"
          eyebrow="Team Expertise"
          heading="Technology Built With the Whole Business in Mind."
          description={<>Our multidisciplinary team brings business, financial, process, security, data, and engineering expertise into the same decisions. Technology choices are never treated as purely technical.</>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamRoles.map((member) => (
            <div key={member.id} className="sabi-card reveal-item flex items-start gap-5">
              <div className="mt-1 shrink-0 text-[var(--accent)]">
                {member.icon}
              </div>
              <div>
                <h3 className="text-[var(--text-primary)] font-bold text-lg mb-1">
                  {member.role}
                </h3>
                <p className="text-[var(--text-secondary)] font-normal text-sm">
                  {member.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-[var(--text-secondary)] mt-12 text-lg reveal-item">
          One accountable team. Operational, financial, technical, data, and security requirements considered together.
        </div>
      </div>
    </section>
  );
}
