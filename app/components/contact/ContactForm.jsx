'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { contactFormSchema } from '@/app/lib/validations/contact';

const ContactForm = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Career Counselling',
    'SSC Preparation',
    'UPSC Preparation',
    'Motivational Speaking',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    setErrors({});

    try {
      // Validate with Zod
      const validatedData = contactFormSchema.parse(formData);

      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! We\'ll contact you within 24 hours.',
        });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 5000);
      } else {
        if (data.errors) {
          // Handle field-specific errors
          const fieldErrors = {};
          data.errors.forEach(err => {
            fieldErrors[err.field] = err.message;
          });
          setErrors(fieldErrors);
          setStatus({
            type: 'error',
            message: 'Please fix the errors below',
          });
        } else {
          setStatus({
            type: 'error',
            message: data.message || 'Something went wrong. Please try again.',
          });
        }
      }
    } catch (error) {
      if (error.name === 'ZodError') {
        // Client-side validation errors
        const fieldErrors = {};
        error.errors.forEach(err => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
        setStatus({
          type: 'error',
          message: 'Please fix the errors below',
        });
      } else {
        setStatus({
          type: 'error',
          message: 'Network error. Please check your connection.',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="pt-10 bg-gradient-to-br from-neutral-50 to-primary-50 ">
      <div className="container-custom max-w-2xl lg:max-w-none px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
              Send Us a Message
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
              Book Your <span className="text-gradient">Consultation</span>
            </h2>
            <p className="text-neutral-600 text-lg">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.name ? 'border-red-500' : 'border-neutral-300'
                } focus:border-primary-500 focus:outline-none transition-colors text-neutral-900`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </motion.div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.email ? 'border-red-500' : 'border-neutral-300'
                  } focus:border-primary-500 focus:outline-none transition-colors text-neutral-900`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    errors.phone ? 'border-red-500' : 'border-neutral-300'
                  } focus:border-primary-500 focus:outline-none transition-colors text-neutral-900`}
                  placeholder="9781312020"
                  maxLength={10}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </motion.div>
            </div>

            {/* Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-2">
                Service Interested In *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.service ? 'border-red-500' : 'border-neutral-300'
                } focus:border-primary-500 focus:outline-none transition-colors text-neutral-900`}
              >
                <option value="" disabled>Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-600">{errors.service}</p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.message ? 'border-red-500' : 'border-neutral-300'
                } focus:border-primary-500 focus:outline-none transition-colors resize-none text-neutral-900`}
                placeholder="Tell us more about your career goals..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </motion.div>

            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center space-x-2 p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {status.type === 'success' ? (
                  <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <HiXCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <span className="text-sm font-medium">{status.message}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-lg shadow-lg-navy hover:shadow-xl-navy transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Submit Request'
              )}
            </motion.button>
          </form>

          {/* Privacy Notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-xs text-neutral-500 mt-6 text-center"
          >
            Your information is secure and will never be shared with third parties.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
