'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';

const ServiceCard = ({ title, description, icon: Icon, link, image, index, features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group relative h-full"
    >
      {/* Card Container */}
      <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
        {/* Image Section */}
        <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600">
          <div
            className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-900/30 to-transparent" />
          </div>

          {/* Icon Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
            className="absolute top-6 right-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-xl border border-white/20 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300"
          >
            <Icon className="w-8 h-8 text-primary-500" />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-6 md:p-8">
          {/* Title */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.1, duration: 0.4 }}
            className="text-2xl md:text-3xl font-serif font-bold text-primary-600 mb-3 group-hover:text-primary-700 transition-colors duration-300"
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.15, duration: 0.4 }}
            className="text-neutral-600 mb-5 leading-relaxed text-base flex-grow"
          >
            {description}
          </motion.p>

          {/* Features List (if provided) */}
          {features && features.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
              className="space-y-2 mb-6"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <HiCheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                  <span className="text-sm text-neutral-600">{feature}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.25, duration: 0.4 }}
            className="mt-auto"
          >
            <Link
              href={link}
              className="inline-flex items-center space-x-2 text-primary-500 font-semibold hover:text-primary-700 group/btn transition-colors duration-300"
            >
              <span>Learn More</span>
              <HiArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-1 -right-1 w-32 h-32 bg-accent-500/10 rounded-bl-3xl transform translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-500" />
        <div className="absolute -bottom-1 -left-1 w-20 h-20 bg-primary-500/5 rounded-tr-3xl transform -translate-x-8 translate-y-8 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
