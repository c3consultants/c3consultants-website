import AboutHero from '@/app/components/about/AboutHero';
import FounderBio from '@/app/components/about/FounderBio';
import MissionVision from '@/app/components/about/MissionVision';
import TeamExpertise from '@/app/components/about/TeamExpertise';
import ImpactStats from '@/app/components/about/ImpactStats';
import ValuesSection from '@/app/components/about/ValuesSection';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'About Manik Raj Singla | Career Counsellor Patiala',
  description: 'Manik Raj Singla - Expert career counsellor in Patiala. 23+ years in career counselling, 50,000+ students guided, 95% success. Founder of C3.',
  keywords: [
    'Manik Raj Singla career counsellor',
    'career counsellor in Patiala',
    'best career counsellor Patiala',
    'career counselling expert Patiala',
    'C3 Career Consultants founder',
    'experienced career counsellor Punjab',
    'Manik Raj Singla biography',
    'top career counsellor Patiala',
    'career guidance expert Patiala',
  ],
  alternates: {
    canonical: 'https://c3consultants.in/about',
  },
  openGraph: {
    title: 'About Manik Raj Singla | Career Counsellor Patiala',
    description: 'Expert career counsellor with 23+ years experience. 50,000+ students guided through career counselling in Patiala.',
    url: 'https://c3consultants.in/about',
    type: 'profile',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/manik-raj-singla.jpg',
        width: 1200,
        height: 630,
        alt: 'Manik Raj Singla - Career Counsellor Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Manik Raj Singla | Career Counsellor Patiala',
    description: '23+ years in career counselling. 50,000+ students guided in Patiala.',
    creator: '@manikrajsingla',
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

export default function AboutPage() {
  // Consolidated Person Schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manik Raj Singla',
    url: 'https://c3consultants.in/about',
    image: 'https://c3consultants.in/images/manik-raj-singla.jpg',
    jobTitle: 'Career Counsellor & Founder',
    description: 'Leading career counsellor in Patiala with 23+ years of experience in career counselling, psychometric assessments, competitive exam coaching (SSC, UPSC, Banking), and motivational speaking.',
    worksFor: {
      '@type': 'Organization',
      name: 'C3 Career Consultants',
      url: 'https://c3consultants.in',
      description: 'Best career counselling services in Patiala',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Punjabi University Patiala',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'SCO 4, Old Grain Market',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      postalCode: '147001',
      addressCountry: 'IN',
    },
    telephone: '+918837604639',
    email: 'manikrajsingla@gmail.com',
    sameAs: [
      'https://www.facebook.com/manikrajsingla.CareerConsultant',
      'https://www.linkedin.com/in/manik-raj-singla-career-counsellor-and-consultant-5b154a203',
      'https://youtube.com/@manikrajsingla',
      'https://x.com/manikrajsingla',
    ],
    knowsAbout: [
      'Career Counselling',
      'Career Guidance',
      'Psychometric Assessments',
      'SSC Exam Preparation',
      'UPSC Coaching',
      'Banking Exam Coaching',
      'Stream Selection',
      'Course Selection',
      'Motivational Speaking',
    ],
    award: [
      'Rotary Visionary Leadership Award 2024',
      'Zone 4 E-Directory Editor',
      'Independence Day Honour 2025',
    ],
  };

  // About Page Schema
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About C3 Career Consultants - Career Counselling in Patiala',
    description: 'Leading career counselling service in Patiala since 2002. Expert guidance for career planning through psychometric tests and personalized counselling.',
    url: 'https://c3consultants.in/about',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'C3 Career Consultants',
      description: 'Best career counselling services in Patiala offering psychometric assessments, stream selection, competitive exam coaching',
      foundingDate: '2002',
      founder: {
        '@type': 'Person',
        name: 'Manik Raj Singla',
      },
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
        name: 'About Us',
        item: 'https://c3consultants.in/about',
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
        name: 'Who is Manik Raj Singla?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manik Raj Singla is the best career counsellor in Patiala with 23+ years of experience in career counselling. He has successfully guided 50,000+ students through psychometric assessments, stream selection, and career planning. Founder of C3 Career Consultants.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes Manik Raj Singla a leading career counsellor in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Manik Raj Singla is a leading career counsellor in Patiala because of: 23+ years expertise in career counselling, MBA in Career Counselling, 50,000+ students guided, 95% success rate, 15+ awards, expert in psychometric assessments, and personalized career guidance approach.',
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AboutHero />
      <FounderBio />
      <MissionVision />
      <ImpactStats />
      <ValuesSection />
      <TeamExpertise />
      <CTASection />
    </>
  );
}
