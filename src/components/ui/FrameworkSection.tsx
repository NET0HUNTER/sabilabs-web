import Link from 'next/link';
import { Eyebrow, SectionContainer } from './Primitives';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the organization, objectives, challenges and operating environment.',
  },
  {
    number: '02',
    title: 'Analyze',
    description: 'Examine existing processes, identify inefficiencies and establish clear business and technical requirements.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Develop the solution architecture aligned with priorities, security considerations and available resources.',
  },
  {
    number: '04',
    title: 'Engineer',
    description: 'Build, configure, integrate and test the required systems.',
  },
  {
    number: '05',
    title: 'Implement',
    description: 'Deploy the solution, support adoption and provide appropriate training and documentation.',
  },
  {
    number: '06',
    title: 'Improve',
    description: 'Evaluate performance, address emerging needs and support continuous improvement.',
  },
];

export default function FrameworkSection({ preview = false }: { preview?: boolean }) {
  return (
    <section id="approach" className="section-shell overflow-hidden font-sans">
      <SectionContainer>
        <header className="section-intro centered !mb-16 md:!mb-20">
          <Eyebrow className="mb-5 font-semibold">Our Approach</Eyebrow>
          <h2 className="editorial-heading uppercase">Understand First. Engineer With Purpose.</h2>
          <p className="editorial-copy mx-auto">Six connected steps keep each engagement grounded in organizational needs, secure execution, and useful outcomes.</p>
        </header>

        <ol className={`grid border-y border-[var(--border)] ${preview ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`border-b border-[var(--border)] py-8 md:px-8 ${index % 2 === 0 ? 'md:border-r' : ''} ${preview && index % 3 !== 2 ? 'md:border-r' : ''} ${preview && index % 3 === 2 ? 'md:border-r-0' : ''} lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">Step {step.number}</p>
              <h3 className="mt-5 text-2xl font-extrabold uppercase tracking-[-0.03em] text-[var(--text-primary)]">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{step.description}</p>
            </li>
          ))}
        </ol>

        {preview ? (
          <div className="mt-10 text-center"><Link href="/methodology" className="button button-secondary">Explore Our Approach <span aria-hidden="true">→</span></Link></div>
        ) : (
          <div className="mt-14 flex flex-col items-start justify-between gap-7 border-t border-[var(--border)] pt-8 md:flex-row md:items-center">
            <p className="max-w-3xl text-base leading-7 text-[var(--text-secondary)]">The sequence is disciplined, but the work is tailored. The depth of each step reflects the organization, the problem, the risks, and the resources available.</p>
            <Link href="/contact" className="button button-primary shrink-0">Start With Discovery <span aria-hidden="true">→</span></Link>
          </div>
        )}
      </SectionContainer>
    </section>
  );
}
