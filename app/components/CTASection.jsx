'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { HiPhone, HiMail, HiCalendar, HiArrowRight, HiCheckCircle, HiLocationMarker } from 'react-icons/hi';

const CTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const contactMethods = [
    {
      icon: HiPhone,
      title: 'Call Us',
      value: '+91 9781312020',
      href: 'tel:+919781312020',
      description: 'Direct consultation',
    },
    {
      icon: HiMail,
      title: 'Email Us',
      value: 'contact@c3consultants.in',
      href: 'mailto:contact@c3consultants.in',
      description: 'We reply within 24 hours',
    },
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      value: 'Patiala, Punjab',
      href: 'https://www.google.com/maps/search/SCO+4+Old+Grain+Market+Patiala+Punjab/@30.8942,76.4003,15z',
      description: 'SCO 4, Old Grain Market',
      external: true,
    },
  ];

  const benefits = [
    'Personalized guidance',
    'Expert sessions',
    'Proven strategies',
    'Lifetime support',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-neutral-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 left-0 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-accent-500 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2 md:mb-3 lg:mb-4 leading-tight">
              Ready to Shape Your <span className="text-accent-300">Future</span>?
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-6 md:mb-8 lg:mb-10 leading-relaxed max-w-2xl mx-auto">
              Take the first step towards your dream career. Book a consultation with our expert counsellor today!
            </p>
          </motion.div>

          {/* Benefits List - Compact */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 mb-8 md:mb-10 lg:mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-2"
              >
                <HiCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent-300 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/90 font-medium leading-tight">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Cards + Map - 2 Column Layout */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10 items-stretch"
          >
            {/* Left Column - Contact Cards */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-4 md:gap-6"
            >
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const isExternal = method.external;

                return (
                  <motion.a
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, delay: index * 0.1 },
                      },
                    }}
                    href={method.href || '#'}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-accent-300/50 rounded-xl md:rounded-2xl p-3 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col"
                  >
                    {/* Icon */}
                    <motion.div
                      className="w-7 h-7 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-500/20 group-hover:text-accent-300 transition-all duration-300 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-bold text-base md:text-lg mb-2 leading-tight">
                      {method.title}
                    </h3>

                    {/* Value */}
                    <p className="text-white/90 font-semibold text-sm md:text-base break-all mb-2 flex-grow">
                      {method.value}
                    </p>

                    {/* Description */}
                    <p className="text-white/70 text-xs md:text-sm">
                      {method.description}
                    </p>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Right Column - Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group relative bg-white rounded-xl md:rounded-2xl overflow-hidden h-64 min-h-96 lg:min-h-[500px] shadow-2xl hover:shadow-2xl transition-all duration-300 border-4 border-white/20 flex flex-col"
            >
              {/* Map Header Badge */}
              <div className="absolute top-4 right-0 z-10 flex items-center justify-center">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-lg font-bold text-xs md:text-sm shadow-lg backdrop-blur-sm border border-accent-300/30 flex items-center space-x-2"
                >
                  <HiLocationMarker className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Our Location</span>
                </motion.div>
              </div>

              {/* Map Container */}
              <iframe
                title="C3 Career Consultants Location - Patiala, Punjab"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.0208826267896!2d76.38956392346888!3d30.328431471540446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910294e59f85d59%3A0xa4d4df4643324d4d!2sC3%20Career%20Consultants!5e0!3m2!1sen!2sin!4v1699000000000"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: '100%',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Bottom Info Bar */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 z-20"
              >
                <p className="text-white text-xs md:text-sm font-semibold">
                  SCO 4, Old Grain Market, Patiala, Punjab 147001
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Office Hours Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center pt-6 md:pt-8 border-t border-white/30"
          >
            <p className="text-white/80 mb-2 font-semibold text-xs md:text-sm">
              Office Hours
            </p>
            <p className="text-white text-xs md:text-sm leading-relaxed">
              Monday - Saturday: 9:00 AM - 6:00 PM | Sunday: Closed
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
