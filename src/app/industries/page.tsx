import type { Metadata } from 'next';
import IndustriesSection from '@/components/ui/IndustriesSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Industries | SabiLabs',
  description: 'How SabiLabs approaches government, enterprise, SME, NGO, education, and data-intensive operating environments.',
};

export default function IndustriesPage() {
  return <PageMain><IndustriesSection /></PageMain>;
}
