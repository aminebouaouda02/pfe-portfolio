"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, ExternalLink, Sparkles, Mail, Terminal, CheckCircle2, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface HeroProps {
  onOpenTerminal?: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  const { personal, stats } = portfolioData;

  return (
    <section
      id="about"
      style={{
        paddingTop: "9rem",
        paddingBottom: "5rem",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Status Badge */}
            <div style={{ marginBottom: "1.5rem" }}>
              <span className="badge-pill status">
                <span className="pulse-dot" />
                {personal.statusBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Engineering Big Data, AI &amp;{" "}
              <span className="gradient-text">Intelligent IoT Systems</span>
            </h1>

            {/* Bio Paragraph */}
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--text-muted)",
                maxWidth: "580px",
                lineHeight: 1.7,
                marginBottom: "2.2rem",
              }}
            >
              Hi, I&apos;m <strong style={{ color: "var(--text-main)" }}>{personal.name}</strong> — {personal.role}.
              {" "}{personal.bio}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
              <a href="#projects" id="hero-explore-projects-btn" className="btn-primary">
                Explore Projects <ArrowDown size={17} />
              </a>

              <a
                href={personal.resumeUrl}
                download="CV_Amine_Bouaouda.pdf"
                id="hero-download-cv-btn"
                className="btn-secondary"
              >
                <FileDown size={17} /> Download CV
              </a>

              <a href="#contact" id="hero-contact-btn" className="btn-secondary">
                Get In Touch <Mail size={17} />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                className="btn-secondary"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={17} /> GitHub
              </a>
            </div>

            {/* Social quick links */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", color: "var(--text-dim)", fontSize: "0.9rem" }}>
              <span>Follow me:</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Right Column: Code Window / Tech Showcase Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="glass-card"
              style={{
                width: "100%",
                maxWidth: "500px",
                padding: "1.8rem",
                borderRadius: "var(--radius-lg)",
                position: "relative",
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--border-subtle)",
                  marginBottom: "1.2rem",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
                  <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--text-dim)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Terminal size={14} color="var(--accent-cyan)" />
                  engineer-profile.ts
                </div>

                {onOpenTerminal && (
                  <button
                    onClick={onOpenTerminal}
                    id="hero-launch-cli-btn"
                    title="Open AmineOS Interactive Terminal"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-emerald)",
                      background: "rgba(16, 185, 129, 0.12)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "var(--radius-full)",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(16, 185, 129, 0.25)";
                      e.currentTarget.style.borderColor = "var(--accent-emerald)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(16, 185, 129, 0.12)";
                      e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.3)";
                    }}
                  >
                    Run CLI &gt;_
                  </button>
                )}
              </div>

              {/* Code Snippet */}
              <pre
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  color: "#cbd5e1",
                  overflowX: "auto",
                }}
              >
                <code>
                  <span style={{ color: "#f472b6" }}>const</span>{" "}
                  <span style={{ color: "#38bdf8" }}>engineer</span> = &#123;
                  {"\n"}  name: <span style={{ color: "#a5f3fc" }}>&quot;{personal.name}&quot;</span>,
                  {"\n"}  school: <span style={{ color: "#a5f3fc" }}>&quot;ENSAM Casablanca&quot;</span>,
                  {"\n"}  degree: <span style={{ color: "#a5f3fc" }}>&quot;Master BDIoT&quot;</span>,
                  {"\n"}  focus: [<span style={{ color: "#38bdf8" }}>&quot;AI &amp; ML&quot;</span>, <span style={{ color: "#818cf8" }}>&quot;Big Data &amp; IoT&quot;</span>],
                  {"\n"}  stack: [<span style={{ color: "#34d399" }}>&quot;Python&quot;</span>, <span style={{ color: "#38bdf8" }}>&quot;Spark&quot;</span>, <span style={{ color: "#fbbf24" }}>&quot;Hadoop&quot;</span>, <span style={{ color: "#818cf8" }}>&quot;Flutter&quot;</span>],
                  {"\n"}  readyForImpact: <span style={{ color: "#34d399" }}>true</span>,
                  {"\n"}&#125;;
                  {"\n\n"}
                  <span style={{ color: "#64748b" }}>// Scalable distributed intelligence</span>
                  {"\n"}
                  <span style={{ color: "#f472b6" }}>export default function</span>{" "}
                  <span style={{ color: "#818cf8" }}>architectSolutions</span>() &#123;
                  {"\n"}  <span style={{ color: "#f472b6" }}>return</span> engineer.passion;
                  {"\n"}&#125;
                </code>
              </pre>

              {/* Quick Feature Badges below terminal */}
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.2rem",
                  borderTop: "1px solid var(--border-subtle)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.8rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" /> Distributed Systems
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={16} color="var(--accent-purple)" /> Machine Learning
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" /> IoT Automation
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={16} color="var(--accent-blue)" /> Full-Stack Architecture
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          style={{
            marginTop: "4.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "1.6rem",
                textAlign: "center",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div
                className="gradient-text"
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.88rem", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }
      `}</style>
    </section>
  );
}
