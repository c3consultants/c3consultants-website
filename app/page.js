import HeroCarousel from '@/app/components/HeroCarousel';
import StatsCounter from '@/app/components/StatsCounter';
import AboutPreview from '@/app/components/AboutPreview';
import ServicesSection from '@/app/components/ServicesSection';
import CTASection from '@/app/components/CTASection';
import AchievementShowcase from '@/app/components/AchievementShowcase';

export const metadata = {
  title: 'Best Career Consultancy in Patiala | Top SSC UPSC Coaching - Manik Raj Singla',
  description: 'C3 Career Consultants - Patiala\'s #1 best consultancy for career guidance & competitive exam coaching. Expert SSC, UPSC, Banking preparation. Founded by Manik Raj Singla. 23+ years excellence, 5000+ students guided, 95% success rate. Best consultancy services in Patiala, Punjab. Book free consultation: 9781312020',
  keywords: [
    'best consultancy in Patiala',
    'best career consultancy Patiala',
    'top consultancy Patiala Punjab',
    'career consultancy Patiala',
    'competitive exam coaching Patiala',
    'SSC coaching Patiala',
    'UPSC coaching Patiala',
    'best career counsellor Patiala',
    'Manik Raj Singla',
    'C3 Career Consultants Patiala',
    'banking exam coaching Patiala',
    'government exam preparation Patiala',
  ],
  alternates: {
    canonical: 'https://c3consultants.in',
  },
  openGraph: {
    title: 'Best Career Consultancy in Patiala | C3 Consultants - Manik Raj Singla',
    description: 'Patiala\'s most trusted consultancy for career guidance & exam coaching. 23+ years experience, 5000+ success stories. Best SSC/UPSC/Banking coaching.',
    url: 'https://c3consultants.in',
    type: 'website',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Career Consultancy in Patiala - C3 Consultants',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Career Consultancy in Patiala | C3 Consultants',
    description: 'Top-rated consultancy for career guidance & competitive exams. 23+ years excellence in Patiala.',
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
    alternateName: 'C3 Consultants Patiala',
    image: 'https://c3consultants.in/images/c3-logo.jpg',
    description: 'Best career consultancy in Patiala offering professional career guidance, competitive exam coaching (SSC, UPSC, Banking), and motivational speaking services. 23+ years of excellence with 5000+ students successfully guided.',
    url: 'https://c3consultants.in',
    telephone: '+919781312020',
    email: 'manikrajsingla@gmail.com',
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Credit Card, Debit Card',
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
        containedIn: {
          '@type': 'State',
          name: 'Punjab',
        },
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
      description: 'Best career counsellor in Patiala with 23+ years of experience',
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
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Best Consultancy Services in Patiala',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Career Counselling & Consultancy',
            description: 'Best career guidance and consultancy services in Patiala',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SSC Exam Coaching',
            description: 'Top SSC CGL, CHSL, MTS coaching in Patiala',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UPSC Exam Coaching',
            description: 'Best UPSC Civil Services coaching in Patiala',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Banking Exam Coaching',
            description: 'Expert IBPS, SBI coaching in Patiala',
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
    description: 'Best consultancy and coaching institute for competitive exams in Patiala - SSC, UPSC, Banking preparation',
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
    areaServed: {
      '@type': 'City',
      name: 'Patiala',
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

  // FAQ Schema - UNIQUE questions for Home page only
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is the best consultancy in Patiala for career guidance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants is the best consultancy in Patiala for career guidance, founded by Manik Raj Singla with 23+ years of experience. We have successfully guided 5000+ students with a 95% success rate in career counselling and competitive exam preparation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does the best consultancy in Patiala offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants, the best consultancy in Patiala, offers comprehensive services including career counselling, psychometric assessments, SSC coaching, UPSC coaching, Banking exam preparation, CTET coaching, motivational speaking, and personality development programs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is C3 considered the best career consultancy in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants is the best career consultancy in Patiala due to 23+ years of proven excellence, 5000+ students successfully guided, 95% success rate, expert faculty, personalized attention, and comprehensive coaching for SSC, UPSC, and Banking exams. Founded by award-winning career counsellor Manik Raj Singla.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the best consultancy in Patiala located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants, the best consultancy in Patiala, is located at SCO 4, Old Grain Market, Patiala, Punjab 147001. Contact: +91 9781312020. Open Monday to Saturday, 9 AM to 6 PM. Free initial consultation available.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the success rate of competitive exam coaching at C3 Consultants Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants maintains a 95% success rate for competitive exam coaching in Patiala. With 1000+ selections in SSC, UPSC, Banking, and other government exams, we are recognized as the best consultancy for competitive exam preparation in Punjab.',
        },
      },
    ],
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'C3 Career Consultants - Best Consultancy in Patiala',
    url: 'https://c3consultants.in',
    description: 'Best career consultancy in Patiala for career guidance and competitive exam coaching',
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
