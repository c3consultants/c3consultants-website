'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiSparkles, HiTrendingUp, HiArrowRight } from 'react-icons/hi';
import { FiAward } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const AchievementShowcase = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const showcases = [
    {
      id: 1,
      title: 'Awards & Honours',
      subtitle: 'Recognition & Leadership Excellence',
      description: 'Celebrating 23+ years of visionary leadership, community service, and transformative impact. From Rotary International awards to government recognition.',
      image: '/images/achivement1.jpg',
      link: '/awards',
      icon: FiAward,
      stats: [
        { number: '15+', label: 'Awards' },
        { number: '6', label: 'Leadership Roles' },
      ],
      highlights: [
        'Rotary Visionary Leadership Award',
        'Zone 4 E-Directory Editor',
        'Independence Day Honour',
      ],
      color: 'from-accent-500 to-accent-600',
      bgGradient: 'from-primary-500/80 via-primary-600/65 to-primary-700/45',
    },
    {
      id: 2,
      title: 'Student Results',
      subtitle: 'Transforming Dreams Into Reality',
      description: 'Real success stories of students who achieved remarkable results. From 93% CBSE scorers to Bank PO selections and UPSC aspirants.',
      image: '/images/student1.jpg',
      link: '/results',
      icon: HiTrendingUp,
      stats: [
        { number: '5000+', label: 'Students' },
        { number: '95%', label: 'Success Rate' },
      ],
      highlights: [
        '93% CBSE Commerce Scorer',
        'Bank PO Selections',
        'Triple Career Success',
      ],
      color: 'from-primary-500 to-primary-600',
      bgGradient: 'from-primary-500/80 via-primary-600/65 to-primary-700/45',
    },
  ];

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-neutral-50 via-white to-accent-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-4"
        >
          <span className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4 shadow-sm">
            <HiSparkles className="w-4 h-4" />
            <span>Excellence & Success</span>
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4 leading-tight">
            Our <span className="text-gradient">Journey of Excellence</span>
          </h2>

          <p className="text-base md:text-lg text-neutral-700 max-w-3xl mx-auto">
            Celebrating outstanding achievements in leadership and remarkable student success stories
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {showcases.map((showcase, index) => {
            const Icon = showcase.icon;
            return (
              <motion.div
                key={showcase.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-neutral-200 hover:border-primary-300 h-full">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={showcase.image}
                      alt={showcase.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={70}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${showcase.bgGradient}`} />

                    {/* Icon Badge */}
                    <div className="absolute top-4z right-2">
                      <div className={`w-14 h-14 bg-gradient-to-br ${showcase.color} rounded-full flex items-center justify-center shadow-xl`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                      {showcase.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex-1 bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30"
                        >
                          <p className="text-2xl font-bold text-white">{stat.number}</p>
                          <p className="text-xs text-white/90">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 ">
                    {/* Title */}
                    <div className="mb-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                        {showcase.subtitle}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-3">
                        {showcase.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {showcase.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <p className="text-sm font-bold text-neutral-700 mb-3">Featured Highlights:</p>
                      <div className="space-y-2">
                        {showcase.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-neutral-600">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${showcase.color}`} />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={showcase.link}
                      className={`group/btn inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${showcase.color} text-white rounded-xl font-bold transition-all duration-300 hover:shadow-xl transform hover:scale-105`}
                    >
                      <span>View All {showcase.title}</span>
                      <HiArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br ${showcase.color} rounded-3xl -z-10 opacity-10 group-hover:opacity-20 transition-opacity`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementShowcase;
