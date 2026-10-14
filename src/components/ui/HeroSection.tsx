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
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-start)] md:mb-6 md:text-sm md:tracking-[0.16em]">
            Strategy-Led Technology Consulting
          </p>

          <h1
            ref={headlineRef}
            className="mx-auto max-w-[1100px] text-[clamp(2.375rem,9.75vw,2.875rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.065em] text-[var(--text-primary)] sm:text-[2.875rem] md:text-[clamp(3rem,5.8vw,3.75rem)] md:tracking-[-0.055em] lg:text-[clamp(4rem,5vw,5rem)]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <span className="block"><span className="block sm:inline">We Don&apos;t Build</span>{' '}<span className="block sm:inline">Software.</span></span>
            <span className="block"><span className="block md:inline">We Solve Business</span>{' '}<span className="block md:inline">Problems.</span></span>
          </h1>

          <p ref={taglineRef} className="mx-auto mt-7 max-w-[760px] text-base font-normal leading-[1.6] text-slate-300 sm:text-lg md:mt-8 md:text-xl">
            Technology should solve real operational problems — not add another layer of complexity.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:mt-10">
            <Link href="/contact" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[var(--accent-start)] bg-[var(--button-primary)] px-7 text-xs font-bold uppercase tracking-[0.12em] text-[var(--button-text)] transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-end)] hover:bg-[var(--accent-end)] sm:px-8">
              Book a Free Consultation <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            <Link href="/methodology" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/15 bg-transparent px-7 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition-[border-color,background-color,color] duration-200 hover:border-white/35 hover:bg-white/[0.04] hover:text-white">
              See How We Work <span aria-hidden="true" className="ml-2 text-[var(--accent-start)]">↓</span>
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-x-5 gap-y-4 border-t border-white/[0.08] pt-6 text-[10px] font-semibold uppercase leading-5 tracking-[0.12em] text-slate-400 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3 lg:mt-12">
            <TrustSignal icon="globe">Trusted across Kenya</TrustSignal>
            <TrustSignal icon="team">8 Multidisciplinary Experts</TrustSignal>
            <TrustSignal icon="shield">Security by Design</TrustSignal>
            <TrustSignal icon="growth">Scalable Infrastructure</TrustSignal>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSignal({ icon, children }: { icon: 'globe' | 'team' | 'shield' | 'growth'; children: React.ReactNode }) {
  const paths = {
    globe: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    team: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    growth: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  };

  return (
    <div className="flex items-center gap-2.5">
      <svg className="h-4 w-4 shrink-0 text-[var(--accent-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={paths[icon]} />
      </svg>
      <span>{children}</span>
    </div>
  );
}
