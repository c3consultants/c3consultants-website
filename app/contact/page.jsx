import ContactHero from '@/app/components/contact/ContactHero';
import ContactForm from '@/app/components/contact/ContactForm';
import ContactInfo from '@/app/components/contact/ContactInfo';
import MapLocation from '@/app/components/contact/MapLocation';
import ContactFAQ from '@/app/components/contact/ContactFAQ';

export const metadata = {
  title: 'Contact for Career Counselling Patiala | Call 8837604639',
  description: 'Contact C3 for career counselling in Patiala. Free consultation. Visit SCO 4, Old Grain Market. Call 8837604639. Mon-Sat 9AM-6PM.',
  keywords: [
    'contact career counselling Patiala',
    'career counsellor contact Patiala',
    'book career counselling Patiala',
    'career counselling appointment Patiala',
    'C3 career counselling contact',
    'Manik Raj Singla contact',
    'career guidance consultation Patiala',
    'free career counselling Patiala',
  ],
  alternates: {
    canonical: 'https://c3consultants.in/contact',
  },
  openGraph: {
    title: 'Contact for Career Counselling in Patiala | Free Session',
    description: 'Get expert career counselling in Patiala. Free consultation. Call 8837604639.',
    url: 'https://c3consultants.in/contact',
    type: 'website',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Career Counselling Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact for Career Counselling Patiala | C3',
    description: 'Book free career counselling session in Patiala. Call 8837604639.',
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

export default function ContactPage() {
  // Contact Page Schema
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact C3 Career Consultants - Career Counselling Patiala',
    description: 'Contact page for booking career counselling sessions and consultations at Patiala\'s best career counselling center',
    url: 'https://c3consultants.in/contact',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'C3 Career Consultants - Career Counselling Patiala',
      description: 'Expert career counselling services in Patiala with free initial consultation',
      telephone: '+918837604639',
      email: 'manikrajsingla@gmail.com',
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
      priceRange: '$$',
      paymentAccepted: 'Cash, UPI, Card',
    },
  };

  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://c3consultants.in/#localbusiness',
    name: 'C3 Career Consultants - Career Counselling in Patiala',
    description: 'Leading career counselling center in Patiala with 23+ years of excellence and 50,000+ students guided',
    image: 'https://c3consultants.in/images/c3-office.jpg',
    telephone: '+918837604639',
    email: 'manikrajsingla@gmail.com',
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
    url: 'https://c3consultants.in',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    hasMap: 'https://www.google.com/maps/search/SCO+4+Old+Grain+Market+Patiala+Punjab',
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
        name: 'Contact',
        item: 'https://c3consultants.in/contact',
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
        name: 'How can I book career counselling in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book career counselling in Patiala by calling +91 8837604639, visiting our office at SCO 4, Old Grain Market, Patiala, or filling the contact form on our website. Free initial consultation available Monday-Saturday, 9 AM-6 PM.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the best career counselling center in Patiala located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C3 Career Consultants, the best career counselling center in Patiala, is located at SCO 4, Old Grain Market, Patiala, Punjab 147001. Easy to reach and centrally located for career counselling sessions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is career counselling consultation free in Patiala?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, C3 Career Consultants offers free initial career counselling consultation in Patiala. This session helps understand your needs and how our career counselling services can benefit you. Call 8837604639 to book.',
        },
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="overflow-x-hidden w-full">
        <ContactHero />
        <div className="w-full overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
        <MapLocation />
        <ContactFAQ />
      </div>
    </>
  );
}
