import React from "react";
import { ServicePageTemplate } from "./ServicePageTemplate";

export const UIUXDesignerPage: React.FC = () => {
  const uiuxData = {
    serviceTitle: "UI/UX Designer",
    serviceDescription: "Create intuitive, engaging, and conversion-focused user experiences with our expert UI/UX design services that delight users and drive business results.",
    whatIsService: "UI/UX Design combines User Interface (UI) design—the visual elements and interactive components users see and interact with—and User Experience (UX) design—the overall experience and journey users have with your product or service. It's about creating designs that are not only visually appealing but also functional, accessible, and user-friendly. Good UI/UX design considers user psychology, behavior patterns, and business goals to create seamless digital experiences.",
    whereWeComeIn: "We transform your digital products into intuitive, engaging experiences that users love and businesses benefit from. Our design team conducts thorough user research, creates wireframes and prototypes, designs beautiful interfaces, and conducts usability testing to ensure every element serves a purpose. We don't just make things look good—we make them work perfectly, ensuring your users can accomplish their goals effortlessly while achieving your business objectives.",
    whatWeSolve: [
      "Users stall at key steps",
      "Feature sprawl, weak onboarding",
      "No research, no prioritization",
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

  return <ServicePageTemplate {...uiuxData} />;
}; 