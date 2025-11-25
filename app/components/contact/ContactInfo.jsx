'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiPhone, HiMail, HiLocationMarker, HiClock, HiCalendar } from 'react-icons/hi';
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

const ContactInfo = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const contactDetails = [
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+91 9781312020',
      subtext: 'Mon - Sat, 9 AM - 6 PM',
      href: 'tel:+919781312020',
      action: 'Call Now',
    },
    {
      icon: HiMail,
      title: 'Email',
      value: 'manikrajsingla@gmail.com',
      subtext: 'We reply within 24 hours',
      href: 'mailto:manikrajsingla@gmail.com',
      action: 'Send Email',
    },
    {
      icon: HiLocationMarker,
      title: 'Office',
      value: 'Old Grain Market, Nabha Gate Rd, Patiala',
      subtext: 'India - 147001',
      href: '#location',
      action: 'Get Directions',
    },
    {
      icon: HiClock,
      title: 'Office Hours',
      value: 'Monday - Saturday',
      subtext: '9:00 AM - 6:00 PM',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: 'https://www.facebook.com/manikrajsingla.CareerConsultant', color: 'hover:text-blue-600' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/manik-raj-singla-career-counsellor-and-consultant-5b154a203', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com/@manikrajsingla', color: 'hover:text-red-600' },
    { name: 'Twitter', icon: FaTwitter, href: 'https://x.com/manikrajsingla', color: 'hover:text-blue-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section ref={ref} className="pt-10 pb-5 bg-gradient-to-br from-primary-50 to-neutral-50  overflow-hidden">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="px-4"
        >
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
              Contact Information
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg">
              Multiple ways to reach us. We're here to help you succeed.
            </p>
          </div>

          {/* Contact Details - Responsive Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4 md:gap-6 mb-8"
          >
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white rounded-xl border-2 border-neutral-200 hover:border-primary-500 p-4 transition-all duration-300 hover:shadow-lg h-full">
                    <div className="flex flex-col space-y-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-all duration-300">
                        <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm font-semibold text-neutral-500 mb-1">{detail.title}</p>
                        <p className="text-sm md:text-base lg:text-lg font-bold text-primary-900 mb-1 break-words overflow-wrap-anywhere">
                          {detail.value}
                        </p>
                        <p className="text-xs md:text-sm text-neutral-600">{detail.subtext}</p>
                        {detail.href && (
                          <a
                            href={detail.href}
                            className="inline-block mt-2 text-xs md:text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                          >
                            {detail.action} →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quick Booking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 md:p-8 text-white mb-8"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <HiCalendar className="w-8 h-8 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold mb-2">Book Direct Appointment</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Schedule a one-on-one consultation at your convenience
                </p>
                <a
                  href="tel:+919781312020"
                  className="inline-block px-6 py-3 bg-white text-primary-600 rounded-lg font-bold hover:bg-accent-100 transition-colors text-sm"
                >
                  Call +91 9781312020
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h3 className="text-base md:text-lg font-bold text-primary-900 mb-4">Connect With Us</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white border-2 border-neutral-200 rounded-lg flex items-center justify-center text-neutral-600 ${social.color} transition-all duration-300 hover:border-current flex-shrink-0`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
