import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const SeoContentSection = (): JSX.Element => {
  const navigate = useNavigate();
  
  return (
    <section className="w-full py-8 sm:py-16 md:py-20 lg:py-28 relative px-2 sm:px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row max-w-[1752px] mx-auto gap-4 sm:gap-8 lg:gap-12">
        {/* Content Section */}
        <div className="flex-1 lg:pr-8">
          <div className="flex flex-col items-start">
            <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[36px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0]">
              <span className="font-semibold text-[#ffa500]">Search Engine</span>
              <span className="text-gray-800 dark:text-white"> Optimization</span>
            </h1>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400 mt-2"></div>
          </div>

          <div className="mt-4 sm:mt-8 md:mt-10 max-w-[936px]">
            <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-800 dark:text-white text-justify leading-[24px] sm:leading-[28px] transition-colors duration-300">
<span className="font-bold text-[#ffa500]">If your brand isn't showing up on Google's first page, does it even exist?</span>
<br /><br />
Search Engine Optimization (SEO) isn't just about ranking higher, it's about being discovered by the right audience at the right time. From building a strong site structure to creating content that speaks your customer's language, our SEO strategies ensure you don't just climb to Page One - you stay there.

For any brand, SEO is the backbone of online visibility. It builds trust, drives organic traffic, and turns search intent into real business results. Without it, even the most beautiful website remains hidden in the shadows.
<br /><br />
<span className="font-bold text-[#ffa500]">Ready to be found, trusted, and chosen?</span>
            </p>

            <div className="mt-4 sm:mt-8 md:mt-10 flex items-center">
              <Button 
                className="bg-[#ffa500] hover:bg-[#ffa500]/90 text-white rounded-[35px] h-[41px] px-5 cursor-pointer"
                onClick={() => {
                  navigate('/services/seo');
                }}
              >
                <span className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl">
                  Explore SEO
                </span>
                <div className="ml-3 sm:ml-5 w-[41px] h-[41px] bg-[#ffa500] rounded-[20.5px] flex items-center justify-center">
                  <div className="w-[26px] h-[13px] bg-[url(https://c.animaapp.com/mdfqwuc1Jgo71g/img/vector.svg)] bg-[100%_100%]" />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center mt-4 lg:mt-0">
          <div className="relative w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[600px]">
            <img
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
              alt="SEO optimization with social media search and trending"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
              onError={(e) => {
                console.error('SEO image failed to load:', e);
                // Fallback to a placeholder or different image
                e.currentTarget.src = 'https://via.placeholder.com/600x400/1e1e1e/ffa500?text=SEO+Optimization';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};