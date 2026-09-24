"use client";

import React, { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import TerminalDrawer from "@/components/TerminalDrawer";
import { Terminal } from "lucide-react";

function PortfolioContent() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <Projects />
        <Skills />
        <Certifications />
        <Timeline />
        <Contact />
      </main>
      <Footer />

      {/* Floating CLI Launch Trigger */}
      <button
        onClick={() => setTerminalOpen(true)}
        id="floating-terminal-trigger"
        aria-label="Open Interactive CLI Terminal"
        style={{
          position: "fixed",
          bottom: "26px",
          right: "26px",
          zIndex: 90,
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          padding: "0.75rem 1.25rem",
          background: "rgba(10, 15, 29, 0.88)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid var(--border-active)",
          borderRadius: "var(--radius-full)",
          color: "var(--accent-cyan)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
          fontWeight: 600,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.65), 0 0 25px rgba(56, 189, 248, 0.25)",
          transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
          e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.65), 0 0 25px rgba(56, 189, 248, 0.25)";
        }}
      >
        <Terminal size={17} />
        <span>AmineOS CLI</span>
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--accent-emerald)",
            boxShadow: "0 0 8px var(--accent-emerald)",
          }}
        />
      </button>

      {/* Interactive Terminal Drawer Emulator */}
      <TerminalDrawer isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
