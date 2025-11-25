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
    default: 'Best Career Consultancy in Patiala | C3 Consultants | Manik Raj Singla',
    template: '%s | C3 Career Consultants'
  },
  description: 'Patiala\'s best consultancy services for career guidance & competitive exams. C3 Career Consultants by Manik Raj Singla - 23+ years excellence in SSC, UPSC, Banking coaching. Top-rated career consultancy in Patiala, Punjab. 5000+ students guided. Call 9781312020',
  keywords: [
    // Primary Local Keywords
    'best consultancy in Patiala',
    'best career consultancy Patiala',
    'top consultancy services Patiala',
    'career consultancy Patiala Punjab',
    
    // Service + Location Keywords
    'best career counselling Patiala',
    'competitive exam coaching Patiala',
    'SSC coaching Patiala',
    'UPSC coaching Patiala',
    'banking exam coaching Patiala',
    
    // Brand Keywords
    'Manik Raj Singla',
    'C3 Career Consultants',
    'C3 consultancy Patiala',
    
    // Long-tail Keywords
    'best career guidance consultancy Patiala',
    'top competitive exam coaching center Patiala',
    'best career counsellor in Patiala Punjab',
    'government exam coaching Patiala',
    
    // Specific Exams + Location
    'SSC CGL coaching Patiala',
    'IBPS PO coaching Patiala',
    'UPSC civil services Patiala',
    'CTET coaching Patiala Punjab',
    
    // Career Services
    'career planning consultancy Patiala',
    'stream selection guidance Patiala',
    'psychometric assessment Patiala',
    
    // Additional Services
    'motivational speaker Patiala',
    'corporate training Patiala Punjab',
    'personality development Patiala',
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
    title: 'Best Career Consultancy in Patiala | Expert Guidance by Manik Raj Singla',
    description: 'Patiala\'s #1 career consultancy. 23+ years excellence, 5000+ students guided, 95% success rate. Best SSC/UPSC/Banking coaching & personalized career guidance in Punjab.',
    siteName: 'C3 Career Consultants - Best Consultancy in Patiala',
    images: [
      {
        url: 'https://c3consultants.in/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'C3 Career Consultants - Best Consultancy Services in Patiala',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Career Consultancy in Patiala | C3 Consultants',
    description: 'Top-rated consultancy for career guidance & competitive exams. 23+ years expertise in Patiala, Punjab.',
    creator: '@manikrajsingla',
    images: ['https://c3consultants.in/images/twitter-image.jpg'],
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
  },
  category: 'Education & Career Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Enhanced Local SEO Meta Tags */}
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Patiala, Punjab" />
        <meta name="geo.position" content="30.3398;76.3869" />
        <meta name="ICBM" content="30.3398, 76.3869" />
        
        {/* Additional Business Info */}
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="students, professionals, job seekers" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
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
