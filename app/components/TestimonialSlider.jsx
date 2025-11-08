'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Memoize testimonials to prevent re-creation
  const testimonials = useMemo(() => [
    {
      id: 1,
      name: 'Graduate Student',
      role: 'Army Agniveer | MBA | Corporate',
      content: 'A confused graduate with financial constraints approached me last year. Through right career counselling, guidance & mentorship aligned with dedicated efforts, he achieved "Three Birds with One Arrow" - pursuing MBA from a top institute, working a corporate job, and clearing Army Agniveer exam. Now celebrating his first salary increment!',
      rating: 5,
      image: '/images/student1.jpg',
      achievement: 'Three In One',
      bgColor: 'from-blue-600 to-blue-700',
    },
    {
      id: 2,
      name: 'Prabhkirat Singh',
      role: 'CBSE | Commerce | 93% Scorer',
      content: 'Scored 93% in Commerce with focused guidance and personalized mentorship. This student set ambitious goals and is on track to achieve excellence in his UPSC-IAS preparation. Hard work combined with strategic career planning leads to extraordinary results.',
      rating: 5,
      image: '/images/image3.jpg',
      achievement: '93% Scorer',
      bgColor: 'from-green-600 to-green-700',
    },
    {
      id: 3,
      name: 'Srishti',
      role: 'Class 11 | Gold Medalist | IAS Aspirant',
      content: 'Despite shifting from Delhi to Patiala due to unavoidable family circumstances, Srishti secured First Position in Class 11th at Arya Girls Sr. Sec. School. She proved that with determination and proper guidance, no odds are too great. Target: UPSC-IAS (2031).',
      rating: 5,
      image: '/images/student2.jpg',
      achievement: 'Gold Medal',
      bgColor: 'from-yellow-600 to-yellow-700',
    },
    {
      id: 4,
      name: 'Prerna',
      role: 'Bank PO | Mains Exam Cleared',
      content: 'Successfully cracked the Bank PO Probationary Officer Mains Exam through dedicated preparation and expert guidance. This achievement opened doors to a rewarding banking career with competitive salary and promising growth prospects.',
      rating: 5,
      image: '/images/student3.jpg',
      achievement: 'Bank PO Success',
      bgColor: 'from-purple-600 to-purple-700',
    },
  ], []);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Pause auto-play temporarily when user interacts
  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    
    // Clear existing timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // Resume auto-play after 10 seconds of no interaction
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  }, []);

  // Handle drag/swipe start
  const handleDragStart = useCallback((e) => {
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setIsDragging(true);
  }, []);

  // Handle drag/swipe end
  const handleDragEnd = useCallback((e) => {
    if (!isDragging) return;

    const clientX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX - clientX;
    const swipeThreshold = 50;

    if (Math.abs(diff) > swipeThreshold) {
      pauseAutoPlay(); // Pause auto-play on swipe
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setIsDragging(false);
  }, [isDragging, dragStartX, nextSlide, prevSlide, pauseAutoPlay]);

  // Handle navigation button clicks
  const handleNavClick = useCallback((direction) => {
    pauseAutoPlay(); // Pause auto-play on manual navigation
    if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }
  }, [nextSlide, prevSlide, pauseAutoPlay]);

  // Handle dot navigation
  const handleDotClick = useCallback((index) => {
    pauseAutoPlay(); // Pause auto-play on dot click
    setCurrentIndex(index);
  }, [pauseAutoPlay]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        pauseAutoPlay();
        prevSlide();
      }
      if (e.key === 'ArrowRight') {
        pauseAutoPlay();
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide, pauseAutoPlay]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="pt-10 pb-5 bg-gradient-to-br from-neutral-50 via-white to-accent-50 relative overflow-hidden"
    >
      {/* Decorative elements - CSS only */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-0 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-0 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-xs md:text-sm font-bold mb-4 shadow-sm">
            Success Stories
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4 leading-tight">
            What Our <span className="text-gradient">Students Achieve</span>
          </h2>

          <p className="text-base md:text-lg text-neutral-700 max-w-3xl mx-auto">
            Real stories of transformation and success from students who achieved their goals with C3 Career Consultants
          </p>
        </motion.div>

        {/* Testimonial Slider Container */}
        <div className="relative max-w-6xl lg:max-w-5xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
          <div
            className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut"
                }}
                className="w-full"
              >
                {/* Main Carousel Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 2xl:h-[420px] rounded-2xl overflow-hidden shadow-2xl group">
                    {/* Optimized Image with Next.js */}
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={`${testimonials[currentIndex].name} - ${testimonials[currentIndex].achievement}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={currentIndex === 0}
                      quality={75}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent pointer-events-none" />

                    {/* Achievement Badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-bold text-xs md:text-sm shadow-lg backdrop-blur-sm border border-accent-300/30">
                      {testimonials[currentIndex].achievement}
                    </div>

                    {/* Star Rating */}
                    <div className="absolute bottom-4 left-4 flex space-x-1 bg-white/15 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <HiStar key={i} className="w-4 h-4  text-accent-300" />
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between space-y-4 md:space-y-5 py-4 md:py-0">
                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl lg:text-lg xl:text-xl text-neutral-800 leading-relaxed italic font-medium">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="pt-5 border-t-2 border-primary-200">
                      <div className="flex items-center space-x-3 md:space-x-4">
                        {/* Avatar */}
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[currentIndex].bgColor} flex items-center justify-center text-white text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold shadow-lg flex-shrink-0 border-3 border-white`}
                        >
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>

                        {/* Name and Role */}
                        <div className="flex-grow min-w-0">
                          <h4 className="text-base md:text-lg lg:text-base xl:text-lg font-bold text-primary-900 leading-tight">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-neutral-600 text-xs md:text-sm lg:text-xs xl:text-sm font-medium leading-tight">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex items-center justify-center space-x-2 pt-5 border-t border-neutral-200">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handleDotClick(index)}
                          className={`transition-all duration-300 rounded-full ${
                            currentIndex === index
                              ? 'w-3 h-3 bg-gradient-to-r from-primary-600 to-accent-500 shadow-lg'
                              : 'w-3 h-3 bg-neutral-300 hover:bg-neutral-400 hover:scale-125'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none px-0 lg:-mx-16">
            <button
              onClick={() => handleNavClick('prev')}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="pointer-events-auto w-12 h-12 bg-white hover:bg-primary-50 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 border-2 border-primary-200 hover:border-primary-500"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft className="w-6 h-6 text-primary-600" />
            </button>
            <button
              onClick={() => handleNavClick('next')}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="pointer-events-auto w-12 h-12 bg-white hover:bg-primary-50 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 border-2 border-primary-200 hover:border-primary-500"
              aria-label="Next testimonial"
            >
              <HiChevronRight className="w-6 h-6 text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
