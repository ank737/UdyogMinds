import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MapPin, 
  Coins, 
  BarChart3, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  Layers, 
  Calculator,
  Compass, 
  FileCheck,
  TrendingUp,
  Building2,
  ShieldCheck,
  ArrowUpRight,
  Landmark
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface LandingPageProps {
  onStartAssessment: () => void;
  onOpenCalculator: () => void;
  onExploreSchemes?: () => void;
  lang: Language;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartAssessment,
  onOpenCalculator,
  onExploreSchemes,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const isHindi = lang === 'hi';

  const pipelineSteps = [
    { num: '01', title: t.step1Pipeline, desc: isHindi ? 'स्थान व स्वयं की पूंजी' : 'Location & Capital Input', icon: Compass },
    { num: '02', title: t.step2Pipeline, desc: isHindi ? 'आबादी, मांग व प्रतिस्पर्धी' : 'Demographics & Competition', icon: Layers },
    { num: '03', title: t.step3Pipeline, desc: isHindi ? '10x लागत व 90% बैंक ऋण' : '10x Outlay & 90% Loan', icon: Calculator },
    { num: '04', title: t.step4Pipeline, desc: isHindi ? 'सरकारी योजना व ईएमआई' : 'Scheme & Amortization', icon: FileCheck },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative w-full pt-8 sm:pt-16 px-4 sm:px-6 lg:px-8 text-center">
        {/* Institutional Pill */}
       

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
        >
          {isHindi ? (
            <span>
              ग्रामीण भारत के सूक्ष्म-उद्यमियों के लिए <br className="hidden sm:inline" />
              <span className="text-emerald-700">स्मार्ट व्यवसाय व वित्तीय सलाहकार</span>
            </span>
          ) : (
            <span>
              Hyper-Local Business Advisory & <br className="hidden sm:inline" />
              <span className="text-emerald-700">Financial Structuring</span> for Rural Bharat
            </span>
          )}
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          {isHindi
            ? 'स्थानीय आबादी व प्रतिस्पर्धा का सूक्ष्म विश्लेषण, 10 गुना प्रोजेक्ट लागत निर्धारण और पारदर्शी सरकारी ऋण योजना चयन।'
            : 'Evaluate village catchment feasibility, map local competition, and structure project cost and bank debt with zero black-box logic.'}
        </motion.p>

        {/* Core Principle Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.22 }}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200/90 text-xs text-slate-700 font-mono shadow-2xs"
        >
          <span className="text-amber-700 font-bold uppercase tracking-wider text-[11px]">
            {t.corePrincipleTag}:
          </span>
          <span className="text-slate-900 font-semibold">{t.corePrinciple}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <button
            id="cta-start-assessment"
            onClick={onStartAssessment}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-xs transition-colors cursor-pointer"
          >
            <span>{t.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="cta-financial-calculator"
            onClick={onOpenCalculator}
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-2xs transition-colors cursor-pointer"
          >
            <Coins className="w-4 h-4 text-amber-600" />
            <span>{t.secondaryCta}</span>
          </button>

          {onExploreSchemes && (
            <button
              id="cta-explore-schemes"
              onClick={onExploreSchemes}
              className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-semibold text-sm border border-emerald-300 shadow-2xs transition-colors cursor-pointer"
            >
              <Landmark className="w-4 h-4 text-emerald-700" />
              <span>{isHindi ? 'सरकारी योजनाएं देखें' : 'Govt Schemes'}</span>
            </button>
          )}
        </motion.div>
      </section>

      

      {/* 3 Value Pillars */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            {isHindi ? 'मूल क्षमताएं' : 'Platform Pillars'}
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            {isHindi ? 'उद्यम सफलता के तीन आधार' : 'Designed for Rural Economic Realities'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="surface-card-interactive rounded-2xl p-6 relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t.feature1Title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.feature1Desc}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isHindi ? '5 किमी व 10 किमी दायरा' : '5 km & 10 km Spatial Radii'}</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="surface-card-interactive rounded-2xl p-6 relative">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t.feature2Title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.feature2Desc}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-700">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isHindi ? 'आरबीआई व पीएमएमवाई दिशानिर्देश' : 'RBI 90:10 Credit Rules'}</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="surface-card-interactive rounded-2xl p-6 relative">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">{t.feature3Title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.feature3Desc}
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isHindi ? 'पारदर्शी व सत्यापन योग्य फॉर्मूला' : 'Verifiable Transparent Logic'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Pipeline */}
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="surface-card rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              {isHindi ? 'कार्यप्रणाली' : 'Standard Workflow'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              {t.pipelineTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xl font-bold text-slate-400">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
