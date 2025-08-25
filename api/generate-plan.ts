import { GoogleGenerativeAI } from "@google/generative-ai";

// Keep this type aligned with the client side
type FormState = {
  brandName: string;
  brandObjective: string;
  targetPlatform?: string;
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
  ageGroup: ("Below 18" | "18-25" | "26-35" | "36-45" | "46-60" | "60+")[];
  objective: (
    | "Lead Generation"
    | "Awareness"
    | "Google Ranking (SEO)"
    | "App Installs"
    | "Sales/Revenue"
    | "Engagement"
  )[];
  leadGenBudgetINR?: string;
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
Industry: ${form.industry} (${form.industryType.join(", ")})
Offering: ${form.offering}
Audience Segment: ${form.audienceSegment}
Audience Nature: ${form.audienceNature}
Age Group: ${form.ageGroup.join(", ")}
Primary Objective: ${form.objective.join(", ")}
Lead Gen Budget (INR): ${form.leadGenBudgetINR || "-"}

Guidance:
- Prefer India-specific INR budgets if suggesting paid ads.
- Keep lists focused and non-redundant.
- Ensure platforms and strategies align with inputs.
- Do market reasearch yourself and provide relevant insights
- Ads budget MUST be  as: Meta Ads = rs.10000 per campaign; Google Ads = 25000 INR per campaign.
- Keep tone crisp and professional.
`;
}

// Ensure Node runtime (not Edge)
export const config = {
  runtime: "nodejs",
};

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    return res.status(200).json({ ok: true, message: "generate-plan API is up. Use POST with JSON body." });
  } else if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const key = (globalThis as any)?.process?.env?.GEMINI_API_KEY as string | undefined;
  if (!key) {
    return res.status(500).json({ error: "Server misconfigured: GEMINI_API_KEY not set" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    if (!body || typeof body !== "object") {
      return res.status(400).json({ error: "Bad Request: expected JSON body" });
    }
    const form = body as FormState;
    if (!form.brandName || !Array.isArray(form.objective) || form.objective.length === 0) {
      return res.status(400).json({ error: "Bad Request: 'brandName' and at least one 'objective' are required" });
    }
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = buildPrompt(form);
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const tryParse = (s: string) => {
      try { return JSON.parse(s); } catch { return undefined; }
    };
    let parsed = tryParse(text);
    if (!parsed) {
      const match = text.match(/```(?:json)?\n([\s\S]*?)```/i);
      if (match) parsed = tryParse(match[1]);
    }
    if (!parsed) return res.status(502).json({ error: "Unparseable response from model" });

    // Enforce fixed ads budgets
    try {
      (parsed as any).adsBudgetINR = [
        { channel: "Meta Ads", budgetINR: "10000", notes: "INR per campaign (fixed)" },
        { channel: "Google Ads", budgetINR: "25000", notes: "INR per campaign (fixed)" },
      ];
    } catch {}

    return res.status(200).json(parsed);
  } catch (err: any) {
    console.error("/api/generate-plan error:", err);
    const message = err?.message || String(err) || "Internal Server Error";
    // Surface common Gemini errors clearly
    if (/permission|unauthorized|invalid(?:\s+)?key|401|403/i.test(message)) {
      return res.status(502).json({ error: `Gemini auth failed: ${message}` });
    }
    if (/quota|rate|429/i.test(message)) {
      return res.status(502).json({ error: `Gemini rate/quota issue: ${message}` });
    }
    return res.status(500).json({ error: message });
  }
}
