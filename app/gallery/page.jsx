import GalleryClient from '@/app/components/gallery/GalleryClient';

export const metadata = {
  title: 'Gallery | Career Counselling Sessions & Events Patiala',
  description: 'View career counselling sessions, student success moments, awards & events at C3 Patiala. 23+ years of inspiring career guidance moments.',
  keywords: [
    'career counselling sessions Patiala',
    'career counselling events Patiala',
    'career guidance gallery Patiala',
    'student success stories Patiala',
    'C3 consultants gallery',
    'Manik Raj Singla career counselling',
    'career counselling workshops Patiala',
  ],
  alternates: {
    canonical: 'https://c3consultants.in/gallery',
  },
  openGraph: {
    title: 'Gallery | Career Counselling Sessions Patiala',
    description: 'Career counselling sessions, awards, and student success moments from C3 Patiala.',
    url: 'https://c3consultants.in/gallery',
    type: 'website',
    images: [
      {
        url: 'https://c3consultants.in/images/career1.jpg',
        width: 1200,
        height: 630,
        alt: 'Career Counselling Sessions at C3 Patiala',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GalleryPage() {
  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://c3consultants.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Gallery',
        item: 'https://c3consultants.in/gallery',
      },
    ],
  };

  // ImageGallery Schema
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'C3 Career Consultants Gallery - Career Counselling in Patiala',
    description: 'Photo gallery showcasing career counselling sessions, student success stories, awards, and events at C3 Career Consultants Patiala',
    url: 'https://c3consultants.in/gallery',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <GalleryClient />
    </>
  );
}
