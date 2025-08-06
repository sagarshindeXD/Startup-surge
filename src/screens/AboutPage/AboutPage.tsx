import React from "react";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Creative Director",
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=Alex+Chen",
      description: "Visionary creative leader with 8+ years of digital design experience."
    },
    {
      name: "Sarah Johnson",
      role: "Digital Strategist",
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=Sarah+Johnson",
      description: "Strategic mastermind behind successful digital campaigns and brand transformations."
    },
    {
      name: "Mike Rodriguez",
      role: "UI/UX Expert",
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=Mike+Rodriguez",
      description: "User experience specialist crafting intuitive and engaging digital interfaces."
    },
    {
      name: "Emily Watson",
      role: "Content Creator",
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=Emily+Watson",
      description: "Storytelling expert who brings brands to life through compelling content."
    },
    {
      name: "David Kim",
      role: "Technical Lead",
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=David+Kim",
      description: "Technical wizard ensuring flawless execution of digital solutions."
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Specialist",
      image: "https://via.placeholder.com/300x300/1e1e1e/ffa500?text=Lisa+Thompson",
      description: "Marketing guru driving growth through innovative digital strategies."
    }
  ];

  return (
    <div className="bg-white dark:bg-[#1e1e1e] min-h-screen flex flex-col transition-colors duration-300">
      {/* Navigation */}
      <SectionComponentNodeSection />
      {/* Hero Section */}
      <section className="w-full py-8 sm:py-20 md:py-28 lg:py-32 relative px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl sm:max-w-6xl mx-auto text-center">
          <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-6">
            <span className="font-semibold text-[#ffa500]">We are </span>
            <span className="text-gray-800 dark:text-white">God of Digitals</span>
          </h1>
          <div className="max-w-xl sm:max-w-4xl mx-auto mb-8 sm:mb-16">
            <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center leading-[22px] sm:leading-[28px] opacity-90 transition-colors duration-300">
              We are the architects of digital transformation, the creators of extraordinary experiences, and the visionaries who turn imagination into reality. Our passion for innovation drives us to push boundaries and create solutions that not only meet expectations but exceed them in ways that were once thought impossible.
            </p>
          </div>
          <h2 className="font-['League_Spartan',Helvetica] text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-6">
            <span className="font-semibold text-gray-800 dark:text-white">Do the </span>
            <span className="text-[#ffa500]">Right Thing</span>
          </h2>
          <div className="max-w-xl sm:max-w-4xl mx-auto mb-8 sm:mb-16">
            <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center leading-[22px] sm:leading-[28px] opacity-90 transition-colors duration-300">
              We believe in doing what's right, not just what's easy. Every decision we make, every strategy we develop, and every solution we create is guided by our unwavering commitment to ethical practices, transparency, and delivering genuine value to our clients and their audiences.
            </p>
          </div>
          <h3 className="font-['League_Spartan',Helvetica] text-2xl sm:text-5xl md:text-6xl lg:text-7xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-6">
            <span className="font-semibold text-gray-800 dark:text-white">Go Beyond </span>
            <span className="text-[#ffa500]">Imagination</span>
          </h3>
          <div className="max-w-xl sm:max-w-4xl mx-auto">
            <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center leading-[22px] sm:leading-[28px] opacity-90 transition-colors duration-300">
              We don't just meet expectations—we shatter them. Our creative team pushes the boundaries of what's possible, exploring uncharted territories in digital innovation to deliver experiences that are not just memorable, but truly extraordinary and beyond what anyone could have imagined.
            </p>
          </div>
        </div>
      </section>
      {/* Meet the Team Section */}
      <section className="w-full py-8 sm:py-16 md:py-20 lg:py-28 px-2 sm:px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-[#2a2a2a] transition-colors duration-300">
        <div className="max-w-2xl sm:max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="font-['League_Spartan',Helvetica] text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-[28px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-6">
              <span className="font-semibold text-[#ffa500]">
                Meet the
                <br className="hidden sm:block" />
              </span>
              <span className="text-gray-800 dark:text-white">Team</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-[#ffa500] mx-auto mb-4 sm:mb-8"></div>
            <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white text-center max-w-xl sm:max-w-3xl mx-auto leading-relaxed opacity-90 transition-colors duration-300">
              Our exceptional team of digital experts who bring creativity, innovation, and expertise to every project we undertake.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-orange-50 dark:bg-[#1e1e1e] rounded-xl p-4 sm:p-8 shadow-2xl text-center group transition-colors duration-300">
                <div className="mb-4 sm:mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-[#ffa500] shadow-lg"
                  />
                </div>
                <h3 className="font-['League_Spartan',Helvetica] font-semibold text-gray-800 dark:text-white text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="font-['League_Spartan',Helvetica] font-medium text-[#ffa500] text-base sm:text-lg mb-2 sm:mb-4">
                  {member.role}
                </p>
                <p className="font-['League_Spartan',Helvetica] font-normal text-gray-700 dark:text-white text-xs sm:text-sm md:text-base leading-relaxed opacity-80 transition-colors duration-300">
                  {member.description}
                </p>
                <div className="w-8 sm:w-12 h-0.5 bg-[#ffa500] mx-auto mt-4 sm:mt-6 group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterSection />
    </div>
  );
}; 