'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { HiTrendingUp, HiSparkles, HiHeart, HiStar } from 'react-icons/hi';
import { FaAward } from 'react-icons/fa';

const ImpactStats = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    {
      icon: HiSparkles,
      number: 23,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Serving students since 2002 with dedication',
      color: 'from-primary-600 to-primary-500',
    },
    {
      icon: HiHeart,
      number: 5000,
      suffix: '+',
      label: 'Students Transformed',
      description: 'Lives changed through expert guidance',
      color: 'from-accent-600 to-accent-500',
    },
    {
      icon: HiTrendingUp,
      number: 95,
      suffix: '%',
      label: 'Success Rate',
      description: 'Students achieving their career goals',
      color: 'from-accent-600 to-accent-500',
    },
    {
      icon: FaAward,
      number: 100,
      suffix: '+',
      label: 'Awards & Recognition',
      description: 'Industry and community acknowledgment',
      color: 'from-primary-600 to-primary-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-600 via-primary-500 to-neutral-900 relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-300 text-sm font-bold mb-4 shadow-lg"
          >
            Measurable Success
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Our <span className="text-accent-300">Impact</span> in Numbers
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto">
            Quantifiable results that demonstrate our unwavering commitment to excellence and student success
          </p>
        </motion.div>

        {/* Stats Grid - 2 cols on mobile, 4 on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md hover:bg-white/15 border border-white/20 hover:border-accent-300/50 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                  {/* Icon with gradient */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>

                  {/* Number with CountUp */}
                  <div className="mb-3">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif drop-shadow-lg">
                      {inView && (
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          separator=","
                          suffix={stat.suffix}
                        />
                      )}
                    </p>
                  </div>

                  {/* Label */}
                  <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-tight">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed flex-grow">
                    {stat.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-accent-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-white/90 text-base md:text-lg font-medium mb-4">
            Join thousands of successful students who transformed their careers with us
          </p>
          <motion.div
            className="inline-flex items-center space-x-2 text-accent-300"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiStar className="w-5 h-5" />
            <span className="text-sm font-semibold">Your success story starts here</span>
            <HiStar className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;
