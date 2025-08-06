import React from "react";
import { useNavigate } from "react-router-dom";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

interface OverlapSectionProps {
  onCapsuleClick?: (section: string) => void;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const OverlapSection = ({ onCapsuleClick, value, onValueChange }: OverlapSectionProps): JSX.Element => {
  const navigate = useNavigate();
  
  // Define the service categories
  const serviceCategories = [
    { id: "seo", label: "SEO" },
    { id: "social-media", label: "Social Media" },
    { id: "performance-marketing", label: "Performance Marketing" },
    { id: "web-designing", label: "Web Designing" },
    { id: "ui-ux", label: "UI/UX" },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-full sm:max-w-[600px] w-full h-[40px] sm:h-[48px] flex justify-center overflow-x-auto sm:overflow-x-visible scrollbar-hide">
        <Tabs
          value={value}
          onValueChange={onValueChange}
          defaultValue="social-media"
          className="w-full"
        >
          <TabsList className="h-[40px] sm:h-[48px] bg-gray-100 dark:bg-[#d9d9d91a] rounded-[24px] flex-nowrap flex items-center justify-start sm:justify-center px-2 sm:px-8 gap-2 sm:gap-0 transition-colors duration-300 overflow-x-auto sm:overflow-x-visible scrollbar-hide">
            {serviceCategories.map((category, index) => (
              <React.Fragment key={category.id}>
                <TabsTrigger
                  value={category.id}
                  className={`h-[22px] font-['League_Spartan',Helvetica] font-normal text-base sm:text-lg tracking-[0] leading-normal whitespace-nowrap px-2 sm:px-0 data-[state=active]:text-[#ffa500] data-[state=inactive]:text-gray-800 dark:text-white data-[state=active]:shadow-none ${index === 0 ? 'pl-2 sm:pl-4' : ''} ${index === serviceCategories.length - 1 ? 'pr-2 sm:pr-4' : ''} !bg-transparent transition-colors duration-300`}
                  onClick={() => onCapsuleClick && onCapsuleClick(category.id)}
                >
                  {category.label}
                </TabsTrigger>
                {index < serviceCategories.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-6 sm:h-8 mx-2 sm:mx-3 bg-gray-300 dark:bg-[#d9d9d9b2] transition-colors duration-300"
                  />
                )}
              </React.Fragment>
            ))}
          </TabsList>
        </Tabs>
        {/* Plus button next to capsule */}
        <button 
          onClick={() => navigate('/services')}
          className="flex items-center justify-center w-[32px] h-[40px] sm:w-[22px] sm:h-[48px] ml-2 sm:ml-4 cursor-pointer hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
          aria-label="View all services"
        >
          <div className="relative w-[22px] h-[22px] flex items-center">
            <div className="absolute w-0.5 h-[22px] top-0 left-1/2 -translate-x-1/2 bg-[#ffa500] rounded-full" />
            <div className="absolute w-0.5 h-[22px] top-0 left-1/2 -translate-x-1/2 bg-[#ffa500] rounded-full -rotate-90" />
          </div>
        </button>
      </div>
    </div>
  );
};
