import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey } from '../data/translations';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

const STORAGE_KEY = 'muhammadsodiq_portfolio_lang';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'uz' || saved === 'ru' || saved === 'kir') {
        return saved;
      }
    } catch {
      // Fallback if localStorage is restricted
    }
    return 'uz';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore if localStorage unavailable
    }
  };

  useEffect(() => {
    // Sync document html lang attribute
    const langAttr = language === 'kir' ? 'uz-Cyrl' : language;
    document.documentElement.lang = langAttr;
  }, [language]);

  const t = translations[language] || translations.uz;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
