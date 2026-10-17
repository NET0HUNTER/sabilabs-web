import type { Metadata } from 'next';
import ContactSection from '@/components/ui/ContactSection';
import { PageMain } from '@/components/ui/Primitives';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact Sabi Labs | Book a Consultation',
  description: 'Contact Sabi Labs Limited to discuss business technology, custom software, automation, data intelligence, systems integration, cloud, or geospatial solutions.',
  path: '/contact',
});

export default function ContactPage() {
  return <PageMain><ContactSection /></PageMain>;
}
