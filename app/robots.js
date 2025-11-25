export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: 'https://c3consultants.in/sitemap.xml',
    host: 'https://c3consultants.in',
  };
}
