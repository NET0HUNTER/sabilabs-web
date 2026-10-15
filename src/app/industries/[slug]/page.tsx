import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getIndustry, industries } from '@/lib/siteContent';
import { Eyebrow, PageMain, SectionContainer } from '@/components/ui/Primitives';

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<'/industries/[slug]'>): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  return industry ? { title: `${industry.title} | SabiLabs`, description: industry.summary } : {};
}

export default async function IndustryPage({ params }: PageProps<'/industries/[slug]'>) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();

  return (
    <PageMain>
      <section className="section-shell">
        <SectionContainer>
          <div className="mx-auto max-w-5xl text-center">
            <Eyebrow>Industry Focus</Eyebrow>
            <h1 className="editorial-heading">{industry.title}</h1>
            <p className="section-copy mx-auto">{industry.summary}</p>
          </div>
        </SectionContainer>
      </section>

      <section className="section-shell border-y border-[var(--border)]">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[minmax(260px,.7fr)_minmax(0,1.3fr)] lg:gap-20">
            <div>
              <Eyebrow>Operational Context</Eyebrow>
              <h2 className="section-heading">Understand the environment before defining the system.</h2>
            </div>
            <p className="text-xl leading-9 text-slate-200">{industry.operationalContext}</p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            <DetailBlock number="01" title="Common challenges" items={industry.challenges} />
            <DetailBlock number="02" title="What SabiLabs studies" items={industry.studies} />
            <DetailBlock number="03" title="Systems that may be appropriate" items={industry.systems} note="The right system is defined around each organization’s requirements; these are possible directions, not pre-packaged products." />
            <DetailBlock number="04" title="Expected business outcomes" items={industry.outcomes} accent />
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[var(--border)] pt-8 md:flex-row md:items-center">
            <p className="max-w-2xl text-base leading-7 text-[var(--text-muted)]">Our approach combines process discovery, stakeholder workshops, requirements analysis, security and compliance assessment, and system architecture.</p>
            <Link href="/contact" className="button button-primary shrink-0">Discuss Your Environment <span aria-hidden="true">→</span></Link>
          </div>
        </SectionContainer>
      </section>
    </PageMain>
  );
}

function DetailBlock({ number, title, items, note, accent = false }: { number: string; title: string; items: string[]; note?: string; accent?: boolean }) {
  return (
    <article className="sabi-card">
      <p className="text-xs font-bold tracking-[0.16em] text-[var(--accent-start)]">{number}</p>
      <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white">{title}</h3>
      {note ? <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">{note}</p> : null}
      <ul className="mt-6 grid gap-3">
        {items.map((item) => <li key={item} className={`flex gap-3 text-[15px] leading-6 ${accent ? 'text-slate-200' : 'text-[var(--text-muted)]'}`}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-start)]" />{item}</li>)}
      </ul>
    </article>
  );
}
