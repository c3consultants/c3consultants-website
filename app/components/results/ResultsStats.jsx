'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiTrendingUp, HiAcademicCap, HiBadgeCheck, HiUserGroup } from 'react-icons/hi';

const ResultsStats = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    { icon: HiUserGroup, number: '5000+', label: 'Students Guided', color: 'from-blue-500 to-blue-600' },
    { icon: HiBadgeCheck, number: '1000+', label: 'Total Selections', color: 'from-green-500 to-green-600' },
    { icon: HiAcademicCap, number: '500+', label: 'SSC Selections', color: 'from-purple-500 to-purple-600' },
    { icon: HiTrendingUp, number: '95%', label: 'Success Rate', color: 'from-accent-500 to-accent-600' },
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Our Track <span className="text-accent-300">Record</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Numbers that speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all border border-white/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsStats;
