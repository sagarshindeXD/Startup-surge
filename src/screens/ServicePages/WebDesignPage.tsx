import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { ServicePageTemplate } from "./ServicePageTemplate";

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

export const WebDesignPage: React.FC = () => {
  const services = [
    {
      title: "Custom Website Design 🖥️",
      emoji: "🖥️",
      description: "Tailored designs that reflect your brand's personality and speak directly to your audience."
    },
    {
      title: "Responsive & Mobile-First 📱",
      emoji: "📱",
      description: "Seamless user experience across all devices—desktop, tablet, and mobile."
    },
    {
      title: "User-Centric Layouts 🎯",
      emoji: "🎯",
      description: "Designs built to guide users effortlessly, turning curiosity into action."
    },
    {
      title: "Speed & Performance Optimization ⚡",
      emoji: "⚡",
      description: "Fast-loading, smooth-performing websites that keep visitors engaged."
    },
    {
      title: "SEO-Friendly Structure 🔍",
      emoji: "🔍",
      description: "Built with search visibility in mind so your site ranks higher from the start."
    },
    {
      title: "Conversion-Focused Design 💡",
      emoji: "💡",
      description: "Crafted with strategy to drive leads, sales, and measurable results."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      <Helmet>
        <title>Web Design Services | StartupSurge®</title>
        <meta name="description" content="Stunning, responsive websites designed to convert. We create custom web experiences that engage visitors and drive business growth." />
        <link rel="canonical" href="https://www.startupsurge.in/services/web-design" />
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
                Web <span className="text-[#ffa500] font-bold">Design</span>
              </h1>
              <div className="space-y-4 text-left">
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                  Create a powerful online presence with custom websites that are as functional as they are beautiful.
                </p>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200">
                  We don't just design websites—we create digital experiences that captivate, engage, and convert.
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
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Web Design"
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
            <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-8">
              Our <span className="text-[#ffa500] font-bold">Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#ffa500] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beautiful, functional websites designed to engage visitors and drive business growth
            </p>
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
