import type { Metadata } from 'next';
import ServicesSection from '@/components/ui/ServicesSection';
import { PageMain } from '@/components/ui/Primitives';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Business Technology Capabilities | Sabi Labs',
  description: 'Explore Sabi Labs capabilities in business and technology advisory, custom software, automation and AI, data intelligence, systems integration, cloud, and geospatial technology.',
  path: '/capabilities',
});

export default function ServicesPage() {
  return <PageMain><ServicesSection /></PageMain>;
}
