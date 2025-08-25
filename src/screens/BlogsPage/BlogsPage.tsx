import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";
import { blogs } from "../../data/blogs";

export const BlogsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  // Blog data is sourced from src/data/blogs

  const categories = [
    "All",
    ...Array.from(new Set(blogs.map((b) => b.category)))
  ];

  // Filter blog posts based on selected category
  const filteredPosts = activeCategory === "All" 
    ? blogs 
    : blogs.filter(post => post.category === activeCategory);

  // Handle email subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with subscription data
    const subject = encodeURIComponent("Subscribed to StartupSurge Official Site");
    const body = encodeURIComponent(
      `Email: ${email}\n\n` +
      `Message: I would like to subscribe to future updates from StartupSurge.`
    );
    
    // Open email client with pre-filled data
    window.location.href = `mailto:info@startupsurge.in?subject=${subject}&body=${body}`;
    
    // Log subscription
    console.log("Subscription submitted to info@startupsurge.in:", email);
    
    // Reset form after submission
    setEmail("");
    
    alert("Thank you for subscribing! Your email client will open with your subscription message to info@startupsurge.in");
  };

  return (
    <div className="bg-white dark:bg-[#1e1e1e] min-h-screen flex flex-col transition-colors duration-300 pb-12 [padding-bottom:env(safe-area-inset-bottom)]">
      {/* Navigation */}
      <SectionComponentNodeSection />
      {/* Hero Section */}
      <section className="w-full py-8 sm:py-16 md:py-20 lg:py-28 relative px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl sm:max-w-[1752px] mx-auto text-center">
          <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-8 whitespace-nowrap">
            <span className="font-semibold text-[#ffa500]">Digital Marketing </span>
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
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-[#ffa500] ${activeCategory === category ? 'bg-[#ffa500] text-black' : 'text-gray-800 dark:text-white'} hover:bg-[#ffa500] hover:text-black transition-all duration-300 font-['League_Spartan',Helvetica] text-xs sm:text-sm md:text-base`}
                onClick={() => setActiveCategory(category)}
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
            {filteredPosts.map((post) => (
              <Card key={post.id} className="border-0 bg-orange-50 dark:bg-[#2a2a2a] hover:bg-orange-100 dark:hover:bg-[#333] transition-all duration-300 cursor-pointer group outline-none focus-visible:ring-2 focus-visible:ring-[#ffa500] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1e1e1e] active:scale-[0.98]" role="article" tabIndex={0} aria-label={`${post.title} by ${post.author}`}>
                <CardContent className="p-0">
                  <Link to={`/blogs/${post.slug}`} className="block relative overflow-hidden" aria-label={`Open blog: ${post.title}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-36 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                      <span className="px-2 sm:px-3 py-1 bg-[#ffa500] text-black text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="p-3 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-['League_Spartan',Helvetica] text-base sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 sm:mb-3 group-hover:text-[#ffa500] transition-colors duration-300">
                      <Link to={`/blogs/${post.slug}`} className="text-inherit no-underline hover:underline focus:outline-none focus:ring-2 focus:ring-[#ffa500] rounded-sm">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="font-['League_Spartan',Helvetica] text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-['League_Spartan',Helvetica] text-xs sm:text-sm text-[#ffa500]">
                        {post.author}
                      </span>
                      <Link to={`/blogs/${post.slug}`} className="text-[#ffa500] hover:text-white transition-colors duration-300 font-['League_Spartan',Helvetica] text-xs sm:text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffa500] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1e1e1e] px-2 py-1 rounded-md" aria-label={`Read more: ${post.title}`}>
                        Read More →
                      </Link>
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
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center max-w-xs sm:max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white dark:bg-[#1e1e1e] border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#ffa500] font-['League_Spartan',Helvetica] transition-colors duration-300"
            />
            <button 
              type="submit"
              className="px-4 sm:px-8 py-2 sm:py-3 bg-[#ffa500] text-white rounded-full hover:bg-[#ffa500]/90 transition-colors duration-300 font-['League_Spartan',Helvetica] font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <FooterSection />
    </div>
  );
};