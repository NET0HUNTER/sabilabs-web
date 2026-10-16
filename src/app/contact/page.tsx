import type { Metadata } from 'next';
import ContactSection from '@/components/ui/ContactSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Contact | SabiLabs',
  description: 'Discuss an operational challenge, technology requirement, or intelligence opportunity with SabiLabs in Nairobi, Kenya.',
};

export default function ContactPage() {
  return <PageMain><ContactSection /></PageMain>;
}
