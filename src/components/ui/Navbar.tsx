'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { themes, type Theme, useTheme } from '../providers/ThemeProvider';
import { SectionContainer } from './Primitives';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Industries', href: '/industries' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <nav className={`site-nav fixed inset-x-0 top-0 z-50 h-[var(--header-height)] border-b transition-all duration-300 ${isScrolled ? 'is-scrolled' : ''}`}>
        <SectionContainer className="flex h-full items-center justify-between gap-5">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="SabiLabs home"
          >
            <Image
              src={theme === 'white' ? '/images/logo-wordmark-transparent.png' : '/images/logo-wordmark-blue-dark.png'}
              alt="Sabi Labs official logo"
              width={536}
              height={122}
              priority
              className="nav-logo h-9 w-auto sm:h-10"
            />
          </Link>

          <div className="navbar-desktop hidden items-center xl:flex">
            <div className="navbar-links flex items-center">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`navbar-link group relative inline-flex min-h-10 items-center text-[11px] font-semibold uppercase tracking-[0.11em] transition-colors ${active ? 'text-[var(--brand-chrome-accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                  >
                    {link.name}
                    <span className={`navbar-active-indicator absolute left-1/2 bottom-0.5 h-px w-[68%] -translate-x-1/2 bg-[var(--brand-chrome-accent)] transition-transform ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </Link>
                );
              })}
            </div>

            <div className="navbar-theme-cluster flex min-h-10 items-center border-l border-[var(--brand-shell-border)]">
              <ThemeSwitcher />
            </div>

            <Link href="/contact" className="navbar-cta button min-h-10 px-5 py-2 text-[11px]">Book a Consultation</Link>
          </div>

          <button className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--brand-shell-border)] bg-[var(--glass-surface)] xl:hidden" onClick={() => setIsMobileMenuOpen((open) => !open)} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" aria-label="Toggle menu">
            <motion.span animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="h-0.5 w-5 bg-[var(--text-primary)]" />
            <motion.span animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="h-0.5 w-5 bg-[var(--text-primary)]" />
            <motion.span animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="h-0.5 w-5 bg-[var(--text-primary)]" />
          </button>
        </SectionContainer>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div id="mobile-navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mobile-navigation fixed inset-0 z-40 flex flex-col items-center justify-center gap-5 px-6 pt-[var(--header-height)] xl:hidden">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} aria-current={active ? 'page' : undefined} className={`text-2xl font-bold uppercase tracking-[-0.03em] transition-colors ${active ? 'text-[var(--brand-chrome-accent)]' : 'text-[var(--text-primary)] hover:text-[var(--brand-chrome-accent)]'}`}>{link.name}</Link>
              );
            })}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="navbar-mobile-cta button button-primary mt-3">Book a Consultation</Link>
            <ThemeSwitcher className="mt-2" />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

const themeLabels: Record<Theme, string> = {
  white: 'White',
  blue: 'Blue',
  green: 'Green',
};

function ThemeSwitcher({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`theme-switcher ${className}`} role="group" aria-label="Choose colour theme">
      {themes.map((option) => (
        <button
          key={option}
          type="button"
          aria-label={`Use ${themeLabels[option].toLowerCase()} theme`}
          aria-pressed={theme === option}
          title={`${themeLabels[option]} theme`}
          onClick={() => setTheme(option)}
          className={`theme-swatch theme-swatch-${option} ${theme === option ? 'is-active' : ''}`}
        />
      ))}
    </div>
  );
}
