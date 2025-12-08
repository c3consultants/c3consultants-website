'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiCheckCircle, 
  HiBookOpen, 
  HiAcademicCap, 
  HiChartBar, 
  HiUsers, 
  HiLightningBolt,
  HiSparkles,
  HiArrowRight,
  HiClock,
  HiShieldCheck,
  HiTrendingUp,
  HiBadgeCheck,
  HiDocumentText,
  HiCalendar
} from 'react-icons/hi';
import Link from 'next/link';
import CTASection from '../CTASection';

const CompetitiveExamsPage = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState(0);

  const examCategories = [
    {
      id: 'ssc',
      category: 'SSC Exams',
      icon: HiAcademicCap,
      exams: [
        'SSC CGL (Combined Graduate Level)',
        'SSC CHSL (Combined Higher Secondary Level)',
        'SSC MTS (Multi-Tasking Staff)',
        'SSC GD (General Duty)',
        'SSC CPO (Central Police Organization)',
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      students: '500+',
    },
    {
      id: 'upsc',
      category: 'UPSC & Civil Services',
      icon: HiShieldCheck,
      exams: [
        'UPSC Civil Services (IAS, IPS, IFS)',
        'UPSC CDS (Combined Defence Services)',
        'UPSC NDA (National Defence Academy)',
        'UPSC CAPF (Central Armed Police Forces)',
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      students: '50+',
    },
    {
      id: 'banking',
      category: 'Banking Exams',
      icon: HiChartBar,
      exams: [
        'SBI Clerk & PO (Probationary Officer)',
        'IBPS Clerk & PO',
        'IBPS RRB (Regional Rural Bank)',
        'RBI Grade B',
        'NABARD',
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      students: '150+',
    },
    {
      id: 'insurance',
      category: 'Insurance Exams',
      icon: HiDocumentText,
      exams: [
        'LIC AAO (Assistant Administrative Officer)',
        'LIC ADO (Apprentice Development Officer)',
        'NIACL (National Insurance Academy)',
        'NICL Assistant',
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      students: '80+',
    },
    {
      id: 'teaching',
      category: 'Teaching Exams',
      icon: HiBookOpen,
      exams: [
        'CTET (Central Teacher Eligibility Test)',
        'UGC NET (National Eligibility Test)',
        'DSSSB (Delhi Subordinate Services Selection Board)',
        'KVS (Kendriya Vidyalaya Sangathan)',
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      students: '300+',
    },
    {
      id: 'engineering',
      category: 'Engineering & Management',
      icon: HiLightningBolt,
      exams: [
        'GATE (Graduate Aptitude Test in Engineering)',
        'CAT (Common Admission Test)',
        'XAT (Xavier Aptitude Test)',
        'MAT (Management Aptitude Test)',
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      students: '200+',
    },
  ];

  const features = [
    {
      icon: HiBookOpen,
      title: 'Comprehensive Study Material',
      description: 'Updated books, notes, previous year papers, and online resources covering complete syllabus for all subjects.',
      highlights: ['Latest editions', 'Previous papers', 'Online access'],
    },
    {
      icon: HiUsers,
      title: 'Expert Faculty Team',
      description: 'Experienced teachers with proven track record and deep subject knowledge to guide you effectively.',
      highlights: ['Qualified teachers', 'Industry experts', 'Dedicated mentors'],
    },
    {
      icon: HiChartBar,
      title: 'Regular Mock Tests',
      description: 'Weekly tests with detailed performance analysis, all-India ranking, and comprehensive feedback reports.',
      highlights: ['Weekly tests', 'Performance analysis', 'National ranking'],
    },
    {
      icon: HiAcademicCap,
      title: 'Small Batch Sizes',
      description: 'Limited students per batch ensuring personalized attention, doubt clearing, and focused learning.',
      highlights: ['Max 30 students', 'Personal attention', 'Interactive sessions'],
    },
    {
      icon: HiLightningBolt,
      title: 'Exam Strategies & Tips',
      description: 'Time management techniques, problem-solving shortcuts, and exam-specific strategies for success.',
      highlights: ['Time management', 'Quick techniques', 'Exam tactics'],
    },
    {
      icon: HiCalendar,
      title: 'Current Affairs Updates',
      description: 'Daily current affairs updates, weekly compilations, and monthly magazines for GK preparation.',
      highlights: ['Daily updates', 'Weekly digest', 'Monthly magazine'],
    },
  ];

  const courseStructure = [
    {
      phase: 'Foundation Phase',
      duration: '2 months',
      description: 'Building strong conceptual understanding of all subjects',
      icon: HiBookOpen,
    },
    {
      phase: 'Advanced Phase',
      duration: '3 months',
      description: 'In-depth topic coverage with advanced problem solving',
      icon: HiTrendingUp,
    },
    {
      phase: 'Practice Phase',
      duration: '2 months',
      description: 'Intensive mock tests and previous year paper practice',
      icon: HiChartBar,
    },
    {
      phase: 'Revision Phase',
      duration: '1 month',
      description: 'Complete syllabus revision with quick notes and tips',
      icon: HiShieldCheck,
    },
  ];

  const whyChooseUs = [
    { text: '23+ years of coaching excellence', icon: HiSparkles },
    { text: '95% success rate in competitive exams', icon: HiTrendingUp },
    { text: 'Personalized study plans for each student', icon: HiUsers },
    { text: 'Regular doubt clearing sessions', icon: HiAcademicCap },
    { text: 'Previous year question papers with solutions', icon: HiDocumentText },
    { text: 'Interview and personality development', icon: HiBadgeCheck },
    { text: 'Online and offline coaching options', icon: HiLightningBolt },
    { text: 'Affordable fee with EMI options', icon: HiCheckCircle },
  ];

  const successStats = [
    { number: '1000+', label: 'Total Selections', icon: HiTrendingUp },
    { number: '95%', label: 'Success Rate', icon: HiCheckCircle },
    { number: '23+', label: 'Years Experience', icon: HiSparkles },
    { number: '50+', label: 'Expert Faculty', icon: HiUsers },
  ];

  return (
    <>
      <section className="relative w-full bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Badge */}
              <span className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-400 text-sm font-bold mb-4">
                <HiAcademicCap className="w-4 h-4" />
                <span>Complete Competitive Exam Preparation</span>
              </span>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Master Your Dream<br />
                <span className="text-gradient-gold">Government Exam</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Expert coaching for SSC, UPSC, Banking, Teaching, and all major competitive exams 
                with comprehensive study material, mock tests, and proven strategies.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {successStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all group"
                    >
                      <Icon className="w-6 h-6 text-accent-300 mx-auto mb-2" />
                      <p className="text-2xl md:text-3xl font-bold text-white">{stat.number}</p>
                      <p className="text-white/70 text-xs">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center space-x-2 px-7 py-3 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 transform hover:scale-105"
                >
                  <span className="text-lg">Enroll Now</span>
                  <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+918837604639"
                  className="inline-flex items-center justify-center space-x-2 px-7 py-3 bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold rounded-xl transition-all duration-300"
                >
                  <span className="text-lg">Call: +91 8837604639</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Exam Categories Section */}
      <section ref={ref} className="section-padding bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
              Complete Coverage
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
              Exams We <span className="text-gradient">Prepare You For</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive coaching for all major competitive examinations across India
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-start gap-3 mb-10">
            {examCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onClick={() => setSelectedCategory(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === index
                      ? `bg-gradient-to-br ${category.color} text-white shadow-xl scale-105`
                      : `${category.bgColor} ${category.textColor} hover:shadow-lg hover:scale-105`
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.category}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Category Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className={`bg-gradient-to-br ${examCategories[selectedCategory].color} rounded-3xl p-6 text-white shadow-2xl`}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                      {examCategories[selectedCategory].category}
                    </h3>
                    <p className="text-white/90">
                      {examCategories[selectedCategory].students} students successfully placed
                    </p>
                  </div>
                  <div className="hidden md:block">
                    {(() => {
                      const Icon = examCategories[selectedCategory].icon;
                      return <Icon className="w-20 h-20 text-white/20" />;
                    })()}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {examCategories[selectedCategory].exams.map((exam, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
                    >
                      <HiCheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white font-medium">{exam}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-primary-600 rounded-lg font-bold hover:bg-white/90 transition-all"
                  >
                    <span>Get Started with {examCategories[selectedCategory].category}</span>
                    <HiArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
              Complete <span className="text-gradient">Exam Preparation</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Everything you need to crack your competitive exam
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl border-2 border-neutral-200 group-hover:border-primary-500 p-6 transition-all duration-300 hover:shadow-2xl h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-neutral-700">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-bold mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-4">
              Structured <span className="text-gradient">Learning Path</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A systematic 4-phase approach to ensure complete exam preparation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseStructure.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl border-2 border-neutral-200 group-hover:border-primary-500 p-4 transition-all hover:shadow-xl h-full flex flex-col justify-center items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent-600 to-accent-500 rounded-xl flex items-center justify-center mb-5 text-white font-bold text-2xl shadow-lg">
                      {index + 1}
                    </div>

                    <Icon className="w-10 h-10 text-primary-600 mb-4" />

                    <h3 className="text-xl font-bold text-primary-900 mb-2">
                      {phase.phase}
                    </h3>

                    <div className="flex items-center space-x-2 mb-4">
                      <HiClock className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-600 font-medium">{phase.duration}</span>
                    </div>

                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Connecting Arrow (except last) */}
                  {index < courseStructure.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <HiArrowRight className="w-6 h-6 text-primary-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-accent-300 text-sm font-bold mb-4">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
              Why Students <span className="text-accent-300">Choose Us</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join thousands of successful students who achieved their government job dreams with us
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-500 transition-all">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/90 font-medium leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-10"
          >
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
              <HiBadgeCheck className="w-10 h-10 text-accent-300" />
              <div className="text-left">
                <p className="text-white font-bold text-lg">1000+ Selections</p>
                <p className="text-white/80 text-sm">Students placed in government jobs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default CompetitiveExamsPage;
