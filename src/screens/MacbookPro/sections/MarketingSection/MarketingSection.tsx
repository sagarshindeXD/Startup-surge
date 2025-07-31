import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const MarketingSection = (): JSX.Element => {
  return (
    <Card className="w-full border-none relative">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative py-2">
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-[20px] h-[3px]"
                alt="Rectangle"
                src="https://c.animaapp.com/mdfqwuc1Jgo71g/img/rectangle-12.svg"
              />
              <img
                className="w-[3px] h-[3px] mt-1"
                alt="Rectangle"
                src="https://c.animaapp.com/mdfqwuc1Jgo71g/img/rectangle-13.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-4xl text-left leading-tight">
                Strategic Sorcery
              </h1>
            </div>
          </div>
          {/* Separator */}
          <Separator
            orientation="vertical"
            className="mx-2 h-[50px] bg-[#d9d9d9b2]"
          />
          {/* Description text */}
          <div className="flex items-center">
            <p className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-base tracking-[0] leading-normal text-center max-w-[300px]">
              We don&#39;t just create pretty pixels, we craft campaigns that conquer algorithms and win hearts. Data is our oracle, guiding us to digital gold.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
