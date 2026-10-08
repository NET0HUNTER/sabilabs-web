'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const teamRoles = [
  {
    id: 1,
    role: 'Business Development & Financial Analysis',
    focus: 'Strategy, feasibility, and ROI modeling',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
  },
  {
    id: 2,
    role: 'Tax Compliance Specialist',
    focus: 'Regulatory alignment and financial compliance',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 14h-6"/><path d="M13 18H8"/><path d="M16 10h-6"/></svg>
    ),
  },
  {
    id: 3,
    role: 'Accountant',
    focus: 'Financial systems and reporting accuracy',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
    ),
  },
  {
    id: 4,
    role: 'Cloud & Network Security Specialist',
    focus: 'Infrastructure security and cloud architecture',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 6.5 2a1 1 0 0 1 1 1z"/></svg>
    ),
  },
  {
    id: 5,
    role: 'SOC Analyst',
    focus: 'Threat detection, incident response, and monitoring',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
    ),
  },
  {
    id: 6,
    role: 'Auditor Associates',
    focus: 'Compliance auditing and risk assessment',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
    ),
  },
  {
    id: 7,
    role: 'Software Engineers',
    focus: 'Full-stack development and system architecture',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
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
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-24 bg-[var(--bg-dark)] pointer-events-auto z-10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal-item">
          <span className="text-[var(--accent-start)] text-sm tracking-widest uppercase font-bold block mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
            Business Expertise Meets Engineering Excellence
          </h2>
          <p className="text-slate-300 font-light leading-relaxed text-lg max-w-3xl">
            We're not just developers. Our multidisciplinary team combines business analysis, financial expertise, cybersecurity, and engineering — so your technology decisions are informed by more than just code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamRoles.map((member) => (
            <div key={member.id} className="glass-card rounded-xl p-6 reveal-item flex items-start gap-5">
              <div className="text-[var(--accent-start)] mt-1 shrink-0">
                {member.icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">
                  {member.role}
                </h3>
                <p className="text-slate-300 font-light text-sm">
                  {member.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-slate-400 mt-12 text-lg reveal-item">
          8 specialists. One mission: aligning technology with your business goals.
        </div>
      </div>
    </section>
  );
}
