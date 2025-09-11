// GoogleGenerativeAI import removed as it's not being used

/**
 * FormState defines the structure of the marketing plan form data
 */
export interface FormState {
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
  audienceNature: string;
  ageGroup: ("Below 18" | "18-25" | "26-35" | "36-45" | "46-60" | "60+" | "Any Age Group")[];
  objective: (
    | "Lead Generation"
    | "Awareness"
    | "Google Ranking (SEO)"
    | "App Installs"
    | "Sales/Revenue"
    | "Engagement"
  )[];
  marketingApproach?: 'Organic' | 'Paid';
  leadGenBudgetINR?: string;
}

export interface Recommendations {
  ourUnderstanding: string[];
  objectiveElaborated: string[];
  marketResearch: string[];
  platforms: string[];
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
}

/**
 * Generates platform-specific marketing strategies
 * @param platform - The platform to generate strategy for
 * @param isPaid - Whether the strategy is for paid marketing
 * @param _budget - Optional budget parameter (currently unused)
 */
const generatePlatformStrategy = (platform: string, isPaid: boolean, _budget?: string): string[] => {
  const organicStrategy = [
    `${platform} Organic`,
    'Account Hygiene Check',
    'Competitor Analysis',
    'Create Content Calendar',
    platform === 'LinkedIn'
      ? '8 Posts or Articles / Month'
      : '12 Posts or Reels / Month',
    platform !== 'LinkedIn' ? '15 Stories / Month' : '',
    'Schedule Your Posting',
    'Monitor & Analyze Performance'
  ].filter(Boolean);

  if (!isPaid) return organicStrategy;

  return [
    ...organicStrategy,
    '',
    'Paid',
    'Phase - I',
    'Setup Meta Account',
    'Competitor Analysis',
    'Curate Ads Post Content & Set Targeting',
    'Run 2-3 Campaign - Broad Targeting',
    'Monitor & Analyze Performance',
    '',
    'Phase - II',
    'Run 1-2 Optimized Campaign - Selective targeting',
    'Monitor & Analyze Performance'
  ].filter(Boolean);
};

// Helper: Market research block generator
const buildMarketResearch = (form: FormState): string[] => [
  '## Market Research',
  '### Potential Audience',
  `- Primary: ${Array.isArray(form.audienceSegment) ? form.audienceSegment.join(', ') : form.audienceSegment || 'Not specified'}`,
  `- Age Group: ${form.ageGroup?.length ? form.ageGroup.join(', ') : 'Not specified'}`,
  `- Nature: ${form.audienceNature || 'Not specified'}`,
  '### Competition Analysis',
  '- Top 3 competitors in the space',
  '- Their market positioning and USPs',
  '- Gaps in their strategies',
  '### Market Share',
  "- Current market size and growth potential",
  "- Your brand's potential market share",
  '### Opportunity',
  '- Key growth areas',
  '- Untapped audience segments',
  '- Potential partnerships'
];

// Helper: Execution plan generator
const buildExecutionPlan = (platforms: string[], isPaid: boolean): string[] => {
  return [
    '## Execution Plan',
    ...platforms.flatMap(platform => {
      const plan = [
        `### ${platform}`,
        '#### Organic Strategy',
        `- Content calendar for ${platform}`,
        `- Community engagement plan`,
        `- Hashtag and SEO strategy`
      ];

      if (isPaid) {
        plan.push(
          '#### Paid Strategy',
          '- Campaign structure',
          '- Audience targeting',
          '- Ad creatives and copy',
          '- Budget allocation',
          '- Bidding strategy'
        );
      }

      return plan;
    })
  ];
};

// Helper: KPI block generator
const buildKPIs = (): string[] => [
  '# KPIs & Metrics',
  '## Engagement',
  '- Reach and impressions',
  '- Engagement rate',
  '- Follower growth',
  '## Conversion',
  '- Click-through rate (CTR)',
  '- Lead generation rate',
  '- Cost per lead (CPL)',
  '- Conversion rate',
  '## Revenue',
  '- Customer acquisition cost (CAC)',
  '- Return on ad spend (ROAS)',
  '- Lifetime value (LTV)'
];

// Budget allocation helper
const computeBudgetAllocation = (platforms: string[], budgetStr?: string): string => {
  const budget = parseInt(budgetStr || '0') || 0;
  if (!budget) return 'Budget not specified';

  const allocations: string[] = [];

  if (platforms.includes('Instagram') || platforms.includes('Facebook')) {
    const metaBudget = Math.max(10000, Math.floor(budget * 0.2));
    allocations.push(`- Meta Ads (Facebook/Instagram): ₹${metaBudget.toLocaleString()} (min ₹10,000 or 20% of budget)`);
  }

  if (platforms.includes('LinkedIn')) {
    const linkedinBudget = Math.max(15000, Math.floor(budget * 0.3));
    allocations.push(`- LinkedIn Ads: ₹${linkedinBudget.toLocaleString()} (min ₹15,000 or 30% of budget)`);
  }

  if (platforms.includes('Google')) {
    const googleBudget = Math.max(25000, Math.floor(budget * 0.5));
    allocations.push(`- Google Ads: ₹${googleBudget.toLocaleString()} (min ₹25,000 or 50-70% of budget)`);
  }

  if (platforms.includes('WhatsApp')) {
    allocations.push('- WhatsApp: Up to ₹5,000/month');
  }

  return allocations.join('\n');
};

/**
 * Main export: generates a Recommendations object from FormState
 */
