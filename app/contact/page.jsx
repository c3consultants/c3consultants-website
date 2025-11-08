import { Metadata } from 'next';
import ContactHero from '@/app/components/contact/ContactHero';
import ContactForm from '@/app/components/contact/ContactForm';
import ContactInfo from '@/app/components/contact/ContactInfo';
import MapLocation from '@/app/components/contact/MapLocation';
import ContactFAQ from '@/app/components/contact/ContactFAQ';

export const metadata = {
  title: 'Contact Us - Book Free Consultation | C3 Career Consultants',
  description: 'Get in touch with C3 Career Consultants. Book a free consultation, call us at +91 9781312020, or visit our Patiala office. We\'re here to guide your career journey.',
  keywords: 'contact career consultant, book consultation, career guidance patiala, SSC coaching contact, UPSC coaching patiala',
  openGraph: {
    title: 'Contact C3 Career Consultants - Book Free Consultation',
    description: 'Connect with expert career counsellor Manik Raj Singla. Book your free consultation today.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
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
  );
}
