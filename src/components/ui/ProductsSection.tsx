'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SUPPORTING_PRODUCTS = [
  { title: 'School ERP', desc: 'Admissions, fees, attendance, grades, and parent communication — unified.' },
  { title: 'Restaurant POS', desc: 'Orders, kitchen workflow, payments, and reporting in one system.' },
  { title: 'Laundry ERP', desc: 'Track every garment from drop-off to delivery.' },
  { title: 'Approval Workflow Platform', desc: 'Multi-level approval chains with full audit trails and accounting integration.' },
  { title: 'Security Audit Platform', desc: 'Map your security posture against compliance frameworks automatically.' }
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const elements = gsap.utils.toArray('.reveal-item') as HTMLElement[];
    elements.forEach((el, i) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="products" ref={sectionRef} className="py-32 px-6 md:px-24 bg-[var(--bg-dark)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 reveal-item">
          <p className="text-[var(--accent-start)] text-sm tracking-[0.2em] font-bold uppercase mb-4">Our Products</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            Purpose-Built Solutions for Real Business Problems
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-10 md:p-14 border-l-4 border-[var(--accent-start)] mb-12 reveal-item relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="var(--accent-start)"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          
          <div className="relative z-10">
            <p className="text-[var(--accent-start)] text-xs tracking-[0.2em] font-bold uppercase mb-4">Flagship Product</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">Distribution Management ERP</h3>
            <p className="text-slate-300 font-light text-lg mb-8 max-w-2xl leading-relaxed">
              Built for distributors who need real-time visibility into inventory, orders, routes, and revenue — not another spreadsheet.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-4xl">
              {[
                'Real-time inventory tracking across multiple warehouses',
                'Route optimization and delivery management',
                'Automated order processing and invoicing',
                'Financial reporting and analytics dashboard',
                'Multi-branch, multi-currency support'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-[var(--accent-start)] mr-3 mt-1 flex-shrink-0">✓</span>
                  <span className="text-slate-200 font-light">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2 group">
              Request a Demo <span className="text-[var(--accent-start)] transition-transform group-hover:translate-x-2">→</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPORTING_PRODUCTS.map((product, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8 reveal-item group transition-all duration-300 hover:glass-card-hover">
              <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-[var(--accent-start)] transition-colors">
                {product.title}
              </h4>
              <p className="text-slate-300 font-light text-sm leading-relaxed">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
