import { notFound } from 'next/navigation';
import CareerCounsellingPage from '@/app/components/services/CareerCounsellingPage';
import CompetitiveExamsPage from '@/app/components/services/CompetitiveExamsPage';
import MotivationalSpeakingPage from '@/app/components/services/MotivationalSpeakingPage';

export async function generateMetadata({ params }) {
  // Await params in Next.js 15+
  const { slug } = await params;
  
  const metaData = {
    'career-counselling': {
      title: 'Career Counselling Services - Expert Guidance | C3 Career Consultants',
      description: 'Professional career counselling with psychometric assessments, personalized guidance, and comprehensive career planning. Transform your career with expert consultation.',
      keywords: 'career counselling, career guidance, psychometric assessment, career planning, vocational guidance',
    },
    'competitive-exams': {
      title: 'SSC, UPSC, Banking Exam Coaching | C3 Career Consultants Patiala',
      description: 'Expert coaching for SSC CGL, UPSC, Banking exams (SBI, IBPS), CTET, GATE, CAT, UGC NET. Comprehensive study material, mock tests, and proven strategies.',
      keywords: 'SSC coaching, UPSC preparation, banking exam coaching, CTET coaching, competitive exam preparation, government exam coaching',
    },
    'motivational-speaking': {
      title: 'Motivational Speaking & Leadership Training | C3 Career Consultants',
      description: 'Transform lives with inspiring motivational sessions, leadership development, and personality enhancement programs. Build confidence and achieve excellence.',
      keywords: 'motivational speaking, leadership training, personality development, confidence building, corporate training',
    },
  };

  if (!metaData[slug]) {
    return {
      title: '404 - Page Not Found | C3 Career Consultants',
      description: 'The page you are looking for could not be found.',
    };
  }

  return metaData[slug];
}

export async function generateStaticParams() {
  return [
    { slug: 'career-counselling' },
    { slug: 'competitive-exams' },
    { slug: 'motivational-speaking' },
  ];
}

export default async function ServicePage({ params }) {
  // Await params in Next.js 15+
  const { slug } = await params;

  const serviceComponents = {
    'career-counselling': CareerCounsellingPage,
    'competitive-exams': CompetitiveExamsPage,
    'motivational-speaking': MotivationalSpeakingPage,
  };

  const ServiceComponent = serviceComponents[slug];

  if (!ServiceComponent) {
    notFound();
  }

  return <ServiceComponent />;
}
