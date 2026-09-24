"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      id="language-switcher-pill"
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-full)",
        padding: "3px",
        gap: "2px",
      }}
    >
      <button
        onClick={() => setLocale("en")}
        id="lang-btn-en"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 10px",
          borderRadius: "var(--radius-full)",
          fontSize: "0.78rem",
          fontWeight: 600,
          background: locale === "en" ? "var(--gradient-accent)" : "transparent",
          color: locale === "en" ? "#fff" : "var(--text-muted)",
          boxShadow: locale === "en" ? "0 0 12px rgba(56, 189, 248, 0.35)" : "none",
          transition: "all 0.2s ease",
          cursor: "pointer",
        }}
        title="Switch to English"
      >
        <span>🇬🇧</span>
        <span>EN</span>
      </button>

      <button
        onClick={() => setLocale("fr")}
        id="lang-btn-fr"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 10px",
          borderRadius: "var(--radius-full)",
          fontSize: "0.78rem",
          fontWeight: 600,
          background: locale === "fr" ? "var(--gradient-accent)" : "transparent",
          color: locale === "fr" ? "#fff" : "var(--text-muted)",
          boxShadow: locale === "fr" ? "0 0 12px rgba(56, 189, 248, 0.35)" : "none",
          transition: "all 0.2s ease",
          cursor: "pointer",
        }}
        title="Passer en Français"
      >
        <span>🇫🇷</span>
        <span>FR</span>
      </button>
    </div>
  );
}
