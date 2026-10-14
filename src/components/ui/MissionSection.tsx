import { Card, Divider, Eyebrow, SectionContainer } from './Primitives';

const values = [
  ['Discovery First', 'We understand before we build.'],
  ['Integrity', "We recommend what's right, not what's easy."],
  ['Security', 'Protection is never optional.'],
  ['Partnership', 'Your success is our business model.'],
  ['Excellence', "We deliver work we're proud to stand behind."],
];

export default function MissionSection() {
  return (
    <section id="mission" className="section-shell">
      <SectionContainer>
        <div className="mx-auto max-w-[1050px] text-center">
          <div>
            <Eyebrow>Our Mission</Eyebrow>
            <Divider className="mx-auto mb-8" />
            <p className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-medium leading-[1.45] tracking-[-0.025em] text-white">To help organizations across Africa replace guesswork with clarity, manual work with automation, and risk with resilience — through technology that is understood, secure, and built to last.</p>
          </div>
          <div className="mt-24">
            <Eyebrow>Our Vision</Eyebrow>
            <Divider className="mx-auto mb-8" />
            <p className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-medium leading-[1.45] tracking-[-0.025em] text-white">To become Africa&apos;s most trusted technology and business transformation partner — known for depth of understanding, integrity of execution, and measurable business impact.</p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {values.map(([title, description], index) => (
            <Card key={title} className="text-center lg:px-5">
              <div className="mb-5 text-sm font-bold tracking-[0.14em] text-[var(--accent-start)]">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-6 text-[var(--text-muted)]">{description}</p>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
