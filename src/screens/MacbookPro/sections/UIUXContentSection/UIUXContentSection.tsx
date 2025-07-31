import React from "react";
import { Button } from "../../../../components/ui/button";

export const UIUXContentSection = (): JSX.Element => {
  return (
    <section className="w-full py-28 relative">
      <div className="flex flex-row max-w-[1752px] mx-auto">
        <div className="flex-1 pr-8 pl-12">
          <h1 className="font-['League_Spartan',Helvetica] text-6xl leading-[80px] tracking-[0]">
            <span className="font-semibold text-[#ffa500]">
              UI/
              <br />
            </span>
            <span className="text-white">UX</span>
          </h1>
          <div className="mt-10 max-w-[936px]">
            <p className="font-['League_Spartan',Helvetica] text-xl text-white text-justify leading-[28px]">
              Delight your users! Our UI/UX experts design intuitive, engaging interfaces that keep visitors coming back. We blend form and function for seamless digital journeys.
              <br />
              #UIUX #UserExperience
            </p>
            <div className="mt-10 flex items-center">
              <Button className="bg-[#ffa500] hover:bg-[#ffa500]/90 text-white rounded-[35px] h-[41px] px-5">
                <span className="font-['League_Spartan',Helvetica] text-xl">
                  Explore UI/UX
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
            alt="UI/UX visual"
            src="https://c.animaapp.com/mdfqwuc1Jgo71g/img/group-13.png"
          />
        </div>
      </div>
    </section>
  );
}; 