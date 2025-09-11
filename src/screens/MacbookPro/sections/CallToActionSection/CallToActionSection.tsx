import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../../components/ui/card";
import { blogs } from "../../../../data/blogs";

export const CallToActionSection = (): JSX.Element => {
  const navigate = useNavigate();

  // Latest 3 blog posts from centralized data
  const latestPosts = blogs.slice(0, 3);

  return (
    <section className="relative w-full py-8 sm:py-16 md:py-20 px-2 sm:px-4 md:px-8 lg:px-16">
      <div className="text-center mb-6 sm:mb-12">
        <div className="inline-block">
          <h2 className="[font-family:'League_Spartan',Helvetica] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[32px] sm:leading-[44px] md:leading-[56px] lg:leading-[64px] tracking-[0]">
            <span className="text-gray-800 dark:text-white">Latest </span>
            <span className="font-bold text-[#ffa500]">Insights</span>
            <span className="text-gray-800 dark:text-white"> & </span>
            <span className="font-bold text-[#ffa500]">Trends</span>
          </h2>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400 mt-2 mx-auto"></div>
        </div>
        <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-2 sm:mt-6 transition-colors duration-300">
          Discover The Latest Digital Marketing Strategies And Social Media Trends That Drive Real Business Results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-[1752px] mx-auto">
        {latestPosts.map((post) => (
          <div key={post.id} className="w-full">
            <Card 
              className="border-0 bg-transparent h-full cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => navigate(`/blogs/${post.slug}`)}
            >
              <CardContent className="p-0 h-full">
                <div className="relative h-[180px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full">
                  <img
                    className="w-full h-auto max-h-[60%] object-cover rounded-lg shadow-lg"
                    alt={post.title}
                    src={post.image}
                  />
                  <div className="mt-2 sm:mt-4 md:mt-6 w-full text-left [font-family:'League_Spartan',Helvetica] font-semibold text-gray-800 dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-snug transition-colors duration-300">
                    {post.title}
                  </div>
                  <div className="mt-1 sm:mt-2 w-full [font-family:'League_Spartan',Helvetica] font-normal text-gray-600 dark:text-white text-xs sm:text-sm md:text-base tracking-[0] leading-relaxed transition-colors duration-300">
                    {post.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6 sm:mt-12">
        <button
          onClick={() => {
            navigate('/blogs');
          }}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#ffa500] text-white rounded-full hover:bg-[#ffa500]/90 transition-colors duration-300 font-['League_Spartan',Helvetica] text-base sm:text-lg font-medium"
        >
          View All Articles
        </button>
      </div>
    </section>
  );
};
