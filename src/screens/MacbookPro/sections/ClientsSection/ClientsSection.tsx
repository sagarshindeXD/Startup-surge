import React from "react";

interface Client {
  name: string;
  logo: string;
  alt: string;
}

export const ClientsSection: React.FC = () => {
  // All client logos located in public/Logos
  const logoPaths = [
    "/Logos/StartupSurge Clients-01.png",
    "/Logos/StartupSurge Clients-02.png",
    "/Logos/StartupSurge Clients-03.png",
    "/Logos/StartupSurge Clients-04.png",
    "/Logos/StartupSurge Clients-05.png",
    "/Logos/StartupSurge Clients-06.png",
    "/Logos/StartupSurge Clients-07.png",
    "/Logos/StartupSurge Clients-08.png",
    "/Logos/StartupSurge Clients-09.png",
    "/Logos/StartupSurge Clients-10.png",
    "/Logos/StartupSurge Clients-11.png",
    "/Logos/StartupSurge Clients-12.png",
    "/Logos/StartupSurge Clients-13.png",
    "/Logos/StartupSurge Clients-14.png",
    "/Logos/StartupSurge Clients-15.png",
    "/Logos/StartupSurge Clients-16.png",
    "/Logos/StartupSurge Clients-17.png",
    "/Logos/StartupSurge Clients-18.png",
    "/Logos/StartupSurge Clients-19.png",
    "/Logos/StartupSurge Clients-20.png",
    "/Logos/StartupSurge Clients-21.png",
    "/Logos/StartupSurge Clients-22.png",
    "/Logos/StartupSurge Clients-23.png",
  ];

  const clients: Client[] = logoPaths.map((p, idx) => ({
    name: `Client ${idx + 1}`,
    logo: p,
    alt: `Client ${idx + 1} Logo`,
  }));

  // Spotlight removed — simple logo wall retained

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

        {/* Stat strip + Hover logo wall */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 mb-8">
            <StatChip label="Clients" value={`+${clients.length}`} />
            <StatChip label="Industries" value="6" />
            <StatChip label="Campaigns" value="120+" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-12 items-center justify-items-center">
            {clients.map((client, index) => (
              <LogoTile key={`grid-${index}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoTile: React.FC<{ client: Client }> = ({ client }) => (
  <div
    className="w-full h-36 flex items-center justify-center p-4 transition-transform duration-300 hover:scale-110"
  >
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={client.logo}
        alt={client.alt}
        className="h-24 w-48 object-contain transition-all duration-300 hover:drop-shadow-[0_0_18px_rgba(255,165,0,0.45)]"
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

const StatChip: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm flex items-center gap-2">
    <span className="text-[#ffa500] font-semibold">{value}</span>
    <span className="text-gray-700 dark:text-gray-300 text-sm">{label}</span>
  </div>
);

// Spotlight component removed; spotlight is now integrated above

