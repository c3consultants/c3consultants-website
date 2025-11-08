'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronLeft, HiChevronRight, HiSparkles, HiCheckCircle } from 'react-icons/hi';

const AchievementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const achievements = [
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
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, nextSlide]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-0" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-0" />

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
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-bold mb-4 shadow-lg"
          >
            <HiSparkles className="w-4 h-4" />
            <span>Recognition & Leadership</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight"
          >
            Awards & <span className="text-gradient-gold">Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto"
          >
            A journey of excellence, visionary leadership, and unwavering commitment to community service spanning over two decades
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Grid Layout - Responsive */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {/* Image Section */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl h-56 sm:h-64 md:h-80 lg:h-96"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${achievements[currentIndex].image})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-primary-600/20" />
                  </div>

                  {/* Year Badge on Image */}
                  <motion.div
                    initial={{ scale: 0, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="absolute top-4 left-4 px-3 py-1.5 md:px-4 md:py-2 bg-white/95 backdrop-blur-md rounded-lg shadow-xl"
                  >
                    <span className="font-bold text-primary-600 text-xs md:text-sm">
                      {achievements[currentIndex].year}
                    </span>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    initial={{ scale: 0, y: -20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    className="absolute top-4 right-4 px-2 py-1 md:px-3 md:py-1.5 bg-accent-500 text-neutral-900 rounded-full text-xs font-bold shadow-lg"
                  >
                    {achievements[currentIndex].category}
                  </motion.div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex flex-col justify-start md:justify-center space-y-4"
                >
                  {/* Title Section */}
                  <div className="space-y-2 md:space-y-3">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="text-accent-400 text-xs md:text-sm font-bold uppercase tracking-widest"
                    >
                      {achievements[currentIndex].subtitle}
                    </motion.p>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.4 }}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight"
                    >
                      {achievements[currentIndex].title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed"
                  >
                    {achievements[currentIndex].description}
                  </motion.p>

                  {/* Highlights List */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.4 }}
                    className="space-y-2 pt-3"
                  >
                    {achievements[currentIndex].highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <HiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs md:text-sm lg:text-base text-neutral-200">{highlight}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Progress Indicators */}
                  <div className="pt-4 md:pt-6 border-t border-white/30">
                    <p className="text-xs text-center font-semibold text-neutral-400 mb-3 uppercase tracking-widest">
                      {currentIndex + 1} of {achievements.length} Achievements
                    </p>
                    <div className="flex items-center justify-center space-x-2 flex-wrap gap-2">
                      {achievements.map((_, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.95 }}
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
                </motion.div>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-1/3 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none md:hidden px-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="pointer-events-auto p-2 bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/20 hover:border-accent-400/50 rounded-full transition-all duration-300 shadow-lg text-white"
                  aria-label="Previous achievement"
                >
                  <HiChevronLeft className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="pointer-events-auto p-2 bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/20 hover:border-accent-400/50 rounded-full transition-all duration-300 shadow-lg text-white"
                  aria-label="Next achievement"
                >
                  <HiChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Desktop Navigation Buttons */}
              <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none justify-between px-0">
                <motion.button
                  whileHover={{ scale: 1.15, x: -4 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="pointer-events-auto -ml-8 p-3 md:p-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md hover:from-white/30 hover:to-white/20 border border-white/20 hover:border-accent-400/50 rounded-full transition-all duration-300 shadow-lg text-white"
                  aria-label="Previous achievement"
                >
                  <HiChevronLeft className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.15, x: 4 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="pointer-events-auto -mr-8 p-3 md:p-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md hover:from-white/30 hover:to-white/20 border border-white/20 hover:border-accent-400/50 rounded-full transition-all duration-300 shadow-lg text-white"
                  aria-label="Next achievement"
                >
                  <HiChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AchievementCarousel;
