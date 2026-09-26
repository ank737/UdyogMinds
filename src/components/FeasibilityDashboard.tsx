import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Layers, 
  MapPin, 
  Users, 
  Store, 
  ShoppingBag, 
  HelpCircle, 
  ArrowRight, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle, 
  Compass, 
  Crosshair, 
  Tag, 
  Truck,
  Building,
  Smartphone,
  PieChart,
  Check,
  Coins
} from 'lucide-react';
import { ExplainContext, FeasibilityData, Language, LocationData } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { formatINR } from '../utils/calculations';
import { getLocalizedPillars } from '../data/localizedReportNarratives';

interface FeasibilityDashboardProps {
  feasibility: FeasibilityData;
  location: LocationData;
  capitalAmount: number;
  onOpenExplain: (context: ExplainContext) => void;
  onProceedToFinancial: () => void;
  lang: Language;
}

export const FeasibilityDashboard: React.FC<FeasibilityDashboardProps> = ({
  feasibility,
  location,
  capitalAmount,
  onOpenExplain,
  onProceedToFinancial,
  lang,
}) => {
  const [radiusTab, setRadiusTab] = useState<'5km' | '10km'>('5km');
  const [selectedCompetitorId, setSelectedCompetitorId] = useState<string | null>(null);

  const t = TRANSLATIONS[lang];
  const isHindi = lang === 'hi';

  const metrics = radiusTab === '5km' ? feasibility.marketReach5km : feasibility.marketReach10km;

  const handleExplainScore = () => {
    onOpenExplain({
      title: 'Opportunity Feasibility Score (74/100)',
      titleHi: 'व्यवसाय अवसर व्यवहार्यता स्कोर (74/100)',
      subtitle: 'Multi-Factor Weighted Demographic & Spatial Matrix',
      subtitleHi: 'बहु-कारकीय भारित जनसांख्यिकीय व भौगोलिक विश्लेषण',
      formula: 'Score = Σ (Factor_i × Weight_i) / 100',
      steps: feasibility.factors.map((f) => ({
        labelEn: `${f.name} (Weight: ${f.weight}%)`,
        labelHi: `${f.nameHi} (भार: ${f.weight}%)`,
        value: `${f.score}/100`,
        noteEn: f.reasonEn,
        noteHi: f.reasonHi,
      })),
      aiRationaleEn: feasibility.scoreExplanationEn,
      aiRationaleHi: feasibility.scoreExplanationHi,
    });
  };

  const channelIcons: Record<string, React.ReactNode> = {
    Store: <Store className="w-4 h-4" />,
    Truck: <Truck className="w-4 h-4" />,
    ShoppingBag: <ShoppingBag className="w-4 h-4" />,
    Smartphone: <Smartphone className="w-4 h-4" />,
    Building: <Building className="w-4 h-4" />,
    Users: <Users className="w-4 h-4" />,
  };

  const selectedCompetitor = feasibility.competitors.find((c) => c.id === selectedCompetitorId);

  return (
    <div className="space-y-6 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                {t.feasibilityTitle}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                {t.prototypeBadge}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              {location.village}, {location.block}, {location.district} ({location.state})
            </h2>
          </div>
        </div>

        <button
          onClick={onProceedToFinancial}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer self-start sm:self-auto"
        >
          <span>{t.btnOpenCalculator}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* SECTION 1: Market Reach & Population (5 km vs 10 km toggle) */}
      <section className="surface-card rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(15,23,42,0.035)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-700" />
              <span>{t.marketReachTitle}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.disclaimerData}
            </p>
          </div>

          {/* Radius Selector Pills */}
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl p-1 self-start sm:self-auto shadow-inner">
            <button
              onClick={() => setRadiusTab('5km')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                radiusTab === '5km'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {t.radius5km}
            </button>
            <button
              onClick={() => setRadiusTab('10km')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                radiusTab === '10km'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {t.radius10km}
            </button>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="text-xs font-medium text-slate-500 block">{t.statPopulation}</span>
            <div className="text-2xl font-bold text-slate-900 font-mono mt-1">
              {metrics.estimatedPopulation.toLocaleString('en-IN')}
            </div>
            <span className="text-[11px] text-emerald-700 mt-1 flex items-center gap-1 font-medium">
              <Check className="w-3 h-3" />
              <span>{metrics.householdCount.toLocaleString('en-IN')} {t.statHouseholds}</span>
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="text-xs font-medium text-slate-500 block">{t.statVillages}</span>
            <div className="text-2xl font-bold text-slate-900 font-mono mt-1">
              {metrics.nearbyVillages}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">
              {t.statConnectedRoads || (isHindi ? 'सड़क मार्ग से सीधे जुड़े' : 'Connected via rural link roads')}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="text-xs font-medium text-slate-500 block">{t.statMarkets}</span>
            <div className="text-2xl font-bold text-slate-900 font-mono mt-1">
              {metrics.nearbyMarkets}
            </div>
            <span className="text-[11px] text-amber-700 mt-1 block font-medium">
              {t.statWeeklyBazaars || (isHindi ? 'साप्ताहिक हाट बाजार' : 'Weekly rural bazaar nodes')}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="text-xs font-medium text-slate-500 block">{t.statCustomers}</span>
            <div className="text-2xl font-bold text-emerald-700 font-mono mt-1">
              {metrics.potentialCustomers.toLocaleString('en-IN')}
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">
              {t.statRecurringBuyers || (isHindi ? 'सक्रिय ग्राहक आधार' : 'Estimated recurring buyers')}
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: Opportunity Analysis Score & 5 Factor Breakdown */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Big Score Meter */}
        <div className="surface-card rounded-2xl p-6 bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(15,23,42,0.035)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-700" />
                <span>{t.opportunityScoreTitle}</span>
              </h3>
              <button
                onClick={handleExplainScore}
                className="flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg bg-white text-emerald-800 border border-emerald-200 hover:bg-emerald-50 shadow-sm transition-all cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{t.whyThisScore}</span>
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.opportunityScale}
            </p>

            {/* Circular Gauge Display */}
            <div className="my-6 flex flex-col items-center justify-center">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="39"
                    fill="transparent"
                    stroke="#e2e8f0"
                    strokeWidth="7"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="39"
                    fill="transparent"
                    stroke="#059669"
                    strokeWidth="7"
                    strokeDasharray="245.04"
                    strokeDashoffset={245.04 - (245.04 * feasibility.opportunityScore) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-700 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-bold text-slate-900 font-mono">
                    {feasibility.opportunityScore}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                    / 100
                  </span>
                </div>
              </div>
              <div className="mt-1 text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                {t.highFeasibilityTier || (isHindi ? 'अनुकूल व्यावसायिक संभावना' : 'High Feasibility Tier')}
              </div>
            </div>
          </div>

          {/* Rationale Quote */}
          <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 text-xs text-slate-600 leading-relaxed italic shadow-inner">
            "{isHindi ? feasibility.scoreExplanationHi : feasibility.scoreExplanationEn}"
          </div>
        </div>

        {/* Right 2 Columns: 5 Factor Progress Breakdown */}
        <div className="surface-card rounded-2xl p-6 bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(15,23,42,0.035)] lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h4 className="text-base font-bold text-slate-900">
                {t.feasibilityPillarsTitle || (isHindi ? 'अवसर के 5 प्रमुख स्तंभ' : 'The 5 Feasibility Pillars')}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.scoreExplainSubtitle}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              Weighted Avg
            </span>
          </div>

          <div className="space-y-4 pt-1">
            {feasibility.factors.map((f, idx) => {
              const localizedPillar = getLocalizedPillars(lang)[idx];
              return (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">
                      {localizedPillar?.name || (isHindi ? f.nameHi : f.name)}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-400 font-mono">Weight: {f.weight}%</span>
                      <span className="font-mono font-bold text-emerald-700">{f.score}/100</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-emerald-600 transition-all duration-700"
                      style={{ width: `${f.score}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {localizedPillar?.note || (isHindi ? f.reasonHi : f.reasonEn)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: Distribution Channels & Competitor Spatial Analysis */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recommended Distribution Channels */}
        <div className="surface-card rounded-2xl p-6 bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(15,23,42,0.035)]">
          <div className="mb-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-emerald-700" />
              <span>{t.distributionTitle}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.distributionSub}
            </p>
          </div>

          <div className="space-y-3">
            {feasibility.distributionChannels.map((ch, idx) => {
              const Icon = channelIcons[ch.icon] || <Store className="w-4 h-4" />;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 flex items-start gap-3 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 flex items-center justify-center shrink-0">
                    {Icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {isHindi ? ch.nameHi : ch.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-emerald-800">
                          {ch.sharePercent}%
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded font-semibold bg-white text-emerald-700 border border-emerald-200">
                          {ch.feasibility}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {isHindi ? ch.descriptionHi : ch.descriptionEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competitor Analysis & Spatial Map */}
        <div className="surface-card rounded-2xl p-6 bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(15,23,42,0.035)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>{t.competitorTitle}</span>
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                {feasibility.competitorDensity} {t.densityLabel}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              {t.competitorSub} ({feasibility.competitorCount} {t.competitorCountLabel})
            </p>

            {/* Clean Spatial Map Canvas */}
            <div className="mt-4 relative h-60 rounded-xl bg-slate-50/80 border border-slate-200/90 shadow-inner overflow-hidden flex items-center justify-center select-none">
              {/* Radial dots grid */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* 5 km and 10 km concentric circles */}
              <div className="absolute w-36 h-36 rounded-full border border-dashed border-emerald-400 pointer-events-none" />
              <span className="absolute top-14 text-[9px] text-emerald-700 font-mono">5 km radius</span>

              <div className="absolute w-52 h-52 rounded-full border border-dashed border-slate-300 pointer-events-none" />
              <span className="absolute top-5 text-[9px] text-slate-400 font-mono">10 km radius</span>

              {/* Center User Location Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                  <Crosshair className="w-3 h-3" />
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded border border-emerald-200 mt-1 whitespace-nowrap shadow-2xs">
                  {location.village} (Proposed Site)
                </span>
              </div>

              {/* Competitor Pins */}
              {feasibility.competitors.map((comp) => {
                const isSelected = selectedCompetitorId === comp.id;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedCompetitorId(comp.id)}
                    style={{
                      transform: `translate(${comp.lngOffset * 1.5}px, ${comp.latOffset * 1.5}px)`,
                    }}
                    className={`absolute z-20 flex flex-col items-center group cursor-pointer transition-transform hover:scale-110 ${
                      isSelected ? 'scale-115 z-30' : ''
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-2xs ${
                        comp.isDirect
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-600 text-white'
                      }`}
                    >
                      {comp.id.toUpperCase()}
                    </div>
                    <span className="text-[9px] font-medium text-slate-700 bg-white px-1 rounded border border-slate-200 mt-0.5 whitespace-nowrap max-w-[90px] truncate shadow-2xs">
                      {comp.name}
                    </span>
                  </button>
                );
              })}

              {/* Map Footer Note */}
              <div className="absolute bottom-2 left-2 right-2 text-[10px] text-slate-500 bg-white/95 border border-slate-200/90 px-2.5 py-1.5 rounded-lg flex justify-between shadow-sm">
                <span>{t.mapNote}</span>
                <span className="text-amber-700 font-mono font-medium">Demo Markers</span>
              </div>
            </div>
          </div>

          {/* Competitor Detail Card */}
          <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            {selectedCompetitor ? (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{selectedCompetitor.name}</span>
                  <span className="text-amber-700 font-mono font-bold">{selectedCompetitor.distanceKm} km away</span>
                </div>
                <div className="text-slate-500 text-[11px]">{selectedCompetitor.type} • Rating: {selectedCompetitor.rating}★</div>
                <p className="text-slate-600 italic pt-0.5">{selectedCompetitor.notes}</p>
              </div>
            ) : (
              <div className="text-slate-500 text-center py-1">
                {isHindi
                  ? 'मैप पर किसी भी मार्कर पर क्लिक करके उसकी दूरी और प्रतिस्पर्धी विवरण देखें।'
                  : 'Click on any competitor marker on the map to inspect proximity and rating.'}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: Category-Specific SWOT Matrix */}
      <section className="surface-card rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(15,23,42,0.035)]">
        <div className="mb-6">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <PieChart className="w-4 h-4 text-emerald-700" />
            <span>{t.swotTitle}</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {isHindi 
              ? `प्रस्तावित ${feasibility.categoryName} उद्यम हेतु अनुकूलित विश्लेषण` 
              : `Calibrated specifically for ${feasibility.categoryName} operations in rural clusters.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Strengths */}
          <div className="p-4 rounded-xl bg-white border border-emerald-200/80 shadow-sm space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{t.swotStrengths}</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              {(isHindi ? feasibility.swot.strengthsHi : feasibility.swot.strengths).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-700 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="p-4 rounded-xl bg-white border border-amber-200/80 shadow-sm space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{t.swotWeaknesses}</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              {(isHindi ? feasibility.swot.weaknessesHi : feasibility.swot.weaknesses).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-amber-700 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities */}
          <div className="p-4 rounded-xl bg-white border border-sky-200/80 shadow-sm space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-800">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t.swotOpportunities}</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              {(isHindi ? feasibility.swot.opportunitiesHi : feasibility.swot.opportunities).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-sky-700 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Threats */}
          <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-sm space-y-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-800">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{t.swotThreats}</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-700">
              {(isHindi ? feasibility.swot.threatsHi : feasibility.swot.threats).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-rose-700 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: Local Threats & Actionable Mitigations */}
      <section className="surface-card rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(15,23,42,0.035)]">
        <div className="mb-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>{t.threatsTitle}</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {isHindi ? 'प्रत्येक पहचाने गए जोखिम का व्यावहारिक व क्रियान्वयन योग्य समाधान' : 'Actionable mitigation strategies to de-risk micro-enterprise operations.'}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-separate border-spacing-0">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 font-semibold bg-slate-50/80">
                <th className="py-2.5 px-4 rounded-l-lg">{t.threatColName}</th>
                <th className="py-2.5 px-4 w-28">{t.impactColName}</th>
                <th className="py-2.5 px-4 rounded-r-lg">{t.mitigationColName}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {feasibility.threatsList.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-900">
                    {isHindi ? row.threatHi : row.threat}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        row.impact === 'High'
                          ? 'bg-rose-50 text-rose-800 border border-rose-200'
                          : row.impact === 'Medium'
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {row.impact}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-emerald-800 font-medium">
                    {isHindi ? row.mitigationHi : row.mitigation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6: Pricing Benchmark & Margin Analysis */}
      <section className="surface-card rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-[0_6px_24px_rgba(15,23,42,0.035)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Tag className="w-4 h-4 text-emerald-700" />
              <span>{t.pricingTitle}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.pricingNote}
            </p>
          </div>
          <div className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold self-start sm:self-auto">
            {isHindi ? 'मार्जिन: ' : 'Margin: '} ~{feasibility.pricing.estimatedMarginPercent}%
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/90 shadow-inner mb-4">
          <span className="text-xs text-slate-500 block">{t.productBenchmark}:</span>
          <span className="text-sm font-bold text-slate-900 mt-0.5 block">
            {isHindi ? feasibility.pricing.productSampleHi : feasibility.pricing.productSample}
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="text-xs text-slate-500 block">{t.estimatedCostLabel}</span>
            <div className="text-xl font-bold text-slate-800 font-mono mt-1">
              {formatINR(feasibility.pricing.estimatedCost)}
            </div>
            <span className="text-[11px] text-slate-500">{isHindi ? 'थोक खरीद लागत' : 'Wholesale Mandi'}</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="text-xs text-slate-500 block">{t.localRangeLabel}</span>
            <div className="text-xl font-bold text-amber-700 font-mono mt-1">
              {formatINR(feasibility.pricing.localPriceMin)} – {formatINR(feasibility.pricing.localPriceMax)}
            </div>
            <span className="text-[11px] text-slate-500">{isHindi ? 'मौजूदा ग्रामीण बाजार' : 'Current Village Rates'}</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="text-xs text-slate-500 block">{t.suggestedPriceLabel}</span>
            <div className="text-xl font-bold text-emerald-700 font-mono mt-1">
              {formatINR(feasibility.pricing.suggestedPrice)}
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold">{isHindi ? 'इष्टतम प्रतिस्पर्धी मूल्य' : 'Optimal Competitive Price'}</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span className="text-xs text-slate-500 block">{t.marginLabel}</span>
            <div className="text-xl font-bold text-emerald-700 font-mono mt-1">
              {feasibility.pricing.estimatedMarginPercent}%
            </div>
            <span className="text-[11px] text-slate-500">
              {formatINR(feasibility.pricing.suggestedPrice - feasibility.pricing.estimatedCost)} / unit gross
            </span>
          </div>
        </div>

        {/* CTA to Financial Structuring */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex justify-end">
          <button
            onClick={onProceedToFinancial}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <Coins className="w-4 h-4 text-emerald-200" />
            <span>{isHindi ? 'वित्तीय संरचना व ऋण योजना देखें' : 'Proceed to Financial Structuring'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
