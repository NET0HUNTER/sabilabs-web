import type { Metadata } from 'next';
import WorkSection from '@/components/ui/WorkSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Projects | SabiLabs',
  description: 'Selected SabiLabs engagements across enterprise software, workflow automation, education technology, and cybersecurity.',
};

export default function ProjectsPage() {
  return <PageMain><WorkSection /></PageMain>;
}
