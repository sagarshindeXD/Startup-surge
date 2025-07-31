import React from "react";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

interface OverlapSectionProps {
  onCapsuleClick?: (section: string) => void;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const OverlapSection = ({ onCapsuleClick, value, onValueChange }: OverlapSectionProps): JSX.Element => {
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
      <div className="max-w-[600px] w-full h-[48px] flex justify-center -mt-8">
        <Tabs
          value={value}
          onValueChange={onValueChange}
          defaultValue="social-media"
          className="w-full"
        >
          <TabsList className="h-[48px] bg-[#d9d9d91a] rounded-[24px] flex items-center justify-center px-8">
            {serviceCategories.map((category, index) => (
              <React.Fragment key={category.id}>
                <TabsTrigger
                  value={category.id}
                  className={`h-[22px] font-['League_Spartan',Helvetica] font-normal text-lg tracking-[0] leading-normal whitespace-nowrap px-0 data-[state=active]:text-[#ffa500] data-[state=inactive]:text-white data-[state=active]:shadow-none ${index === 0 ? 'pl-4' : ''} ${index === serviceCategories.length - 1 ? 'pr-4' : ''} !bg-transparent`}
                  onClick={() => onCapsuleClick && onCapsuleClick(category.id)}
                >
                  {category.label}
                </TabsTrigger>

                {index < serviceCategories.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-8 mx-3 bg-[#d9d9d9b2]"
                  />
                )}
              </React.Fragment>
            ))}
          </TabsList>
        </Tabs>
        {/* Plus button next to capsule */}
        <div className="flex items-center justify-center w-[22px] h-[48px] ml-4">
          <div className="relative w-[22px] h-[22px] flex items-center">
                            <div className="absolute w-0.5 h-[22px] top-0 left-1/2 -translate-x-1/2 bg-[#ffa500] rounded-full" />
                <div className="absolute w-0.5 h-[22px] top-0 left-1/2 -translate-x-1/2 bg-[#ffa500] rounded-full -rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};
