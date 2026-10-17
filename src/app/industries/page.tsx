import type { Metadata } from 'next';
import IndustriesSection from '@/components/ui/IndustriesSection';
import { PageMain } from '@/components/ui/Primitives';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Industries We Serve | Sabi Labs',
  description: 'See how Sabi Labs helps government, enterprises, SMEs, NGOs, education institutions, and data-intensive organizations improve operations through tailored digital systems.',
  path: '/industries',
});

export default function IndustriesPage() {
  return <PageMain><IndustriesSection /></PageMain>;
}
