import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const SectionComponentNodeSection = (): JSX.Element => {
  const navItems = [
    { text: "Home", active: true },
    { text: "Services", active: false },
    { text: "About", active: false },
    { text: "Blogs", active: false },
  ];

  return (
    <header className="w-full flex items-start justify-start p-4">
      <div className="flex items-center">
        <img
          className="w-[120px] h-[60px] object-cover" // larger logo
          alt="StartupSurge logo"
          src="/logo.png"
        />
        <div className="ml-6 relative">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`[font-family:'League_Spartan',Helvetica] font-normal text-lg tracking-[0] leading-[normal] whitespace-nowrap ${
                      item.active ? "text-[#ffa500]" : "text-white"
                    }`}
                  >
                    {item.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="absolute w-[50px] h-px top-5 left-0 bg-[#d9d9d9]" />
        </div>
      </div>
    </header>
  );
};
