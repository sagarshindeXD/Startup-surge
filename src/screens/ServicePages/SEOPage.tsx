import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { Helmet } from "react-helmet-async";

export const SEOPage: React.FC = () => {
  const seoData = {
    serviceTitle: "Search Engine Optimization",
    serviceDescription: "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies that rank your business at the top of search results.",
    whatIsService: "Search Engine Optimization (SEO) is the art and science of optimizing your website to rank higher in search engine results pages (SERPs). It involves improving your site's visibility for relevant searches, driving organic traffic, and increasing your online presence without paid advertising. SEO encompasses technical optimization, content strategy, and user experience improvements to make your website more discoverable and valuable to both search engines and users.",
    whereWeComeIn: "We transform your digital presence with data-driven SEO strategies that deliver measurable results. Our team of SEO experts conducts comprehensive audits, implements technical optimizations, creates compelling content, and continuously monitors performance to ensure your website climbs the search rankings. We don't just optimize for search engines—we optimize for your business growth, ensuring every ranking improvement translates to increased leads, sales, and revenue.",
    whatWeSolve: [
      "Invisible on high‑intent queries",
      "Thin/duplicate content holding you back",
      "Technical SEO debt blocking crawl/index",
      "Rankings up, revenue flat",
    ],
    benefits: [
      "Digital Brand Presence",
      "Channel Strategy Planning",
      "Content Calendar",
      "Copywriting",
      "Creative Design",
      "Social Media Management"
    ]
  };

  return (
    <>
      <Helmet>
        <title>SEO Services for Startups | StartupSurge®</title>
        <meta name="description" content="Rank higher and grow organic traffic. Technical SEO, content, and strategy tailored for startups by StartupSurge." />
        <link rel="canonical" href="https://www.startupsurge.in/services/seo" />
      </Helmet>
      <ServicePageTemplate {...seoData} />
    </>
  );
};