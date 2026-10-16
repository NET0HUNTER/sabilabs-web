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
  cyan: 'text-[var(--accent)]',
  muted: 'text-[var(--text-secondary)]',
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
    <article className={`group flex min-h-[420px] flex-col rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-hover)] sm:p-8 ${className}`}>
      <div className="flex items-center justify-between gap-6 border-b border-[var(--border)] pb-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{kind}</span>
        <span className="text-sm font-semibold tracking-[0.12em] text-[var(--text-tertiary)]">{sequence}</span>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">{category}</p>
        <h3 className="mt-3 text-[clamp(1.5rem,2.2vw,2rem)] font-bold leading-[1.12] tracking-[-0.035em] text-[var(--text-primary)]">{title}</h3>
        <div className="mt-4 text-[16px] leading-7 text-[var(--text-secondary)]">{description}</div>

        {details.length ? (
          <dl className="mt-6 divide-y divide-[var(--border)] border-t border-[var(--border)]">
            {details.map((detail) => (
              <div key={detail.label} className="grid gap-2 py-4 sm:grid-cols-[82px_minmax(0,1fr)] sm:gap-5">
                <dt className={`text-[11px] font-bold uppercase tracking-[0.14em] ${detailColours[detail.accent ?? 'muted']}`}>{detail.label}</dt>
                <dd className="text-sm leading-6 text-[var(--text-secondary)]">{detail.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {secondary ? <div className="mt-6 border-t border-[var(--border)] pt-5">{secondary}</div> : null}

        <Link href={href} className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
          {ctaLabel}
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
