import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AppView,
  ExplainContext,
  Language,
  UserAssessmentState,
  BusinessCategory,
  GovtSchemeInfo
} from './types';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { AssessmentWizard } from './components/AssessmentWizard';
import { FeasibilityDashboard } from './components/FeasibilityDashboard';
import { FinancialDashboard } from './components/FinancialDashboard';
import { AdvisoryReport } from './components/AdvisoryReport';
import { ExplainModal } from './components/ExplainModal';
import { GovernmentSchemes } from './components/GovernmentSchemes';
import { LanguageSelectModal } from './components/LanguageSelectModal';
import { ChatbotFloating } from './components/ChatbotFloating';
import {
  getMockFeasibilityData,
  SAMPLE_LOCATIONS
} from './data/mockData';
import { computeFinancialAssessment } from './utils/calculations';

export default function App() {
  // Global View & Language State
  const [currentView, setCurrentView] = useState<AppView>('landing');

  // Initialize language from localStorage or default to 'en'
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('udyogminds_lang');
    return (saved as Language) || 'en';
  });

  // Language Selection Popup: Always show first when user opens website
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(true);

  // Explainability Modal State
  const [explainContext, setExplainContext] = useState<ExplainContext | null>(null);
  const [isExplainOpen, setIsExplainOpen] = useState<boolean>(false);

  // Active Assessment State (Initial default: village grocery in Mirzapur)
  const [assessment, setAssessment] = useState<UserAssessmentState>({
    location: {
      state: '',
      district: '',
      block: '',
      village: '',
    },
    capitalInput: '1,00,000',
    capitalAmount: 100000,
    category: 'grocery',
    businessDescription: 'Small grocery and daily FMCG essentials store serving local',
  });

  // Derived Real-time Feasibility & Financial Logic
  const feasibility = getMockFeasibilityData(
    assessment.category,
    assessment.location,
    assessment.capitalAmount
  );

  const financial = computeFinancialAssessment(assessment.capitalAmount);

  // Handler for language selection from popup or navbar
  const handleSelectLanguage = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('udyogminds_lang', newLang);
      localStorage.setItem('udyogminds_lang_chosen', 'true');
    } catch {
      // safe fallback if storage unavailable
    }
  };

  // Helper to open Explain Modal with any context
  const handleOpenExplain = (context: ExplainContext) => {
    setExplainContext(context);
    setIsExplainOpen(true);
  };

  // Capital modification from Financial Dashboard (re-computes dynamically)
  const handleCapitalChange = (newCapital: number, rawInput?: string) => {
    setAssessment((prev) => ({
      ...prev,
      capitalAmount: newCapital,
      capitalInput: rawInput || newCapital.toLocaleString('en-IN'),
    }));
  };

  // Reset to start a new assessment
  const handleStartNew = () => {
    setAssessment({
      location: SAMPLE_LOCATIONS[0],
      capitalAmount: 50000,
      capitalInput: '50,000',
      category: 'grocery',
      businessDescription: '',
    });
    setCurrentView('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view as AppView);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        lang={lang}
        onLanguageChange={handleSelectLanguage}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          {currentView === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <LandingPage
                onStartAssessment={() => {
                  setCurrentView('assessment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenCalculator={() => {
                  setCurrentView('financial');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onExploreSchemes={() => {
                  setCurrentView('schemes');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                lang={lang}
              />
            </motion.div>
          )}

          {currentView === 'assessment' && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="py-8"
            >
              <AssessmentWizard
                assessmentState={assessment}
                onChange={(newState) => setAssessment(newState)}
                onSubmit={() => {
                  setCurrentView('feasibility');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                lang={lang}
              />
            </motion.div>
          )}

          {currentView === 'feasibility' && (
            <motion.div
              key="feasibility"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="py-8"
            >
              <FeasibilityDashboard
                feasibility={feasibility}
                location={assessment.location}
                capitalAmount={assessment.capitalAmount}
                onOpenExplain={handleOpenExplain}
                onProceedToFinancial={() => {
                  setCurrentView('financial');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                lang={lang}
              />
            </motion.div>
          )}

          {currentView === 'financial' && (
            <motion.div
              key="financial"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="py-8"
            >
              <FinancialDashboard
                financial={financial}
                onCapitalChange={handleCapitalChange}
                onOpenExplain={handleOpenExplain}
                onProceedToReport={() => {
                  setCurrentView('report');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                lang={lang}
              />
            </motion.div>
          )}

          {currentView === 'report' && (
            <motion.div
              key="report"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="py-8"
            >
              <AdvisoryReport
                assessment={assessment}
                feasibility={feasibility}
                financial={financial}
                onStartNew={handleStartNew}
                lang={lang}
              />
            </motion.div>
          )}

          {(currentView === 'schemes' || currentView === 'architecture') && (
            <motion.div
              key="schemes"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <GovernmentSchemes
                lang={lang}
                assessment={assessment}
                financial={financial}
                onSelectSchemeForAssessment={(scheme: GovtSchemeInfo) => {
                  if (scheme.calculatorConfig) {
                    const margin = (scheme.calculatorConfig.defaultCost * (scheme.calculatorConfig.defaultMarginPercent || 10)) / 100;
                    setAssessment(prev => ({
                      ...prev,
                      capitalAmount: margin,
                      capitalInput: margin.toLocaleString('en-IN')
                    }));
                  }
                }}
                onNavigateToAssessment={() => {
                  setCurrentView('assessment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Transparent Explainability Modal */}
      <ExplainModal
        isOpen={isExplainOpen}
        onClose={() => setIsExplainOpen(false)}
        context={explainContext}
        lang={lang}
      />

      {/* Official Languages Selection Popup (All 22 Indian Languages + English) */}
      <LanguageSelectModal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        currentLang={lang}
        onSelectLanguage={handleSelectLanguage}
      />

      {/* Floating AI Chatbot (Accessible across all screens with session history) */}
      <ChatbotFloating
        lang={lang}
        assessment={assessment}
        feasibility={feasibility}
        financial={financial}
      />

      {/* Footer (hidden during print) */}
      <footer className="no-print border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">


        </div>
      </footer>
    </div>
  );
}
