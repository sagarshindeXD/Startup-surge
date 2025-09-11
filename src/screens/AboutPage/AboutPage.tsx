import React, { useState } from "react";
import SiddheshImg from "../../assets/Siddhesh.jpg";
import RohitImg from "../../assets/Rohit.jpg";
import SafanaImg from "../../assets/Safana.jpg";
import SimranImg from "../../assets/Simran.jpg";
import SagarImg from "../../assets/Sagar.jpg";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Helmet } from "react-helmet-async";

export const AboutPage: React.FC = () => {
  // State for mobile section navigation
  const [currentSection, setCurrentSection] = useState<number>(0);
  
  // Define sections for mobile swipeable content
  const sections = [
    {
      id: "we-are-startupsurge",
      title: "We are ",
      titleHighlight: "StartupSurge",
      content: "We are the catalysts of growth, the creators of bold digital experiences, and the partners who help brands ride the right wave at the right time. With strategy, design, and innovation at our core, we don't just build campaigns, we build momentum that makes your brand impossible to ignore.",
      highlightColor: "#ffa500"
    },
    {
      id: "do-it-with-purpose",
      title: "Do it with ",
      titleHighlight: "Purpose",
      content: "Every idea we craft and every strategy we execute is rooted in clarity and intent. We believe in delivering real value, not vanity metrics. Transparency, ethics, and impact guide everything we do, so your brand grows with authenticity and trust.",
      highlightColor: "#ffa500"
    },
    {
      id: "go-beyond-growth",
      title: "Go Beyond ",
      titleHighlight: "Growth",
      content: "For us, 'good enough' is never enough. We push boundaries, explore fresh ideas, and design digital journeys that don't just attract attention but spark lasting connections. With StartupSurge, your brand doesn't just grow, it surges ahead.",
      highlightColor: "#ffa500"
    }
  ];
  
  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentSection(prev => Math.min(prev + 1, sections.length - 1)),
    onSwipedRight: () => setCurrentSection(prev => Math.max(prev - 1, 0)),
    touchEventOptions: { passive: false },
    trackMouse: false
  });
  
  // Animation variants
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };
  
  const teamMembers = [
    {
      name: "Dr.Siddhesh Surve",
      role: "Founder",
      image: SiddheshImg,
      description: "Passionate Strategist & problem solver, fueled by curiosity.",
      linkedin: "https://www.linkedin.com/in/siddhesh-anil-surve/"
    },
    {
      name: "Mr.Rohit Bagdi",
      role: "Co-Founder",
      image: RohitImg,
      description: "Crafting stories through creativity.",
      linkedin: "https://www.linkedin.com/in/rohit-bagdi-93a30b7b/"
    },
    {
      name: "Ms.Safana Shaikh",
      role: "Marketing Head",
      image: SafanaImg,
      description: "Digital storyteller with a knack for bold ideas and real results.",
      linkedin: "https://www.linkedin.com/in/safana-shaikh-630861246/"
    },
    {
      name: "Ms.Simran Kochhar",
      role: "Marketing Specialist",
      image: SimranImg,
      description: "Strategic thinker who drives brand growth and customer engagement through targeted marketing campaigns.",
      linkedin: "https://www.linkedin.com/in/simran-kochhar-40b0651b0/"
    },{
      name: "Mr.Sagar Shinde",
      role: "Web Developer",
      image: SagarImg,
      description: "Creative problem-solver who builds dynamic, user-friendly websites and web applications with modern technologies.",
      linkedin: "https://www.linkedin.com/in/sagar-shinde-69a2a2291/"
    }
  ];

  return (
    <motion.div 
      className="bg-white dark:bg-[#1e1e1e] min-h-screen flex flex-col transition-colors duration-300"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Helmet>
        <title>About Us | StartupSurge® | Digital Marketing Agency for Startups</title>
        <meta name="description" content="Learn about StartupSurge: a startup-focused marketing agency delivering SEO, performance marketing, social media, UI/UX and web design." />
        <link rel="canonical" href="https://www.startupsurge.in/about" />
      </Helmet>
      {/* Navigation */}
      <SectionComponentNodeSection />
      
      {/* Hero Section - Desktop Version */}
      <section className="hidden sm:block w-full py-8 sm:py-20 md:py-28 lg:py-32 relative px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 items-center">
          <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-center text-white mb-6">
                <span>We are </span>
                <span className="text-[#ffa500] font-bold">StartupSurge</span>
              </h1>
              <div className="h-1 w-16 sm:w-24 md:w-32 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400 mt-2 sm:mt-4 mx-auto"></div>
            </div>
            <div className="max-w-xl sm:max-w-4xl mx-auto mb-8 sm:mb-16">
              <p className="font-['League_Spartan',Helvetica] font-normal text-gray-800 dark:text-white text-sm sm:text-base md:text-lg lg:text-xl text-center leading-[22px] sm:leading-[28px] tracking-[0] max-w-3xl mx-auto px-4 sm:px-6">
                We are the catalysts of growth, the creators of bold digital experiences, and the partners who help brands ride the right wave at the right time. With strategy, design, and innovation at our core, we don't just build campaigns, we build momentum that makes your brand impossible to ignore.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <h2 className="text-3xl sm:text-4xl text-center text-white mb-8">
                <span>Do it with </span>
                <span className="text-[#ffa500] font-bold">Purpose</span>
              </h2>
              <div className="h-1 w-16 sm:w-24 md:w-32 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400 mt-2 sm:mt-4 mx-auto"></div>
            </div>
            <div className="max-w-xl sm:max-w-4xl mx-auto mb-8 sm:mb-16">
              <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center leading-[22px] sm:leading-[28px] opacity-90 transition-colors duration-300">
                Every idea we craft and every strategy we execute is rooted in clarity and intent. We believe in delivering real value, not vanity metrics. Transparency, ethics, and impact guide everything we do, so your brand grows with authenticity and trust.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <h3 className="text-3xl sm:text-4xl text-center text-white mb-8">
                <span>Go Beyond </span>
                <span className="text-[#ffa500] font-bold">Growth</span>
              </h3>
              <div className="h-1 w-16 sm:w-24 md:w-32 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400 mt-2 sm:mt-4 mx-auto"></div>
            </div>
            <div className="max-w-xl sm:max-w-4xl mx-auto">
              <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center leading-[22px] sm:leading-[28px] opacity-90 transition-colors duration-300">
                For us, 'good enough' is never enough. We push boundaries, explore fresh ideas, and design digital journeys that don't just attract attention but spark lasting connections. With StartupSurge, your brand doesn't just grow, it surges ahead.
              </p>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mobile Swipeable Section */}
      <section className="block sm:hidden w-full py-8 pt-16 relative px-4 pb-12 [padding-bottom:env(safe-area-inset-bottom)]" {...swipeHandlers}>
        <div className="max-w-xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="min-h-[300px] flex flex-col justify-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-center text-white mb-6">
                {sections[currentSection].title}
                <span className="text-[#ffa500] font-bold">{sections[currentSection].titleHighlight}</span>
              </h1>
              <div className="max-w-xl mx-auto mb-6">
                <p className="font-['League_Spartan',Helvetica] text-base text-gray-600 dark:text-white text-center leading-[22px] opacity-90 transition-colors duration-300">
                  {sections[currentSection].content}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className="rounded-full transition-all duration-300 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffa500] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1e1e1e]"
                aria-label={`Go to section ${index + 1}`}
              >
                <span className={`block rounded-full ${index === currentSection ? 'bg-[#ffa500]' : 'bg-gray-400 dark:bg-gray-600'} w-2 h-2`} />
              </button>
            ))}
          </div>
          
          {/* Swipe Indicator */}
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-4 opacity-70">
            Swipe left or right to navigate
          </div>
        </div>
      </section>
      {/* Meet the Team Section */}
      <motion.section 
        className="w-full py-8 sm:py-16 md:py-20 lg:py-28 px-3 sm:px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-[#2a2a2a] transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl sm:max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl text-center text-white mb-8">
              <span>Meet Your </span>
              <span className="text-[#ffa500] font-bold">Dream Team</span>
            </h2>
            <motion.div 
              className="w-16 sm:w-24 h-1 bg-[#ffa500] mx-auto mb-4 sm:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-xl sm:max-w-3xl mx-auto leading-relaxed opacity-90 transition-colors duration-300">
              We’re a cross‑functional crew of strategists, designers, writers and growth PMs who love turning ideas into momentum. We show up curious, collaborate hard, and leave things better than we found them.
            </p>
          </motion.div>
          {/* Row 1: Exactly 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 items-stretch">
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div 
                key={`row1-${index}`}
                className="bg-orange-50 dark:bg-[#1e1e1e] rounded-xl p-4 sm:p-8 shadow-2xl text-center group transition-colors duration-300 h-full min-h-[360px] flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="mb-4 sm:mb-6"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-[#ffa500] shadow-lg"
                  />
                </motion.div>
                <h3 className="font-['League_Spartan',Helvetica] font-semibold text-gray-800 dark:text-white text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-['League_Spartan',Helvetica] font-medium text-[#ffa500] text-base sm:text-lg mb-2 sm:mb-4">
                  {member.role}
                </p>
                <p className="font-['League_Spartan',Helvetica] font-normal text-gray-700 dark:text-white text-xs sm:text-sm md:text-base leading-relaxed opacity-80 transition-colors duration-300 flex-1">
                  {member.description}
                </p>
                <motion.div 
                  className="w-8 sm:w-12 h-0.5 bg-[#ffa500] mx-auto mt-4 sm:mt-6 group-hover:w-16 transition-all duration-300"
                  whileHover={{ width: "4rem" }}
                ></motion.div>
                <div className="mt-4 sm:mt-5 flex justify-center">
                  <a
                    href={member.linkedin}
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 dark:text-white hover:text-[#ffa500] transition-colors duration-300 text-2xl"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: Dedicated 2-column centered grid */}
          <div className="mt-4 sm:mt-8 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 items-stretch w-full max-w-4xl">
              {teamMembers.slice(3).map((member, i) => (
                <motion.div 
                  key={`row2-${i}`}
                  className="bg-orange-50 dark:bg-[#1e1e1e] rounded-xl p-4 sm:p-8 shadow-2xl text-center group transition-colors duration-300 h-full min-h-[360px] flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 3) }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="mb-4 sm:mb-6"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-[#ffa500] shadow-lg"
                    />
                  </motion.div>
                  <h3 className="font-['League_Spartan',Helvetica] font-semibold text-gray-800 dark:text-white text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-['League_Spartan',Helvetica] font-medium text-[#ffa500] text-base sm:text-lg mb-2 sm:mb-4">
                    {member.role}
                  </p>
                  <p className="font-['League_Spartan',Helvetica] font-normal text-gray-700 dark:text-white text-xs sm:text-sm md:text-base leading-relaxed opacity-80 transition-colors duration-300 flex-1">
                    {member.description}
                  </p>
                  <motion.div 
                    className="w-8 sm:w-12 h-0.5 bg-[#ffa500] mx-auto mt-4 sm:mt-6 group-hover:w-16 transition-all duration-300"
                    whileHover={{ width: "4rem" }}
                  ></motion.div>
                  <div className="mt-4 sm:mt-5 flex justify-center">
                    <a
                      href={member.linkedin}
                      aria-label="LinkedIn"
                      title="LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white hover:text-[#ffa500] transition-colors duration-300 text-2xl"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <FooterSection />
      </motion.div>
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </motion.div>
  );
};