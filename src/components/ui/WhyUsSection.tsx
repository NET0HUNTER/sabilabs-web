'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, Eyebrow, SectionContainer, SectionHeading } from './Primitives';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  ['Strategy Before Software', 'We invest time understanding your business before proposing a single technology decision.'],
  ['Security by Design', 'Every system we build has security woven into its architecture — not bolted on as an afterthought.'],
  ['Business-First Thinking', 'We measure success by your operational outcomes, not lines of code delivered.'],
  ['Scalable Infrastructure', "We build systems designed to handle your growth seamlessly, ensuring you don't need a costly rebuild in two years."],
  ['Transparent Communication', 'No black boxes. Regular progress updates, demos, and honest conversations about trade-offs.'],
  ['Vendor-Neutral Recommendations', "We recommend the right technology for your problem — not the technology we're most comfortable with."],
  ['Long-Term Partnerships', "We don't disappear after deployment. We stay, optimize, and grow with your business."],
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.principle-card').forEach((el) => gsap.from(el, { y: 24, opacity: 0, duration: .65, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
  }, { scope: sectionRef });

  return (
    <section id="why-us" ref={sectionRef} className="section-shell">
      <SectionContainer>
        <div className="section-intro centered">
          <Eyebrow>Why SabiLabs</Eyebrow>
          <SectionHeading>Not the Right Fit for Everyone.</SectionHeading>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">And that&apos;s the point.</p>
        </div>

        <Card className="mx-auto mb-12 max-w-4xl border-l-2 border-l-[var(--accent-start)] md:p-10">
          <p className="text-lg leading-8 text-slate-200">If you&apos;re looking for a technology partner who will challenge your assumptions, understand your business deeply, and build solutions that create long-term value — let&apos;s talk.</p>
          <Link href="/contact" className="mt-6 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-start)]">Start the conversation →</Link>
        </Card>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {differentiators.map(([title, description], index) => (
            <Card key={title} className={`principle-card flex min-h-[250px] flex-col ${index === 6 ? 'md:col-start-1 md:translate-x-[calc(50%+14px)]' : ''}`}>
              <span className="mb-8 text-sm font-bold tracking-[0.14em] text-[var(--accent-start)]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mb-3 text-2xl font-bold tracking-[-0.03em] text-white">{title}</h3>
              <p className="mt-auto text-[16px] leading-7 text-[var(--text-muted)]">{description}</p>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
