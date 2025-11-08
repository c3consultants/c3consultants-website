import AboutHero from '@/app/components/about/AboutHero';
import FounderBio from '@/app/components/about/FounderBio';
import MissionVision from '@/app/components/about/MissionVision';
import TeamExpertise from '@/app/components/about/TeamExpertise';
import ImpactStats from '@/app/components/about/ImpactStats';
import ValuesSection from '@/app/components/about/ValuesSection';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'About Manik Raj Singla - 23+ Years Career Counselling Expert | C3 Career Consultants',
  description: 'Meet Manik Raj Singla, founder of C3 Career Consultants Patiala. MBA in Career Counselling, 23+ years experience, 5000+ students guided. Expert in SSC/UPSC coaching & motivational speaking. Learn our mission & success story.',
  keywords: [
    'Manik Raj Singla career counsellor',
    'about C3 Career Consultants',
    'career counsellor background Patiala',
    'Manik Raj Singla biography',
    'C3 consultants founder',
    'career counselling expert Punjab',
    'experienced career consultant Patiala',
    'career counsellor qualifications',
  ],
  alternates: {
    canonical: 'https://c3consultants.in/about',
  },
  openGraph: {
    title: 'About Manik Raj Singla - Career Counselling Expert | C3 Patiala',
    description: '23+ years of excellence in career counselling. 5000+ students successfully guided by Manik Raj Singla in Patiala, Punjab.',
    url: 'https://c3consultants.in/about',
    type: 'profile',
    images: [
      {
        url: 'https://c3consultants.in/images/manik-raj-singla.jpg',
        width: 1200,
        height: 630,
        alt: 'Manik Raj Singla - Career Counsellor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Manik Raj Singla - Career Counselling Expert',
    description: '23+ years experience in career counselling & competitive exam coaching. Founder of C3 Career Consultants Patiala.',
    creator: '@manikrajsingla',
  },
};

export default function AboutPage() {
  // Person Schema for Manik Raj Singla
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manik Raj Singla',
    url: 'https://c3consultants.in/about',
    image: 'https://c3consultants.in/images/manik-raj-singla.jpg',
    jobTitle: 'Career Counsellor & Founder',
    description: 'Leading career counsellor with 23+ years of experience in career guidance, competitive exam coaching, and motivational speaking.',
    worksFor: {
      '@type': 'Organization',
      name: 'C3 Career Consultants',
      url: 'https://c3consultants.in',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Punjabi University',
        sameAs: 'https://punjabiuniversity.ac.in',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Patiala',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
    telephone: '+919781312020',
    email: 'contact@c3consultants.in',
    sameAs: [
      'https://www.facebook.com/manikrajsingla.CareerConsultant',
      'https://www.linkedin.com/in/manik-raj-singla-career-counsellor-and-consultant-5b154a203',
      'https://youtube.com/@manikrajsingla',
      'https://x.com/manikrajsingla',
    ],
    knowsAbout: [
      'Career Counselling',
      'SSC Exam Preparation',
      'UPSC Coaching',
      'Banking Exam Coaching',
      'Motivational Speaking',
      'Leadership Training',
    ],
  };

  // About Page Schema
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About C3 Career Consultants',
    description: 'Learn about C3 Career Consultants, founded by Manik Raj Singla, with 23+ years of excellence in career guidance and competitive exam coaching.',
    url: 'https://c3consultants.in/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'C3 Career Consultants',
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
