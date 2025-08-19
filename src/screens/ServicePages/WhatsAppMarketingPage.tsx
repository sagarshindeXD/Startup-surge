import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";

export const WhatsAppMarketingPage: React.FC = () => {
  const whatsappData = {
    serviceTitle: "WhatsApp Marketing",
    serviceDescription: "Connect with your customers on the world's most popular messaging platform with our strategic WhatsApp marketing campaigns that drive engagement and conversions.",
    whatIsService: "WhatsApp Marketing is the strategic use of WhatsApp Business API and WhatsApp Business app to connect with customers, promote products, provide customer support, and drive sales. It includes broadcast messaging, automated responses, interactive campaigns, and personalized communication strategies that leverage the intimate, conversational nature of messaging apps. This approach allows businesses to reach customers directly on their most personal communication channel.",
    whereWeComeIn: "We help you leverage WhatsApp's massive user base and high engagement rates to build meaningful customer relationships and drive business growth. Our WhatsApp marketing experts create personalized messaging strategies, set up automated workflows, design interactive campaigns, and provide 24/7 customer support through the platform. We don't just send messages—we create conversations that convert, ensuring your business stays connected with customers in the most personal and effective way possible.",
    whatWeSolve: [
      "Broadcasts ignored, opt-outs up",
      "No personalization or routing",
      "Slow replies, lost leads",
      "No conversion or revenue tracking",
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

  return <ServicePageTemplate {...whatsappData} />;
}; 