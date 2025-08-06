import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";

export const BlogsPage: React.FC = () => {
  const navigate = useNavigate();

  // Sample blog data with social media and digital marketing themes
  const blogPosts = [
    {
      id: 1,
      title: "10 Social Media Marketing Trends That Will Dominate 2024",
      excerpt: "Discover the latest social media strategies that are reshaping digital marketing and driving unprecedented engagement rates.",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&crop=center",
      date: "March 15, 2024",
      readTime: "5 min read",
      author: "StartupSurge Team"
    },
    {
      id: 2,
      title: "The Ultimate Guide to Instagram Reels Marketing",
      excerpt: "Learn how to leverage Instagram Reels to boost your brand visibility and connect with your target audience effectively.",
      category: "Instagram Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      date: "March 12, 2024",
      readTime: "7 min read",
      author: "Digital Marketing Experts"
    },
    {
      id: 3,
      title: "TikTok Advertising: A Complete Strategy Guide",
      excerpt: "Master the art of TikTok advertising with our comprehensive guide to creating viral content and maximizing ROI.",
      category: "TikTok Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      date: "March 10, 2024",
      readTime: "8 min read",
      author: "Content Creators"
    },
    {
      id: 4,
      title: "SEO Strategies for Social Media Success",
      excerpt: "Combine the power of SEO and social media to create a comprehensive digital marketing strategy that drives results.",
      category: "SEO & Social Media",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center",
      date: "March 8, 2024",
      readTime: "6 min read",
      author: "SEO Specialists"
    },
    {
      id: 5,
      title: "Facebook Ads Optimization: From Beginner to Expert",
      excerpt: "Transform your Facebook advertising campaigns with advanced optimization techniques and data-driven strategies.",
      category: "Facebook Marketing",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&crop=center",
      date: "March 5, 2024",
      readTime: "10 min read",
      author: "Ad Optimization Pros"
    },
    {
      id: 6,
      title: "LinkedIn Marketing: B2B Social Media Mastery",
      excerpt: "Unlock the potential of LinkedIn for B2B marketing with proven strategies to generate leads and build professional networks.",
      category: "LinkedIn Marketing",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center",
      date: "March 3, 2024",
      readTime: "9 min read",
      author: "B2B Marketing Team"
    }
  ];

  const categories = ["All", "Social Media", "Instagram Marketing", "TikTok Marketing", "SEO & Social Media", "Facebook Marketing", "LinkedIn Marketing"];

  return (
    <div className="bg-white dark:bg-[#1e1e1e] min-h-screen flex flex-col transition-colors duration-300">
      {/* Navigation */}
      <SectionComponentNodeSection />
      {/* Hero Section */}
      <section className="w-full py-8 sm:py-16 md:py-20 lg:py-28 relative px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl sm:max-w-[1752px] mx-auto text-center">
          <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-8">
            <span className="font-semibold text-[#ffa500]">Digital Marketing</span>
            <br />
            <span className="text-gray-800 dark:text-white">Insights & Trends</span>
          </h1>
          <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white max-w-xl sm:max-w-3xl mx-auto leading-relaxed opacity-90 transition-colors duration-300">
            Stay ahead of the curve with our expert insights on social media marketing, SEO strategies, and digital trends that drive real business results.
          </p>
        </div>
      </section>
      {/* Category Filter */}
      <section className="w-full py-4 sm:py-8 px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl sm:max-w-[1752px] mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-[#ffa500] text-gray-800 dark:text-white hover:bg-[#ffa500] hover:text-black transition-all duration-300 font-['League_Spartan',Helvetica] text-xs sm:text-sm md:text-base"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Blog Posts Grid */}
      <section className="w-full py-8 sm:py-16 px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl sm:max-w-[1752px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-0 bg-orange-50 dark:bg-[#2a2a2a] hover:bg-orange-100 dark:hover:bg-[#333] transition-all duration-300 cursor-pointer group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                      <span className="px-2 sm:px-3 py-1 bg-[#ffa500] text-black text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-['League_Spartan',Helvetica] text-base sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 group-hover:text-[#ffa500] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="font-['League_Spartan',Helvetica] text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-['League_Spartan',Helvetica] text-xs sm:text-sm text-[#ffa500]">
                        {post.author}
                      </span>
                      <button className="text-[#ffa500] hover:text-white transition-colors duration-300 font-['League_Spartan',Helvetica] text-xs sm:text-sm font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="w-full py-8 sm:py-16 px-2 sm:px-4 md:px-8 lg:px-16 bg-orange-50 dark:bg-[#2a2a2a] transition-colors duration-300">
        <div className="max-w-2xl sm:max-w-[1752px] mx-auto text-center">
          <h2 className="font-['League_Spartan',Helvetica] text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-4 transition-colors duration-300">
            Stay Updated with Latest Trends
          </h2>
          <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto transition-colors duration-300">
            Get the latest digital marketing insights, social media tips, and industry trends delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center max-w-xs sm:max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#ffa500] font-['League_Spartan',Helvetica] transition-colors duration-300"
            />
            <button className="px-4 sm:px-8 py-2 sm:py-3 bg-[#ffa500] text-black rounded-lg hover:bg-[#ffa500]/90 transition-colors duration-300 font-['League_Spartan',Helvetica] font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterSection />
    </div>
  );
}; 