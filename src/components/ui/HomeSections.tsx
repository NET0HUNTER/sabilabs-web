import Link from 'next/link';
import { SectionContainer, SectionIntro } from './Primitives';

export function HomePositioning() {
  return (
    <section className="section-shell border-y border-white/[0.06]">
      <SectionContainer>
        <SectionIntro
          className="!mb-0"
          eyebrow="Our Position"
          heading="Understanding Businesses. Engineering Solutions."
          description="We combine business analysis, engineering, cybersecurity, and financial insight to solve the operational problems behind the technology brief."
        />
      </SectionContainer>
    </section>
  );
}

export function HomeAboutPreview() {
  return (
    <section className="section-shell border-y border-white/[0.06]">
      <SectionContainer>
        <SectionIntro
          eyebrow="About SabiLabs"
          heading="Business Expertise Meets Engineering Excellence."
          description="Our multidisciplinary team brings together business analysis, financial expertise, cybersecurity, compliance, and software engineering."
        />
        <div className="text-center">
          <p className="mx-auto mb-6 max-w-md text-lg leading-8 text-slate-300">8 specialists. One mission: aligning technology with your business goals.</p>
          <Link href="/about" className="button button-secondary">About SabiLabs <span aria-hidden="true">→</span></Link>
        </div>
      </SectionContainer>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section-shell">
      <SectionContainer>
        <div className="relative overflow-hidden border-y border-white/[0.1] py-14 text-center md:py-20">
          <SectionIntro
            className="!mb-8"
            eyebrow="Start a Project"
            heading="Start With a Focused Conversation."
            description={<>Tell us what is slowing the business down. We&apos;ll help you define the right next step.</>}
          />
          <Link href="/contact" className="button button-primary">Contact Us <span aria-hidden="true">→</span></Link>
        </div>
      </SectionContainer>
    </section>
  );
}
