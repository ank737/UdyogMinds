import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Helper to get Gemini client lazily
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey.trim(),
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Intelligent contextual fallback when live Gemini API key is not yet configured in environment
function generateFallbackResponse(
  message: string,
  language: string,
  context?: {
    village?: string;
    category?: string;
    capital?: number;
    projectCost?: number;
    maxLoan?: number;
  }
): string {
  const lower = message.toLowerCase();
  const village = context?.village || "आपके गाँव";
  const category = context?.category || "ग्रामीण सूक्ष्म उद्यम";
  const capital = context?.capital ? `₹${context.capital.toLocaleString("en-IN")}` : "₹1,00,000";
  const maxLoan = context?.maxLoan ? `₹${context.maxLoan.toLocaleString("en-IN")}` : "₹9,00,000";
  const projectCost = context?.projectCost ? `₹${context.projectCost.toLocaleString("en-IN")}` : "₹10,00,000";

  const isHindiOrRegional = language !== "en";

  if (lower.includes("subsidy") || lower.includes("सब्सिडी") || lower.includes("pmegp") || lower.includes("योजना")) {
    if (isHindiOrRegional) {
      return `📌 **सरकारी सब्सिडी और योजना गाइड (PMEGP / Mudra):**
1. **PMEGP योजना**: ग्रामीण क्षेत्र में सामान्य वर्ग को **25%** और विशेष वर्ग (SC/ST/OBC/महिला) को **35% तक मार्जिन मनी सब्सिडी** मिलती है।
2. **स्व-पूंजी (Margin Money)**: आपके द्वारा लगाई जाने वाली राशि **${capital}** है, जिसके आधार पर कुल प्रोजेक्ट **${projectCost}** तैयार होता है।
3. **अनुमोदित बैंक ऋण**: बैंक आपको लगभग **${maxLoan}** तक का संस्थागत सावधि ऋण (Term Loan) दे सकता है।
4. **आवेदन प्रक्रिया**: kviconline.gov.in पर जाकर PMEGP e-Portal पर आधार, पैन कार्ड, प्रोजेक्ट रिपोर्ट और जाति प्रमाण पत्र के साथ ऑनलाइन अप्लाई करें।`;
    }
    return `📌 **Government Subsidy & Scheme Guide (PMEGP / Mudra):**
1. **PMEGP Scheme**: Provides **25% to 35% margin money subsidy** for rural micro-units (up to 35% for Special Categories including Women, SC, ST, OBC).
2. **Promoter Margin**: Based on your self-capital of **${capital}**, total bankable project cost is **${projectCost}**.
3. **Eligible Bank Debt**: Institutional bank credit eligible up to **${maxLoan}** (90% asset-backed debt).
4. **How to Apply**: Register on kviconline.gov.in via the PMEGP portal with your Aadhaar, PAN, Detailed Project Report (DPR), and bank passbook.`;
  }

  if (lower.includes("loan") || lower.includes("लोन") || lower.includes("कर्ज") || lower.includes("bank") || lower.includes("दस्तावेज") || lower.includes("document")) {
    if (isHindiOrRegional) {
      return `🏦 **बैंक ऋण और आवश्यक दस्तावेज:**
• **अनुमानित लोन सीमा**: ${maxLoan} (प्रोजेक्ट लागत का 90%)
• **आवश्यक दस्तावेज**:
  1. आधार कार्ड एवं पैन कार्ड (Aadhaar & PAN)
  2. निवास प्रमाण पत्र एवं बैंक खाता विवरण (पिछले 6 माह का स्टेटमेंट)
  3. UdyogMinds विस्तृत परियोजना रिपोर्ट (DPR - Project Viability Report)
  4. दुकान / जमीन का किरायानामा या स्वामित्व प्रमाण पत्र
  5. उद्यम आधार पंजीकरण (Udyam Registration - निःशुल्क सरकारी पोर्टल)
• **ब्याज दर**: 8.5% - 10.5% प्रति वर्ष (PMEGP / Mudra Tarun के तहत)।`;
    }
    return `🏦 **Bank Loan Eligibility & Documentation:**
• **Estimated Bank Debt**: ${maxLoan} (90% of bankable project cost)
• **Key Documents Required**:
  1. Aadhaar Card & PAN Card of promoter
  2. 6-month Bank Account Statement
  3. UdyogMinds Detailed Project Report (DPR) generated from this portal
  4. Shop rent agreement or land ownership document
  5. Free MSME Udyam Registration certificate
• **Interest Rate**: 8.5% to 10.5% p.a. under priority sector rural credit.`;
  }

  if (lower.includes("profit") || lower.includes("मुनाफा") || lower.includes("कमाई") || lower.includes("income") || lower.includes("revenue") || lower.includes("मार्जिन")) {
    if (isHindiOrRegional) {
      return `💰 **लाभ एवं वित्तीय अनुमान (${category}):**
• **मासिक अनुमानित बिक्री**: ₹1,20,000 - ₹1,80,000
• **सकल लाभ मार्जिन (Gross Margin)**: 18% से 25%
• **मासिक बैंक ईएमआई (5 वर्ष)**: लगभग ₹18,000 - ₹22,000
• **शुद्ध मासिक बचत (Net Take-home Profit)**: सभी खर्च व ईएमआई चुकाने के बाद लगभग ₹25,000 - ₹38,000 प्रति माह
💡 *सुझाव*: 5 किमी के साप्ताहिक हाटों में थोक खरीद करके आप मार्जिन को 3-5% और बढ़ा सकते हैं।`;
    }
    return `💰 **Profitability & Cash Flow Outlook (${category}):**
• **Estimated Monthly Turnover**: ₹1,20,000 - ₹1,80,000
• **Gross Margin Range**: 18% - 25%
• **Monthly Bank EMI (5-year tenure)**: Approx. ₹18,000 - ₹22,000
• **Estimated Net Monthly Income**: ₹25,000 - ₹38,000 after all operating costs and debt service.
💡 *Pro Tip*: Direct procurement from nearby regional APMC mandis saves 4-6% on inventory procurement.`;
  }

  // Default response
  if (isHindiOrRegional) {
    return `नमस्ते! मैं **UdyogMinds AI सहायक** हूँ। 

मैं **${village}** में आपके **${category}** प्रोजेक्ट के लिए इन विषयों पर तत्काल सहायता कर सकता हूँ:
1. **सरकारी सब्सिडी**: PMEGP, PM Mudra, PMFME योजना में 35% तक सब्सिडी कैसे प्राप्त करें।
2. **बैंक लोन**: ₹${capital} की पूंजी पर ₹${maxLoan} तक के ऋण की नियम व शर्तें।
3. **मार्केट फिजिबिलिटी**: 5 किमी परिधि के गाँव, साप्ताहिक हाट और मांग का विश्लेषण।
4. **दस्तावेजीकरण**: बैंक मैनेजर को प्रस्तुत करने हेतु आवश्यक चेकलिस्ट।

आप अपना कोई भी सवाल नीचे टाइप कर सकते हैं!`;
  }

  return `Hello! I am the **UdyogMinds AI Business Advisor**.

I can assist you with your **${category}** unit in **${village}**:
1. **Government Subsidies**: Availing 25%-35% margin money under PMEGP, Mudra, or PMFME.
2. **Bank Financing**: Structuring ₹${maxLoan} institutional credit on your self-capital of ${capital}.
3. **Feasibility & Demand**: Footfall analysis across nearby weekly haat bazaars and hamlets.
4. **Application Checklist**: Documents required for direct bank sanction.

Feel free to ask any specific question about your rural enterprise!`;
}

