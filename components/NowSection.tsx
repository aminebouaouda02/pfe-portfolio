"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, BookOpen, Compass, Coffee, Cpu, CheckCircle2 } from "lucide-react";

export default function NowSection() {
  const { data } = useLanguage();
  const { now } = data;

  if (!now) return null;

  return (
    <section id="now" className="section-wrapper" style={{ background: "rgba(10, 15, 29, 0.55)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag" style={{ color: "var(--accent-amber)", borderColor: "rgba(245, 158, 11, 0.3)" }}>
            <Sparkles size={13} style={{ display: "inline", marginRight: "4px" }} />
            {now.badge}
          </div>
          <h2 className="section-title">
            {now.title} <span className="gradient-text">{now.titleAccent}</span>
          </h2>
          <p className="section-subtitle">
            {now.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="now-grid">
          {/* Card 1: Current Focus & Reading */}
          <div
            className="glass-card"
            style={{
              padding: "2.2rem",
              borderRadius: "var(--radius-lg)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--accent-cyan)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1rem" }}>
                <Cpu size={20} />
                <span>{now.focusTitle}</span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.8rem" }}>
                {now.focusDesc}
              </p>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "1rem 1.2rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-purple)", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.4rem" }}>
                  <BookOpen size={16} /> {now.readingTitle}
                </div>
                <div style={{ color: "var(--text-main)", fontSize: "0.92rem", fontWeight: 500, fontStyle: "italic" }}>
                  &ldquo;{now.readingBook}&rdquo;
                </div>
              </div>
            </div>

            {/* Hospitality Tea Note */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "0.84rem",
                color: "var(--accent-amber)",
                background: "rgba(245, 158, 11, 0.08)",
                border: "1px solid rgba(245, 158, 11, 0.2)",
                padding: "0.75rem 1rem",
                borderRadius: "var(--radius-md)",
              }}
            >
              <Coffee size={18} style={{ flexShrink: 0 }} />
              <span>{now.coffeeTeaNote}</span>
            </div>
          </div>

          {/* Right Column: Radar & Beyond Code */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Curiosity Radar */}
            <div
              className="glass-card"
              style={{
                padding: "1.8rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "var(--accent-emerald)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "1.2rem" }}>
                <Compass size={18} />
                <span>{now.exploringTitle}</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
                {now.exploringItems.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.75rem 0.9rem",
                    }}
                  >
                    <div style={{ color: "var(--text-main)", fontWeight: 600, fontSize: "0.88rem", marginBottom: "0.2rem" }}>
                      {item.name}
                    </div>
                    <div style={{ color: "var(--text-dim)", fontSize: "0.75rem" }}>
                      {item.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond the Screen */}
            <div
              className="glass-card"
              style={{
                padding: "1.8rem",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-main)", marginBottom: "1rem" }}>
                {now.beyondTitle}
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {now.beyondItems.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontSize: "0.88rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <CheckCircle2 size={15} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .now-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 860px) {
          .now-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }
      `}</style>
    </section>
  );
}
