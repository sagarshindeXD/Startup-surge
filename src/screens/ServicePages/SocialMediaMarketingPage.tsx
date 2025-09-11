import React from "react";
import { Helmet } from "react-helmet-async";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";
import { motion } from "framer-motion";

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

export const SocialMediaMarketingPage: React.FC = () => {
  const services = [
    {
      title: "Social Strategy 🎯",
      emoji: "🎯",
      description: "Craft data-driven strategies tailored to your brand's goals, audience, and platforms."
    },
    {
      title: "Content Creation ✨",
      emoji: "✨",
      description: "Produce scroll-stopping visuals, videos, and stories that capture attention and spark conversations."
    },
    {
      title: "Community Building 🤝",
      emoji: "🤝",
      description: "Engage, nurture, and grow an authentic community around your brand."
    },
    {
      title: "Paid Campaigns 💰",
      emoji: "💰",
      description: "Run smart ad campaigns that maximize reach, engagement, and conversions—without wasting budget."
    },
    {
      title: "Analytics & Insights 📊",
      emoji: "📊",
      description: "Track performance, measure ROI, and optimize campaigns to ensure continuous growth."
    },
    {
      title: "Brand Voice & Storytelling 📝",
      emoji: "📝",
      description: "Build a consistent, recognizable voice that makes your brand relatable and memorable."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      <Helmet>
        <title>Social Media Marketing Services | StartupSurge®</title>
        <meta name="description" content="Grow your brand with strategic social media marketing. Content, engagement, and advertising that drives results by StartupSurge." />
        <link rel="canonical" href="https://www.startupsurge.in/services/social-media-marketing" />
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
                Our <span className="text-[#ffa500] font-bold">Social Media</span> Edge
              </h1>
              <div className="space-y-4 text-left">
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                  We don't just manage social media—we turn it into a powerful growth engine that connects your brand with the right people, at the right time.
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
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Social Media Marketing"
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
            <h2 className="text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
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