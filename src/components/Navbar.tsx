import React, { useState } from 'react';
import { 
  Globe, 
  ChevronDown, 
  FileText, 
  Layers, 
  Compass, 
  Coins, 
  Home, 
  Menu, 
  X,
  Landmark,
  Sun,
  Moon
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OFFICIAL_LANGUAGES } from '../data/languages';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  lang: Language;
  theme: 'light' | 'dark';
  onLanguageChange: (lang: Language) => void;
  onOpenLanguageModal: () => void;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  lang,
  theme,
  onLanguageChange,
  onOpenLanguageModal,
  onToggleTheme,
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
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--header-bg)]/95 backdrop-blur-md shadow-[var(--shadow-soft)]">
      {/* Main Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <div 
            onClick={() => { onNavigate('landing'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div>
              <span className="font-bold text-lg tracking-tight text-[var(--text-primary)]">
                UdyogMinds
              </span>
              
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
                      ? 'bg-[var(--accent-soft)] text-[var(--accent-strong)] border border-[var(--accent)]/20 shadow-[var(--shadow-card)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-strong)]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle light and dark mode"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] shadow-[var(--shadow-soft)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              title="Toggle light / dark mode"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Language Selector Button with Globe */}
            <button
              id="open-language-modal-btn"
              onClick={onOpenLanguageModal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--surface)] hover:bg-[var(--surface-strong)] text-[var(--text-primary)] hover:text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--accent)] text-xs font-semibold shadow-[var(--shadow-soft)] transition-all cursor-pointer group"
              title="Change Language / भाषा बदलें"
            >
              <div className="w-5 h-5 rounded-full bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/10 transition-colors">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                  {currentLangObj.nativeName}
                </span>
                <span className="text-[11px] text-[var(--text-muted)] hidden sm:inline">
                  ({currentLangObj.code.toUpperCase()})
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
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
                    ? 'bg-[var(--accent-soft)] text-[var(--accent-strong)] font-bold'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-strong)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`} />
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
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-strong)] text-sm font-semibold cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[var(--accent)]" />
                <span>Language: {currentLangObj.nativeName} ({currentLangObj.name})</span>
              </div>
              <span className="text-xs text-[var(--accent)] font-bold">Change</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
