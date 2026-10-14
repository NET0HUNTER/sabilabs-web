'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Metric, SectionContainer, SectionIntro } from './Primitives';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useGSAP(() => {
    const obj = { a: 0, b: 0, c: 0, d: 0 };
    gsap.to(obj, { a: 4, b: 6, c: 1, d: 8, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true }, onUpdate: () => setCounts([Math.round(obj.a), Math.round(obj.b), Math.round(obj.c), Math.round(obj.d)]) });
  }, { scope: sectionRef });

  return (
    <section id="trust" ref={sectionRef} className="section-shell font-sans">
      <SectionContainer>
        <SectionIntro
          className="!mb-12 md:!mb-14"
          eyebrow="Our Impact"
          heading="Measured by Impact, Not Volume"
          headingClassName="editorial-heading"
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-y border-white/[0.08] py-10 sm:gap-x-8 md:py-12 lg:grid-cols-4">
          <Metric value={String(counts[0]).padStart(2, '0')} label="Clients Served" />
          <Metric value={String(counts[1]).padStart(2, '0')} label="Projects Delivered" />
          <Metric value={String(counts[2]).padStart(2, '0')} label="Country" note="Expanding across East Africa" />
          <Metric value={String(counts[3]).padStart(2, '0')} label="Team Members" />
        </div>

        <p className="mx-auto mt-12 max-w-[800px] text-center text-[clamp(0.95rem,1.3vw,1.0625rem)] font-normal leading-8 text-[var(--text-muted)] md:mt-14">
          We don&apos;t measure success by volume. We measure it by the depth of every engagement, the value created, and the outcomes delivered.
        </p>
      </SectionContainer>
    </section>
  );
}
