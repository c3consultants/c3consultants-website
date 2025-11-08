'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLocationMarker, HiPhone, HiClock } from 'react-icons/hi';

const MapLocation = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="location" ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 px-4"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
            Visit Our <span className="text-gradient">Office</span>
          </h2>
          <p className="text-neutral-600 text-base md:text-lg max-w-2xl mx-auto">
            Located in the heart of Patiala, Punjab. Drop by for a personal consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border-2 border-neutral-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.0208826267896!2d76.38956392346888!3d30.328431471540446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910294e59f85d59%3A0xa4d4df4643324d4d!2sC3%20Career%20Consultants!5e0!3m2!1sen!2sin!4v1699000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="C3 Career Consultants Location"
              />
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address Card - Full Width */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
              <HiLocationMarker className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-3">Office Address</h3>
              <p className="text-white/90 leading-relaxed mb-4 text-sm">
               SCO 4, Old Grain Market, Nabha Gate Rd, near Chotti Baradari, Old Anaj Mandi, Bagichi Het Ram, Patiala, Punjab 147001
              </p>
              <a
                href="https://www.google.com/maps/place/C3+Career+Consultants/@30.3284106,76.3927513,17z/data=!3m1!4b1!4m6!3m5!1s0x3910294e59f85d59:0xa4d4df4643324d4d!8m2!3d30.328406!4d76.3953262!16s%2Fg%2F11rwwb5y17?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-accent-100 transition-colors text-sm"
              >
                Get Directions
              </a>
            </div>

            {/* Contact & Office Hours - 2 Column Grid on Mobile */}
            <div className="grid gap-4">
              {/* Contact Card */}
              <div className="bg-white border-2 border-primary-200 rounded-2xl p-3">
                <HiPhone className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-bold text-primary-900 mb-3">Call Us</h3>
                <a
                  href="tel:+919781312020"
                  className="text-base font-bold text-primary-600 hover:text-primary-700 transition-colors block mb-2 break-all"
                >
                 9781312020
                </a>
                <p className="text-neutral-600 text-xs">
                  Available Mon - Sat<br />9:00 AM - 6:00 PM
                </p>
              </div>

              {/* Office Hours Card */}
              <div className="bg-accent-100 border-2 border-accent-300 rounded-2xl p-3">
                <HiClock className="w-8 h-8 text-accent-600 mb-4" />
                <h3 className="text-lg font-bold text-neutral-900 mb-3">Office Hours</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-neutral-700 truncate">Mon - Fri</span>
                    <span className="font-semibold text-neutral-900 whitespace-nowrap">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-neutral-700 truncate">Saturday</span>
                    <span className="font-semibold text-neutral-900 whitespace-nowrap">9 AM - 4 PM</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-neutral-700 truncate">Sunday</span>
                    <span className="font-semibold text-red-600 whitespace-nowrap">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
