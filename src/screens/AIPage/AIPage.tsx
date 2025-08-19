import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";

type FormState = {
  industry: string;
  industryType: "B2C" | "B2B" | "D2C" | "Marketplace" | "Non-profit" | "SaaS" | "";
  offering: "Product" | "Service" | "App" | "Content" | "Course" | "";
  audienceSegment: "High income" | "Mid income" | "Low income" | "Mass market" | "Niche" | "";
  audienceNature: "Professionals" | "Students" | "Homemakers" | "Beginners" | "Enthusiasts" | "Executives" | "";
  ageGroup: "Below 18" | "18-25" | "26-35" | "36-45" | "46-60" | "60+" | "";
  objective: string;
};

const initialState: FormState = {
  industry: "",
  industryType: "",
  offering: "",
  audienceSegment: "",
  audienceNature: "",
  ageGroup: "",
  objective: "",
};

export const AIPage: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const isValid = useMemo(() => {
    return (
      form.industry.trim() &&
      form.industryType &&
      form.offering &&
      form.audienceSegment &&
      form.audienceNature &&
      form.ageGroup &&
      form.objective.trim()
    );
  }, [form]);

  type Recommendations = {
    strategy: string[];
    platforms: string[];
    plan: string[];
    importantParameters: string[];
    expectedKPIs: string[];
    recommendedDuration: string;
    recommendedBudget: string;
    rationale: string[];
    funnel: {
      awareness: string[];
      consideration: string[];
      conversion: string[];
    };
    messaging: string[];
    creatives: string[];
    budgetSplit: { channel: string; percent: string; notes?: string }[];
    detailedTimeline: string[];
    risks: string[];
    assumptions: string[];
    trackingSetup: string[];
  };

  const recommend = (f: FormState): Recommendations => {
    const platforms = new Set<string>();
    const strategy: string[] = [];
    const plan: string[] = [];
    const importantParameters: string[] = [
      "CAC",
      "CTR",
      "Conversion Rate",
      "CPA",
      "Retention / LTV",
    ];
    const expectedKPIs: string[] = [];
    const rationale: string[] = [];
    const funnel = {
      awareness: [] as string[],
      consideration: [] as string[],
      conversion: [] as string[],
    };
    const messaging: string[] = [];
    const creatives: string[] = [];

    // Platforms by audience and industry type
    if (f.industryType === "B2B" || f.audienceNature === "Professionals" || f.audienceNature === "Executives") {
      platforms.add("LinkedIn");
      platforms.add("Email");
      strategy.push("Account-based marketing", "Thought leadership", "Webinars/Workshops");
      expectedKPIs.push("MQLs", "SQLs", "Demo Bookings");
      funnel.awareness.push("LinkedIn organic + Sponsored Content to ICP",
        "Guest posts/PR on niche publications");
      funnel.consideration.push("Lead magnets (whitepapers, reports)", "Webinars with Q&A");
      funnel.conversion.push("Sales enablement emails", "Retargeting with case studies");
      messaging.push("Outcome-oriented messaging (save time/cost)", "Pain-point led subject lines");
      creatives.push("Carousel case studies", "Short expert videos", "Slides with benchmarks");
      rationale.push("B2B professional audiences concentrate on LinkedIn and email with longer consideration cycles");
    }
    if (f.industryType === "B2C" || f.industryType === "D2C" || f.audienceSegment === "Mass market") {
      platforms.add("Instagram");
      platforms.add("YouTube");
      platforms.add("Meta Ads");
      strategy.push("Influencer collaborations", "UGC & short-form video", "Always-on paid acquisition");
      expectedKPIs.push("Reach", "Engagement Rate", "Add-to-Cart", "Purchases");
      funnel.awareness.push("Reels/Shorts top of funnel", "Creator collabs for credibility");
      funnel.consideration.push("Product demos & comparisons", "Social proof highlights");
      funnel.conversion.push("Offer-driven retargeting (viewed, ATC)", "WhatsApp/Email nudge sequences");
      messaging.push("Benefit-first hooks", "UGC-style authenticity");
      creatives.push("Unboxing", "Before/After", "Micro-tutorials", "Trend-synced reels");
      rationale.push("Mass-market discovery is driven by short-form video and creator economy");
    }
    if (f.audienceSegment === "High income") {
      platforms.add("Instagram");
      platforms.add("Google Ads");
      strategy.push("Premium positioning with social proof");
      messaging.push("Quality, exclusivity, concierge support");
      creatives.push("Premium lifestyle visuals", "Founder stories");
    }
    if (f.audienceSegment === "Low income") {
      platforms.add("YouTube");
      platforms.add("SEO");
      strategy.push("Value-first content and community groups");
      messaging.push("Value, savings, durability");
      creatives.push("How-to guides", "Long-form explainers");
    }
    if (f.audienceNature === "Students" || f.ageGroup === "18-25") {
      platforms.add("Instagram");
      platforms.add("YouTube");
      platforms.add("TikTok (if available)");
      strategy.push("Campus ambassador programs", "Giveaways/Referrals");
      messaging.push("Career impact, FOMO, deals");
      creatives.push("Challenges", "Day-in-the-life", "POV shorts");
    }
    if (f.offering === "Service") {
      platforms.add("Google Ads");
      platforms.add("SEO");
      strategy.push("Local SEO & reviews", "Case studies & testimonials");
      expectedKPIs.push("Leads", "Booked calls", "Close rate");
      funnel.conversion.push("Book-a-call CTA + calendar", "Qualification form + nurtures");
    }
    if (f.offering === "Product" || f.offering === "App") {
      platforms.add("App Store Optimization");
      platforms.add("Influencer/Creator ads");
      strategy.push("Onboarding optimization", "Lifecycle email/Push");
      expectedKPIs.push("Trials/Installs", "Day-7 Retention", "ROAS");
      funnel.consideration.push("Free trial / demo video", "UGC testimonials");
      funnel.conversion.push("Checkout CRO + urgency", "Cart abandonment automation");
    }

    // Simple duration & budget heuristics
    let recommendedDuration = "8-12 weeks";
    if (f.industryType === "B2B") recommendedDuration = "12-16 weeks";
    if (f.offering === "Product" && (f.industryType === "D2C" || f.industryType === "B2C")) recommendedDuration = "6-10 weeks";

    let recommendedBudget = "$3k - $10k / month";
    if (f.industryType === "B2B") recommendedBudget = "$5k - $20k / month";
    if (f.audienceSegment === "High income") recommendedBudget = "$8k - $30k / month";
    if (f.audienceSegment === "Low income") recommendedBudget = "$2k - $6k / month";

    // Plan outline
    plan.push(
      "Week 1-2: Research (ICP, competitor, keyword & creative angles)",
      "Week 2-3: Offer & messaging, landing pages, tracking setup",
      "Week 3-4: Pilot campaigns (2-3 channels), content calendar",
      "Week 5-8: Scale winners, iterate creatives & funnels",
      "Ongoing: CRO, retention, and LTV optimization"
    );

    // Budget split suggestion
    const budgetSplit: { channel: string; percent: string; notes?: string }[] = [];
    if (f.industryType === "B2B") {
      budgetSplit.push(
        { channel: "LinkedIn Ads", percent: "30-40%", notes: "ICP targeting + lead gen" },
        { channel: "Content/SEO", percent: "20-25%", notes: "Thought leadership" },
        { channel: "Email/Marketing Ops", percent: "10-15%", notes: "Nurtures + webinars" },
        { channel: "Google Ads", percent: "15-20%", notes: "High intent" },
        { channel: "Retargeting/Tools", percent: "10%", notes: "CRO + analytics" },
      );
    } else {
      budgetSplit.push(
        { channel: "Meta (IG/FB)", percent: "35-45%", notes: "Prospecting + retargeting" },
        { channel: "Creators/Influencers", percent: "15-25%", notes: "UGC for trust" },
        { channel: "Google/YouTube", percent: "10-20%", notes: "Intent + reach" },
        { channel: "SEO/Content", percent: "10-15%", notes: "Compounding growth" },
        { channel: "Email/SMS/WA", percent: "10%", notes: "Retention + CRM" },
      );
    }

    // Add objective-specific hints
    if (f.objective.toLowerCase().includes("leads")) {
      strategy.push("Lead magnets & gated content", "Retargeting with social proof");
      expectedKPIs.push("CPL", "Qualified leads");
      messaging.push("Book a demo", "See a live walkthrough");
    }
    if (f.objective.toLowerCase().includes("sales") || f.objective.toLowerCase().includes("revenue")) {
      strategy.push("Bundling/Offers", "Cart recovery & remarketing");
      expectedKPIs.push("AOV", "Conversion Rate", "Revenue");
      messaging.push("Limited-time offer", "Bundle & save");
    }

    // Ensure arrays are unique and tidy
    const uniq = (arr: string[]) => Array.from(new Set(arr)).filter(Boolean);

    return {
      strategy: uniq(strategy),
      platforms: Array.from(platforms),
      plan,
      importantParameters: uniq(importantParameters),
      expectedKPIs: uniq(expectedKPIs),
      recommendedDuration,
      recommendedBudget,
      rationale: uniq(rationale),
      funnel: {
        awareness: uniq(funnel.awareness),
        consideration: uniq(funnel.consideration),
        conversion: uniq(funnel.conversion),
      },
      messaging: uniq(messaging),
      creatives: uniq(creatives),
      budgetSplit,
      detailedTimeline: [
        "Week 1: ICP, persona, tracking plan",
        "Week 2: Offers, landing, creatives v1",
        "Week 3: Pilot campaigns live + QA",
        "Week 4: First optimizations, add variants",
        "Week 5-6: Scale winners, add channels",
        "Week 7-8: CRO, email/sms flows",
        "Week 9-10: Creative sprints, A/B tests",
        "Week 11-12: Consolidate learnings, roadmap",
      ],
      risks: [
        "Tracking or attribution gaps skew results",
        "Offer-market fit not validated",
        "Creative fatigue without sprint cadence",
      ],
      assumptions: [
        "Ad accounts active and policy-compliant",
        "Landing pages editable for CRO",
        "Access to analytics and CRM",
      ],
      trackingSetup: [
        "GA4 events + conversions",
        "Meta/Google pixels with CAPI where possible",
        "UTM conventions + dashboards",
      ],
    };
  };

  const recos = submitted && isValid ? recommend(form) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm(initialState);
  };

  return (
    <div className="bg-white dark:bg-[#1e1e1e] min-h-screen flex flex-col transition-colors duration-300 pb-12 [padding-bottom:env(safe-area-inset-bottom)]">
      {/* Navigation (match site) */}
      <SectionComponentNodeSection />
      <Helmet>
        <title>AI Strategy Assistant | StartupSurge</title>
        <meta name="description" content="Get a tailored growth strategy, channels, KPIs, duration and budget based on your audience and objective." />
      </Helmet>

      {/* Hero/Header */}
      <section className="w-full py-8 sm:py-16 md:py-20 lg:py-28 relative px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl sm:max-w-[1752px] mx-auto text-center">
          <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-8">
            <span className="font-semibold text-[#ffa500]">AI</span> Strategy Assistant
          </h1>
          <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white max-w-xl sm:max-w-3xl mx-auto leading-relaxed opacity-90">
            Enter your details to receive a tailored plan with strategy, channels, KPIs, timeline and budget.
          </p>
        </div>
      </section>

      <main className="w-full px-2 sm:px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl sm:max-w-[1752px] mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold [font-family:'League_Spartan',Helvetica] mb-4">
            Your inputs
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="industry" className="mb-2 font-medium">Industry</label>
            <input
              id="industry"
              name="industry"
              type="text"
              value={form.industry}
              onChange={onChange}
              placeholder="e.g., Fintech, Beauty, Edtech"
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="industryType" className="mb-2 font-medium">Industry Type</label>
            <select
              id="industryType"
              name="industryType"
              value={form.industryType}
              onChange={onChange}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]"
            >
              <option value="">Select</option>
              <option value="B2C">B2C</option>
              <option value="B2B">B2B</option>
              <option value="D2C">D2C</option>
              <option value="Marketplace">Marketplace</option>
              <option value="Non-profit">Non-profit</option>
              <option value="SaaS">SaaS</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="offering" className="mb-2 font-medium">Offering</label>
            <select
              id="offering"
              name="offering"
              value={form.offering}
              onChange={onChange}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]"
            >
              <option value="">Select</option>
              <option value="Product">Product</option>
              <option value="Service">Service</option>
              <option value="App">App</option>
              <option value="Content">Content</option>
              <option value="Course">Course</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="audienceSegment" className="mb-2 font-medium">Audience Segment</label>
            <select
              id="audienceSegment"
              name="audienceSegment"
              value={form.audienceSegment}
              onChange={onChange}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]"
            >
              <option value="">Select</option>
              <option value="High income">High income</option>
              <option value="Mid income">Mid income</option>
              <option value="Low income">Low income</option>
              <option value="Mass market">Mass market</option>
              <option value="Niche">Niche</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="audienceNature" className="mb-2 font-medium">Audience Nature</label>
            <select
              id="audienceNature"
              name="audienceNature"
              value={form.audienceNature}
              onChange={onChange}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]"
            >
              <option value="">Select</option>
              <option value="Professionals">Professionals</option>
              <option value="Students">Students</option>
              <option value="Homemakers">Homemakers</option>
              <option value="Beginners">Beginners</option>
              <option value="Enthusiasts">Enthusiasts</option>
              <option value="Executives">Executives</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="ageGroup" className="mb-2 font-medium">Age Group</label>
            <select
              id="ageGroup"
              name="ageGroup"
              value={form.ageGroup}
              onChange={onChange}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]"
            >
              <option value="">Select</option>
              <option value="Below 18">Below 18</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="46-60">46-60</option>
              <option value="60+">60+</option>
            </select>
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="objective" className="mb-2 font-medium">Objective</label>
            <input
              id="objective"
              name="objective"
              type="text"
              value={form.objective}
              onChange={onChange}
              placeholder="e.g., Generate 200 qualified leads/month, Improve ROAS to 3x, Grow installs"
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]"
            />
          </div>

          <div className="md:col-span-2 flex gap-3">
            <button
              type="submit"
              disabled={!isValid}
              className={`px-6 py-3 rounded-md text-white transition-colors ${
                isValid ? "bg-[#ffa500] hover:bg-[#ff9500]" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Generate Plan
            </button>
            {submitted && (
              <button type="button" onClick={reset} className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700">
                Reset
              </button>
            )}
          </div>
          </form>

          {recos && (
            <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card title="Rationale" items={recos.rationale} />
              <Card title="Strategy" items={recos.strategy} />
              <Card title="Preferable Platforms" items={recos.platforms} />
              <Card title="Messaging Angles" items={recos.messaging} />
              <Card title="Creative Directions" items={recos.creatives} />
              <Group title="Funnel Plan" groups={[
                { heading: 'Awareness', items: recos.funnel.awareness },
                { heading: 'Consideration', items: recos.funnel.consideration },
                { heading: 'Conversion', items: recos.funnel.conversion },
              ]} />
              <Card title="Execution Plan" items={recos.plan} />
              <Card title="Detailed 12-week Timeline" items={recos.detailedTimeline} />
              <Card title="Important Parameters" items={recos.importantParameters} />
              <Card title="Expected KPIs" items={recos.expectedKPIs} />
              <Budget title="Suggested Channel Budget Split" rows={recos.budgetSplit} />
              <Card title="Tracking & Analytics Setup" items={recos.trackingSetup} />
              <Card title="Risks" items={recos.risks} />
              <Card title="Assumptions" items={recos.assumptions} />
              <Single title="Recommended Duration" value={recos.recommendedDuration} />
              <Single title="Recommended Budget" value={recos.recommendedBudget} />
            </section>
          )}
        </div>
      </main>
      {/* Footer (match site) */}
      <FooterSection />
    </div>
  );
};

const Card: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm">
    <h3 className="text-xl font-semibold mb-3 [font-family:'League_Spartan',Helvetica]">{title}</h3>
    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
      {items.map((it, idx) => (
        <li key={idx}>{it}</li>
      ))}
    </ul>
  </div>
);

const Single: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm">
    <h3 className="text-xl font-semibold mb-2 [font-family:'League_Spartan',Helvetica]">{title}</h3>
    <p className="text-gray-800 dark:text-gray-200">{value}</p>
  </div>
);

const Group: React.FC<{ title: string; groups: { heading: string; items: string[] }[] }> = ({ title, groups }) => (
  <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm">
    <h3 className="text-xl font-semibold mb-3 [font-family:'League_Spartan',Helvetica]">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {groups.map((g, i) => (
        <div key={i}>
          <h4 className="font-semibold mb-2">{g.heading}</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {g.items.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Budget: React.FC<{ title: string; rows: { channel: string; percent: string; notes?: string }[] }> = ({ title, rows }) => (
  <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm">
    <h3 className="text-xl font-semibold mb-3 [font-family:'League_Spartan',Helvetica]">{title}</h3>
    <div className="grid grid-cols-1 gap-2">
      {rows.map((r, i) => (
        <div key={i} className="flex items-start justify-between gap-4 p-3 rounded-lg bg-orange-50/60 dark:bg-[#2a2a2a]">
          <div className="font-medium">{r.channel}</div>
          <div className="text-[#ffa500] font-semibold">{r.percent}</div>
          <div className="text-gray-700 dark:text-gray-300 text-sm">{r.notes}</div>
        </div>
      ))}
    </div>
  </div>
);
