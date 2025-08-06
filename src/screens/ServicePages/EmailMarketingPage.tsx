import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";

export const EmailMarketingPage: React.FC = () => {
  const emailData = {
    serviceTitle: "Email Marketing",
    serviceDescription: "Build lasting customer relationships and drive sales with our strategic email marketing campaigns that deliver personalized messages at the perfect time.",
    whatIsService: "Email Marketing is a direct marketing channel that uses email to promote your business's products or services, build relationships with customers, and drive sales. It includes newsletter campaigns, promotional emails, automated email sequences, lead nurturing campaigns, and personalized messaging strategies. Despite the rise of social media, email marketing remains one of the most effective digital marketing channels with the highest ROI, offering direct access to your audience's inbox.",
    whereWeComeIn: "We create email marketing campaigns that don't just land in inboxes—they land in hearts and drive action. Our email marketing specialists design compelling campaigns, segment your audience for personalized messaging, create automated workflows that nurture leads, and continuously optimize for better open rates and conversions. We don't just send emails—we build relationships, nurture prospects, and create loyal customers through strategic, value-driven communication.",
    benefits: [
      "Digital Brand Presence",
      "Channel Strategy Planning",
      "Content Calendar",
      "Copywriting",
      "Creative Design",
      "Social Media Management"
    ]
  };

  return <ServicePageTemplate {...emailData} />;
}; 