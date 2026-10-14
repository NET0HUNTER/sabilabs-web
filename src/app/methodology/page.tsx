import type { Metadata } from 'next';
import FrameworkSection from '@/components/ui/FrameworkSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'How We Work | SabiLabs',
  description: 'Explore the four-phase SabiLabs methodology for discovering, defining, building, and improving business technology solutions.',
};

export default function MethodologyPage() {
  return <PageMain><FrameworkSection /></PageMain>;
}
