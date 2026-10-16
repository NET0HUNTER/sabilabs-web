'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!headlineRef.current || !taglineRef.current) return;

    const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } });

    timeline
      .from(headlineRef.current, {
        y: 28,
        opacity: 0,
        duration: 0.75,
      })
      .from(taglineRef.current, {
        y: 14,
        opacity: 0,
        duration: 0.55,
      }, '-=0.38');
  }, { scope: containerRef });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="home-hero hero-surface pointer-events-none relative z-10 mt-[var(--header-height)] flex items-center overflow-hidden"
    >
      <div aria-hidden="true" className="hero-grid absolute inset-0" />

      <div className="site-container pointer-events-auto relative z-10">
        <div className="mx-auto max-w-[1160px] text-center">
          <p className="hero-eyebrow mb-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)] sm:text-[13px] sm:tracking-[0.14em] md:mb-6 md:text-sm md:tracking-[0.16em]">
            Sabi Labs Limited · Business Technology &amp; Intelligence
          </p>

          <h1
            ref={headlineRef}
            className="hero-heading mx-auto max-w-[1160px] font-bold uppercase text-[var(--text-primary)]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <span className="hidden xl:block">We Transform Business Operations</span>
            <span className="hidden xl:block">Into Intelligent Digital Systems.</span>

            <span className="hidden md:block xl:hidden">We Transform Business</span>
            <span className="hidden md:block xl:hidden">Operations Into</span>
            <span className="hidden md:block xl:hidden">Intelligent Digital</span>
            <span className="hidden md:block xl:hidden">Systems.</span>

            <span className="block md:hidden">We Transform</span>
            <span className="block md:hidden">Business</span>
            <span className="block md:hidden">Operations Into</span>
            <span className="block md:hidden">Intelligent</span>
            <span className="block md:hidden">Digital Systems.</span>
          </h1>

          <p className="hero-copy-glass ui-copy mx-auto mt-7 text-base font-normal leading-[1.65] sm:text-lg md:mt-8 md:text-xl">
            We combine business analysis, software engineering, data intelligence and technology integration to design solutions around how organizations actually work.
          </p>

          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:mt-7">
            <Link href="/contact" className="button button-primary min-h-[52px] sm:px-8">
              Book a Consultation <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            <Link href="/capabilities" className="button button-secondary min-h-[52px] sm:px-8">
              Explore Capabilities <span aria-hidden="true" className="ml-2 text-[var(--accent)]">→</span>
            </Link>
          </div>

          <p ref={taglineRef} className="hero-tagline mt-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-tertiary)] sm:text-xs">
            Deep Expertise. Secure Execution.
          </p>
        </div>
      </div>
    </section>
  );
}
