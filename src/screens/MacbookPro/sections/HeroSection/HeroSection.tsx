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
      title: "Digital Marketing Trends",
      category: "Blog",
    },
    {
      image: "https://c.animaapp.com/mdfqwuc1Jgo71g/img/layer-1-5.svg",
      title: "Digital Marketing Trends",
      category: "Blog",
    },
    {
      image: "https://c.animaapp.com/mdfqwuc1Jgo71g/img/layer-1.svg",
      title: "Digital Marketing Trends",
      category: "Blog",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-20 px-4 md:px-8 lg:px-16">
      <Carousel className="w-full">
        <CarouselContent className="flex gap-4 md:gap-6 lg:gap-10">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 pl-0">
              <Card className="border-0 bg-transparent h-full">
                <CardContent className="p-0 h-full">
                  <div className="relative h-[300px] md:h-[350px] lg:h-[400px] w-full">
                    <img
                      className="w-full h-auto max-h-[60%] object-cover rounded-lg"
                      alt="Digital Marketing Background"
                      src={item.image}
                    />
                    <div className="mt-4 md:mt-6 w-full text-left [font-family:'League_Spartan',Helvetica] font-normal text-white text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-normal">
                      {item.title}
                    </div>
                    <div className="mt-2 w-full [font-family:'League_Spartan',Helvetica] font-normal text-white text-lg md:text-xl lg:text-2xl tracking-[0] leading-normal">
                      {item.category}
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
