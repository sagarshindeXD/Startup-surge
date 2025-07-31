import React from "react";
import { Button } from "../../../../components/ui/button";

export const SeoContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-28 relative">
      <div className="flex flex-row max-w-[1752px] mx-auto">
        {/* Added pl-12 for left spacing */}
        <div className="flex-1 pr-8 pl-12">
          {/* Reduced font size */}
          <h1 className="font-['League_Spartan',Helvetica] text-6xl leading-[80px] tracking-[0]">
            <span className="font-semibold text-[#ffa500]">
              SEO
              <br />
            </span>
            <span className="text-white">Optimization</span>
          </h1>

          <div className="mt-10 max-w-[936px]">
            {/* Reduced font size */}
            <p className="font-['League_Spartan',Helvetica] text-xl text-white text-justify leading-[28px]">
              Unlock the power of search! Our SEO wizards boost your brand's visibility, drive organic traffic, and help you dominate the digital landscape. From keyword research to technical audits, we craft strategies that put you at the top of search results.
              <br />
              #SEOExperts #RankHigher
            </p>

            <div className="mt-10 flex items-center">
              <Button className="bg-[#ffa500] hover:bg-[#ffa500]/90 text-white rounded-[35px] h-[41px] px-5">
                {/* Reduced font size */}
                <span className="font-['League_Spartan',Helvetica] text-xl">
                  Explore SEO
                </span>
                <div className="ml-5 w-[41px] h-[41px] bg-[#ffa500] rounded-[20.5px] flex items-center justify-center">
                  <div className="w-[26px] h-[13px] bg-[url(https://c.animaapp.com/mdfqwuc1Jgo71g/img/vector.svg)] bg-[100%_100%]" />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Center image vertically, reduced max width */}
        <div className="flex-1 flex items-center justify-center">
          <img
            className="w-full max-w-[600px] h-auto"
            alt="SEO optimization visual"
            src="https://c.animaapp.com/mdfqwuc1Jgo71g/img/group-10.png"
          />
        </div>
      </div>
    </section>
  );
}; 