'use client';

import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const AboutHero = () => {
  return (
    <section className="relative w-full pt-20 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-0" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-400 text-xs md:text-sm font-bold shadow-lg"
          >
            Our Journey
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight"
          >
            Shaping Futures Since <span className="text-gradient-gold">2002</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the story behind C3 Career Consultants - a journey of excellence, 
            passion, and transformative career guidance spanning over two decades.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="#founder"
              className="inline-flex items-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg-gold hover:shadow-xl-gold transform hover:scale-105 group"
            >
              <span>Explore Our Story</span>
              <HiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-8 md:pt-12 border-t border-white/20 flex justify-center gap-8 md:gap-16"
          >
            {[
              { number: '23+', label: 'Years' },
              { number: '5000+', label: 'Students' },
              { number: '95%', label: 'Success' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent-400">{stat.number}</p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
