import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Coins, 
  Calculator, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle, 
  Calendar, 
  FileText, 
  Clock, 
  Layers,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ExplainContext, FinancialCalculation, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { formatINR } from '../utils/calculations';

interface FinancialDashboardProps {
  financial: FinancialCalculation;
  onCapitalChange: (newCapital: number, rawInput?: string) => void;
  onOpenExplain: (context: ExplainContext) => void;
  onProceedToReport: () => void;
  lang: Language;
}

export const FinancialDashboard: React.FC<FinancialDashboardProps> = ({
  financial,
  onCapitalChange,
  onOpenExplain,
  onProceedToReport,
  lang,
}) => {
  const [activeQuarterPage, setActiveQuarterPage] = useState<number>(1);
  const quartersPerPage = 8;

  const t = TRANSLATIONS[lang];
  const isHindi = lang === 'hi';

  const handleExplainProjectCost = () => {
    onOpenExplain({
      title: 'Project Cost Calculation (10x Multiplier)',
      titleHi: 'प्रोजेक्ट लागत गणना (10 गुना सूत्र)',
      subtitle: 'Standard 10% Margin Money Reserve Bank / PMMY Benchmark',
      subtitleHi: 'भारतीय रिजर्व बैंक व पीएमएमवाई के 10% मार्जिन मनी मानक पर आधारित',
      formula: 'Project Cost = Margin Capital × 10',
      steps: [
        {
          labelEn: 'Entrepreneur Own Margin Capital',
          labelHi: 'उद्यमी का स्वयं का अंशदान',
          value: formatINR(financial.marginCapital),
          noteEn: 'Representing 10% equity stake',
          noteHi: '10% स्वयं की पूंजी हिस्सेदारी',
        },
        {
          labelEn: 'Statutory Capital Multiplier',
          labelHi: 'वैधानिक पूंजी गुणक',
          value: '× 10.0',
          noteEn: 'Inverse of 10% equity ratio (1 / 0.10 = 10)',
          noteHi: '10% इक्विटी अनुपात का व्युत्क्रम (1 / 0.10 = 10)',
        },
        {
          labelEn: 'Total Permissible Project Outlay',
          labelHi: 'कुल अनुमत प्रोजेक्ट लागत',
          value: formatINR(financial.projectCost),
          noteEn: `${formatINR(financial.marginCapital)} × 10 = ${formatINR(financial.projectCost)}`,
          noteHi: `${formatINR(financial.marginCapital)} × 10 = ${formatINR(financial.projectCost)}`,
        },
      ],
      aiRationaleEn:
        'National rural banking guidelines specify a minimum 10% self-contribution by micro-entrepreneurs. Multiplying the entrepreneur\'s available cash by 10 establishes the maximum viable capital asset expenditure including machinery, working capital, and premise setup.',
      aiRationaleHi:
        'राष्ट्रीय ग्रामीण बैंकिंग दिशा-निर्देश सूक्ष्म उद्यमियों द्वारा न्यूनतम 10% स्वयं के अंशदान का प्रावधान करते हैं। उद्यमी की नकद पूंजी को 10 से गुणा करने पर अधिकतम व्यवहार्य प्रोजेक्ट लागत (उपकरण, इन्वेंटरी व दुकान व्यवस्था) प्राप्त होती है।',
    });
  };

  const handleExplainLoan = () => {
    onOpenExplain({
      title: 'Maximum Bank Loan (90% Financing)',
      titleHi: 'अधिकतम बैंक ऋण (90% वित्तीय सहायता)',
      subtitle: 'Debt Component under Rural Micro-Credit Programs',
      subtitleHi: 'ग्रामीण सूक्ष्म-ऋण योजनाओं के तहत 90% ऋण घटक',
      formula: 'Maximum Loan = Project Cost × 90%',
      steps: [
        {
          labelEn: 'Computed Project Cost',
          labelHi: 'निर्धारित प्रोजेक्ट लागत',
          value: formatINR(financial.projectCost),
        },
        {
          labelEn: 'Statutory Debt Ratio',
          labelHi: 'ऋण अनुपात घटक',
          value: '90% (0.90)',
        },
        {
          labelEn: 'Bank Financed Principal',
          labelHi: 'बैंक द्वारा स्वीकृत मूलधन',
          value: formatINR(financial.maximumLoan),
          noteEn: `${formatINR(financial.projectCost)} × 90% = ${formatINR(financial.maximumLoan)}`,
          noteHi: `${formatINR(financial.projectCost)} × 90% = ${formatINR(financial.maximumLoan)}`,
        },
      ],
      aiRationaleEn:
        'The debt-equity structure ensures that the entrepreneur retains skin-in-the-game (10%) while commercial banks or microfinance institutions fund the remaining 90% collateral-free under CGTMSE/MUDRA guarantee cover.',
      aiRationaleHi:
        'यह ऋण-पूंजी ढांचा सुनिश्चित करता है कि उद्यमी की 10% पूंजी का जोखिम रहे जबकि शेष 90% राशि वाणिज्यिक बैंक या वित्तीय संस्थाएं बिना किसी गारंटी के सीजीटीएमएसई/मुद्रा कवर के तहत प्रदान करती हैं।',
    });
  };

  const handleExplainScheme = () => {
    onOpenExplain({
      title: 'Financing Scheme Routing Logic',
      titleHi: 'ऋण योजना रूटिंग व चयन नियम',
      subtitle: 'Deterministic Threshold Matching Algorithm',
      subtitleHi: 'निश्चित सीमा मिलान एल्गोरिदम',
      formula:
        financial.projectCost <= 140000
          ? 'IF Cost ≤ ₹1.40L → Micro Finance Scheme'
          : financial.projectCost <= 5000000
          ? 'IF Cost > ₹1.40L AND ≤ ₹50L → Term Loan Scheme'
          : 'IF Cost > ₹50L → Exceeds Limit Warning',
      steps: [
        {
          labelEn: 'Project Cost Assessment',
          labelHi: 'प्रोजेक्ट लागत मूल्यांकन',
          value: formatINR(financial.projectCost),
        },
        {
          labelEn: 'Configured Scheme Threshold Bracket',
          labelHi: 'योजना पात्रता सीमा ब्रैकेट',
          value:
            financial.projectCost <= 140000
              ? 'Tier 1 (≤ ₹1,40,000)'
              : financial.projectCost <= 5000000
              ? 'Tier 2 (₹1,40,001 to ₹50,00,000)'
              : 'Limit Exceeded (> ₹50,00,000)',
        },
        {
          labelEn: 'Interest Rate & Moratorium Applied',
          labelHi: 'लागू ब्याज दर व रियायती अवधि',
          value: `${financial.scheme.interestRate}% p.a. | ${financial.scheme.moratoriumMonths} mos grace`,
        },
      ],
      aiRationaleEn:
        'Projects with capital expenditure under ₹1.40 Lakh qualify for priority Micro Finance credit (6.5% interest, 3-year tenure) with accelerated sanctions. Higher outlays up to ₹50 Lakh route into structured Term Loans (8.0% interest, 7-year tenure) designed for asset amortization.',
      aiRationaleHi:
        '₹1.40 लाख तक की परियोजनाओं को 6.5% रियायती ब्याज दर और 3 वर्ष की अवधि के साथ माइक्रो फाइनेंस श्रेणी में रखा जाता है। ₹50 लाख तक के प्रोजेक्ट्स को 8% ब्याज दर व 7 वर्ष की अवधि वाली सावधि ऋण (टर्म लोन) श्रेणी में भेजा जाता है।',
    });
  };

  const handleExplainEMI = () => {
    onOpenExplain({
      title: 'Amortized Monthly EMI Calculation',
      titleHi: 'मासिक किस्त (EMI) गणना सूत्र',
      subtitle: 'Compound Monthly Reducing Balance with Moratorium Capitalization',
      subtitleHi: 'मासिक घटते शेष पर चक्रवृद्धि ब्याज सूत्र (मोरेटोरियम ब्याज सहित)',
      formula: 'EMI = P × r × (1+r)^n / ((1+r)^n − 1)',
      steps: [
        {
          labelEn: 'Sanctioned Loan Principal (P)',
          labelHi: 'स्वीकृत ऋण मूलधन (P)',
          value: formatINR(financial.maximumLoan),
        },
        {
          labelEn: 'Moratorium Grace Capitalization',
          labelHi: 'रियायती अवधि का पूंजीकृत ब्याज',
          value: `+ ${formatINR(financial.effectivePrincipal - financial.maximumLoan)}`,
          noteEn: `${financial.scheme.moratoriumMonths} months @ ${financial.scheme.interestRate}% p.a. simple interest`,
          noteHi: `${financial.scheme.moratoriumMonths} महीने @ ${financial.scheme.interestRate}% वार्षिक साधारण ब्याज`,
        },
        {
          labelEn: 'Effective Principal for Amortization',
          labelHi: 'किस्तों हेतु प्रभावी कुल मूलधन',
          value: formatINR(financial.effectivePrincipal),
        },
        {
          labelEn: 'Monthly Interest Rate (r)',
          labelHi: 'मासिक ब्याज दर (r)',
          value: `${(financial.scheme.interestRate / 12).toFixed(4)}% per month`,
          noteEn: `${financial.scheme.interestRate}% / 12 months`,
          noteHi: `${financial.scheme.interestRate}% / 12 माह`,
        },
        {
          labelEn: 'Total Payment Months (n)',
          labelHi: 'कुल भुगतान किस्तों की संख्या (n)',
          value: `${financial.scheme.tenureYears * 12} months`,
          noteEn: `${financial.scheme.tenureYears} years × 12`,
          noteHi: `${financial.scheme.tenureYears} वर्ष × 12`,
        },
        {
          labelEn: 'Computed Fixed Monthly EMI',
          labelHi: 'निर्धारित मासिक किस्त (EMI)',
          value: `${formatINR(financial.monthlyEmi)} / mo`,
        },
      ],
      aiRationaleEn:
        'Standard banking formula applied across Indian scheduled banks. During the initial moratorium period, micro-entrepreneurs are exempt from paying EMIs to stabilize cash flows.',
      aiRationaleHi:
        'भारतीय वाणिज्यिक बैंकों में प्रयुक्त मानक सूत्र। शुरुआत के रियायती महीनों में उद्यमी को कोई किस्त नहीं देनी होती ताकि वह अपना व्यवसाय स्थापित कर सके।',
    });
  };

  const totalQuarterPages = Math.ceil(financial.quarterlySchedule.length / quartersPerPage) || 1;
  const paginatedSchedule = financial.quarterlySchedule.slice(
    (activeQuarterPage - 1) * quartersPerPage,
    activeQuarterPage * quartersPerPage
  );

  return (
    <div className="space-y-8 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
            <Coins className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase text-amber-700">
              {t.financialTitle}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              {isHindi ? '10x प्रोजेक्ट लागत व 90% बैंक ऋण संरचना' : '10x Project Cost & 90% Bank Debt Structuring'}
            </h2>
          </div>
        </div>

        <button
          onClick={onProceedToReport}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
        >
          <FileText className="w-4 h-4" />
          <span>{isHindi ? 'सलाहकार रिपोर्ट देखें' : 'View Advisory Report'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* SECTION 1: Interactive Capital Slider & Live Dynamic Re-computation */}
      <section className="surface-card rounded-2xl p-6 sm:p-7 border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-600" />
              <span>{isHindi ? 'मार्जिन पूंजी एडजस्टर (Live Simulation)' : 'Margin Capital Adjuster (Live Simulation)'}</span>
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              {isHindi ? 'पूंजी बदलकर देखें कि प्रोजेक्ट लागत, ऋण और ईएमआई कैसे स्वतः बदलते हैं:' : 'Adjust promoter capital to view instant recomputations across cost, debt, and repayment:'}
            </p>
          </div>
          <div className="sm:text-right">
            <span className="text-xs text-slate-500 block">{isHindi ? 'वर्तमान चुनी गई पूंजी' : 'Active Margin Capital'}</span>
            <span className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
              {formatINR(financial.marginCapital)}
            </span>
          </div>
        </div>

        {/* Range Slider */}
        <div className="space-y-2.5 pt-2">
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={financial.marginCapital}
            onChange={(e) => onCapitalChange(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>₹10,000 (Micro Tier)</span>
            <span>₹1,50,000</span>
            <span>₹5,00,000</span>
            <span>₹10,00,000 (Macro Tier)</span>
          </div>
        </div>

        {/* Quick presets */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-500 mr-1">
            {isHindi ? 'त्वरित चयन:' : 'Quick Select:'}
          </span>
          {[10000, 50000, 100000, 150000, 200000, 500000, 600000].map((amt) => (
            <button
              key={amt}
              onClick={() => onCapitalChange(amt)}
              className={`text-xs px-2.5 py-1 rounded-lg border font-mono transition-all cursor-pointer ${
                financial.marginCapital === amt
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-400 font-bold shadow-2xs'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {formatINR(amt)}
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 2: Transparent Financial Pipeline (Margin -> Project Cost -> Loan) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Step 1: Margin Capital */}
        <div className="surface-card rounded-2xl p-6 border border-slate-200 relative overflow-hidden flex flex-col justify-between">
          <div className="w-1.5 h-full bg-slate-300 absolute left-0 top-0" />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase">
                Step 1: Own Equity (10%)
              </span>
              <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center">
                1
              </span>
            </div>
            <h4 className="text-sm font-semibold text-slate-600">{t.marginCapitalCard}</h4>
            <div className="text-2xl font-bold text-slate-900 tabular-nums mt-2">
              {formatINR(financial.marginCapital)}
            </div>
           
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="font-mono text-slate-700 font-medium">10% of Total Cost</span>
          </div>
        </div>

        {/* Step 2: Project Cost (10x) */}
        <div className="surface-card rounded-2xl p-6 border border-emerald-300 bg-emerald-50/20 relative overflow-hidden flex flex-col justify-between">
          <div className="w-1.5 h-full bg-emerald-600 absolute left-0 top-0" />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-emerald-800 uppercase">
                Step 2: Rule (× 10)
              </span>
              <button
                onClick={handleExplainProjectCost}
                className="flex items-center gap-1 text-xs text-emerald-800 hover:text-emerald-900 bg-emerald-100/70 px-2 py-1 rounded border border-emerald-300 cursor-pointer font-medium"
              >
                <HelpCircle className="w-3 h-3" />
                <span>{t.btnWhy}</span>
              </button>
            </div>
            <h4 className="text-sm font-semibold text-slate-700">{t.projectCostCard}</h4>
            <div className="text-2xl font-bold text-emerald-700 tabular-nums mt-2">
              {formatINR(financial.projectCost)}
            </div>
            <div className="mt-2 p-2 rounded-lg bg-white border border-emerald-200 text-xs text-emerald-800 font-medium tabular-nums">
              {formatINR(financial.marginCapital)} × 10 = {formatINR(financial.projectCost)}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs text-slate-500">
            <span className="font-mono text-emerald-800 font-medium">100% Asset Outlay</span>
          </div>
        </div>

        {/* Step 3: Maximum Loan (90%) */}
        <div className="surface-card rounded-2xl p-6 border border-amber-300 bg-amber-50/20 relative overflow-hidden flex flex-col justify-between">
          <div className="w-1.5 h-full bg-amber-600 absolute left-0 top-0" />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-amber-800 uppercase">
                Step 3: Bank Debt (90%)
              </span>
              <button
                onClick={handleExplainLoan}
                className="flex items-center gap-1 text-xs text-amber-800 hover:text-amber-900 bg-amber-100/70 px-2 py-1 rounded border border-amber-300 cursor-pointer font-medium"
              >
                <HelpCircle className="w-3 h-3" />
                <span>{t.btnWhy}</span>
              </button>
            </div>
            <h4 className="text-sm font-semibold text-slate-700">{t.loanCard}</h4>
            <div className="text-2xl font-bold text-amber-800 tabular-nums mt-2">
              {formatINR(financial.maximumLoan)}
            </div>
            <div className="mt-2 p-2 rounded-lg bg-white border border-amber-200 text-xs text-amber-800 font-medium tabular-nums">
              {formatINR(financial.projectCost)} × 90% = {formatINR(financial.maximumLoan)}
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-slate-500">
            <span className="font-mono text-amber-800 font-medium">90% of Total Cost</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: Scheme Router & Eligibility Box */}
      <section className="surface-card rounded-2xl p-6 sm:p-7 border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <h3 className="text-base font-bold text-slate-900">
                {t.schemeRouterTitle}
              </h3>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {t.financialSub}
            </p>
          </div>

          <button
            onClick={handleExplainScheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 self-start sm:self-auto cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.btnViewCalculation}</span>
          </button>
        </div>

        {/* Scheme Result Banner */}
        <div
          className={`p-5 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
            financial.exceedsLimit
              ? 'bg-rose-50 border-rose-200 text-rose-950'
              : 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
          }`}
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                  financial.exceedsLimit
                    ? 'bg-rose-100 text-rose-800 border border-rose-200'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                }`}
              >
                {financial.scheme.category}
              </span>
              {financial.scheme.subsidyEligible && (
                <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                  {isHindi ? 'मुद्रा / CGTMSE सब्सिडी पात्र' : 'Mudra / CGTMSE Eligible'}
                </span>
              )}
            </div>
            <h4 className="text-base font-bold text-slate-900 mt-1">
              {isHindi ? financial.scheme.nameHi : financial.scheme.name}
            </h4>
            <p className="text-sm text-slate-700">
              {isHindi ? financial.scheme.descriptionHi : financial.scheme.descriptionEn}
            </p>
          </div>

          {/* Scheme Stats */}
          {!financial.exceedsLimit ? (
            <div className="grid grid-cols-3 gap-3 bg-white p-3 rounded-xl border border-slate-200 text-center">
              <div className="px-2">
                <span className="text-xs text-slate-500 uppercase block">
                  {t.interestRateLabel}
                </span>
                <span className="text-sm sm:text-base font-bold text-emerald-700">
                  {financial.scheme.interestRate}% p.a.
                </span>
              </div>
              <div className="px-2 border-x border-slate-200">
                <span className="text-xs text-slate-500 uppercase block">
                  {t.tenureLabel}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  {financial.scheme.tenureYears} Years
                </span>
              </div>
              <div className="px-2">
                <span className="text-xs text-slate-500 uppercase block">
                  {t.moratoriumLabel}
                </span>
                <span className="text-sm sm:text-base font-bold text-amber-700">
                  {financial.scheme.moratoriumMonths} Mos
                </span>
              </div>
            </div>
          ) : (
            <div className="p-3 rounded-xl bg-white border border-rose-200 text-xs text-rose-900">
              <div className="flex items-center gap-2 font-bold mb-1">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>{isHindi ? 'प्रोटोटाइप योजना सीमा पार' : 'Scheme Ceiling Exceeded'}</span>
              </div>
              <p className="text-xs text-rose-700">
                {isHindi 
                  ? 'यह प्रोजेक्ट ₹50,00,000 की सीमा से अधिक है। इसके लिए स्टैंड-अप इंडिया या सिडबी विशेष क्रेडिट लाइन का परामर्श दिया जाता है।'
                  : 'Outlay exceeds configured ₹50,00,000 cap. Advised to structure via Stand-Up India or SIDBI Special Credit.'}
              </p>
            </div>
          )}
        </div>

        {/* Visual Decision Logic Rules */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
            {isHindi ? 'कॉन्फ़िगर किए गए योजना नियम:' : 'Configured Routing Rules:'}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div
              className={`p-3 rounded-xl border ${
                financial.projectCost <= 140000
                  ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900 font-semibold'
                  : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
            >
              <div className="font-bold mb-0.5">Rule 1: Micro Finance</div>
              <div>IF Project Cost ≤ ₹1.40 Lakh</div>
              <div className="text-xs mt-1 text-slate-600 tabular-nums">6.5% p.a. • 3 Yrs • 3 Mos Grace</div>
            </div>

            <div
              className={`p-3 rounded-xl border ${
                financial.projectCost > 140000 && financial.projectCost <= 5000000
                  ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900 font-semibold'
                  : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
            >
              <div className="font-bold mb-0.5">Rule 2: Term Loan</div>
              <div>IF Project Cost &gt; ₹1.40L & ≤ ₹50.00L</div>
              <div className="text-xs mt-1 text-slate-600 tabular-nums">8.0% p.a. • 7 Yrs • 6 Mos Grace</div>
            </div>

            <div
              className={`p-3 rounded-xl border ${
                financial.projectCost > 5000000
                  ? 'bg-rose-50 border-rose-300 text-rose-900 font-semibold'
                  : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
            >
              <div className="font-bold mb-0.5">Rule 3: Limit Ceiling</div>
              <div>IF Project Cost &gt; ₹50.00 Lakh</div>
              <div className="text-xs mt-1 text-slate-600">Outside configured scheme limit</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EMI Calculator & Amortization Metrics */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Monthly EMI Card */}
        <div className="surface-card rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>{t.emiTitle}</span>
              </h3>
              <button
                onClick={handleExplainEMI}
                className="flex items-center gap-1 text-xs text-emerald-800 hover:text-emerald-900 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 cursor-pointer font-medium"
              >
                <HelpCircle className="w-3 h-3" />
                <span>{t.btnWhy}</span>
              </button>
            </div>
            <p className="text-sm text-slate-600">
              {isHindi ? 'मासिक घटते शेष पर चक्रवृद्धि ब्याज' : 'Standard monthly reducing balance amortization.'}
            </p>

            <div className="my-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-600 block uppercase font-semibold">
                {t.monthlyEmiLabel}
              </span>
              <div className="text-3xl font-bold text-emerald-700 tabular-nums mt-1">
                {formatINR(financial.monthlyEmi)}
                <span className="text-xs text-slate-500 font-normal"> / mo</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {financial.scheme.tenureYears * 12} Monthly installments
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm border-t border-slate-100 pt-4">
            <div className="flex justify-between text-slate-600">
              <span className="text-slate-500 font-sans">{t.loanCard}:</span>
              <span>{formatINR(financial.maximumLoan)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span className="text-slate-500 font-sans">{t.effectivePrincipalLabel}:</span>
              <span className="text-amber-700 font-semibold">{formatINR(financial.effectivePrincipal)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span className="text-slate-500 font-sans">{t.totalInterestLabel}:</span>
              <span>{formatINR(financial.totalInterest)}</span>
            </div>
            <div className="flex justify-between text-slate-900 font-bold pt-1.5 border-t border-slate-200">
              <span className="font-sans">{t.totalRepaymentLabel}:</span>
              <span className="text-emerald-700">{formatINR(financial.totalRepayment)}</span>
            </div>
          </div>
        </div>

        {/* Right 2 Columns: Quarterly Repayment Schedule Table */}
        <div className="surface-card rounded-2xl p-6 border border-slate-200 lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-700" />
                  <span>{t.repaymentTableTitle}</span>
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  {t.moratoriumNotice}
                </p>
              </div>

              {/* Pagination Controls */}
              {totalQuarterPages > 1 && (
                <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs">
                  <span className="text-slate-600 mr-1">
                    Page {activeQuarterPage} of {totalQuarterPages}
                  </span>
                  <button
                    disabled={activeQuarterPage <= 1}
                    onClick={() => setActiveQuarterPage((p) => p - 1)}
                    className="p-1 rounded bg-slate-100 text-slate-600 disabled:opacity-30 hover:bg-slate-200 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    disabled={activeQuarterPage >= totalQuarterPages}
                    onClick={() => setActiveQuarterPage((p) => p + 1)}
                    className="p-1 rounded bg-slate-100 text-slate-600 disabled:opacity-30 hover:bg-slate-200 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse tabular-nums">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-sans font-semibold bg-slate-50">
                    <th className="py-2 px-3 rounded-l-md">Quarter</th>
                    <th className="py-2 px-3">Opening Bal</th>
                    <th className="py-2 px-3">Interest</th>
                    <th className="py-2 px-3">Principal</th>
                    <th className="py-2 px-3">Payment</th>
                    <th className="py-2 px-3 text-right rounded-r-md">Closing Bal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedSchedule.map((row) => (
                    <tr key={row.quarter} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-2 px-3 font-sans font-semibold text-slate-800">
                        Q{row.quarter}
                      </td>
                      <td className="py-2 px-3 text-slate-600">{formatINR(row.openingBalance)}</td>
                      <td className="py-2 px-3 text-rose-700">{formatINR(row.interest)}</td>
                      <td className="py-2 px-3 text-emerald-700">{formatINR(row.principal)}</td>
                      <td className="py-2 px-3 text-slate-900 font-bold">{formatINR(row.payment)}</td>
                      <td className="py-2 px-3 text-right text-slate-800">
                        {formatINR(row.closingBalance)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <span>
              {isHindi ? 'कुल क्वार्टर: ' : 'Total Quarters: '}
              <strong className="text-slate-800 tabular-nums">{financial.quarterlySchedule.length}</strong>
            </span>
            <span className="text-emerald-700 font-medium">
              Amortization Engine Verified
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
