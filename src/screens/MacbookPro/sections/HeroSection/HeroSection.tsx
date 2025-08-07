import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";
import { useSmoothAnimations } from "../../../../lib/useSmoothAnimations";

export const HeroSection = (): JSX.Element => {
  const { isLoaded, getStaggerDelay } = useSmoothAnimations();
  
  // Data for the carousel cards with social media focused images
  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&crop=center",
      title: "Social Media Marketing",
      category: "Instagram, Facebook, TikTok",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      title: "Digital Analytics & Growth",
      category: "Data-Driven Results",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      title: "Content Creation & Strategy",
      category: "Viral Content & Engagement",
    },
  ];

  return (
    <section className="relative w-full py-8 sm:py-16 md:py-20 px-2 sm:px-4 md:px-8 lg:px-16">
      <Carousel className="w-full">
        <CarouselContent className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-10">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-0">
              <Card 
                className="border-0 bg-transparent h-full card-hover"
                style={getStaggerDelay(index)}
              >
                <CardContent className="p-0 h-full">
                  <div className="relative h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                    <img
                      className="w-full h-auto max-h-[60%] object-cover rounded-lg shadow-lg"
                      alt={item.title}
                      src={item.image}
                    />
                    <div className="mt-2 sm:mt-4 md:mt-6 w-full text-left [font-family:'League_Spartan',Helvetica] font-normal text-white text-lg sm:text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-normal">
                      {item.title}
                    </div>
                    <div className="mt-1 sm:mt-2 w-full [font-family:'League_Spartan',Helvetica] font-normal text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-normal">
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
