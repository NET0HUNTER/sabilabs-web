import Link from 'next/link';
import type { ReactNode } from 'react';

type ShowcaseDetail = {
  label: string;
  value: ReactNode;
  accent?: 'cyan' | 'muted';
};

type ShowcaseCardProps = {
  sequence: string;
  kind: 'Case Study' | 'Product';
  category: string;
  title: string;
  description: ReactNode;
  details?: ShowcaseDetail[];
  secondary?: ReactNode;
  ctaLabel: string;
  href: string;
  className?: string;
};

const detailColours = {
  cyan: 'text-[var(--cyan)]',
  muted: 'text-slate-400',
};

export function ShowcaseGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">{children}</div>;
}

export default function ShowcaseCard({
  sequence,
  kind,
  category,
  title,
  description,
  details = [],
  secondary,
  ctaLabel,
  href,
  className = '',
}: ShowcaseCardProps) {
  return (
    <article className={`group flex min-h-[460px] flex-col rounded-[var(--radius-card)] border border-[var(--border)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--surface-strong)_72%,transparent),color-mix(in_srgb,var(--bg-primary)_94%,transparent))] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.14)] transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[0_24px_56px_rgba(0,0,0,0.2)] sm:p-8 ${className}`}>
      <div className="flex items-center justify-between gap-6 border-b border-white/[0.07] pb-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-start)]">{kind}</span>
        <span className="text-sm font-semibold tracking-[0.12em] text-slate-500">{sequence}</span>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[var(--accent-soft)]">{category}</p>
        <h3 className="mt-3 text-[clamp(1.5rem,2.2vw,2rem)] font-bold leading-[1.12] tracking-[-0.035em] text-white">{title}</h3>
        <div className="mt-4 text-[16px] leading-7 text-[var(--text-muted)]">{description}</div>

        {details.length ? (
          <dl className="mt-6 divide-y divide-white/[0.07] border-t border-white/[0.07]">
            {details.map((detail) => (
              <div key={detail.label} className="grid gap-2 py-4 sm:grid-cols-[82px_minmax(0,1fr)] sm:gap-5">
                <dt className={`text-[11px] font-bold uppercase tracking-[0.14em] ${detailColours[detail.accent ?? 'muted']}`}>{detail.label}</dt>
                <dd className="text-sm leading-6 text-slate-300">{detail.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {secondary ? <div className="mt-6 border-t border-white/[0.07] pt-5">{secondary}</div> : null}

        <Link href={href} className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors group-hover:text-[var(--accent-start)]">
          {ctaLabel}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
