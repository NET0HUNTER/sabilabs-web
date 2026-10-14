import type { Metadata } from 'next';
import ProductsSection from '@/components/ui/ProductsSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Products | SabiLabs',
  description: 'Purpose-built SabiLabs platforms for distribution, education, hospitality, workflow approvals, and security audits.',
};

export default function ProductsPage() {
  return <PageMain><ProductsSection /></PageMain>;
}
