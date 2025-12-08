import ResultsHero from '@/app/components/results/ResultsHero';
import ResultsCarousel from '@/app/components/results/ResultsCarousel';
import ResultsStats from '@/app/components/results/ResultsStats';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Student Results | Career Counselling Success Patiala',
  description: '50,000+ students guided through career counselling in Patiala. 93% CBSE, Bank PO, UPSC success. 95% rate. Real results from C3 Consultants.',
  keywords: [
    'career counselling success Patiala',
    'student results Patiala',
    'career counselling results',
    'best consultancy Patiala results',
    '93% CBSE Patiala',
    'Bank PO success Patiala',
    'SSC selection Patiala',
    'UPSC coaching success Patiala',
    'career guidance success stories',
    'Manik Raj Singla students',
  ],
  authors: [{ name: 'C3 Career Consultants' }],
  alternates: {
    canonical: 'https://c3consultants.in/results',
  },
  openGraph: {
    title: 'Student Results | Career Counselling Success Patiala',
    description: '50,000+ students guided! 93% CBSE, Bank PO selections through expert career counselling.',
    url: 'https://c3consultants.in/results',
    type: 'website',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/image3.jpg',
        width: 1200,
        height: 630,
        alt: 'Student Success - Career Counselling Patiala',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Results | Career Counselling Patiala',
    description: '50,000+ students guided! Real success through career counselling.',
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
    name: 'Student Success Stories - Career Counselling Patiala',
    description: 'Verified achievements from career counselling and coaching in Patiala by C3 Consultants',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Career Counselling in Patiala',
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
          reviewBody: 'Scored 93% in CBSE Commerce with expert career counselling from C3 Consultants in Patiala. The career guidance helped me choose the right path. Currently preparing for UPSC-IAS.',
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
          reviewBody: 'Achieved triple success through career counselling in Patiala: MBA admission, corporate job, and Army Agniveer exam cleared. C3 Consultants provided excellent guidance.',
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
          reviewBody: 'Secured First Position in Class 11th with career counselling support. Gold Medal winner. UPSC-IAS aspirant 2031.',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Banking Exam Coaching with Career Counselling',
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
          reviewBody: 'Successfully cleared Bank PO Mains with career counselling and coaching from C3 Patiala.',
        },
      },
    ],
  };

  // Organization with AggregateRating
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'C3 Career Consultants - Career Counselling Patiala',
    description: 'Leading career counselling service in Patiala with 50,000+ students guided and 95% success rate',
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
        name: 'What results do students achieve with career counselling in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Students achieve exceptional results with career counselling in Patiala at C3: 93% in CBSE, Bank PO selections, SSC CGL success, Army Agniveer clearance, UPSC preparations, and 1000+ competitive exam selections. Our career counselling ensures 95% success rate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many students benefit from career counselling at C3 Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants has provided career counselling in Patiala to 50,000+ students over 23+ years with 1000+ selections in competitive exams and 95% success rate. Our personalized career counselling approach delivers real results.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does career counselling really help in competitive exam success?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, career counselling in Patiala at C3 significantly improves competitive exam success. We help students choose the right exam based on aptitude, create study strategies, and provide ongoing guidance, resulting in 95% success rate and 1000+ selections.',
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
