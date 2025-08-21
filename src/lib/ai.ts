import { GoogleGenerativeAI } from "@google/generative-ai";

export type FormState = {
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
  ageGroup: "Below 18" | "18-25" | "26-35" | "36-45" | "46-60" | "60+" | "";
  objective:
    | "Lead Generation"
    | "Awareness"
    | "Google Ranking (SEO)"
    | "App Installs"
    | "Sales/Revenue"
    | "Engagement"
    | "";
  leadGenBudgetINR?: string;
};

export type Recommendations = {
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
};

function buildPrompt(form: FormState) {
  return `You are a senior growth strategist. Based on the given inputs, generate a concise, actionable plan.
Return ONLY valid JSON matching this TypeScript schema exactly (no extra commentary):
{
  "ourUnderstanding": string[],
  "objectiveElaborated": string[],
  "marketResearch": string[],
  "platforms": string[],
  "strategyByPlatforms": string[],
  "contentStrategy": string[],
  "aidaFunnel": {"awareness": string[], "interest": string[], "desire": string[], "action": string[]},
  "executionPlan": string[],
  "importantParameters": string[],
  "elaboratedKPIs": string[],
  "adsBudgetINR": {"channel": string, "budgetINR": string, "notes"?: string}[] | undefined,
  "alternatives": string[],
  "recommendation": string
}

Inputs:
Brand: ${form.brandName}
Context: ${form.brandObjective}
Target Platforms: ${form.targetPlatform}
Industry: ${form.industry} (${form.industryType.join(", ")})
Offering: ${form.offering}
Audience Segment: ${form.audienceSegment}
Audience Nature: ${form.audienceNature}
Age Group: ${form.ageGroup}
Primary Objective: ${form.objective}
Lead Gen Budget (INR): ${form.leadGenBudgetINR || "-"}

Guidance:
- Prefer India-specific INR budgets if suggesting paid ads.
- Keep lists focused and non-redundant.
- Ensure platforms and strategies align with inputs.
- Keep tone crisp and professional.
`;
}

export async function generatePlanWithGemini(form: FormState, apiKey?: string): Promise<Recommendations> {
  const key = apiKey || (import.meta as any)?.env?.VITE_GEMINI_API_KEY;
  if (!key) throw new Error("Missing VITE_GEMINI_API_KEY");

  const genAI = new GoogleGenerativeAI(key);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = buildPrompt(form);
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  // Try to parse JSON directly, or from a code block
  const tryParse = (s: string) => {
    try { return JSON.parse(s) as Recommendations; } catch { return undefined; }
  };

  let parsed = tryParse(text);
  if (!parsed) {
    const match = text.match(/```(?:json)?\n([\s\S]*?)```/i);
    if (match) parsed = tryParse(match[1]);
  }
  if (!parsed) throw new Error("Gemini returned unparseable response");
  return parsed;
}

// Client-side helper to call the serverless function
export async function generatePlanViaApi(form: FormState): Promise<Recommendations> {
  const res = await fetch('/api/generate-plan', {
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
