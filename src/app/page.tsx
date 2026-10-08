'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/ui/HeroSection';
import PainPointsSection from '@/components/ui/PainPointsSection';
import FrameworkSection from '@/components/ui/FrameworkSection';
import ServicesSection from '@/components/ui/ServicesSection';
import ProductsSection from '@/components/ui/ProductsSection';
import WorkSection from '@/components/ui/WorkSection';
import WhyUsSection from '@/components/ui/WhyUsSection';
import CapabilitiesSection from '@/components/ui/CapabilitiesSection';
import TeamSection from '@/components/ui/TeamSection';
import MissionSection from '@/components/ui/MissionSection';
import TrustSection from '@/components/ui/TrustSection';
import ContactSection from '@/components/ui/ContactSection';
import FooterSection from '@/components/ui/FooterSection';

// Dynamically import the 3D Scene to prevent SSR hydration errors
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[var(--bg-dark)] -z-10 animate-pulse transition-colors duration-700" />,
});

export default function Home() {
  return (
    <main className="relative bg-[var(--bg-dark)] w-full overflow-x-hidden selection:bg-[var(--accent-start)] selection:text-[var(--bg-dark)] noise-bg">
      <Scene />
      <Navbar />
      <div className="relative z-10 bg-transparent rounded-b-[4rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <HeroSection />
        <PainPointsSection />
        <FrameworkSection />
        <ServicesSection />
        <ProductsSection />
        <WorkSection />
        <WhyUsSection />
        <CapabilitiesSection />
        <TeamSection />
        <MissionSection />
        <TrustSection />
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  );
}
