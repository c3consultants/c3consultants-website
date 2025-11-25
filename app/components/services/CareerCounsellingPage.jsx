'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { 
  HiCheckCircle, 
  HiUserGroup, 
  HiChartBar, 
  HiLightBulb, 
  HiAcademicCap, 
  HiTrendingUp,
  HiSparkles,
  HiArrowRight,
  HiClock,
  HiShieldCheck,
  HiX
} from 'react-icons/hi';
import Link from 'next/link';
import CTASection from '../CTASection';

const CareerCounsellingPage = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedImage, setSelectedImage] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Gallery images
  const galleryImages = [
    '/images/career2.jpg',
    '/images/career3.jpg',
    '/images/career1.jpg',
    '/images/image1.jpg',
    '/images/career5.jpg',
    '/images/career6.jpg',
    '/images/career7.jpg',
    '/images/career8.jpg',
    '/images/career9.jpg',
    '/images/career10.jpg',
  ];

  const features = [
    {
      icon: HiUserGroup,
      title: 'One-on-One Counselling',
      description: 'Personalized sessions tailored to your unique strengths, interests, and career aspirations with dedicated mentor support.',
      highlights: ['Individual attention', 'Customized approach', 'Flexible scheduling'],
    },
    {
      icon: HiChartBar,
      title: 'Psychometric Assessments',
      description: 'Scientific aptitude and personality tests using internationally recognized tools to identify your ideal career path.',
      highlights: ['Validated tests', 'Detailed reports', 'Career matching'],
    },
    {
      icon: HiLightBulb,
      title: 'Career Roadmap Planning',
      description: 'Comprehensive career planning with clear milestones, actionable strategies, and step-by-step guidance.',
      highlights: ['Goal setting', 'Timeline creation', 'Progress tracking'],
    },
    {
      icon: HiAcademicCap,
      title: 'Course & Stream Selection',
      description: 'Expert guidance on choosing the right educational path after 10th, 12th, and graduation based on market trends.',
      highlights: ['Stream analysis', 'College selection', 'Entrance exam prep'],
    },
    {
      icon: HiTrendingUp,
      title: 'Skill Development',
      description: 'Identify skill gaps and get recommendations for professional development courses and certifications.',
      highlights: ['Skill assessment', 'Training programs', 'Certification guidance'],
    },
    {
      icon: HiShieldCheck,
      title: 'Career Transition Support',
      description: 'Guidance for professionals looking to switch careers or advance in their field with industry insights.',
      highlights: ['Career change strategy', 'Resume building', 'Interview prep'],
    },
  ];

  const process = [
    {
      step: '01',
      icon: HiUserGroup,
      title: 'Initial Consultation',
      description: 'Free 30-minute session to understand your background, academic history, interests, career goals, and concerns.',
      duration: '30 mins',
    },
    {
      step: '02',
      icon: HiChartBar,
      title: 'Assessment & Analysis',
      description: 'Comprehensive psychometric tests including aptitude, personality, and interest assessments with detailed evaluation.',
      duration: '2-3 hours',
    },
    {
      step: '03',
      icon: HiLightBulb,
      title: 'Career Exploration',
      description: 'Explore multiple career options aligned with your profile, discuss pros and cons of each path.',
      duration: '1 hour',
    },
    {
      step: '04',
      icon: HiAcademicCap,
      title: 'Action Plan Development',
      description: 'Create detailed roadmap with educational milestones, skill requirements, and timeline for achieving career goals.',
      duration: '1-2 hours',
    },
    {
      step: '05',
      icon: HiShieldCheck,
      title: 'Ongoing Support',
      description: 'Regular follow-up sessions, continuous guidance, doubt clearing, and course corrections throughout your journey.',
      duration: 'Lifetime',
    },
  ];

  const benefits = [
    {
      icon: HiSparkles,
      title: 'Clarity & Confidence',
      description: 'Gain clear understanding of your strengths and build confidence in career decisions',
    },
    {
      icon: HiLightBulb,
      title: 'Informed Decisions',
      description: 'Make data-driven choices based on assessments and expert guidance',
    },
    {
      icon: HiShieldCheck,
      title: 'Avoid Mistakes',
      description: 'Prevent costly errors in career selection with professional insights',
    },
    {
      icon: HiTrendingUp,
      title: 'Career Growth',
      description: 'Access hidden opportunities and strategies for rapid career advancement',
    },
    {
      icon: HiAcademicCap,
      title: 'Right Education',
      description: 'Choose courses and institutions that align with your career goals',
    },
    {
      icon: HiUserGroup,
      title: 'Personalized Strategy',
      description: 'Get customized action plans tailored to your unique situation',
    },
    {
      icon: HiCheckCircle,
      title: 'Long-term Satisfaction',
      description: 'Build a fulfilling career that brings joy and success',
    },
    {
      icon: HiClock,
      title: 'Work-Life Balance',
      description: 'Plan careers that offer both professional success and personal happiness',
    },
  ];

  // Modal swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      const currentIndex = galleryImages.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex]);
    }
    
    if (isRightSwipe) {
      const currentIndex = galleryImages.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex]);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <>
      {/* Hero Section with Real Image */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/image1.jpg"
            alt="Career Counselling Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Light overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/65 to-neutral-900/70" />
        </div>

        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl"
        />
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-400 text-sm font-bold mb-8">
                <HiSparkles className="w-4 h-4" />
                <span>India's Leading Career Counselling</span>
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Transform Your Future with<br />
                Expert <span className="text-gradient-gold">Career Guidance</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                23+ years of experience helping students discover their true potential through 
                personalized counselling, psychometric assessments, and comprehensive career planning.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {[
                  { value: '5000+', label: 'Students Guided' },
                  { value: '95%', label: 'Success Rate' },
                  { value: '23+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-accent-300 mb-1">{stat.value}</p>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center space-x-2 px-7 py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 transform hover:scale-105"
                >
                  <span className="text-lg">Book Consultation</span>
                  <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919781312020"
                  className="inline-flex items-center justify-center space-x-2 px-7 py-3 bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold rounded-xl transition-all duration-300"
                >
                  <span className="text-lg">Call: +91 9781312020</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Auto-Scrolling Image Gallery with Real Images */}
      <section className="section-padding bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
              Real Sessions, <span className="text-gradient">Real Impact</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Glimpses from our career counselling sessions across schools, colleges, and our office
            </p>
          </motion.div>

          {/* Infinite Scroll Container - NO GRADIENT OVERLAYS */}
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate images for infinite scroll */}
              {[...galleryImages, ...galleryImages, ...galleryImages].map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer group relative"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`Career counselling session ${(index % galleryImages.length) + 1}`}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Light hover overlay */}
                  <div className="absolute inset-0 bg-primary-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white">
                      <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-2">
                        <HiArrowRight className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold">View Image</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-100 to-accent-100 rounded-2xl border-2 border-primary-200">
              <HiCheckCircle className="w-7 h-7 text-primary-600" />
              <p className="text-primary-900 font-bold text-lg">
                Trusted by 50+ Schools & Colleges across Punjab
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal with Real Images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full h-[80vh]"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-lg"
              >
                <HiX className="w-6 h-6 text-neutral-900" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage}
                  alt="Career counselling session"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Image Counter */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                {galleryImages.indexOf(selectedImage) + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Section - 2 cols on smaller screens */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
              Comprehensive <span className="text-gradient">Counselling Services</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need for a successful career journey - from assessment to achievement
            </p>
          </motion.div>

          {/* Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl border-2 border-neutral-200 group-hover:border-primary-500 p-4 transition-all duration-300 hover:shadow-2xl h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-neutral-700">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - 2 cols on tablet */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
              How We <span className="text-gradient">Guide You</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              A proven 5-step process designed to help you discover and achieve your dream career
            </p>
          </div>

          {/* Grid layout on tablet, single column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="flex gap-6 items-start h-full">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-xl">
                        {item.step}
                      </div>
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mt-4">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>

                    <div className="flex-1 bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all group h-full">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                        <h3 className="text-xl md:text-2xl font-bold text-primary-900 group-hover:text-primary-600 transition-colors">
                          {item.title}
                        </h3>
                        <span className="flex items-center space-x-2 px-3 py-1 md:px-4 md:py-2 bg-primary-50 rounded-full text-primary-600 text-xs md:text-sm font-semibold w-fit">
                          <HiClock className="w-3 h-3 md:w-4 md:h-4" />
                          <span>{item.duration}</span>
                        </span>
                      </div>
                      <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters Section - 2 cols on tablet */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-300 text-sm font-bold mb-4">
              The Difference We Make
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Why Career Counselling <span className="text-accent-300">Matters</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Making the right career choice is one of the most important decisions of your life. 
              Our expert guidance ensures informed decisions that lead to long-term success.
            </p>
          </motion.div>

          {/* Grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-all">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                    {i === 4 ? '+' : '👤'}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Join 5000+ Students</p>
                <p className="text-white/80 text-sm">Who found their perfect career path</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default CareerCounsellingPage;
