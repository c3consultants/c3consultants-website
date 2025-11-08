'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiPhone, HiChevronRight, HiChevronDown } from 'react-icons/hi';
import { FiBookOpen, FiTarget, FiZap } from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    {
      name: 'Career Counselling',
      href: '/services/career-counselling',
      description: 'Expert guidance for your career path',
    },
    {
      name: 'Competitive Exams',
      href: '/services/competitive-exams',
      description: 'SSC, UPSC, Banking exam coaching',
    },
    {
      name: 'Motivational Speaking',
      href: '/services/motivational-speaking',
      description: 'Transform with inspiring sessions',
    },
  ];

  const isServicePage = pathname?.startsWith('/services/');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg-navy py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
              <Image
                src="/images/c3-logo.jpg"
                alt="C3 Career Consultants Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <div className="hidden md:block">
              <h1 className={`font-serif text-base lg:text-lg font-bold transition-colors duration-300 ${
                isScrolled ? 'text-primary-600' : 'text-white drop-shadow-lg'
              }`}>
                C3 Career Consultants
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-neutral-600' : 'text-white/95 drop-shadow-md'
              }`}>
                Building Careers Since 2002
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                {item.hasDropdown ? (
                  <button
                    className={`flex items-center space-x-1 font-semibold text-sm transition-all duration-300 relative group ${
                      isServicePage
                        ? isScrolled
                          ? 'text-primary-600'
                          : 'text-accent-500 drop-shadow-lg'
                        : isScrolled
                        ? 'text-neutral-700 hover:text-primary-600'
                        : 'text-white hover:text-accent-400 drop-shadow-md'
                    }`}
                  >
                    <span>{item.name}</span>
                    <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`} />
                    <span
                      className={`absolute -bottom-1 -left-1 h-0.5 transition-all duration-300 ${
                        isScrolled ? 'bg-primary-600' : 'bg-accent-500'
                      } ${
                        isServicePage ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-semibold text-sm transition-all duration-300 relative group ${
                      pathname === item.href
                        ? isScrolled
                          ? 'text-primary-600'
                          : 'text-accent-500 drop-shadow-lg'
                        : isScrolled
                        ? 'text-neutral-700 hover:text-primary-600'
                        : 'text-white hover:text-accent-400 drop-shadow-md'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                        isScrolled ? 'bg-primary-600' : 'bg-accent-500'
                      } ${
                        pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )}

                {/* Services Dropdown Menu */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden"
                      >
                        <div className="p-2">
                          {serviceLinks.map((service, index) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`flex items-start space-x-2 p-2 rounded-xl transition-all duration-300 group/item ${
                                pathname === service.href
                                  ? 'bg-primary-50 border border-primary-200'
                                  : 'hover:bg-neutral-50 border border-transparent'
                              }`}
                            >
                              <div className="text-2xl flex-shrink-0">{service.icon}</div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h4 className={`font-bold text-sm ${
                                    pathname === service.href ? 'text-primary-600' : 'text-neutral-900 group-hover/item:text-primary-600'
                                  }`}>
                                    {service.name}
                                  </h4>
                                  <HiChevronRight className={`w-4 h-4 transition-all ${
                                    pathname === service.href 
                                      ? 'text-primary-600 translate-x-0' 
                                      : 'text-neutral-400 -translate-x-1 group-hover/item:translate-x-0 group-hover/item:text-primary-600'
                                  }`} />
                                </div>
                                <p className="text-xs text-neutral-600">{service.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+919781312020"
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                isScrolled
                  ? 'text-primary-600 hover:bg-primary-50'
                  : 'text-white hover:bg-white/15 backdrop-blur-sm drop-shadow-lg'
              }`}
            >
              <HiPhone className="text-lg" />
              <span>9781312020</span>
            </a>
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg-gold hover:shadow-xl-gold'
                  : 'bg-white text-primary-600 hover:bg-accent-100 shadow-lg hover:shadow-xl backdrop-blur-sm'
              }`}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'text-primary-600 hover:bg-primary-50'
                : 'text-white hover:bg-white/15 backdrop-blur-sm drop-shadow-lg'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-16 left-0 right-0 bg-white rounded-b-3xl shadow-2xl z-40 lg:hidden overflow-y-auto max-h-[calc(100vh-64px)]"
            >
              <div className="container-custom py-6 space-y-2">
                {/* Navigation Links */}
                <div className="space-y-2 mb-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 ${
                              isServicePage
                                ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg-navy'
                                : 'text-primary-700 hover:bg-primary-50 active:bg-primary-100'
                            }`}
                          >
                            <span>{item.name}</span>
                            <HiChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                              isMobileServicesOpen ? 'rotate-180' : ''
                            }`} />
                          </button>

                          {/* Mobile Services Submenu */}
                          <AnimatePresence>
                            {isMobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pt-2 space-y-2">
                                  {serviceLinks.map((service) => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-300 ${
                                        pathname === service.href
                                          ? 'bg-primary-50 border border-primary-200'
                                          : 'bg-neutral-50 hover:bg-neutral-100'
                                      }`}
                                    >
                                      <div className="text-xl">{service.icon}</div>
                                      <div className="flex-1">
                                        <h4 className={`font-bold text-sm mb-0.5 ${
                                          pathname === service.href ? 'text-primary-600' : 'text-neutral-900'
                                        }`}>
                                          {service.name}
                                        </h4>
                                        <p className="text-xs text-neutral-600">{service.description}</p>
                                      </div>
                                      {pathname === service.href && (
                                        <HiChevronRight className="w-4 h-4 text-primary-600 flex-shrink-0 mt-1" />
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-5 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 ${
                            pathname === item.href
                              ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg-navy'
                              : 'text-primary-700 hover:bg-primary-50 active:bg-primary-100'
                          }`}
                        >
                          <span>{item.name}</span>
                          {pathname === item.href && (
                            <HiChevronRight className="w-5 h-5" />
                          )}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-6" />

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="px-5">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
                      Quick Contact
                    </p>
                    <a
                      href="tel:+919781312020"
                      className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-200 hover:border-primary-300 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                        <HiPhone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-600 font-medium">Call Us</p>
                        <p className="text-sm font-bold text-primary-600">9781312020</p>
                      </div>
                    </a>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mx-5 block px-6 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-center rounded-xl font-bold shadow-lg-gold hover:shadow-xl-gold transition-all duration-300 active:scale-95"
                  >
                    Book Free Consultation
                  </Link>
                </motion.div>

                {/* Footer Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="px-5 py-4 text-xs text-neutral-500 text-center border-t border-neutral-200 mt-6"
                >
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
