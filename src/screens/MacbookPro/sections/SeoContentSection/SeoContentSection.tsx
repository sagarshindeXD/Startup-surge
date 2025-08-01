import React from "react";
import { Button } from "../../../../components/ui/button";

export const SeoContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-28 relative px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row max-w-[1752px] mx-auto gap-8 lg:gap-12">
        {/* Content Section */}
        <div className="flex-1 lg:pr-8">
          <h1 className="font-['League_Spartan',Helvetica] text-4xl md:text-5xl lg:text-6xl leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0]">
            <span className="font-semibold text-[#ffa500]">
              SEO
              <br />
            </span>
            <span className="text-white">Optimization</span>
          </h1>

          <div className="mt-8 md:mt-10 max-w-[936px]">
            <p className="font-['League_Spartan',Helvetica] text-lg md:text-xl text-white text-justify leading-[28px]">
              Unlock the power of search! Our SEO wizards boost your brand's visibility, drive organic traffic, and help you dominate the digital landscape. From keyword research to technical audits, we craft strategies that put you at the top of search results.
              <br />
              #SEOExperts #RankHigher
            </p>

            <div className="mt-8 md:mt-10 flex items-center">
              <Button className="bg-[#ffa500] hover:bg-[#ffa500]/90 text-white rounded-[35px] h-[41px] px-5">
                <span className="font-['League_Spartan',Helvetica] text-lg md:text-xl">
                  Explore SEO
                </span>
                <div className="ml-5 w-[41px] h-[41px] bg-[#ffa500] rounded-[20.5px] flex items-center justify-center">
                  <div className="w-[26px] h-[13px] bg-[url(https://c.animaapp.com/mdfqwuc1Jgo71g/img/vector.svg)] bg-[100%_100%]" />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-[500px] lg:max-w-[600px]">
            <img
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
              alt="SEO optimization visual"
              src="https://c.animaapp.com/mdfqwuc1Jgo71g/img/group-10.png"
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