import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";

const ServiceCard = ({ title, emoji, description }: { title: string; emoji: string; description: string }) => (
  <motion.div 
    className="bg-white dark:bg-[#2d2d2d] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </motion.div>
);

export const PerformanceMarketingPage: React.FC = () => {
  const services = [
    {
      title: "Growth Strategy 🎯",
      emoji: "🎯",
      description: "Build performance-driven campaigns tailored to your business objectives and audience."
    },
    {
      title: "Search Engine Marketing (SEM) 🔍",
      emoji: "🔍",
      description: "Capture high-intent customers with targeted Google Ads that convert."
    },
    {
      title: "Social Media Ads 📱",
      emoji: "📱",
      description: "Run hyper-targeted campaigns across platforms to reach the right people at the right time."
    },
    {
      title: "Conversion Rate Optimization (CRO) ⚡",
      emoji: "⚡",
      description: "Optimize landing pages and funnels to turn clicks into customers."
    },
    {
      title: "Retargeting Campaigns 🔁",
      emoji: "🔁",
      description: "Re-engage potential customers and maximize conversions with smart remarketing strategies."
    },
    {
      title: "Performance Tracking & Reporting 📊",
      emoji: "📊",
      description: "Get full transparency with data-driven insights that highlight ROI and unlock future growth opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      <Helmet>
        <title>Performance Marketing Services | StartupSurge®</title>
        <meta name="description" content="Data-driven performance marketing that delivers measurable results. Maximize ROI with our strategic paid advertising and conversion optimization services." />
        <link rel="canonical" href="https://www.startupsurge.in/services/performance-marketing" />
      </Helmet>

      {/* Navigation */}
      <SectionComponentNodeSection />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white mb-6 text-left">
                Our <span className="text-[#ffa500] font-bold">Performance Marketing</span> Edge
              </h1>
              <div className="space-y-4 text-left">
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                  We don't just run ads—we design campaigns that deliver measurable growth, maximum ROI, and real impact for your brand.
                </p>
              </div>
            </motion.div>
            
            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Performance Marketing"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#252525] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
              Our <span className="text-[#ffa500] font-bold">Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#ffa500] mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                emoji={service.emoji}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};