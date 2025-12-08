import AwardsHero from '@/app/components/awards/AwardsHero';
import AwardsCarousel from '@/app/components/awards/AwardsCarousel';
import AwardsTimeline from '@/app/components/awards/AwardsTimeline';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Awards | Career Counselling Expert Patiala',
  description: '15+ awards for career counselling excellence. Rotary Visionary Award, Punjab Govt honour. Best career counsellor in Patiala - Manik Raj Singla.',
  keywords: [
    'career counsellor awards Patiala',
    'Manik Raj Singla career counselling awards',
    'best career counsellor Patiala',
    'Rotary Visionary Leadership Award',
    'career counselling excellence awards',
    'Punjab government recognition career counsellor',
    'educational leadership Patiala',
    'award-winning career counsellor',
  ],
  authors: [{ name: 'Manik Raj Singla' }],
  alternates: {
    canonical: 'https://c3consultants.in/awards',
  },
  openGraph: {
    title: 'Awards | Career Counselling Expert Patiala',
    description: '15+ awards for career counselling excellence. Rotary, Govt honours.',
    url: 'https://c3consultants.in/awards',
    type: 'website',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/achivement2.jpg',
        width: 1200,
        height: 630,
        alt: 'Award-winning Career Counsellor Patiala',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awards | Career Counselling Expert Patiala',
    description: '15+ awards for career counselling excellence.',
    creator: '@manikrajsingla',
    images: ['https://c3consultants.in/images/achivement2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function AwardsPage() {
  // Awards ItemList Schema
  const awardsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Awards & Honours - Career Counselling Expert Manik Raj Singla',
    description: 'Awards recognizing excellence in career counselling, community service, and educational leadership in Patiala',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Award',
          name: 'Rotary Visionary Leadership Award',
          description: 'Awarded for exceptional leadership in career counselling, community service, and Rotary International',
          datePublished: '2024',
          award: 'Leadership Excellence in Career Counselling',
          recognizingAuthority: {
            '@type': 'Organization',
            name: 'Rotary International District',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Award',
          name: 'Zone 4 E-Directory Editor',
          description: 'Honored for serving as Editor overseeing 12 Districts with 1,300 Clubs',
          datePublished: '2023',
          award: 'Rotary International Recognition',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Award',
          name: 'Independence Day Honour',
          description: 'Honored for outstanding contribution to career counselling and education in Punjab',
          datePublished: '2025',
          award: 'Government of Punjab Recognition',
          recognizingAuthority: {
            '@type': 'GovernmentOrganization',
            name: 'Government of Punjab',
          },
        },
      },
    ],
  };

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
        name: 'Awards & Honours',
        item: 'https://c3consultants.in/awards',
      },
    ],
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What awards has the career counsellor Manik Raj Singla received?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Career counsellor Manik Raj Singla has received 15+ awards including Rotary Visionary Leadership Award 2024, Zone 4 E-Directory Editor, and Independence Day Honour 2025 from Punjab Government for excellence in career counselling in Patiala.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Manik Raj Singla the best career counsellor in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manik Raj Singla is the best career counsellor in Patiala with 15+ awards, 23+ years experience, 50,000+ students guided, 95% success rate, and recognition from Rotary International and Punjab Government for career counselling excellence.',
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(awardsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AwardsHero />
      <AwardsCarousel />
      <AwardsTimeline />
      <CTASection />
    </>
  );
}
