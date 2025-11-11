'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiStar } from 'react-icons/hi';
import Image from 'next/image';
import { FiAward } from 'react-icons/fi';

const ResultsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef(null);
  const pauseTimerRef = useRef(null);

  const results = useMemo(() => [
    {
      id: 1,
      name: 'Graduate Student',
      achievement: 'Triple Success',
      description: 'A confused graduate with financial constraints approached me last year. Through right career counselling, guidance & mentorship aligned with dedicated efforts, he achieved "Three Birds with One Arrow" - pursuing MBA from a top institute, working a corporate job, and clearing Army Agniveer exam. Now celebrating his first salary increment!',
      image: '/images/student1.jpg',
      category: 'Career Transformation',
      results: [
        'MBA admission in top institute',
        'Corporate job placement',
        'Army Agniveer exam cleared',
        'First salary increment achieved',
      ],
      rating: 5,
      bgColor: 'from-blue-600 to-blue-700',
    },
    {
      id: 2,
      name: 'Prabhkirat Singh',
      achievement: '93% in Commerce',
      description: 'Scored 93% in Commerce with focused guidance and personalized mentorship. This student set ambitious goals and is on track to achieve excellence in his UPSC-IAS preparation. Hard work combined with strategic career planning leads to extraordinary results.',
      image: '/images/image3.jpg',
      category: 'CBSE Excellence',
      results: [
        '93% score in CBSE Commerce',
        'Top performer in class',
        'UPSC-IAS preparation on track',
        'Strategic career planning implemented',
      ],
      rating: 5,
      bgColor: 'from-green-600 to-green-700',
    },
    {
      id: 3,
      name: 'Srishti',
      achievement: 'Class 11 Gold Medal',
      description: 'Despite shifting from Delhi to Patiala due to unavoidable family circumstances, Srishti secured First Position in Class 11th at Arya Girls Sr. Sec. School. She proved that with determination and proper guidance, no odds are too great. Target: UPSC-IAS (2031).',
      image: '/images/student2.jpg',
      category: 'Academic Excellence',
      results: [
        'First Position in Class 11th',
        'Gold Medal at Arya Girls School',
        'Overcame relocation challenges',
        'UPSC-IAS aspirant (Target 2031)',
      ],
      rating: 5,
      bgColor: 'from-yellow-600 to-yellow-700',
    },
    {
      id: 4,
      name: 'Prerna',
      achievement: 'Bank PO Success',
      description: 'Successfully cracked the Bank PO Probationary Officer Mains Exam through dedicated preparation and expert guidance. This achievement opened doors to a rewarding banking career with competitive salary and promising growth prospects.',
      image: '/images/student3.jpg',
      category: 'Banking Sector',
      results: [
        'Bank PO Mains exam cleared',
        'Probationary Officer position',
        'Competitive salary package',
        'Promising career growth',
      ],
      rating: 5,
      bgColor: 'from-purple-600 to-purple-700',
    },
  ], []);

  const SWIPE_THRESHOLD = 50;
  const AUTO_PLAY_INTERVAL = 5000;
  const PAUSE_DURATION = 8000;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % results.length);
  }, [results.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  }, [results.length]);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => setIsPaused(false), PAUSE_DURATION);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
      return;
    }
    autoPlayTimerRef.current = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
    };
  }, [nextSlide, isPaused]);

  useEffect(() => {
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  const handleDragStart = useCallback(() => pauseAutoPlay(), [pauseAutoPlay]);

  const handleDragEnd = useCallback((e, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (Math.abs(velocity) >= 500 || Math.abs(offset) >= SWIPE_THRESHOLD) {
      offset > 0 ? prevSlide() : nextSlide();
    }
  }, [nextSlide, prevSlide]);

  const handleManualNavigation = useCallback((index) => {
    pauseAutoPlay();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex, pauseAutoPlay]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const current = results[currentIndex];

  return (
    <section className="pt-10 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-3">
            Transforming <span className="text-gradient">Dreams Into Reality</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real students, real achievements, real transformation
          </p>
        </div>

        {/* Carousel Container - NO FIXED HEIGHT */}
        <div className="relative w-full mb-12">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full cursor-grab active:cursor-grabbing select-none"
            >
              {/* Layout - Responsive Grid */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                
                {/* Image Section - 45% width on desktop */}
                <div className="relative group w-full md:w-[45%] flex-shrink-0">
                  {/* Square aspect ratio */}
                  <div className="relative w-full aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-neutral-100">
                    <Image
                      src={current.image}
                      alt={`${current.name} - ${current.achievement}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={currentIndex === 0}
                      sizes="(max-width: 768px) 100vw, 45vw"
                      quality={85}
                      draggable={false}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent pointer-events-none" />

                    {/* Achievement Badge - Top Right */}
                    <div className="absolute top-4 md:top-6 right-4 md:right-6 z-20">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-500/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                        <FiAward className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>

                    {/* Rating - Top Left */}
                    <div className="absolute top-4 md:top-6 left-4 md:left-6 z-20 flex space-x-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      {[...Array(current.rating)].map((_, i) => (
                        <HiStar key={i} className="w-4 h-4 text-accent-300" />
                      ))}
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="px-3 py-1.5 bg-accent-500 text-white rounded-full text-xs font-bold shadow-lg">
                          {current.category}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="text-accent-400 text-xs font-bold uppercase tracking-wider">
                          {current.achievement}
                        </p>
                        <h3 className="text-white font-bold text-base md:text-xl lg:text-2xl leading-tight">
                          {current.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Shadow */}
                  <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl -z-10 opacity-30" />
                </div>

                {/* Content Section - Takes remaining 55% on desktop */}
                <div className="flex-1 space-y-4 md:space-y-5">
                  {/* Description */}
                  <p className="text-neutral-700 text-sm md:text-base leading-relaxed italic">
                    "{current.description}"
                  </p>

                  {/* Results Card */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-4 md:p-5 border-2 border-primary-200">
                    <h4 className="font-bold text-primary-900 text-sm md:text-base mb-3 flex items-center space-x-2">
                      <FiAward className="w-4 h-4 md:w-5 md:h-5 text-accent-500" />
                      <span>Key Achievements</span>
                    </h4>
                    <div className="space-y-2">
                      {current.results.map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <HiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700 text-xs md:text-sm leading-relaxed">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="pt-4 border-t border-neutral-200">
                    <div className="flex items-center justify-between">
                      <p className="text-xs md:text-sm font-semibold text-neutral-500">
                        {currentIndex + 1} of {results.length}
                      </p>
                      <div className="flex items-center space-x-1.5">
                        {results.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handleManualNavigation(index)}
                            className={`transition-all duration-200 rounded-full ${
                              currentIndex === index
                                ? 'w-8 h-2.5 bg-gradient-to-r from-primary-600 to-accent-500'
                                : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
                            }`}
                            aria-label={`Result ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarousel;
