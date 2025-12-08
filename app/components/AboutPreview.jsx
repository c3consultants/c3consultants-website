'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { HiCheckCircle, HiArrowRight, HiSparkles } from 'react-icons/hi';

const AboutPreview = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const highlights = [
    'MBA in Career Counselling from Punjabi University',
    'Bachelor of Laws (LLB) - Legal expertise',
    'Former Manager at ICICI Bank',
    'President, Patiala District Table Tennis Association',
    'District Chairman, Rotary International (RID 3090)',
    'Former President, Rotary Club Patiala Midtown',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section ref={ref} className="section-padding bg-neutral-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
              {/* Actual Image */}
              <Image
                src="/images/hero1.jpg"
                alt="Manik Raj Singla - Career Counsellor"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Overlay for fallback */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Decorative Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0">
                    <HiSparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-primary-600 text-sm">Expert Guidance</p>
                    <p className="text-xs text-neutral-600">Since 2002</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl -z-10 shadow-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl -z-10 shadow-lg"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6"
            >
              <HiSparkles className="w-4 h-4" />
              <span>About Our Founder</span>
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4 md:mb-6"
            >
              Meet <span className="text-gradient">Manik Raj Singla</span>
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4 mb-6 md:mb-8"
            >
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                With over <span className="font-semibold text-primary-600">23 years of dedicated experience</span> in career counselling and guidance, Manik Raj Singla has transformed the lives of thousands of students and professionals across Punjab and beyond.
              </p>
              <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                His unique combination of <span className="font-semibold text-primary-600">academic excellence, corporate experience, and passion for community service</span> makes him one of the most sought-after career consultants in the region.
              </p>
            </motion.div>

            {/* Highlights with Staggered Animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-3 mb-8 md:mb-10"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 group-hover:bg-primary-500 transition-all duration-300">
                      <HiCheckCircle className="w-5 h-5 text-primary-600 group-hover:text-white transition-all duration-300" />
                    </div>
                  </div>
                  <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center space-x-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-lg shadow-lg-navy hover:shadow-xl-navy transform hover:scale-105 transition-all duration-300 group"
              >
                <span>Read Full Story</span>
                <HiArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Trust Indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-sm text-neutral-600 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-neutral-200"
            >
              ✓ Trusted by <span className="font-semibold text-primary-600">50,000+ students</span> with <span className="font-semibold text-primary-600">95% success rate</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
