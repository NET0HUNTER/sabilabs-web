import type { Metadata } from 'next';
import FrameworkSection from '@/components/ui/FrameworkSection';
import { PageMain } from '@/components/ui/Primitives';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'How We Work | Sabi Labs',
  description: 'Explore the Sabi Labs approach to discovering, analyzing, designing, engineering, implementing, and improving business technology solutions.',
  path: '/methodology',
});

export default function MethodologyPage() {
  return <PageMain><FrameworkSection /></PageMain>;
}
