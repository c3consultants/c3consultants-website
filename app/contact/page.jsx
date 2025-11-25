import ContactHero from '@/app/components/contact/ContactHero';
import ContactForm from '@/app/components/contact/ContactForm';
import ContactInfo from '@/app/components/contact/ContactInfo';
import MapLocation from '@/app/components/contact/MapLocation';
import ContactFAQ from '@/app/components/contact/ContactFAQ';

export const metadata = {
  title: 'Contact Best Consultancy Patiala | Call 9781312020',
  description: 'Contact C3 - Patiala\'s best consultancy. Free consultation. Visit SCO 4, Old Grain Market. Call 9781312020. Mon-Sat 9AM-6PM.',
  keywords: [
    'contact career consultancy Patiala',
    'best consultancy Patiala contact',
    'book consultation Patiala',
    'C3 consultants contact number',
    'career counselling appointment Patiala',
    'Manik Raj Singla contact',
    'career guidance Patiala address',
    'competitive exam coaching Patiala contact',
  ],
  alternates: {
    canonical: 'https://c3consultants.in/contact',
  },
  openGraph: {
    title: 'Contact Best Consultancy Patiala | Free Consultation',
    description: 'Get in touch with Patiala\'s best consultancy. Free consultation. Call 9781312020.',
    url: 'https://c3consultants.in/contact',
    type: 'website',
    locale: 'en_IN',
    siteName: 'C3 Career Consultants',
    images: [
      {
        url: 'https://c3consultants.in/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Best Consultancy in Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Best Consultancy Patiala | C3 Consultants',
    description: 'Book free consultation with Patiala\'s best. Call 9781312020.',
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
    name: 'Contact C3 Career Consultants - Best Consultancy in Patiala',
    description: 'Contact page for booking consultations at Patiala\'s best career consultancy and competitive exam coaching center',
    url: 'https://c3consultants.in/contact',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'C3 Career Consultants',
      description: 'Best consultancy services in Patiala for career guidance and competitive exam coaching',
      telephone: '+919781312020',
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
    name: 'C3 Career Consultants - Best Consultancy in Patiala',
    description: 'Leading career consultancy and competitive exam coaching center in Patiala with 23+ years of excellence',
    image: 'https://c3consultants.in/images/c3-office.jpg',
    telephone: '+919781312020',
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
