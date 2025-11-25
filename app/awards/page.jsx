import AwardsHero from '@/app/components/awards/AwardsHero';
import AwardsCarousel from '@/app/components/awards/AwardsCarousel';
import AwardsTimeline from '@/app/components/awards/AwardsTimeline';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Awards & Honours | Manik Raj Singla | Best Career Consultancy Patiala',
  description: 'Celebrating 23+ years excellence in Patiala\'s best consultancy services. Rotary Visionary Leadership Award 2024, Zone 4 E-Directory Editor, Punjab Govt Independence Day Honour. 15+ prestigious awards for Manik Raj Singla\'s leadership in career counselling & community service.',
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
    title: 'Awards & Honours | Best Career Consultancy in Patiala',
    description: 'Celebrating 23+ years excellence: Rotary awards, Government recognition. Patiala\'s most awarded career consultancy.',
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
    description: '15+ prestigious awards. Excellence in career counselling and community service.',
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
        name: 'What awards has Manik Raj Singla received for career consultancy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manik Raj Singla has received 15+ prestigious awards including the Rotary Visionary Leadership Award 2024, Zone 4 E-Directory Editor recognition from Rotary International, and Independence Day Honour 2025 from the Government of Punjab for excellence in career consultancy and community service in Patiala.',
        },
      },
      {
        '@type': 'Question',
        name: 'What leadership roles does Manik Raj Singla currently hold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently serving as Assistant Governor of Rotary International (District RID 3090), President of Patiala District Table Tennis Association, and Founder of C3 Career Consultants - Patiala\'s best consultancy for career guidance.',
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
