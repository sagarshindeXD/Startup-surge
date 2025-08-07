import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";

export const GraphicDesignerPage: React.FC = () => {
  const graphicData = {
    serviceTitle: "Graphic Designer",
    serviceDescription: "Transform your brand vision into stunning visual assets with our creative graphic design services that capture attention and communicate your message effectively.",
    whatIsService: "Graphic Design is the art of creating visual content to communicate messages, ideas, and information effectively. It encompasses logo design, branding materials, marketing collateral, digital graphics, illustrations, and visual elements that help businesses establish their identity and connect with their audience. Good graphic design combines creativity with strategic thinking to create visuals that not only look appealing but also serve specific business objectives.",
    whereWeComeIn: "We bring your brand to life through compelling visual storytelling and creative design solutions. Our graphic design team creates everything from logos and brand identities to marketing materials, social media graphics, and digital assets that perfectly represent your business. We don't just create pretty pictures—we design strategic visual solutions that strengthen your brand, engage your audience, and drive business results through powerful visual communication.",
    benefits: [
      "Digital Brand Presence",
      "Channel Strategy Planning",
      "Content Calendar",
      "Copywriting",
      "Creative Design",
      "Social Media Management"
    ]
  };

  return <ServicePageTemplate {...graphicData} />;
}; 