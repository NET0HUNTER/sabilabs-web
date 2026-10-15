import type { Metadata } from 'next';
import ServicesSection from '@/components/ui/ServicesSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Capabilities | SabiLabs',
  description: 'Six connected SabiLabs capabilities spanning advisory, enterprise systems, automation and AI, data intelligence, integration and cloud, and geospatial technology.',
};

export default function ServicesPage() {
  return <PageMain><ServicesSection /></PageMain>;
}
