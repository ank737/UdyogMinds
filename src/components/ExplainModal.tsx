import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, CheckCircle2 } from 'lucide-react';
import { ExplainContext, Language } from '../types';

interface ExplainModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: ExplainContext | null;
  lang: Language;
}

export const ExplainModal: React.FC<ExplainModalProps> = ({ isOpen, onClose, context, lang }) => {
  if (!isOpen || !context) return null;

  const isHindi = lang === 'hi';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-xl p-6 text-slate-800 relative overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    {isHindi ? 'पारदर्शी गणना' : 'Transparent Explanation'}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium border border-slate-200">
                    Rule-Engine
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {isHindi ? context.titleHi : context.title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-xs text-slate-500 mt-3">
            {isHindi ? context.subtitleHi : context.subtitle}
          </p>

          <div className="overflow-y-auto pr-1 mt-4 space-y-4 flex-1">
            {/* Formula Block (if available) */}
            {context.formula && (
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs text-slate-800 flex items-center gap-3">
                <span className="text-[11px] text-slate-400 uppercase font-sans font-semibold">
                  {isHindi ? 'नियम / सूत्र:' : 'Rule / Formula:'}
                </span>
                <code className="text-emerald-700 font-bold">{context.formula}</code>
              </div>
            )}

            {/* Step-by-Step Breakdown */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {isHindi ? 'गणना चरण (Step-by-Step)' : 'Calculation Steps'}
              </h4>
              <div className="space-y-2">
                {context.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-slate-800">
                          {isHindi ? step.labelHi : step.labelEn}
                        </div>
                        {(step.noteEn || step.noteHi) && (
                          <div className="text-xs text-slate-500 mt-0.5">
                            {isHindi ? step.noteHi : step.noteEn}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 px-2.5 py-1 rounded-lg bg-white border border-slate-200 whitespace-nowrap font-mono shadow-2xs">
                      {step.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI / Regulatory Rationale */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
              <div className="flex items-center gap-1.5 mb-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>{isHindi ? 'नीति व डेटा औचित्य' : 'Policy & Advisory Rationale'}</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-700">
                {isHindi ? context.aiRationaleHi : context.aiRationaleEn}
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 mt-2 border-t border-slate-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              {isHindi ? 'समझ गया (बंद करें)' : 'Understood (Close)'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
