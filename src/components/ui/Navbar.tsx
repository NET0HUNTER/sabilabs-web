'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../providers/ThemeProvider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-24 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-1 font-black text-xl uppercase tracking-tighter">
            <span className="text-white">Sabi</span>
            <span className="text-[var(--accent-start)]">Labs</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold tracking-widest uppercase text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 border-l border-slate-700 pl-6">
              <button
                onClick={() => setTheme('gold')}
                aria-label="Set Gold Theme"
                className={`w-3 h-3 rounded-full bg-[#c5a059] transition-transform ${
                  theme === 'gold' ? 'scale-150 ring-2 ring-white/50' : ''
                }`}
              />
              <button
                onClick={() => setTheme('blue')}
                aria-label="Set Blue Theme"
                className={`w-3 h-3 rounded-full bg-[#00b4d8] transition-transform ${
                  theme === 'blue' ? 'scale-150 ring-2 ring-white/50' : ''
                }`}
              />
              <button
                onClick={() => setTheme('emerald')}
                aria-label="Set Emerald Theme"
                className={`w-3 h-3 rounded-full bg-[#2ecc71] transition-transform ${
                  theme === 'emerald' ? 'scale-150 ring-2 ring-white/50' : ''
                }`}
              />
            </div>

            <a
              href="#contact"
              className="relative overflow-hidden px-6 py-2.5 rounded-full text-xs tracking-widest uppercase font-bold text-white transition-all group ml-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[1px] bg-[var(--bg-dark)] rounded-full" />
              <span className="relative z-10 flex items-center gap-2">
                Book a Consultation
              </span>
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white transition-transform"
            />
            <motion.div
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white transition-opacity"
            />
            <motion.div
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white transition-transform"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-black uppercase tracking-tighter text-white"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => { setTheme('gold'); setIsMobileMenuOpen(false); }}
                className={`w-5 h-5 rounded-full bg-[#c5a059] ${theme === 'gold' ? 'ring-2 ring-white' : ''}`}
              />
              <button
                onClick={() => { setTheme('blue'); setIsMobileMenuOpen(false); }}
                className={`w-5 h-5 rounded-full bg-[#00b4d8] ${theme === 'blue' ? 'ring-2 ring-white' : ''}`}
              />
              <button
                onClick={() => { setTheme('emerald'); setIsMobileMenuOpen(false); }}
                className={`w-5 h-5 rounded-full bg-[#2ecc71] ${theme === 'emerald' ? 'ring-2 ring-white' : ''}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
