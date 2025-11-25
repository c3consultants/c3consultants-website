import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';

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
    default: 'Best Consultancy Patiala | C3 Career Consultants',
    template: '%s | C3 Consultants Patiala'
  },
  description: 'Best consultancy in Patiala for career guidance & competitive exams. C3 by Manik Raj Singla - 23+ years, 5000+ students, 95% success. SSC, UPSC, Banking coaching.',
  keywords: [
    'best consultancy in Patiala',
    'best consultancy Patiala',
    'top consultancy Patiala',
    'career consultancy Patiala',
    'best career counselling Patiala',
    'competitive exam coaching Patiala',
    'SSC coaching Patiala',
    'UPSC coaching Patiala',
    'banking coaching Patiala',
    'C3 Career Consultants',
    'Manik Raj Singla',
    'best career consultancy Patiala Punjab',
    'top coaching institute Patiala',
    'government exam coaching Patiala',
    'SSC CGL coaching Patiala',
    'IBPS coaching Patiala',
    'career guidance Patiala',
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
    title: 'Best Consultancy in Patiala | C3 Career Consultants',
    description: 'Patiala\'s #1 consultancy. 23+ years, 5000+ students, 95% success. Best career guidance & exam coaching.',
    siteName: 'C3 Career Consultants - Best Consultancy Patiala',
    images: [
      {
        url: 'https://c3consultants.in/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Consultancy Services in Patiala',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Consultancy in Patiala | C3 Consultants',
    description: 'Top consultancy for career guidance & competitive exams. 23+ years excellence in Patiala.',
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
    google: 'your-google-verification-code-here',
  },
  category: 'Education',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Enhanced Local SEO */}
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Patiala, Punjab" />
        <meta name="geo.position" content="30.3398;76.3869" />
        <meta name="ICBM" content="30.3398, 76.3869" />
        
        {/* Additional Meta */}
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="Global" />
        
        {/* Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/images/c3-logo.jpg" />
      </head>
      <body className="font-sans antialiased bg-white text-neutral-800">
        {/* Google Analytics Component */}
        <GoogleAnalytics />

        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
