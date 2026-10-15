import HeroSection from '@/components/ui/HeroSection';
import SiteBackground from '@/components/canvas/SiteBackground';
import ServicesSection from '@/components/ui/ServicesSection';
import IndustriesSection from '@/components/ui/IndustriesSection';
import WorkSection from '@/components/ui/WorkSection';
import TrustSection from '@/components/ui/TrustSection';
import { FinalCta, HomeAboutPreview } from '@/components/ui/HomeSections';

export default function Home() {
  return (
    <main className="relative z-10 w-full overflow-x-hidden bg-transparent selection:bg-[var(--accent-start)] selection:text-[var(--bg-dark)] noise-bg">
      <SiteBackground />
      <HeroSection />
      <ServicesSection preview />
      <IndustriesSection preview />
      <WorkSection preview />
      <HomeAboutPreview />
      <TrustSection />
      <FinalCta />
    </main>
  );
}
