import HeroCarousel from '@/app/components/HeroCarousel';
import StatsCounter from '@/app/components/StatsCounter';
import AboutPreview from '@/app/components/AboutPreview';
import ServicesSection from '@/app/components/ServicesSection';
import AchievementCarousel from '@/app/components/AchievementCarousel';
import TestimonialSlider from '@/app/components/TestimonialSlider';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'Best Career Counsellor in Patiala | C3 Career Consultants',
  description: 'Transform your career with C3 Career Consultants. Expert guidance, SSC/UPSC coaching & motivational speaking in Patiala. 23+ years experience. Book free consultation today!',
  keywords: ['career counsellor Patiala', 'best career consultant Punjab', 'SSC coaching', 'UPSC preparation', 'Manik Raj Singla'],
  openGraph: {
    title: 'Best Career Counsellor in Patiala | C3 Career Consultants',
    description: 'Transform your career with expert guidance. 23+ years experience in career counselling & exam preparation.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section with Auto Carousel */}
      <HeroCarousel />

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* About Preview Section */}
      <AboutPreview />

      {/* Services Section */}
      <ServicesSection />

      {/* Achievements Carousel */}
      <AchievementCarousel />

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
