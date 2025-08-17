import React from "react";
// Removed useNavigate import as it's unused
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";

interface ServicePageTemplateProps {
  serviceTitle: string;
  serviceDescription: string;
  whatIsService: string;
  whereWeComeIn: string;
  benefits: string[];
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  serviceTitle,
  serviceDescription,
  whatIsService,
  whereWeComeIn,
  benefits,
}) => {

  // Function to get relevant social media images based on service type
  const getServiceImage = (title: string) => {
    const serviceName = title.toLowerCase();
    
    // Social media related services
    if (serviceName.includes('social media')) {
      return "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&crop=center";
    }
    // Performance marketing
    if (serviceName.includes('performance')) {
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center";
    }
    // SEO services
    if (serviceName.includes('seo')) {
      return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center";
    }
    // UI/UX design
    if (serviceName.includes('ui') || serviceName.includes('ux')) {
      return "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center";
    }
    // Web design
    if (serviceName.includes('web') || serviceName.includes('design')) {
      return "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&crop=center";
    }
    // Email marketing
    if (serviceName.includes('email')) {
      return "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center";
    }
    // Influencer marketing
    if (serviceName.includes('influencer')) {
      return "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center";
    }
    // E-commerce marketing
    if (serviceName.includes('ecommerce') || serviceName.includes('e-commerce')) {
      return "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center";
    }
    // WhatsApp marketing
    if (serviceName.includes('whatsapp')) {
      return "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center";
    }
    // Graphic design
    if (serviceName.includes('graphic')) {
      return "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&crop=center";
    }
    
    // Default social media marketing image
    return "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&crop=center";
  };

  return (
    <div className="bg-white dark:bg-[#1e1e1e] min-h-screen flex flex-col transition-colors duration-300">
      {/* Navigation */}
      <SectionComponentNodeSection />
      <main className="flex-1">
      {/* Hero Section - Same design as capsule sections */}
      <section className="w-full py-16 md:py-20 lg:py-28 relative px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row max-w-[1752px] mx-auto gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="flex-1 lg:pr-8">
            <h1 className="font-['League_Spartan',Helvetica] text-4xl md:text-5xl lg:text-6xl leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0]">
              <span className="font-semibold text-[#ffa500]">
                {serviceTitle.split(' ')[0]}
                <br />
              </span>
              <span className="text-gray-800 dark:text-white">{serviceTitle.split(' ').slice(1).join(' ')}</span>
            </h1>

            <div className="mt-8 md:mt-10 max-w-[936px]">
              <p className="font-['League_Spartan',Helvetica] text-lg md:text-xl text-gray-800 dark:text-white text-justify leading-[28px] mb-6 transition-colors duration-300">
                {serviceDescription}
              </p>
              <p className="font-['League_Spartan',Helvetica] text-lg md:text-xl text-gray-700 dark:text-white text-justify leading-[28px] opacity-90 transition-colors duration-300">
                Our comprehensive approach combines cutting-edge technology with proven strategies to deliver exceptional results. We understand that every business is unique, which is why we tailor our solutions to meet your specific needs and goals. With years of experience in the digital marketing landscape, we've helped countless businesses achieve remarkable growth and establish strong online presences.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
              <img
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
                alt={`${serviceTitle} visual`}
                src={getServiceImage(serviceTitle)}
                onError={(e) => {
                  console.error(`${serviceTitle} image failed to load:`, e);
                  // Fallback to a relevant placeholder
                  e.currentTarget.src = `https://via.placeholder.com/600x400/1e1e1e/ffa500?text=${encodeURIComponent(serviceTitle)}`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Service Section - Normal and Left Aligned */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="[font-family:'League_Spartan',Helvetica] font-bold text-white text-3xl md:text-4xl mb-6">
              What is {serviceTitle}?
            </h2>
            <div className="w-24 h-1 bg-[#ffa500] mb-8"></div>
          </div>
          <div className="bg-[#2a2a2a] rounded-xl p-8 md:p-12 shadow-2xl">
            <p className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-lg md:text-xl leading-relaxed text-left max-w-4xl mb-6">
              {whatIsService}
            </p>
            <p className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-lg md:text-xl leading-relaxed text-left max-w-4xl opacity-90">
              This comprehensive service encompasses everything from initial research and analysis to ongoing optimization and performance monitoring. We dive deep into understanding your industry, competitors, and target audience to create strategies that not only meet current standards but anticipate future trends and changes in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Where We Come In Section - Normal and Left Aligned */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#2a2a2a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="[font-family:'League_Spartan',Helvetica] font-bold text-white text-3xl md:text-4xl mb-6">
              Where Do We Come In?
            </h2>
            <div className="w-24 h-1 bg-[#ffa500] mb-8"></div>
          </div>
          <div className="bg-[#1e1e1e] rounded-xl p-8 md:p-12 shadow-2xl">
            <ul className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-lg md:text-xl leading-relaxed text-left max-w-4xl space-y-4 mb-6">
              {whereWeComeIn.split('. ').map((point, index) => (
                point.trim() && (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-[#ffa500] text-xl font-bold mt-1">•</span>
                    <span>{point.trim()}</span>
                  </li>
                )
              ))}
            </ul>
            <p className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-lg md:text-xl leading-relaxed text-left max-w-4xl opacity-90">
              Our dedicated team of experts works closely with you throughout the entire process, ensuring that every aspect of your digital strategy is perfectly aligned with your business objectives. We provide regular updates, detailed reports, and continuous optimization to ensure your investment delivers maximum returns and sustainable long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Blessings Section - Cards and Centered */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="[font-family:'League_Spartan',Helvetica] font-bold text-white text-3xl md:text-4xl mb-6">
              Our Blessings
            </h2>
            <div className="w-24 h-1 bg-[#ffa500] mx-auto mb-8"></div>
            <p className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              We bring you comprehensive solutions with our expertise in:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              // Define relevant SVG icons and descriptions for each benefit
              const getBenefitIcon = (benefitName: string) => {
                switch (benefitName.toLowerCase()) {
                  case 'digital brand presence':
                    return (
                      <svg className="w-16 h-16 text-[#ffa500]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                      </svg>
                    );
                  case 'channel strategy planning':
                    return (
                      <svg className="w-16 h-16 text-[#ffa500]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    );
                  case 'content calendar':
                    return (
                      <svg className="w-16 h-16 text-[#ffa500]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                    );
                  case 'copywriting':
                    return (
                      <svg className="w-16 h-16 text-[#ffa500]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                      </svg>
                    );
                  case 'creative design':
                    return (
                      <svg className="w-16 h-16 text-[#ffa500]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    );
                  case 'social media management':
                    return (
                      <svg className="w-16 h-16 text-[#ffa500]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                      </svg>
                    );
                  default:
                    return (
                      <svg className="w-16 h-16 text-[#ffa500]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                      </svg>
                    );
                }
              };

              // Define descriptions for each benefit
              const getBenefitDescription = (benefitName: string) => {
                switch (benefitName.toLowerCase()) {
                  case 'digital brand presence':
                    return "Establish a strong, recognizable brand identity across all digital platforms.";
                  case 'channel strategy planning':
                    return "Develop comprehensive marketing strategies for multiple channels and platforms.";
                  case 'content calendar':
                    return "Plan and schedule engaging content that keeps your audience connected.";
                  case 'copywriting':
                    return "Create compelling, conversion-focused content that speaks to your audience.";
                  case 'creative design':
                    return "Design stunning visuals that capture attention and communicate your message.";
                  case 'social media management':
                    return "Manage and grow your social media presence with strategic content and engagement.";
                  default:
                    return "Comprehensive solution for your digital marketing needs.";
                }
              };

              return (
                <div key={index} className="bg-orange-50 dark:bg-[#1e1e1e] rounded-xl p-8 shadow-2xl transition-colors duration-300">
                  {/* Relevant SVG Icon */}
                  <div className="flex justify-center mb-6">
                    {getBenefitIcon(benefit)}
                  </div>
                  
                  <h3 className="[font-family:'League_Spartan',Helvetica] font-semibold text-gray-800 dark:text-white text-xl md:text-2xl text-center mb-4 transition-colors duration-300">
                    {benefit}
                  </h3>
                  
                  <p className="[font-family:'League_Spartan',Helvetica] font-normal text-gray-700 dark:text-white text-sm md:text-base text-center mb-4 opacity-80 leading-relaxed transition-colors duration-300">
                    {getBenefitDescription(benefit)}
                  </p>
                  
                  <div className="w-12 h-0.5 bg-[#ffa500] mx-auto"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </main>
      {/* Footer */}
      <FooterSection />

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};