'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiPhone, HiChevronRight, HiChevronDown } from 'react-icons/hi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Debounced scroll handler for better performance
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigation = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Awards', href: '/awards' },
    { name: 'Results', href: '/results' },
    { name: 'Contact', href: '/contact' },
  ], []);

  const serviceLinks = useMemo(() => [
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
  ], []);

  const isServicePage = pathname?.startsWith('/services/');

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0" onClick={closeMobileMenu}>
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
              <Image
                src="/images/c3-logo.jpg"
                alt="C3 Career Consultants Logo"
                fill
                className="object-contain rounded-lg"
                priority
                sizes="(max-width: 768px) 48px, 56px"
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
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
                        ? isScrolled ? 'text-primary-600' : 'text-accent-500'
                        : isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-accent-400'
                    }`}
                  >
                    <span>{item.name}</span>
                    <HiChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                        isScrolled ? 'bg-primary-600' : 'bg-accent-400'
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
                        ? isScrolled ? 'text-primary-600' : 'text-accent-500'
                        : isScrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-white hover:text-accent-400'
                    }`}
                  >
                    {item.name}
                    
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                        isScrolled ? 'bg-primary-600' : 'bg-accent-400'
                      } ${
                        pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden"
                      >
                        <div className="p-2">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`flex items-start space-x-3 p-4 rounded-xl transition-all duration-200 ${
                                pathname === service.href
                                  ? 'bg-primary-50 border border-primary-200'
                                  : 'hover:bg-neutral-50'
                              }`}
                            >
                              <div className="flex-1">
                                <h4 className={`font-bold text-sm ${pathname === service.href ? 'text-primary-600' : 'text-neutral-900'}`}>
                                  {service.name}
                                </h4>
                                <p className="text-xs text-neutral-600">{service.description}</p>
                              </div>
                              <HiChevronRight className="w-4 h-4 text-neutral-400" />
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
                isScrolled ? 'text-primary-600 hover:bg-primary-50' : 'text-white hover:bg-white/15'
              }`}
            >
              <HiPhone className="text-lg" />
              <span>9781312020</span>
            </a>
            <Link
              href="/contact"
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                isScrolled
                  ? 'bg-accent-500 text-white hover:bg-accent-600'
                  : 'bg-white text-primary-600 hover:bg-accent-100'
              }`}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-primary-600 hover:bg-primary-50' : 'text-white hover:bg-white/15'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-0 right-0 bg-white rounded-b-3xl shadow-2xl z-40 lg:hidden overflow-y-auto max-h-[calc(100vh-80px)]"
            >
              <div className="container-custom py-6 space-y-2">
                {/* Navigation Links */}
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl font-semibold text-base transition-all ${
                            isServicePage
                              ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600'
                              : 'text-primary-700 hover:bg-primary-50'
                          }`}
                        >
                          <span>{item.name}</span>
                          <HiChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pt-2 space-y-2">
                                {serviceLinks.map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    onClick={closeMobileMenu}
                                    className={`flex items-start space-x-3 p-3 rounded-lg transition-all ${
                                      pathname === service.href
                                        ? 'bg-primary-50 border border-primary-200'
                                        : 'bg-neutral-50 hover:bg-neutral-100'
                                    }`}
                                  >
                                    <div className="flex-1">
                                      <h4 className={`font-bold text-sm ${pathname === service.href ? 'text-primary-600' : 'text-neutral-900'}`}>
                                        {service.name}
                                      </h4>
                                      <p className="text-xs text-neutral-600">{service.description}</p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center justify-between px-5 py-3.5 rounded-xl font-semibold text-base transition-all ${
                          pathname === item.href
                            ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600'
                            : 'text-primary-700 hover:bg-primary-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-4" />

                {/* Contact Section */}
                <div className="pt-2">
                  <a
                    href="tel:+919781312020"
                    className="flex items-center space-x-3 p-4 mb-3 rounded-xl bg-primary-50 border-2 border-primary-200 hover:border-primary-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                      <HiPhone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-600 font-medium">Call Us Now</p>
                      <p className="text-sm font-bold text-primary-600">+91 9781312020</p>
                    </div>
                  </a>

                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block px-6 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-center rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    Book Consultation
                  </Link>
                </div>

                {/* Office Hours */}
                <div className="border-t border-neutral-200 pt-4">
                  <p className="text-center text-xs text-neutral-500">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-center text-xs text-neutral-500 mt-1">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
