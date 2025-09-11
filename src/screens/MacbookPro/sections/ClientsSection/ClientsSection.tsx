import React from "react";

// Logo paths in the public directory
const logo1 = "/Logos/GOS Preschool Logo Old-07.png";
const logo2 = "/Logos/GOS Logo.png";
const logo3 = "/Logos/1 (1).png";

interface Client {
  name: string;
  logo: string;
  alt: string;
}

export const ClientsSection: React.FC = () => {
  const clients: Client[] = [
    { 
      name: "GOS Preschool",
      logo: logo1,
      alt: "GOS Preschool Logo"
    },
    { 
      name: "GOS",
      logo: logo2,
      alt: "GOS Logo"
    },
    { 
      name: "Client 1",
      logo: logo3,
      alt: "Client 1 Logo"
    },
    // Add more clients here as needed
  ];

  return (
    <section className="w-full py-8 sm:py-16 md:py-20 lg:py-24 px-2 sm:px-4 md:px-8 lg:px-16 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-['League_Spartan',Helvetica] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            <span className="text-gray-800 dark:text-white">Our </span>
            <span className="font-semibold text-[#ffa500]">Clients</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400"></div>
          <p className="font-['League_Spartan',Helvetica] text-gray-600 dark:text-gray-300 text-base sm:text-lg mt-6 max-w-2xl mx-auto">
            Trusted By Innovative Brands And Businesses
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-12 items-center justify-items-center">
          {clients.map((client, index) => {
            // Log the image path for debugging
            console.log(`Loading logo for ${client.name}:`, client.logo);
            
            return (
              <div 
                key={index}
                className="w-full h-32 flex items-center justify-center p-4 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.alt}
                    className="h-20 w-auto max-w-full object-contain"
                    style={{
                      filter: 'none', // Remove grayscale
                      objectFit: 'contain',
                      maxHeight: '100%',
                      maxWidth: '100%',
                      width: 'auto',
                      height: '80px' // Fixed height for all logos
                    }}
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${client.logo}`);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallbackText = document.createElement('div');
                      fallbackText.className = 'text-center text-gray-500';
                      fallbackText.textContent = client.name;
                      target.parentNode?.appendChild(fallbackText);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
