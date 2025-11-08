import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://c3consultants.in'),
  title: {
    default: 'Best Career Counsellor in Patiala | C3 Career Consultants',
    template: '%s | C3 Career Consultants'
  },
  description: 'Transform your career with C3 Career Consultants. Expert guidance, SSC/UPSC coaching & motivational speaking in Patiala. 23+ years experience. Book free consultation today!',
  keywords: ['career counsellor Patiala', 'best career consultant Punjab', 'SSC coaching Patiala', 'UPSC preparation', 'career guidance India', 'Manik Raj Singla', 'competitive exam coaching', 'motivational speaker Patiala'],
  authors: [{ name: 'C3 Career Consultants' }],
  creator: 'EaseBuilds',
  publisher: 'C3 Career Consultants',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://c3consultants.in',
    title: 'Best Career Counsellor in Patiala | C3 Career Consultants',
    description: 'Transform your career with C3 Career Consultants. Expert guidance, SSC/UPSC coaching & motivational speaking in Patiala. 23+ years experience.',
    siteName: 'C3 Career Consultants',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Career Counsellor in Patiala | C3 Career Consultants',
    description: 'Transform your career with expert guidance. 23+ years experience in career counselling & exam preparation.',
    creator: '@manikrajsingla',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-neutral-800">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
