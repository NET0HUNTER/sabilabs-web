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
          headingLevel={preview ? 'h2' : 'h1'}
          eyebrow={preview ? 'Who We Work With' : 'Industries'}
          heading={preview ? 'Different Organizations. Different Operational Realities.' : 'Built Around How Your Organization Works.'}
          description={preview
            ? 'We first understand the organization, its constraints, and the outcomes that matter.'
            : 'We do not force the same technology onto every organization. We first understand the operating environment, its constraints, and the outcomes that matter.'}
        />

        <div className={`grid gap-4 md:grid-cols-2 ${preview ? 'xl:grid-cols-4' : 'xl:grid-cols-3'}`}>
          {visibleIndustries.map((industry, index) => (
            <article key={industry.slug} className={`glass-tile group flex flex-col p-6 md:p-7 ${preview ? 'min-h-[180px]' : 'min-h-[235px]'}`}>
              <p className="text-xs font-bold tracking-[0.16em] text-[var(--accent)]">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-[var(--text-primary)]">{industry.shortTitle}</h3>
              {!preview ? <p className="mt-4 text-[15px] leading-7 text-[var(--text-secondary)]">{industry.summary}</p> : null}
              <Link href={`/industries/${industry.slug}`} className="ui-link mt-auto pt-7 text-xs font-bold uppercase tracking-[0.13em] transition-colors">
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
