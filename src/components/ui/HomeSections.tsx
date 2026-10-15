import Link from 'next/link';
import { SectionContainer, SectionIntro } from './Primitives';

export function HomeAboutPreview() {
  return (
    <section className="section-shell home-section border-y border-[var(--border)]">
      <SectionContainer>
        <SectionIntro
          eyebrow="Why SabiLabs"
          heading="More Than a Software Team."
          description="SabiLabs brings together business, financial, process, security, data, and engineering expertise so technology decisions work in the real operational environment."
        />
        <div className="text-center">
          <Link href="/about" className="button button-secondary">About SabiLabs <span aria-hidden="true">→</span></Link>
        </div>
      </SectionContainer>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section-shell home-section !py-0">
      <SectionContainer>
        <div className="relative overflow-hidden border-y border-white/[0.1] py-14 text-center md:py-20">
          <SectionIntro
            className="!mb-8"
            eyebrow="Start a Project"
            heading="Start With a Focused Conversation."
            description="Tell us what is happening inside the operation. We’ll help define the right next step."
          />
          <Link href="/contact" className="button button-primary">Book a Consultation <span aria-hidden="true">→</span></Link>
        </div>
      </SectionContainer>
    </section>
  );
}
