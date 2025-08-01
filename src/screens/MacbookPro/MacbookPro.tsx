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
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const [selectedSection, setSelectedSection] = useState("seo");
  const [isCapsuleSticky, setIsCapsuleSticky] = useState(false);
  const capsuleRef = useRef<HTMLDivElement>(null);
  const socialMediaRef = useRef<HTMLDivElement>(null);
  const seoRef = useRef<HTMLDivElement>(null);
  const performanceMarketingRef = useRef<HTMLDivElement>(null);
  const webDesigningRef = useRef<HTMLDivElement>(null);
  const uiuxRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  // Add more refs as needed for other sections

  useEffect(() => {
    document.body.style.overflow = isScrollLocked ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isScrollLocked]);

  // Sticky capsule logic
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollAreaRef.current) return;
      const scrollTop = scrollAreaRef.current.scrollTop;
      // If at the very top, unstick the capsule
      if (scrollTop < 40) {
        setIsCapsuleSticky(false);
      } else if (selectedSection !== "" && selectedSection !== "home") {
        setIsCapsuleSticky(true);
      }
    };
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      scrollArea.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollArea) {
        scrollArea.removeEventListener("scroll", handleScroll);
      }
    };
  }, [selectedSection]);

  const handleCapsuleClick = (section: string) => {
    setIsScrollLocked(false);
    setSelectedSection(section);
    setIsCapsuleSticky(true);
    setTimeout(() => {
      let ref: React.RefObject<HTMLDivElement> | null = null;
      if (section === "social-media") ref = socialMediaRef;
      else if (section === "seo") ref = seoRef;
      else if (section === "performance-marketing") ref = performanceMarketingRef;
      else if (section === "web-designing") ref = webDesigningRef;
      else if (section === "ui-ux") ref = uiuxRef;
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
      }
    }, 50);
  };

  return (
    <div
      className="bg-[#1e1e1e] flex flex-row justify-center w-full min-h-screen"
      data-model-id="1:5"
    >
      <AnimatedWaves />
      <div className="bg-[#1e1e1e] w-full relative">
        {/* Fixed nav bar at the very top, only when capsule is sticky */}
        {isCapsuleSticky && (
          <div className="fixed top-0 left-0 w-full h-24 bg-[#1e1e1e] z-[60]" />
        )}
        <div ref={scrollAreaRef} className="h-[calc(100vh-41px)] mt-[41px] overflow-auto">
          <div className="relative w-full">
            {/* Top sections */}
            <div className="relative w-full">
              <SectionComponentNodeSection />
              {/* Capsule container: sticky or normal */}
              <div
                className={
                  (isCapsuleSticky
                    ? "fixed top-12 left-1/2 -translate-x-1/2 z-[70] w-full max-w-[600px]"
                    : "relative w-full") +
                  " transition-all duration-500"
                }
                ref={capsuleRef}
                style={isCapsuleSticky ? { pointerEvents: "auto" } : {}}
              >
                {!isCapsuleSticky && (
                  <img
                    className="w-full h-auto mt-24 animate-hero-bg"
                    alt="Group"
                    src="https://c.animaapp.com/mdhrxz59aeFeBE/img/group.png"
                  />
                )}
                {/* Overlayed Welcome to the StartupSurge era */}
                {!isCapsuleSticky && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-48">
                    <div className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-[100px] text-center tracking-[0] leading-[100px] drop-shadow-xl">
                      <span>Welcome to the</span>
                      <br />
                                              <span className="font-bold text-[#ffa500] text-[120px]">StartupSurge</span>
                      <br />
                      <span className="text-white">era</span>
                    </div>
                  </div>
                )}
                <OverlapSection
                  onCapsuleClick={handleCapsuleClick}
                  value={selectedSection}
                  onValueChange={setSelectedSection}
                />
              </div>
            </div>
            {/* Social Media Content Section */}
            {selectedSection === "social-media" && (
              <div ref={socialMediaRef}>
                <SocialMediaContentSection />
              </div>
            )}
            {/* SEO Content Section */}
            {selectedSection === "seo" && (
              <div ref={seoRef}>
                <SeoContentSection />
              </div>
            )}
            {/* Performance Marketing Content Section */}
            {selectedSection === "performance-marketing" && (
              <div ref={performanceMarketingRef}>
                <PerformanceMarketingContentSection />
              </div>
            )}
            {/* Web Designing Content Section */}
            {selectedSection === "web-designing" && (
              <div ref={webDesigningRef}>
                <WebDesigningContentSection />
              </div>
            )}
            {/* UI/UX Content Section */}
            {selectedSection === "ui-ux" && (
              <div ref={uiuxRef}>
                <UIUXContentSection />
              </div>
            )}
            {/* About Section */}
            <div id="about" className="w-full px-4 md:px-8 lg:px-16 mx-auto my-16">
              <div className="text-center">
                <h2 className="[font-family:'League_Spartan',Helvetica] text-4xl md:text-5xl lg:text-6xl leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0]">
                  <span className="text-white">About </span>
                  <span className="font-bold text-[#ffa500]">StartupSurge</span>
                  <span className="text-white">!</span>
                </h2>
              </div>
              <div className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-lg md:text-xl text-center leading-[28px] tracking-[0] mt-8 px-4">
                Think of us as your personal creative cavalry, charging into the
                digital battlefield with a riot of ideas and
                <br className="hidden md:block" />a relentless pursuit of results. We&#39;re not just
                designers, we&#39;re storytellers, strategists, and a touch of
                mischievous magicians,
                <br className="hidden md:block" />
                weaving narratives that captivate your audience and leave them
                begging for more.
              </div>
              <div className="relative mt-8 flex flex-row items-center">
                <ScrollArea className="h-[350px] w-full">
                  <PointSection />
                  <div className="w-full px-4 md:px-8 lg:px-16 mx-auto mt-8">
                    <PointWrapperSection />
                    <MarketingSection />
                  </div>
                  <SocialMediaSection />
                </ScrollArea>
                <div className="flex flex-col justify-between h-[120px] ml-2 z-10">
                  <button className="rotate-90 w-[29px] h-[19px]">
                    <img
                      className="w-full h-full rotate-90"
                      alt="Scroll up"
                      src="https://c.animaapp.com/mdhrxz59aeFeBE/img/vector-3.svg"
                    />
                  </button>
                  <button className="-rotate-90 w-[29px] h-[19px]">
                    <img
                      className="w-full h-full -rotate-90"
                      alt="Scroll down"
                      src="https://c.animaapp.com/mdhrxz59aeFeBE/img/vector-1.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Services Section */}
            <div id="services" className="w-full px-4 md:px-8 lg:px-16 mx-auto mt-16">
              <div className="text-center mb-16">
                <h2 className="[font-family:'League_Spartan',Helvetica] font-normal text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-normal">
                  <span className="font-bold text-[#ffa500]">StartupSurge </span>
                  <span className="font-medium text-white">Knows</span>
                  <span className="text-white">!</span>
                </h2>
              </div>
              <div className="w-full">
                <div ref={seoRef} />
                <HeroSection />
                <CallToActionSection />
              </div>
            </div>
            {/* Support Form Section */}
            <SupportFormSection />
            {/* Blogs Section */}
            <div id="blogs" className="w-full px-4 md:px-8 lg:px-16 mx-auto mt-16">
              <div className="text-center mb-16">
                <h2 className="[font-family:'League_Spartan',Helvetica] font-normal text-4xl md:text-5xl lg:text-[64px] tracking-[0] leading-normal">
                  <span className="font-bold text-[#ffa500]">Latest </span>
                  <span className="font-medium text-white">Blogs</span>
                  <span className="text-white">!</span>
                </h2>
              </div>
              <div className="w-full">
                {/* Blog content can be added here */}
                <div className="text-center text-white text-lg">
                  Stay tuned for our latest insights and updates!
                </div>
              </div>
            </div>
            {/* Footer Section */}
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};
