import { notFound } from 'next/navigation';
import CareerCounsellingPage from '@/app/components/services/CareerCounsellingPage';
import CompetitiveExamsPage from '@/app/components/services/CompetitiveExamsPage';
import MotivationalSpeakingPage from '@/app/components/services/MotivationalSpeakingPage';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const metaData = {
    'career-counselling': {
      title: 'Career Counselling in Patiala | Expert Guidance',
      description: 'Expert career counselling in Patiala by C3. Psychometric tests, stream selection, course guidance. 23+ years, 50,000+ students. Call 8837604639',
      keywords: [
        // Primary Keywords
        'career counselling in Patiala',
        'career counselling Patiala',
        'best career counselling Patiala',
        'career counsellor in Patiala',
        'career guidance Patiala',
        
        // Service-Specific Keywords
        'psychometric test Patiala',
        'stream selection after 10th Patiala',
        'course selection after 12th Patiala',
        'career counselling for students Patiala',
        'vocational counselling Patiala',
        
        // Brand Keywords
        'C3 career counselling Patiala',
        'Manik Raj Singla career counselling',
        
        // Long-tail Keywords
        'best career counselling services Patiala',
        'career counselling after 10th Patiala',
        'career counselling after 12th Patiala',
      ],
      openGraph: {
        title: 'Career Counselling in Patiala | C3 Consultants',
        description: 'Expert career counselling with psychometric tests. Best guidance in Patiala.',
        url: 'https://c3consultants.in/services/career-counselling',
        type: 'website',
        locale: 'en_IN',
      },
    },
    'competitive-exams': {
      title: 'SSC UPSC Coaching Patiala | Career Counselling & Coaching',
      description: 'Best competitive exam coaching in Patiala with career counselling. SSC, UPSC, Banking. 95% success rate, 1000+ selections. Call 8837604639',
      keywords: [
        'SSC coaching Patiala',
        'UPSC coaching Patiala',
        'competitive exam coaching Patiala',
        'banking exam coaching Patiala',
        'career counselling for competitive exams Patiala',
        'SSC CGL coaching Patiala',
        'IBPS coaching Patiala',
        'government exam coaching Patiala',
        'CTET coaching Patiala',
        'career guidance for competitive exams',
      ],
      openGraph: {
        title: 'SSC, UPSC & Banking Coaching with Career Counselling Patiala',
        description: 'Best coaching with career counselling. 1000+ selections. Expert guidance.',
        url: 'https://c3consultants.in/services/competitive-exams',
        type: 'website',
        locale: 'en_IN',
      },
    },
    'motivational-speaking': {
      title: 'Motivational Speaker Patiala | Career Counselling Expert',
      description: 'Motivational speaker & career counselling expert Patiala - Manik Raj Singla. Corporate training, leadership, workshops. 10,000+ inspired.',
      keywords: [
        'motivational speaker Patiala',
        'motivational speaker career counsellor Patiala',
        'corporate training Patiala',
        'leadership training Patiala',
        'personality development Patiala',
        'student motivation Patiala',
        'career counselling workshops Patiala',
        'success coach Patiala',
        'Manik Raj Singla speaker',
      ],
      openGraph: {
        title: 'Motivational Speaker & Career Counselling Expert Patiala',
        description: 'Transform teams with inspiring sessions and career guidance. 10,000+ impacted.',
        url: 'https://c3consultants.in/services/motivational-speaking',
        type: 'website',
        locale: 'en_IN',
      },
    },
  };

  if (!metaData[slug]) {
    return {
      title: '404 - Service Not Found | C3 Career Consultants',
      description: 'The service you are looking for could not be found.',
    };
  }

  return {
    ...metaData[slug],
    alternates: {
      canonical: `https://c3consultants.in/services/${slug}`,
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
}

export async function generateStaticParams() {
  return [
    { slug: 'career-counselling' },
    { slug: 'competitive-exams' },
    { slug: 'motivational-speaking' },
  ];
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const serviceComponents = {
    'career-counselling': CareerCounsellingPage,
    'competitive-exams': CompetitiveExamsPage,
    'motivational-speaking': MotivationalSpeakingPage,
  };

  const ServiceComponent = serviceComponents[slug];

  if (!ServiceComponent) {
    notFound();
  }

  // Service Schemas - Career Counselling Focused
  const serviceSchemas = {
    'career-counselling': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Career Counselling',
      name: 'Career Counselling Services in Patiala',
      description: 'Professional career counselling in Patiala with psychometric assessments, stream selection guidance, and personalized career planning',
      provider: {
        '@type': 'ProfessionalService',
        name: 'C3 Career Consultants',
        description: 'Best career counselling services in Patiala',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'SCO 4, Old Grain Market',
          addressLocality: 'Patiala',
          addressRegion: 'Punjab',
          postalCode: '147001',
          addressCountry: 'IN',
        },
        telephone: '+918837604639',
      },
      areaServed: {
        '@type': 'City',
        name: 'Patiala',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        price: '0',
        priceCurrency: 'INR',
        description: 'Free initial career counselling session',
      },
    },
    'competitive-exams': {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'C3 Career Consultants - Competitive Exam Coaching Patiala',
      description: 'Best competitive exam coaching with career counselling in Patiala for SSC, UPSC, Banking exams',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'SCO 4, Old Grain Market',
        addressLocality: 'Patiala',
        addressRegion: 'Punjab',
        postalCode: '147001',
        addressCountry: 'IN',
      },
      telephone: '+918837604639',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Competitive Exam Coaching with Career Counselling',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: 'SSC Exam Coaching',
              description: 'SSC CGL, CHSL, MTS preparation with career counselling',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: 'UPSC Coaching',
              description: 'Civil Services coaching with career guidance in Patiala',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: 'Banking Exam Coaching',
              description: 'IBPS, SBI preparation with career counselling support',
            },
          },
        ],
      },
    },
    'motivational-speaking': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Motivational Speaking',
      name: 'Motivational Speaking & Career Counselling',
      description: 'Inspiring motivational sessions combined with career counselling expertise in Patiala',
      provider: {
        '@type': 'Person',
        name: 'Manik Raj Singla',
        jobTitle: 'Motivational Speaker & Career Counsellor',
        description: 'Best motivational speaker and career counselling expert in Patiala',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Patiala',
          addressRegion: 'Punjab',
          addressCountry: 'IN',
        },
        telephone: '+918837604639',
      },
      areaServed: [
        {
          '@type': 'State',
          name: 'Punjab',
        },
        {
          '@type': 'Country',
          name: 'India',
        },
      ],
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
        name: 'Services',
        item: 'https://c3consultants.in/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        item: `https://c3consultants.in/services/${slug}`,
      },
    ],
  };

  // FAQ Schemas for each service
  const faqSchemas = {
    'career-counselling': {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is included in career counselling in Patiala at C3?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Career counselling in Patiala at C3 includes: Psychometric assessments, aptitude tests, stream selection for 10th/12th students, course selection guidance, career roadmap planning, skill assessment, one-on-one counselling sessions, and ongoing support. Free initial consultation available.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does career counselling help students in Patiala?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Career counselling in Patiala helps students by: identifying strengths through psychometric tests, choosing the right stream after 10th/12th, selecting suitable courses, planning career roadmap, understanding market trends, and making informed decisions. C3 has guided 50,000+ students successfully.',
          },
        },
      ],
    },
    'competitive-exams': {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does C3 provide career counselling with competitive exam coaching?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, C3 provides integrated career counselling with competitive exam coaching in Patiala. We help students choose the right exam (SSC, UPSC, Banking) based on their aptitude, provide strategic guidance, and support throughout preparation.',
          },
        },
      ],
    },
    'motivational-speaking': {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does Manik Raj Singla provide career counselling during workshops?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Manik Raj Singla combines motivational speaking with career counselling in Patiala. His workshops include career guidance, goal setting, and personalized advice for students and professionals.',
          },
        },
      ],
    },
  };

  return (
    <>
      {/* Structured Data */}
      {serviceSchemas[slug] && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas[slug]) }}
        />
      )}
      {faqSchemas[slug] && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemas[slug]) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ServiceComponent />
    </>
  );
}
