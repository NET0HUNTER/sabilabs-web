import Image from 'next/image';
import Link from 'next/link';
import FooterSphere from '@/components/canvas/FooterSphere';
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
    <footer className="site-footer relative z-20 isolate overflow-hidden border-t border-[var(--border)] bg-[var(--bg-secondary)] text-white transition-colors duration-300">
      <FooterSphere />
      <SectionContainer className="relative z-10 py-14 md:py-16 lg:py-[clamp(4.5rem,6vw,6rem)]">
        <div className="grid items-start gap-x-[clamp(3rem,5vw,5rem)] gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="SabiLabs home"
              className="inline-flex"
            >
              <Image
                src="/images/logo-transparent.png"
                alt="SabiLabs - Deep Expertise. Secure Execution."
                width={825}
                height={163}
                className="h-auto w-[min(68vw,270px)]"
                style={{ filter: 'drop-shadow(0 0 0.9px rgba(255,255,255,0.75)) drop-shadow(0 5px 14px rgba(0,0,0,0.18))' }}
              />
            </Link>
            <p className="mt-6 max-w-sm text-lg font-semibold leading-7 text-slate-200">
              Understanding Businesses.<br />Engineering Solutions.
            </p>
            <a
              href="mailto:info@sabilabs.co.ke"
              className="mt-5 inline-block max-w-full text-base font-semibold text-[var(--accent-start)] transition-colors hover:text-white [overflow-wrap:anywhere]"
            >
              info@sabilabs.co.ke
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-start)]">Navigation</p>
            <div className="grid gap-3">
              {footerLinks.map(([label, href]) => (
                <Link key={href} href={href} className="w-fit text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          <address className="not-italic">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent-start)]">Contact</p>
            <div className="grid gap-5 text-sm leading-6 text-[var(--text-muted)]">
              <p>Nairobi, Kenya<br />East Africa &amp; Beyond</p>
              <p>
                <a href="tel:+254757041695" className="block transition-colors hover:text-white">+254 757 041 695</a>
                <a href="tel:+254792322034" className="block transition-colors hover:text-white">+254 792 322 034</a>
              </p>
              <p>P.O. Box 79170 &ndash; 00400<br />Nairobi, Kenya</p>
            </div>
          </address>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-8 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 SabiLabs</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
