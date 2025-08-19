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

export const SectionComponentNodeSection = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const isHome = location.pathname === "/";

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { text: "Home", href: "/", isActive: location.pathname === "/" },
    { text: "Services", href: "/services", isActive: location.pathname === "/services" },
    { text: "About", href: "/about", isActive: location.pathname === "/about" },
    { text: "Blogs", href: "/blogs", isActive: location.pathname === "/blogs" },
    { text: "AI", href: "/ai", isActive: location.pathname === "/ai" },
  ];

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleNavItemClick = (text: string) => {
    // Handle navigation based on the item clicked
    switch (text.toLowerCase()) {
      case 'home':
        navigate('/');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'about':
        navigate('/about');
        break;
      case 'blogs':
        navigate('/blogs');
        break;
      case 'ai':
        navigate('/ai');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <>
      <header
        className={`w-full flex items-center justify-between p-4 bg-white dark:bg-[#1e1e1e] transition-colors duration-300 ${
          isHome ? "" : "fixed top-0 left-0 right-0 z-50 shadow-sm supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-[#1e1e1e]/80 backdrop-blur"
        }`}
      >
      {/* Desktop Nav */}
      <div className="hidden sm:flex items-center w-full">
        <div className="w-[120px] h-[60px] flex items-center">
          <img
            className="w-full h-full object-contain dark:object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
            alt="StartupSurge logo"
            src={theme === 'light' ? "/logo.png" : "/StartupSurge Logo-05.png"}
            onClick={handleLogoClick}
          />
        </div>
        <div className="ml-6 relative">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`[font-family:'League_Spartan',Helvetica] font-normal text-lg tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer transition-colors duration-200 no-underline text-decoration-none hover:no-underline ${
                      item.isActive 
                        ? "text-[#ffa500]" 
                        : "text-gray-800 dark:text-white hover:text-[#ffa500]"
                    }`}
                    onClick={() => handleNavItemClick(item.text)}
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
          className="w-[64px] h-[32px] object-contain dark:object-cover cursor-pointer hover:opacity-80 transition-opacity duration-200"
          alt="StartupSurge logo"
          src={theme === 'light' ? "/logo.png" : "/StartupSurge Logo-05.png"}
          onClick={handleLogoClick}
        />
        <button
          className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa500] fixed top-4 right-4 z-[10001] bg-white dark:bg-[#1e1e1e] shadow-md transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span className="block">
            {mobileMenuOpen ? (
              <span className="text-3xl leading-none text-gray-800 dark:text-white transition-all duration-300">×</span>
            ) : (
              <Menu className="w-7 h-7 text-gray-800 dark:text-white transition-all duration-300" />
            )}
          </span>
        </button>
      </div>
      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-xs bg-white dark:bg-[#1e1e1e] h-full shadow-lg flex flex-col p-6 pt-16 fixed top-0 right-0">
            <nav className="flex flex-col gap-2 mt-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className={`text-base font-medium text-left [font-family:'League_Spartan',Helvetica] px-3 py-3 rounded-md transition-colors duration-200 active:opacity-80 ${item.isActive ? 'text-[#ffa500]' : 'text-gray-800 dark:text-white hover:text-[#ffa500]'}`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavItemClick(item.text);
                  }}
                >
                  {item.text}
                </button>
              ))}
            </nav>
            <div className="mt-auto pt-6">
              <ThemeToggle />
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
      </header>
      {/* Spacer to offset fixed header height on non-home routes */}
      {!isHome && <div className="h-16 sm:h-20" aria-hidden="true" />}
    </>
  );
};
