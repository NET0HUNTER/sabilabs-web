import Image from 'next/image';
import Link from 'next/link';
import { SectionContainer } from './Primitives';

const footerLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Capabilities', '/capabilities'],
  ['Industries', '/industries'],
  ['Case Studies', '/case-studies'],
  ['Contact', '/contact'],
] as const;

export default function FooterSection() {
  return (
    <footer className="site-footer relative z-20 isolate overflow-hidden border-t border-[var(--brand-shell-border)] transition-colors duration-300">
      <SectionContainer className="relative z-10 py-14 md:py-16 lg:py-[clamp(4.5rem,6vw,6rem)]">
        <div className="grid items-start gap-x-[clamp(3rem,5vw,5rem)] gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="SabiLabs home"
              className="inline-flex"
            >
              <Image src="/images/logo-wordmark-transparent.png" alt="Sabi Labs official logo" width={536} height={122} className="brand-logo-light nav-logo h-auto w-[min(68vw,240px)]" />
              <Image src="/images/logo-wordmark-blue-dark.png" alt="" width={536} height={122} className="brand-logo-dark nav-logo h-auto w-[min(68vw,240px)]" />
            </Link>
            <p className="mt-6 max-w-sm text-lg font-semibold leading-7 text-[var(--brand-shell-text)]">
              Understanding Businesses.<br />Engineering Solutions.
            </p>
            <a
              href="mailto:info@sabilabs.co.ke"
              className="mt-5 inline-block max-w-full text-base font-semibold text-[var(--brand-chrome-accent)] transition-colors hover:text-[var(--brand-chrome-hover)] [overflow-wrap:anywhere]"
            >
              info@sabilabs.co.ke
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-chrome-accent)]">Navigation</p>
            <div className="grid gap-3">
              {footerLinks.map(([label, href]) => (
                <Link key={href} href={href} className="w-fit text-sm font-semibold text-[var(--brand-shell-muted)] transition-colors hover:text-[var(--brand-chrome-accent)]">
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          <address className="not-italic">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-chrome-accent)]">Contact</p>
            <div className="grid gap-5 text-sm leading-6 text-[var(--brand-shell-muted)]">
              <p>Nairobi, Kenya<br />East Africa &amp; Beyond</p>
              <p>
                <a href="tel:+254757041695" className="block transition-colors hover:text-[var(--brand-chrome-accent)]">+254 757 041 695</a>
                <a href="tel:+254792322034" className="block transition-colors hover:text-[var(--brand-chrome-accent)]">+254 792 322 034</a>
              </p>
              <p>P.O. Box 79170 &ndash; 00400<br />Nairobi, Kenya</p>
            </div>
          </address>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--brand-shell-border)] pt-8 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--brand-shell-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 SabiLabs</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-[var(--brand-chrome-accent)]">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-[var(--brand-chrome-accent)]">Terms</Link>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
