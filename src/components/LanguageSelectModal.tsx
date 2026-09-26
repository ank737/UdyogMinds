import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Search, 
  Check, 
  X, 
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';
import { OFFICIAL_LANGUAGES, OfficialLanguage } from '../data/languages';

interface LanguageSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelectLanguage: (lang: Language) => void;
  isInitialPrompt?: boolean;
}

type FilterCategory = 'All' | 'Popular' | 'North' | 'South' | 'East' | 'West';

export const LanguageSelectModal: React.FC<LanguageSelectModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectLanguage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [tentativeLang, setTentativeLang] = useState<Language>(currentLang);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Synchronize initial language
  useEffect(() => {
    if (isOpen) {
      setTentativeLang(currentLang);
      setSearchQuery('');
      setSelectedCategory('All');
    }
  }, [isOpen, currentLang]);

  // Lock background page scrolling completely while modal is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      // Prevent layout shift caused by scrollbar disappearing
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  // Keyboard accessibility (Escape key to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const categories: { id: FilterCategory; label: string; count: number }[] = [
    { id: 'All', label: 'All', count: OFFICIAL_LANGUAGES.length },
    { id: 'Popular', label: 'Most Spoken', count: OFFICIAL_LANGUAGES.filter(l => l.category === 'Popular').length },
    { id: 'North', label: 'North', count: OFFICIAL_LANGUAGES.filter(l => l.category === 'North').length },
    { id: 'South', label: 'South', count: OFFICIAL_LANGUAGES.filter(l => l.category === 'South').length },
    { id: 'East', label: 'East & NE', count: OFFICIAL_LANGUAGES.filter(l => l.category === 'East').length },
    { id: 'West', label: 'West', count: OFFICIAL_LANGUAGES.filter(l => l.category === 'West').length },
  ];

  const filteredLanguages = useMemo(() => {
    return OFFICIAL_LANGUAGES.filter((item) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.nativeName.toLowerCase().includes(query) ||
        item.region.toLowerCase().includes(query);

      const matchesCat =
        selectedCategory === 'All' ? true : item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const activeLanguageObj = useMemo(() => {
    return OFFICIAL_LANGUAGES.find(l => l.code === tentativeLang) || OFFICIAL_LANGUAGES[0];
  }, [tentativeLang]);

  const handleSelectAndConfirm = (code: Language) => {
    setTentativeLang(code);
    onSelectLanguage(code);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="language-select-modal-container"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-hidden bg-slate-950/60 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 8 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col select-none"
          role="dialog"
          aria-modal="true"
          aria-labelledby="language-modal-title"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar: Minimal, modern header */}
          <div className="px-5 pt-4 pb-3 sm:px-6 border-b border-slate-100 bg-white">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h2 id="language-modal-title" className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
                    Select Language <span className="text-slate-400 font-normal text-sm">/ अपनी भाषा चुनें</span>
                  </h2>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-none">
                    22 Official Indian Languages & English (८वीं अनुसूची)
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                id="close-language-modal-btn"
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Search & Filter Controls */}
            <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  id="language-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search language (e.g. বাংলা, Tamil, ગુજરાતી, मराठी)..."
                  className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-slate-800 placeholder:text-slate-400 text-xs border border-slate-200 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/30 outline-hidden transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Minimal category pills */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'bg-slate-100/80 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Languages Grid: Compact, clean cards that fit completely on screen without page or popup scrolling */}
          <div className="p-4 sm:p-5 bg-slate-50/40">
            {filteredLanguages.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-xs font-semibold text-slate-600">No language found matching "{searchQuery}"</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="mt-2 text-xs font-semibold text-emerald-700 hover:underline cursor-pointer"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                {filteredLanguages.map((langItem) => {
                  const isSelected = tentativeLang === langItem.code;

                  return (
                    <button
                      key={langItem.code}
                      id={`lang-card-${langItem.code}`}
                      type="button"
                      onClick={() => handleSelectAndConfirm(langItem.code)}
                      className={`group relative flex items-center justify-between px-3 py-2 rounded-xl text-left border transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                          : 'bg-white hover:bg-emerald-50/60 text-slate-800 hover:text-slate-900 border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="min-w-0 pr-1">
                        <div className={`text-xs sm:text-sm font-bold tracking-tight truncate leading-tight ${
                          isSelected ? 'text-white' : 'text-slate-900 group-hover:text-emerald-950'
                        }`}>
                          {langItem.nativeName}
                        </div>
                        <div className={`text-[10px] sm:text-[11px] font-medium truncate leading-tight mt-0.5 ${
                          isSelected ? 'text-emerald-100' : 'text-slate-400 group-hover:text-slate-600'
                        }`}>
                          {langItem.name}
                        </div>
                      </div>

                      {isSelected ? (
                        <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <span className="text-[10px] text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0 font-mono">
                          {langItem.code.toUpperCase()}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Minimalist Bottom Bar */}
          <div className="px-5 py-3 sm:px-6 bg-white border-t border-slate-100 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs text-slate-500 hidden sm:inline">Active:</span>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 truncate">
                {activeLanguageObj.nativeName} ({activeLanguageObj.name})
              </span>
              <span className="text-xs text-slate-400 hidden md:inline truncate">
                • {activeLanguageObj.greeting}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                id="cancel-language-btn"
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                id="confirm-language-btn"
                type="button"
                onClick={() => handleSelectAndConfirm(tentativeLang)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>Apply & Continue</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
