import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";

export const SocialMediaMarketingPage: React.FC = () => {
  const socialMediaData = {
    serviceTitle: "Social Media Marketing",
    serviceDescription: "Connect, engage, and grow your audience across all social platforms with our strategic social media marketing campaigns that build lasting relationships.",
    whatIsService: "Social Media Marketing is the strategic use of social media platforms to connect with your audience, build brand awareness, drive website traffic, and increase sales. It involves creating and sharing content on social media networks, engaging with followers, analyzing performance metrics, and running paid social media advertising campaigns. This powerful marketing approach allows businesses to reach their target audience where they spend most of their time online.",
    whereWeComeIn: "We craft compelling social media strategies that transform your brand's online presence into a powerful engagement engine. Our team creates authentic content that resonates with your audience, manages your social media presence across all platforms, and implements data-driven campaigns that drive real business results. We don't just post content—we build communities, foster relationships, and create brand advocates who become your most valuable marketing asset.",
    benefits: [
      "Digital Brand Presence",
      "Channel Strategy Planning",
      "Content Calendar",
      "Copywriting",
      "Creative Design",
      "Social Media Management"
    ]
  };

  return <ServicePageTemplate {...socialMediaData} />;
}; 