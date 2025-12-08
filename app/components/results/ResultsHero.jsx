'use client';

import { motion } from 'framer-motion';
import { HiTrendingUp, HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';

const ResultsHero = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-400 text-sm font-bold mb-8">
            <HiTrendingUp className="w-4 h-4" />
            <span>Student Success Stories</span>
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Real Results, <span className="text-gradient-gold">Real Success</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Celebrating outstanding achievements of students who transformed their careers 
            with expert guidance and dedicated effort
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 pt-8">
            {[
              { icon: HiAcademicCap, number: '50,000+', label: 'Students Guided' },
              { icon: HiBadgeCheck, number: '1000+', label: 'Selections' },
              { icon: HiTrendingUp, number: '95%', label: 'Success Rate' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent-300" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-accent-300">{stat.number}</p>
                  <p className="text-white/70 text-xs md:text-sm mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsHero;
