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

  // Position offsets for the cards
  const positions = [
    { top: "mt-[79px]", left: "ml-0" },
    { top: "mt-0", left: "ml-[500px]" },
    { top: "mt-[79px]", left: "ml-[1000px]" },
  ];

  return (
    <section className="relative w-full h-[479px] flex">
      {blogCards.map((card, index) => (
        <div
          key={card.id}
          className={`absolute w-[463px] h-[400px] ${positions[index].top} ${positions[index].left}`}
        >
          <Card className="border-0 bg-transparent">
            <CardContent className="p-0">
              <img
                className="w-[459px] h-[306px]"
                alt="Layer"
                src={card.image}
              />
              <h2 className="w-[459px] mt-[25px] [font-family:'League_Spartan',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
                {card.title}
              </h2>
              <p className="w-[459px] mt-[7px] [font-family:'League_Spartan',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
                {card.category}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </section>
  );
};
