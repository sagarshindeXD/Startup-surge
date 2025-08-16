import React from "react";

// Simple clients section showcasing client logos/names. Replace the placeholder
// logos with real client assets when available.
export const ClientsSection: React.FC = () => {
  const clients = [
    { name: "Client One", logo: "https://via.placeholder.com/160x80?text=Client+1" },
    { name: "Client Two", logo: "https://via.placeholder.com/160x80?text=Client+2" },
    { name: "Client Three", logo: "https://via.placeholder.com/160x80?text=Client+3" },
    { name: "Client Four", logo: "https://via.placeholder.com/160x80?text=Client+4" },
    { name: "Client Five", logo: "https://via.placeholder.com/160x80?text=Client+5" },
    { name: "Client Six", logo: "https://via.placeholder.com/160x80?text=Client+6" },
  ];

  return (
    <section className="w-full py-8 sm:py-16 md:py-20 lg:py-24 px-2 sm:px-4 md:px-8 lg:px-16 bg-transparent transition-colors duration-300">
      <div className="max-w-2xl sm:max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="font-['League_Spartan',Helvetica] text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-[28px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0]">
            <span className="text-gray-800 dark:text-white">Our </span>
            <span className="font-semibold text-[#ffa500]">Clients</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400"></div>
          <p className="font-['League_Spartan',Helvetica] text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mt-3 sm:mt-5">
            Trusted by forward-thinking brands and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 items-center">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="group bg-transparent rounded-xl p-4 sm:p-6 h-20 sm:h-24 flex items-center justify-center ring-1 ring-gray-200/70 dark:ring-white/10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 sm:max-h-12 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