export const generatePlan = async (form: FormState): Promise<Recommendations> => {
  const isPaid = form.marketingApproach === 'Paid';
  const platforms = form.targetPlatform ? [form.targetPlatform] : ['Instagram', 'Facebook', 'LinkedIn', 'Google', 'WhatsApp'];

  const platformStrategies = platforms.map(platform => {
    const strategy = generatePlatformStrategy(platform, isPaid, form.leadGenBudgetINR);
    return `### ${platform} Strategy\n${strategy.join('\n')}`;
  });

  const marketResearch = buildMarketResearch(form);
  const executionPlan = buildExecutionPlan(platforms, isPaid);
  const kpis = buildKPIs();

  const adsBudgetINR = isPaid ? [
    {
      channel: 'Meta Ads (Facebook/Instagram)',
      budgetINR: Math.max(10000, Math.floor((parseInt(form.leadGenBudgetINR || '0') * 0.2))).toString(),
      notes: 'Minimum ₹10,000 or 20% of total budget'
    },
    ...(platforms.includes('LinkedIn') ? [{
      channel: 'LinkedIn Ads',
      budgetINR: Math.max(15000, Math.floor((parseInt(form.leadGenBudgetINR || '0') * 0.3))).toString(),
      notes: 'Minimum ₹15,000 or 30% of total budget'
    }] : []),
    ...(platforms.includes('Google') ? [{
      channel: 'Google Ads',
      budgetINR: Math.max(25000, Math.floor((parseInt(form.leadGenBudgetINR || '0') * 0.5))).toString(),
      notes: 'Minimum ₹25,000 or 50-70% of total budget'
    }] : []),
    ...(platforms.includes('WhatsApp') ? [{
      channel: 'WhatsApp Business',
      budgetINR: '5000',
      notes: 'Up to ₹5,000/month'
    }] : [])
  ] : undefined;

  const recommendations: Recommendations = {
    recommendation: `Based on your inputs, we recommend a ${isPaid ? 'paid' : 'focused organic'} marketing strategy on ${platforms.join(', ')} to achieve your ${form.objective?.join(' and ') || 'marketing'} objectives.`,

    ourUnderstanding: [
      `# Our Understanding`,
      `**Brand**: ${form.brandName || 'Not specified'}`,
      `**Industry**: ${form.industry || 'Not specified'} (${Array.isArray(form.industryType) ? form.industryType.join(', ') : form.industryType || 'Not specified'})`,
      `**Offering**: ${form.offering || 'Not specified'}`,
      `**Objectives**: ${form.objective?.join(', ') || 'Not specified'}`,
      `**Marketing Approach**: ${form.marketingApproach || 'Not specified'}`,
      ...(form.leadGenBudgetINR ? [`**Budget**: ₹${parseInt(form.leadGenBudgetINR).toLocaleString()}`] : [])
    ].filter(Boolean) as string[],

    objectiveElaborated: [
      '# Strategy',
      `## Selected Platforms: ${platforms.join(', ')}`,
      '## Recommended Platforms:',
      ...platforms.map(platform => {
        const platformInfo: Record<string, string> = {
          'Instagram': 'For visual storytelling and engagement',
          'Facebook': 'For community building and targeted ads',
          'LinkedIn': 'For B2B networking and professional content',
          'Google': 'For search and display advertising',
          'WhatsApp': 'For direct communication and updates'
        };
        return `- ${platform}: ${platformInfo[platform] || 'For marketing purposes'}`;
      })
    ],

    marketResearch,
    platforms,
    strategyByPlatforms: platformStrategies,

    contentStrategy: [
      '## Content Strategy',
      '- Platform-specific content creation',
      '- Consistent brand messaging',
      '- Content calendar management',
      '- Performance tracking and optimization'
    ],

    aidaFunnel: {
      awareness: [
        'Create brand awareness through targeted content',
        'Leverage social media and search engine visibility'
      ],
      interest: [
        'Engage audience with interactive content',
        'Provide valuable information and solutions'
      ],
      desire: [
        'Showcase unique value proposition',
        'Share customer success stories and testimonials'
      ],
      action: [
        'Clear call-to-actions',
        'Simplified conversion process'
      ]
    },

    executionPlan,

    importantParameters: [
      '# Important Parameters',
      '## Budget Allocation',
      computeBudgetAllocation(platforms, form.leadGenBudgetINR),
      '## Target Audience',
      `- ${Array.isArray(form.audienceSegment) ? form.audienceSegment.join(', ') : form.audienceSegment || 'Not specified'}`,
      `- ${form.ageGroup?.length ? form.ageGroup.join(', ') : 'Not specified'}`,
      `- ${form.audienceNature || 'Not specified'}`,
      '## Key Performance Indicators',
      ...kpis.slice(1) // Skip KPI header since included above
    ],

    elaboratedKPIs: kpis,

    adsBudgetINR,

    alternatives: [
      '# Alternative Strategies',
      '## Platform Alternatives',
      ...(['Instagram', 'Facebook', 'LinkedIn', 'Google', 'WhatsApp']
        .filter(p => !platforms.includes(p))
        .map(platform => `- ${platform} for additional reach and engagement`)),
      '## Budget Reallocation',
      '- Shift budget based on platform performance',
      '- Test different ad formats and creatives',
      '## Content Variations',
      '- Try different content formats (videos, carousels, stories)',
      '- A/B test different messaging and CTAs'
    ]
  };

  return recommendations;
};

// Client-side helper to call the serverless function
export async function generatePlanViaApi(form: FormState): Promise<any> {
  const base = (import.meta as any)?.env?.VITE_API_BASE_URL || '';
  const url = base ? `${base.replace(/\/$/, '')}/api/generate-plan` : '/api/generate-plan';
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  if (!res.ok) {
    let msg = `Request failed (${res.status})`;
    try { const j = await res.json(); if (j?.error) msg = j.error; } catch {}
    throw new Error(msg);
  }
  return await res.json();
}
