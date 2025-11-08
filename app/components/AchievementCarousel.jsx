'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiSparkles, HiCheckCircle } from 'react-icons/hi';

const AchievementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const achievements = useMemo(() => [
    {
      id: 1,
      title: 'Rotary Visionary Leadership Award',
      subtitle: 'Recognized for Exceptional Leadership',
      description: 'Awarded the prestigious "Rotary Visionary Leadership Award" by Rotary District Governor Dr. Sandeep Chauhan at the Annual Awards Function in Sri Ganganagar, Rajasthan. This recognition celebrates outstanding contributions to Rotary International and community service excellence.',
      image: '/images/achivement2.jpg',
      year: '2024',
      category: 'International Recognition',
      highlights: [
        'Presented by DG Dr. Sandeep Chauhan',
        'Annual Awards Function, Sri Ganganagar',
        'Distinguished leadership recognition',
      ],
    },
    {
      id: 2,
      title: 'Rotary International E-Directory Editor',
      subtitle: 'Zone 4 Leadership Role',
      description: 'Honored by Rotary International Director TN Subramanian for serving as Editor of the Rotary E-Directory of Zone 4, overseeing 12 Rotary Districts comprising 1,300 Clubs. This role reflects exceptional organizational and digital leadership capabilities.',
      image: '/images/achivement4.jpg',
      year: '2023',
      category: 'Rotary International',
      highlights: [
        'Honored by Director TN Subramanian',
        'Zone 4 E-Directory Editor',
        'Overseeing 1,300+ Clubs across 12 Districts',
      ],
    },
    {
      id: 3,
      title: 'Independence Day Recognition',
      subtitle: '79th Independence Day Honor',
      description: 'Honored on India\'s 79th Independence Day by S. Harbhajan Singh, ETO and Power & Public Works Minister, Government of Punjab at the prestigious Independence Day Function held at Polo Ground, Patiala. A proud moment celebrating national pride and public service.',
      image: '/images/achivement1.jpg',
      year: '2025',
      category: 'Government Recognition',
      highlights: [
        'Honored by Punjab Minister S. Harbhajan Singh',
        'Independence Day Celebration',
        'Polo Ground, Patiala',
      ],
    },
    {
      id: 4,
      title: 'Assistant Governor, Rotary International',
      subtitle: 'Leadership in Youth Development',
      description: 'Serving as Assistant Governor overseeing Interact Clubs in District RID 3090. Played a key role in honoring Senior Advocate Rakesh Gupta on his appointment as Chairman of Bar Council of Punjab, Haryana and Chandigarh, demonstrating commitment to professional excellence and community recognition.',
      image: '/images/achivement6.jpg',
      year: 'Current',
      category: 'Rotary Leadership',
      highlights: [
        'Assistant Governor, RID 3090',
        'Interact Clubs Oversight',
        'Community Recognition Events',
      ],
    },
    {
      id: 5,
      title: 'President, Patiala District Table Tennis Association',
      subtitle: 'Sports Development Leadership',
      description: 'Leading sports excellence and development at the district level as President of the Patiala District Table Tennis Association. Promoting athletic growth, competitive sports culture, and grassroots development in table tennis.',
      image: '/images/achivement3.jpg',
      year: 'Current',
      category: 'Sports Leadership',
      highlights: [
        'District-level sports leadership',
        'Athlete development programs',
        'Tournament organization',
      ],
    },
    {
      id: 6,
      title: 'Former President, Rotary Club Patiala Midtown',
      subtitle: 'Community Service Excellence',
      description: 'Led Rotary Club Patiala Midtown through transformative years of community service, humanitarian initiatives, and social welfare projects. Demonstrated exceptional organizational leadership and commitment to Rotary\'s mission of service above self.',
      image: '/images/achivement5.jpg',
      year: '2020-2021',
      category: 'Community Service',
      highlights: [
        'Community outreach programs',
        'Humanitarian projects',
        'Club development initiatives',
      ],
    },
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  }, [achievements.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  }, [achievements.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, nextSlide]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Simplified decorative elements - CSS only */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="container-custom relative z-10">
        {/* Section Header - Single animation */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <span className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-bold mb-4 shadow-lg">
            <HiSparkles className="w-4 h-4" />
            <span>Recognition & Leadership</span>
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Awards & <span className="text-gradient-gold">Achievements</span>
          </h2>

          <p className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto">
            A journey of excellence, visionary leadership, and unwavering commitment to community service spanning over two decades
          </p>
        </div>

        {/* Carousel - Optimized transitions */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="w-full"
            >
              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {/* Image Section */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-56 sm:h-64 md:h-80 lg:h-96">
                  <div
                    className="absolute inset-0 bg-cover bg-center will-change-transform"
                    style={{
                      backgroundImage: `url(${achievements[currentIndex].image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-primary-600/20" />
                  </div>

                  {/* Year Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 md:px-4 md:py-2 bg-white/95 backdrop-blur-md rounded-lg shadow-xl">
                    <span className="font-bold text-primary-600 text-xs md:text-sm">
                      {achievements[currentIndex].year}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 md:px-3 md:py-1.5 bg-accent-500 text-neutral-900 rounded-full text-xs font-bold shadow-lg">
                    {achievements[currentIndex].category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-start md:justify-center space-y-4">
                  {/* Title Section */}
                  <div className="space-y-2 md:space-y-3">
                    <p className="text-accent-400 text-xs md:text-sm font-bold uppercase tracking-widest">
                      {achievements[currentIndex].subtitle}
                    </p>

                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight">
                      {achievements[currentIndex].title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed">
                    {achievements[currentIndex].description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-3">
                    {achievements[currentIndex].highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <HiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm lg:text-base text-neutral-200">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Indicators */}
                  <div className="pt-4 md:pt-6 border-t border-white/30">
                    <p className="text-xs text-center font-semibold text-neutral-400 mb-3 uppercase tracking-widest">
                      {currentIndex + 1} of {achievements.length} Achievements
                    </p>
                    <div className="flex items-center justify-center space-x-2 flex-wrap gap-2">
                      {achievements.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`transition-all duration-300 rounded-full ${
                            currentIndex === index
                              ? 'w-3 h-3 bg-gradient-to-r from-accent-400 to-accent-500 shadow-lg-gold'
                              : 'w-2.5 h-2.5 md:w-3 md:h-3 bg-white/40 hover:bg-white/60'
                          }`}
                          aria-label={`Go to achievement ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="absolute top-1/3 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none md:hidden px-2">
                <button
                  onClick={prevSlide}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="pointer-events-auto p-2 bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/20 hover:border-accent-400/50 rounded-full transition-all duration-300 shadow-lg text-white"
                  aria-label="Previous achievement"
                >
                  <HiChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="pointer-events-auto p-2 bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/20 hover:border-accent-400/50 rounded-full transition-all duration-300 shadow-lg text-white"
                  aria-label="Next achievement"
                >
                  <HiChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none justify-between px-0">
                <button
                  onClick={prevSlide}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="pointer-events-auto -ml-8 p-3 md:p-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md hover:from-white/30 hover:to-white/20 border border-white/20 hover:border-accent-400/50 rounded-full transition-all duration-300 shadow-lg text-white hover:scale-110"
                  aria-label="Previous achievement"
                >
                  <HiChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="pointer-events-auto -mr-8 p-3 md:p-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md hover:from-white/30 hover:to-white/20 border border-white/20 hover:border-accent-400/50 rounded-full transition-all duration-300 shadow-lg text-white hover:scale-110"
                  aria-label="Next achievement"
                >
                  <HiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AchievementCarousel;
