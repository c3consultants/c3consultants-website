import HeroCarousel from '@/app/components/HeroCarousel';
import StatsCounter from '@/app/components/StatsCounter';
import AboutPreview from '@/app/components/AboutPreview';
import ServicesSection from '@/app/components/ServicesSection';
import CTASection from '@/app/components/CTASection';
import AchievementShowcase from '@/app/components/AchievementShowcase';
import YouTubeVideos from '@/app/components/YouTubeVideos';

export const metadata = {
  title: 'Career Counselling in Patiala | Best Consultancy',
  description: 'Expert career counselling in Patiala by C3 Consultants. 23+ years, 50,000+ students guided. SSC, UPSC, Banking coaching. Call 8837604639 for free session.',
  keywords: [
    // Primary Target Keywords
    'career counselling in Patiala',
    'career counselling Patiala',
    'best career counselling Patiala',
    'career counsellor in Patiala',
    'career guidance Patiala',
    
    // Secondary Keywords
    'best consultancy in Patiala',
    'career consultancy Patiala',
    'psychometric test Patiala',
    'stream selection Patiala',
    
    // Service Keywords
    'competitive exam coaching Patiala',
    'SSC coaching Patiala',
    'UPSC coaching Patiala',
    'banking exam coaching Patiala',
    
    // Brand Keywords
    'C3 Career Consultants Patiala',
    'Manik Raj Singla career counsellor',
  ],
  alternates: {
    canonical: 'https://c3consultants.in',
  },
  openGraph: {
    title: 'Career Counselling in Patiala | C3 Consultants',
    description: 'Expert career counselling in Patiala. 23+ years, 50,000+ students guided. Best SSC/UPSC coaching.',
    url: 'https://c3consultants.in',
    type: 'website',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Career Counselling in Patiala - C3 Consultants',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling in Patiala | C3 Consultants',
    description: 'Expert career counselling & exam coaching. 23+ years excellence in Patiala.',
    creator: '@manikrajsingla',
    images: ['https://c3consultants.in/images/twitter-image.jpg'],
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

export default function Home() {
  // Primary Local Business Schema - Career Counselling Focus
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://c3consultants.in/#organization',
    name: 'C3 Career Consultants - Career Counselling in Patiala',
    alternateName: ['C3 Consultants', 'Best Career Counselling Patiala', 'Career Counsellor Patiala'],
    image: 'https://c3consultants.in/images/c3-logo.jpg',
    description: 'Leading career counselling service in Patiala offering expert career guidance, psychometric assessments, SSC coaching, UPSC coaching, and banking exam preparation. 23+ years excellence, 50,000+ students guided.',
    url: 'https://c3consultants.in',
    telephone: '+918837604639',
    email: 'manikrajsingla@gmail.com',
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SCO 4, Old Grain Market',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      postalCode: '147001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3398,
      longitude: 76.3869,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Patiala',
      },
      {
        '@type': 'State',
        name: 'Punjab',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Manik Raj Singla',
      jobTitle: 'Career Counsellor & Founder',
      description: 'Expert career counsellor in Patiala with 23+ years of experience in career guidance and competitive exam coaching',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.facebook.com/manikrajsingla.CareerConsultant',
      'https://www.linkedin.com/in/manik-raj-singla-career-counsellor-and-consultant-5b154a203',
      'https://youtube.com/@manikrajsingla',
      'https://x.com/manikrajsingla',
      'https://www.instagram.com/manikrajsingla',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Career Counselling & Coaching Services in Patiala',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Career Counselling in Patiala',
            description: 'Expert career counselling with psychometric assessments and personalized guidance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Stream Selection Guidance',
            description: 'Career counselling for 10th and 12th class students in Patiala',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SSC Coaching',
            description: 'Top SSC exam coaching with career counselling in Patiala',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UPSC Coaching',
            description: 'Best UPSC preparation with career counselling support',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Banking Exam Coaching',
            description: 'Expert banking exam coaching with career guidance',
          },
        },
      ],
    },
  };

  // Educational Organization Schema
  const educationalSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'C3 Career Consultants - Career Counselling Patiala',
    description: 'Premier career counselling and competitive exam coaching institute in Patiala',
    url: 'https://c3consultants.in',
    telephone: '+918837604639',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SCO 4, Old Grain Market',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      postalCode: '147001',
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
    ],
  };

  // FAQ Schema - Career Counselling Focused
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where can I get career counselling in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants provides expert career counselling in Patiala. Founded by Manik Raj Singla with 23+ years of experience, we have successfully guided 50,000+ students through comprehensive career counselling services including psychometric assessments, stream selection, and course guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is the best career counsellor in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manik Raj Singla is the best career counsellor in Patiala with 23+ years of experience. He offers personalized career counselling at C3 Career Consultants with a 95% success rate, helping students choose the right career path through psychometric tests and expert guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services are included in career counselling at C3 Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Career counselling at C3 Patiala includes: Psychometric assessments, aptitude tests, stream selection for 10th/12th students, course selection guidance, career roadmap planning, skill assessment, competitive exam guidance (SSC, UPSC, Banking), and personalized one-on-one counselling sessions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does career counselling cost in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants offers free initial career counselling session in Patiala. Our comprehensive career counselling packages are affordable and include psychometric tests, detailed reports, and personalized guidance. Contact +91 8837604639 for pricing details.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why choose C3 for career counselling in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Choose C3 for career counselling in Patiala because of: 23+ years expertise, 50,000+ students guided, 95% success rate, scientific psychometric assessments, personalized attention, expert career counsellor Manik Raj Singla, proven track record, and comprehensive support for SSC, UPSC, and Banking exam aspirants.',
        },
      },
    ],
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'C3 Career Consultants - Career Counselling Patiala',
    url: 'https://c3consultants.in',
    description: 'Best career counselling in Patiala for students seeking expert guidance and competitive exam coaching',
    publisher: {
      '@type': 'Organization',
      name: 'C3 Career Consultants',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://c3consultants.in/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="overflow-hidden">
        <HeroCarousel />
        <StatsCounter />
        <AboutPreview />
        <ServicesSection />
        <AchievementShowcase />
        <YouTubeVideos />
        <CTASection />
      </main>
    </>
  );
}
