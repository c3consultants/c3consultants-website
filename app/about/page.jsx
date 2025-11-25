import AboutHero from '@/app/components/about/AboutHero';
import FounderBio from '@/app/components/about/FounderBio';
import MissionVision from '@/app/components/about/MissionVision';
import TeamExpertise from '@/app/components/about/TeamExpertise';
import ImpactStats from '@/app/components/about/ImpactStats';
import ValuesSection from '@/app/components/about/ValuesSection';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'About Manik Raj Singla | Best Career Consultancy in Patiala | 23+ Years Excellence',
  description: 'Meet Manik Raj Singla, founder of C3 Career Consultants - Patiala\'s best consultancy services. MBA in Career Counselling, 23+ years experience, 5000+ students guided. Expert in SSC/UPSC coaching, competitive exams & career guidance in Patiala, Punjab.',
  keywords: [
    'Manik Raj Singla',
    'best consultancy in Patiala',
    'career consultancy Patiala',
    'top career counsellor Patiala',
    'C3 Career Consultants Patiala',
    'best career guidance Patiala Punjab',
    'experienced career consultant Patiala',
    'competitive exam coaching Patiala',
    'Manik Raj Singla biography',
    'career counselling expert Punjab',
  ],
  alternates: {
    canonical: 'https://c3consultants.in/about',
  },
  openGraph: {
    title: 'About Manik Raj Singla | Best Career Consultancy in Patiala',
    description: '23+ years of excellence. Patiala\'s most trusted career consultancy with 5000+ students successfully guided.',
    url: 'https://c3consultants.in/about',
    type: 'profile',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/manik-raj-singla.jpg',
        width: 1200,
        height: 630,
        alt: 'Manik Raj Singla - Best Career Counsellor in Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Manik Raj Singla | Career Consultancy Expert Patiala',
    description: '23+ years experience. Best consultancy services in Patiala for career guidance & competitive exams.',
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
  // Consolidated Person Schema (PRIMARY - use only here)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manik Raj Singla',
    url: 'https://c3consultants.in/about',
    image: 'https://c3consultants.in/images/manik-raj-singla.jpg',
    jobTitle: 'Career Counsellor & Founder',
    description: 'Leading career consultancy expert in Patiala with 23+ years of experience in career guidance, competitive exam coaching (SSC, UPSC, Banking), and motivational speaking.',
    worksFor: {
      '@type': 'Organization',
      name: 'C3 Career Consultants',
      url: 'https://c3consultants.in',
      description: 'Best consultancy services in Patiala for career guidance and competitive exams',
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
    telephone: '+919781312020',
    email: 'manikrajsingla@gmail.com',
    sameAs: [
      'https://www.facebook.com/manikrajsingla.CareerConsultant',
      'https://www.linkedin.com/in/manik-raj-singla-career-counsellor-and-consultant-5b154a203',
      'https://youtube.com/@manikrajsingla',
      'https://x.com/manikrajsingla',
    ],
    knowsAbout: [
      'Career Counselling',
      'Career Consultancy',
      'SSC Exam Preparation',
      'UPSC Coaching',
      'Banking Exam Coaching',
      'Competitive Exams',
      'Motivational Speaking',
      'Leadership Training',
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
    name: 'About C3 Career Consultants - Best Consultancy in Patiala',
    description: 'Leading career consultancy in Patiala since 2002. Expert guidance for career planning and competitive exam coaching with 23+ years of excellence.',
    url: 'https://c3consultants.in/about',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'C3 Career Consultants',
      description: 'Best consultancy services in Patiala for career guidance, competitive exam coaching (SSC, UPSC, Banking), and motivational speaking',
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
        containedIn: {
          '@type': 'State',
          name: 'Punjab',
        },
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
