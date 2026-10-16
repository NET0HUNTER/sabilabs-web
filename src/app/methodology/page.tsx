import type { Metadata } from 'next';
import FrameworkSection from '@/components/ui/FrameworkSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'How We Work | SabiLabs',
  description: 'Explore the six-step SabiLabs approach: discover, analyze, design, engineer, implement, and improve.',
};

export default function MethodologyPage() {
  return <PageMain><FrameworkSection /></PageMain>;
}
