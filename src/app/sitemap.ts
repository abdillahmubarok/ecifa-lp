import { MetadataRoute } from 'next';
import { getPublications } from '@/services/wordpress';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ecifa.id';

  // Fetch all publications for the sitemap
  const publications = await getPublications({ per_page: 100 }) || [];

  const publicationEntries: MetadataRoute.Sitemap = publications.map((pub) => ({
    url: `${baseUrl}/publikasi/${pub.slug}`,
    lastModified: new Date(pub.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const staticPages = [
    '',
    '/tentang',
    '/riset',
    '/publikasi',
    '/kontak',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return [...staticPages, ...publicationEntries];
}
