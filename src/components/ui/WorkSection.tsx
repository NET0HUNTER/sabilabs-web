import Link from 'next/link';
import { caseStudies } from '@/lib/siteContent';
import { SectionContainer, SectionIntro } from './Primitives';

export default function WorkSection({ preview = false }: { preview?: boolean }) {
  const visibleStudies = preview ? caseStudies.slice(0, 2) : caseStudies;

  return (
    <section id="case-studies" className={`section-shell ${preview ? 'home-section' : ''}`}>
      <SectionContainer>
        <SectionIntro
          eyebrow={preview ? 'Case Studies' : 'Client-Built Systems · Case Studies'}
          heading={<>Real Operations. Real Challenges. <span className="text-[var(--accent)]">Purpose-Built Systems.</span></>}
          description={preview
            ? 'See how SabiLabs turns operational requirements into practical technology solutions.'
            : 'These are tailored client engagements, not off-the-shelf SabiLabs products. Each case study begins with a specific operating context and documented requirements.'}
        />

        <div className={`grid gap-7 ${preview ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}>
          {visibleStudies.map((study, index) => (
            <article key={study.slug} className="sabi-card flex flex-col">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]">{study.industry}</p>
                <span className="text-xs font-bold tracking-[0.14em] text-[var(--text-tertiary)]">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-7 text-3xl font-bold leading-tight tracking-[-0.04em] text-[var(--text-primary)]">{study.title}</h3>
              {preview ? (
                <>
                  <p className="mt-6 text-base leading-7 text-[var(--text-secondary)]">{study.solution}</p>
                  <StudyLine label="Outcome" value={study.results[0]} accent />
                </>
              ) : (
                <>
                  <StudyLine label="Challenge" value={study.challenge} />
                  <StudyLine label="Solution" value={study.solution} />
                  <StudyLine label="Outcome" value={study.results.join(' · ')} accent />
                </>
              )}
              <Link href={`/case-studies/${study.slug}`} className="ui-link mt-auto pt-8 text-xs font-bold uppercase tracking-[0.14em] transition-colors">
                View case study <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        {preview ? <div className="mt-10 text-center"><Link href="/case-studies" className="button button-secondary">View All Case Studies <span aria-hidden="true">→</span></Link></div> : null}
      </SectionContainer>
    </section>
  );
}

function StudyLine({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="mt-7 border-t border-[var(--border)] pt-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-tertiary)]">{label}</p>
      <p className={`mt-2 text-[15px] leading-6 ${accent ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>{value}</p>
    </div>
  );
}
