import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Landmark, 
  Search, 
  Filter, 
  CheckCircle2, 
  ExternalLink, 
  PhoneCall, 
  Percent, 
  ShieldCheck, 
  Calculator, 
  Sparkles, 
  Building2, 
  Coins, 
  ArrowRight, 
  X, 
  Check, 
  Calendar, 
  FileText, 
  HelpCircle,
  Clock,
  Layers,
  Award,
  ChevronRight
} from 'lucide-react';
import { GovtSchemeInfo, Language, SchemeCategoryFilter, UserAssessmentState, FinancialCalculation } from '../types';
import { GOVT_SCHEMES } from '../data/govtSchemesData';
import { formatINR } from '../utils/calculations';

interface GovernmentSchemesProps {
  lang: Language;
  assessment?: UserAssessmentState;
  financial?: FinancialCalculation;
  onSelectSchemeForAssessment?: (scheme: GovtSchemeInfo) => void;
  onNavigateToAssessment?: () => void;
}

export const GovernmentSchemes: React.FC<GovernmentSchemesProps> = ({
  lang,
  assessment,
  financial,
  onSelectSchemeForAssessment,
  onNavigateToAssessment,
}) => {
  const isHindi = lang === 'hi';
  const [selectedScheme, setSelectedScheme] = useState<GovtSchemeInfo | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<SchemeCategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySubsidy, setOnlySubsidy] = useState(false);
  const [onlyCollateralFree, setOnlyCollateralFree] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'eligibility' | 'documents' | 'process' | 'calculator'>('overview');

  // Interactive Calculator State inside Modal
  const [calcProjectCost, setCalcProjectCost] = useState<number>(500000);
  const [calcMarginPercent, setCalcMarginPercent] = useState<number>(10);
  const [calcSubsidyPercent, setCalcSubsidyPercent] = useState<number>(0);

  // When opening a scheme, initialize its calculator defaults
  const handleOpenScheme = (scheme: GovtSchemeInfo) => {
    setSelectedScheme(scheme);
    setActiveModalTab('overview');
    if (scheme.calculatorConfig) {
      setCalcProjectCost(scheme.calculatorConfig.defaultCost);
      setCalcMarginPercent(scheme.calculatorConfig.defaultMarginPercent);
      setCalcSubsidyPercent(scheme.calculatorConfig.defaultSubsidyPercent);
    } else {
      setCalcProjectCost(500000);
      setCalcMarginPercent(10);
      setCalcSubsidyPercent(0);
    }
  };

  // Filter schemes
  const filteredSchemes = useMemo(() => {
    return GOVT_SCHEMES.filter((scheme) => {
      // Category filter
      if (categoryFilter !== 'all' && scheme.category !== categoryFilter) {
        return false;
      }
      // Subsidy filter
      if (onlySubsidy && !scheme.badge.toLowerCase().includes('subsidy') && !scheme.subsidyPercent.toLowerCase().includes('35%') && !scheme.subsidyPercent.toLowerCase().includes('subvention')) {
        return false;
      }
      // Collateral free filter
      if (onlyCollateralFree && !scheme.collateralFree) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const text = `${scheme.name} ${scheme.nameHi} ${scheme.code} ${scheme.fullName} ${scheme.fullNameHi} ${scheme.ministry} ${scheme.ministryHi} ${scheme.summaryEn} ${scheme.summaryHi} ${scheme.eligibleActivitiesEn.join(' ')} ${scheme.eligibleActivitiesHi.join(' ')}`.toLowerCase();
        if (!text.includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [categoryFilter, searchQuery, onlySubsidy, onlyCollateralFree]);

  // Real-time calculation logic for the active modal scheme
  const modalCalculations = useMemo(() => {
    if (!selectedScheme) return null;
    const config = selectedScheme.calculatorConfig || {
      interestRatePercent: 8.5,
      tenureYears: 5,
    };

    const marginMoney = (calcProjectCost * calcMarginPercent) / 100;
    const subsidyAmount = (calcProjectCost * calcSubsidyPercent) / 100;
    const bankLoan = Math.max(0, calcProjectCost - marginMoney - subsidyAmount);

    // Monthly EMI calculation on net loan
    const annualRate = config.interestRatePercent / 100;
    const monthlyRate = annualRate / 12;
    const totalMonths = config.tenureYears * 12;

    let monthlyEmi = 0;
    if (bankLoan > 0 && monthlyRate > 0) {
      monthlyEmi = Math.round(
        (bankLoan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1)
      );
    }

    const totalRepayment = monthlyEmi * totalMonths;
    const totalInterest = Math.max(0, totalRepayment - bankLoan);

    return {
      marginMoney,
      subsidyAmount,
      bankLoan,
      monthlyEmi,
      totalInterest,
      totalRepayment,
      interestRate: config.interestRatePercent,
      tenureYears: config.tenureYears,
    };
  }, [selectedScheme, calcProjectCost, calcMarginPercent, calcSubsidyPercent]);

  // Assessment smart recommendation
  const matchedSchemes = useMemo(() => {
    if (!assessment || !financial) return [];
    const cost = financial.projectCost;
    return GOVT_SCHEMES.filter((s) => s.maxProjectCost >= cost).slice(0, 2);
  }, [assessment, financial]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 pb-16">
      {/* Top Hero Banner */}
      <div className="surface-card rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5" />
                {isHindi ? 'भारत सरकार की आधिकारिक योजनाएं' : 'Central & State Government Schemes'}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                PMMY • PMEGP • PMFME • Vishwakarma
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {isHindi 
                ? 'ग्रामीण सूक्ष्म-उद्यमों के लिए सरकारी ऋण व सब्सिडी योजनाएं' 
                : 'Government Loan & Capital Subsidy Schemes'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isHindi
                ? 'मुद्रा योजना (PMMY), 35% सब्सिडी वाली PMEGP, 5% ब्याज वाली पीएम विश्वकर्मा व खाद्य उद्योग (PMFME) की संपूर्ण पात्रता, दस्तावेज, आवेदन प्रक्रिया और लाइव ईएमआई कैलकुलेटर।'
                : 'Complete verified directory of Indian micro-enterprise financing schemes. Explore eligibility, capital subsidies, document checklists, step-by-step application flows, and instant EMI calculators.'}
            </p>
          </div>

          {/* Quick Counter / Stats */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500 block font-medium">
                {isHindi ? 'अधिकतम सब्सिडी' : 'Max Capital Subsidy'}
              </span>
              <strong className="text-xl sm:text-2xl font-bold text-emerald-700 font-mono mt-0.5 block">
                Up to 35%
              </strong>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-xs text-slate-500 block font-medium">
                {isHindi ? 'न्यूनतम ब्याज दर' : 'Lowest Interest Rate'}
              </span>
              <strong className="text-xl sm:text-2xl font-bold text-amber-700 font-mono mt-0.5 block">
                5.0% Fixed
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Match Banner based on User's Assessment */}
      {assessment && assessment.capitalAmount > 0 && financial && (
        <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {isHindi ? 'आपके मूल्यांकन के आधार पर सुझाव' : 'Personalized Matching for Your Plan'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-emerald-800 border border-emerald-200 font-semibold font-mono">
                  {assessment.location.village} • {formatINR(financial.projectCost)} Cost
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                {isHindi ? (
                  <>
                    आपकी <strong>{formatINR(financial.marginCapital)}</strong> पूंजी से <strong>{formatINR(financial.projectCost)}</strong> का प्रोजेक्ट स्थापित हो सकता है। इसके लिए <strong>PMEGP</strong> (35% तक सब्सिडी) और <strong>मुद्रा योजना (PMMY)</strong> सर्वोत्तम हैं!
                  </>
                ) : (
                  <>
                    With your available capital of <strong>{formatINR(financial.marginCapital)}</strong> (estimated project cost <strong>{formatINR(financial.projectCost)}</strong>), you qualify for <strong>PMEGP</strong> (up to 35% subsidy grant) and <strong>PMMY Mudra Loan</strong>!
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {matchedSchemes.map((ms) => (
              <button
                key={ms.id}
                onClick={() => handleOpenScheme(ms)}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-100/70 border border-emerald-300 text-emerald-900 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs"
              >
                <span>{ms.code}</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {(
            [
              { id: 'all', labelEn: 'All Schemes', labelHi: 'सभी योजनाएं' },
              { id: 'retail_service', labelEn: 'Retail & Service', labelHi: 'दुकान व सेवा' },
              { id: 'manufacturing', labelEn: 'Manufacturing & Processing', labelHi: 'विनिर्माण व खाद्य' },
              { id: 'artisan', labelEn: 'Artisans & Crafts', labelHi: 'कारीगर व शिल्पकार' },
              { id: 'agriculture_dairy', labelEn: 'Dairy & Farm Allied', labelHi: 'डेयरी व पशुपालन' },
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                categoryFilter === cat.id
                  ? 'bg-emerald-700 text-white shadow-2xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {isHindi ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Search Input & Quick Toggles */}
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative min-w-[220px] flex-1 sm:flex-none">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isHindi ? 'योजना, कीवर्ड खोजें (जैसे मुद्रा, डेयरी)...' : 'Search schemes, keywords...'}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <button
            onClick={() => setOnlySubsidy(!onlySubsidy)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer flex items-center gap-1.5 ${
              onlySubsidy
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Percent className="w-3.5 h-3.5 text-emerald-700" />
            <span>{isHindi ? 'सब्सिडी वाली' : 'With Subsidy'}</span>
          </button>

          <button
            onClick={() => setOnlyCollateralFree(!onlyCollateralFree)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer flex items-center gap-1.5 ${
              onlyCollateralFree
                ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>{isHindi ? 'बिना गारंटी (No Collateral)' : 'Zero Collateral'}</span>
          </button>
        </div>
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
        {filteredSchemes.map((scheme) => (
          <div
            key={scheme.id}
            className="surface-card rounded-2xl border border-slate-200 p-6 sm:p-7 h-full flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all group bg-white"
          >
            <div className="space-y-4">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block truncate max-w-[280px]">
                    {isHindi ? scheme.ministryHi : scheme.ministry}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                    {isHindi ? scheme.nameHi : scheme.name}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-mono font-bold shrink-0 border border-emerald-200">
                  {scheme.code}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-semibold">
                  {isHindi ? scheme.badgeHi : scheme.badge}
                </span>
                {scheme.collateralFree && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                    {isHindi ? 'बिना गारंटी' : 'No Collateral'}
                  </span>
                )}
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-600 line-clamp-3 leading-6">
                {isHindi ? scheme.summaryHi : scheme.summaryEn}
              </p>

              {/* Key Quantitative Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs text-slate-500 block font-medium">
                    {isHindi ? 'ऋण सीमा' : 'Loan Ceiling'}
                  </span>
                  <strong className="text-slate-900 font-bold font-mono text-base sm:text-lg block mt-1 truncate">
                    {isHindi ? scheme.loanLimitHi : scheme.loanLimit}
                  </strong>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs text-slate-500 block font-medium">
                    {isHindi ? 'ब्याज दर' : 'Interest Rate'}
                  </span>
                  <strong className="text-emerald-700 font-bold font-mono text-base sm:text-lg block mt-1 truncate">
                    {isHindi ? scheme.interestRateHi : scheme.interestRate}
                  </strong>
                </div>
              </div>

              {/* Highlight bullet */}
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm leading-5 line-clamp-2">
                    {isHindi ? scheme.keyHighlightsHi[0] : scheme.keyHighlightsEn[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-6 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-mono">
                {isHindi ? 'पूर्ण विवरण उपलब्ध' : 'Verified Dossier'}
              </span>
              <button
                onClick={() => handleOpenScheme(scheme)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>{isHindi ? 'योजना का विवरण देखें' : 'View Full Scheme'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 space-y-3">
          <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
          <h4 className="text-sm font-bold text-slate-800">
            {isHindi ? 'कोई योजना नहीं मिली' : 'No Schemes Found'}
          </h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {isHindi 
              ? 'आपके द्वारा चुने गए फिल्टर या सर्च में कोई योजना नहीं मिली। कृपया फिल्टर रीसेट करें।'
              : 'Try adjusting your search query or removing the category/subsidy filters to view available government schemes.'}
          </p>
          <button
            onClick={() => {
              setCategoryFilter('all');
              setSearchQuery('');
              setOnlySubsidy(false);
              setOnlyCollateralFree(false);
            }}
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
          >
            {isHindi ? 'सभी फिल्टर हटाएं' : 'Reset All Filters'}
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* DETAILED SCHEME MODAL (Comprehensive Deep-Dive on Any Scheme)             */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedScheme && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-800"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50/70 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-700 text-white font-mono">
                      {selectedScheme.code}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-semibold">
                      {isHindi ? selectedScheme.badgeHi : selectedScheme.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                      {isHindi ? selectedScheme.nodalAgencyHi : selectedScheme.nodalAgency}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {isHindi ? selectedScheme.fullNameHi : selectedScheme.fullName}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {isHindi ? selectedScheme.ministryHi : selectedScheme.ministry}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedScheme(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer shrink-0"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 6 Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-4 bg-slate-100/60 border-b border-slate-200 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 block font-medium">{isHindi ? 'ऋण सीमा' : 'Max Loan'}</span>
                  <strong className="text-slate-900 font-bold font-mono text-xs block mt-0.5 truncate">
                    {isHindi ? selectedScheme.loanLimitHi : selectedScheme.loanLimit}
                  </strong>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 block font-medium">{isHindi ? 'सब्सिडी / अनुदान' : 'Capital Subsidy'}</span>
                  <strong className="text-emerald-700 font-bold font-mono text-xs block mt-0.5 truncate">
                    {isHindi ? selectedScheme.subsidyPercentHi : selectedScheme.subsidyPercent}
                  </strong>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 block font-medium">{isHindi ? 'मार्जिन मनी' : 'Promoter Margin'}</span>
                  <strong className="text-amber-800 font-bold font-mono text-xs block mt-0.5 truncate">
                    {isHindi ? selectedScheme.marginRequiredHi : selectedScheme.marginRequired}
                  </strong>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 block font-medium">{isHindi ? 'ब्याज दर' : 'Interest Rate'}</span>
                  <strong className="text-slate-900 font-bold font-mono text-xs block mt-0.5 truncate">
                    {isHindi ? selectedScheme.interestRateHi : selectedScheme.interestRate}
                  </strong>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 block font-medium">{isHindi ? 'चुकौती अवधि' : 'Tenure'}</span>
                  <strong className="text-slate-900 font-bold font-mono text-xs block mt-0.5 truncate">
                    {isHindi ? selectedScheme.tenureHi : selectedScheme.tenure}
                  </strong>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <span className="text-xs text-slate-500 block font-medium">{isHindi ? 'मोराटोरियम' : 'Moratorium'}</span>
                  <strong className="text-slate-900 font-bold font-mono text-xs block mt-0.5 truncate">
                    {isHindi ? selectedScheme.moratoriumHi : selectedScheme.moratorium}
                  </strong>
                </div>
              </div>

              {/* Navigation Tabs inside Modal */}
              <div className="flex items-center gap-1 px-4 pt-3 border-b border-slate-200 bg-white overflow-x-auto text-xs font-semibold">
                <button
                  onClick={() => setActiveModalTab('overview')}
                  className={`px-3.5 py-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeModalTab === 'overview'
                      ? 'border-emerald-600 text-emerald-800 font-bold'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{isHindi ? '1. अवलोकन व मुख्य लाभ' : '1. Overview & Benefits'}</span>
                </button>

                <button
                  onClick={() => setActiveModalTab('eligibility')}
                  className={`px-3.5 py-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeModalTab === 'eligibility'
                      ? 'border-emerald-600 text-emerald-800 font-bold'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isHindi ? '2. पात्रता व व्यवसाय' : '2. Eligibility & Activities'}</span>
                </button>

                <button
                  onClick={() => setActiveModalTab('documents')}
                  className={`px-3.5 py-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeModalTab === 'documents'
                      ? 'border-emerald-600 text-emerald-800 font-bold'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>{isHindi ? '3. जरूरी दस्तावेज चेकलिस्ट' : '3. Documents Checklist'}</span>
                </button>

                <button
                  onClick={() => setActiveModalTab('process')}
                  className={`px-3.5 py-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeModalTab === 'process'
                      ? 'border-emerald-600 text-emerald-800 font-bold'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{isHindi ? '4. आवेदन प्रक्रिया (How to Apply)' : '4. How to Apply'}</span>
                </button>

                <button
                  onClick={() => setActiveModalTab('calculator')}
                  className={`px-3.5 py-2 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    activeModalTab === 'calculator'
                      ? 'border-emerald-600 text-emerald-800 font-bold'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>{isHindi ? '5. लाइव ईएमआई कैलकुलेटर' : '5. Live EMI Calculator'}</span>
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-700">
                {/* TAB 1: OVERVIEW */}
                {activeModalTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {isHindi ? 'योजना का मुख्य उद्देश्य' : 'Core Scheme Purpose & Objective'}
                      </h4>
                      <p className="text-sm text-slate-800 leading-relaxed font-medium">
                        {isHindi ? selectedScheme.summaryHi : selectedScheme.summaryEn}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                        {isHindi ? 'प्रमुख विशेषताएं व सरकारी लाभ' : 'Key Scheme Highlights & Benefits'}
                      </h4>
                      <div className="space-y-2 text-xs sm:text-sm">
                        {(isHindi ? selectedScheme.keyHighlightsHi : selectedScheme.keyHighlightsEn).map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                            <span className="text-slate-800 leading-relaxed">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs space-y-1">
                      <span className="font-bold text-amber-900 block">
                        {isHindi ? 'लक्षित लाभार्थी वर्ग:' : 'Target Beneficiary Segment:'}
                      </span>
                      <p className="text-slate-700">
                        {isHindi ? selectedScheme.targetBeneficiariesHi : selectedScheme.targetBeneficiariesEn}
                      </p>
                    </div>
                  </div>
                )}

                {/* TAB 2: ELIGIBILITY & ACTIVITIES */}
                {activeModalTab === 'eligibility' && (
                  <div className="space-y-6">
                    {/* Eligibility criteria */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        {isHindi ? 'कौन-कौन आवेदन कर सकता है? (पात्रता शर्तें)' : 'Who is Eligible to Apply?'}
                      </h4>
                      <div className="space-y-2 text-xs sm:text-sm">
                        {(isHindi ? selectedScheme.eligibilityHi : selectedScheme.eligibilityEn).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                            <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-slate-800 leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Eligible businesses */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                        {isHindi ? 'मान्य व्यवसाय एवं कार्य (Eligible Micro-Enterprises)' : 'Permitted Activities & Business Types'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                        {(isHindi ? selectedScheme.eligibleActivitiesHi : selectedScheme.eligibleActivitiesEn).map((act, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                            <span className="font-medium text-slate-800">{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: DOCUMENTS */}
                {activeModalTab === 'documents' && (
                  <div className="space-y-4">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                      {isHindi 
                        ? 'बैंक में आवेदन करते समय नीचे दिए गए दस्तावेजों की स्वप्रमाणित (self-attested) प्रतियां साथ रखें:'
                        : 'Carry self-attested physical copies along with original proofs when submitting to bank or DIC:'}
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm">
                      {(isHindi ? selectedScheme.documentsRequiredHi : selectedScheme.documentsRequiredEn).map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <div className="space-y-0.5">
                            <div className="font-semibold text-slate-900">{doc}</div>
                            <span className="text-[11px] text-slate-400">
                              {isHindi ? 'अनिवार्य दस्तावेज' : 'Mandatory KYC / Business Document'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 4: HOW TO APPLY */}
                {activeModalTab === 'process' && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        {isHindi ? 'ऑनलाइन व ऑफलाइन आवेदन के आसान चरण' : 'Step-by-Step Application Procedure'}
                      </h4>

                      <div className="space-y-3">
                        {(isHindi ? selectedScheme.applicationProcessHi : selectedScheme.applicationProcessEn).map((step, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                            <div className="w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </div>
                            <div className="space-y-0.5">
                              <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                                {step}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Official Portals & Contact Links */}
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-emerald-800 font-bold block uppercase tracking-wider">
                          {isHindi ? 'आधिकारिक सरकारी पोर्टल' : 'Official Government Portal'}
                        </span>
                        <div className="text-sm font-bold text-slate-900 mt-0.5">
                          {selectedScheme.officialPortalName}
                        </div>
                        <div className="text-xs text-slate-500 font-mono mt-0.5">
                          {selectedScheme.officialPortalUrl}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={selectedScheme.officialPortalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                        >
                          <span>{isHindi ? 'वेबसाइट खोलें' : 'Visit Official Portal'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Helpline */}
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <PhoneCall className="w-4 h-4 text-emerald-700 shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-800">
                          {isHindi ? 'राष्ट्रीय टोल-फ्री हेल्पलाइन:' : 'National Toll-Free Helpline:'}
                        </span>{' '}
                        <span className="font-mono text-emerald-800 font-bold">{selectedScheme.tollFreeNumber}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 5: LIVE EMI CALCULATOR */}
                {activeModalTab === 'calculator' && modalCalculations && (
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                          {isHindi ? 'प्रोजेक्ट लागत समायोजित करें' : 'Simulate Project Investment Outlay'}
                        </span>
                        <span className="text-lg font-bold text-emerald-700 font-mono">
                          {formatINR(calcProjectCost)}
                        </span>
                      </div>

                      <input
                        type="range"
                        min={selectedScheme.calculatorConfig?.minCost || 50000}
                        max={selectedScheme.calculatorConfig?.maxCost || 2000000}
                        step={10000}
                        value={calcProjectCost}
                        onChange={(e) => setCalcProjectCost(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                      />

                      <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                        <span>Min: {formatINR(selectedScheme.calculatorConfig?.minCost || 50000)}</span>
                        <span>Max: {formatINR(selectedScheme.calculatorConfig?.maxCost || 2000000)}</span>
                      </div>
                    </div>

                    {/* Output Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                      <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                        <span className="text-slate-500 font-sans block text-[11px]">
                          {isHindi ? 'स्वयं का अंशदान (Margin)' : 'Your Margin (Equity)'}
                        </span>
                        <div className="text-base font-bold text-amber-900 mt-0.5">
                          {formatINR(modalCalculations.marginMoney)}
                        </div>
                        <span className="text-[10px] text-slate-400 font-sans">
                          {calcMarginPercent}% of project cost
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                        <span className="text-slate-500 font-sans block text-[11px]">
                          {isHindi ? 'सरकारी सब्सिडी (Grant)' : 'Govt Subsidy (Grant)'}
                        </span>
                        <div className="text-base font-bold text-emerald-800 mt-0.5">
                          {formatINR(modalCalculations.subsidyAmount)}
                        </div>
                        <span className="text-[10px] text-emerald-600 font-sans font-semibold">
                          {calcSubsidyPercent > 0 ? `${calcSubsidyPercent}% non-repayable grant` : 'No direct subsidy'}
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-slate-500 font-sans block text-[11px]">
                          {isHindi ? 'बैंक ऋण राशि' : 'Net Bank Debt'}
                        </span>
                        <div className="text-base font-bold text-slate-900 mt-0.5">
                          {formatINR(modalCalculations.bankLoan)}
                        </div>
                        <span className="text-[10px] text-slate-400 font-sans">
                          Funded by Bank
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-700 text-white shadow-xs">
                        <span className="text-emerald-100 font-sans block text-[11px]">
                          {isHindi ? 'मासिक ईएमआई (EMI)' : 'Monthly EMI'}
                        </span>
                        <div className="text-base font-bold mt-0.5">
                          {formatINR(modalCalculations.monthlyEmi)} / mo
                        </div>
                        <span className="text-[10px] text-emerald-200 font-sans">
                          @ {modalCalculations.interestRate}% p.a. for {modalCalculations.tenureYears} Years
                        </span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 space-y-1">
                      <div className="font-semibold text-slate-700">
                        {isHindi ? 'वित्तीय विवरण सारांश:' : 'Loan Amortization Summary:'}
                      </div>
                      <div>
                        • Total Repayment over {modalCalculations.tenureYears} Years: <strong>{formatINR(modalCalculations.totalRepayment)}</strong>
                      </div>
                      <div>
                        • Total Cumulative Interest: <strong>{formatINR(modalCalculations.totalInterest)}</strong>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  {isHindi ? 'सभी ब्याज दरें व सब्सिडी सरकारी दिशानिर्देशों पर आधारित हैं।' : 'Verified with RBI & Ministry guidelines.'}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  {onNavigateToAssessment && (
                    <button
                      onClick={() => {
                        if (onSelectSchemeForAssessment && selectedScheme) {
                          onSelectSchemeForAssessment(selectedScheme);
                        }
                        setSelectedScheme(null);
                        onNavigateToAssessment();
                      }}
                      className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                    >
                      {isHindi ? 'इस योजना से व्यवसाय शुरू करें' : 'Apply Scheme to Assessment'}
                    </button>
                  )}

                  <button
                    onClick={() => setSelectedScheme(null)}
                    className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {isHindi ? 'बंद करें' : 'Close'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
