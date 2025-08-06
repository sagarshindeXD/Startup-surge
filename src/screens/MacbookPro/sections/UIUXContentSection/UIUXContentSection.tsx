import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const UIUXContentSection = (): JSX.Element => {
  const navigate = useNavigate();
  
  return (
    <section className="w-full py-8 sm:py-16 md:py-20 lg:py-28 relative px-2 sm:px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row max-w-[1752px] mx-auto gap-4 sm:gap-8 lg:gap-12">
        <div className="flex-1 lg:pr-8">
          <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[36px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0]">
            <span className="font-semibold text-[#ffa500]">
              UI/
              <br />
            </span>
            <span className="text-gray-800 dark:text-white">UX</span>
          </h1>
          <div className="mt-4 sm:mt-10 max-w-[936px]">
            <p className="font-['League_Spartan',Helvetica] text-base sm:text-xl text-gray-800 dark:text-white text-justify leading-[24px] sm:leading-[28px] transition-colors duration-300">
              Delight your users! Our UI/UX experts design intuitive, engaging interfaces that keep visitors coming back. We blend form and function for seamless digital journeys.
              <br />
              #UIUX #UserExperience
            </p>
            <div className="mt-4 sm:mt-10 flex items-center">
              <Button 
                className="bg-[#ffa500] hover:bg-[#ffa500]/90 text-white rounded-[35px] h-[41px] px-5 cursor-pointer"
                onClick={() => navigate('/services/ui-ux-designer')}
              >
                <span className="font-['League_Spartan',Helvetica] text-base sm:text-xl">
                  Explore UI/UX
                </span>
                <div className="ml-3 sm:ml-5 w-[41px] h-[41px] bg-[#ffa500] rounded-[20.5px] flex items-center justify-center">
                  <div className="w-[26px] h-[13px] bg-[url(https://c.animaapp.com/mdfqwuc1Jgo71g/img/vector.svg)] bg-[100%_100%]" />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center mt-4 lg:mt-0">
          <img
            className="w-full max-w-[320px] sm:max-w-[600px] h-auto rounded-lg shadow-2xl"
            alt="UI/UX design for social media apps and interfaces"
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center"
          />
        </div>
      </div>
    </section>
  );
}; 