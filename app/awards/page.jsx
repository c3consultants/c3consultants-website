import AwardsHero from '@/app/components/awards/AwardsHero';
import AwardsCarousel from '@/app/components/awards/AwardsCarousel';
import AwardsTimeline from '@/app/components/awards/AwardsTimeline';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Awards & Honours - Manik Raj Singla | 23+ Years Excellence | C3 Patiala',
  description: 'Rotary Visionary Leadership Award 2024, Zone 4 E-Directory Editor, Punjab Government Independence Day Honour. 15+ prestigious awards recognizing Manik Raj Singla\'s exceptional leadership in career counselling, community service & Rotary International. View complete awards journey.',
  keywords: [
    'Manik Raj Singla awards',
    'Rotary Visionary Leadership Award',
    'career counsellor awards Patiala',
    'Rotary International honours',
    'Zone 4 E-Directory Editor',
    'Punjab government recognition',
    'community service awards',
    'Rotary Assistant Governor',
    'Table Tennis Association President',
    'educational leadership awards Patiala',
  ],
  authors: [{ name: 'Manik Raj Singla' }],
  alternates: {
    canonical: 'https://c3consultants.in/awards',
  },
  openGraph: {
    title: 'Awards & Honours - Manik Raj Singla | C3 Career Consultants',
    description: 'Celebrating 23+ years of excellence: Rotary Visionary Leadership Award, Government of Punjab recognition, and 15+ prestigious honours in career counselling and community service.',
    url: 'https://c3consultants.in/awards',
    type: 'profile',
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
    title: 'Awards & Honours - Manik Raj Singla',
    description: '23+ years of excellence in leadership and community service. View prestigious awards and recognition.',
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
  // Enhanced Awards Schema
  const awardsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Awards & Honours - Manik Raj Singla',
    description: 'Comprehensive list of awards and recognition received for excellence in career counselling, community service, and leadership',
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
          description: 'Honored for serving as Editor of Rotary E-Directory of Zone 4, overseeing 12 Districts with 1,300 Clubs',
          datePublished: '2023',
          award: 'Rotary International Recognition',
          recognizingAuthority: {
            '@type': 'Organization',
            name: 'Rotary International',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Award',
          name: 'Independence Day Honour',
          description: 'Honored on 79th Independence Day for outstanding contribution to society',
          datePublished: '2025',
          award: 'Government of Punjab Recognition',
          recognizingAuthority: {
            '@type': 'GovernmentOrganization',
            name: 'Government of Punjab',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Role',
          roleName: 'Assistant Governor, Rotary International',
          description: 'Current role overseeing Interact Clubs in District RID 3090',
          startDate: '2024',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Role',
          roleName: 'President, Patiala District Table Tennis Association',
          description: 'Leading sports development and athlete training programs',
          startDate: '2023',
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Role',
          roleName: 'Former President, Rotary Club Patiala Midtown',
          description: 'Led community service and humanitarian initiatives',
          startDate: '2020',
          endDate: '2021',
        },
      },
    ],
  };

  // Person Schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manik Raj Singla',
    url: 'https://c3consultants.in/awards',
    image: 'https://c3consultants.in/images/achivement2.jpg',
    jobTitle: 'Career Counsellor & Founder',
    description: 'Award-winning career counsellor with 23+ years of experience, recognized for exceptional leadership in community service and education',
    award: [
      'Rotary Visionary Leadership Award 2024',
      'Zone 4 E-Directory Editor',
      'Independence Day Honour 2025',
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'Rotary International',
      },
    ],
    sameAs: [
      'https://www.facebook.com/manikrajsingla.CareerConsultant',
      'https://www.linkedin.com/in/manik-raj-singla-career-counsellor-and-consultant-5b154a203',
      'https://youtube.com/@manikrajsingla',
      'https://x.com/manikrajsingla',
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
        name: 'What awards has Manik Raj Singla received?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manik Raj Singla has received 15+ prestigious awards including the Rotary Visionary Leadership Award 2024, Zone 4 E-Directory Editor recognition from Rotary International, and Independence Day Honour 2025 from the Government of Punjab.',
        },
      },
      {
        '@type': 'Question',
        name: 'What leadership roles does Manik Raj Singla hold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently serving as Assistant Governor of Rotary International (District RID 3090), President of Patiala District Table Tennis Association, and Former President of Rotary Club Patiala Midtown.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
