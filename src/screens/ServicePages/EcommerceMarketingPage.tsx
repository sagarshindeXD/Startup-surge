import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";

export const EcommerceMarketingPage: React.FC = () => {
  const ecommerceData = {
    serviceTitle: "Ecommerce Marketing",
    serviceDescription: "Accelerate your online store's growth with our specialized ecommerce marketing strategies that drive traffic, increase conversions, and boost sales.",
    whatIsService: "Ecommerce Marketing is the strategic promotion of online stores and products to drive traffic, increase conversions, and boost sales. It includes product marketing, email campaigns, social media advertising, search engine optimization for ecommerce, retargeting campaigns, and conversion rate optimization specifically tailored for online shopping experiences. This specialized form of digital marketing focuses on the unique customer journey from discovery to purchase in the online retail environment.",
    whereWeComeIn: "We optimize every aspect of your ecommerce business to maximize sales and customer lifetime value. Our ecommerce marketing experts implement product-focused campaigns, optimize your online store for conversions, create compelling product descriptions and visuals, and develop customer retention strategies. We don't just drive traffic—we drive qualified traffic that converts into loyal customers, ensuring your online store becomes a profitable, sustainable business.",
    whatWeSolve: [
      "High CPCs, low AOV/ROAS",
      "Abandonment at cart/checkout",
      "Weak merchandising and PDPs",
      "Retention flat, LTV not growing",
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

  return <ServicePageTemplate {...ecommerceData} />;
}; 