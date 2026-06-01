import type { MetadataRoute } from 'next'

const BASE = 'https://ginascollege.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages = [
    { url: BASE, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE}/programs`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE}/programs/medical-aesthetics`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/advanced-aesthetics`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/hairstyling`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/electrolysis-light-technology`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/nail-technology`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/makeup-artistry`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/waxing`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/microneedling`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/chemical-peels`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/eyebrow-design`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/lash-extensions`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/hot-stone-therapy`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/reflexology`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/hydrotherapy`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/aromatherapy`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE}/programs/mens-grooming`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE}/campuses`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/campuses/mississauga`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/campuses/waterloo`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/campuses/ottawa`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/clinic`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/apply`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE}/consultation`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/financing`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE}/contact`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE}/accessibility`, priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const blogSlugs = [
    'beauty-school-in-waterloo-ontario-programs-at-gina-s-college',
    'hairstyling-school-in-ontario-programs-careers-and-how-to-enroll',
    'how-long-does-it-take-to-become-an-esthetician-in-ontario',
    'aesthetics-school-in-mississauga-your-guide-to-programs-and-enrollment',
    'osap-eligible-beauty-schools-in-ontario-what-you-need-to-know',
    'beauty-school-near-me-in-ontario-how-to-find-the-right-one',
    'medical-aesthetician-program-in-ontario-what-to-expect',
    'cidesco-international-diploma-what-it-is-and-why-it-matters',
    'how-to-become-an-esthetician-in-ottawa-ontario',
  ]

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    priority: 0.7 as const,
    changeFrequency: 'monthly' as const,
    lastModified: new Date('2026-05-21'),
  }))

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...blogPages,
  ]
}
