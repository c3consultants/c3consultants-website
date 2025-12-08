'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { HiCheckCircle, HiSparkles, HiAcademicCap, HiBriefcase, HiStar } from 'react-icons/hi';
import { FiUsers } from 'react-icons/fi';

const FounderBio = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const credentials = [
    {
      icon: HiAcademicCap,
      text: 'MBA in Career Counselling from Punjabi University',
      highlight: 'Academic Excellence',
    },
    {
      icon: HiAcademicCap,
      text: 'Bachelor of Laws (LLB) - Legal Expertise',
      highlight: 'Legal Knowledge',
    },
    {
      icon: HiBriefcase,
      text: 'Former Senior Manager at ICICI Bank',
      highlight: 'Corporate Experience',
    },
    {
      icon: HiStar,
      text: 'Certified Career Counsellor & Coach',
      highlight: 'Professional Certification',
    },
    {
      icon: HiSparkles,
      text: 'International Speaker & Motivator',
      highlight: 'Public Speaking',
    },
    {
      icon: FiUsers,
      text: 'Community Leader & Entrepreneur',
      highlight: 'Leadership',
    },
  ];

  const achievements = [
    { number: '23+', label: 'Years Experience', color: 'text-primary-600' },
    { number: '50000+', label: 'Lives Transformed', color: 'text-accent-600' },
    { number: '95%', label: 'Success Rate', color: 'text-primary-600' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section ref={ref} id="founder" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-0" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Image Section - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Main Image with actual Next.js Image */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/hero1.jpg"
                alt="Manik Raj Singla - Expert Career Counsellor"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Name badge on hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary-900/95 to-transparent"
              >
                <p className="text-white font-serif text-2xl font-bold mb-1">Manik Raj Singla</p>
                <p className="text-accent-300 text-sm font-semibold">Founder & Lead Consultant</p>
              </motion.div>
            </div>

            {/* Achievement Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-xl p-4 text-center hover:border-primary-500 hover:shadow-lg transition-all duration-300"
                >
                  <p className={`text-2xl md:text-3xl font-bold ${achievement.color} mb-1`}>
                    {achievement.number}
                  </p>
                  <p className="text-neutral-600 text-xs font-medium leading-tight">
                    {achievement.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiSparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">20+ Years Impact</p>
                    <p className="text-white/80 text-sm">Transforming Careers Since 2002</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-600 rounded-full text-sm font-bold mb-6 shadow-sm"
            >
              <HiSparkles className="w-4 h-4 text-accent-500" />
              <span>Meet Our Visionary Founder</span>
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-6 leading-tight"
            >
              A Journey of Excellence & <span className="text-gradient">Empowerment</span>
            </motion.h2>

            {/* Description paragraphs with better styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4 mb-8"
            >
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 border-l-4 border-primary-500 rounded-r-xl p-5">
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                  <span className="font-bold text-primary-600">Manik Raj Singla</span> stands at the forefront 
                  of career counselling in India with over <span className="font-semibold text-primary-600">23 years 
                  of transformative experience</span>. His unique approach combines academic rigor, corporate insight, 
                  and genuine passion for student success.
                </p>
              </div>

              <p className="text-base text-neutral-600 leading-relaxed">
                Beginning his professional journey at <span className="font-semibold">ICICI Bank</span>, where he 
                excelled in senior management, Manik discovered his true calling in guiding young minds. This led 
                to the founding of <span className="font-semibold text-primary-600">C3 Career Consultants</span> in 
                2002, an institution that has since become synonymous with career excellence.
              </p>

              <p className="text-base text-neutral-600 leading-relaxed">
                Beyond career counselling, he is a <span className="font-semibold">dynamic motivational speaker</span>, 
                accomplished community leader, and dedicated mentor who believes that every individual possesses 
                untapped potential waiting to be discovered.
              </p>
            </motion.div>

            {/* Credentials with enhanced design */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-3"
            >
              <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded mr-3" />
                Professional Credentials & Expertise
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {credentials.map((credential, index) => {
                  const Icon = credential.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="group flex items-start space-x-3 bg-white border border-neutral-200 hover:border-primary-500 rounded-lg p-4 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all">
                        <Icon className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary-600 mb-1">{credential.highlight}</p>
                        <p className="text-sm text-neutral-700 leading-snug">{credential.text}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
          {/* Quote with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="relative w-auto lg:col-span-5"
            >
              <div className="absolute -left-4 -top-4 text-6xl text-primary-200 font-serif">"</div>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border-2 border-primary-200 relative">
                <blockquote className="text-lg md:text-xl text-primary-900 font-medium italic leading-relaxed mb-4">
                  The key to success is not just guidance, but inspiration and unwavering belief in oneself. 
                  I'm committed to unlocking the true potential in every student I work with.
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-primary-900">Manik Raj Singla</p>
                    <p className="text-sm text-neutral-600">Founder & Lead Career Consultant</p>
                  </div>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderBio;
