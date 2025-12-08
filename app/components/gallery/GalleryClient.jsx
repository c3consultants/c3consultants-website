'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const GalleryClient = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Gallery images organized by category
  const galleryImages = useMemo(() => [
    // Career Counselling Sessions
    {
      src: '/images/career1.jpg',
      category: 'counselling',
      title: 'Career Guidance Session',
      description: 'Personalized career counselling with students',
    },
    {
      src: '/images/career2.jpg',
      category: 'counselling',
      title: 'One-on-One Consultation',
      description: 'Expert guidance for career planning',
    },
    {
      src: '/images/career3.jpg',
      category: 'counselling',
      title: 'Student Counselling',
      description: 'Helping students choose right career path',
    },
    {
      src: '/images/career5.jpg',
      category: 'counselling',
      title: 'Career Workshop',
      description: 'Interactive career guidance workshop',
    },
    {
      src: '/images/career6.jpg',
      category: 'counselling',
      title: 'Group Counselling Session',
      description: 'Guiding multiple students together',
    },
    {
      src: '/images/career7.jpg',
      category: 'counselling',
      title: 'Career Planning Session',
      description: 'Strategic career roadmap discussion',
    },
    {
      src: '/images/career8.jpg',
      category: 'counselling',
      title: 'Mentorship Session',
      description: 'Expert mentorship for students',
    },
    {
      src: '/images/career9.jpg',
      category: 'counselling',
      title: 'Career Consultation',
      description: 'Professional career guidance',
    },
    {
      src: '/images/career10.jpg',
      category: 'counselling',
      title: 'Student Guidance',
      description: 'Helping students achieve their goals',
    },

    // Awards & Achievements
    {
      src: '/images/achivement1.jpg',
      category: 'awards',
      title: 'Excellence Award',
      description: 'Recognition for outstanding contribution',
    },
    {
      src: '/images/achivement2.jpg',
      category: 'awards',
      title: 'Rotary Visionary Leadership Award',
      description: 'Prestigious leadership recognition',
    },
    {
      src: '/images/achivement3.jpg',
      category: 'awards',
      title: 'Community Service Award',
      description: 'Honoured for community contribution',
    },
    {
      src: '/images/achivement4.jpg',
      category: 'awards',
      title: 'Educational Excellence',
      description: 'Award for educational leadership',
    },
    {
      src: '/images/achivement5.jpg',
      category: 'awards',
      title: 'Recognition Ceremony',
      description: 'Celebrating achievements',
    },
    {
      src: '/images/achivement6.jpg',
      category: 'awards',
      title: 'Leadership Award',
      description: 'Recognition for exceptional leadership',
    },

    // Student Success Stories
    {
      src: '/images/student1.jpg',
      category: 'success',
      title: 'Student Success',
      description: 'Celebrating student achievements',
    },
    {
      src: '/images/student2.jpg',
      category: 'success',
      title: 'Academic Excellence',
      description: 'Students achieving top ranks',
    },
    {
      src: '/images/student3.jpg',
      category: 'success',
      title: 'Success Stories',
      description: 'Real results from our students',
    },
    {
      src: '/images/image1.jpg',
      category: 'success',
      title: 'Student Achievement',
      description: 'Proud moment of success',
    },
    {
      src: '/images/image2.jpg',
      category: 'success',
      title: 'Exam Success',
      description: 'Students clearing competitive exams',
    },
    {
      src: '/images/image3.jpg',
      category: 'success',
      title: 'Success Celebration',
      description: 'Celebrating student victories',
    },

    // Events & Workshops
    {
      src: '/images/hero1.jpg',
      category: 'events',
      title: 'Career Seminar',
      description: 'Large-scale career guidance event',
    },
    {
      src: '/images/hero2.jpg',
      category: 'events',
      title: 'Workshop Event',
      description: 'Interactive workshop for students',
    },
    {
      src: '/images/hero3.jpg',
      category: 'events',
      title: 'Educational Event',
      description: 'Community education program',
    },
    {
      src: '/images/hero.jpg',
      category: 'events',
      title: 'Motivational Session',
      description: 'Inspiring students to achieve more',
    },
  ], []);

  const categories = useMemo(() => [
    { id: 'all', name: 'All', count: galleryImages.length },
    { id: 'counselling', name: 'Counselling', count: galleryImages.filter(img => img.category === 'counselling').length },
    { id: 'awards', name: 'Awards', count: galleryImages.filter(img => img.category === 'awards').length },
    { id: 'success', name: 'Success', count: galleryImages.filter(img => img.category === 'success').length },
    { id: 'events', name: 'Events', count: galleryImages.filter(img => img.category === 'events').length },
  ], [galleryImages]);

  const filteredImages = useMemo(() => {
    return selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory, galleryImages]);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const newIndex = (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Touch handlers for swipe gestures
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
      {/* Hero Section - Mobile First */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="container-custom relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our Gallery
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 px-4">
              Moments that inspire, stories that motivate
            </p>
            <p className="text-sm sm:text-base text-white/80 px-4">
              Explore our journey of transforming careers and celebrating success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter - Mobile First with Horizontal Scroll */}
      <section className="py-4 bg-white border-b border-neutral-200 sticky top-16 sm:top-20 z-30 shadow-sm">
        <div className="container-custom px-4">
          {/* Mobile: Horizontal Scroll */}
          <div className="flex md:hidden overflow-x-auto scrollbar-hide gap-2 pt-1 -mx-4 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold text-xs transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 active:bg-neutral-200'
                }`}
              >
                {category.name}
                <span className="ml-1.5 text-[10px] opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Desktop: Wrapped Pills */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Mobile First */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container-custom px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ y: -8 }}
                  onClick={() => openLightbox(image, index)}
                  className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1 line-clamp-1">{image.title}</h3>
                      <p className="text-white/80 text-[10px] sm:text-xs line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-neutral-500 text-base sm:text-lg">No images found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal - Fully Responsive */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close Button - Mobile Optimized */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full text-white transition-colors"
              aria-label="Close"
            >
              <HiX className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Previous Button - Mobile Optimized */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-4 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full text-white transition-colors"
              aria-label="Previous"
            >
              <HiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Button - Mobile Optimized */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-4 z-50 p-2 sm:p-3 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full text-white transition-colors"
              aria-label="Next"
            >
              <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Image Container - Fully Responsive */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full max-w-7xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Wrapper - Takes most of the screen */}
              <div className="relative flex-1 w-full flex items-center justify-center p-2 sm:p-4 md:p-8">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>

              {/* Image Info - Positioned at Bottom */}
              <div className="relative bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-6 md:p-8">
                <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
                  {selectedImage.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-white/60 text-xs sm:text-sm">
                    {selectedIndex + 1} / {filteredImages.length}
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm hidden sm:block">
                    Swipe or use arrow keys to navigate
                  </p>
                  <p className="text-white/60 text-xs sm:hidden">
                    Swipe to navigate
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add custom scrollbar hiding CSS */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default GalleryClient;
