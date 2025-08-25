import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { SectionComponentNodeSection } from "../MacbookPro/sections/SectionComponentNodeSection/SectionComponentNodeSection";
import { FooterSection } from "../MacbookPro/sections/FooterSection/FooterSection";
import { generatePlanViaApi, generatePlanWithGemini } from "../../lib/ai";

type FormState = {
  brandName: string;
  brandObjective: string;
  targetPlatform: string;
  industry: string;
  industryType: ("B2C" | "B2B" | "D2C" | "Marketplace" | "Non-profit" | "SaaS")[];
  offering: "Product" | "Service" | "App" | "Content" | "Course" | "";
  audienceSegment:
    | "High income"
    | "Mid-high income"
    | "Mid income"
    | "Low-mid income"
    | "Low income"
    | "Mass market"
    | "Niche"
    | "";
  audienceNature: string; // free text
  ageGroup: ("Below 18" | "18-25" | "26-35" | "36-45" | "46-60" | "60+")[];
  objective: (
    | "Lead Generation"
    | "Awareness"
    | "Google Ranking (SEO)"
    | "App Installs"
    | "Sales/Revenue"
    | "Engagement"
  )[];
  leadGenBudgetINR?: string; // only when objective is Lead Generation
};

const initialState: FormState = {
  brandName: "",
  brandObjective: "",
  targetPlatform: "",
  industry: "",
  industryType: [],
  offering: "",
  audienceSegment: "",
  audienceNature: "",
  ageGroup: [],
  objective: [],
  leadGenBudgetINR: "",
};

