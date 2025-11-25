'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';
import { HiAcademicCap, HiLightBulb, HiSpeakerphone } from 'react-icons/hi';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      title: 'Career Counselling',
      description: 'Personalized one-on-one guidance, psychometric assessments, and comprehensive career roadmap planning to help you discover your true potential.',
      features: [
        'Psychometric assessments',
        'Career roadmap planning',
        'One-on-one sessions',
      ],
      icon: HiAcademicCap,
      link: '/services/career-counselling',
      image: '/images/image2.jpg',
    },
    {
      title: 'Competitive Exams',
      description: 'Expert coaching for SSC, UPSC, and other government exams with comprehensive study material, mock tests, and proven strategies.',
      features: [
        'Expert faculty guidance',
        'Mock tests & analysis',
        'Study materials',
      ],
      icon: HiLightBulb,
      link: '/services/competitive-exams',
      image: '/images/image3.jpg',
    },
    {
      title: 'Motivational Training',
      description: 'Inspiring sessions and workshops designed to boost confidence, develop leadership skills, and unlock your full potential.',
      features: [
        'Leadership development',
        'Confidence building',
        'Communication skills',
      ],
      icon: HiSpeakerphone,
      link: '/services/motivational-speaking',
      image: '/images/image1.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section ref={ref} className="section-padding bg-neutral-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-xs md:text-sm font-bold mb-4 shadow-sm"
          >
            What We Offer
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4 leading-tight"
          >
            Our Comprehensive <span className="text-gradient">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed"
          >
            Tailored solutions designed to guide you through every stage of your career journey. From personalized counselling to competitive exam preparation, we provide comprehensive support.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-5"
        >
          <p className="text-neutral-700 mb-6 text-base md:text-lg">
            Not sure which service is right for you?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-lg shadow-lg-navy hover:shadow-xl-navy transform hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
