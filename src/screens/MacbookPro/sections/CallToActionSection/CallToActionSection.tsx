import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Data for blog cards
  const blogCards = [
    {
      id: 1,
      image: "https://c.animaapp.com/mdhrxz59aeFeBE/img/layer-1-4.svg",
      title: "Digital Marketing Trends",
      category: "Blog",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mdhrxz59aeFeBE/img/layer-1-5.svg",
      title: "Digital Marketing Trends",
      category: "Blog",
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mdhrxz59aeFeBE/img/layer-1-1.svg",
      title: "Digital Marketing Trends",
      category: "Blog",
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-[1752px] mx-auto">
        {blogCards.map((card) => (
          <div key={card.id} className="w-full">
            <Card className="border-0 bg-transparent h-full">
              <CardContent className="p-0 h-full">
                <div className="relative h-[300px] md:h-[350px] lg:h-[400px] w-full">
                  <img
                    className="w-full h-auto max-h-[60%] object-cover rounded-lg"
                    alt="Digital Marketing Background"
                    src={card.image}
                  />
                  <div className="mt-4 md:mt-6 w-full text-left [font-family:'League_Spartan',Helvetica] font-normal text-white text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-normal">
                    {card.title}
                  </div>
                  <div className="mt-2 w-full [font-family:'League_Spartan',Helvetica] font-normal text-white text-lg md:text-xl lg:text-2xl tracking-[0] leading-normal">
                    {card.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
