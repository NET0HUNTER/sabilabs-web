import HeroSection from '@/components/ui/HeroSection';
import SiteBackground from '@/components/canvas/SiteBackground';
import ServicesSection from '@/components/ui/ServicesSection';
import FrameworkSection from '@/components/ui/FrameworkSection';
import WorkSection from '@/components/ui/WorkSection';
import TrustSection from '@/components/ui/TrustSection';
import ProductsSection from '@/components/ui/ProductsSection';
import { FinalCta, HomeAboutPreview } from '@/components/ui/HomeSections';

export default function Home() {
  return (
    <main className="relative z-10 w-full overflow-x-hidden bg-transparent selection:bg-[var(--accent-start)] selection:text-[var(--bg-dark)] noise-bg">
      <SiteBackground />
      <HeroSection />
      <ServicesSection preview />
      <FrameworkSection preview />
      <WorkSection preview />
      <ProductsSection preview />
      <TrustSection />
      <HomeAboutPreview />
      <FinalCta />
    </main>
  );
}
