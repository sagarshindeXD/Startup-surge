import React, { useState, useEffect } from "react";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";

export const ServicesPage = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 1,
      title: "Search Engine Optimisation",
      bgColor: "bg-white",
      textColor: "text-[#ffa500]",
      delay: 0,
    },
    {
      id: 2,
      title: "Social Media Marketing",
      bgColor: "bg-[#ffa500]",
      textColor: "text-white",
      delay: 100,
    },
    {
      id: 3,
      title: "Performance Marketing",
      bgColor: "bg-white",
      textColor: "text-[#ffa500]",
      delay: 200,
    },
    {
      id: 4,
      title: "UI/UX Designer",
      bgColor: "bg-[#ffa500]",
      textColor: "text-white",
      delay: 300,
    },
    {
      id: 5,
      title: "Graphic Designer",
      bgColor: "bg-[#ffa500]",
      textColor: "text-white",
      delay: 400,
    },
    {
      id: 6,
      title: "Ecommerce Marketing",
      bgColor: "bg-[#ffa500]",
      textColor: "text-white",
      delay: 500,
    },
    {
      id: 7,
      title: "WhatsApp Marketing",
      bgColor: "bg-white",
      textColor: "text-[#ffa500]",
      delay: 600,
    },
    {
      id: 8,
      title: "Email Marketing",
      bgColor: "bg-[#ffa500]",
      textColor: "text-white",
      delay: 700,
    },
    {
      id: 9,
      title: "Influencer Marketing",
      bgColor: "bg-white",
      textColor: "text-[#ffa500]",
      delay: 800,
    },
  ];

  return (
    <div className="bg-[#1e1e1e] min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <div className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <SectionComponentNodeSection />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 lg:px-16 py-16 relative">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffa500] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#ffa500] rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Services Grid */}
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`${service.bgColor} ${service.textColor} rounded-xl p-6 md:p-8 h-[280px] md:h-[320px] flex items-center justify-center shadow-lg transition-all duration-700 ease-out transform ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                } ${
                  hoveredCard === service.id 
                    ? 'shadow-2xl scale-105 rotate-1' 
                    : 'hover:shadow-xl hover:scale-102 hover:-rotate-1'
                } cursor-pointer relative overflow-hidden group`}
                style={{ 
                  transitionDelay: `${service.delay}ms`,
                  transitionProperty: 'all',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 transition-all duration-500 ease-out ${
                  hoveredCard === service.id 
                    ? 'opacity-20' 
                    : 'opacity-0'
                } ${
                  service.bgColor === 'bg-white' 
                    ? 'bg-[#ffa500]' 
                    : 'bg-white'
                }`}></div>
                
                {/* Card Content */}
                <div className="relative z-10 text-center">
                  <h3 className={`[font-family:'League_Spartan',Helvetica] font-semibold text-xl md:text-2xl lg:text-3xl leading-tight transition-all duration-500 ${
                    hoveredCard === service.id 
                      ? 'scale-110' 
                      : 'scale-100'
                  }`}>
                    {service.title}
                  </h3>
                  
                  {/* Animated Underline */}
                  <div className={`mt-4 h-0.5 transition-all duration-500 ease-out ${
                    hoveredCard === service.id 
                      ? 'w-full opacity-100' 
                      : 'w-0 opacity-0'
                  } ${
                    service.bgColor === 'bg-white' 
                      ? 'bg-[#ffa500]' 
                      : 'bg-white'
                  }`}></div>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 rounded-full transition-all duration-1000 ease-out ${
                        hoveredCard === service.id 
                          ? 'opacity-60' 
                          : 'opacity-0'
                      } ${
                        service.bgColor === 'bg-white' 
                          ? 'bg-[#ffa500]' 
                          : 'bg-white'
                      }`}
                      style={{
                        top: `${20 + i * 30}%`,
                        left: `${10 + i * 40}%`,
                        animationDelay: `${i * 200}ms`,
                        animation: hoveredCard === service.id ? 'float 3s ease-in-out infinite' : 'none'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#1e1e1e] bg-opacity-90 z-50">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-[#ffa500] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white text-lg font-medium">Loading Services...</p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <div className={`transition-all duration-1000 ease-out delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <FooterSection />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}; 