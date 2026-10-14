import type { Metadata } from 'next';
import ContactSection from '@/components/ui/ContactSection';
import { PageMain } from '@/components/ui/Primitives';

export const metadata: Metadata = {
  title: 'Contact | SabiLabs',
  description: 'Start a technology, cybersecurity, automation, or business systems conversation with SabiLabs in Nairobi, Kenya.',
};

export default function ContactPage() {
  return <PageMain><ContactSection /></PageMain>;
}
