import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Footer navigation links data
  const footerLinks = [
    { text: "Contact Us", href: "#" },
    { text: "Policies", href: "#" },
  ];

  return (
    <footer className="w-full py-3 mt-4">
      <Separator className="bg-[#d9d9d91a] h-1" />

      <div className="flex justify-between items-center mt-4 px-6">
        <nav className="flex gap-6">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-normal text-white text-base tracking-[0] leading-normal whitespace-nowrap font-['League_Spartan',Helvetica] hover:underline"
            >
              {link.text}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <img
            className="h-[32px]"
            alt="Social media icons"
            src="https://c.animaapp.com/mdfqwuc1Jgo71g/img/icons.png"
          />
        </div>
      </div>
    </footer>
  );
};
