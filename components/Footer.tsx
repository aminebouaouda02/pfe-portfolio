"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const { data } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "3.5rem 0 2.5rem 0",
        background: "rgba(6, 9, 19, 0.95)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "var(--gradient-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Terminal size={17} color="#fff" />
            </div>
            <span style={{ fontWeight: 700, fontSize: "1.05rem" }}>
              {data.personal.name}
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: "0.88rem", color: "var(--text-muted)" }}>
            <a href="#about" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>{data.ui.nav.about}</a>
            <a href="#projects" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>{data.ui.nav.projects}</a>
            <a href="#skills" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>{data.ui.nav.skills}</a>
            <a href="#certifications" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>{data.ui.nav.certifications}</a>
            <a href="#timeline" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>{data.ui.nav.timeline}</a>
            <a href="#contact" style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>{data.ui.nav.contact}</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            aria-label="Back to top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 1rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-muted)",
              fontSize: "0.82rem",
              fontWeight: 500,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "var(--border-active)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.borderColor = "var(--border-subtle)";
            }}
          >
            {data.ui.footer.backToTop} <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.82rem",
            color: "var(--text-dim)",
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {data.personal.name}. {data.ui.footer.rights}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
            {data.ui.footer.tagline}
          </div>
        </div>
      </div>
    </footer>
  );
}
