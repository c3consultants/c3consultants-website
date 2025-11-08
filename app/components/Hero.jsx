'use client'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image - Full Coverage */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/manik-hero.jpg" 
          alt="Manik Raj Singla" 
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay - darker on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/80 via-primary-600/65 to-primary-700/45"></div>
      </div>

      {/* Top Right Logo - Minimal & Small */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-4 right-4 md:top-6 md:right-8 z-20"
      >
        <Image 
          src="/images/c3-logo.jpg" 
          alt="C3 Career Consultants" 
          width={45}
          height={16}
          className="object-contain drop-shadow-lg md:w-[75px] md:h-[26px]"
        />
      </motion.div>

      {/* Main Content Container - Left Side */}
      <div className="w-full relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20">
          {/* Content on left */}
          <div className="max-w-xl md:max-w-2xl">
            
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 md:space-y-6"
            >
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
                Unlock the Career{' '}
                <span className="block mt-1 md:mt-2 text-accent-500">
                  You Deserve
                </span>
              </h1>

              {/* Subheading - Emphasizing C3 */}
              <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed font-light">
                <span className="font-bold text-accent-400">C3 Career Consultants</span> - 
                Expert career counselling backed by{' '}
                <span className="text-accent-400 font-bold">23+ years</span> of proven experience
              </p>

              {/* Expert Info Badge */}
              <div className="inline-flex items-center gap-2 md:gap-3 bg-white/15 backdrop-blur-md rounded-full px-3 py-2 md:px-5 md:py-3 border border-accent-500/30 shadow-lg">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-500 font-bold text-xs md:text-sm">MRS</span>
                </div>
                <div>
                  <p className="text-white font-bold text-xs md:text-sm">Manik Raj Singla</p>
                  <p className="text-gray-200 text-[10px] md:text-xs">Founder & Lead Consultant</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-accent-500 hover:bg-accent-600 text-primary-700 font-bold text-sm md:text-base rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent-500/50"
                >
                  <FaPhone className="text-base md:text-lg group-hover:rotate-12 transition-transform" />
                  <span>Book Free Session</span>
                </a>
                <a 
                  href="#services" 
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-bold text-sm md:text-base rounded-full border-2 border-accent-500/50 hover:border-accent-500 transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>

              {/* Stats Row - Responsive */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-4 md:pt-6">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-500">23+</p>
                  <p className="text-gray-200 text-[10px] sm:text-xs md:text-sm mt-0.5 md:mt-1">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-500">5K+</p>
                  <p className="text-gray-200 text-[10px] sm:text-xs md:text-sm mt-0.5 md:mt-1">Students Guided</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-500">98%</p>
                  <p className="text-gray-200 text-[10px] sm:text-xs md:text-sm mt-0.5 md:mt-1">Success Rate</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-accent-500/30">
                <span className="text-xs md:text-sm text-gray-200 font-medium">Connect with us:</span>
                <div className="flex gap-2 md:gap-3">
                  <a 
                    href="https://wa.me/919781312020" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="WhatsApp"
                    className="w-9 h-9 md:w-10 md:h-10 bg-white/15 hover:bg-success-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/20"
                  >
                    <FaWhatsapp className="text-base md:text-lg text-white" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/manik-raj-singla-career-counsellor-and-consultant-5b154a203" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 md:w-10 md:h-10 bg-white/15 hover:bg-blue-600 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/20"
                  >
                    <FaLinkedin className="text-base md:text-lg text-white" />
                  </a>
                  <a 
                    href="https://www.facebook.com/manikrajsingla.CareerConsultant" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 md:w-10 md:h-10 bg-white/15 hover:bg-blue-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-white/20"
                  >
                    <FaFacebook className="text-base md:text-lg text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
