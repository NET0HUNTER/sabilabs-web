'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: 'Distribution ERP',
    category: 'Enterprise Software',
    challenge: 'A growing distributor managed inventory across branches using spreadsheets and manual reconciliation, leading to stock discrepancies and revenue leakage.',
    approach: 'Business discovery → process mapping → requirements engineering → custom ERP development.',
    impact: 'Unified inventory visibility, automated order-to-delivery workflow, eliminated manual reconciliation.',
  },
  {
    id: 2,
    title: 'Restaurant POS System',
    category: 'POS & Operations',
    challenge: 'A restaurant group in Nigeria needed a unified POS across multiple locations with kitchen management and real-time reporting.',
    approach: 'Stakeholder workshops → workflow mapping → custom POS development → multi-location deployment.',
    impact: 'Streamlined order-to-kitchen flow, centralized reporting across all locations, reduced order errors.',
  },
  {
    id: 3,
    title: 'Commercial Laundry ERP',
    category: 'Process Automation',
    challenge: 'A commercial laundry operation had no visibility into garment tracking, leading to lost items and customer disputes.',
    approach: 'Process mapping → garment lifecycle tracking → customer portal development.',
    impact: 'End-to-end garment tracking, automated customer notifications, near-zero dispute rate.',
  },
  {
    id: 4,
    title: 'School Management ERP',
    category: 'Education Technology',
    challenge: 'A secondary school managed admissions, fees, attendance, and grades across disconnected paper systems and spreadsheets.',
    approach: 'Stakeholder workshops → module prioritization → offline-capable system architecture.',
    impact: 'Digitized student lifecycle, mobile fee payments, offline functionality for rural connectivity.',
  },
  {
    id: 5,
    title: 'NGO Approval Workflow',
    category: 'Financial Governance',
    challenge: 'An NGO\'s financial approval process involved manual email chains, creating audit gaps and delayed disbursements.',
    approach: 'Approval chain mapping → workflow platform development → Xero accounting integration.',
    impact: 'Multi-level digital approvals with complete audit trails, automated accounting sync with Xero.',
  },
  {
    id: 6,
    title: 'SACCO Security Audits',
    category: 'Cybersecurity',
    challenge: 'A SACCO needed to assess its cybersecurity posture against regulatory expectations but lacked internal expertise.',
    approach: 'Risk assessment → vulnerability scanning → compliance gap analysis → remediation roadmap.',
    impact: 'Identified critical vulnerabilities, clear remediation plan, strengthened regulatory readiness.',
  },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !scrollWrapperRef.current) return;

    const getScrollAmount = () => {
      let scrollWidth = scrollWrapperRef.current?.scrollWidth || 0;
      return -(scrollWidth - window.innerWidth);
    };

    const tween = gsap.to(scrollWrapperRef.current, {
      x: getScrollAmount,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    const cards = gsap.utils.toArray('.project-card') as HTMLElement[];
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: (i % 2 === 0) ? -50 : 50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: sectionRef });

  return (
    <section id="projects" ref={sectionRef} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[var(--bg-dark)] pointer-events-auto z-10 flex flex-col justify-center pt-24 pb-10">
      
      <div className="px-10 md:px-24 z-20 mb-8 shrink-0">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight max-w-4xl">
          Real Problems. Structured Solutions. Measurable Impact.
        </h2>
        <p className="text-[var(--accent-start)] mt-3 tracking-widest uppercase text-xs font-bold">
          Selected Engagements
        </p>
      </div>

      <div ref={scrollWrapperRef} className="flex items-center pl-10 md:pl-24 pr-[50vw] gap-8 md:gap-16 shrink-0 h-[50vh] min-h-[350px] md:h-[450px]">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="project-card w-[85vw] md:w-[600px] h-full shrink-0 glass-card rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <span className="text-[var(--accent-start)] text-sm tracking-[0.2em] font-bold uppercase mb-4 block">
                0{index + 1} // {project.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                {project.title}
              </h3>
              
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-[var(--accent-start)] text-xs uppercase tracking-widest font-bold block mb-1">
                    Challenge
                  </span>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <span className="text-[var(--accent-start)] text-xs uppercase tracking-widest font-bold block mb-1">
                    Impact
                  </span>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 self-start mt-4">
              <button className="flex items-center gap-3 text-white font-semibold uppercase text-xs tracking-widest group-hover:text-[var(--accent-start)] transition-colors">
                <span className="w-10 h-[1px] bg-white group-hover:bg-[var(--accent-start)] group-hover:w-16 transition-all duration-300" />
                View Case Study
              </button>
            </div>

            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[var(--accent-start)] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
