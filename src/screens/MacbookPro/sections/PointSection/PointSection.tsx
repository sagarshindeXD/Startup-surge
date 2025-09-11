import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const PointSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[900px] mx-auto py-4">
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex flex-row items-center mr-2 gap-2">
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
              Pantheon of Passion
            </h1>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400 mt-2"></div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="mx-2 h-[50px] bg-[#d9d9d9b2]"
        />
        <div className="flex items-center">
          <p className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-base text-center leading-normal max-w-[300px]">
            We're A Team Of Passionate Rebels, Fueled By Curiosity And A Shared Mission To Make Your Brand Legendary. Think A Mix Of Da Vinci, Bowie, And A Well-Placed Meme.
          </p>
        </div>
      </div>
    </section>
  );
};
