import ContactHero from '@/app/components/contact/ContactHero';
import ContactForm from '@/app/components/contact/ContactForm';
import ContactInfo from '@/app/components/contact/ContactInfo';
import MapLocation from '@/app/components/contact/MapLocation';
import ContactFAQ from '@/app/components/contact/ContactFAQ';

export const metadata = {
  title: 'Contact C3 Career Consultants Patiala | Book Consultation - Call 9781312020',
  description: 'Contact best career counsellor in Patiala. Book free consultation with Manik Raj Singla. Visit SCO 4, Old Grain Market. Call +91-9781312020. Career guidance, SSC/UPSC coaching. Open Mon-Sat 9AM-6PM.',
  keywords: [
    'contact career counsellor Patiala',
    'book consultation Patiala',
    'C3 consultants contact number',
    'career counselling appointment Patiala',
    'Manik Raj Singla contact',
    'career consultant phone number',
    'career guidance Patiala address',
    'SSC coaching contact Patiala',
  ],
  alternates: {
    canonical: 'https://c3consultants.in/contact',
  },
  openGraph: {
    title: 'Contact C3 Career Consultants | Book Free Consultation',
    description: 'Get in touch with Patiala\'s leading career counsellor. Free consultation available. Call +91-9781312020 or visit our office.',
    url: 'https://c3consultants.in/contact',
    type: 'website',
    images: [
      {
        url: 'https://c3consultants.in/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact C3 Career Consultants Patiala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact C3 Career Consultants | Book Free Consultation',
    description: 'Connect with expert career counsellor in Patiala. Call +91-9781312020 for free consultation.',
    creator: '@manikrajsingla',
  },
};

export default function ContactPage() {
  // Contact Page Schema
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact C3 Career Consultants',
    description: 'Contact page for booking consultations and getting in touch with C3 Career Consultants in Patiala.',
    url: 'https://c3consultants.in/contact',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'C3 Career Consultants',
      telephone: '+919781312020',
      email: 'contact@c3consultants.in',
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

  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://c3consultants.in/#localbusiness',
    name: 'C3 Career Consultants',
    image: 'https://c3consultants.in/images/c3-office.jpg',
    telephone: '+919781312020',
    email: 'contact@c3consultants.in',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
