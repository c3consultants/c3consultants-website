import AwardsHero from '@/app/components/awards/AwardsHero';
import AwardsCarousel from '@/app/components/awards/AwardsCarousel';
import AwardsTimeline from '@/app/components/awards/AwardsTimeline';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Awards & Honours | Best Consultancy Patiala',
  description: '15+ awards celebrating 23+ years excellence. Rotary Visionary Award, Punjab Govt honour. Best career consultancy in Patiala.',
  keywords: [
    'Manik Raj Singla awards',
    'best consultancy Patiala awards',
    'Rotary Visionary Leadership Award',
    'career counsellor awards Patiala',
    'Rotary International honours',
    'Punjab government recognition',
    'community service awards',
    'educational leadership Patiala',
    'career consultancy excellence',
  ],
  authors: [{ name: 'Manik Raj Singla' }],
  alternates: {
    canonical: 'https://c3consultants.in/awards',
  },
  openGraph: {
    title: 'Awards & Honours | Best Consultancy Patiala',
    description: '15+ awards. Rotary recognition, Govt honours. Patiala\'s most awarded consultancy.',
    url: 'https://c3consultants.in/awards',
    type: 'website',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/achivement2.jpg',
        width: 1200,
        height: 630,
        alt: 'Manik Raj Singla - Rotary Visionary Leadership Award',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awards & Honours | Best Consultancy Patiala',
    description: '15+ prestigious awards. Excellence in career counselling.',
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
    name: 'Awards & Honours - Manik Raj Singla',
    description: 'Comprehensive list of awards recognizing excellence in career consultancy, community service, and leadership in Patiala',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Award',
          name: 'Rotary Visionary Leadership Award',
          description: 'Awarded for exceptional leadership in Rotary International and community service excellence',
          datePublished: '2024',
          award: 'Leadership Excellence',
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
          description: 'Honored for serving as Editor of Rotary E-Directory overseeing 12 Districts with 1,300 Clubs',
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
          description: 'Honored on 79th Independence Day for outstanding contribution to society and education in Punjab',
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

  // FAQ Schema - UNIQUE questions for Awards page only
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What awards has Manik Raj Singla received?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manik Raj Singla has received 15+ awards including Rotary Visionary Leadership Award 2024, Zone 4 E-Directory Editor, and Independence Day Honour 2025 from Punjab Government for excellence in career consultancy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What leadership roles does Manik Raj Singla hold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Assistant Governor of Rotary International (RID 3090), President of Patiala Table Tennis Association, and Founder of C3 - best consultancy in Patiala.',
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
