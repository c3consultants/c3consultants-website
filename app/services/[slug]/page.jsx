import { notFound } from 'next/navigation';
import CareerCounsellingPage from '@/app/components/services/CareerCounsellingPage';
import CompetitiveExamsPage from '@/app/components/services/CompetitiveExamsPage';
import MotivationalSpeakingPage from '@/app/components/services/MotivationalSpeakingPage';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const metaData = {
    'career-counselling': {
      title: 'Best Career Counselling in Patiala | Psychometric Test & Guidance - C3 Consultants',
      description: 'Expert career counselling services in Patiala by Manik Raj Singla. Psychometric assessments, stream selection, course guidance for 10th/12th students. Personalized career roadmap. 23+ years experience. Book free session!',
      keywords: [
        'career counselling Patiala',
        'career counsellor for students Patiala',
        'psychometric test Patiala',
        'stream selection after 10th Patiala',
        'course selection after 12th Punjab',
        'career guidance Patiala',
        'vocational counselling Patiala',
        'career planning services Punjab',
      ],
      openGraph: {
        title: 'Best Career Counselling Services in Patiala | C3 Consultants',
        description: 'Expert career guidance with psychometric assessments. Help students choose right career path.',
        url: 'https://c3consultants.in/services/career-counselling',
        type: 'website',
      },
    },
    'competitive-exams': {
      title: 'SSC UPSC Banking Coaching Patiala | Best Exam Preparation - C3 Consultants',
      description: 'Top-rated SSC, UPSC, Banking, CTET exam coaching in Patiala. Expert faculty, study material, mock tests. SSC CGL, IBPS PO/Clerk, Civil Services preparation. 95% success rate. Join 1000+ selections. Enroll now!',
      keywords: [
        'SSC coaching Patiala',
        'UPSC coaching Patiala',
        'banking exam coaching Patiala',
        'CTET coaching Punjab',
        'SSC CGL coaching Patiala',
        'IBPS coaching Patiala',
        'civil services coaching Punjab',
        'government exam preparation Patiala',
        'competitive exam coaching near me',
      ],
      openGraph: {
        title: 'SSC, UPSC & Banking Exam Coaching in Patiala | C3 Consultants',
        description: 'Comprehensive competitive exam preparation. 1000+ selections. Expert coaching for SSC, UPSC, Banking exams.',
        url: 'https://c3consultants.in/services/competitive-exams',
        type: 'website',
      },
    },
    'motivational-speaking': {
      title: 'Motivational Speaker Patiala | Leadership Training & Corporate Workshops - C3',
      description: 'Hire top motivational speaker in Patiala - Manik Raj Singla. Corporate training, student workshops, leadership development, personality enhancement. 10,000+ lives impacted. Book inspiring sessions for schools, colleges & organizations.',
      keywords: [
        'motivational speaker Patiala',
        'corporate training Patiala',
        'leadership training Punjab',
        'personality development Patiala',
        'motivational workshops Patiala',
        'student motivation seminars',
        'success coach Patiala',
        'inspirational speaker Punjab',
      ],
      openGraph: {
        title: 'Motivational Speaker & Leadership Training | C3 Patiala',
        description: 'Transform teams with inspiring motivational sessions. 10,000+ lives impacted.',
        url: 'https://c3consultants.in/services/motivational-speaking',
        type: 'website',
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
      name: 'Career Counselling Services',
      description: 'Professional career counselling with psychometric assessments and personalized guidance.',
      provider: {
        '@type': 'Organization',
        name: 'C3 Career Consultants',
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
      description: 'Expert coaching for SSC, UPSC, Banking and other competitive exams.',
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
        name: 'Exam Coaching Services',
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
        ],
      },
    },
    'motivational-speaking': {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Motivational Speaking',
      name: 'Motivational Speaking & Leadership Training',
      description: 'Inspiring motivational sessions, corporate training, and leadership development programs.',
      provider: {
        '@type': 'Person',
        name: 'Manik Raj Singla',
        jobTitle: 'Motivational Speaker',
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
