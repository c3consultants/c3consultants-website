import ResultsHero from '@/app/components/results/ResultsHero';
import ResultsCarousel from '@/app/components/results/ResultsCarousel';
import ResultsStats from '@/app/components/results/ResultsStats';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Student Results & Success Stories 2024-25 | 93% CBSE, Bank PO | C3 Patiala',
  description: '5000+ students successfully guided! Real success stories: Prabhkirat Singh 93% CBSE Commerce, Bank PO selections, Army Agniveer success, UPSC aspirants. 95% success rate in SSC, Banking & competitive exams. Expert career counselling by Manik Raj Singla, Patiala.',
  keywords: [
    'student results Patiala 2024',
    'C3 consultants success stories',
    '93% CBSE scorer Patiala',
    'Bank PO results Patiala',
    'SSC selection Patiala',
    'UPSC coaching results',
    'Army Agniveer success',
    'career counselling success rate',
    'competitive exam results Patiala',
    'student achievements C3',
    'Prabhkirat Singh 93%',
  ],
  authors: [{ name: 'C3 Career Consultants' }],
  alternates: {
    canonical: 'https://c3consultants.in/results',
  },
  openGraph: {
    title: 'Student Results & Success Stories | C3 Career Consultants Patiala',
    description: '5000+ students guided to success! 93% CBSE scorers, Bank PO selections, UPSC aspirants. Real results, real transformation. 95% success rate.',
    url: 'https://c3consultants.in/results',
    type: 'website',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/image3.jpg',
        width: 1200,
        height: 630,
        alt: 'Student Success Stories - C3 Career Consultants',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Results & Success Stories | C3 Patiala',
    description: '5000+ students guided! 93% CBSE scorers, Bank PO selections, competitive exam success. See real results.',
    creator: '@manikrajsingla',
    images: ['https://c3consultants.in/images/image3.jpg'],
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

export default function ResultsPage() {
  // Enhanced Results Schema
  const resultsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Student Success Stories - C3 Career Consultants',
    description: 'Verified achievements and success stories from students guided by C3 Career Consultants',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Career Counselling',
            provider: {
              '@type': 'Organization',
              name: 'C3 Career Consultants',
            },
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          author: {
            '@type': 'Person',
            name: 'Prabhkirat Singh',
          },
          reviewBody: 'Scored 93% in CBSE Commerce with focused guidance. Currently preparing for UPSC-IAS.',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Career Counselling',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          author: {
            '@type': 'Person',
            name: 'Graduate Student',
          },
          reviewBody: 'Achieved triple success: MBA admission, corporate job, and Army Agniveer exam cleared.',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Career Counselling',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          author: {
            '@type': 'Person',
            name: 'Srishti',
          },
          reviewBody: 'Secured First Position in Class 11th. Gold Medal winner. UPSC-IAS aspirant 2031.',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Banking Exam Coaching',
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          author: {
            '@type': 'Person',
            name: 'Prerna',
          },
          reviewBody: 'Successfully cleared Bank PO Probationary Officer Mains Exam.',
        },
      },
    ],
  };

  // Organization Schema with Statistics
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'C3 Career Consultants',
    description: 'Leading career counselling institute with 5000+ students guided and 95% success rate',
    url: 'https://c3consultants.in/results',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '5000',
      bestRating: '5',
      worstRating: '1',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
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
        name: 'Student Results',
        item: 'https://c3consultants.in/results',
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
        name: 'What is the success rate of C3 Career Consultants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants has a 95% success rate with 5000+ students successfully guided in SSC, UPSC, Banking, and other competitive exams.',
        },
      },
      {
        '@type': 'Question',
        name: 'What results have students achieved at C3 Career Consultants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Students have achieved remarkable results including 93% in CBSE, Bank PO selections, Army Agniveer success, UPSC IAS preparations, and 1000+ competitive exam selections.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many students has C3 Career Consultants guided?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants has successfully guided 5000+ students over 23+ years with 1000+ selections in various competitive exams.',
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resultsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ResultsHero />
      <ResultsCarousel />
      <ResultsStats />
      <CTASection />
    </>
  );
}
