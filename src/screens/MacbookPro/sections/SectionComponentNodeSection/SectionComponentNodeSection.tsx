import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../../../lib/theme";
import { ThemeToggle } from "../../../../components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { scrollToTop } from "../../../../lib/utils";
import { useLoadingAnimation } from "../../../../lib/useLoadingAnimation";
import { LoadingOverlay } from "../../../../components/LoadingOverlay";

export const SectionComponentNodeSection = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { isLoading, handleNavigation } = useLoadingAnimation();

  const navItems = [
    { text: "Home", href: "/", isActive: location.pathname === "/" },
    { text: "Services", href: "/services", isActive: location.pathname === "/services" },
    { text: "About", href: "/about", isActive: location.pathname === "/about" },
    { text: "Blogs", href: "/blogs", isActive: location.pathname === "/blogs" },
  ];

  const handleLogoClick = () => {
    handleNavigation(() => {
      scrollToTop();
      navigate('/');
    });
  };

  const handleNavItemClick = (href: string, text: string) => {
    // Handle navigation based on the item clicked
    switch (text.toLowerCase()) {
      case 'home':
        handleNavigation(() => {
          scrollToTop();
          navigate('/');
        });
        break;
      case 'services':
        handleNavigation(() => {
          scrollToTop();
          navigate('/services');
        });
        break;
      case 'about':
        handleNavigation(() => {
          scrollToTop();
          navigate('/about');
        });
        break;
      case 'blogs':
        handleNavigation(() => {
          scrollToTop();
          navigate('/blogs');
        });
        break;
      default:
        handleNavigation(() => {
          scrollToTop();
          navigate('/');
        });
    }
  };

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <header className="w-full flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] transition-colors duration-300">
      {/* Desktop Nav */}
      <div className="hidden sm:flex items-center w-full">
        <img
          className="w-[80px] h-[40px] dark:w-[120px] dark:h-[60px] object-cover cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
          alt="StartupSurge logo"
          src={theme === 'light' ? "/logo.png" : "/StartupSurge Logo-05.png"}
          onClick={handleLogoClick}
        />
        <div className="ml-6 relative">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`[font-family:'League_Spartan',Helvetica] font-normal text-lg tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer transition-all duration-300 no-underline text-decoration-none hover:no-underline hover:scale-105 ${
                      item.isActive 
                        ? "text-[#ffa500]" 
                        : "text-gray-800 dark:text-white hover:text-[#ffa500]"
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
        {/* Restore ThemeToggle to its original desktop position */}
        <div className="ml-auto flex items-center">
          <ThemeToggle />
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="flex sm:hidden items-center w-full justify-between">
        <img
          className="w-[48px] h-[24px] object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
          alt="StartupSurge logo"
          src={theme === 'light' ? "/logo.png" : "/StartupSurge Logo-05.png"}
          onClick={handleLogoClick}
        />
        <button
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa500] fixed top-4 right-4 z-[10001] bg-white dark:bg-[#1e1e1e] shadow-md transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="block">
            {mobileMenuOpen ? (
              <span className="text-3xl text-gray-800 dark:text-white transition-all duration-300">×</span>
            ) : (
              <Menu className="w-8 h-8 text-gray-800 dark:text-white transition-all duration-300" />
            )}
          </span>
        </button>
      </div>
      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/60 flex justify-end">
          <div className="w-3/4 max-w-xs bg-white dark:bg-[#1e1e1e] h-full shadow-lg flex flex-col p-6 fixed top-0 right-0">
            <nav className="flex flex-col gap-6 mt-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className={`text-lg font-medium text-left [font-family:'League_Spartan',Helvetica] px-2 py-2 rounded transition-colors duration-200 ${item.isActive ? 'text-[#ffa500]' : 'text-gray-800 dark:text-white hover:text-[#ffa500]'}`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavItemClick(item.href, item.text);
                  }}
                >
                  {item.text}
                </button>
              ))}
            </nav>
            <div className="mt-auto pt-8">
              <ThemeToggle />
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
      </header>
    </>
  );
};
