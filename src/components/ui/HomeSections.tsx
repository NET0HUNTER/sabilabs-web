import Link from 'next/link';
import { SectionContainer, SectionIntro } from './Primitives';

export function HomePositioning() {
  return (
    <section className="section-shell home-section border-y border-[var(--border)]">
      <SectionContainer>
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow">Business Technology &amp; Intelligence</p>
          <h2 className="section-heading">Technology Should Begin With Understanding the Organization.</h2>
          <p className="section-copy mx-auto">
            We study business processes, operational challenges, financial requirements, data flows, reporting needs, security requirements, and strategic objectives before defining the right technology response.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}

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
        <div className="glass-panel-strong relative overflow-hidden px-6 py-14 text-center md:px-10 md:py-20">
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
