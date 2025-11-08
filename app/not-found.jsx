'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { HiHome, HiArrowLeft } from 'react-icons/hi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom max-w-6xl relative z-10">
        {/* 2-Column Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Placeholder for your custom 404 vector image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm rounded-3xl border-2 border-white/10 flex items-center justify-center">
                <Image
                  src="/images/404.png"
                  alt="404 Not Found"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-32 h-32 border-4 border-primary-500/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-400 text-sm font-bold"
            >
              Error 404
            </motion.span>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                Page Not <span className="text-gradient-gold">Found</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Oops! The page you're looking for seems to have taken a different career path. 
                Let's get you back on track to success.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg-gold hover:shadow-xl-gold transform hover:scale-105"
              >
                <HiHome className="w-5 h-5" />
                <span>Go Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center space-x-2 px-7 py-3 bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold rounded-lg transition-all duration-300"
              >
                <HiArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4 border-t border-white/20"
            >
              <p className="text-white/60 text-sm mb-4">Looking for something specific?</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Career Counselling', href: '/services/career-counselling' },
                  { name: 'Competitive Exams', href: '/services/competitive-exams' },
                  { name: 'Contact', href: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-accent-400/50 text-white rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Error Code */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <p className="text-white/40 text-xs">ERROR CODE: 404 - PAGE NOT FOUND</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
