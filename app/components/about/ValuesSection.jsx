'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLightBulb, HiUsers, HiStar, HiShieldCheck } from 'react-icons/hi2';
import { FaRegHandshake } from 'react-icons/fa';
import { FiZap } from 'react-icons/fi';

const ValuesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const values = [
    {
      icon: HiStar,
      title: 'Excellence',
      description: 'We pursue excellence in every aspect of our work and continuously strive for improvement in service quality',
      color: 'from-primary-600 to-primary-500',
      number: '01',
    },
    {
      icon: HiUsers,
      title: 'Student Focus',
      description: 'Every decision and action is guided by what is best for our students\' growth and career development',
      color: 'from-accent-600 to-accent-500',
      number: '02',
    },
    {
      icon: HiLightBulb,
      title: 'Innovation',
      description: 'We embrace new ideas and methodologies to provide cutting-edge career solutions and guidance',
      color: 'from-primary-600 to-primary-500',
      number: '03',
    },
    {
      icon: HiShieldCheck,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our professional dealings and commitments',
      color: 'from-accent-600 to-accent-500',
      number: '04',
    },
    {
      icon: FiZap,
      title: 'Empowerment',
      description: 'We believe in empowering individuals to take control of their career destiny through knowledge',
      color: 'from-primary-600 to-primary-500',
      number: '05',
    },
    {
      icon: FaRegHandshake,
      title: 'Community',
      description: 'We foster a supportive community where everyone contributes to collective success and growth',
      color: 'from-accent-600 to-accent-500',
      number: '06',
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-0" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4 shadow-sm">
            Our Core Principles
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
            Values That Guide Us
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
            The fundamental principles that drive our commitment to student success and organizational excellence
          </p>
        </motion.div>

        {/* Values Grid - 2 cols on mobile, 3 on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                  {value.number}
                </div>

                <div className="bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-500 p-6 h-full transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative z-10 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative z-10 text-xl md:text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="relative z-10 text-neutral-600 text-sm md:text-base leading-relaxed group-hover:text-neutral-700 transition-colors">
                    {value.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="relative z-10 mt-6 pt-6 border-t-2 border-neutral-200 group-hover:border-primary-300 transition-colors">
                    <div className="h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-10 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-200"
        >
          <p className="text-lg md:text-xl font-bold text-primary-900 mb-3">
            These values are not just words – they're our commitment to you
          </p>
          <p className="text-neutral-600">
            Every interaction, every session, every decision reflects these core principles
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
