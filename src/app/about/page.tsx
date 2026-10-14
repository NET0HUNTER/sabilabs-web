import type { Metadata } from 'next';
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
      <section className="section-shell !pb-0">
        <SectionContainer>
          <SectionIntro
            className="!mb-0"
            eyebrow="About SabiLabs"
            heading="Business Insight. Technical Depth. Shared Accountability."
            description="A multidisciplinary technology consultancy built to understand the business before engineering the solution."
          />
        </SectionContainer>
      </section>
      <MissionSection />
      <WhyUsSection />
      <TeamSection />
    </PageMain>
  );
}
