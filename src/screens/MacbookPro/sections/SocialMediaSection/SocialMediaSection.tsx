import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const SocialMediaSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[900px] mx-auto py-4">
      <Card className="border-none">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex flex-row items-center gap-2 mr-2">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-[20px] h-[3px]"
                  alt="Decorative rectangle"
                  src="https://c.animaapp.com/mdfqwuc1Jgo71g/img/rectangle-12.svg"
                />
                <img
                  className="w-[3px] h-[3px] mt-1"
                  alt="Decorative square"
                  src="https://c.animaapp.com/mdfqwuc1Jgo71g/img/rectangle-13.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h2 className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-4xl text-left leading-tight">
                  Untamed Creativity
                </h2>
              </div>
            </div>
            <Separator
              orientation="vertical"
              className="mx-2 h-[50px] bg-[#d9d9d9b2]"
            />
            <div className="flex items-center">
              <p className="[font-family:'League_Spartan',Helvetica] font-normal text-white text-base text-center leading-normal max-w-[300px]">
                We break the mold, pushing boundaries and injecting a dose of wild into every project. Think Van Gogh meets Mad Max, with a dash of digital pixie dust.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
