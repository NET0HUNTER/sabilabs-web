import type { Metadata } from 'next';

export const SITE_URL = 'https://www.sabilabs.co.ke';
export const SITE_NAME = 'Sabi Labs';
export const DEFAULT_DESCRIPTION =
  'Sabi Labs Limited helps organizations transform operations through business analysis, custom software, data intelligence, automation, systems integration, cloud solutions, and geospatial technology.';
export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1024,
  height: 1024,
  alt: 'Sabi Labs — Business Technology & Intelligence',
};

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}` | '/';
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website', locale: 'en_KE', siteName: SITE_NAME, url: path,
      title, description, images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image', title, description, images: [OG_IMAGE.url],
    },
  };
}

export function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
