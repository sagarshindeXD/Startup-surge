import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SupportFormSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 my-8 md:my-12">
      <div className="max-w-[1451px] mx-auto">
        <Card className="relative h-20 md:h-24 rounded-[18px] bg-transparent">
          <div className="absolute w-full h-full top-0 left-0 bg-gray-300 dark:bg-[#d9d9d9] rounded-[18px] opacity-10 transition-colors duration-300" />
          <CardContent className="relative p-0 h-full">
            <div className="flex items-center justify-center h-full w-full">
              <div className="flex items-center justify-center flex-1 h-full px-4">
                <span className="font-['League_Spartan',Helvetica] font-normal text-gray-800 dark:text-white text-lg md:text-2xl transition-colors duration-300">
                  Need our
                </span>
                <span className="font-['League_Spartan',Helvetica] font-normal text-[#ffa500] text-lg md:text-2xl ml-2">
                  support
                </span>
                <span className="font-['League_Spartan',Helvetica] font-normal text-gray-800 dark:text-white text-lg md:text-2xl ml-1 transition-colors duration-300">
                  ?
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
