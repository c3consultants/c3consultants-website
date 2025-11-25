import ResultsHero from '@/app/components/results/ResultsHero';
import ResultsCarousel from '@/app/components/results/ResultsCarousel';
import ResultsStats from '@/app/components/results/ResultsStats';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Student Results 2024-25 | Best Consultancy Patiala',
  description: '5000+ students guided by best consultancy. 93% CBSE, Bank PO success, Army Agniveer, UPSC. 95% success rate. Real results from Patiala.',
  keywords: [
    'best consultancy Patiala results',
    'student success Patiala 2024',
    '93% CBSE scorer Patiala',
    'Bank PO coaching Patiala results',
    'SSC selection Patiala',
    'competitive exam coaching success Patiala',
    'career consultancy results',
    'UPSC coaching Patiala success',
    'Manik Raj Singla students results',
  ],
  authors: [{ name: 'C3 Career Consultants' }],
  alternates: {
    canonical: 'https://c3consultants.in/results',
  },
  openGraph: {
    title: 'Student Results | Best Consultancy in Patiala',
    description: '5000+ students guided! 93% CBSE, Bank PO selections. 95% success rate.',
    url: 'https://c3consultants.in/results',
    type: 'website',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/image3.jpg',
        width: 1200,
        height: 630,
        alt: 'Student Success Stories - Best Consultancy Patiala',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Results | Best Consultancy Patiala',
    description: '5000+ students guided! 93% CBSE, Bank PO success. Real results.',
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
  // Results ItemList Schema
  const resultsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Student Success Stories - C3 Career Consultants',
    description: 'Verified achievements from Patiala\'s best consultancy for career guidance and competitive exam coaching',
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
          reviewBody: 'Scored 93% in CBSE Commerce with expert guidance from best consultancy in Patiala. Currently preparing for UPSC-IAS.',
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
          reviewBody: 'Achieved triple success: MBA admission, corporate job, and Army Agniveer exam cleared with C3 Consultants Patiala.',
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
          reviewBody: 'Successfully cleared Bank PO Mains with best competitive exam coaching in Patiala.',
        },
      },
    ],
  };

  // Organization with AggregateRating
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'C3 Career Consultants - Best Consultancy in Patiala',
    description: 'Leading career consultancy with 5000+ students guided and 95% success rate',
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

  // FAQ Schema - UNIQUE questions for Results page only
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is C3 the best consultancy in Patiala for results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 is the best consultancy in Patiala with 95% success rate, 5000+ students guided, and 1000+ selections in SSC, UPSC, Banking exams. Led by Manik Raj Singla with 23+ years expertise.',
        },
      },
      {
        '@type': 'Question',
        name: 'What results have students achieved at C3 Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Students achieved 93% CBSE, Bank PO selections, SSC success, Army Agniveer clearance, UPSC preparations, and 1000+ competitive exam selections with comprehensive coaching.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many students has C3 Consultants guided?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3, the best consultancy in Patiala, has guided 5000+ students over 23+ years with 1000+ selections and 95% success rate in competitive exams.',
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
