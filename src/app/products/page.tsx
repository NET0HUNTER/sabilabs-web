import type { Metadata } from 'next';
import Link from 'next/link';
import { PageMain, SectionContainer, SectionIntro } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Products | SabiLabs',
  description: 'Information about reusable products and platforms owned and offered by SabiLabs.',
};

export default function ProductsPage() {
  return (
    <PageMain>
      <section className="section-shell">
        <SectionContainer>
          <SectionIntro
            eyebrow="SabiLabs Products"
            heading="A Deliberately Small Product Catalogue."
            description="Client systems are not automatically SabiLabs products. Our primary work is designing technology around each organization’s requirements, and we only publish reusable platforms here when they are genuinely owned and offered by SabiLabs."
          />
          <div className="mx-auto max-w-3xl border-y border-[var(--border)] py-10 text-center">
            <p className="text-lg leading-8 text-[var(--text-muted)]">There are no publicly listed products at this time. Completed client systems are documented as case studies instead of being presented as off-the-shelf software.</p>
            <Link href="/case-studies" className="button button-secondary mt-8">Explore Case Studies <span aria-hidden="true">→</span></Link>
          </div>
        </SectionContainer>
      </section>
    </PageMain>
  );
}
