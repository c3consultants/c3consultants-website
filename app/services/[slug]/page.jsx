import { notFound } from 'next/navigation';
import CareerCounsellingPage from '@/app/components/services/CareerCounsellingPage';
import CompetitiveExamsPage from '@/app/components/services/CompetitiveExamsPage';
import MotivationalSpeakingPage from '@/app/components/services/MotivationalSpeakingPage';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const metaData = {
    'career-counselling': {
      title: 'Best Career Counselling Patiala | Top Consultancy',
      description: 'Best career counselling in Patiala by Manik Raj Singla. Psychometric tests, stream selection, course guidance. 23+ years, 5000+ students.',
      keywords: [
        'best career counselling Patiala',
        'career consultancy Patiala',
        'top consultancy Patiala',
        'career counsellor students Patiala',
        'psychometric test Patiala',
        'stream selection 10th Patiala',
        'course selection 12th Punjab',
        'best career guidance Patiala',
        'vocational counselling Patiala',
        'Manik Raj Singla counselling',
      ],
      openGraph: {
        title: 'Best Career Counselling & Consultancy in Patiala',
        description: 'Expert career guidance with psychometric tests. Patiala\'s top consultancy.',
        url: 'https://c3consultants.in/services/career-counselling',
        type: 'website',
        locale: 'en_IN',
      },
    },
    'competitive-exams': {
      title: 'Best SSC UPSC Banking Coaching Patiala | Top Coaching',
      description: 'Best competitive exam coaching in Patiala. Expert SSC, UPSC, Banking coaching. 95% success rate, 1000+ selections. Join top consultancy.',
      keywords: [
        'best SSC coaching Patiala',
        'UPSC coaching Patiala',
        'competitive exam coaching Patiala',
        'banking exam coaching Patiala',
        'best consultancy exams Patiala',
        'SSC CGL coaching Patiala',
        'IBPS coaching Patiala',
        'government exam Patiala',
        'CTET coaching Punjab',
        'Manik Raj Singla coaching',
      ],
      openGraph: {
        title: 'Best SSC, UPSC & Banking Coaching in Patiala',
        description: 'Top consultancy for competitive exams. 1000+ selections. Expert coaching.',
        url: 'https://c3consultants.in/services/competitive-exams',
        type: 'website',
        locale: 'en_IN',
      },
    },
    'motivational-speaking': {
      title: 'Best Motivational Speaker Patiala | Corporate Training',
      description: 'Best motivational speaker Patiala - Manik Raj Singla. Corporate training, leadership development, workshops. 10,000+ lives impacted.',
      keywords: [
        'best motivational speaker Patiala',
        'motivational speaker consultancy Patiala',
        'corporate training Patiala',
        'leadership training Punjab',
        'personality development Patiala',
        'student motivation Patiala',
        'success coach Patiala',
        'inspirational speaker Punjab',
        'Manik Raj Singla speaker',
      ],
      openGraph: {
        title: 'Best Motivational Speaker & Leadership Training Patiala',
        description: 'Transform teams with inspiring sessions. 10,000+ lives impacted.',
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

  // Service Schemas
  const serviceSchemas = {
    'career-counselling': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Career Counselling',
      name: 'Career Counselling & Consultancy Services',
      description: 'Professional career counselling with psychometric assessments in Patiala',
      provider: {
        '@type': 'ProfessionalService',
        name: 'C3 Career Consultants',
        description: 'Best consultancy services in Patiala',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'SCO 4, Old Grain Market',
          addressLocality: 'Patiala',
          addressRegion: 'Punjab',
          postalCode: '147001',
          addressCountry: 'IN',
        },
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
        description: 'Free initial consultation',
      },
    },
    'competitive-exams': {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'C3 Career Consultants - Competitive Exam Coaching',
      description: 'Best consultancy in Patiala for SSC, UPSC, Banking coaching',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'SCO 4, Old Grain Market',
        addressLocality: 'Patiala',
        addressRegion: 'Punjab',
        postalCode: '147001',
        addressCountry: 'IN',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Competitive Exam Coaching',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: 'SSC Exam Coaching',
              description: 'SSC CGL, CHSL, MTS preparation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: 'UPSC Coaching',
              description: 'Civil Services, CDS, NDA coaching',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: 'Banking Exam Coaching',
              description: 'IBPS PO, Clerk, SBI preparation',
            },
          },
        ],
      },
    },
    'motivational-speaking': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Motivational Speaking',
      name: 'Motivational Speaking & Leadership Training',
      description: 'Inspiring sessions, corporate training, leadership development in Patiala',
      provider: {
        '@type': 'Person',
        name: 'Manik Raj Singla',
        jobTitle: 'Motivational Speaker',
        description: 'Best motivational speaker in Patiala',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Patiala',
          addressRegion: 'Punjab',
          addressCountry: 'IN',
        },
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

  return (
    <>
      {/* Structured Data */}
      {serviceSchemas[slug] && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas[slug]) }}
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
