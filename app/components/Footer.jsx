'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Awards', href: '/awards' },
    { name: 'Results', href: '/results' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const services = [
    { name: 'Career Counselling', href: '/services/career-counselling' },
    { name: 'Competitive Exams', href: '/services/competitive-exams' },
    { name: 'Motivational Speaking', href: '/services/motivational-speaking' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: 'https://www.facebook.com/manikrajsingla.CareerConsultant',
      color: 'hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/manik-raj-singla-career-counsellor-and-consultant-5b154a203',
      color: 'hover:text-blue-500',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      href: 'https://youtube.com/@manikrajsingla',
      color: 'hover:text-red-500',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://x.com/manikrajsingla',
      color: 'hover:text-blue-400',
    },
  ];

  const contactItems = [
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: 'Old Grain Market, Nabha Gate Rd, Patiala',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      value: '+91 8837604639',
      href: 'tel:+918837604639',
    },
    {
      icon: HiMail,
      title: 'Email',
      value: 'manikrajsingla@gmail.com',
      href: 'mailto:manikrajsingla@gmail.com',
    },
    {
      icon: HiClock,
      title: 'Hours',
      value: 'Mon-Sat: 9AM-6PM',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-neutral-900 via-primary-900 to-neutral-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-0" />

      {/* Main Footer Content */}
      <div className="container-custom py-10 relative z-10">
        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="space-y-6">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center space-x-3 group">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/c3-logo.jpg"
                    alt="C3 Career Consultants Logo"
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">C3 Career</h3>
                  <p className="text-xs text-neutral-400">Since 2002</p>
                </div>
              </Link>

              {/* Description */}
              <p className="text-neutral-400 text-sm leading-relaxed">
                Empowering students and professionals with expert career guidance and competitive exam coaching for 20+ years.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3 pt-4 border-t border-neutral-700">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      whileHover={{ scale: 1.2 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-neutral-400 ${social.color} transition-colors duration-300`}
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-accent-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-neutral-400 hover:text-accent-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="font-serif text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    whileHover={{ x: 4 }}
                    href={item.href || '#'}
                    className="flex items-start space-x-3 text-sm group"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-accent-500 flex-shrink-0 mt-0.5 group-hover:text-accent-400 transition-colors" />
                    <div>
                      <p className="text-neutral-500 text-xs">{item.title}</p>
                      <p className="text-neutral-300 text-xs md:text-sm hover:text-accent-400 transition-colors break-words">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700 pt-6 md:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 text-center md:text-left md:flex md:justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-xs md:text-sm"
            >
              © {currentYear} C3 Career Consultants. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 text-xs md:text-sm"
            >
              Designed by{' '}
              <a
                href="https://easebuilds.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 font-semibold hover:text-accent-300 transition-colors"
              >
                EaseBuilds
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
