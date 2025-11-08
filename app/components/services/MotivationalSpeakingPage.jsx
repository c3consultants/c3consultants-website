'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiSparkles, 
  HiUsers, 
  HiLightningBolt, 
  HiTrendingUp, 
  HiHeart, 
  HiStar,
  HiArrowRight,
  HiCheckCircle,
  HiAcademicCap,
  HiMicrophone,
  HiBriefcase,
  HiLightBulb,
  HiShieldCheck,
  HiChatAlt2,
  HiChevronLeft,
  HiChevronRight,
  HiClock
} from 'react-icons/hi';
import Link from 'next/link';
import CTASection from '../CTASection';
import { FiClock } from 'react-icons/fi';

const MotivationalSpeakingPage = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedService, setSelectedService] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const services = [
    {
      icon: HiBriefcase,
      title: 'Corporate Training',
      description: 'Transform your organization with powerful leadership development and team building programs designed for lasting impact.',
      features: ['Leadership workshops', 'Team motivation', 'Productivity boost', 'Corporate culture'],
      color: 'from-blue-500 to-blue-600',
      duration: 'Half-day to 2-day programs',
      audience: 'Corporate teams & executives',
    },
    {
      icon: HiAcademicCap,
      title: 'Student Workshops',
      description: 'Interactive and inspiring sessions for schools and colleges that ignite passion and drive in young minds.',
      features: ['Career guidance', 'Goal setting', 'Exam strategies', 'Stress management'],
      color: 'from-purple-500 to-purple-600',
      duration: '2-4 hour sessions',
      audience: 'School & college students',
    },
    {
      icon: HiUsers,
      title: 'Personality Development',
      description: 'Comprehensive programs to transform your personality, build confidence, and develop essential soft skills.',
      features: ['Communication skills', 'Body language', 'Public speaking', 'Self-confidence'],
      color: 'from-green-500 to-green-600',
      duration: '4-8 week programs',
      audience: 'Individuals & groups',
    },
    {
      icon: HiTrendingUp,
      title: 'Success Seminars',
      description: 'Large-scale motivational seminars focused on achieving success, excellence, and personal breakthroughs.',
      features: ['Success strategies', 'Time management', 'Goal achievement', 'Growth mindset'],
      color: 'from-amber-500 to-amber-600',
      duration: '2-4 hour events',
      audience: 'Public audiences 100+',
    },
    {
      icon: HiHeart,
      title: 'Life Coaching',
      description: 'Personalized one-on-one coaching sessions for deep personal transformation and life-changing insights.',
      features: ['Life purpose', 'Work-life balance', 'Relationships', 'Personal growth'],
      color: 'from-pink-500 to-pink-600',
      duration: 'Monthly packages',
      audience: 'Individual clients',
    },
    {
      icon: HiLightningBolt,
      title: 'Youth Empowerment',
      description: 'Empowering programs designed specifically for young adults to discover their potential and pursue dreams.',
      features: ['Self-belief', 'Decision making', 'Peer management', 'Future planning'],
      color: 'from-indigo-500 to-indigo-600',
      duration: 'Workshop series',
      audience: 'Youth 15-25 years',
    },
  ];

  const topics = [
    { title: 'Unlocking Your True Potential', icon: HiSparkles },
    { title: 'The Power of Positive Thinking', icon: HiLightBulb },
    { title: 'Overcoming Fear and Self-Doubt', icon: HiShieldCheck },
    { title: 'Building Unshakeable Confidence', icon: HiTrendingUp },
    { title: 'Leadership in the Modern World', icon: HiUsers },
    { title: 'Effective Communication Skills', icon: HiChatAlt2 },
    { title: 'Time Management Mastery', icon: HiClock },
    { title: 'Dealing with Failure and Rejection', icon: HiHeart },
  ];

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      feedback: 'Manik Sir\'s corporate training session completely transformed our team dynamics. The energy, practical insights, and motivation were phenomenal. Our productivity increased by 40%!',
      role: 'HR Manager',
      company: 'Tech Solutions Pvt Ltd',
      rating: 5,
    },
    {
      name: 'Priya Singh',
      feedback: 'The student workshop changed my entire perspective on life. I\'m now more confident, focused, and clear about my career goals. Thank you for the inspiration!',
      role: 'Engineering Student',
      company: 'Punjabi University',
      rating: 5,
    },
    {
      name: 'Dr. Anil Kumar',
      feedback: 'An absolutely inspiring session that motivated our students to dream big and work hard. The practical strategies and real-life examples were exceptional. Highly recommended!',
      role: 'Principal',
      company: 'Senior Secondary School',
      rating: 5,
    },
  ];

  const stats = [
    { number: '100+', label: 'Workshops Conducted', icon: HiMicrophone },
    { number: '10,000+', label: 'Lives Impacted', icon: HiUsers },
    { number: '50+', label: 'Corporate Clients', icon: HiBriefcase },
    { number: '23+', label: 'Years Experience', icon: HiSparkles },
  ];

  const impactAreas = [
    {
      title: 'Personal Growth',
      description: 'Transform your mindset and unlock hidden potential',
      icon: HiSparkles,
    },
    {
      title: 'Professional Success',
      description: 'Achieve career goals with proven strategies',
      icon: HiTrendingUp,
    },
    {
      title: 'Leadership Skills',
      description: 'Develop influence and inspire others',
      icon: HiUsers,
    },
    {
      title: 'Confidence Building',
      description: 'Build unshakeable self-belief and courage',
      icon: HiShieldCheck,
    },
  ];

  // Carousel Navigation
  const nextSlide = useCallback(() => {
    setSelectedService((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const prevSlide = useCallback(() => {
    setSelectedService((prev) => (prev - 1 + services.length) % services.length);
  }, [services.length]);

  const goToSlide = (index) => {
    setSelectedService(index);
    setAutoPlay(false);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, nextSlide]);

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/image1.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/65 to-neutral-900/70" />
        </div>

        {/* Animated Elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"
        />
        
        <div className="container-custom relative z-10 pt-20 pb-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Badge */}
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-400 text-sm font-bold mb-4">
                <HiMicrophone className="w-4 h-4" />
                <span>Inspire • Transform • Empower</span>
              </span>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Ignite Potential Through<br />
                <span className="text-gradient-gold">Powerful Motivation</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform lives with inspiring motivational sessions, leadership training, and 
                personality development programs. 23+ years of creating lasting impact.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group"
                    >
                      <Icon className="w-6 h-6 text-accent-300 mx-auto mb-2" />
                      <p className="text-2xl md:text-3xl font-bold text-white">{stat.number}</p>
                      <p className="text-white/70 text-xs">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
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
                  <span className="text-lg">Book a Session</span>
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

      {/* Impact Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
              Areas of <span className="text-gradient">Transformation</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive programs designed to create lasting positive change
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl border-2 border-neutral-200 group-hover:border-primary-500 p-4 text-center transition-all hover:shadow-xl h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-3">{area.title}</h3>
                    <p className="text-neutral-600 text-sm">{area.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Carousel Section */}
<section ref={ref} className="section-padding bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
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
        Our <span className="text-gradient">Training Programs</span>
      </h2>
      <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
        Customized programs for individuals, students, and organizations
      </p>
    </motion.div>

    {/* Carousel Container */}
    <div className="relative max-w-5xl mx-auto px-4 md:px-6">
      {/* Card Container with Dynamic Height */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className={`bg-gradient-to-br ${services[selectedService].color} rounded-2xl md:rounded-3xl p-4 text-white shadow-2xl`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column - Content */}
                <div className="flex flex-col">
                  {(() => {
                    const Icon = services[selectedService].icon;
                    return <Icon className="w-10 h-10 mb-2 " />;
                  })()}
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                    {services[selectedService].title}
                  </h3>
                  
                  <p className="text-base md:text-lg lg:text-xl text-white/90 mb-4 md:mb-6 leading-relaxed">
                    {services[selectedService].description}
                  </p>

                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    <div className="flex items-center space-x-3">
                      <FiClock className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span className="font-semibold text-sm md:text-base">{services[selectedService].duration}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <HiUsers className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span className="font-semibold text-sm md:text-base">{services[selectedService].audience}</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 px-5 md:px-6 py-2.5 md:py-3 bg-white text-primary-600 rounded-lg font-bold hover:bg-white/90 transition-all text-sm md:text-base w-full md:w-auto"
                  >
                    <span>Book This Program</span>
                    <HiArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>

                {/* Right Column - Features Grid */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {services[selectedService].features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 hover:bg-white/20 transition-all flex flex-col items-center justify-center"
                    >
                      <HiCheckCircle className="w-5 h-5 md:w-6 md:h-6 mb-2" />
                      <p className="text-white font-medium text-xs md:text-sm leading-tight">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons - Hidden on very small screens, shown on larger */}
      <div className="hidden sm:block">
        <button
          onClick={prevSlide}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-neutral-50 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 z-10"
          aria-label="Previous service"
        >
          <HiChevronLeft className="w-4 h-4 text-primary-600" />
        </button>
        
        <button
          onClick={nextSlide}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-neutral-50 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 z-10"
          aria-label="Next service"
        >
          <HiChevronRight className="w-4 h-4 text-primary-600" />
        </button>
      </div>

      {/* Mobile Navigation Buttons - Shown below on small screens */}
      <div className="flex sm:hidden justify-center space-x-4 mt-6">
        <button
          onClick={prevSlide}
          onTouchStart={() => setAutoPlay(false)}
          className="w-12 h-12 bg-white hover:bg-neutral-50 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all"
          aria-label="Previous service"
        >
          <HiChevronLeft className="w-6 h-6 text-primary-600" />
        </button>
        
        <button
          onClick={nextSlide}
          onTouchStart={() => setAutoPlay(false)}
          className="w-12 h-12 bg-white hover:bg-neutral-50 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all"
          aria-label="Next service"
        >
          <HiChevronRight className="w-6 h-6 text-primary-600" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              selectedService === index
                ? 'w-2.5 md:w-3 h-2.5 md:h-3 bg-primary-600 shadow-lg'
                : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Indicator */}
      <p className="text-center mt-3 md:mt-4 text-neutral-500 text-xs">
        {autoPlay ? '⏱ Auto-playing' : 'Manual mode'}
      </p>
    </div>
  </div>
</section>


      {/* Popular Topics Section */}
      <section className="pb-10 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
              Session Themes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
              Popular <span className="text-gradient">Topics</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Engaging sessions designed to inspire and transform lives
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group bg-white border-2 border-neutral-200 hover:border-primary-500 rounded-xl p-4 hover:shadow-xl transition-all flex flex-col justify-center items-center"
                >
                  <Icon className="w-8 h-8 text-primary-600 mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-primary-900 text-center font-bold group-hover:text-primary-600 transition-colors">
                    {topic.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-300 text-sm font-bold mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              What People <span className="text-accent-300">Say</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real feedback from clients who experienced transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all"
              >
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-accent-300" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-white/90 mb-6 italic leading-relaxed">
                  "{testimonial.feedback}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-white/20">
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                  <p className="text-accent-300 text-sm font-semibold">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center space-x-4 px-7 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <HiSparkles className="w-10 h-10 text-accent-300" />
              <div className="text-left">
                <p className="text-white font-bold text-lg">Join 10,000+ Transformed Lives</p>
                <p className="text-white/80 text-sm">Start your journey today</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default MotivationalSpeakingPage;
