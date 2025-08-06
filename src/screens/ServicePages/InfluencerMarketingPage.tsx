import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";

export const InfluencerMarketingPage: React.FC = () => {
  const influencerData = {
    serviceTitle: "Influencer Marketing",
    serviceDescription: "Amplify your brand reach and credibility with our strategic influencer marketing campaigns that connect you with the right voices in your industry.",
    whatIsService: "Influencer Marketing is a form of social media marketing that involves endorsements and product mentions from influencers—people who have a dedicated social following and are viewed as experts within their niche. It's about leveraging the trust and authority that influencers have built with their audience to promote your brand, products, or services. This marketing approach combines the reach of traditional advertising with the authenticity and trust of word-of-mouth recommendations.",
    whereWeComeIn: "We connect your brand with the perfect influencers who align with your values and resonate with your target audience. Our influencer marketing team identifies the right partners, negotiates collaborations, creates compelling campaign strategies, and manages relationships to ensure authentic, impactful partnerships. We don't just find influencers—we build strategic partnerships that amplify your brand message, increase credibility, and drive real business results through trusted voices.",
    benefits: [
      "Digital Brand Presence",
      "Channel Strategy Planning",
      "Content Calendar",
      "Copywriting",
      "Creative Design",
      "Social Media Management"
    ]
  };

  return <ServicePageTemplate {...influencerData} />;
}; 