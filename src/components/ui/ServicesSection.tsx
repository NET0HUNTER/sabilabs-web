import Link from 'next/link';
import { capabilities } from '@/lib/siteContent';
import { SectionContainer, SectionIntro } from './Primitives';

export default function ServicesSection({ preview = false }: { preview?: boolean }) {
  const visibleCapabilities = preview ? capabilities.slice(0, 3) : capabilities;

  return (
    <section id="capabilities" className={`section-shell overflow-hidden ${preview ? 'home-section' : ''}`}>
      <SectionContainer>
        <SectionIntro
          eyebrow={preview ? 'What We Do' : 'Business Capabilities'}
          heading={preview ? 'Technology That Starts With the Business.' : 'From Operational Reality to Working Digital Systems.'}
          description={preview
            ? 'We combine strategic clarity, engineering, and automation to improve how organizations operate.'
            : 'Every capability follows the same discipline: understand the business problem, provide the right expertise, and stay accountable to the operational outcome.'}
        />

        {preview ? (
          <>
            <div className="grid gap-5 md:grid-cols-3">
              {visibleCapabilities.map((capability) => (
                <article key={capability.id} className="glass-tile group flex min-h-[260px] flex-col p-7 md:p-8">
                  <p className="text-xs font-bold tracking-[0.16em] text-[var(--accent)]">{capability.number}</p>
                  <h3 className="mt-5 text-2xl font-bold leading-tight tracking-[-0.03em] text-[var(--text-primary)]">{capability.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{capability.summary}</p>
                  <Link href={`/capabilities#${capability.id}`} className="ui-link mt-auto inline-flex pt-7 text-xs font-bold uppercase tracking-[0.13em] transition-colors">
                    Explore <span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center"><Link href="/capabilities" className="button button-secondary">View All Capabilities <span aria-hidden="true">→</span></Link></div>
          </>
        ) : (
          <div>
            {visibleCapabilities.map((capability, index) => (
              <article id={capability.id} key={capability.id} className={`scroll-mt-28 py-12 md:py-16 ${index < visibleCapabilities.length - 1 ? 'border-b border-[var(--border)]' : ''} ${index % 2 === 1 ? 'glass-panel my-7 px-6 md:px-10' : ''}`}>
                <header className="grid gap-5 lg:grid-cols-[90px_minmax(0,1fr)_minmax(280px,.7fr)] lg:gap-10">
                  <p className="text-sm font-bold tracking-[0.16em] text-[var(--accent)]">{capability.number}</p>
                  <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.35rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--text-primary)]">{capability.title}</h2>
                  <p className="text-lg leading-8 text-[var(--text-secondary)]">{capability.summary}</p>
                </header>

                <div className="mt-12 grid gap-8 lg:ml-[130px] lg:grid-cols-3">
                  <CapabilityList title="Business problems" items={capability.businessProblems} />
                  <CapabilityList title="Services provided" items={capability.services} />
                  <CapabilityList title="Expected outcomes" items={capability.outcomes} accent />
                </div>
              </article>
            ))}
          </div>
        )}
      </SectionContainer>
    </section>
  );
}

function CapabilityList({ title, items, accent = false }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div className="border-t border-[var(--border)] pt-6">
      <h3 className={`text-xs font-bold uppercase tracking-[0.15em] ${accent ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'}`}>{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-6 text-[var(--text-secondary)]">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
