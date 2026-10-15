import type { Metadata } from 'next';
import Link from 'next/link';
import MissionSection from '@/components/ui/MissionSection';
import TeamSection from '@/components/ui/TeamSection';
import WhyUsSection from '@/components/ui/WhyUsSection';
import { PageMain, SectionContainer, SectionIntro } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'About | SabiLabs',
  description: 'Learn about the SabiLabs mission, values, multidisciplinary specialists, and long-term partnership philosophy.',
};

export default function AboutPage() {
  return (
    <PageMain>
      <section className="section-shell about-hero">
        <SectionContainer>
          <SectionIntro
            className="about-hero__intro !mb-0"
            headingClassName="about-hero__heading"
            descriptionClassName="about-hero__description"
            eyebrow="About SabiLabs"
            heading="Business Insight. Technical Depth. One Accountable Team."
            description="SabiLabs is a strategy-led technology company that studies how organizations operate, identifies what is holding them back, and designs intelligent digital systems around those realities."
          />
        </SectionContainer>
      </section>
      <MissionSection />
      <TeamSection />
      <WhyUsSection />
      <section className="section-shell border-t border-[var(--border)]">
        <SectionContainer>
          <SectionIntro
            eyebrow="Working With Clients"
            heading="Discovery Before Delivery. Shared Decisions Throughout."
            description="We move from operational discovery and requirements through architecture, implementation, and continuous improvement—with stakeholders involved at every important decision."
          />
          <div className="text-center">
            <Link href="/methodology" className="button button-secondary">Explore Our Methodology <span aria-hidden="true">→</span></Link>
          </div>
        </SectionContainer>
      </section>
    </PageMain>
  );
}
