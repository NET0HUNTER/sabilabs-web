import HeroSection from '@/components/ui/HeroSection';
import ServicesSection from '@/components/ui/ServicesSection';
import IndustriesSection from '@/components/ui/IndustriesSection';
import WorkSection from '@/components/ui/WorkSection';
import TrustSection from '@/components/ui/TrustSection';
import { FinalCta, HomeAboutPreview, HomePositioning } from '@/components/ui/HomeSections';

export default function Home() {
  return (
    <main className="relative z-10 w-full overflow-x-hidden bg-transparent noise-bg">
      <HeroSection />
      <HomePositioning />
      <ServicesSection preview />
      <IndustriesSection preview />
      <WorkSection preview />
      <HomeAboutPreview />
      <TrustSection />
      <FinalCta />
    </main>
  );
}
