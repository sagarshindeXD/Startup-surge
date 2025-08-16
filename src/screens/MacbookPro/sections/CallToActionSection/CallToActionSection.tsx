import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  const navigate = useNavigate();

  // Data for blog cards
  const blogCards = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&crop=center",
      title: "Social Media Marketing Trends",
      category: "Latest Insights",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      title: "Digital Analytics & Growth",
      category: "Performance Tips",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      title: "Content Creation Strategies",
      category: "Creative Guide",
    },
  ];

  const handleCardClick = () => {
    navigate('/blogs');
  };

  return (
    <section className="relative w-full py-8 sm:py-16 md:py-20 px-2 sm:px-4 md:px-8 lg:px-16">
      <div className="text-center mb-6 sm:mb-12">
        <h2 className="[font-family:'League_Spartan',Helvetica] text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[36px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0]">
          <span className="text-gray-800 dark:text-white">Latest </span>
          <span className="font-bold text-[#ffa500]">Insights</span>
          <span className="text-gray-800 dark:text-white"> & </span>
          <span className="font-bold text-[#ffa500]">Trends</span>
        </h2>
        <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-2 sm:mt-6 transition-colors duration-300">
          Discover the latest digital marketing strategies and social media trends that drive real business results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-[1752px] mx-auto">
        {blogCards.map((card) => (
          <div key={card.id} className="w-full">
            <Card 
              className="border-0 bg-transparent h-full cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={handleCardClick}
            >
              <CardContent className="p-0 h-full">
                <div className="relative h-[180px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                  <img
                    className="w-full h-auto max-h-[60%] object-cover rounded-lg shadow-lg"
                    alt={card.title}
                    src={card.image}
                  />
                  <div className="mt-2 sm:mt-4 md:mt-6 w-full text-left [font-family:'League_Spartan',Helvetica] font-normal text-gray-800 dark:text-white text-lg sm:text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-normal transition-colors duration-300">
                    {card.title}
                  </div>
                  <div className="mt-1 sm:mt-2 w-full [font-family:'League_Spartan',Helvetica] font-normal text-gray-600 dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-normal transition-colors duration-300">
                    {card.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6 sm:mt-12">
        <button
          onClick={() => navigate('/blogs')}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ffa500] text-white rounded-full hover:bg-[#ffa500]/90 transition-colors duration-300 font-['League_Spartan',Helvetica] text-base sm:text-lg font-medium"
        >
          View All Articles
        </button>
      </div>
    </section>
  );
};
