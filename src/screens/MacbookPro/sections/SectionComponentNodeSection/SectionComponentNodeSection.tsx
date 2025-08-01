import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const SectionComponentNodeSection = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { text: "Home", href: "/", isActive: location.pathname === "/" },
    { text: "Services", href: "/services", isActive: location.pathname === "/services" },
    { text: "About", href: "/#about", isActive: false },
    { text: "Blogs", href: "/#blogs", isActive: false },
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleNavItemClick = (href: string, text: string) => {
    // Handle navigation based on the item clicked
    switch (text.toLowerCase()) {
      case 'home':
        navigate('/');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'about':
        if (location.pathname === '/') {
          // Scroll to about section if already on home page
          const aboutSection = document.querySelector('#about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Navigate to home page and scroll to about
          navigate('/#about');
        }
        break;
      case 'blogs':
        if (location.pathname === '/') {
          // Scroll to blogs section if already on home page
          const blogsSection = document.querySelector('#blogs');
          if (blogsSection) {
            blogsSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Navigate to home page and scroll to blogs
          navigate('/#blogs');
        }
        break;
      default:
        navigate('/');
    }
  };

  return (
    <header className="w-full flex items-start justify-start p-4">
      <div className="flex items-center">
        <img
          className="w-[120px] h-[60px] object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
          alt="StartupSurge logo"
          src="/logo.png"
          onClick={handleLogoClick}
        />
        <div className="ml-6 relative">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`[font-family:'League_Spartan',Helvetica] font-normal text-lg tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer transition-colors duration-200 no-underline text-decoration-none hover:no-underline ${
                      item.isActive 
                        ? "text-[#ffa500]" 
                        : "text-white hover:text-[#ffa500]"
                    }`}
                    onClick={() => handleNavItemClick(item.href, item.text)}
                    style={{ textDecoration: 'none' }}
                  >
                    {item.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};
