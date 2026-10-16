import { Divider, Eyebrow, SectionContainer } from './Primitives';

const values = [
  ['Excellence', 'We apply care, rigor, and high standards from discovery through delivery.'],
  ['Integrity', 'We communicate honestly and recommend what best serves the organization.'],
  ['Collaboration', 'We work with stakeholders as one accountable team.'],
  ['Innovation', 'We use appropriate ideas and technologies to solve meaningful problems.'],
  ['Security and Trust', 'We protect systems, information, and client confidence by design.'],
  ['Client-Centered Thinking', 'We shape every solution around real needs, constraints, and goals.'],
];

export default function MissionSection() {
  return (
    <>
      <section id="overview" className="section-shell border-y border-[var(--border)]">
        <SectionContainer>
          <div className="glass-panel-strong grid gap-10 p-7 md:p-10 lg:grid-cols-[minmax(240px,.65fr)_minmax(0,1.35fr)] lg:gap-20 lg:p-12">
            <div>
              <Eyebrow>Company Overview</Eyebrow>
              <h2 className="section-heading">Understand the Organization. Then Engineer the Solution.</h2>
            </div>
            <div className="grid gap-6 text-lg leading-8 text-[var(--text-secondary)]">
              <p>Sabi Labs Limited brings business analysis, software engineering, data intelligence, systems integration, and technology consultancy together in one team.</p>
              <p>Effective technology begins with understanding how a business operates. We examine its processes, operational challenges, financial requirements, data flows, reporting needs, security requirements, and strategic objectives before recommending or building a solution.</p>
            </div>
          </div>
        </SectionContainer>
      </section>

      <section id="mission" className="section-shell">
        <SectionContainer>
          <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Our Vision</Eyebrow>
              <Divider className="mb-8" />
              <p className="text-[clamp(1.35rem,2.1vw,1.9rem)] font-medium leading-[1.5] tracking-[-0.025em] text-[var(--text-primary)]">To be a trusted global partner in business technology and intelligence, empowering organizations to transform how they operate, make decisions, and create value through secure, intelligent, and adaptable digital systems.</p>
            </div>
            <div>
              <Eyebrow>Our Mission</Eyebrow>
              <Divider className="mb-8" />
              <p className="text-[clamp(1.35rem,2.1vw,1.9rem)] font-medium leading-[1.5] tracking-[-0.025em] text-[var(--text-primary)]">To understand the unique operational needs of every organization we serve and translate them into secure, intelligent, and tailored digital solutions that improve efficiency, strengthen decision-making, and enable sustainable growth.</p>
            </div>
          </div>

          <div className="mt-24 border-y border-[var(--border)] py-12 md:py-16">
            <div className="mx-auto max-w-5xl text-center">
              <Eyebrow>Our Tagline</Eyebrow>
              <h2 className="section-heading">Deep Expertise, Secure Execution.</h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2 md:gap-14">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Deep Expertise</h3>
                <p className="mt-4 leading-7 text-[var(--text-secondary)]">Business-process understanding, financial and operational insight, software engineering, data intelligence, and technology consultancy applied together.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Secure Execution</h3>
                <p className="mt-4 leading-7 text-[var(--text-secondary)]">Security, quality, accountability, reliability, responsible data handling, and long-term value considered throughout every engagement.</p>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="section-intro centered">
              <Eyebrow>Core Values</Eyebrow>
              <h2 className="section-heading">The Principles Behind the Work.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(([title, description], index) => (
                <article key={title} className="glass-tile p-6 md:p-7">
                  <p className="text-xs font-bold tracking-[0.16em] text-[var(--accent)]">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-5 text-xl font-bold text-[var(--text-primary)]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
