import { GoogleGenerativeAI } from "@google/generative-ai";

export const config = { runtime: "nodejs" };

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const key = (globalThis as any)?.process?.env?.GEMINI_API_KEY as string | undefined;
  if (!key) return res.status(500).json({ error: 'Server misconfigured: GEMINI_API_KEY not set' });

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const messages = Array.isArray(body?.messages) ? body.messages : [];

    const historyText = messages
      .map((m: any) => {
        const role = (m?.role || 'user').toString();
        let content = (m?.content || '').toString();
        // Make user messages more concise for context
        if (role === 'user') {
          content = content.replace(/[^\w\s.,!?']/g, '').substring(0, 200);
        }
        return `${role.toUpperCase()}: ${content}`;
      })
      .join('\n');

    const systemPreamble = `You're the AI assistant for StartupSurge, a cutting-edge digital marketing agency. Your tone should be:
- Gen Z-friendly: Use emojis occasionally, keep it casual but professional
- Marketing-savvy: Drop digital marketing knowledge in a fun way
- Concise: Get to the point quickly, use short paragraphs
- Helpful: Offer value in every response

Example responses:
User: What services do you offer?
You: We're all about that digital glow-up! ✨ Here's what we slay at:
- Social media that actually converts (no cringe content, promise) 📱
- Websites that don't look like they're from 2010 💻
- Ads that don't make people hit 'skip' ⚡
- Email marketing that doesn't go straight to spam 📧

User: How much does it cost?
You: Prices start at just ₹50k/month for startups, but we customize every package. Think of it as your marketing BFF - we've got your back! 💪 Wanna chat numbers? Let's hop on a quick call!`;

    const prompt = `${systemPreamble}\n\n${historyText}\n\nASSISTANT:`;

    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent({
      contents: [{
        role: 'user',
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        topK: 40,
        maxOutputTokens: 1024,
      },
    });
    const text = result.response.text();

    return res.status(200).json({ text });
  } catch (err: any) {
    console.error('/api/chat error:', err);
    const message = err?.message || String(err) || 'Internal Server Error';
    if (/permission|unauthorized|invalid(?:\s+)?key|401|403/i.test(message)) {
      return res.status(502).json({ error: `Gemini auth failed: ${message}` });
    }
    if (/quota|rate|429/i.test(message)) {
      return res.status(502).json({ error: `Gemini rate/quota issue: ${message}` });
    }
    return res.status(500).json({ error: message });
  }
}
