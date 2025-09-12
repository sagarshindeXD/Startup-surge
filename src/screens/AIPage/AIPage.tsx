import React, { useRef, useState, useMemo, FormEvent, ChangeEvent } from "react";
import { Helmet } from "react-helmet-async";

// =============================================================================
// Type Definitions
// =============================================================================

type AidaFunnel = {
  awareness: string[];
  interest: string[];
  desire: string[];
  action: string[];
};

type Recommendations = {
  ourUnderstanding: string[];
  objectiveElaborated: string[];
  marketResearch: string[];
  marketResearchDetailed: {
    potentialAudience: string[];
    competition: string[];
    marketShare: string[];
    opportunity: string[];
  };
  aidaFunnel: AidaFunnel;
  executionPlan: string[];
  executionPlanByPlatform: string[];
  importantParameters: string[];
  elaboratedKPIs: string[];
  adsBudgetINR: string[];
  alternatives: string[];
  recommendation: string;
};

type FormState = {
  brandName: string;
  brandObjective: string;
  targetPlatform: ('Instagram' | 'Facebook' | 'LinkedIn' | 'WhatsApp' | 'Google' | 'Pinterest' | 'TikTok')[];
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
  ageGroup: ("Below 18" | "18-25" | "26-35" | "36-45" | "46-60" | "60+" | "Any Age Group")[];
  objective: (
    | "Lead Generation"
    | "Awareness"
    | "Google Ranking (SEO)"
    | "App Installs"
    | "Sales/Revenue"
    | "Engagement"
  )[];
  marketingApproach: 'Organic' | 'Paid' | 'Hybrid' | '';
  overallBudgetINR: string; // optional monthly ads budget for precise allocations
};

const initialState: FormState = {
  brandName: "",
  brandObjective: "",
  targetPlatform: [],
  industry: "",
  industryType: [],
  offering: "",
  audienceSegment: "",
  audienceNature: "",
  ageGroup: [],
  objective: [],
  marketingApproach: "",
  overallBudgetINR: "",
};

// =============================================================================
// React Component
// =============================================================================

