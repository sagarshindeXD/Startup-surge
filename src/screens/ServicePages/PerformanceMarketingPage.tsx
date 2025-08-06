import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";

export const PerformanceMarketingPage: React.FC = () => {
  const performanceData = {
    serviceTitle: "Performance Marketing",
    serviceDescription: "Drive measurable results with our performance-based marketing strategies that optimize every touchpoint for maximum ROI and conversion rates.",
    whatIsService: "Performance Marketing is a results-driven approach where businesses only pay for specific actions or results, such as clicks, leads, sales, or other conversions. This includes pay-per-click (PPC) advertising, affiliate marketing, display advertising, and other digital marketing channels where success is measured by actual performance metrics rather than just impressions or reach. It's about maximizing return on investment through data-driven optimization.",
    whereWeComeIn: "We implement sophisticated performance marketing campaigns that deliver measurable results and maximize your advertising spend. Our team uses advanced analytics, A/B testing, and conversion optimization techniques to continuously improve campaign performance. We track every interaction, optimize every touchpoint, and ensure your marketing budget generates the highest possible return on investment. With us, every dollar spent is an investment in measurable growth.",
    benefits: [
      "Digital Brand Presence",
      "Channel Strategy Planning",
      "Content Calendar",
      "Copywriting",
      "Creative Design",
      "Social Media Management"
    ]
  };

  return <ServicePageTemplate {...performanceData} />;
}; 