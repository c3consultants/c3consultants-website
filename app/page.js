import HeroCarousel from '@/app/components/HeroCarousel';
import StatsCounter from '@/app/components/StatsCounter';
import AboutPreview from '@/app/components/AboutPreview';
import ServicesSection from '@/app/components/ServicesSection';
import AchievementCarousel from '@/app/components/AchievementCarousel';
import TestimonialSlider from '@/app/components/TestimonialSlider';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Best Career Counsellor in Patiala| Expert SSC UPSC Coaching - Manik Raj Singla',
  description: 'C3 Career Consultants - #1 career counsellor in Patiala, Punjab. 23+ years expertise in career guidance, SSC, UPSC, Banking exam coaching. Founded by Manik Raj Singla. 5000+ success stories. Free consultation available. Call 9781312020',
  keywords: [
    'best career counsellor in Patiala',
    'career consultant Patiala Punjab',
    'SSC coaching Patiala',
    'UPSC coaching Patiala',
    'Manik Raj Singla',
    'C3 Career Consultants',
    'career guidance Patiala',
    'competitive exam coaching Patiala',
    'motivational speaker Patiala',
    'banking exam coaching Punjab',
  ],
  alternates: {
    canonical: 'https://c3consultants.in',
  },
  openGraph: {
    title: 'Best Career Counsellor in Patiala | C3 Career Consultants',
    description: 'Expert career counselling, SSC/UPSC coaching & motivational speaking in Patiala. 23+ years experience, 5000+ students guided.',
    url: 'https://c3consultants.in',
    type: 'website',
    images: [
      {
        url: 'https://c3consultants.in/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'C3 Career Consultants Patiala',
      },
    ],
  },
};

export default function Home() {
  // Structured Data (JSON-LD) for Local Business
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://c3consultants.in',
    name: 'C3 Career Consultants',
    image: 'https://c3consultants.in/images/c3-logo.jpg',
    description: 'Professional career counselling, competitive exam coaching (SSC, UPSC, Banking), and motivational speaking services in Patiala, Punjab.',
    url: 'https://c3consultants.in',
    telephone: '+919781312020',
    email: 'contact@c3consultants.in',
    priceRange: '$$',
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
      description: '23+ years of experience in career counselling and competitive exam coaching',
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
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'C3 Career Consultants',
    url: 'https://c3consultants.in',
    logo: 'https://c3consultants.in/images/c3-logo.jpg',
    description: 'Leading career counselling and competitive exam coaching institute in Patiala, Punjab.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9781312020',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Punjabi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SCO 4, Old Grain Market',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      postalCode: '147001',
      addressCountry: 'IN',
    },
  };

  // Educational Organization Schema
  const educationalSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'C3 Career Consultants',
    description: 'Professional coaching institute for SSC, UPSC, Banking and other competitive exams in Patiala.',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Career Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Career Counselling',
            description: 'Personalized career guidance and psychometric assessments',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SSC Exam Coaching',
            description: 'Comprehensive SSC CGL, CHSL, MTS, GD preparation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UPSC Exam Coaching',
            description: 'Civil Services, CDS, NDA coaching',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Banking Exam Coaching',
            description: 'SBI, IBPS Clerk & PO preparation',
          },
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
    ],
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the best career counsellor in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manik Raj Singla from C3 Career Consultants is the leading career counsellor in Patiala with 23+ years of experience and 5000+ students successfully guided.',
        },
      },
      {
        '@type': 'Question',
        name: 'What services does C3 Career Consultants offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants offers career counselling, SSC/UPSC/Banking exam coaching, motivational speaking, personality development, and comprehensive career guidance services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is C3 Career Consultants located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants is located at SCO 4, Old Grain Market, Patiala, Punjab 147001. Contact: +91 9781312020',
        },
      },
      {
        '@type': 'Question',
        name: 'Does C3 Career Consultants offer free consultation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, C3 Career Consultants offers a free initial consultation session to understand your career goals and provide guidance.',
        },
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalSchema) }}
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
        {/* Hero Section with Auto Carousel */}
        <HeroCarousel />

        {/* Stats Counter Section */}
        <StatsCounter />

        {/* About Preview Section */}
        <AboutPreview />

        {/* Services Section */}
        <ServicesSection />

        {/* Achievements Carousel */}
        <AchievementCarousel />

        {/* Testimonials Section */}
        <TestimonialSlider />

        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  );
}
