'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-[var(--background)]" />,
});

export default function SiteBackground() {
  return <Scene />;
}
