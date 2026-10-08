'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!headlineRef.current || !taglineRef.current) return;

    // Split text into lines, words, and characters
    const headlineSplit = new SplitType(headlineRef.current, { types: 'words,chars' });
    const taglineSplit = new SplitType(taglineRef.current, { types: 'lines' });

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Initial fade in for the container
    tl.to(containerRef.current, { opacity: 1, duration: 0.1 })
      // Animate headline characters
      .from(headlineSplit.chars, {
        y: 100,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 1.2,
      })
      // Animate tagline lines
      .from(taglineSplit.lines, {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      }, "-=0.8");

    return () => {
      headlineSplit.revert();
      taglineSplit.revert();
    };
  }, { scope: containerRef });

  // Magnetic Button Physics
  const btnRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero" ref={containerRef} className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 pointer-events-none opacity-0">
      <div className="text-center max-w-5xl mx-auto mix-blend-difference pointer-events-auto">
        <h1 
          ref={headlineRef} 
          className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          We Don't Build Software. We Solve Business Problems.
        </h1>
        <p ref={taglineRef} className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
          Strategy-led technology consulting for organizations ready to move beyond spreadsheets, disconnected systems, and guesswork.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <motion.a
            href="#contact"
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-10 py-5 rounded-full text-sm tracking-widest uppercase font-semibold text-white transition-all group inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[1px] bg-[var(--bg-dark)] rounded-full" />
            <span className="relative z-10 flex items-center gap-2">
              Book a Free Consultation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.a>

          <a 
            href="#framework"
            className="px-8 py-4 rounded-full text-sm tracking-widest uppercase font-semibold text-white border border-slate-600 hover:border-white hover:bg-white/5 transition-all inline-block"
          >
            See How We Work ↓
          </a>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs tracking-widest uppercase text-slate-400 mt-12 border-t border-white/10 pt-8">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[var(--accent-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Trusted across Kenya</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[var(--accent-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>8 Multidisciplinary Experts</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[var(--accent-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Security by Design</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[var(--accent-start)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>Scalable Infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
