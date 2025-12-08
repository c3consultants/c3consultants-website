'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { HiCheckCircle, HiAcademicCap, HiLightBulb, HiUsers } from 'react-icons/hi';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);

  const slides = useMemo(() => [
    {
      id: 1,
      title: 'Transform Your Career',
      subtitle: 'Expert Career Counselling',
      description: 'Navigate your professional journey with confidence. Get personalized guidance, psychometric assessments, and comprehensive career roadmap planning from India\'s leading career consultant with 23+ years of experience.',
      features: [
        'One-on-one counselling sessions',
        'Psychometric assessments',
        'Career roadmap planning',
      ],
      highlight: 'Trusted by 50,000+ Students',
      icon: HiAcademicCap,
      backgroundImage: '/images/hero1.jpg',
      ctaText: 'Start Your Journey',
      ctaLink: '/services/career-counselling',
    },
    {
      id: 2,
      title: 'Excel in Competitive Exams',
      subtitle: 'SSC & UPSC Preparation',
      description: 'Master competitive exams with our comprehensive coaching program. Expert faculty guidance, proven strategies, extensive study material, and regular mock tests to ensure your success in government examinations.',
      features: [
        'Experienced faculty guidance',
        'Comprehensive study material',
        'Regular mock tests & analysis',
      ],
      highlight: '95% Success Rate',
      icon: HiLightBulb,
      backgroundImage: '/images/hero3.jpg',
      ctaText: 'Explore Courses',
      ctaLink: '/services/competitive-exams',
    },
    {
      id: 3,
      title: 'Unlock Your Potential',
      subtitle: 'Motivational Speaking & Training',
      description: 'Elevate your confidence and leadership skills through inspiring workshops and training sessions. Develop communication excellence, build confidence, and achieve personal and professional growth with expert guidance.',
      features: [
        'Leadership development programs',
        'Confidence building workshops',
        'Communication skills training',
      ],
      highlight: '100+ Successful Workshops',
      icon: HiUsers,
      backgroundImage: '/images/image2.jpg',
      ctaText: 'Book a Session',
      ctaLink: '/services/motivational-speaking',
    },
  ], []);

  // Preload all images on mount
  useEffect(() => {
    const imagePromises = slides.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = slide.backgroundImage;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises).catch(() => {});
  }, [slides]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleDragStart = useCallback((e) => {
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
  }, []);

  const handleDragEnd = useCallback((e) => {
    const clientX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX - clientX;
    const swipeThreshold = 50;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, [dragStartX, nextSlide, prevSlide]);

  // NO opacity - prevents black flashes
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
    }),
    center: {
      x: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
    }),
  };

  const IconComponent = slides[currentSlide].icon;

  return (
    <section className="relative w-full overflow-hidden select-none bg-primary-900">
      {/* FIXED Background Layer - Does NOT animate */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
          }}
        />
        {/* Unified Gradient Overlay - Always visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-neutral-900/75 to-primary-900/80" />
      </div>

      {/* Carousel Container with proper overflow */}
      <div
        className="relative w-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 35 },
              duration: 0.4,
            }}
            className="w-full relative z-10"
          >
            {/* Content Container - Determines Height */}
            <div className="relative pt-24 sm:pt-28 pb-16">
              <div className="container-custom">
                {/* Optimized width for larger screens */}
                <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl">
                  {/* Subtitle Badge with Icon */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    <span className="inline-flex items-center space-x-2 px-3.5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-400 text-xs md:text-sm font-bold mb-3 md:mb-4 shadow-xl">
                      <IconComponent className="w-4 h-4" />
                      <span>{slides[currentSlide].subtitle}</span>
                    </span>
                  </motion.div>

                  {/* Main Title - Optimized sizes */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-3 md:mb-4 leading-tight drop-shadow-2xl"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>

                  {/* Description - Smaller on large screens */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-white/95 mb-4 md:mb-5 leading-relaxed drop-shadow-lg"
                  >
                    {slides[currentSlide].description}
                  </motion.p>

                  {/* Features List - Compact */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="mb-4 md:mb-5 space-y-2"
                  >
                    {slides[currentSlide].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.08, duration: 0.3 }}
                        className="flex items-center space-x-2.5"
                      >
                        <div className="flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 flex items-center justify-center">
                          <HiCheckCircle className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-accent-400" />
                        </div>
                        <span className="text-white/90 text-xs sm:text-sm lg:text-sm xl:text-base font-medium drop-shadow-md">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Highlight Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="mb-5 md:mb-6"
                  >
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-accent-500/20 backdrop-blur-md border border-accent-500/30 rounded-lg shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
                      <span className="text-accent-300 text-xs md:text-sm font-semibold">
                        {slides[currentSlide].highlight}
                      </span>
                    </div>
                  </motion.div>

                  {/* CTA Buttons - CENTERED */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-start items-center mb-6 md:mb-8"
                  >
                    <Link
                      href={slides[currentSlide].ctaLink}
                      className="w-full sm:w-auto px-6 py-3 lg:px-7 lg:py-3.5 bg-accent-500 text-white rounded-lg font-bold text-sm md:text-base hover:bg-accent-600 transition-all duration-300 shadow-lg-gold hover:shadow-xl-gold hover:scale-105 transform text-center"
                    >
                      {slides[currentSlide].ctaText}
                    </Link>
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-6 py-3 lg:px-7 lg:py-3.5 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-lg font-bold text-sm md:text-base hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-xl text-center"
                    >
                      Get Consultation
                    </Link>
                  </motion.div>

                  {/* Stats Mini Display - Compact */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 pt-5 md:pt-6 border-t border-white/40 justify-center sm:justify-start"
                  >
                    <div>
                      <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-white drop-shadow-lg">23+</p>
                      <p className="text-white/90 text-xs md:text-sm mt-1 font-medium">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-white drop-shadow-lg">50,000+</p>
                      <p className="text-white/90 text-xs md:text-sm mt-1 font-medium">Students Guided</p>
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-white drop-shadow-lg">95%</p>
                      <p className="text-white/90 text-xs md:text-sm mt-1 font-medium">Success Rate</p>
                    </div>
                  </motion.div>

                  {/* Mobile Swipe Hint */}
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="lg:hidden text-center pt-3"
                  >
                    <p className="text-white/80 text-xs font-semibold drop-shadow-lg">
                      ← Swipe to explore →
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroCarousel;
