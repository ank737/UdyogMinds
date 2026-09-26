import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  FileCheck, 
  Printer, 
  Download, 
  RotateCcw, 
  MapPin, 
  Coins, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  Building2, 
  Calculator,
  Calendar,
  Layers,
  Sparkles,
  Store
} from 'lucide-react';
import { 
  FeasibilityData, 
  FinancialCalculation, 
  Language, 
  UserAssessmentState 
} from '../types';
import { TRANSLATIONS } from '../data/translations';
import { formatINR } from '../utils/calculations';
import { getCategoryTranslation } from '../data/categoryTranslations';
import { getLocalizedExecutiveSummary, getLocalizedPillars } from '../data/localizedReportNarratives';

interface AdvisoryReportProps {
  assessment: UserAssessmentState;
  feasibility: FeasibilityData;
  financial: FinancialCalculation;
  onStartNew: () => void;
  lang: Language;
}

export const AdvisoryReport: React.FC<AdvisoryReportProps> = ({
  assessment,
  feasibility,
  financial,
  onStartNew,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const isHindi = lang === 'hi';

  useEffect(() => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#059669', '#d97706', '#0284c7'],
      });
    } catch {
      // safe fallback
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    const reportData = {
      project: 'UdyogMinds - SIH 2026',
      generatedAt: new Date().toISOString(),
      assessment,
      feasibility: {
        category: feasibility.category,
        opportunityScore: feasibility.opportunityScore,
        marketReach5km: feasibility.marketReach5km,
        marketReach10km: feasibility.marketReach10km,
        competitorsCount: feasibility.competitorCount,
        density: feasibility.competitorDensity,
        pricing: feasibility.pricing,
      },
      financial: {
        marginCapital: financial.marginCapital,
        projectCost: financial.projectCost,
        maximumLoan: financial.maximumLoan,
        scheme: financial.scheme,
        monthlyEmi: financial.monthlyEmi,
        totalInterest: financial.totalInterest,
        totalRepayment: financial.totalRepayment,
      },
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `UdyogMinds_Advisory_Report_${assessment.location.village}_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8 sm:space-y-10 pb-20">
      {/* Top Action Bar (hidden in print) */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold text-slate-900 block">
              {isHindi ? 'व्यावसायिक सलाहकार रिपोर्ट तैयार है' : 'Comprehensive Advisory Dossier Ready'}
            </span>
            <span className="text-sm text-slate-500">
              {isHindi ? '15 बिंदुओं का विस्तृत मूल्यांकन' : '15-point structured advisory summary'}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-base font-semibold border border-slate-200 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>{t.btnPrint}</span>
          </button>

          <button
            onClick={handleDownloadJSON}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-base font-semibold shadow-xs transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{isHindi ? 'रिपोर्ट डाउनलोड करें' : 'Download JSON'}</span>
          </button>

          <button
            onClick={onStartNew}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-base font-semibold border border-slate-300 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-amber-600" />
            <span>{t.btnStartNew}</span>
          </button>
        </div>
      </div>

      {/* Main Printable Document Card */}
      <div className="surface-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm space-y-10 print:p-0 print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Report Header */}
        <div className="border-b border-slate-200 pb-8 print:border-slate-300">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold uppercase tracking-wider print:bg-emerald-100 print:text-emerald-800">
                  UdyogMinds SIH 2026 Prototype
                </span>
                <span className="text-sm text-slate-400 print:text-slate-600 font-mono">
                  Ref: UM-RUR-847291
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {t.reportTitle}
              </h1>
              <p className="text-sm sm:text-base text-slate-500 mt-2 leading-relaxed">
                {t.reportSubtitle}
              </p>
            </div>

            <div className="sm:text-right font-mono text-sm text-slate-500 print:text-slate-600">
              <div>Date: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
              <div className="text-emerald-700 font-bold print:text-emerald-800">Status: Verified Feasible</div>
            </div>
          </div>
        </div>

        {/* 15 Sequential Required Sections */}

        {/* Section 1: Business Summary */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <Store className="w-5 h-5 text-emerald-700" />
            <span>{t.section1}</span>
          </h2>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-sm text-slate-700 leading-relaxed">
            <p>
              {getLocalizedExecutiveSummary(
                lang,
                getCategoryTranslation(lang, assessment.category).name,
                assessment.location.village,
                formatINR(financial.marginCapital),
                formatINR(financial.projectCost),
                formatINR(financial.maximumLoan),
                financial.scheme.name
              )}
            </p>
            {assessment.businessDescription && (
              <p className="mt-2 text-sm italic text-slate-500 border-l-2 border-emerald-600 pl-3">
                "{assessment.businessDescription}"
              </p>
            )}
          </div>
        </section>

        {/* Section 2: Location */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-emerald-700" />
            <span>{t.section2}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block">{t.stateLabel}</span>
              <strong className="text-slate-900 text-base font-semibold">{assessment.location.state}</strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block">{t.districtLabel}</span>
              <strong className="text-slate-900 text-base font-semibold">{assessment.location.district}</strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block">{t.blockLabel}</span>
              <strong className="text-slate-900 text-base font-semibold">{assessment.location.block}</strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block">{t.villageLabel}</span>
              <strong className="text-emerald-700 text-base font-bold">{assessment.location.village}</strong>
            </div>
          </div>
        </section>

        {/* Section 3: Available Capital */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <Coins className="w-5 h-5 text-amber-600" />
            <span>{t.section3}</span>
          </h2>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-sm text-slate-500">{t.marginCapitalCard}</span>
              <div className="text-3xl font-bold text-amber-800 font-mono mt-0.5">
                {formatINR(financial.marginCapital)}
              </div>
            </div>
            <div className="text-sm text-right text-slate-500 font-mono">
              <div>Equity Contribution: 10.0%</div>
              <div className="text-emerald-700 font-bold">Compliant with PMMY</div>
            </div>
          </div>
        </section>

        {/* Section 4: Market Reach */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <Layers className="w-5 h-5 text-emerald-700" />
            <span>{t.section4}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block">{t.statPopulation || '5 km Population'}</span>
              <strong className="text-slate-900 font-mono text-base font-semibold">
                {feasibility.marketReach5km.estimatedPopulation.toLocaleString('en-IN')}
              </strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block">{t.statVillages || 'Nearby Villages'}</span>
              <strong className="text-slate-900 font-mono text-base font-semibold">
                {feasibility.marketReach5km.nearbyVillages}
              </strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block">{t.statMarkets || 'Weekly Haats'}</span>
              <strong className="text-slate-900 font-mono text-base font-semibold">
                {feasibility.marketReach5km.nearbyMarkets}
              </strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block">{t.statCustomers || 'Active Buyer Pool'}</span>
              <strong className="text-emerald-700 font-mono text-base font-bold">
                {feasibility.marketReach5km.potentialCustomers.toLocaleString('en-IN')}
              </strong>
            </div>
          </div>
        </section>

        {/* Section 5: Opportunity Analysis */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-emerald-700" />
            <span>{t.section5}</span>
          </h2>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold text-slate-700">
                {t.feasibilityPillarsTitle || 'Composite Feasibility Rating'}
              </span>
              <span className="text-base font-bold text-emerald-700 font-mono">
                {feasibility.opportunityScore} / 100 ({t.highFeasibilityTier || 'Tier 1 Viable'})
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm pt-1">
              {feasibility.factors.map((f, idx) => {
                const localizedPillar = getLocalizedPillars(lang)[idx];
                return (
                  <div key={idx} className="p-2 rounded bg-white border border-slate-200">
                    <div className="text-slate-500 truncate">{localizedPillar?.name || (isHindi ? f.nameHi : f.name)}</div>
                    <div className="font-mono font-bold text-emerald-700 mt-0.5">{f.score}/100</div>
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-slate-500 italic">
              "{isHindi ? feasibility.scoreExplanationHi : feasibility.scoreExplanationEn}"
            </p>
          </div>
        </section>

        {/* Section 6: Competition */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber-600" />
            <span>{t.section6}</span>
          </h2>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm">
            <div className="flex justify-between mb-2">
              <span className="text-slate-700">
                Identified Competitors within 5 km: <strong>{feasibility.competitorCount}</strong>
              </span>
              <span className="font-bold text-amber-800">
                Cluster Density: {feasibility.competitorDensity}
              </span>
            </div>
            <div className="space-y-1.5 pt-1">
              {feasibility.competitors.map((c) => (
                <div key={c.id} className="flex justify-between text-sm text-slate-600 border-t border-slate-200 pt-1">
                  <span>• {c.name} ({c.type})</span>
                  <span className="font-mono">{c.distanceKm} km | {c.rating}★</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: SWOT */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            <span>{t.section7}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200">
              <div className="font-bold text-emerald-800 mb-1">{t.swotStrengths}</div>
              <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                {(isHindi ? feasibility.swot.strengthsHi : feasibility.swot.strengths).map((s, idx) => (
                  <li key={idx}>• {s}</li>
                ))}
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200">
              <div className="font-bold text-amber-800 mb-1">{t.swotWeaknesses}</div>
              <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                {(isHindi ? feasibility.swot.weaknessesHi : feasibility.swot.weaknesses).map((w, idx) => (
                  <li key={idx}>• {w}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Local Risks */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-600" />
            <span>{t.section8}</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-slate-200">
              <thead className="bg-slate-50 text-slate-600 font-semibold">
                <tr>
                  <th className="p-3">Risk / Threat</th>
                  <th className="p-3 w-24">Impact</th>
                  <th className="p-3">Mitigation Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {feasibility.threatsList.map((th, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60">
                    <td className="p-3 font-medium">{isHindi ? th.threatHi : th.threat}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        th.impact === 'High' ? 'bg-rose-50 text-rose-800 border border-rose-200' : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}>
                        {th.impact}
                      </span>
                    </td>
                    <td className="p-3 text-emerald-800 font-medium">{isHindi ? th.mitigationHi : th.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 9: Pricing */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <Coins className="w-5 h-5 text-emerald-700" />
            <span>{t.section9}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-mono">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 font-sans block">{t.estimatedCostLabel}</span>
              <strong className="text-slate-800 text-sm">{formatINR(feasibility.pricing.estimatedCost)}</strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 font-sans block">{t.localRangeLabel}</span>
              <strong className="text-amber-800 text-sm">
                {formatINR(feasibility.pricing.localPriceMin)} – {formatINR(feasibility.pricing.localPriceMax)}
              </strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 font-sans block">{t.suggestedPriceLabel}</span>
              <strong className="text-emerald-700 text-sm">{formatINR(feasibility.pricing.suggestedPrice)}</strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 font-sans block">{t.marginLabel}</span>
              <strong className="text-emerald-700 text-sm">{feasibility.pricing.estimatedMarginPercent}% Gross</strong>
            </div>
          </div>
        </section>

        {/* Section 10: Project Cost */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <Calculator className="w-5 h-5 text-emerald-700" />
            <span>{t.section10}</span>
          </h2>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-sm text-slate-500">{t.projectCostCard}</span>
              <div className="text-3xl font-bold text-emerald-700 font-mono mt-0.5">
                {formatINR(financial.projectCost)}
              </div>
            </div>
            <div className="text-sm font-mono text-slate-500 text-right">
              <div>Rule: Margin Capital × 10</div>
              <div className="text-slate-700">{formatINR(financial.marginCapital)} × 10 = {formatINR(financial.projectCost)}</div>
            </div>
          </div>
        </section>

        {/* Section 11: Loan Requirement */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <Coins className="w-5 h-5 text-amber-600" />
            <span>{t.section11}</span>
          </h2>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <span className="text-sm text-slate-500">{t.loanCard}</span>
              <div className="text-3xl font-bold text-amber-800 font-mono mt-0.5">
                {formatINR(financial.maximumLoan)}
              </div>
            </div>
            <div className="text-sm font-mono text-slate-500 text-right">
              <div>Rule: Project Cost × 90%</div>
              <div className="text-slate-700">{formatINR(financial.projectCost)} × 90% = {formatINR(financial.maximumLoan)}</div>
            </div>
          </div>
        </section>

        {/* Section 12: Recommended Scheme */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <Building2 className="w-5 h-5 text-emerald-700" />
            <span>{t.section12}</span>
          </h2>
          <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-slate-900">
                {financial.scheme.name}
              </span>
              <span className="text-sm px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold">
                {financial.scheme.category}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm font-mono pt-1 text-slate-600">
              <div>Interest: {financial.scheme.interestRate}% p.a.</div>
              <div>Tenure: {financial.scheme.tenureYears} Years</div>
              <div>Moratorium: {financial.scheme.moratoriumMonths} Months</div>
            </div>
          </div>
        </section>

        {/* Section 13: EMI */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-emerald-700" />
            <span>{t.section13}</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-mono">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 font-sans block">{t.monthlyEmiLabel}</span>
              <strong className="text-emerald-700 text-base font-bold">{formatINR(financial.monthlyEmi)} / mo</strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 font-sans block">{t.effectivePrincipalLabel}</span>
              <strong className="text-slate-800 text-sm">{formatINR(financial.effectivePrincipal)}</strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 font-sans block">{t.totalInterestLabel}</span>
              <strong className="text-rose-700 text-sm">{formatINR(financial.totalInterest)}</strong>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-slate-500 font-sans block">{t.totalRepaymentLabel}</span>
              <strong className="text-slate-900 text-base font-bold">{formatINR(financial.totalRepayment)}</strong>
            </div>
          </div>
        </section>

        {/* Section 14: Repayment Schedule */}
        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-emerald-700" />
            <span>{t.section14}</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left font-mono border-collapse border border-slate-200">
              <thead className="bg-slate-50 text-slate-600 font-sans font-semibold">
                <tr>
                  <th className="p-3">Quarter</th>
                  <th className="p-3">Opening Bal</th>
                  <th className="p-3">Interest</th>
                  <th className="p-3">Principal</th>
                  <th className="p-3">Payment</th>
                  <th className="p-2 text-right">Closing Bal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {financial.quarterlySchedule.slice(0, 6).map((row) => (
                  <tr key={row.quarter}>
                    <td className="p-2 font-bold font-sans">Q{row.quarter}</td>
                    <td className="p-3">{formatINR(row.openingBalance)}</td>
                    <td className="p-2 text-rose-700">{formatINR(row.interest)}</td>
                    <td className="p-2 text-emerald-700">{formatINR(row.principal)}</td>
                    <td className="p-2 font-bold text-slate-900">{formatINR(row.payment)}</td>
                    <td className="p-2 text-right text-slate-800">{formatINR(row.closingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-sm text-slate-400 mt-1 italic">
              * Showing initial 6 quarters of repayment amortisation schedule.
            </div>
          </div>
        </section>

        {/* Section 15: Key Assumptions & Disclaimers */}
        <section className="space-y-2 pt-4 border-t border-slate-200">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span>{t.section15}</span>
          </h2>
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-500 space-y-1.5 leading-relaxed">
            <p>1. <strong>Rule-Engine Transparency:</strong> All calculations obey the deterministic linear rules: <em>Project Cost = Margin × 10</em> and <em>Loan = Cost × 0.90</em>.</p>
            <p>2. <strong>Moratorium Capitalization:</strong> Interest accrued during the grace period ({financial.scheme.moratoriumMonths} months) is capitalized into the loan principal balance.</p>
            <p>3. <strong>SIH Prototype Demonstration:</strong> Market demographics, competitor densities, and pricing benchmarks are simulated for demonstration.</p>
            <p>4. <strong>Underwriting Disclaimer:</strong> Actual credit disbursement is subject to bank branch inspection, KYC verification, and formal credit appraisal.</p>
          </div>
        </section>
      </div>
    </div>
  );
};
