import React, { useEffect, useRef, useState } from "react";

import { AnimatedWaves } from "../../components/AnimatedWaves";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MarketingSection } from "./sections/MarketingSection";
import { OverlapSection } from "./sections/OverlapSection";
import { PointSection } from "./sections/PointSection";
import { PointWrapperSection } from "./sections/PointWrapperSection";
import { SectionComponentNodeSection } from "./sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { SocialMediaContentSection } from "./sections/SocialMediaContentSection";
import { SocialMediaSection } from "./sections/SocialMediaSection";
import { SupportFormSection } from "./sections/SupportFormSection";
import { SeoContentSection } from "./sections/SeoContentSection";
import { PerformanceMarketingContentSection } from "./sections/PerformanceMarketingContentSection";
import { WebDesigningContentSection } from "./sections/WebDesigningContentSection";
import { UIUXContentSection } from "./sections/UIUXContentSection";
import { ClientsSection } from "./sections/ClientsSection";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

export const MacbookPro = (): JSX.Element => {
  const [selectedSection, setSelectedSection] = useState("seo");
  const [direction, setDirection] = useState<number>(1); // 1: next (right-to-left), -1: prev (left-to-right)
  const socialMediaRef = useRef<HTMLDivElement>(null);
  const seoRef = useRef<HTMLDivElement>(null);
  const performanceMarketingRef = useRef<HTMLDivElement>(null);
  const webDesigningRef = useRef<HTMLDivElement>(null);
  const uiuxRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef<number>(0);

  // Define service categories for reuse
  const serviceCategories = [
    { id: "seo", label: "SEO", component: SeoContentSection },
    { id: "social-media", label: "Social Media", component: SocialMediaContentSection },
    { id: "performance-marketing", label: "Performance Marketing", component: PerformanceMarketingContentSection },
    { id: "web-designing", label: "Web Designing", component: WebDesigningContentSection },
    { id: "ui-ux", label: "UI/UX", component: UIUXContentSection },
  ];

  // Find the current section index
  const currentSectionIndex = serviceCategories.findIndex(category => category.id === selectedSection);

  // Update slide direction based on index change
  useEffect(() => {
    const prev = prevIndexRef.current;
    if (currentSectionIndex > prev) {
      setDirection(1);
    } else if (currentSectionIndex < prev) {
      setDirection(-1);
    }
    prevIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  const handleCapsuleClick = (section: string) => {
    setSelectedSection(section);
    
    // Smooth scroll to the selected section
    let ref: React.RefObject<HTMLDivElement> | null = null;
    if (section === "social-media") ref = socialMediaRef;
    else if (section === "seo") ref = seoRef;
    else if (section === "performance-marketing") ref = performanceMarketingRef;
    else if (section === "web-designing") ref = webDesigningRef;
    else if (section === "ui-ux") ref = uiuxRef;
    
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle swipe navigation
  const handlePrevSection = () => {
    const prevIndex = (currentSectionIndex - 1 + serviceCategories.length) % serviceCategories.length;
    setSelectedSection(serviceCategories[prevIndex].id);
  };

  const handleNextSection = () => {
    const nextIndex = (currentSectionIndex + 1) % serviceCategories.length;
    setSelectedSection(serviceCategories[nextIndex].id);
  };

  // Set up swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextSection,
    onSwipedRight: handlePrevSection,
    touchEventOptions: { passive: false },
    trackMouse: false
  });

  return (
    <div
      className="bg-white dark:bg-[#1e1e1e] flex flex-col md:flex-row justify-center w-full min-h-screen transition-colors duration-300"
      data-model-id="1:5"
    >
      <AnimatedWaves />
      <div className="bg-white dark:bg-[#1e1e1e] w-full relative transition-colors duration-300">
        <div className="relative w-full">
          {/* Top sections */}
          <div className="relative w-full">
            <SectionComponentNodeSection />
            {/* Capsule container */}
            <div className="relative w-full">
              <img
                className="w-full h-32 sm:h-auto mt-8 sm:mt-32 object-cover rounded-b-2xl sm:rounded-none shadow-md sm:shadow-none"
                alt="Group"
                src="https://c.animaapp.com/mdhrxz59aeFeBE/img/group.png"
              />
              {/* Overlayed Welcome to the StartupSurge era */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-4 sm:-mt-32 px-2">
                <div className="[font-family:'League_Spartan',Helvetica] font-normal text-gray-800 dark:text-white text-2xl sm:text-5xl md:text-[100px] text-center tracking-[0] leading-[36px] sm:leading-[60px] md:leading-[100px] drop-shadow-xl transition-colors duration-300">
                  <span>Welcome to the</span>
                  <br />
                  <span className="font-bold text-gray-800 dark:text-white text-3xl sm:text-6xl md:text-[120px]">Startup</span><span className="font-bold text-[#ffa500] text-3xl sm:text-6xl md:text-[120px]">Surge</span>
                  <br />
                  <span className="text-gray-800 dark:text-white">era</span>
                </div>
              </div>
            </div>
          </div>
          {/* Section 2: Capsule Navigation - Positioned below hero, above services */}
          <div className="sticky top-0 z-50 w-full bg-white dark:bg-[#1e1e1e] pt-4 pb-2 sm:pt-6 sm:pb-3 shadow-lg transition-colors duration-300 hidden sm:block mt-8 sm:mt-16">
            <div className="flex justify-center px-2 sm:px-0">
              <OverlapSection
                onCapsuleClick={handleCapsuleClick}
                value={selectedSection}
                onValueChange={setSelectedSection}
              />
            </div>
          </div>

          {/* Mobile Navigation Indicators */}
          <div className="sm:hidden w-full py-4 flex justify-center space-x-2">
            {serviceCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedSection(category.id)}
                className={`w-2 h-2 rounded-full ${selectedSection === category.id ? 'bg-[#ffa500]' : 'bg-gray-300 dark:bg-gray-600'}`}
                aria-label={`Go to ${category.label} section`}
              />
            ))}
          </div>

          {/* Section 3: Content sections - SWIPEABLE ON MOBILE */}
          <div className="relative w-full" {...swipeHandlers}>
              {/* Mobile Swipeable Content */}
              <div className="sm:hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSection}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0"
                  >
                    {/* Dynamically render the selected component */}
                    {serviceCategories.find(cat => cat.id === selectedSection)?.component && 
                      React.createElement(serviceCategories.find(cat => cat.id === selectedSection)?.component as React.ComponentType)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Desktop Content */}
              <div className="hidden sm:block">
                <AnimatePresence mode="wait">
                  {/* Social Media Content Section */}
                  {selectedSection === "social-media" && (
                    <motion.div
                      key="social-media-desktop"
                      initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                      transition={{ duration: 0.3 }}
                      ref={socialMediaRef}
                      className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0"
                    >
                      <SocialMediaContentSection />
                    </motion.div>
                  )}
                  {/* SEO Content Section */}
                  {selectedSection === "seo" && (
                    <motion.div
                      key="seo-desktop"
                      initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                      transition={{ duration: 0.3 }}
                      ref={seoRef}
                      className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0"
                    >
                      <SeoContentSection />
                    </motion.div>
                  )}
                  {/* Performance Marketing Content Section */}
                  {selectedSection === "performance-marketing" && (
                    <motion.div
                      key="performance-marketing-desktop"
                      initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                      transition={{ duration: 0.3 }}
                      ref={performanceMarketingRef}
                      className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0"
                    >
                      <PerformanceMarketingContentSection />
                    </motion.div>
                  )}
                  {/* Web Designing Content Section */}
                  {selectedSection === "web-designing" && (
                    <motion.div
                      key="web-designing-desktop"
                      initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                      transition={{ duration: 0.3 }}
                      ref={webDesigningRef}
                      className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0"
                    >
                      <WebDesigningContentSection />
                    </motion.div>
                  )}
                  {/* UI/UX Content Section */}
                  {selectedSection === "ui-ux" && (
                    <motion.div
                      key="ui-ux-desktop"
                      initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                      transition={{ duration: 0.3 }}
                      ref={uiuxRef}
                      className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0"
                    >
                      <UIUXContentSection />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Section */}
              <div id="about" className="w-full px-2 sm:px-4 md:px-8 lg:px-16 mx-auto my-4 sm:my-16">
                <div className="text-center">
                  <h2 className="[font-family:'League_Spartan',Helvetica] text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-[28px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0]">
                    <span className="text-gray-800 dark:text-white">About </span>
                    <span className="font-bold text-gray-800 dark:text-white">Startup</span><span className="font-bold text-[#ffa500]">Surge</span>
                    <span className="text-gray-800 dark:text-white">!</span>
                  </h2>
                </div>
                <div className="[font-family:'League_Spartan',Helvetica] font-normal text-gray-800 dark:text-white text-base sm:text-lg md:text-xl text-center leading-[22px] sm:leading-[28px] tracking-[0] mt-2 sm:mt-8 px-2 transition-colors duration-300">
                  Think of us as your personal creative cavalry, charging into the
                  digital battlefield with a riot of ideas and
                  <br className="hidden md:block" />a relentless pursuit of results. We&#39;re not just
                  designers, we&#39;re storytellers, strategists, and a touch of
                  mischievous magicians,
                  <br className="hidden md:block" />
                  weaving narratives that captivate your audience and leave them
                  begging for more.
                </div>
                <div className="mt-4 sm:mt-12 max-w-4xl mx-auto">
                  <div className="space-y-2 sm:space-y-8">
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8">
                      <h3 className="font-bold whitespace-nowrap w-auto sm:w-48 text-base sm:text-xl"><span className="text-white dark:text-white">•</span> <span className="text-[#ffa500]">Creative Excellence</span></h3>
                      <div className="text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                        <p className="leading-relaxed">Innovative design solutions that captivate and inspire. We craft visual identities that tell your story and create user experiences that keep your audience engaged and coming back for more.</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8">
                      <h3 className="font-bold whitespace-nowrap w-auto sm:w-48 text-base sm:text-xl"><span className="text-white dark:text-white">•</span> <span className="text-[#ffa500]">Strategic Growth</span></h3>
                      <div className="text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                        <p className="leading-relaxed">Data-driven marketing strategies that deliver measurable results. We optimize performance, focus on ROI, and provide deep market insights to drive your business growth.</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8">
                      <h3 className="font-bold whitespace-nowrap w-auto sm:w-48 text-base sm:text-xl"><span className="text-white dark:text-white">•</span> <span className="text-[#ffa500]">Digital Innovation</span></h3>
                      <div className="text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                        <p className="leading-relaxed">Cutting-edge digital solutions including social media mastery, SEO optimization, web development, and seamless technology integration to keep you ahead of the curve.</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8">
                      <h3 className="font-bold whitespace-nowrap w-auto sm:w-48 text-base sm:text-xl"><span className="text-white dark:text-white">•</span> <span className="text-[#ffa500]">Client Success</span></h3>
                      <div className="text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                        <p className="leading-relaxed">Dedicated support team with transparent communication, delivering measurable results and building long-term partnerships that ensure your success.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Services Section */}
              {/* Clients Section - inserted between About and Services */}
              <div id="clients" className="w-full px-2 sm:px-4 md:px-8 lg:px-16 mx-auto mt-4 sm:mt-16">
                <ClientsSection />
              </div>
              {/* Services Section */}
              <div id="services" className="w-full px-2 sm:px-4 md:px-8 lg:px-16 mx-auto mt-4 sm:mt-16">
                <div className="w-full">
                  <CallToActionSection />
                </div>
              </div>
              {/* Support Form Section */}
              <SupportFormSection />

              {/* Footer Section */}
              <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};
