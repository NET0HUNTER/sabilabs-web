import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

export function SectionContainer({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`site-container ${className}`} {...props} />;
}

export function PageMain({ className = '', ...props }: HTMLAttributes<HTMLElement>) {
  return <main className={`relative z-10 min-h-screen overflow-x-hidden bg-transparent pt-[var(--header-height)] noise-bg ${className}`} {...props} />;
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function SectionHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
}

export function SectionIntro({ eyebrow, heading, description, className = '', headingClassName = '', descriptionClassName = '' }: {
  eyebrow: ReactNode;
  heading: ReactNode;
  description?: ReactNode;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={`section-intro centered ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <SectionHeading className={headingClassName}>{heading}</SectionHeading>
      {description ? <p className={`section-copy mx-auto ${descriptionClassName}`}>{description}</p> : null}
    </div>
  );
}

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`sabi-card ${className}`} {...props} />;
}

export function Button({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`button button-primary ${className}`} {...props} />;
}

export function Divider({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`divider ${className}`} />;
}

export function Metric({ value, label, note }: { value: ReactNode; label: string; note?: string }) {
  return (
    <div className="metric">
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
      <div className="metric-note">{note ?? <span aria-hidden="true">&nbsp;</span>}</div>
    </div>
  );
}