const AIPage: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [dashboardData, setDashboardData] = useState<{
    competition: { name: string; strength: number; weakness: string }[];
    roi: { month: string; projected: number; actual: number }[];
    marketShare: { name: string; value: number }[];
    kpis: { name: string; current: number; target: number; unit: string }[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // =========================================================================
  // Form Options
  // =========================================================================

  const industryTypeOptions: FormState["industryType"] = [
    "B2C",
    "B2B",
    "D2C",
    "Marketplace",
    "Non-profit",
    "SaaS"
  ] as const;

  const ageGroupOptions: FormState["ageGroup"] = [
    "Any Age Group",
    "Below 18",
    "18-25",
    "26-35",
    "36-45",
    "46-60",
    "60+"
  ];

  const objectiveOptions: FormState["objective"] = [
    "Lead Generation",
    "Awareness",
    "Google Ranking (SEO)",
    "App Installs",
    "Sales/Revenue",
    "Engagement",
  ];

  const platformOptions: FormState["targetPlatform"] = [
    "Instagram",
    "Facebook",
    "LinkedIn",
    "WhatsApp",
    "Google",
    "Pinterest",
    "TikTok"
  ];
  
  // =========================================================================
  // Form Handlers
  // =========================================================================

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = <K extends keyof FormState>(
    name: K,
    value: FormState[K] extends (infer U)[] ? U : never
  ) => {
    setForm(prev => {
      const currentArray = [...(prev[name] as unknown[]) || []];
      const isSelected = currentArray.includes(value);

      if (isSelected) {
        // If "Any Age Group" is selected, and another is clicked, deselect "Any Age Group"
        if (name === "ageGroup" && value !== "Any Age Group" && currentArray.includes("Any Age Group")) {
          return { ...prev, [name]: [value] };
        }
        // Deselect a normal item
        return { ...prev, [name]: currentArray.filter(item => item !== value) };
      } else {
        // If "Any Age Group" is clicked, deselect all others
        if (name === "ageGroup" && value === "Any Age Group") {
          return { ...prev, [name]: [value] };
        }
        // Select a new item
        return { ...prev, [name]: [...currentArray, value] };
      }
    });
  };

  const isValid = useMemo(() => {
    return [
      { value: form.brandName, message: 'Brand name is required' },
      { value: form.brandObjective, message: 'Brand objective is required' },
      { value: form.industry, message: 'Industry is required' },
      { value: form.industryType.length > 0, message: 'At least one industry type must be selected' },
      { value: form.offering, message: 'Please select what you are offering' },
      { value: form.audienceSegment, message: 'Audience segment is required' },
      { value: form.audienceNature.trim(), message: 'Audience nature is required' },
      { value: form.ageGroup.length > 0, message: 'At least one age group must be selected' },
      { value: form.objective.length > 0, message: 'At least one objective must be selected' },
      { 
        value: form.marketingApproach !== 'Paid' || (form.marketingApproach === 'Paid' && form.overallBudgetINR.trim() !== ''),
        message: 'Budget is required for paid marketing'
      }
    ].every(({ value }) => Boolean(value));
  }, [form]);

  // =========================================================================
  // Mock Data & API Call
  // =========================================================================

  const generateDashboardData = (formData: FormState) => {
    const competitors = [
      { name: formData.brandName || 'Your Brand', strength: 8, weakness: 'New market entrant' },
      { name: 'Market Leader', strength: 9, weakness: 'Slow to innovate' },
      { name: 'Budget Option', strength: 6, weakness: 'Lower quality' },
      { name: 'Premium Brand', strength: 7, weakness: 'Higher prices' },
    ];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const roi = months.map((month) => ({
      month: `${month} 2024`,
      projected: Math.floor(10000 + Math.random() * 50000),
      actual: Math.floor(8000 + Math.random() * 40000)
    }));

    const marketShare = [
      { name: formData.brandName || 'Your Brand', value: 15 },
      { name: 'Competitor A', value: 25 },
      { name: 'Competitor B', value: 20 },
      { name: 'Competitor C', value: 15 },
      { name: 'Others', value: 25 },
    ];

    const kpis = [
      { name: 'Website Traffic', current: 12500, target: 25000, unit: 'visitors' },
      { name: 'Lead Generation', current: 350, target: 750, unit: 'leads' },
      { name: 'Conversion Rate', current: 2.8, target: 5, unit: '%' },
      { name: 'Customer Acquisition Cost', current: 120, target: 75, unit: 'INR' },
    ];

    return {
      competition: competitors,
      roi,
      marketShare,
      kpis
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setError(null);
    setLoading(true);

    try {
      if (!isValid) {
        const validationErrors = [
          { condition: !form.brandName.trim(), message: 'Brand name is required' },
          { condition: !form.brandObjective.trim(), message: 'Brand objective is required' },
          { condition: !form.industry.trim(), message: 'Industry is required' },
          { condition: form.industryType.length === 0, message: 'At least one industry type must be selected' },
          { condition: !form.offering, message: 'Please select what you are offering' },
          { condition: !form.audienceSegment, message: 'Audience segment is required' },
          { condition: !form.audienceNature.trim(), message: 'Audience nature is required' },
          { condition: form.ageGroup.length === 0, message: 'At least one age group must be selected' },
          { condition: form.objective.length === 0, message: 'At least one objective must be selected' }
        ].filter(item => item.condition).map(item => item.message);

        if (validationErrors.length > 0) {
          setError(validationErrors[0]);
          return;
        }
      }

      const dashboard = await new Promise(resolve => {
        // Simulate API call
        setTimeout(() => {
          resolve(generateDashboardData(form));
        }, 1000);
      });

      setDashboardData(dashboard as any);
      setShowDashboard(true);
      
      // Scroll to dashboard
      const dashboardElement = document.getElementById('marketing-dashboard');
      if (dashboardElement) {
        dashboardElement.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      console.error('Error generating dashboard:', err);
      setError('Failed to process your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setForm(initialState);
    setDashboardData(null);
    setError(null);
    setShowDashboard(false);
  };

  // =========================================================================
  // JSX Rendering
  // =========================================================================

  return (
    <div className="bg-white dark:bg-[#1e1e1e] min-h-screen flex flex-col transition-colors duration-300 pb-12 [padding-bottom:env(safe-area-inset-bottom)]">
      <Helmet>
        <title>AI Marketing Plan Generator | StartupSurge</title>
        <meta name="description" content="Generate a custom marketing plan using AI" />
      </Helmet>

      <div className="w-full px-3 sm:px-6 md:px-10 lg:px-16 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-['League_Spartan',Helvetica] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[32px] sm:leading-[60px] md:leading-[70px] lg:leading-[80px] tracking-[0] text-white">
              AI Marketing Plan Generator
            </h1>
            <div className="h-1 w-16 sm:w-24 md:w-32 rounded-full bg-gradient-to-r from-[#ffa500] to-orange-400 mt-2 sm:mt-4 mx-auto mb-4 sm:mb-6"></div>
            <p className="font-['League_Spartan',Helvetica] text-base sm:text-lg md:text-xl text-gray-600 dark:text-white max-w-xl sm:max-w-3xl mx-auto leading-relaxed opacity-90">
              Enter Your Details To Get A Crisp, Channel-Wise Action Plan With KPIs, Timelines, And Budgets.
            </p>
          </div>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Your Inputs</h2>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-8 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700 dark:text-red-200">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Brand Name */}
              <div>
                <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Brand Name *
                </label>
                <input
                  type="text"
                  id="brandName"
                  name="brandName"
                  value={form.brandName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your brand name"
                  required
                />
              </div>

              {/* Brand Objective */}
              <div>
                <label htmlFor="brandObjective" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Brand Objective *
                </label>
                <textarea
                  id="brandObjective"
                  name="brandObjective"
                  value={form.brandObjective}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Describe your brand's main objective"
                  required
                />
              </div>

              {/* Industry */}
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry *
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={form.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., E-commerce, SaaS, Education"
                  required
                />
              </div>

              {/* Industry Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Industry Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {industryTypeOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.industryType.includes(option)}
                        onChange={() => handleMultiSelect('industryType', option)}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                        required={form.industryType.length === 0}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Offering */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  What are you offering? *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {['Product', 'Service', 'App', 'Content', 'Course'].map((option) => (
                    <label key={option} className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="offering"
                        value={option}
                        checked={form.offering === option}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                        required
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Audience Segment */}
              <div>
                <label htmlFor="audienceSegment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Audience Segment *
                </label>
                <select
                  id="audienceSegment"
                  name="audienceSegment"
                  value={form.audienceSegment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="">Select an audience segment</option>
                  {["High income", "Mid-high income", "Mid income", "Low-mid income", "Low income", "Mass market", "Niche"].map((segment) => (
                    <option key={segment} value={segment}>{segment}</option>
                  ))}
                </select>
              </div>

              {/* Audience Nature */}
              <div>
                <label htmlFor="audienceNature" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Audience Nature *
                </label>
                <input
                  type="text"
                  id="audienceNature"
                  name="audienceNature"
                  value={form.audienceNature}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., Professionals, Students, Hobbyists"
                  required
                />
              </div>

              {/* Age Group */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Age Group *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {ageGroupOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.ageGroup.includes(option)}
                        onChange={() => handleMultiSelect('ageGroup', option)}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                        required={form.ageGroup.length === 0}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Objective */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Marketing Objective *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {objectiveOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.objective.includes(option)}
                        onChange={() => handleMultiSelect('objective', option)}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                        required={form.objective.length === 0}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Target Platforms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Target Platforms *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {platformOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.targetPlatform.includes(option)}
                        onChange={() => handleMultiSelect('targetPlatform', option)}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded"
                        required={form.targetPlatform.length === 0}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Marketing Approach (optional) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Marketing Approach (Optional)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {['Organic', 'Paid', 'Hybrid'].map((option) => (
                    <label key={option} className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="marketingApproach"
                        value={option}
                        checked={form.marketingApproach === option}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Overall Budget (optional) */}
              <div>
                <label htmlFor="overallBudgetINR" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Overall Budget (INR, Optional)
                </label>
                <input
                  type="text"
                  id="overallBudgetINR"
                  name="overallBudgetINR"
                  value={form.overallBudgetINR}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 50000"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  type="button"
                  onClick={reset}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Generating...' : 'Generate Marketing Plan'}
                </button>
              </div>
            </form>
          </section>

          {/* Dashboard Section */}
          {showDashboard && dashboardData && (
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Your Marketing Dashboard</h2>
              <div className="space-y-8">
                {/* Competition Analysis */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Competition Analysis</h3>
                  <div className="bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                      <thead className="bg-gray-50 dark:bg-gray-600">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Competitor</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Strength</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Weakness</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                        {dashboardData.competition.map((competitor, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{competitor.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{competitor.strength}/10</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{competitor.weakness}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* ROI Projection */}
                <div>
                  <h3 className="text-lg font-medium mb-4">ROI Projection (INR)</h3>
                  <div className="bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {dashboardData.roi.map((item, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.month}</p>
                          <p className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                            ₹{item.actual.toLocaleString()}
                            <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                              (Projected: ₹{item.projected.toLocaleString()})
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Market Share */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Market Share</h3>
                  <div className="bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {dashboardData.marketShare.map((item, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.name}</p>
                          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{item.value}%</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* KPIs */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Key Performance Indicators</h3>
                  <div className="bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                      <thead className="bg-gray-50 dark:bg-gray-600">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">KPI</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Current</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Target</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Progress</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                        {dashboardData.kpis.map((kpi, index) => {
                          const progress = Math.min(100, (kpi.current / kpi.target) * 100);
                          return (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{kpi.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                {kpi.current.toLocaleString()} {kpi.unit}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                                {kpi.target.toLocaleString()} {kpi.unit}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                                  <div
                                    className={`h-2.5 rounded-full ${progress >= 100 ? 'bg-green-500' : 'bg-orange-500'}`}
                                    style={{ width: `${Math.min(100, progress)}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{progress.toFixed(1)}%</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={reset}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Start Over
                </button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export { AIPage };