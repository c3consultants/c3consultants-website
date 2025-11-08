'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronDown } from 'react-icons/hi';

const ContactFAQ = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How can I book a consultation?',
      answer: 'You can book a consultation by filling out the contact form above, calling us at +91 9781312020, or visiting our office directly. We offer both in-person and online consultations.',
    },
    {
      question: 'What services do you provide?',
      answer: 'We provide comprehensive career counselling, competitive exam preparation (SSC, UPSC), motivational speaking, personality development, and career planning services.',
    },
    {
      question: 'Do you offer online coaching?',
      answer: 'Yes, we offer both in-person and online coaching sessions to accommodate students from across India and internationally.',
    },
    {
      question: 'What are your office hours?',
      answer: 'We are open Monday to Saturday from 9:00 AM to 6:00 PM. Sunday is our holiday. You can also reach us via email 24/7.',
    },
    {
      question: 'How long does a typical consultation last?',
      answer: 'A typical consultation session lasts 45-60 minutes, allowing ample time to discuss your career concerns and develop a customized action plan.',
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-neutral-600 text-lg">
            Quick answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white rounded-xl border-2 border-neutral-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-bold text-primary-900 text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <HiChevronDown className="w-6 h-6 text-primary-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-neutral-600 mb-4">Still have questions?</p>
          <a
            href="tel:+919781312020"
            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors shadow-lg"
          >
            Call Us: +91 9781312020
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFAQ;
