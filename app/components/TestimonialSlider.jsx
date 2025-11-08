'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar } from 'react-icons/hi';
import Image from 'next/image';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerRef = useRef(null);

  const testimonials = [
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
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Handle swipe on desktop and mobile
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

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-neutral-50 via-white to-accent-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-0" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-xs md:text-sm font-bold mb-4 shadow-sm"
          >
            Success Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4 leading-tight"
          >
            What Our <span className="text-gradient">Students Achieve</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg text-neutral-700 max-w-3xl mx-auto"
          >
            Real stories of transformation and success from students who achieved their goals with C3 Career Consultants
          </motion.p>
        </motion.div>

        {/* Testimonial Slider Container - Optimized Size on Larger Screens */}
        <div className="relative max-w-6xl lg:max-w-5xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                className="w-full"
              >
                {/* Main Carousel Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch">
                  {/* Image Section */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="relative h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96 2xl:h-[420px] rounded-2xl overflow-hidden shadow-2xl group"
                  >
                    {/* Next.js Image - Proper optimization */}
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent pointer-events-none" />

                    {/* Achievement Badge */}
                    <motion.div
                      initial={{ scale: 0, y: -20 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="absolute top-4 right-4 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg font-bold text-xs md:text-sm shadow-lg backdrop-blur-sm border border-accent-300/30"
                    >
                      {testimonials[currentIndex].achievement}
                    </motion.div>

                    {/* Star Rating */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="absolute bottom-4 left-4 flex space-x-1 bg-white/15 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20"
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <HiStar key={i} className="w-4 md:w-5 h-4 md:h-5 text-accent-300" />
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col justify-between space-y-4 md:space-y-5 lg:space-y-4 xl:space-y-5 py-4 md:py-0"
                  >
                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl lg:text-lg xl:text-xl text-neutral-800 leading-relaxed italic font-medium">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="pt-5 md:pt-6 lg:pt-5 border-t-2 border-primary-200"
                    >
                      <div className="flex items-center space-x-3 md:space-x-4">
                        {/* Avatar */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-12 h-12 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br ${testimonials[currentIndex].bgColor} flex items-center justify-center text-white text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold shadow-lg flex-shrink-0 border-3 border-white`}
                        >
                          {testimonials[currentIndex].name.charAt(0)}
                        </motion.div>

                        {/* Name and Role */}
                        <div className="flex-grow min-w-0">
                          <h4 className="text-base md:text-lg lg:text-base xl:text-lg font-bold text-primary-900 leading-tight truncate">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-neutral-600 text-xs md:text-sm lg:text-xs xl:text-sm font-medium leading-tight truncate">
                            {testimonials[currentIndex].role}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Navigation Dots */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="flex items-center justify-center space-x-2 pt-5 md:pt-6 lg:pt-5 border-t border-neutral-200"
                    >
                      {testimonials.map((_, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setCurrentIndex(index)}
                          className={`transition-all duration-300 rounded-full ${
                            currentIndex === index
                              ? 'w-3 h-3 bg-gradient-to-r from-primary-600 to-accent-500 shadow-lg'
                              : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400 hover:scale-125'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
