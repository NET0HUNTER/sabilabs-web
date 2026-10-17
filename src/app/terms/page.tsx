import type { Metadata } from 'next';
import { Eyebrow, PageMain, SectionContainer, SectionHeading } from '@/components/ui/Primitives';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms & Conditions | Sabi Labs',
  description: 'Read the terms governing general information and service enquiries on the Sabi Labs Limited website.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <PageMain>
      <section className="section-shell">
        <SectionContainer>
          <div className="max-w-3xl">
            <Eyebrow>Legal</Eyebrow>
            <SectionHeading level="h1">Website Terms</SectionHeading>
            <div className="mt-10 space-y-6 text-base leading-8 text-[var(--text-secondary)]">
              <p>This website provides general information about SabiLabs, its services, products, and project experience. It does not constitute a binding service proposal or contract.</p>
              <p>Project scope, deliverables, timelines, fees, confidentiality, and support terms are agreed separately for each engagement.</p>
              <p>For questions about these terms, email <a className="text-[var(--accent)]" href="mailto:info@sabilabs.co.ke">info@sabilabs.co.ke</a>.</p>
            </div>
          </div>
        </SectionContainer>
      </section>
    </PageMain>
  );
}
