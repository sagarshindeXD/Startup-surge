import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

import { AnimatedWaves } from "../../components/AnimatedWaves";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FooterSection } from "./sections/FooterSection";
import { OverlapSection } from "./sections/OverlapSection";
import { SectionComponentNodeSection } from "./sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { SocialMediaContentSection } from "./sections/SocialMediaContentSection";
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
  const capsuleBarRef = useRef<HTMLDivElement>(null);
  const capsuleAnchorRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef<number>(0);

  // Define service categories for reuse with their respective page links
  const serviceCategories = [
    { 
      id: "seo", 
      label: "SEO", 
      component: SeoContentSection,
      link: "/services/seo"
    },
    { 
      id: "social-media", 
      label: "Social Media", 
      component: SocialMediaContentSection,
      link: "/services/social-media-marketing"
    },
    { 
      id: "performance-marketing", 
      label: "Performance Marketing", 
      component: PerformanceMarketingContentSection,
      link: "/services/performance-marketing"
    },
    { 
      id: "graphic-design", 
      label: "Graphic Design", 
      component: WebDesigningContentSection, // Using WebDesigningContentSection as a placeholder
      link: "/services/graphic-designer"
    },
    { 
      id: "ecommerce", 
      label: "Ecommerce Marketing", 
      component: PerformanceMarketingContentSection, // Using PerformanceMarketingContentSection as a placeholder
      link: "/services/ecommerce-marketing"
    },
    { 
      id: "whatsapp-marketing", 
      label: "WhatsApp Marketing", 
      component: SocialMediaContentSection, // Using SocialMediaContentSection as a placeholder
      link: "/services/whatsapp-marketing"
    },
    { 
      id: "email-marketing", 
      label: "Email Marketing", 
      component: SocialMediaContentSection, // Using SocialMediaContentSection as a placeholder
      link: "/services/email-marketing"
    },
    { 
      id: "influencer-marketing", 
      label: "Influencer Marketing", 
      component: SocialMediaContentSection, // Using SocialMediaContentSection as a placeholder
      link: "/services/influencer-marketing"
    },
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
    // Always scroll the page to the sticky capsule bar
    const anchor = capsuleAnchorRef.current || capsuleBarRef.current;
    if (anchor) {
      // Use original document position (not affected by sticky) to avoid snapping to page top
      const getAbsoluteTop = (el: HTMLElement | null): number => {
        let top = 0;
        let node: HTMLElement | null = el;
        while (node) {
          top += node.offsetTop || 0;
          node = node.offsetParent as HTMLElement | null;
        }
        return top;
      };
      const absoluteTop = getAbsoluteTop(anchor);
      const targetY = Math.max(0, absoluteTop);
      // robust scrolling across possible scroll roots
      const setScrollTop = (y: number) => {
        try { window.scrollTo({ top: y, left: 0, behavior: "smooth" }); } catch {}
        try { (document.scrollingElement || document.documentElement).scrollTop = y; } catch {}
        try { document.documentElement.scrollTop = y; } catch {}
        try { (document.body as HTMLElement).scrollTop = y; } catch {}
      };
      setScrollTop(targetY);
      // second pass next frame for safety
      requestAnimationFrame(() => setScrollTop(targetY));

      // Minimal debug (dev only)
      try {
        const mode = (import.meta as any)?.env?.MODE || 'development';
        if (mode !== 'production') {
          console.debug('[CapsuleScroll]', { winY: window.scrollY, targetY });
        }
      } catch {}
    }
    // Update selection (even if same id, harmless)
    if (section !== selectedSection) setSelectedSection(section);
  };

  // Removed auto-scroll on selection change to avoid duplicate scrolls;
  // we now scroll explicitly in handleCapsuleClick()

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
      className="bg-white dark:bg-[#1e1e1e] flex flex-col md:flex-row justify-center w-full min-h-screen transition-colors duration-300 pb-12 [padding-bottom:env(safe-area-inset-bottom)]"
      data-model-id="1:5"
    >
      <Helmet>
        <title>StartupSurge® | Startup Marketing Agency | SEO, Social, Performance</title>
        <meta name="description" content="Grow your startup with SEO, performance marketing, social media, UI/UX and web design. StartupSurge delivers traffic, leads, and revenue." />
        <link rel="canonical" href="https://www.startupsurge.in/" />
        <meta property="og:title" content="StartupSurge® | Startup Marketing Agency" />
        <meta property="og:description" content="SEO, performance marketing, social media, UI/UX and web design for startups." />
        <meta property="og:url" content="https://www.startupsurge.in/" />
      </Helmet>
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
                  <span className="font-bold text-gray-800 dark:text-white text-3xl sm:text-6xl md:text-[120px]">Building </span>
                  <span className="font-bold text-[#ffa500] text-3xl sm:text-6xl md:text-[120px]">Brands</span>
                  <span className="font-bold text-gray-800 dark:text-white text-3xl sm:text-6xl md:text-[120px]"> Digitally</span>
                </div>
              </div>
            </div>
          </div>
          {/* Section 2: Capsule Navigation - Positioned below hero, above services */}
          {/* Non-sticky anchor for precise scroll positioning */}
          <div ref={capsuleAnchorRef} className="h-0" aria-hidden="true" />
          <div ref={capsuleBarRef} className="sticky top-0 z-50 w-full bg-white dark:bg-[#1e1e1e] pt-4 pb-2 sm:pt-6 sm:pb-3 shadow-lg transition-colors duration-300 hidden sm:block mt-0">
            <div className="flex justify-center px-2 sm:px-0">
              <OverlapSection
                onCapsuleClick={handleCapsuleClick}
                value={selectedSection}
                onValueChange={setSelectedSection}
              />
            </div>
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

                {/* Mobile Navigation Indicators (moved below content, visually smaller) */}
                <div className="w-full py-3 flex justify-center space-x-2">
                  {serviceCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedSection(category.id)}
                      className="p-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffa500] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1e1e1e]"
                      aria-label={`Go to ${category.label} section`}
                    >
                      <span
                        className={`block rounded-full ${selectedSection === category.id ? 'bg-[#ffa500]' : 'bg-gray-300 dark:bg-gray-600'} w-2 h-2`}
                      />
                    </button>
                  ))}
                </div>
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
                  </h2>
                  <div className="h-1 w-16 sm:w-24 md:w-32 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400 mt-2 sm:mt-4 mx-auto"></div>
                </div>
                <div className="[font-family:'League_Spartan',Helvetica] font-normal text-gray-800 dark:text-white text-base sm:text-lg md:text-xl text-center leading-[22px] sm:leading-[28px] tracking-[0] mt-2 sm:mt-8 px-2 transition-colors duration-300">
                  At StartupSurge, we're more than just a digital agency—we're your growth partners. With creativity at our core and strategy as our compass, we help brands cut through the noise and make an unforgettable impact. Our team blends design, technology, and data-driven marketing to create solutions that don't just look great but deliver real results.
                </div>
                <div className="mt-4 sm:mt-12 max-w-4xl mx-auto">
                  <div className="space-y-2 sm:space-y-8">
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8">
                      <h3 className="font-bold whitespace-nowrap w-auto sm:w-48 text-base sm:text-xl"><span className="text-white dark:text-white">•</span> <span className="text-[#ffa500]">Creative Excellence</span></h3>
                      <div className="text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                        Designs that inspire, stories that resonate. We craft powerful brand identities and engaging experiences that leave a lasting impression.
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8">
                      <h3 className="font-bold whitespace-nowrap w-auto sm:w-48 text-base sm:text-xl"><span className="text-white dark:text-white">•</span> <span className="text-[#ffa500]">Strategic Growth</span></h3>
                      <div className="text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                        Every move is backed by data. We create ROI-focused marketing strategies that fuel measurable growth and long-term success.
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
