import HeroCarousel from '@/app/components/HeroCarousel';
import StatsCounter from '@/app/components/StatsCounter';
import AboutPreview from '@/app/components/AboutPreview';
import ServicesSection from '@/app/components/ServicesSection';
import CTASection from '@/app/components/CTASection';
import AchievementShowcase from '@/app/components/AchievementShowcase';

export const metadata = {
  title: 'Best Consultancy Patiala | Top Career Guidance & Coaching',
  description: 'Best consultancy in Patiala - C3 by Manik Raj Singla. 23+ years, 5000+ students, 95% success. Expert SSC, UPSC, Banking coaching. Free consultation: 9781312020',
  keywords: [
    'best consultancy in Patiala',
    'best consultancy Patiala',
    'career consultancy Patiala',
    'top consultancy Patiala Punjab',
    'competitive exam coaching Patiala',
    'SSC coaching Patiala',
    'UPSC coaching Patiala',
    'best career counsellor Patiala',
    'Manik Raj Singla',
    'C3 Career Consultants',
  ],
  alternates: {
    canonical: 'https://c3consultants.in',
  },
  openGraph: {
    title: 'Best Consultancy in Patiala | C3 Career Consultants',
    description: 'Patiala\'s #1 consultancy. 23+ years, 5000+ students, 95% success. Best career guidance & exam coaching.',
    url: 'https://c3consultants.in',
    type: 'website',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Consultancy in Patiala',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Consultancy in Patiala | C3 Consultants',
    description: 'Top consultancy for career guidance & competitive exams. 23+ years excellence.',
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
  // Primary Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://c3consultants.in/#organization',
    name: 'C3 Career Consultants - Best Consultancy in Patiala',
    alternateName: ['C3 Consultants', 'Best Consultancy Patiala'],
    image: 'https://c3consultants.in/images/c3-logo.jpg',
    description: 'Best consultancy in Patiala offering career guidance, SSC coaching, UPSC coaching, banking exam preparation. 23+ years excellence, 5000+ students guided.',
    url: 'https://c3consultants.in',
    telephone: '+919781312020',
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
      description: 'Best career counsellor in Patiala with 23+ years experience',
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
      name: 'Best Consultancy Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Career Counselling',
            description: 'Best career guidance in Patiala',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SSC Coaching',
            description: 'Top SSC exam coaching in Patiala',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UPSC Coaching',
            description: 'Best UPSC preparation in Patiala',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Banking Exam Coaching',
            description: 'Expert banking exam coaching',
          },
        },
      ],
    },
  };

  // Educational Organization Schema
  const educationalSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'C3 Career Consultants',
    description: 'Best consultancy and coaching for competitive exams in Patiala',
    url: 'https://c3consultants.in',
    telephone: '+919781312020',
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

  // FAQ Schema - UNIQUE for Home page
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is the best consultancy in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants is the best consultancy in Patiala, founded by Manik Raj Singla with 23+ years of experience. We have successfully guided 5000+ students with a 95% success rate in career counselling and competitive exam preparation including SSC, UPSC, and Banking exams.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes C3 the best consultancy in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 is the best consultancy in Patiala because of: 23+ years of proven excellence, 5000+ students successfully guided, 95% success rate, expert faculty, personalized attention, comprehensive SSC/UPSC/Banking coaching, and founded by award-winning career counsellor Manik Raj Singla.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does the best consultancy in Patiala offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants, the best consultancy in Patiala, offers: Career counselling, psychometric assessments, SSC coaching (CGL, CHSL, MTS), UPSC coaching, Banking exam preparation (IBPS, SBI), CTET coaching, motivational speaking, and personality development programs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the best consultancy in Patiala located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best consultancy in Patiala - C3 Career Consultants is located at SCO 4, Old Grain Market, Patiala, Punjab 147001. Contact: +91 9781312020. Open Monday-Saturday, 9 AM-6 PM. Free consultation available.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the success rate of C3 Consultants Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants, the best consultancy in Patiala, maintains a 95% success rate with 1000+ selections in SSC, UPSC, Banking, and other government exams. Our proven track record makes us the top choice for competitive exam coaching in Punjab.',
        },
      },
    ],
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'C3 Career Consultants - Best Consultancy Patiala',
    url: 'https://c3consultants.in',
    description: 'Best consultancy in Patiala for career guidance and competitive exam coaching',
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
        <CTASection />
      </main>
    </>
  );
}
