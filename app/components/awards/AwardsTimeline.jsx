'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar } from 'react-icons/hi';

const AwardsTimeline = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const timeline = [
    { year: '2025', title: 'Independence Day Honour', org: 'Government of Punjab' },
    { year: '2024', title: 'Rotary Visionary Leadership Award', org: 'Rotary International' },
    { year: '2023', title: 'Zone 4 E-Directory Editor', org: 'Rotary International' },
    { year: '2020-21', title: 'President', org: 'Rotary Club Patiala Midtown' },
    { year: 'Current', title: 'Assistant Governor', org: 'Rotary District 3090' },
    { year: 'Current', title: 'President', org: 'Patiala District Table Tennis Association' },
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Journey of <span className="text-accent-300">Excellence</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start space-x-4 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-accent-500 transition-all">
                <HiStar className="w-6 h-6" />
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-6 group-hover:bg-white/20 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-accent-300 font-bold">{item.year}</span>
                  <span className="text-white/70 text-sm">{item.org}</span>
                </div>
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsTimeline;
