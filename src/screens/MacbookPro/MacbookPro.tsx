import React, { useEffect, useRef, useState } from "react";
import { ScrollArea } from "../../components/ui/scroll-area";
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

export const MacbookPro = (): JSX.Element => {
  const [selectedSection, setSelectedSection] = useState("seo");
  const socialMediaRef = useRef<HTMLDivElement>(null);
  const seoRef = useRef<HTMLDivElement>(null);
  const performanceMarketingRef = useRef<HTMLDivElement>(null);
  const webDesigningRef = useRef<HTMLDivElement>(null);
  const uiuxRef = useRef<HTMLDivElement>(null);

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
                className="w-full h-32 sm:h-auto mt-4 sm:mt-24 object-cover rounded-b-2xl sm:rounded-none shadow-md sm:shadow-none"
                alt="Group"
                src="https://c.animaapp.com/mdhrxz59aeFeBE/img/group.png"
              />
              {/* Overlayed Welcome to the StartupSurge era */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-12 sm:-mt-48 px-2">
                <div className="[font-family:'League_Spartan',Helvetica] font-normal text-gray-800 dark:text-white text-2xl sm:text-5xl md:text-[100px] text-center tracking-[0] leading-[36px] sm:leading-[60px] md:leading-[100px] drop-shadow-xl transition-colors duration-300">
                  <span>Welcome to the</span>
                  <br />
                  <span className="font-bold text-[#ffa500] text-3xl sm:text-6xl md:text-[120px]">StartupSurge</span>
                  <br />
                  <span className="text-gray-800 dark:text-white">era</span>
                </div>
              </div>
            </div>
          </div>
          {/* Section 2: Capsule styled as nav bar with spacing */}
          <div className="relative w-full bg-white dark:bg-[#1e1e1e] py-4 sm:py-6 shadow-lg transition-colors duration-300">
            <div className="flex justify-center px-2 sm:px-0">
              <OverlapSection
                onCapsuleClick={handleCapsuleClick}
                value={selectedSection}
                onValueChange={setSelectedSection}
              />
            </div>
          </div>
          {/* Section 3: Content sections in ScrollArea - same logic as About section */}
          <div className="relative w-full">
            <ScrollArea className="h-auto sm:h-[calc(100vh-85px)] w-full">
              {/* Social Media Content Section */}
              {selectedSection === "social-media" && (
                <div ref={socialMediaRef} className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0">
                  <SocialMediaContentSection />
                </div>
              )}
              {/* SEO Content Section */}
              {selectedSection === "seo" && (
                <div ref={seoRef} className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0">
                  <SeoContentSection />
                </div>
              )}
              {/* Performance Marketing Content Section */}
              {selectedSection === "performance-marketing" && (
                <div ref={performanceMarketingRef} className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0">
                  <PerformanceMarketingContentSection />
                </div>
              )}
              {/* Web Designing Content Section */}
              {selectedSection === "web-designing" && (
                <div ref={webDesigningRef} className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0">
                  <WebDesigningContentSection />
                </div>
              )}
              {/* UI/UX Content Section */}
              {selectedSection === "ui-ux" && (
                <div ref={uiuxRef} className="sm:rounded-xl sm:shadow-lg bg-white/90 dark:bg-[#232323]/90 p-2 sm:p-0 my-2 sm:my-0">
                  <UIUXContentSection />
                </div>
              )}
              {/* About Section */}
              <div id="about" className="w-full px-2 sm:px-4 md:px-8 lg:px-16 mx-auto my-4 sm:my-16">
                <div className="text-center">
                  <h2 className="[font-family:'League_Spartan',Helvetica] text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-[28px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0]">
                    <span className="text-gray-800 dark:text-white">About </span>
                    <span className="font-bold text-[#ffa500]">StartupSurge</span>
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
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8">
                      <h3 className="text-[#ffa500] text-base sm:text-xl font-bold whitespace-nowrap w-auto sm:w-48">• Creative Excellence</h3>
                      <div className="text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                        <p className="leading-relaxed">Innovative design solutions that captivate and inspire. We craft visual identities that tell your story and create user experiences that keep your audience engaged and coming back for more.</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8">
                      <h3 className="text-[#ffa500] text-base sm:text-xl font-bold whitespace-nowrap w-auto sm:w-48">• Strategic Growth</h3>
                      <div className="text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                        <p className="leading-relaxed">Data-driven marketing strategies that deliver measurable results. We optimize performance, focus on ROI, and provide deep market insights to drive your business growth.</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8">
                      <h3 className="text-[#ffa500] text-base sm:text-xl font-bold whitespace-nowrap w-auto sm:w-48">• Digital Innovation</h3>
                      <div className="text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                        <p className="leading-relaxed">Cutting-edge digital solutions including social media mastery, SEO optimization, web development, and seamless technology integration to keep you ahead of the curve.</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8">
                      <h3 className="text-[#ffa500] text-base sm:text-xl font-bold whitespace-nowrap w-auto sm:w-48">• Client Success</h3>
                      <div className="text-gray-800 dark:text-white flex-1 transition-colors duration-300">
                        <p className="leading-relaxed">Dedicated support team with transparent communication, delivering measurable results and building long-term partnerships that ensure your success.</p>
                      </div>
                    </div>
                  </div>
                </div>
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
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};
