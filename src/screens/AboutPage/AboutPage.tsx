import React, { useState } from "react";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

export const AboutPage: React.FC = () => {
  // State for mobile section navigation
  const [currentSection, setCurrentSection] = useState<number>(0);
  
  // Define sections for mobile swipeable content
  const sections = [
    {
      id: "god-of-digitals",
      title: "We are ",
      titleHighlight: "God of Digitals",
      content: "We are the architects of digital transformation, the creators of extraordinary experiences, and the visionaries who turn imagination into reality. Our passion for innovation drives us to push boundaries and create solutions that not only meet expectations but exceed them in ways that were once thought impossible."
    },
    {
      id: "do-the-right-thing",
      title: "Do the ",
      titleHighlight: "Right Thing",
      content: "We believe in doing what's right, not just what's easy. Every decision we make, every strategy we develop, and every solution we create is guided by our unwavering commitment to ethical practices, transparency, and delivering genuine value to our clients and their audiences."
    },
    {
      id: "go-beyond-imagination",
      title: "Go Beyond ",
      titleHighlight: "Imagination",
      content: "We don't just meet expectations—we shatter them. Our creative team pushes the boundaries of what's possible, exploring uncharted territories in digital innovation to deliver experiences that are not just memorable, but truly extraordinary and beyond what anyone could have imagined."
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
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=Alex+Chen",
      description: "Passionate Strategist & problem solver, fueled by curiosity."
    },
    {
      name: "Mr.Rohit Bagdi",
      role: "Co-Founder",
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=Sarah+Johnson",
      description: "Crafting stories through creativity."
    },
    {
      name: "Ms.Safana Shaikh",
      role: "Marketing head",
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=Mike+Rodriguez",
      description: "Digital storyteller with a knack for bold ideas and real results."
    },
    {
      name: "Ms.Simran Kochhar",
      role: "Marketing Specialist",
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=David+Kim",
      description: "Strategic thinker who drives brand growth and customer engagement through targeted marketing campaigns."
    },{
      name: "Mr.Sagar Shinde",
      role: "Web Developer",
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=Emily+Watson",
      description: "Creative problem-solver who builds dynamic, user-friendly websites and web applications with modern technologies."
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
      {/* Navigation */}
      <SectionComponentNodeSection />
      
      {/* Hero Section - Desktop Version */}
      <section className="hidden sm:block w-full py-8 sm:py-20 md:py-28 lg:py-32 relative px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl sm:max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-6">
              <span className="font-semibold text-[#ffa500]">We are </span>
              <span className="text-gray-800 dark:text-white">God of Digitals</span>
            </h1>
            <div className="max-w-xl sm:max-w-4xl mx-auto mb-8 sm:mb-16">
              <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center leading-[22px] sm:leading-[28px] opacity-90 transition-colors duration-300">
                We are the architects of digital transformation, the creators of extraordinary experiences, and the visionaries who turn imagination into reality. Our passion for innovation drives us to push boundaries and create solutions that not only meet expectations but exceed them in ways that were once thought impossible.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-['League_Spartan',Helvetica] text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-6">
              <span className="font-semibold text-gray-800 dark:text-white">Do the </span>
              <span className="text-[#ffa500]">Right Thing</span>
            </h2>
            <div className="max-w-xl sm:max-w-4xl mx-auto mb-8 sm:mb-16">
              <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center leading-[22px] sm:leading-[28px] opacity-90 transition-colors duration-300">
                We believe in doing what's right, not just what's easy. Every decision we make, every strategy we develop, and every solution we create is guided by our unwavering commitment to ethical practices, transparency, and delivering genuine value to our clients and their audiences.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-['League_Spartan',Helvetica] text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-6">
              <span className="font-semibold text-gray-800 dark:text-white">Go Beyond </span>
              <span className="text-[#ffa500]">Imagination</span>
            </h3>
            <div className="max-w-xl sm:max-w-4xl mx-auto">
              <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center leading-[22px] sm:leading-[28px] opacity-90 transition-colors duration-300">
                We don't just meet expectations—we shatter them. Our creative team pushes the boundaries of what's possible, exploring uncharted territories in digital innovation to deliver experiences that are not just memorable, but truly extraordinary and beyond what anyone could have imagined.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Mobile Swipeable Section */}
      <section className="block sm:hidden w-full py-8 relative px-4" {...swipeHandlers}>
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
              <h2 className="font-['League_Spartan',Helvetica] text-3xl leading-[40px] tracking-[0] mb-4">
                <span className={currentSection === 0 || currentSection === 2 ? "font-semibold text-[#ffa500]" : "font-semibold text-gray-800 dark:text-white"}>
                  {sections[currentSection].title}
                </span>
                <span className={currentSection === 1 ? "text-[#ffa500]" : "text-gray-800 dark:text-white"}>
                  {sections[currentSection].titleHighlight}
                </span>
              </h2>
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSection ? 'bg-[#ffa500] w-4' : 'bg-gray-400 dark:bg-gray-600'}`}
                aria-label={`Go to section ${index + 1}`}
              />
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
        className="w-full py-8 sm:py-16 md:py-20 lg:py-28 px-2 sm:px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-[#2a2a2a] transition-colors duration-300"
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
            <h2 className="font-['League_Spartan',Helvetica] text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-[28px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-6">
              <span className="font-semibold text-[#ffa500]">
                Meet the
                <br className="hidden sm:block" />
              </span>
              <span className="text-gray-800 dark:text-white">Team</span>
            </h2>
            <motion.div 
              className="w-16 sm:w-24 h-1 bg-[#ffa500] mx-auto mb-4 sm:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-xl sm:max-w-3xl mx-auto leading-relaxed opacity-90 transition-colors duration-300">
              Our exceptional team of digital experts who bring creativity, innovation, and expertise to every project we undertake.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="bg-orange-50 dark:bg-[#1e1e1e] rounded-xl p-4 sm:p-8 shadow-2xl text-center group transition-colors duration-300"
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
                <p className="font-['League_Spartan',Helvetica] font-normal text-gray-700 dark:text-white text-xs sm:text-sm md:text-base leading-relaxed opacity-80 transition-colors duration-300">
                  {member.description}
                </p>
                <motion.div 
                  className="w-8 sm:w-12 h-0.5 bg-[#ffa500] mx-auto mt-4 sm:mt-6 group-hover:w-16 transition-all duration-300"
                  whileHover={{ width: "4rem" }}
                ></motion.div>
              </motion.div>
            ))}
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