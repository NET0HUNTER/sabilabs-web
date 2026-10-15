import type { Metadata } from 'next';
import WorkSection from '@/components/ui/WorkSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Projects & Case Studies | SabiLabs',
  description: 'SabiLabs case studies across enterprise operations, education, workflow automation, and cybersecurity.',
};

export default function ProjectsPage() {
  return <PageMain><WorkSection /></PageMain>;
}
