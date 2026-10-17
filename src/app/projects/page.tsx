import type { Metadata } from 'next';
import WorkSection from '@/components/ui/WorkSection';
import { PageMain } from '@/components/ui/Primitives';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Case Studies | Sabi Labs',
  description: 'Explore how Sabi Labs turns real operational challenges into practical digital solutions through business analysis, engineering, integration, and data intelligence.',
  path: '/case-studies',
});

export default function ProjectsPage() {
  return <PageMain><WorkSection /></PageMain>;
}
