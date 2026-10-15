import type { Metadata } from 'next';
import { Eyebrow, PageMain, SectionContainer, SectionHeading } from '@/components/ui/Primitives';

export const metadata: Metadata = { title: 'Terms | SabiLabs' };

export default function TermsPage() {
  return (
    <PageMain>
      <section className="section-shell">
        <SectionContainer>
          <div className="max-w-3xl">
            <Eyebrow>Legal</Eyebrow>
            <SectionHeading>Website Terms</SectionHeading>
            <div className="mt-10 space-y-6 text-base leading-8 text-[var(--text-muted)]">
              <p>This website provides general information about SabiLabs, its services, products, and project experience. It does not constitute a binding service proposal or contract.</p>
              <p>Project scope, deliverables, timelines, fees, confidentiality, and support terms are agreed separately for each engagement.</p>
              <p>For questions about these terms, email <a className="text-[var(--accent-start)]" href="mailto:info@sabilabs.co.ke">info@sabilabs.co.ke</a>.</p>
            </div>
          </div>
        </SectionContainer>
      </section>
    </PageMain>
  );
}
