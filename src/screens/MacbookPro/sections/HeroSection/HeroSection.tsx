import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

export const HeroSection = (): JSX.Element => {
  // Data for the carousel cards
  const carouselItems = [
    {
      image: "https://c.animaapp.com/mdfqwuc1Jgo71g/img/layer-1-1.svg",
      position: "top-[79px] left-0",
    },
    {
      image: "https://c.animaapp.com/mdfqwuc1Jgo71g/img/layer-1-5.svg",
      position: "top-0 left-[500px]",
    },
    {
      image: "https://c.animaapp.com/mdfqwuc1Jgo71g/img/layer-1.svg",
      position: "top-[79px] left-[1000px]",
    },
  ];

  return (
    <section className="relative w-full py-20">
      <Carousel className="w-full">
        <CarouselContent className="flex gap-10">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-0">
              <Card className="border-0 bg-transparent">
                <CardContent className="p-0">
                  <div className="relative h-[400px] w-[463px]">
                    <img
                      className="w-[459px] h-[306px]"
                      alt="Digital Marketing Background"
                      src={item.image}
                    />
                    <div className="mt-6 w-[459px] text-left [font-family:'League_Spartan',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-normal">
                      Digital Marketing Trends
                    </div>
                    <div className="mt-2 w-[459px] [font-family:'League_Spartan',Helvetica] font-normal text-white text-2xl tracking-[0] leading-normal">
                      Blog
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
