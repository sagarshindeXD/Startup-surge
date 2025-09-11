import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";

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

export const EmailMarketingPage: React.FC = () => {
  const services = [
    {
      title: "Email Campaign Strategy 📧",
      emoji: "📧",
      description: "Data-driven email strategies that align with your business goals and customer journey."
    },
    {
      title: "Newsletter Design ✉️",
      emoji: "✉️",
      description: "Engaging, mobile-responsive email templates that reflect your brand and drive action."
    },
    {
      title: "Automation Workflows ⚙️",
      emoji: "⚙️",
      description: "Set up automated email sequences that nurture leads and convert subscribers into customers."
    },
    {
      title: "List Segmentation 🎯",
      emoji: "🎯",
      description: "Targeted messaging through strategic audience segmentation for higher engagement."
    },
    {
      title: "A/B Testing 🔍",
      emoji: "🔍",
      description: "Optimize your campaigns with data-backed testing of subject lines, content, and CTAs."
    },
    {
      title: "Analytics & Reporting 📊",
      emoji: "📊",
      description: "Comprehensive tracking and insights to measure performance and ROI of your email campaigns."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      <Helmet>
        <title>Email Marketing Services | StartupSurge®</title>
        <meta name="description" content="Drive engagement and sales with our strategic email marketing campaigns. From newsletters to automation, we help you connect with your audience effectively." />
        <link rel="canonical" href="https://www.startupsurge.in/services/email-marketing" />
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
                Our <span className="text-[#ffa500] font-bold">Email Marketing</span> Edge
              </h1>
              <div className="space-y-4 text-left">
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                  We don't just send emails—we create meaningful connections that nurture leads and turn subscribers into loyal customers.
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
                src="https://images.unsplash.com/photo-1603791445824-0050bd0360bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Email Marketing"
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
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-8">
              Our <span className="text-[#ffa500] font-bold">Services</span>
            </h2>
            <div className="h-1 w-16 bg-[#ffa500] mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};