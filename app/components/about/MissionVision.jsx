'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiTarget, HiEye, HiHeart, HiLightBulb, HiUsers, HiArrowRight } from 'react-icons/hi';
import { FaAward } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';

const MissionVision = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const pillars = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      description: 'To empower individuals with expert career guidance, comprehensive coaching, and transformative motivation to achieve their professional goals and unlock their true potential.',
      color: 'from-primary-600 to-primary-500',
      features: ['Expert Guidance', 'Personalized Approach', 'Proven Success'],
    },
    {
      icon: HiEye,
      title: 'Our Vision',
      description: 'To be the most trusted career consulting partner, recognized for excellence, innovation, and life-changing impact in developing confident, skilled, and successful professionals.',
      color: 'from-accent-600 to-accent-500',
      features: ['Excellence', 'Innovation', 'Impact'],
    },
  ];

  const values = [
    {
      icon: HiHeart,
      title: 'Excellence',
      description: 'Commitment to highest standards in everything we do',
      stat: '95%',
      statLabel: 'Success Rate',
    },
    {
      icon: HiUsers,
      title: 'Student-Centric',
      description: 'Every decision prioritizes our students\' growth and success',
      stat: '5000+',
      statLabel: 'Students',
    },
    {
      icon: HiLightBulb,
      title: 'Innovation',
      description: 'Continuously evolving our approach and methodology',
      stat: '20+',
      statLabel: 'Programs',
    },
    {
      icon: FaAward,
      title: 'Integrity',
      description: 'Transparent, honest, and ethical in all our practices',
      stat: '100%',
      statLabel: 'Trust',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-neutral-50 via-white to-neutral-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-0" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4 shadow-sm">
            Our Purpose & Principles
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
            Mission, Vision & <span className="text-gradient">Core Values</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
            Guided by strong principles and driven by a clear vision to transform careers
          </p>
        </motion.div>

        {/* Mission & Vision - 2 columns on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Card */}
                <div className={`bg-gradient-to-br ${pillar.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all relative z-10"
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">{pillar.title}</h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-sm md:text-base lg:text-lg flex-grow mb-6 relative z-10">
                    {pillar.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {pillar.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Arrow icon on hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute bottom-6 right-6"
                  >
                    <HiArrowRight className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
