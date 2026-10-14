import type { Metadata } from 'next';
import CapabilitiesSection from '@/components/ui/CapabilitiesSection';
import PainPointsSection from '@/components/ui/PainPointsSection';
import ServicesSection from '@/components/ui/ServicesSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Services | SabiLabs',
  description: 'Business analysis, software engineering, automation, cloud, cybersecurity, compliance, and ongoing technology support from SabiLabs.',
};

export default function ServicesPage() {
  return <PageMain><ServicesSection /><CapabilitiesSection /><PainPointsSection /></PageMain>;
}
