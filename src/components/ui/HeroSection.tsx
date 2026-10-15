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
      className="pointer-events-none relative z-10 mt-[var(--header-height)] flex min-h-[calc(100svh-var(--header-height))] items-center overflow-hidden py-10 sm:py-14 lg:py-[clamp(72px,7vw,96px)]"
    >
      <div aria-hidden="true" className="hero-overlay-radial absolute inset-0" />
      <div aria-hidden="true" className="hero-overlay-linear absolute inset-0" />

      <div className="site-container pointer-events-auto relative z-10">
        <div className="mx-auto max-w-[1160px] text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--accent-start)] sm:text-[13px] sm:tracking-[0.14em] md:mb-6 md:text-sm md:tracking-[0.16em]">
            Business &amp; Technology Transformation
          </p>

          <h1
            ref={headlineRef}
            className="mx-auto max-w-[1100px] text-[clamp(2.375rem,9.75vw,2.875rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.065em] text-[var(--text-primary)] sm:text-[2.875rem] md:text-[clamp(3rem,5.8vw,3.75rem)] md:tracking-[-0.055em] lg:text-[clamp(4rem,5vw,5rem)]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            We Transform Business Operations into Intelligent Digital Systems.
          </h1>

          <p ref={taglineRef} className="mx-auto mt-7 max-w-[760px] text-base font-normal leading-[1.6] text-slate-300 sm:text-lg md:mt-8 md:text-xl">
            We combine business analysis, software engineering, data intelligence and technology integration to design solutions around how organizations actually work.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:mt-10">
            <Link href="/contact" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[var(--accent-start)] bg-[var(--button-primary)] px-7 text-xs font-bold uppercase tracking-[0.12em] text-[var(--button-text)] transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-end)] hover:bg-[var(--accent-end)] sm:px-8">
              Book a Consultation <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            <Link href="/capabilities" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 bg-transparent px-7 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition-[border-color,background-color,color] duration-200 hover:border-white/35 hover:bg-white/[0.04] hover:text-white">
              Explore Capabilities <span aria-hidden="true" className="ml-2 text-[var(--accent-start)]">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
