"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Layout, Server, Database, Terminal, Cpu } from "lucide-react";

export default function Skills() {
  const { data } = useLanguage();
  const { skillCategories, ui } = data;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout size={22} color="var(--accent-cyan)" />;
      case "Server":
        return <Server size={22} color="var(--accent-purple)" />;
      case "Database":
        return <Database size={22} color="var(--accent-emerald)" />;
      case "Terminal":
        return <Terminal size={22} color="var(--accent-blue)" />;
      default:
        return <Cpu size={22} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper" style={{ background: "rgba(10, 15, 29, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">{ui.skills.tag}</div>
          <h2 className="section-title">
            {ui.skills.title} <span className="gradient-text">{ui.skills.titleAccent}</span>
          </h2>
          <p className="section-subtitle">
            {ui.skills.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  marginBottom: "1.8rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {getIcon(cat.iconName)}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{cat.title}</h3>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>
                    {cat.skills.length} {ui.skills.coreCount}
                  </span>
                </div>
              </div>

              {/* Skills list with proficiency meters */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        marginBottom: "0.4rem",
                      }}
                    >
                      <span style={{ color: "var(--text-main)" }}>{skill.name}</span>
                      <span style={{ color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div
                      style={{
                        width: "100%",
                        height: "6px",
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        borderRadius: "var(--radius-full)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: "100%",
                          background: "var(--gradient-accent)",
                          borderRadius: "var(--radius-full)",
                          boxShadow: "0 0 10px rgba(56, 189, 248, 0.4)",
                          transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
