'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaMicrophone, FaBriefcase, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

export default function ServicesContact() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const services = [
    {
      icon: <FaGraduationCap className="text-3xl md:text-4xl" />,
      title: 'Career Counselling',
      description: 'Personalized career guidance for students & professionals. C3 helps you discover the right path aligned with your passion and goals.',
      color: 'from-accent-500 to-accent-700'
    },
    {
      icon: <FaMicrophone className="text-3xl md:text-4xl" />,
      title: 'Motivational Speaking',
      description: 'Inspiring keynote speeches for schools, colleges & corporate events. C3 empowers audiences to achieve their full potential.',
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: <FaBriefcase className="text-3xl md:text-4xl" />,
      title: 'Corporate Training',
      description: 'Leadership development workshops and professional training programs. C3 transforms teams into high-performing units.',
      color: 'from-accent-600 to-primary-600'
    }
  ]

  return (
    <section id="services" className="py-12 md:py-16 lg:py-24 px-4 md:px-8 bg-neutral-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary-500/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Services Section */}
        <div ref={ref} className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-3 md:mb-4">
              <span className="text-accent-500">C3 Career Consultants</span> Services
            </h2>
            <p className="text-base md:text-lg text-neutral-700 max-w-2xl mx-auto px-4">
              Comprehensive career solutions from India's trusted career consulting agency - 
              <span className="font-bold text-primary-600"> C3 Career Consultants</span>
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="group bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-accent-500"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-lg md:rounded-xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* C3 Brand Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 md:mt-12 text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl md:rounded-2xl p-6 md:p-8 border border-accent-200"
          >
            <p className="text-sm sm:text-base md:text-lg text-primary-700 font-medium">
              <span className="font-bold text-accent-600 text-lg sm:text-xl md:text-2xl">C3 Career Consultants</span> has been 
              empowering careers for over <span className="font-bold text-accent-600">23 years</span>, 
              serving <span className="font-bold">5000+ students</span> across Punjab and beyond.
            </p>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          id="contact"
          className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                Ready to Transform Your Career with <span className="text-accent-400">C3</span>?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8">
                Book your free consultation with C3 Career Consultants today and take the first step towards your dream career
              </p>

              {/* Contact Details */}
              <div className="space-y-3 md:space-y-4">
                <a 
                  href="tel:+919781312020" 
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaPhone className="text-primary-700 text-base md:text-lg font-bold" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-300">Call C3 Now</p>
                    <p className="font-bold text-sm md:text-lg">+91 9781312020</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919781312020" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-white text-lg md:text-xl" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-300">WhatsApp C3</p>
                    <p className="font-bold text-sm md:text-lg">Message Us Instantly</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary-700 text-base md:text-lg" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-300">C3 Location</p>
                    <p className="font-bold text-sm md:text-base">Sangrur, Punjab, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Form - Smaller on Mobile */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-1 md:mb-2">
                Quick Inquiry
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 mb-4 md:mb-6">Get in touch with C3 Career Consultants</p>
              <form className="space-y-3 md:space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-lg border-2 border-neutral-200 focus:border-accent-500 focus:outline-none transition-colors"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-lg border-2 border-neutral-200 focus:border-accent-500 focus:outline-none transition-colors"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-lg border-2 border-neutral-200 focus:border-accent-500 focus:outline-none transition-colors"
                  required
                />
                <textarea 
                  placeholder="Your Message" 
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base rounded-lg border-2 border-neutral-200 focus:border-accent-500 focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-accent-500 hover:bg-accent-600 text-primary-700 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message to C3
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
