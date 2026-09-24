"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Award, ShieldCheck } from "lucide-react";

export default function Certifications() {
  const { data } = useLanguage();
  const { certifications, ui } = data;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="section-wrapper" style={{ background: "rgba(10, 15, 29, 0.45)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">{ui.certifications.tag}</div>
          <h2 className="section-title">
            {ui.certifications.title} <span className="gradient-text">{ui.certifications.titleAccent}</span>
          </h2>
          <p className="section-subtitle">
            {ui.certifications.subtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                padding: "1.85rem",
                borderRadius: "var(--radius-lg)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* Header row with icon and date */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.2rem",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      background: "rgba(56, 189, 248, 0.1)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Award size={22} color="var(--accent-cyan)" />
                  </div>

                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-purple)",
                      fontWeight: 600,
                    }}
                  >
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                  {cert.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.88rem",
                    color: "var(--accent-cyan)",
                    fontWeight: 600,
                    marginBottom: "1.2rem",
                  }}
                >
                  <ShieldCheck size={16} />
                  <span>{cert.issuer}</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                {cert.skills.map((skill) => (
                  <span key={skill} className="tech-tag" style={{ fontSize: "0.72rem" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
