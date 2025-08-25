import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogs } from "../../data/blogs";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="bg-white dark:bg-[#1e1e1e] min-h-screen transition-colors duration-300">
        <SectionComponentNodeSection />
        <div className="max-w-2xl sm:max-w-[1200px] mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl sm:text-4xl font-semibold text-gray-800 dark:text-white mb-4">Post not found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">The article you’re looking for doesn’t exist or may have been moved.</p>
          <Link to="/blogs" className="text-[#ffa500] hover:underline">← Back to blogs</Link>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#1e1e1e] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>{post.title} | StartupSurge</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <SectionComponentNodeSection />

      <article className="max-w-2xl sm:max-w-[1200px] mx-auto px-4 py-8 sm:py-16">
        <header className="mb-6 sm:mb-10">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span className="px-2 py-0.5 bg-[#ffa500] text-black rounded-full">{post.category}</span>
          </div>
          <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
            {post.title}
          </h1>
        </header>

        {post.image && (
          <div className="mb-6 sm:mb-10 overflow-hidden rounded-xl">
            <img src={post.image} alt={post.title} className="w-full h-56 sm:h-[420px] object-cover" />
          </div>
        )}

        <div className="prose max-w-none prose-orange dark:prose-invert">
          {post.content.split(/\n\n+/).map((para, idx) => (
            <p key={idx} className="text-gray-800 dark:text-gray-200 text-base sm:text-lg leading-7 sm:leading-8 mb-4">
              {para}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/blogs" className="text-[#ffa500] hover:underline">← Back to blogs</Link>
        </div>
      </article>

      <FooterSection />
    </div>
  );
};
