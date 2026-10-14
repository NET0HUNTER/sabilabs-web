'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionContainer, SectionIntro } from './Primitives';
import ShowcaseCard, { ShowcaseGrid } from './ShowcaseCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    category: 'Distribution Platform',
    title: 'Distribution Management ERP',
    desc: 'Built for distributors who need real-time visibility into inventory, orders, routes, and revenue — not another spreadsheet.',
    features: [
      'Real-time inventory tracking across multiple warehouses',
      'Route optimization and delivery management',
      'Automated order processing and invoicing',
      'Financial reporting and analytics dashboard',
      'Multi-branch, multi-currency support',
    ],
  },
  { category: 'Education Platform', title: 'School ERP', desc: 'Admissions, fees, attendance, grades, and parent communication — unified.' },
  { category: 'Hospitality Platform', title: 'Restaurant POS', desc: 'Orders, kitchen workflow, payments, and reporting in one system.' },
  { category: 'Operations Platform', title: 'Laundry ERP', desc: 'Track every garment from drop-off to delivery.' },
  { category: 'Governance Platform', title: 'Approval Workflow Platform', desc: 'Multi-level approval chains with full audit trails and accounting integration.' },
  { category: 'Security Platform', title: 'Security Audit Platform', desc: 'Map your security posture against compliance frameworks automatically.' },
];

export default function ProductsSection({ preview = false }: { preview?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const visibleProducts = preview ? products.slice(0, 2) : products;

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
    <section id="products" ref={sectionRef} className="section-shell overflow-hidden">
      <SectionContainer className="relative z-10">
        <SectionIntro
          className="reveal-item"
          eyebrow={preview ? 'Selected Products' : 'Our Products'}
          heading="Technology Built Around Real Business Needs."
          description="Purpose-built platforms for recurring operational challenges across industries."
        />

        <ShowcaseGrid>
          {visibleProducts.map((product, index) => (
            <ShowcaseCard
              key={product.title}
              className="reveal-item"
              sequence={String(index + 1).padStart(2, '0')}
              kind="Product"
              category={product.category}
              title={product.title}
              description={product.desc}
              secondary={!preview && product.features ? (
                <div>
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--accent-start)]">Core Capabilities</p>
                  <ul className="grid gap-2.5 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-start)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : undefined}
              ctaLabel="Request a Demo"
              href="/contact"
            />
          ))}
        </ShowcaseGrid>
        {preview ? <Link href="/products" className="button button-secondary mt-10">View All Products <span aria-hidden="true">→</span></Link> : null}
      </SectionContainer>
    </section>
  );
}
