'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { HiAcademicCap, HiUsers, HiSparkles, HiTrophy } from 'react-icons/hi';
import { FaTrophy } from 'react-icons/fa';

const StatsCounter = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    {
      number: 23,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Dedicated service since 2002',
      icon: HiAcademicCap,
    },
    {
      number: 50000,
      suffix: '+',
      label: 'Students Guided',
      description: 'Successfully transformed careers',
      icon: HiUsers,
    },
    {
      number: 95,
      suffix: '%',
      label: 'Success Rate',
      description: 'Achieving their career goals',
      icon: HiSparkles,
    },
    {
      number: 100,
      suffix: '+',
      label: 'Awards & Recognition',
      description: 'Industry acknowledgment',
      icon: FaTrophy,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-neutral-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-14"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-400 text-xs md:text-sm font-bold mb-3 shadow-lg">
            Our Impact
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-3 leading-tight">
            Proven Track Record of <span className="text-gradient-gold">Success</span>
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto">
            Comprehensive statistics that showcase our commitment to excellence and impact in career development
          </p>
        </motion.div>

        {/* Stats Grid - 2 columns on small screens */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-6"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-lg md:rounded-xl border border-white/20 group-hover:border-accent-400/50 transition-all duration-300" />

                {/* Card Content - Compact */}
                <div className="relative p-4 md:p-6 text-center h-full flex flex-col justify-center">
                  {/* Icon - Smaller */}
                  <div className="flex justify-center mb-3">
                    <div className="p-2.5 md:p-3 rounded-lg bg-accent-500/20 group-hover:bg-accent-500/40 transition-all duration-300">
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-accent-400 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Number with CountUp - Smaller */}
                  <div className="mb-2">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif drop-shadow-lg">
                      {inView && (
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          separator=","
                          suffix={stat.suffix}
                        />
                      )}
                    </div>
                  </div>

                  {/* Label - Compact */}
                  <h3 className="text-xs md:text-sm lg:text-base font-bold text-white mb-1">
                    {stat.label}
                  </h3>

                  {/* Description - Smaller */}
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:mt-10"
        >
          <p className="text-white/80 text-sm md:text-base mb-3">
            Want to be part of our success stories?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 bg-accent-500 text-white font-bold text-sm md:text-base rounded-lg hover:bg-accent-600 transition-all duration-300 shadow-lg-gold hover:shadow-xl-gold transform hover:scale-105"
          >
            Join Us Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
