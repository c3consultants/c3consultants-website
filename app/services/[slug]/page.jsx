import { notFound } from 'next/navigation';
import CareerCounsellingPage from '@/app/components/services/CareerCounsellingPage';
import CompetitiveExamsPage from '@/app/components/services/CompetitiveExamsPage';
import MotivationalSpeakingPage from '@/app/components/services/MotivationalSpeakingPage';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const metaData = {
    'career-counselling': {
      title: 'Best Career Counselling in Patiala | Top Consultancy | Psychometric Test & Guidance',
      description: 'Best career counselling & consultancy services in Patiala by Manik Raj Singla. Expert psychometric assessments, stream selection, course guidance for 10th/12th students. Personalized career roadmap from Patiala\'s top consultancy. 23+ years experience, 5000+ students guided. Book free session!',
      keywords: [
        'best career counselling Patiala',
        'career consultancy Patiala',
        'top consultancy Patiala',
        'career counsellor for students Patiala',
        'psychometric test Patiala',
        'stream selection after 10th Patiala',
        'course selection after 12th Punjab',
        'best career guidance Patiala',
        'vocational counselling Patiala',
        'Manik Raj Singla career counselling',
      ],
      openGraph: {
        title: 'Best Career Counselling & Consultancy Services in Patiala',
        description: 'Expert career guidance with psychometric assessments. Patiala\'s top consultancy for students.',
        url: 'https://c3consultants.in/services/career-counselling',
        type: 'website',
        locale: 'en_IN',
      },
    },
    'competitive-exams': {
      title: 'Best SSC UPSC Banking Coaching Patiala | Top Competitive Exam Consultancy',
      description: 'Best competitive exam coaching in Patiala - C3 Consultants. Expert SSC, UPSC, Banking, CTET coaching. Top-rated faculty, study material, mock tests. SSC CGL, IBPS PO/Clerk, Civil Services preparation. 95% success rate, 1000+ selections. Join Patiala\'s best consultancy for competitive exams!',
      keywords: [
        'best SSC coaching Patiala',
        'UPSC coaching Patiala',
        'competitive exam coaching Patiala',
        'banking exam coaching Patiala',
        'best consultancy competitive exams Patiala',
        'SSC CGL coaching Patiala',
        'IBPS coaching Patiala',
        'government exam preparation Patiala',
        'CTET coaching Punjab',
        'Manik Raj Singla coaching',
      ],
      openGraph: {
        title: 'Best SSC, UPSC & Banking Exam Coaching in Patiala',
        description: 'Top consultancy for competitive exams. 1000+ selections. Expert coaching.',
        url: 'https://c3consultants.in/services/competitive-exams',
        type: 'website',
        locale: 'en_IN',
      },
    },
    'motivational-speaking': {
      title: 'Best Motivational Speaker Patiala | Leadership Training & Corporate Workshops',
      description: 'Hire Patiala\'s best motivational speaker - Manik Raj Singla. Top consultancy for corporate training, student workshops, leadership development, personality enhancement. 10,000+ lives impacted. Book inspiring sessions for schools, colleges & organizations in Patiala, Punjab.',
      keywords: [
        'best motivational speaker Patiala',
        'motivational speaker consultancy Patiala',
        'corporate training Patiala',
        'leadership training Punjab',
        'personality development Patiala',
        'student motivation seminars Patiala',
        'success coach Patiala',
        'inspirational speaker Punjab',
        'Manik Raj Singla speaker',
      ],
      openGraph: {
        title: 'Best Motivational Speaker & Leadership Training | Patiala',
        description: 'Transform teams with inspiring sessions. 10,000+ lives impacted by Patiala\'s best.',
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
      description: 'Professional career counselling with psychometric assessments and personalized guidance in Patiala',
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
        description: 'Free initial consultation available',
      },
    },
    'competitive-exams': {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'C3 Career Consultants - Competitive Exam Coaching',
      description: 'Best consultancy in Patiala for SSC, UPSC, Banking and competitive exam coaching',
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
        name: 'Competitive Exam Coaching Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Course',
              name: 'SSC Exam Coaching',
              description: 'Comprehensive SSC CGL, CHSL, MTS preparation',
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
      description: 'Inspiring motivational sessions, corporate training, and leadership development programs in Patiala and Punjab',
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
