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
    default: 'C3 Career Consultants - Manik Raj Singla | Best Career Counsellor in Patiala',
    template: '%s | C3 Career Consultants Patiala'
  },
  description: 'Top-rated career counsellor in Patiala with 23+ years experience. Expert SSC/UPSC/Banking exam coaching, career guidance & motivational speaking. Book consultation with Manik Raj Singla today!',
  keywords: [
    // Primary Keywords
    'best career counsellor in Patiala',
    'career consultant Patiala',
    'Manik Raj Singla',
    'C3 Career Consultants',
    
    // Location-based Keywords
    'career counselling Patiala Punjab',
    'best career guidance Patiala',
    'career counselor near me Patiala',
    'top career consultant Punjab',
    
    // Service Keywords
    'SSC coaching Patiala',
    'UPSC coaching Patiala',
    'banking exam coaching Patiala',
    'competitive exam preparation Patiala',
    'government exam coaching Patiala',
    
    // Specific Exams
    'SSC CGL coaching Patiala',
    'IBPS coaching Patiala',
    'SBI PO coaching Patiala',
    'CTET coaching Patiala',
    'UGC NET coaching Patiala',
    
    // Career Services
    'career counselling after 10th Patiala',
    'career counselling after 12th Patiala',
    'stream selection guidance Patiala',
    'psychometric test Patiala',
    
    // Motivational Speaking
    'motivational speaker Patiala',
    'personality development Patiala',
    'corporate training Patiala',
    
    // Broad Keywords
    'best career counselor Punjab',
    'career guidance India',
    'career planning services',
  ],
  authors: [{ name: 'Manik Raj Singla', url: 'https://c3consultants.in/about' }],
  creator: 'C3 Career Consultants',
  publisher: 'C3 Career Consultants',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://c3consultants.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://c3consultants.in',
    title: 'Best Career Counsellor in Patiala | Expert Guidance by Manik Raj Singla',
    description: 'Transform your career with Patiala\'s top career counsellor. 23+ years experience, 5000+ students guided, 95% success rate. SSC/UPSC coaching & personalized career guidance.',
    siteName: 'C3 Career Consultants Patiala',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'C3 Career Consultants - Best Career Counsellor in Patiala',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Career Counsellor in Patiala | C3 Career Consultants',
    description: 'Transform your career with expert guidance. 23+ years experience in career counselling & exam preparation in Patiala, Punjab.',
    creator: '@manikrajsingla',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
  category: 'Education',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Patiala" />
        <meta name="geo.position" content="30.3398;76.3869" />
        <meta name="ICBM" content="30.3398, 76.3869" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      </head>
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
