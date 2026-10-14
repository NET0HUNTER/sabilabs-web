import Link from 'next/link';
import { SectionContainer } from './Primitives';

const footerLinks = [
  ['Home', '/'],
  ['Services', '/services'],
  ['How We Work', '/methodology'],
  ['Projects', '/projects'],
  ['Products', '/products'],
  ['About', '/about'],
  ['Contact', '/contact'],
] as const;

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-secondary)] py-10 text-white transition-colors duration-300 md:py-12">
      <SectionContainer className="relative z-10">
        <div className="pb-8 md:pb-10">
          <p className="eyebrow">Start a Project</p>
          <h2 className="max-w-4xl text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-white">Have a business problem worth solving?</h2>
          <a href="mailto:contact@sabilabs.co.ke" className="mt-5 inline-block max-w-full break-words text-[clamp(1.4rem,3.2vw,3rem)] font-semibold leading-tight tracking-[-0.035em] text-[var(--accent-start)] transition-colors hover:text-white [overflow-wrap:anywhere]">contact@sabilabs.co.ke</a>
        </div>

        <div className="grid gap-8 border-t border-[var(--border)] py-7 md:grid-cols-2 md:items-start md:gap-9 lg:grid-cols-[0.8fr_1.2fr_auto]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-start)]">Nairobi, Kenya</p>
            <p className="text-base leading-7 text-[var(--text-muted)]">+254 700 000 000<br />East Africa &amp; Beyond</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-7 gap-y-4 sm:grid-cols-3" aria-label="Footer navigation">
            {footerLinks.map(([label, href]) => <Link key={href} href={href} className="text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--accent-start)]">{label}</Link>)}
          </nav>

          <Link href="/contact" className="button button-secondary w-fit md:col-span-2 lg:col-span-1">Book a Consultation <span aria-hidden="true">→</span></Link>
        </div>

        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-end sm:justify-between md:py-8">
          <Link href="/" aria-label="SabiLabs home" className="block whitespace-nowrap text-[clamp(3.25rem,7.5vw,7rem)] font-extrabold leading-[0.78] tracking-[-0.075em] text-white">Sabi<span className="text-[var(--accent-start)]">Labs</span></Link>
          <p className="max-w-xs text-base leading-7 text-[var(--text-muted)] sm:text-right">Understanding Businesses.<br />Engineering Solutions.</p>
        </div>

        <div className="flex flex-col gap-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 SabiLabs</span>
          <div className="flex gap-6"><Link href="/privacy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms</Link></div>
        </div>
      </SectionContainer>
      <div aria-hidden="true" className="footer-glow absolute -bottom-32 left-[10%] h-64 w-64 rounded-full blur-[100px]" />
    </footer>
  );
}
