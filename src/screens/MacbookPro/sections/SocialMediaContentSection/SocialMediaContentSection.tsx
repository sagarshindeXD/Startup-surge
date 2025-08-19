import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const SocialMediaContentSection = (): JSX.Element => {
  const navigate = useNavigate();
  
  return (
    <section className="w-full py-8 sm:py-28 relative">
      <div className="flex flex-col sm:flex-row sm:max-w-[1752px] mx-auto px-2 sm:px-0 gap-4 sm:gap-0">
        <div className="flex-1 pr-0 sm:pr-8 pl-0 sm:pl-12">
          <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-6xl leading-[32px] sm:leading-[80px] tracking-[0]">
            <span className="font-semibold text-[#ffa500]">Social Media </span>
            <span className="text-gray-800 dark:text-white">that sticks</span>
          </h1>
          <div className="mt-4 sm:mt-10 sm:max-w-[936px]">
            <p className="font-['League_Spartan',Helvetica] text-base sm:text-xl text-gray-800 dark:text-white text-justify leading-[22px] sm:leading-[28px] transition-colors duration-300">
              Culture‑aware, platform‑native, meme‑literate storytelling that turns followers into fans and fans into advocates.
            </p>
            <div className="mt-4 sm:mt-10 flex items-center">
              <Button 
                className="bg-[#ffa500] hover:bg-[#ffa500]/90 text-white rounded-[35px] h-[41px] px-5 cursor-pointer"
                onClick={() => navigate('/services/social-media-marketing')}
              >
                <span className="font-['League_Spartan',Helvetica] text-base sm:text-xl">
                  Explore More
                </span>
                <div className="ml-3 sm:ml-5 w-[41px] h-[41px] bg-[#ffa500] rounded-[20.5px] flex items-center justify-center">
                  <div className="w-[26px] h-[13px] bg-[url(https://c.animaapp.com/mdfqwuc1Jgo71g/img/vector.svg)] bg-[100%_100%]" />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center mt-4 sm:mt-0">
          <img
            className="w-full sm:max-w-[600px] h-auto rounded-lg shadow-2xl"
            alt="Social media marketing visual with platforms and analytics"
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&crop=center"
          />
        </div>
      </div>
    </section>
  );
};
