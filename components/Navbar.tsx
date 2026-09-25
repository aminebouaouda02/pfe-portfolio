"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Navbar() {
  const { data, locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: data.ui.nav.about, href: "#about" },
    { label: data.ui.nav.now || "Now", href: "#now" },
    { label: data.ui.nav.projects, href: "#projects" },
    { label: locale === "fr" ? "Lab IoT" : "IoT Lab", href: "#telemetry" },
    { label: data.ui.nav.skills, href: "#skills" },
    { label: data.ui.nav.certifications, href: "#certifications" },
    { label: data.ui.nav.timeline, href: "#timeline" },
    { label: data.ui.nav.contact, href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(6, 9, 19, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        padding: scrolled ? "0.9rem 0" : "1.4rem 0",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-brand-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontWeight: 800,
            fontSize: "1.15rem",
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "var(--gradient-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(56, 189, 248, 0.35)",
            }}
          >
            <Terminal size={20} color="#fff" />
          </div>
          <span>
            {data.personal.name.split(" ")[0]}
            <span style={{ color: "var(--accent-cyan)" }}>.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav style={{ display: "none" }} className="desktop-nav">
          <ul style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-main)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          <LanguageToggle />

          <a
            href={data.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "var(--radius-full)",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-main)",
              transition: "border-color var(--transition-fast)",
            }}
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href="#contact"
            id="nav-contact-cta"
            className="btn-primary"
            style={{ padding: "0.55rem 1.25rem", fontSize: "0.85rem", display: "none" }}
          >
            {data.ui.nav.connect} <ArrowUpRight size={15} />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              color: "var(--text-main)",
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(6, 9, 19, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--text-main)",
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            {data.ui.nav.connect} <ArrowUpRight size={18} />
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 820px) {
          .desktop-nav {
            display: block !important;
          }
          #nav-contact-cta {
            display: inline-flex !important;
          }
          #mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
