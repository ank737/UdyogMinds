import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  GitFork, 
  Terminal, 
  FolderTree, 
  CheckCircle2, 
  Copy, 
  Check, 
  Zap,
  Code
} from 'lucide-react';
import { Language } from '../types';

interface ArchitectureDeckProps {
  lang: Language;
}

export const ArchitectureDeck: React.FC<ArchitectureDeckProps> = ({ lang }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const userFlowMermaid = `graph TD
  A[Landing Page / Hero] --> B[Language Selection: EN / HI]
  B --> C[Step 1: Rural Location Input]
  C --> D[Step 2: Available Capital Input]
  D --> E[Step 3: Business Category Selection]
  E --> F[Step 4: Business Description & Voice Note]
  F --> G[Hyper-Local Feasibility Dashboard]
  G --> H[Market Reach: 5km vs 10km]
  G --> I[Opportunity Score: 5 Weighted Factors]
  G --> J[Competitor Spatial Landscape]
  G --> K[SWOT & Local Threats Mitigation]
  G --> L[Pricing & Margin Benchmark]
  G --> M[Smart Financial Structuring]
  M --> N[Cost Calculation: Capital x 10]
  N --> O[Bank Debt: Project Cost x 90%]
  O --> P{Scheme Router}
  P -->|Cost <= 1.40L| Q[Micro Finance: 6.5%, 3Y, 3M Grace]
  P -->|1.40L < Cost <= 50L| R[Term Loan: 8.0%, 7Y, 6M Grace]
  P -->|Cost > 50L| S[Exceeds Prototype Limit Warning]
  Q & R --> T[Amortized Monthly EMI Engine]
  T --> U[Quarterly Repayment Schedule Table]
  U --> V[15-Section Final Advisory Report]
  V --> W[Print / PDF / JSON Export]`;

  const componentDataFlowMermaid = `flowchart LR
  subgraph State["Frontend State Hub (React 19)"]
    StateLoc["location: LocationData"]
    StateCap["capitalAmount: number"]
    StateCat["category: BusinessCategory"]
    StateLang["lang: 'en' | 'hi'"]
  end

  subgraph Calculators["Pure Math & Rule Engines"]
    ParseCur["parseIndianCurrency(str)"]
    CostRule["calculateProjectCost(cap) -> cap * 10"]
    LoanRule["calculateLoanAmount(cost) -> cost * 0.90"]
    SchemeRule["routeScheme(cost) -> Micro / Term / Limit"]
    EmiRule["calculateEMI(P, r, n, grace)"]
    AmortRule["generateRepaymentSchedule()"]
  end

  subgraph Views["UI / Presentation Layer"]
    Navbar["Navbar + Lang Switcher"]
    Landing["LandingPage (Hero & Journey)"]
    Wizard["AssessmentWizard (4 Steps)"]
    FeasDash["FeasibilityDashboard (Spatial Map + SWOT)"]
    FinDash["FinancialDashboard (EMI & Repayment)"]
    ReportView["AdvisoryReport (15 Sections + Print)"]
    Explain["ExplainModal (Transparent Math Rationale)"]
  end

  State --> Calculators
  Calculators --> Views
  Views -. User Updates .-> State`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-16">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                UdyogMinds System Dossier
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                System Design & Specifications
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Architecture, Data Schemas & Mathematical Proof
            </h1>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
          Comprehensive specification of the UdyogMinds micro-enterprise advisory platform:
          <strong> "AI-Driven Hyper-Local Business Advisory and Financial Structuring Assistant for Rural Micro-Entrepreneurs"</strong>.
        </p>
      </div>

      {/* Core Objective & Principle */}
      <section className="surface-card rounded-2xl p-6 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-700" />
          <h2 className="text-base font-bold text-slate-900">1. Core Philosophy & Architectural Boundary</h2>
        </div>
        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 font-mono text-xs text-emerald-900 flex items-center justify-between">
          <span className="font-semibold">AI ANALYZES → DATA VALIDATES → RULES CALCULATE → HUMAN DECIDES</span>
          <span className="text-emerald-700 text-[11px] font-sans font-medium">Guiding Directive</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The prototype strictly decouples deterministic financial calculations from probabilistic AI logic.
          While language synthesis evaluates hyper-local context, all outlays (10x cost), debt-equity ratios (90%),
          and scheme qualifications (Micro vs. Term Loan) are governed by strict mathematical functions in compliance with PMMY / RBI credit benchmarks.
        </p>
      </section>

      {/* Mermaid User Flow Diagram */}
      <section className="surface-card rounded-2xl p-6 border border-slate-200 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitFork className="w-4 h-4 text-amber-600" />
            <h2 className="text-base font-bold text-slate-900">2. Mermaid User-Flow Architecture</h2>
          </div>
          <button
            onClick={() => handleCopy(userFlowMermaid, 'userflow')}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer font-medium"
          >
            {copiedKey === 'userflow' ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>Copy Mermaid</span>
          </button>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 overflow-x-auto whitespace-pre leading-relaxed">
          {userFlowMermaid}
        </div>
      </section>

      {/* Mermaid Component & Data Flow Diagram */}
      <section className="surface-card rounded-2xl p-6 border border-slate-200 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-700" />
            <h2 className="text-base font-bold text-slate-900">3. Mermaid Component & Data-Flow</h2>
          </div>
          <button
            onClick={() => handleCopy(componentDataFlowMermaid, 'compflow')}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer font-medium"
          >
            {copiedKey === 'compflow' ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>Copy Mermaid</span>
          </button>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 overflow-x-auto whitespace-pre leading-relaxed">
          {componentDataFlowMermaid}
        </div>
      </section>

      {/* Recommended Folder Structure */}
      <section className="surface-card rounded-2xl p-6 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2">
          <FolderTree className="w-4 h-4 text-emerald-700" />
          <h2 className="text-base font-bold text-slate-900">4. Recommended Project Directory Hierarchy</h2>
        </div>
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-800 overflow-x-auto whitespace-pre leading-relaxed">
{`/
├── index.html                   # HTML5 Entry Point (UTF-8, Plus Jakarta Sans)
├── metadata.json                # Project identity (UdyogMinds) & platform capabilities
├── package.json                 # Modular dependencies (React 19, Tailwind, Motion, Lucide)
├── src/
│   ├── main.tsx                 # React root hydration
│   ├── App.tsx                  # Master controller & state coordination
│   ├── index.css                # Minimal design tokens & print stylesheet
│   ├── types.ts                 # Strict TypeScript schemas (Feasibility, Financial, Location)
│   ├── data/
│   │   ├── mockData.ts          # Rural Indian village clusters & business category datasets
│   │   └── translations.ts      # Bilingual (English | हिंदी) dictionary
│   ├── utils/
│   │   └── calculations.ts      # Deterministic mathematical calculation engines
│   └── components/
│       ├── Navbar.tsx           # Header, language selector, instant demo switcher
│       ├── LandingPage.tsx      # Minimal presentation hero, feature cards & journey
│       ├── AssessmentWizard.tsx # 4-Step location, capital, and category intake wizard
│       ├── FeasibilityDashboard.tsx # Demographics, spatial map, SWOT & risk mitigations
│       ├── FinancialDashboard.tsx   # 10x cost multiplier, 90% loan, scheme router & EMI
│       ├── AdvisoryReport.tsx       # 15-section printable executive advisory dossier
│       ├── ExplainModal.tsx         # Transparent formula & calculation inspector
│       └── ArchitectureDeck.tsx     # In-app Evaluator Technical Dossier`}
        </div>
      </section>

      {/* Financial Calculation Functions */}
      <section className="surface-card rounded-2xl p-6 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-amber-600" />
          <h2 className="text-base font-bold text-slate-900">5. Core Financial Rules & Formula Proofs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-bold text-emerald-800 font-sans">A. Project Cost Rule</div>
            <code className="text-slate-800 block font-semibold">calculateProjectCost(capital) = capital × 10</code>
            <p className="text-[11px] font-sans text-slate-500">
              10% promoter margin money requires 1 / 0.10 = 10x economic asset outlay.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-bold text-amber-800 font-sans">B. Maximum Bank Debt Rule</div>
            <code className="text-slate-800 block font-semibold">calculateLoanAmount(cost) = cost × 0.90</code>
            <p className="text-[11px] font-sans text-slate-500">
              Preserves 90:10 debt-equity gearing under micro-credit guarantee standards.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-bold text-slate-800 font-sans">C. Scheme Routing Thresholds</div>
            <code className="text-slate-800 block font-semibold">
              Cost ≤ ₹1.40L → Micro Finance (6.5% p.a., 3Y)<br/>
              ₹1.40L &lt; Cost ≤ ₹50.00L → Term Loan (8.0% p.a., 7Y)<br/>
              Cost &gt; ₹50.00L → Exceeds Scheme Cap Warning
            </code>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <div className="font-bold text-emerald-800 font-sans">D. Monthly Amortized EMI Formula</div>
            <code className="text-slate-800 block font-semibold">
              EMI = P × r × (1+r)^n / ((1+r)^n - 1)
            </code>
            <p className="text-[11px] font-sans text-slate-500">
              P includes capitalized moratorium simple interest for rural grace periods.
            </p>
          </div>
        </div>
      </section>

      {/* Preconfigured Demo Scenarios Summary */}
      <section className="surface-card rounded-2xl p-6 border border-slate-200 space-y-3">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-600" />
          <h2 className="text-base font-bold text-slate-900">6. Preconfigured Demo Scenarios</h2>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="font-bold text-slate-900 text-sm">Demo 1 — Village Grocery Store (Standard SME)</div>
              <div className="text-slate-500 mt-0.5">Capital: ₹1,00,000 → Cost: ₹10,00,000 → Loan: ₹9,00,000</div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono font-bold self-start sm:self-auto">
              Term Loan Scheme (8%, 7Y)
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="font-bold text-slate-900 text-sm">Demo 2 — Small Dairy Unit (Micro Setup)</div>
              <div className="text-slate-500 mt-0.5">Capital: ₹10,000 → Cost: ₹1,00,000 → Loan: ₹90,000</div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono font-bold self-start sm:self-auto">
              Micro Finance Scheme (6.5%, 3Y)
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="font-bold text-slate-900 text-sm">Demo 3 — Agri-Input Center (Cap Ceiling Test)</div>
              <div className="text-slate-500 mt-0.5">Capital: ₹6,00,000 → Cost: ₹60,00,000 → Loan: ₹54,00,000</div>
            </div>
            <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 font-mono font-bold self-start sm:self-auto">
              Outside Scheme Limit (&gt; ₹50L)
            </span>
          </div>
        </div>
      </section>

      {/* Run instructions */}
      <section className="surface-card rounded-2xl p-6 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-700" />
          <h2 className="text-base font-bold text-slate-900">7. Run & Deployment Verification</h2>
        </div>
        <p className="text-xs text-slate-600">
          Built natively using Vite + React 19 and Tailwind CSS v4. No external backend or credentials required.
        </p>
        <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-1">
          <div>$ npm install</div>
          <div>$ npm run build</div>
          <div>$ npm run dev -- --port 3000</div>
        </div>
      </section>
    </div>
  );
};
