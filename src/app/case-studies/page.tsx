import type { Metadata } from 'next';
import WorkSection from '@/components/ui/WorkSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Case Studies | SabiLabs',
  description: 'Case studies showing how SabiLabs translates real operational requirements into practical digital systems.',
};

export default function CaseStudiesPage() {
  return <PageMain><WorkSection /></PageMain>;
}
