import Link from 'next/link';
import { Eyebrow, SectionContainer } from './Primitives';

const principles = [
  ['Business first', 'Operational and strategic realities define the technology direction.'],
  ['Secure by design', 'Security and responsible data handling are considered from the start.'],
  ['One accountable team', 'Business, financial, process, data, security, and engineering perspectives stay connected.'],
  ['Built for change', 'Solutions are designed to remain useful as the organization evolves.'],
];

export default function WhyUsSection() {
  return (
    <section id="commitment" className="section-shell border-y border-[var(--border)]">
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,.75fr)] lg:gap-20">
          <div>
            <Eyebrow>Our Commitment</Eyebrow>
            <h2 className="section-heading">Technology Should Fit the Organization.</h2>
            <p className="mt-8 max-w-3xl text-[clamp(1.2rem,2vw,1.65rem)] leading-[1.55] text-[var(--text-primary)]">Sabi Labs does not believe in forcing organizations to adapt to technology that does not fit their operations.</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">We first understand the organization, then engineer technology around its needs. That principle keeps decisions grounded in operational, financial, technical, data, and security requirements—not a predetermined product.</p>
            <Link href="/contact" className="button button-primary mt-9">Book a Consultation <span aria-hidden="true">→</span></Link>
          </div>
          <div className="border-y border-[var(--border)]">
            {principles.map(([title, description], index) => (
              <div key={title} className="grid grid-cols-[38px_minmax(0,1fr)] gap-4 border-b border-[var(--border)] py-6 last:border-b-0">
                <span className="text-xs font-bold tracking-[0.14em] text-[var(--accent)]">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
