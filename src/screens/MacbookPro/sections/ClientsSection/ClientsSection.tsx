import React, { useState, useEffect, useRef } from "react";

interface Client {
  name: string;
  logo: string;
  alt: string;
}

export const ClientsSection: React.FC = () => {
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

  // Duplicate the clients array to create a seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [logoWidth, setLogoWidth] = useState(200); // Default width, will be updated on mount

  // Calculate logo width on mount and window resize
  useEffect(() => {
    const updateWidths = () => {
      // Adjust logo width based on screen size
      const width = window.innerWidth < 768 ? 150 : 200;
      setLogoWidth(width);
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  return (
    <section className="w-full py-8 sm:py-16 md:py-20 lg:py-24 bg-transparent transition-colors duration-300 overflow-hidden">
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Stat strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 mb-12">
            <StatChip label="Clients" value={`+${clients.length}`} />
            <StatChip label="Industries" value="6" />
            <StatChip label="Campaigns" value="120+" />
          </div>
        </div>

        {/* Logo carousel - full width */}
        <div 
          className="relative w-full h-40 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={containerRef}
        >
          <div 
            className={`flex items-center h-full ${isPaused ? 'paused' : 'animate-scroll'}`}
            style={{
              '--logo-width': `${logoWidth}px`,
              '--animation-duration': `${duplicatedClients.length * 2}s`,
            } as React.CSSProperties}
          >
            {duplicatedClients.map((client, index) => (
              <LogoTile key={`logo-${index}`} client={client} />
            ))}
          </div>
          {/* Gradient fade effect on sides */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#121212] z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#121212] z-10"></div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-1 * var(--logo-width) * ${clients.length}));
            }
          }
          .animate-scroll {
            animation: scroll var(--animation-duration) linear infinite;
          }
          .paused {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
};

const LogoTile: React.FC<{ client: Client }> = React.memo(({ client }) => (
  <div className="flex-shrink-0 px-4 h-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ width: 'var(--logo-width)' }}>
    <div className="relative w-full h-24 flex items-center justify-center">
      <img
        src={client.logo}
        alt={client.alt}
        className="h-full w-full object-contain transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,165,0,0.6)]"
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
));

LogoTile.displayName = 'LogoTile';

const StatChip: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm flex items-center gap-2">
    <span className="text-[#ffa500] font-semibold">{value}</span>
    <span className="text-gray-700 dark:text-gray-300 text-sm">{label}</span>
  </div>
);

// Spotlight component removed; spotlight is now integrated above

