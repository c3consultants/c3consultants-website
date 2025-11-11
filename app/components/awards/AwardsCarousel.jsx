'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCheckCircle, HiCalendar } from 'react-icons/hi';
import Image from 'next/image';
import { FiAward } from 'react-icons/fi';

const AwardsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef(null);
  const pauseTimerRef = useRef(null);

  // Memoize achievements array
  const achievements = useMemo(() => [
    {
      id: 1,
      title: 'Rotary Visionary Leadership Award',
      subtitle: 'Recognized for Exceptional Leadership',
      description: 'Awarded the prestigious "Rotary Visionary Leadership Award" by Rotary District Governor Dr. Sandeep Chauhan at the Annual Awards Function in Sri Ganganagar, Rajasthan.',
      image: '/images/achivement2.jpg',
      year: '2024',
      category: 'International',
      location: 'Sri Ganganagar, Rajasthan',
      awardedBy: 'DG Dr. Sandeep Chauhan',
      highlights: [
        'Presented by DG Dr. Sandeep Chauhan at Annual Awards Function',
        'Recognition for exceptional contribution to Rotary International',
        'Distinguished leadership in community service excellence',
      ],
    },
    {
      id: 2,
      title: 'Rotary E-Directory Editor',
      subtitle: 'Zone 4 Leadership Role',
      description: 'Honored by Rotary International Director TN Subramanian for serving as Editor of the Rotary E-Directory of Zone 4, overseeing 12 Districts with 1,300 Clubs.',
      image: '/images/achivement4.jpg',
      year: '2023',
      category: 'Rotary International',
      location: 'Zone 4, India',
      awardedBy: 'RI Director TN Subramanian',
      highlights: [
        'Honored by Rotary International Director TN Subramanian',
        'Editor of E-Directory for Zone 4 (12 Districts, 1,300+ Clubs)',
        'Excellence in digital leadership and information management',
      ],
    },
    {
      id: 3,
      title: 'Independence Day Recognition',
      subtitle: '79th Independence Day Honor',
      description: 'Honored on India\'s 79th Independence Day by S. Harbhajan Singh, Punjab Minister at the prestigious Independence Day Function held at Polo Ground, Patiala.',
      image: '/images/achivement1.jpg',
      year: '2025',
      category: 'Government',
      location: 'Polo Ground, Patiala',
      awardedBy: 'S. Harbhajan Singh',
      highlights: [
        'Honored by Punjab Minister S. Harbhajan Singh',
        'Recognition for outstanding contribution to society',
        'Acknowledged for excellence in education and youth empowerment',
      ],
    },
    {
      id: 4,
      title: 'Assistant Governor, Rotary',
      subtitle: 'Youth Development Leadership',
      description: 'Serving as Assistant Governor overseeing Interact Clubs in District RID 3090, promoting service culture and professional excellence among youth.',
      image: '/images/achivement6.jpg',
      year: 'Current',
      category: 'Rotary Leadership',
      location: 'District RID 3090',
      awardedBy: 'Rotary International',
      highlights: [
        'Assistant Governor overseeing Interact Clubs in RID 3090',
        'Leading youth development and educational initiatives',
        'Promoting service culture and professional excellence',
      ],
    },
    {
      id: 5,
      title: 'President, Table Tennis Association',
      subtitle: 'Sports Development Leadership',
      description: 'Leading sports excellence as President of the Patiala District Table Tennis Association, promoting athletic growth and competitive sports culture.',
      image: '/images/achivement3.jpg',
      year: 'Current',
      category: 'Sports Leadership',
      location: 'Patiala, Punjab',
      awardedBy: 'District Sports',
      highlights: [
        'President of Patiala District Table Tennis Association',
        'Spearheading athlete development programs',
        'Organizing district and national level tournaments',
      ],
    },
    {
      id: 6,
      title: 'Former President, Rotary Club',
      subtitle: 'Community Service Excellence',
      description: 'Led Rotary Club Patiala Midtown through transformative years of community service, humanitarian initiatives, and social welfare projects.',
      image: '/images/achivement5.jpg',
      year: '2020-21',
      category: 'Community Service',
      location: 'Patiala, Punjab',
      awardedBy: 'Rotary International',
      highlights: [
        'President of Rotary Club Patiala Midtown (2020-2021)',
        'Led community outreach and humanitarian initiatives',
        'Exemplified "Service Above Self" through leadership',
      ],
    },
  ], []);

  const SWIPE_THRESHOLD = 50;
  const AUTO_PLAY_INTERVAL = 4000;
  const PAUSE_DURATION = 7000;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  }, [achievements.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  }, [achievements.length]);

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

  const current = achievements[currentIndex];

  return (
    <section className="py-10 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
            Hall of Honour
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-3">
            Prestigious <span className="text-gradient">Recognitions</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            A testament to dedication, excellence, and impactful leadership
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
          <div className="relative w-full">
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
                {/* Layout - Image 30% smaller on large screens */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                  
                  {/* Image Section - 70% width on desktop, full on mobile */}
                  <div className="relative group w-full md:w-[45%] flex-shrink-0">
                    {/* Square aspect ratio container */}
                    <div className="relative w-full aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-neutral-100">
                      <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        priority={currentIndex === 0}
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        quality={90}
                        draggable={false}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent pointer-events-none" />

                      {/* Award Icon */}
                      <div className="absolute top-4 md:top-6 right-4 md:right-6 z-20">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-500/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                          <FiAward className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
                            <div className="flex items-center space-x-1.5">
                              <HiCalendar className="w-3.5 h-3.5 text-primary-600" />
                              <span className="font-bold text-primary-600 text-xs md:text-sm">
                                {current.year}
                              </span>
                            </div>
                          </div>
                          <div className="px-3 py-1.5 bg-accent-500 text-white rounded-full text-xs font-bold shadow-lg truncate max-w-[160px] md:max-w-[200px]">
                            {current.category}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <p className="text-accent-400 text-xs font-bold uppercase tracking-wider">
                            {current.subtitle}
                          </p>
                          <h3 className="text-white font-bold text-base md:text-xl lg:text-2xl leading-tight">
                            {current.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Shadow */}
                    <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary-200 to-accent-200 rounded-3xl -z-10 opacity-30" />
                  </div>

                  {/* Content Section - Takes remaining space */}
                  <div className="flex-1 space-y-4 md:space-y-5">
                    {/* Award Info */}
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-4 md:p-5 border-2 border-primary-200">
                      <h4 className="font-bold text-primary-900 text-sm md:text-base mb-3 flex items-center space-x-2">
                        <FiAward className="w-4 h-4 text-accent-500" />
                        <span>Award Details</span>
                      </h4>
                      <div className="space-y-2 text-xs md:text-sm">
                        <div>
                          <span className="text-neutral-600">Awarded By:</span>
                          <p className="font-semibold text-neutral-900">{current.awardedBy}</p>
                        </div>
                        <div>
                          <span className="text-neutral-600">Location:</span>
                          <p className="font-semibold text-neutral-900">{current.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                      {current.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2.5">
                      <h4 className="font-bold text-primary-900 text-base md:text-lg">Key Highlights</h4>
                      <div className="space-y-2">
                        {current.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <HiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700 text-xs md:text-sm leading-relaxed">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="pt-4 border-t border-neutral-200">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs md:text-sm font-semibold text-neutral-500">
                          {currentIndex + 1} of {achievements.length}
                        </p>
                        <div className="flex items-center space-x-1.5">
                          {achievements.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => handleManualNavigation(index)}
                              className={`transition-all duration-200 rounded-full ${
                                currentIndex === index
                                  ? 'w-2.5 h-2.5 bg-gradient-to-r from-primary-600 to-accent-500'
                                  : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
                              }`}
                              aria-label={`Award ${index + 1}`}
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
      </div>
    </section>
  );
};

export default AwardsCarousel;
