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
    default: 'Career Counselling in Patiala | C3 Consultants',
    template: '%s | C3 Career Counselling Patiala'
  },
  description: 'Expert career counselling in Patiala by C3 Consultants. 23+ years, 50,000+ students guided. Psychometric tests, stream selection, SSC/UPSC coaching. Call 8837604639',
  keywords: [
    // Primary Keywords - Career Counselling Focus
    'career counselling in Patiala',
    'career counselling Patiala',
    'best career counselling Patiala',
    'career counsellor in Patiala',
    'career counsellor Patiala',
    'career guidance Patiala',
    
    // Long-tail Career Counselling Keywords
    'career counselling after 10th Patiala',
    'career counselling after 12th Patiala',
    'career counselling for students Patiala',
    'psychometric test Patiala',
    'stream selection Patiala',
    
    // Secondary Keywords
    'best consultancy in Patiala',
    'career consultancy Patiala',
    'competitive exam coaching Patiala',
    
    // Service Keywords
    'SSC coaching Patiala',
    'UPSC coaching Patiala',
    'banking coaching Patiala',
    'government exam coaching Patiala',
    
    // Brand Keywords
    'C3 Career Consultants Patiala',
    'Manik Raj Singla career counsellor',
    'Manik Raj Singla Patiala',
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
    title: 'Career Counselling in Patiala | C3 Consultants',
    description: 'Expert career counselling in Patiala. 23+ years, 50,000+ students guided. Best career guidance & exam coaching.',
    siteName: 'C3 Career Consultants - Career Counselling Patiala',
    images: [
      {
        url: 'https://c3consultants.in/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Career Counselling in Patiala - C3 Consultants',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Counselling in Patiala | C3 Consultants',
    description: 'Expert career counselling & exam coaching. 23+ years excellence in Patiala.',
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
  category: 'Education & Career Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Enhanced Local SEO - Career Counselling Focus */}
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Patiala, Punjab" />
        <meta name="geo.position" content="30.3398;76.3869" />
        <meta name="ICBM" content="30.3398, 76.3869" />
        
        {/* Additional Meta */}
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="Global" />
        <meta name="audience" content="Students, Parents, Job Seekers" />
        <meta name="target" content="career counselling, students, professionals" />
        
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
