'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow, SectionContainer } from './Primitives';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const phases = [
  {
    number: '01',
    title: 'Discover',
    summary: 'Build a shared, evidence-based view of the business.',
    steps: [
      { number: '01', title: 'Business Discovery', desc: "We study your organization's goals, market, and competitive landscape." },
      { number: '02', title: 'Stakeholder Workshops', desc: 'Every voice that matters is heard before a single decision is made.' },
      { number: '03', title: 'Current Process Mapping', desc: 'We document how your business actually operates — not how people think it operates.' },
    ],
  },
  {
    number: '02',
    title: 'Define',
    summary: 'Turn operational insight into a precise problem statement.',
    steps: [
      { number: '04', title: 'Pain Point Identification', desc: 'We surface the bottlenecks, redundancies, and revenue leaks hiding in your workflows.' },
      { number: '05', title: 'Requirements Engineering', desc: 'Precise, documented requirements that leave no room for misinterpretation.' },
      { number: '06', title: 'Risk Assessment', desc: 'We identify what could go wrong before it does.' },
    ],
  },
  {
    number: '03',
    title: 'Build',
    summary: 'Turn an approved blueprint into a working solution.',
    steps: [
      { number: '07', title: 'Solution Architecture', desc: 'Technology decisions are based on your business requirements, not trends.' },
      { number: '08', title: 'Validation', desc: 'You approve the complete blueprint before development begins.' },
      { number: '09', title: 'Development', desc: 'Agile sprints with transparent progress and regular demos.' },
    ],
  },
  {
    number: '04',
    title: 'Deliver & Improve',
    summary: 'Launch with confidence, then improve as the business evolves.',
    steps: [
      { number: '10', title: 'Testing', desc: 'Rigorous quality assurance across security, performance, and usability.' },
      { number: '11', title: 'Deployment', desc: 'Controlled rollouts with training, documentation, and support.' },
      { number: '12', title: 'Continuous Improvement', desc: 'Your systems evolve as your business grows.' },
    ],
  },
];

export default function FrameworkSection({ preview = false }: { preview?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const elements = gsap.utils.toArray('.reveal-item') as HTMLElement[];
    elements.forEach((element) => {
      gsap.from(element, {
        y: 20,
        opacity: 0,
        duration: 0.55,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="framework" ref={sectionRef} className="section-shell overflow-hidden font-sans">
      <SectionContainer>
        <header className="section-intro centered reveal-item !mb-16 md:!mb-20">
          <Eyebrow className="mb-5 font-semibold">Our Methodology</Eyebrow>
          <h2 className="editorial-heading uppercase">
            Understanding Your Business Before Writing a Single Line of Code
          </h2>
          <p className="editorial-copy mx-auto">
            {preview
              ? 'Four disciplined phases move each engagement from business context to measurable improvement.'
              : <>According to industry research, over 70% of ERP implementations fail to deliver expected outcomes — typically because teams start building before they understand what they&apos;re solving. Our structured Business Analysis Framework eliminates that risk.</>}
          </p>
        </header>

        {preview ? (
          <>
            <div className="grid border-y border-white/[0.08] md:grid-cols-2 xl:grid-cols-4">
              {phases.map((phase) => (
                <article key={phase.number} className="reveal-item border-b border-white/[0.08] px-0 py-8 last:border-b-0 md:px-8 md:[&:nth-child(odd)]:border-r xl:border-b-0 xl:border-r xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-start)]">Phase {phase.number}</p>
                  <h3 className="mt-4 text-2xl font-bold uppercase tracking-[-0.03em] text-white">{phase.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">{phase.summary}</p>
                </article>
              ))}
            </div>
            <Link href="/methodology" className="button button-secondary mt-10">See Our Methodology <span aria-hidden="true">→</span></Link>
          </>
        ) : (
          <>
        <div className="border-y border-white/[0.08]">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="reveal-item grid gap-10 border-b border-white/[0.08] py-16 last:border-b-0 md:py-20 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.7fr)] lg:gap-16"
            >
              <header className="max-w-md">
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-start)]">
                  Phase {phase.number}
                </p>
                <h3 className="mt-4 text-[clamp(2.375rem,3.5vw,3.125rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.04em] text-[var(--text-primary)]">
                  {phase.title}
                </h3>
                <span aria-hidden="true" className="mt-6 block h-px w-16 bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-soft)]" />
                <p className="mt-6 max-w-sm text-base font-normal leading-7 text-[var(--text-muted)] md:text-[17px]">
                  {phase.summary}
                </p>
              </header>

              <ol className="divide-y divide-white/[0.08]" aria-label={`${phase.title} phase steps`}>
                {phase.steps.map((step) => (
                  <li key={step.number} className="grid grid-cols-[40px_minmax(0,1fr)] gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-6">
                    <span className="pt-1 text-[13px] font-semibold tracking-[0.12em] text-[var(--accent-start)]">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-[var(--text-primary)] md:text-2xl">
                        {step.title}
                      </h4>
                      <p className="mt-2 max-w-2xl text-base font-normal leading-7 text-[var(--text-muted)] md:text-[17px]">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <div className="reveal-item mt-16 flex flex-col items-start justify-between gap-8 border-t border-white/[0.08] pt-8 md:flex-row md:items-center">
          <p className="max-w-3xl text-base font-normal leading-7 text-[var(--text-muted)] md:text-[17px]">
            We invest the time upfront to understand your business, so you don&apos;t pay the cost of rework, scope creep, and failed implementations later.
          </p>
          <Link href="/contact" className="group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--accent-start)] bg-[var(--bg-secondary)] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-[var(--surface)]">
            <span className="relative z-10 flex items-center gap-2">
              Start With a Discovery Session <span className="text-[var(--accent-start)] transition-transform group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
          </>
        )}
      </SectionContainer>
    </section>
  );
}
