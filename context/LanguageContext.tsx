"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { portfolioData, Locale, PortfolioData } from "@/data/portfolioData";

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang") as Locale | null;
      if (saved === "en" || saved === "fr") {
        setLocaleState(saved);
      }
    } catch {
      // localStorage may fail in restricted iframe environments
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("portfolio_lang", newLocale);
    } catch {
      // Ignore
    }
  };

  const toggleLocale = () => {
    const next = locale === "en" ? "fr" : "en";
    setLocale(next);
  };

  const data = portfolioData[locale] || portfolioData.en;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
