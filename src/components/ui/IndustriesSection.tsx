import Link from 'next/link';
import { industries } from '@/lib/siteContent';
import { SectionContainer, SectionIntro } from './Primitives';

export default function IndustriesSection({ preview = false }: { preview?: boolean }) {
  const previewSlugs = ['government-public-institutions', 'enterprise-distribution', 'ngos-development', 'education'];
  const visibleIndustries = preview ? industries.filter((industry) => previewSlugs.includes(industry.slug)) : industries;

  return (
    <section id="industries" className={`section-shell border-y border-[var(--border)] ${preview ? 'home-section' : ''}`}>
      <SectionContainer>
        <SectionIntro
          eyebrow={preview ? 'Who We Work With' : 'Industries'}
          heading={preview ? 'Different Organizations. Different Operational Realities.' : 'Built Around How Your Organization Works.'}
          description={preview
            ? 'We first understand the organization, its constraints, and the outcomes that matter.'
            : 'We do not force the same technology onto every organization. We first understand the operating environment, its constraints, and the outcomes that matter.'}
        />

        <div className={`grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 ${preview ? 'xl:grid-cols-4' : 'xl:grid-cols-3'}`}>
          {visibleIndustries.map((industry, index) => (
            <article key={industry.slug} className={`group flex flex-col bg-[var(--bg-primary)] p-7 transition-colors hover:bg-[var(--surface)] md:p-8 ${preview ? 'min-h-[190px]' : 'min-h-[250px]'}`}>
              <p className="text-xs font-bold tracking-[0.16em] text-[var(--accent-start)]">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-white">{industry.shortTitle}</h3>
              {!preview ? <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)]">{industry.summary}</p> : null}
              <Link href={`/industries/${industry.slug}`} className="mt-auto pt-7 text-xs font-bold uppercase tracking-[0.13em] text-[var(--accent-start)] transition-colors hover:text-white">
                Explore industry <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        {preview ? <div className="mt-10 text-center"><Link href="/industries" className="button button-secondary">Explore Industries <span aria-hidden="true">→</span></Link></div> : null}
      </SectionContainer>
    </section>
  );
}
