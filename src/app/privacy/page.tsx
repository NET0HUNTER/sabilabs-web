import type { Metadata } from 'next';
import { Eyebrow, PageMain, SectionContainer, SectionHeading } from '@/components/ui/Primitives';

export const metadata: Metadata = { title: 'Privacy Policy | SabiLabs' };

export default function PrivacyPage() {
  return (
    <PageMain>
      <section className="section-shell">
        <SectionContainer>
          <div className="max-w-3xl">
            <Eyebrow>Legal</Eyebrow>
            <SectionHeading>Privacy Policy</SectionHeading>
            <div className="mt-10 space-y-6 text-base leading-8 text-[var(--text-muted)]">
              <p>SabiLabs uses information submitted through this website only to respond to enquiries, understand project requirements, and provide requested services.</p>
              <p>We do not sell personal information. Contact details are retained only for legitimate business communication and are handled in line with applicable data protection requirements.</p>
              <p>For privacy questions or data requests, email <a className="text-[var(--accent-start)]" href="mailto:contact@sabilabs.co.ke">contact@sabilabs.co.ke</a>.</p>
            </div>
          </div>
        </SectionContainer>
      </section>
    </PageMain>
  );
}
