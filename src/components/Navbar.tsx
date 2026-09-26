import React, { useState } from 'react';
import { 
  Sparkles, 
  Globe, 
  ChevronDown, 
  FileText, 
  Layers, 
  Compass, 
  Coins, 
  Home, 
  Menu, 
  X,
  Landmark
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OFFICIAL_LANGUAGES } from '../data/languages';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenLanguageModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  lang,
  onLanguageChange,
  onOpenLanguageModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const currentLangObj = OFFICIAL_LANGUAGES.find(l => l.code === lang) || OFFICIAL_LANGUAGES[0];

  const navLinks = [
    { id: 'landing', label: t.navHome, icon: Home },
    { id: 'assessment', label: t.navAssessment, icon: Compass },
    { id: 'feasibility', label: t.navFeasibility, icon: Layers },
    { id: 'financial', label: t.navFinancial, icon: Coins },
    { id: 'report', label: t.navReport, icon: FileText },
    { id: 'schemes', label: t.navSchemes, icon: Landmark },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Main Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Brand */}
          <div 
            onClick={() => { onNavigate('landing'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-800 transition-colors">
              <Sparkles className="w-4 h-4 text-emerald-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight">
                  UdyogMinds
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  AI Advisory
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                {lang === 'hi' ? 'ग्रामीण सूक्ष्म-उद्यम मंच' : 'Hyper-Local Enterprise Platform'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2.5">
            {/* Language Selector Button with Globe */}
            <button
              id="open-language-modal-btn"
              onClick={onOpenLanguageModal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-50/70 text-slate-800 hover:text-emerald-900 border border-slate-300 hover:border-emerald-300 text-xs font-semibold shadow-2xs transition-all cursor-pointer group"
              title="Change Language / भाषा बदलें"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-200 transition-colors">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-slate-900 group-hover:text-emerald-900">
                  {currentLangObj.nativeName}
                </span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  ({currentLangObj.code.toUpperCase()})
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 transition-colors" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-down */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}

          <div className="pt-2 mt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLanguageModal();
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-emerald-50 text-emerald-900 text-sm font-semibold cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-700" />
                <span>Language: {currentLangObj.nativeName} ({currentLangObj.name})</span>
              </div>
              <span className="text-xs text-emerald-700 font-bold">Change</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
