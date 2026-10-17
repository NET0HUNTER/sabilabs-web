import type { MetadataRoute } from 'next';
import { caseStudies, industries } from '@/lib/siteContent';
import { SITE_URL } from '@/lib/seo';

const staticRoutes = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/capabilities', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/industries', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/case-studies', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/methodology', changeFrequency: 'yearly', priority: 0.7 },
  { path: '/products', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-17');
  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      lastModified, changeFrequency, priority,
    })),
    ...industries.map(({ slug }) => ({
      url: `${SITE_URL}/industries/${slug}`,
      lastModified, changeFrequency: 'yearly' as const, priority: 0.7,
    })),
    ...caseStudies.map(({ slug }) => ({
      url: `${SITE_URL}/case-studies/${slug}`,
      lastModified, changeFrequency: 'yearly' as const, priority: 0.7,
    })),
  ];
}
