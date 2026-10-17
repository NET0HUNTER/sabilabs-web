import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy } from '@/lib/siteContent';
import { Eyebrow, PageMain, SectionContainer } from '@/components/ui/Primitives';
import { createPageMetadata, safeJsonLd, SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<'/case-studies/[slug]'>): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  return study ? createPageMetadata({
    title: `${study.title} Case Study | Sabi Labs`,
    description: study.challenge,
    path: `/case-studies/${study.slug}`,
  }) : {};
}

export default async function CaseStudyPage({ params }: PageProps<'/case-studies/[slug]'>) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SITE_URL}/case-studies` },
      { '@type': 'ListItem', position: 3, name: study.title, item: `${SITE_URL}/case-studies/${study.slug}` },
    ],
  };

  return (
    <PageMain>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />
      <article>
        <header className="section-shell">
          <SectionContainer>
            <div className="mx-auto max-w-5xl text-center">
              <Eyebrow>{study.industry} / Case Study</Eyebrow>
              <h1 className="editorial-heading">{study.title}</h1>
              <p className="section-copy mx-auto">A purpose-built response to a real operational requirement.</p>
            </div>
          </SectionContainer>
        </header>

        <section className="section-shell border-y border-[var(--border)]">
          <SectionContainer>
            <div className="mx-auto max-w-5xl">
              <NarrativeBlock number="01" title="Client context"><p>{study.clientContext}</p></NarrativeBlock>
              <NarrativeBlock number="02" title="Operational challenge"><p>{study.challenge}</p></NarrativeBlock>
              <NarrativeBlock number="03" title="Requirements"><BulletList items={study.requirements} /></NarrativeBlock>
              <NarrativeBlock number="04" title="Approach"><p>{study.approach}</p></NarrativeBlock>
              <NarrativeBlock number="05" title="Solution developed"><p>{study.solution}</p></NarrativeBlock>
              <NarrativeBlock number="06" title="Implementation"><p>{study.implementation}</p></NarrativeBlock>
              <NarrativeBlock number="07" title="Results" last><BulletList items={study.results} accent /></NarrativeBlock>
            </div>

            <div className="mx-auto mt-16 flex max-w-5xl flex-col items-start justify-between gap-6 border-t border-[var(--border)] pt-8 md:flex-row md:items-center">
              <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)]">Facing a similar operational challenge? Start with the context—not a predetermined product.</p>
              <Link href="/contact" className="button button-primary shrink-0">Book a Consultation <span aria-hidden="true">→</span></Link>
            </div>
          </SectionContainer>
        </section>
      </article>
    </PageMain>
  );
}

function NarrativeBlock({ number, title, children, last = false }: { number: string; title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <section className={`grid gap-5 py-10 md:grid-cols-[90px_240px_minmax(0,1fr)] md:gap-8 md:py-14 ${last ? '' : 'border-b border-[var(--border)]'}`}>
      <p className="text-xs font-bold tracking-[0.16em] text-[var(--accent)]">{number}</p>
      <h2 className="text-xl font-bold uppercase tracking-[-0.02em] text-[var(--text-primary)]">{title}</h2>
      <div className="text-lg leading-8 text-[var(--text-secondary)]">{children}</div>
    </section>
  );
}

function BulletList({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return <ul className="grid gap-3">{items.map((item) => <li key={item} className={`flex gap-3 ${accent ? 'text-[var(--text-primary)]' : ''}`}><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />{item}</li>)}</ul>;
}