export const AIPage: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recos, setRecos] = useState<Recommendations | null>(null);
  // industry type dropdown state
  const [industryOpen, setIndustryOpen] = useState(false);
  const industryRef = useRef<HTMLDivElement | null>(null);
  const industryTypeOptions: FormState["industryType"] = [
    "B2C",
    "B2B",
    "D2C",
    "Marketplace",
    "Non-profit",
    "SaaS",
  ];

  // Age Group multiselect
  const [ageOpen, setAgeOpen] = useState(false);
  const ageRef = useRef<HTMLDivElement | null>(null);
  const ageGroupOptions: (FormState["ageGroup"][number])[] = [
    "Below 18",
    "18-25",
    "26-35",
    "36-45",
    "46-60",
    "60+",
  ];

  // Objective multiselect
  const [objectiveOpen, setObjectiveOpen] = useState(false);
  const objectiveRef = useRef<HTMLDivElement | null>(null);
  const objectiveOptions: (FormState["objective"][number])[] = [
    "Lead Generation",
    "Awareness",
    "Google Ranking (SEO)",
    "App Installs",
    "Sales/Revenue",
    "Engagement",
  ];

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  // Multiselect handlers (industryType, ageGroup, objective)

  const addIndustryType = (val: string) => {
    setForm((s) => {
      if (s.industryType.includes(val as any)) return s;
      return { ...s, industryType: [...s.industryType, val as any] };
    });
  };

  const removeIndustryType = (val: string) => {
    setForm((s) => ({
      ...s,
      industryType: s.industryType.filter((x) => x !== (val as any)) as FormState["industryType"],
    }));
  };

  const addAgeGroup = (val: string) => {
    setForm((s) => {
      if (s.ageGroup.includes(val as any)) return s;
      return { ...s, ageGroup: [...s.ageGroup, val as any] };
    });
  };

  const removeAgeGroup = (val: string) => {
    setForm((s) => ({
      ...s,
      ageGroup: s.ageGroup.filter((x) => x !== (val as any)) as FormState["ageGroup"],
    }));
  };

  const addObjective = (val: string) => {
    setForm((s) => {
      if (s.objective.includes(val as any)) return s;
      return { ...s, objective: [...s.objective, val as any] };
    });
  };

  const removeObjective = (val: string) => {
    setForm((s) => ({
      ...s,
      objective: s.objective.filter((x) => x !== (val as any)) as FormState["objective"],
    }));
  };

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (industryRef.current && !industryRef.current.contains(target)) setIndustryOpen(false);
      if (ageRef.current && !ageRef.current.contains(target)) setAgeOpen(false);
      if (objectiveRef.current && !objectiveRef.current.contains(target)) setObjectiveOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const isValid = useMemo(() => {
    const baseValid =
      form.brandName.trim() &&
      form.brandObjective.trim() &&
      form.industry.trim() &&
      form.industryType.length > 0 &&
      form.offering &&
      form.audienceSegment &&
      form.audienceNature.trim() &&
      form.ageGroup.length > 0 &&
      form.objective.length > 0;
    const leadGenNeedsBudget = form.objective.includes("Lead Generation") ? !!form.leadGenBudgetINR && form.leadGenBudgetINR.trim() !== "" : true;
    return !!baseValid && leadGenNeedsBudget;
  }, [form]);

  type Recommendations = {
    ourUnderstanding: string[];
    objectiveElaborated: string[];
    marketResearch: string[];
    platforms: string[]; // Preferable Platforms
    strategyByPlatforms: string[];
    contentStrategy: string[];
    aidaFunnel: {
      awareness: string[];
      interest: string[];
      desire: string[];
      action: string[];
    };
    executionPlan: string[];
    importantParameters: string[];
    elaboratedKPIs: string[];
    adsBudgetINR?: { channel: string; budgetINR: string; notes?: string }[];
    alternatives: string[];
    recommendation: string;
  };

  const recommend = (f: FormState): Recommendations => {
    const platforms = new Set<string>();
    const strategyByPlatforms: string[] = [];
    const contentStrategy: string[] = [];
    const executionPlan: string[] = [];
    const importantParameters: string[] = [];
    const elaboratedKPIs: string[] = [];
    const aida = {
      awareness: [] as string[],
      interest: [] as string[],
      desire: [] as string[],
      action: [] as string[],
    };
    const ourUnderstanding: string[] = [];
    const marketResearch: string[] = [];
    
    // helpers
    const pick = <T,>(arr: T[], n = 3) => arr.filter(Boolean).slice(0, n);
    const add = (arr: string[], ...vals: (string | false | undefined)[]) => {
      vals.forEach((v) => v && arr.push(v));
    };
    const cap = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
    const words = (f.brandObjective || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 4);
    const keywordSet = Array.from(new Set(words));
    const topKeywords = keywordSet.slice(0, 5);

    const toneByAudience = () => {
      const seg = (f.audienceSegment || "").toLowerCase();
      if (/high/.test(seg)) return "premium, insight-led, authority-building";
      if (/low|mass/.test(seg)) return "simple, value-first, visual";
      return "clear, benefit-led, trustworthy";
    };
    const formatByAge = () => {
      const age = f.ageGroup || [];
      if (age.includes("18-25") || age.includes("Below 18")) return "short-form video, memes, trends";
      if (age.includes("26-35")) return "snappy reels + in-depth blogs/videos";
      if (age.includes("36-45") || age.includes("46-60") || age.includes("60+")) return "explainers, comparisons, testimonials";
      return "mixed formats optimizing for clarity";
    };

    // normalize platform names and extract user preferred platforms
    const normalizePlatform = (raw: string) => {
      const r = raw.trim().toLowerCase();
      if (!r) return "";
      if (r === "ig" || r.includes("instagram")) return "Instagram";
      if (r.includes("linkedin")) return "LinkedIn";
      if (r.includes("facebook") || r.includes("meta")) return "Meta Ads";
      if (r.includes("youtube")) return "YouTube";
      if (r.includes("google")) return "Google Ads";
      if (r.includes("email")) return "Email";
      if (r.includes("seo")) return "SEO";
      if (r.includes("tiktok")) return "TikTok (if available)";
      if (r.includes("aso") || r.includes("app store")) return "App Store Optimization";
      return raw.trim();
    };
    const preferredPlatforms = Array.from(
      new Set(
        (f.targetPlatform || "")
          .split(/[,|\n]+|\s{2,}/)
          .map((p) => normalizePlatform(p))
          .filter(Boolean)
      )
    );

    // Platforms by audience and industry type (heuristic base)
    const hasType = (t: string) => f.industryType.includes(t as any);
    if (!preferredPlatforms.length && (hasType("B2B") || /professionals|executives/i.test(f.audienceNature))) {
      platforms.add("LinkedIn");
      if (preferredPlatforms.includes("Email")) platforms.add("Email");
      strategyByPlatforms.push("LinkedIn: ABM + Thought leadership", "Email: Webinar invites + case studies");
      elaboratedKPIs.push(
        "Marketing Qualified Leads (MQLs): volume and quality from LinkedIn forms and landing pages",
        "Sales Qualified Leads (SQLs): % of MQLs that meet sales criteria",
        "Opportunity Rate: % of SQLs converting to opportunities"
      );
      aida.awareness.push("LinkedIn thought leadership posts");
      aida.interest.push("Lead magnet newsletters");
      aida.desire.push("Case studies & ROI calculators");
      aida.action.push("Book a demo/consultation CTA");
    }
    if (hasType("B2C") || hasType("D2C") || f.audienceSegment === "Mass market") {
      platforms.add("Instagram");
      platforms.add("YouTube");
      platforms.add("Meta Ads");
      strategyByPlatforms.push("Instagram: UGC + Reels always-on", "YouTube: Creator integrations", "Meta Ads: Prospecting + retargeting");
      elaboratedKPIs.push(
        "Reach: unique users exposed to top-of-funnel creatives",
        "Engagement Rate: interactions per impression across IG/YT",
        "Add-to-Cart: % of product viewers adding to cart",
        "Purchases: successful checkouts attributed to campaigns"
      );
      aida.awareness.push("Reels/Shorts for discovery", "Creator collaborations");
      aida.interest.push("Product demos & comparisons", "UGC testimonials");
      aida.desire.push("Social proof highlights", "Offer stacks & bundles");
      aida.action.push("Retargeting (viewed, ATC)", "WhatsApp/Email nudges");
      marketResearch.push("Mass-market users discover via short-form video and creators; prioritize mobile-first content");
    }
    if (f.audienceSegment === "High income" || f.audienceSegment === "Mid-high income") {
      platforms.add("Instagram");
      platforms.add("Google Ads");
      strategyByPlatforms.push("IG: premium positioning with social proof", "Google Ads: high-intent long-tail keywords");
      contentStrategy.push("Founder stories", "Premium lifestyle visuals", "Behind-the-scenes craftsmanship");
    }
    if (f.audienceSegment === "Low income" || f.audienceSegment === "Low-mid income") {
      platforms.add("YouTube");
      platforms.add("SEO");
      strategyByPlatforms.push("YouTube: long-form explainers", "SEO: problem-solution content hubs");
      contentStrategy.push("How-to guides", "Comparison blog posts", "FAQ-based shorts");
    }
    if (/students/i.test(f.audienceNature) || f.ageGroup.includes("18-25")) {
      platforms.add("Instagram");
      platforms.add("YouTube");
      platforms.add("TikTok (if available)");
      strategyByPlatforms.push("Ambassador programs", "Giveaways/Referrals");
      contentStrategy.push("Challenges", "Day-in-the-life", "POV shorts");
    }
    if (f.offering === "Service") {
      platforms.add("Google Ads");
      platforms.add("SEO");
      strategyByPlatforms.push("Local SEO & reviews", "Case studies & testimonials");
      elaboratedKPIs.push(
        "Leads: number of qualified inquiries from forms and calls",
        "Booked Calls: meetings scheduled via calendar",
        "Close Rate: % of proposals accepted"
      );
      aida.action.push("Book-a-call CTA + calendar", "Qualification form + nurtures");
    }
    if (f.offering === "Product" || f.offering === "App") {
      platforms.add("App Store Optimization");
      platforms.add("Influencer/Creator ads");
      strategyByPlatforms.push("ASO: keyword optimization & screenshots", "Influencer: UGC for trust", "Lifecycle email/Push");
      elaboratedKPIs.push(
        "Trials/Installs: first-time app/product activations",
        "Day-7 Retention: % of users active 7 days post-install",
        "Return on Ad Spend (ROAS): revenue divided by ad spend"
      );
      aida.interest.push("Free trial / demo video", "UGC testimonials");
      aida.action.push("Checkout CRO + urgency", "Cart abandonment automation");
    }
    // Industry-specific playbooks
    const industryKey = (f.industry || "").toLowerCase();
    if (/beauty|cosmetic|skincare|salon/.test(industryKey)) {
      platforms.add("Instagram");
      add(strategyByPlatforms, "Beauty: Before/after UGC, reels with routines, creator sampling");
      add(contentStrategy, "Skincare routines", "Ingredient education", "Before/after UGC");
      add(elaboratedKPIs, "Save rate on routines", "Trial-to-repeat rate");
    }
    if (/fintech|finance|trading|investment|bank/.test(industryKey)) {
      platforms.add("YouTube");
      add(strategyByPlatforms, "Fintech: Compliance-first education, calculators, retarget with credibility");
      add(contentStrategy, "Explainers with charts", "Risk disclosures made simple");
      add(elaboratedKPIs, "KYC completion rate", "Activation within 7 days");
    }
    if (/edtech|education|course|coaching|tutor/.test(industryKey)) {
      platforms.add("YouTube");
      add(strategyByPlatforms, "Edtech: Problem-solution tutorials, free classes funnel to cohorts");
      add(contentStrategy, "Tutorial series", "Student success stories", "Live Q&A");
      add(elaboratedKPIs, "Demo class attendance", "Course completion %");
    }
    if (/real\s?estate|property|housing/.test(industryKey)) {
      platforms.add("Google Ads");
      add(strategyByPlatforms, "Real Estate: Local SEO + lead forms, walkthrough videos, geo-targeted ads");
      add(contentStrategy, "Walkthrough reels", "Neighborhood guides", "Pricing breakdowns");
      add(elaboratedKPIs, "Site visits booked", "Lead qualification rate");
    }
    if (/health|wellness|fitness|yoga|clinic/.test(industryKey)) {
      platforms.add("SEO");
      add(strategyByPlatforms, "Health: E-A-T content, FAQs, reviews, WhatsApp appointment flow");
      add(contentStrategy, "Doctor tips", "Before/after testimonials", "Myth-busting");
      add(elaboratedKPIs, "Appointments", "Review velocity & average rating");
    }

    // Use brandObjective keywords to seed strategy and content
    if (topKeywords.length) {
      add(
        strategyByPlatforms,
        `Content pillars around: ${topKeywords.slice(0, 3).map(cap).join(", ")}`,
        topKeywords[3] && `SEO clusters for: ${topKeywords.slice(0, 4).join(", ")}`
      );
      add(
        contentStrategy,
        `FAQs addressing ${topKeywords.slice(0, 2).join(" & ")}`,
        topKeywords[2] && `Case studies referencing ${topKeywords[2]}`
      );
    }

    // Tone and format lines
    add(contentStrategy, `Tone: ${toneByAudience()}`, `Formats: ${formatByAge()}`);
    // Execution plan derived from objective and channels
    add(
      executionPlan,
      "Research ICP, competitors, keywords, creative angles",
      f.objective.includes("Lead Generation") && "Spin up offer + lead magnet; set up conversion tracking",
      f.objective.includes("Awareness") && "Plan always-on content calendar and creator partnerships",
      (f.objective.includes("Sales/Revenue") || f.offering === "Product") && "Build offer stacks, bundles, and cart recovery",
      f.objective.includes("Google Ranking (SEO)") && "Publish topic clusters; fix tech SEO and internal links",
      "Launch pilots across 2-3 priority channels; QA tracking",
      "Review results weekly; iterate creatives/funnels; scale winners"
    );

    // Objective-specific additions
    if (f.objective.includes("Lead Generation")) {
      strategyByPlatforms.push("Lead magnets & gated content", "Retargeting with social proof");
      elaboratedKPIs.push(
        "Cost per Lead (CPL): average ad spend required per qualified lead",
        "Lead-to-Meeting Rate: % of leads that book a call"
      );
      aida.action.push("Form submissions", "Instant meeting booking");
    }
    if (f.objective.includes("Sales/Revenue")) {
      strategyByPlatforms.push("Bundling/Offers", "Cart recovery & remarketing");
      elaboratedKPIs.push(
        "Average Order Value (AOV): mean basket size",
        "Revenue: gross sales attributed to campaigns"
      );
    }
    if (f.objective.includes("Google Ranking (SEO)")) {
      platforms.add("SEO");
      strategyByPlatforms.push("Topical authority via hubs", "On-page + technical SEO improvements");
      elaboratedKPIs.push(
        "Keyword Rankings: positions for priority terms",
        "Organic Sessions: traffic growth from search",
        "Organic Conversions: leads/sales from SEO"
      );
      contentStrategy.push("Topic clusters", "How-to/Comparison posts", "Answer People Also Ask");
    }

    // Important parameters tailored to objective
    add(
      importantParameters,
      (f.objective.includes("Lead Generation") || f.offering === "Service") && "Cost per Lead (CPL)",
      (f.objective.includes("Lead Generation") || f.objective.includes("Sales/Revenue")) && "Cost per Acquisition (CPA)",
      (f.objective.includes("Awareness")) && "Reach & Effective Frequency",
      (f.objective.includes("Google Ranking (SEO)")) && "Keyword Topical Authority Score",
      (f.objective.includes("Engagement")) && "Engagement Rate (ER) by reach",
      "Click-Through Rate (CTR)",
      "Conversion Rate",
      (f.offering === "Product" || f.offering === "App") && "Retention / Lifetime Value (LTV)"
    );

    // Our understanding and market research synthesis (personalized)
    ourUnderstanding.push(
      `Brand: ${f.brandName}`,
      `Primary objective: ${f.objective.length ? f.objective.join(", ") : "N/A"}`,
      `Offering: ${f.offering}`,
      `Industry: ${f.industry} (${f.industryType.join(", ") || "-"})`,
      `Audience: ${f.audienceSegment || "-"}, ${f.ageGroup.length ? f.ageGroup.join(", ") : "-"}`,
      `Audience nature: ${f.audienceNature || "-"}`,
      `Target platform focus: ${f.targetPlatform || "-"}`
    );

    // Market research — dynamically phrased based on inputs
    const audienceAge = f.ageGroup && f.ageGroup.length ? f.ageGroup.join(", ").replace(/-/g, "–") : "-";
    const industryLower = f.industry ? f.industry.toLowerCase() : "the niche";
    const actives = preferredPlatforms.length ? preferredPlatforms.join(", ") : Array.from(platforms).join(", ") || "Community/SEO";
    add(
      marketResearch,
      `Right audience: ${f.audienceSegment || "-"} likely aged ${audienceAge}`,
      f.audienceNature && `Personas: ${cap(f.audienceNature)}`,
      `Active platforms: ${actives}`,
      `What they are looking for: ${f.brandObjective || "value, clarity, and trust"}`,
      (f.offering === "Product" || f.offering === "App") && `Decision triggers: price–value clarity, social proof, ${industryLower} use-cases`,
      (f.offering === "Service") && `Decision triggers: expertise, case studies, response time`
    );

    // If user explicitly preferred a platform, enrich strategies for it
    if (preferredPlatforms.includes("Instagram")) {
      platforms.add("Instagram");
      strategyByPlatforms.push(
        "Instagram: Reels hooks (benefit-first), Stories polls/quiz, Highlights with social proof",
        "Instagram: Creator/UGC whitelisting for trust"
      );
      contentStrategy.push(
        "Short-form Reels (how-to, before/after, testimonials)",
        "Carousel education posts and FAQs"
      );
      aida.awareness.push("Reels with strong hooks and captions");
      aida.interest.push("Carousel education posts");
      aida.desire.push("UGC testimonials & influencer stitches");
      aida.action.push("Story CTAs, Link in bio/DM automation");
    }
    if (preferredPlatforms.includes("YouTube")) {
      platforms.add("YouTube");
      add(strategyByPlatforms, "YouTube: SEO-friendly titles, chapters, and community posts");
      add(contentStrategy, "Explainer videos", "Creator integrations");
      add(aida.awareness, "YouTube Shorts for discovery");
      add(aida.interest, "Mid-form demos and comparisons");
    }
    if (preferredPlatforms.includes("Google Ads")) {
      platforms.add("Google Ads");
      add(strategyByPlatforms, "Google Ads: SKAGs or tight themes, intent tiers (cold > warm)");
      add(contentStrategy, "Landing pages matching keyword intent");
      add(aida.action, "High-intent search with clear CTA");
    }

    // Build prioritized platform list
    // 1) Start with user preferred platforms (cleaned), excluding Email
    // 2) Add logical complements (e.g., Meta Ads for Instagram)
    // 3) Add remaining detected (excluding Email; if user preferred exists, de-prioritize LinkedIn unless necessary)
    const allDetected = Array.from(platforms).filter((p) => p !== "Email");
    const prioritized: string[] = [];
    if (preferredPlatforms.length) {
      preferredPlatforms.forEach((p) => {
        const cleaned = p === "Email" ? "" : p;
        if (cleaned && allDetected.includes(p) && !prioritized.includes(p)) prioritized.push(p);
        // if user typed a platform we didn't heuristically detect, still honor it
        if (cleaned && !allDetected.includes(p) && !prioritized.includes(p)) prioritized.push(p);
      });
      // complements
      if (prioritized.includes("Instagram") && !prioritized.includes("Meta Ads")) prioritized.push("Meta Ads");
      if (prioritized.includes("YouTube") && !prioritized.includes("Google Ads")) prioritized.push("Google Ads");
    }
    const remaining = allDetected.filter((p) => {
      if (p === "Email") return false;
      if (preferredPlatforms.length && p === "LinkedIn") return false; // de-prioritize LinkedIn when user has explicit prefs
      return !prioritized.includes(p);
    });
    remaining.forEach((p) => prioritized.push(p));
    const topPlatforms = (preferredPlatforms.length ? prioritized : allDetected).slice(0, 3);

    // Filter strategies to those tied to top platforms or generic essentials; limit size
    const platformRegex = new RegExp(topPlatforms.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "i");
    const filteredStrategies = strategyByPlatforms.filter((s) => platformRegex.test(s) || !/^[A-Za-z]+:/.test(s)).slice(0, 8);

    // Ads budget in INR if ads suggested
    let adsBudgetINR: { channel: string; budgetINR: string; notes?: string }[] | undefined;
    if (topPlatforms.some((p) => /meta ads|google ads|youtube/i.test(p))) {
      adsBudgetINR = [];
      if (topPlatforms.some((p) => /meta ads/i.test(p))) {
        adsBudgetINR.push({ channel: "Meta Ads (per campaign)", budgetINR: "₹10,000", notes: "Test 2-3 audiences/creatives" });
      }
      if (topPlatforms.some((p) => /google ads|youtube/i.test(p))) {
        adsBudgetINR.push({ channel: "Google Ads (per campaign)", budgetINR: "₹25,000", notes: "Search/Performance Max" });
      }
    }

    // Ensure arrays are unique and tidy
    const uniq = (arr: string[]) => Array.from(new Set(arr)).filter(Boolean);

    return {
      ourUnderstanding: uniq(ourUnderstanding),
      objectiveElaborated: uniq([
        `${f.objective}: ${f.brandObjective}. ${f.brandName ? `For ${f.brandName}, focus on ${(preferredPlatforms.length ? preferredPlatforms : topPlatforms).slice(0,2).join(" & ") || "the most relevant channels"} given ${f.audienceSegment || "the audience"}.` : ""}`,
      ]),
      marketResearch: uniq(marketResearch),
      platforms: topPlatforms,
      strategyByPlatforms: uniq(filteredStrategies.length ? filteredStrategies : pick(strategyByPlatforms, 5)),
      contentStrategy: uniq(contentStrategy.length ? contentStrategy : pick(contentStrategy, 6)),
      aidaFunnel: {
        awareness: uniq(aida.awareness),
        interest: uniq(aida.interest),
        desire: uniq(aida.desire),
        action: uniq(aida.action),
      },
      executionPlan: uniq(executionPlan),
      importantParameters: uniq(importantParameters),
      elaboratedKPIs: uniq(elaboratedKPIs),
      adsBudgetINR,
      alternatives: uniq([
        "Organic-first ramp (SEO + community) if paid budgets are constrained",
        "Influencer-led seeding to validate messaging before scaling ads",
        "Partnerships/Affiliates to tap into existing trust networks",
      ]),
      recommendation: f.objective.includes("Lead Generation") && f.leadGenBudgetINR
        ? `Run gated lead magnet + retargeting on ${topPlatforms.includes("Meta Ads") || topPlatforms.includes("Instagram") ? "Meta/Instagram" : topPlatforms[0] || "priority channels"}; allocate ~${f.leadGenBudgetINR} INR initially and scale winners.`
        : `Prioritize ${topPlatforms.slice(0,2).join(" & ") || "the most relevant channels"} with fast experiments; keep weekly creative sprints and CRO.`,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setError(null);
    setLoading(true);
    try {
      // Prefer serverless API (secure). If unavailable, try client Gemini, then heuristic.
      let r = await generatePlanViaApi(form);
      setRecos(r);
    } catch (err: any) {
      // In development, try client-side Gemini fallback; in production, skip to heuristic
      if ((import.meta as any)?.env?.DEV) {
        try {
          const viaClient = await generatePlanWithGemini(form);
          setRecos(viaClient);
          setError("Serverless API unavailable; used client key.");
        } catch (err2: any) {
          const msg = err2?.message || "";
          // If client key missing in dev, silently fall back to heuristic
          if (/missing\s+vite.*gemini.*api\s*key/i.test(msg)) {
            try {
              const fallback = recommend(form);
              setRecos(fallback);
            } catch {}
            setError("Client Gemini key missing in dev. Showing a heuristic plan.");
          } else {
            try {
              const fallback = recommend(form);
              setRecos(fallback);
            } catch {}
            setError(msg || err?.message || "Failed to generate with AI. Showing a heuristic plan.");
          }
        }
      } else {
        try {
          const fallback = recommend(form);
          setRecos(fallback);
        } catch {}
        setError(err?.message || "Failed to generate with AI. Showing a heuristic plan.");
      }
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setForm(initialState);
    setRecos(null);
    setError(null);
  };

  return (
    <div className="bg-white dark:bg-[#1e1e1e] min-h-screen flex flex-col transition-colors duration-300 pb-12 [padding-bottom:env(safe-area-inset-bottom)]">
      {/* Navigation (match site) */}
      <SectionComponentNodeSection />
      <Helmet>
        <title>Ask Sage | StartupSurge</title>
        <meta name="description" content="Enter your details to get a crisp, channel-wise action plan with KPIs, timelines, and budgets." />
      </Helmet>

      {/* Hero/Header */}
      <section className="w-full py-10 sm:py-16 md:py-20 lg:py-28 relative px-3 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl sm:max-w-[1752px] mx-auto text-center">
          <h1 className="font-['League_Spartan',Helvetica] text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] mb-4 sm:mb-8">
            <span className="font-semibold text-[#ffa500]">Ask</span> Sage
          </h1>
          <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white max-w-xl sm:max-w-3xl mx-auto leading-relaxed opacity-90">
            Enter your details to get a crisp, channel-wise action plan with KPIs, timelines, and budgets.
          </p>
        </div>
      </section>

      <main className="w-full px-3 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl sm:max-w-[1752px] mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold [font-family:'League_Spartan',Helvetica] mb-6">Your inputs</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7">
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="brandName" className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Brand Name</label>
            <input id="brandName" name="brandName" type="text" value={form.brandName} onChange={onChange} placeholder="e.g., Acme Co." className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]" />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label htmlFor="brandObjective" className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Brand Objective (context)</label>
            <textarea id="brandObjective" name="brandObjective" value={form.brandObjective} onChange={onChange} placeholder="Briefly describe the brand objective/context" className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]" />
          </div>

          {/* Target Platform input removed as per request */}

          <div className="flex flex-col">
            <label htmlFor="industry" className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Industry</label>
            <input id="industry" name="industry" type="text" value={form.industry} onChange={onChange} placeholder="e.g., Fintech, Beauty, Edtech" className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]" />
          </div>

          <div className="flex flex-col" ref={industryRef}>
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Industry Type</label>
            <button
              type="button"
              onClick={() => setIndustryOpen((o) => !o)}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500] flex items-center justify-between"
            >
              <span className="text-left truncate">
                {form.industryType.length ? `${form.industryType.length} selected` : "Select types"}
              </span>
              <svg className={`w-4 h-4 transition-transform ${industryOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>
            {industryOpen && (
              <div className="mt-1 max-h-56 overflow-auto rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow">
                {industryTypeOptions.map((opt) => {
                  const selected = form.industryType.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => (selected ? removeIndustryType(opt) : addIndustryType(opt))}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-orange-50/70 dark:hover:bg-[#2a2a2a] ${selected ? "bg-orange-50/70 dark:bg-[#232323]" : ""}`}
                    >
                      <span>{opt}</span>
                      {selected && <span className="text-[#ffa500] font-semibold">✓</span>}
                    </button>
                  );
                })}
              </div>
            )}
            {form.industryType.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {form.industryType.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 dark:bg-[#2a2a2a] dark:text-orange-300 text-xs font-medium">
                    {t}
                    <button type="button" className="ml-1 text-orange-700 dark:text-orange-300" onClick={() => removeIndustryType(t)} aria-label={`Remove ${t}`}>
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="offering" className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Offering</label>
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
            <label htmlFor="audienceSegment" className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Audience Segment</label>
            <select id="audienceSegment" name="audienceSegment" value={form.audienceSegment} onChange={onChange} className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]">
              <option value="">Select</option>
              <option value="High income">High income</option>
              <option value="Mid-high income">Mid-high income</option>
              <option value="Mid income">Mid income</option>
              <option value="Low-mid income">Low-mid income</option>
              <option value="Low income">Low income</option>
              <option value="Mass market">Mass market</option>
              <option value="Niche">Niche</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="audienceNature" className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Audience Nature (free text)</label>
            <input id="audienceNature" name="audienceNature" type="text" value={form.audienceNature} onChange={onChange} placeholder="e.g., Professionals, Students, Hobbyists" className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]" />
          </div>

          <div className="flex flex-col" ref={ageRef}>
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Age Group</label>
            <button
              type="button"
              onClick={() => setAgeOpen((o) => !o)}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500] flex items-center justify-between"
            >
              <span className="text-left truncate">
                {form.ageGroup.length ? `${form.ageGroup.length} selected` : "Select age ranges"}
              </span>
              <svg className={`w-4 h-4 transition-transform ${ageOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>
            {ageOpen && (
              <div className="mt-1 max-h-56 overflow-auto rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow">
                {ageGroupOptions.map((opt) => {
                  const selected = form.ageGroup.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => (selected ? removeAgeGroup(opt) : addAgeGroup(opt))}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-orange-50/70 dark:hover:bg-[#2a2a2a] ${selected ? "bg-orange-50/70 dark:bg-[#232323]" : ""}`}
                    >
                      <span>{opt}</span>
                      {selected && <span className="text-[#ffa500] font-semibold">✓</span>}
                    </button>
                  );
                })}
              </div>
            )}
            {form.ageGroup.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {form.ageGroup.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 dark:bg-[#2a2a2a] dark:text-orange-300 text-xs font-medium">
                    {t}
                    <button type="button" className="ml-1 text-orange-700 dark:text-orange-300" onClick={() => removeAgeGroup(t)} aria-label={`Remove ${t}`}>
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col md:col-span-2" ref={objectiveRef}>
            <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Objective</label>
            <button
              type="button"
              onClick={() => setObjectiveOpen((o) => !o)}
              className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500] flex items-center justify-between"
            >
              <span className="text-left truncate">
                {form.objective.length ? `${form.objective.length} selected` : "Select objectives"}
              </span>
              <svg className={`w-4 h-4 transition-transform ${objectiveOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>
            {objectiveOpen && (
              <div className="mt-1 max-h-56 overflow-auto rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow">
                {objectiveOptions.map((opt) => {
                  const selected = form.objective.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => (selected ? removeObjective(opt) : addObjective(opt))}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-orange-50/70 dark:hover:bg-[#2a2a2a] ${selected ? "bg-orange-50/70 dark:bg-[#232323]" : ""}`}
                    >
                      <span>{opt}</span>
                      {selected && <span className="text-[#ffa500] font-semibold">✓</span>}
                    </button>
                  );
                })}
              </div>
            )}
            {form.objective.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {form.objective.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 dark:bg-[#2a2a2a] dark:text-orange-300 text-xs font-medium">
                    {t}
                    <button type="button" className="ml-1 text-orange-700 dark:text-orange-300" onClick={() => removeObjective(t)} aria-label={`Remove ${t}`}>
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {form.objective.includes("Lead Generation") && (
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="leadGenBudgetINR" className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Lead Gen Budget (INR)</label>
              <input id="leadGenBudgetINR" name="leadGenBudgetINR" type="number" value={form.leadGenBudgetINR} onChange={onChange} placeholder="e.g., 50000" className="px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-[#ffa500]" />
            </div>
          )}

          <div className="md:col-span-2 flex gap-4 mt-1 items-center">
            <button
              type="submit"
              disabled={!isValid || loading}
              className={`px-6 py-3 rounded-md text-white transition-colors ${
                isValid && !loading ? "bg-[#ffa500] hover:bg-[#ff9500]" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? "Generating..." : "Generate Plan"}
            </button>
            {submitted && (
              <button type="button" onClick={reset} className="px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700">
                Reset
              </button>
            )}
            {error && (
              <span className="text-red-600 text-sm">{error}</span>
            )}
          </div>
          </form>

          {recos && (
            <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-7 md:gap-8">
              <Card title="Our Understanding" items={recos.ourUnderstanding} />
              <Card title="Objective" items={recos.objectiveElaborated} />
              <Card title="Market Research" items={recos.marketResearch} />

              <Card title="Preferable Platforms" items={recos.platforms} />
              <Card title="Strategy by Platforms" items={recos.strategyByPlatforms} />
              <Card title="Content Strategy" items={recos.contentStrategy} />

              <GroupAIDA title="Funnel Plan (AIDA)" groups={[
                { heading: 'Awareness', items: recos.aidaFunnel.awareness },
                { heading: 'Interest', items: recos.aidaFunnel.interest },
                { heading: 'Desire', items: recos.aidaFunnel.desire },
                { heading: 'Action', items: recos.aidaFunnel.action },
              ]} />

              <Card title="Execution Plan" items={recos.executionPlan} />
              <Card title="Important Parameters" items={recos.importantParameters} />
              <Card title="Expected KPIs (Elaborated)" items={recos.elaboratedKPIs} />

              {recos.adsBudgetINR && <AdsBudget title="Ads Budget (INR)" rows={recos.adsBudgetINR} />}

              <Card title="Alternatives" items={recos.alternatives} />
              <Single title="What We Recommend" value={recos.recommendation} />
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
  <div className="p-6 md:p-7 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm">
    <h3 className="text-xl font-semibold mb-4 [font-family:'League_Spartan',Helvetica]">{title}</h3>
    <ul className="list-disc pl-5 space-y-2.5 text-gray-700 dark:text-gray-300">
      {items.map((it, idx) => (
        <li key={idx}>{it}</li>
      ))}
    </ul>
  </div>
);

const Single: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="p-6 md:p-7 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm">
    <h3 className="text-xl font-semibold mb-3 [font-family:'League_Spartan',Helvetica]">{title}</h3>
    <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{value}</p>
  </div>
);

const GroupAIDA: React.FC<{ title: string; groups: { heading: string; items: string[] }[] }> = ({ title, groups }) => (
  <div className="w-full p-6 md:p-7 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm">
    <h3 className="text-xl font-semibold mb-4 [font-family:'League_Spartan',Helvetica]">{title}</h3>
    <div className="grid gap-5 md:gap-6 auto-rows-auto [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
      {groups.map((g, i) => (
        <div key={i} className="h-auto">
          <h4 className="font-semibold mb-2.5">{g.heading}</h4>
          <ul className="list-disc pl-5 space-y-2.5 text-gray-700 dark:text-gray-300 break-words whitespace-normal leading-relaxed">
            {g.items.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const AdsBudget: React.FC<{ title: string; rows: { channel: string; budgetINR: string; notes?: string }[] }> = ({ title, rows }) => (
  <div className="p-6 md:p-7 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1b1b1b] shadow-sm">
    <h3 className="text-xl font-semibold mb-4 [font-family:'League_Spartan',Helvetica]">{title}</h3>
    <div className="grid grid-cols-1 gap-3">
      {rows.map((r, i) => (
        <div key={i} className="flex items-start justify-between gap-4 p-3.5 rounded-lg bg-orange-50/60 dark:bg-[#2a2a2a]">
          <div className="font-medium">{r.channel}</div>
          <div className="text-[#ffa500] font-semibold">{r.budgetINR}</div>
          <div className="text-gray-700 dark:text-gray-300 text-sm">{r.notes}</div>
        </div>
      ))}
    </div>
  </div>
);
