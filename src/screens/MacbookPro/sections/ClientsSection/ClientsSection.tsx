import React from "react";

// Case study style clients section showing Problem, Bold Move, and Outcome.
export const ClientsSection: React.FC = () => {
  const caseStudies = [
    {
      client: "XYZ Fashion Brand (EXAMPLE)",
      problem: "Paid CAC rising, organic flatlining.",
      boldMove: "Landing page overhaul + UGC‑led creatives + offer testing.",
      outcome: "‑28% CAC, +52% ROAS, +3x email revenue in 90 days.",
    },
    {
      client: "D2C Beauty Label (DEMO)",
      problem: "Meta CPAs volatile, LTV under‑leveraged.",
      boldMove: "Creative testing system + LTV cohorting + lifecycle/retention flows.",
      outcome: "‑35% CPA, +2.1x LTV/CAC, +40% repeat purchase in 60 days.",
    },
    {
      client: "SaaS Productivity App (DEMO)",
      problem: "Trial‑to‑paid conversion stuck at 3.8%.",
      boldMove: "Onboarding redesign + in‑app nudges + pricing/packaging experiment.",
      outcome: "7.2% trial‑to‑paid, +26% ARPU, ‑18% churn in 45 days.",
    },
    // Add more case studies here as needed
  ];

  return (
    <section className="w-full py-8 sm:py-16 md:py-20 lg:py-24 px-2 sm:px-4 md:px-8 lg:px-16 bg-transparent transition-colors duration-300">
      <div className="max-w-2xl sm:max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="font-['League_Spartan',Helvetica] text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-[28px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0]">
            <span className="text-gray-800 dark:text-white">Client </span>
            <span className="font-semibold text-[#ffa500]">Wins</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400"></div>
          <p className="font-['League_Spartan',Helvetica] text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mt-3 sm:mt-5">
            Problems we solved. Bold moves we made. Outcomes that compound.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {caseStudies.map((item, idx) => (
            <article
              key={idx}
              className="rounded-2xl ring-1 ring-gray-200/70 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 p-5 sm:p-6"
            >
              <h3 className="font-['League_Spartan',Helvetica] text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-white mb-3">
                {item.client}
              </h3>

              <dl className="space-y-2 text-sm sm:text-base">
                <div className="flex">
                  <dt className="min-w-[92px] font-semibold text-[#ffa500]">Problem:</dt>
                  <dd className="text-gray-800 dark:text-gray-200">{item.problem}</dd>
                </div>
                <div className="flex">
                  <dt className="min-w-[92px] font-semibold text-[#ffa500]">Bold Move:</dt>
                  <dd className="text-gray-800 dark:text-gray-200">{item.boldMove}</dd>
                </div>
                <div className="flex">
                  <dt className="min-w-[92px] font-semibold text-[#ffa500]">Outcome:</dt>
                  <dd className="text-gray-800 dark:text-gray-200">{item.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
