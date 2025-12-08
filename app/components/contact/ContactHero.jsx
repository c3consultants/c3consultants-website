'use client';

import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

const ContactHero = () => {
  const quickContact = [
    {
      icon: HiPhone,
      title: 'Call Us',
      value: '+91 8837604639',
      href: 'tel:+918837604639',
    },
    {
      icon: HiMail,
      title: 'Email Us',
      value: 'manikrajsingla@gmail.com',
      href: 'mailto:manikrajsingla@gmail.com',
    },
  ];

  return (
    <section className="relative w-full pt-20 pb-16 bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900">
      {/* Animated background - fully contained */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-48 -right-48 w-96 h-96 bg-accent-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-400 text-sm font-bold"
          >
            Get In Touch
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight"
          >
            Let's Start Your <span className="text-gradient-gold">Success Journey</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Ready to transform your career? Get in touch with us today for personalized guidance, 
            expert coaching, and transformative career solutions.
          </motion.p>

          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-4 md:gap-6 pt-4 max-w-4xl mx-auto"
          >
            {quickContact.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-accent-300/50 rounded-xl p-6 transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-accent-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white/70 text-sm mb-1">{contact.title}</p>
                  <p className="text-white font-semibold text-xs sm:text-sm break-words overflow-wrap-anywhere">{contact.value}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