async function startServer() {
  const app = express();
  const PORT = 5173;

  app.use(express.json({ limit: "10mb" }));

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    const hasKey = Boolean(
      process.env.GEMINI_API_KEY &&
      process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY" &&
      process.env.GEMINI_API_KEY.trim() !== ""
    );
    res.json({
      status: "ok",
      hasGeminiKey: hasKey,
      model: "gemini-3.8-flash",
    });
  });

  // Chat API endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history, language = "en", context } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required." });
      }

      const ai = getGeminiClient();

      // If Gemini client is not initialized (no active API key), return rich fallback
      if (!ai) {
        const fallbackText = generateFallbackResponse(message, language, context);
        return res.json({
          reply: fallbackText,
          source: "local-advisor",
          info: "Add your GEMINI_API_KEY in the Settings > Secrets panel for live Gemini 3.8 Flash responses.",
        });
      }

      // Build context-rich system prompt for Gemini
      const systemInstruction = `You are "UdyogMinds AI Sahayak", an elite rural micro-enterprise business advisor and financial architect built for India.
The user is a rural micro-entrepreneur or consultant assessing an enterprise.

Current User Context:
- Target Location: ${context?.village || "Rural India"} (${context?.district || ""}, ${context?.state || ""})
- Business Category: ${context?.category || "Micro-Enterprise"}
- Self-Capital Contribution: ₹${context?.capital ? Number(context.capital).toLocaleString("en-IN") : "1,00,000"}
- Total Bankable Project Cost: ₹${context?.projectCost ? Number(context.projectCost).toLocaleString("en-IN") : "10,00,000"}
- Institutional Bank Debt Eligible: ₹${context?.maxLoan ? Number(context.maxLoan).toLocaleString("en-IN") : "9,00,000"}
- Recommended Scheme: ${context?.scheme || "PMEGP (Prime Minister Employment Generation Programme)"}
- User Language Code: ${language}

Guidelines:
1. Always respond primarily in the user's language (e.g., if Hindi or Indian regional language, reply in clear, respectful, easy-to-understand Hindi/regional language with standard numbers and terms like PMEGP, Subsidy, Margin Money). If English, reply in crisp English.
2. Provide practical, accurate advice about rural business feasibility, customer catchment, weekly haats (rural bazaars), working capital, bank loan sanction tips, government subsidies (PMEGP up to 35%, Mudra Shishu/Kishore/Tarun, PMFME, Stand-Up India), and operational checklists.
3. Be concise, encouraging, realistic, and highly structured with bullet points and bold key terms.
4. If asked about loan eligibility or numbers, reference the user's current project values where appropriate.`;

      // Build conversation contents
      const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

      // Add recent history if provided (up to last 8 turns)
      if (Array.isArray(history)) {
        const recentHistory = history.slice(-8);
        for (const item of recentHistory) {
          if (item.sender === "user") {
            contents.push({ role: "user", parts: [{ text: item.text }] });
          } else if (item.sender === "bot") {
            contents.push({ role: "model", parts: [{ text: item.text }] });
          }
        }
      }

      // Add current user message
      contents.push({ role: "user", parts: [{ text: message }] });

      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Gemini request timeout")), 6000);
      });

      const responsePromise = ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const response = await Promise.race([responsePromise, timeoutPromise]);

      const replyText = response.text || "माफ़ कीजिए, उत्तर प्राप्त नहीं हो सका। कृपया पुनः प्रयास करें।";

      return res.json({
        reply: replyText,
        source: "gemini-3.8-flash",
      });
    } catch (err: any) {
      console.warn("Chat API notice (serving domain advisor fallback):", err?.message || err);
      // Fallback gracefully on any API error so the user is never stuck
      const fallbackText = generateFallbackResponse(
        req.body?.message || "",
        req.body?.language || "en",
        req.body?.context
      );
      return res.json({
        reply: fallbackText,
        source: "local-advisor",
        error: err?.message || "fallback",
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`UdyogMinds Server running on http://localhost:${PORT}`);
  });
}

startServer();
