import React from "react";
import { Button } from "../../../../components/ui/button";

export const WebDesigningContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-28 relative">
      <div className="flex flex-row max-w-[1752px] mx-auto">
        <div className="flex-1 pr-8 pl-12">
          <h1 className="font-['League_Spartan',Helvetica] text-6xl leading-[80px] tracking-[0]">
            <span className="font-semibold text-[#ffa500]">
              Web
              <br />
            </span>
            <span className="text-white">Designing</span>
          </h1>
          <div className="mt-10 max-w-[936px]">
            <p className="font-['League_Spartan',Helvetica] text-xl text-white text-justify leading-[28px]">
              Make your mark online! Our web designers craft stunning, user-friendly sites that captivate and convert. Responsive, fast, and beautiful—your digital storefront, reimagined.
              <br />
              #WebDesign #DigitalExperience
            </p>
            <div className="mt-10 flex items-center">
              <Button className="bg-[#ffa500] hover:bg-[#ffa500]/90 text-white rounded-[35px] h-[41px] px-5">
                <span className="font-['League_Spartan',Helvetica] text-xl">
                  Explore Web Design
                </span>
                <div className="ml-5 w-[41px] h-[41px] bg-[#ffa500] rounded-[20.5px] flex items-center justify-center">
                  <div className="w-[26px] h-[13px] bg-[url(https://c.animaapp.com/mdfqwuc1Jgo71g/img/vector.svg)] bg-[100%_100%]" />
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            className="w-full max-w-[600px] h-auto"
            alt="Web designing visual"
            src="https://c.animaapp.com/mdfqwuc1Jgo71g/img/group-12.png"
          />
        </div>
      </div>
    </section>
  );
}; 