'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLightBulb, HiSpeakerphone, HiUsers, HiCheckCircle } from 'react-icons/hi';

const TeamExpertise = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const expertise = [
    {
      icon: HiAcademicCap,
      title: 'Career Counselling Excellence',
      description: 'Comprehensive career guidance services with personalized approach',
      items: [
        'Scientific psychometric assessments',
        'Personalized career path planning',
        'Professional skill development programs',
        'One-on-one expert guidance sessions',
      ],
      color: 'from-primary-600 to-primary-500',
      stat: '50,000+',
      statLabel: 'Students Guided',
    },
    {
      icon: HiLightBulb,
      title: 'Competitive Exam Mastery',
      description: 'Result-oriented coaching for government examinations',
      items: [
        'SSC & UPSC expert coaching',
        'Comprehensive mock tests & analysis',
        'Exclusive study material',
        'Effective time management strategies',
      ],
      color: 'from-accent-600 to-accent-500',
      stat: '95%',
      statLabel: 'Success Rate',
    },
    {
      icon: HiSpeakerphone,
      title: 'Motivation & Training',
      description: 'Transform personality and build lasting confidence',
      items: [
        'Leadership development programs',
        'Confidence building workshops',
        'Professional communication skills',
        'Complete personality development',
      ],
      color: 'from-accent-600 to-accent-500',
      stat: '100+',
      statLabel: 'Workshops',
    },
    {
      icon: HiUsers,
      title: 'Comprehensive Student Support',
      description: 'End-to-end career support and mentorship',
      items: [
        'Ongoing mentoring programs',
        'Professional career networking',
        'Dedicated placement assistance',
        'Lifetime alumni support system',
      ],
      color: 'from-primary-600 to-primary-500',
      stat: '24/7',
      statLabel: 'Support',
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
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-0" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-0" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4 shadow-sm">
            Our Expertise & Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
            Comprehensive Career <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto">
            Professional services designed to support every stage of your career development journey
          </p>
        </motion.div>

        {/* Expertise Grid - 2 cols on mobile, 4 on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {expertise.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-500 p-6 h-full transition-all duration-300 hover:shadow-2xl flex flex-col">
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all`}
                  >
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm mb-5 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Items with checkmarks */}
                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {area.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.3 }}
                        className="flex items-start space-x-2 text-neutral-700 text-sm group-hover:text-neutral-900 transition-colors"
                      >
                        <HiCheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="pt-5 border-t-2 border-neutral-200 group-hover:border-primary-300 transition-colors">
                    <p className="text-3xl font-bold text-primary-600 mb-1">{area.stat}</p>
                    <p className="text-xs text-neutral-600 font-medium uppercase tracking-wide">
                      {area.statLabel}
                    </p>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-neutral-700 mb-4 text-base md:text-lg">
            Ready to start your transformation journey?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamExpertise;
