import { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import FounderBio from '@/app/components/about/FounderBio';
import MissionVision from '@/app/components/about/MissionVision';
import TeamExpertise from '@/app/components/about/TeamExpertise';
import ImpactStats from '@/app/components/about/ImpactStats';
import ValuesSection from '@/app/components/about/ValuesSection';
import CTASection from '@/app/components/CTASection';

export const metadata = {
  title: 'About Us - C3 Career Consultants',
  description: 'Learn about Manik Raj Singla and C3 Career Consultants\' 20+ years of excellence in career guidance.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderBio />
      <MissionVision />
      <ImpactStats />
      <ValuesSection />
      <TeamExpertise />
      <CTASection />
    </>
  );
}
