"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, Mail, Terminal, CheckCircle2, FileDown, Clock, MapPin, Sparkles, Coffee } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface HeroProps {
  onOpenTerminal?: () => void;
}

function useCasablancaTime() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Casablanca",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setTimeStr(formatter.format(now));
      } catch {
        setTimeStr("");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeStr;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  const { data } = useLanguage();
  const { personal, stats, ui } = data;
  const casablancaTime = useCasablancaTime();

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
          {/* Left Column: Story, Headline & CTAs */}
          <div>
            {/* Status & Warm Greeting Pill */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <span className="badge-pill status">
                <span className="pulse-dot" />
                {personal.statusBadge}
              </span>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent-amber)",
                  background: "rgba(245, 158, 11, 0.1)",
                  border: "1px solid rgba(245, 158, 11, 0.25)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "var(--radius-full)",
                  fontWeight: 600,
                }}
              >
                <Sparkles size={13} /> {personal.taglineGreeting} Amine
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              {ui.hero.headlinePrefix}{" "}
              <span className="gradient-text">{ui.hero.headlineAccent}</span>
            </h1>

            {/* Bio Paragraph */}
            <p
              style={{
                fontSize: "1.12rem",
                color: "var(--text-muted)",
                maxWidth: "600px",
                lineHeight: 1.75,
                marginBottom: "2.2rem",
              }}
            >
              {personal.bio}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
              <a href="#projects" id="hero-explore-projects-btn" className="btn-primary">
                {ui.hero.exploreProjects} <ArrowDown size={17} />
              </a>

              <a
                href={personal.resumeUrl}
                download="CV_Amine_Bouaouda.pdf"
                id="hero-download-cv-btn"
                className="btn-secondary"
              >
                <FileDown size={17} /> {ui.hero.downloadCv}
              </a>

              <a href="#now" id="hero-now-btn" className="btn-secondary">
                <Coffee size={16} color="var(--accent-amber)" /> {ui.hero.viewNowBtn}
              </a>

              <a href="#contact" id="hero-contact-btn" className="btn-secondary">
                <Mail size={17} /> {ui.hero.getInTouch}
              </a>
            </div>

            {/* Social quick links */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", color: "var(--text-dim)", fontSize: "0.9rem" }}>
              <span>{ui.hero.followMe}</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.35rem", color: "var(--text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Personal Identity & Live Presence Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="glass-card"
              style={{
                width: "100%",
                maxWidth: "480px",
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
                position: "relative",
                border: "1px solid var(--border-active)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(56, 189, 248, 0.15)",
              }}
            >
              {/* Header: Live Casablanca Clock & City */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1.2rem",
                  borderBottom: "1px solid var(--border-subtle)",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--text-main)", fontWeight: 600 }}>
                  <MapPin size={15} color="var(--accent-cyan)" />
                  <span>{ui.hero.liveClockCity}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: "var(--accent-emerald)",
                    background: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "var(--radius-full)",
                    fontWeight: 600,
                  }}
                >
                  <Clock size={13} />
                  <span>{casablancaTime ? `${casablancaTime} (UTC+1)` : "Casablanca (UTC+1)"}</span>
                </div>
              </div>

              {/* Profile Card Body: Avatar & Real Persona */}
              <div style={{ display: "flex", gap: "1.4rem", alignItems: "center", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    position: "relative",
                    width: "92px",
                    height: "92px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "2px solid rgba(56, 189, 248, 0.4)",
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)",
                  }}
                >
                  <Image
                    src={personal.avatar}
                    alt={personal.name}
                    fill
                    sizes="92px"
                    style={{
                      objectFit: "cover",
                    }}
                    priority
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      right: "5px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "var(--accent-emerald)",
                      border: "2px solid #060913",
                      boxShadow: "0 0 8px var(--accent-emerald)",
                    }}
                    title="Active"
                  />
                </div>

                <div>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.25rem" }}>
                    {personal.name}
                  </h3>
                  <div style={{ fontSize: "0.88rem", color: "var(--accent-cyan)", fontWeight: 600, marginBottom: "0.3rem" }}>
                    Master BDIoT @ ENSAM Casablanca
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-dim)", lineHeight: 1.4 }}>
                    {personal.motto}
                  </div>
                </div>
              </div>

              {/* Status Activity Callout */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.85rem 1rem",
                  fontSize: "0.84rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <Coffee size={16} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
                <span>{personal.statusActivity}</span>
              </div>

              {/* Feature Badges Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={16} color="var(--accent-cyan)" /> {ui.hero.badgeDistributed}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={16} color="var(--accent-purple)" /> {ui.hero.badgeML}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" /> {ui.hero.badgeIoT}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  <CheckCircle2 size={16} color="var(--accent-blue)" /> {ui.hero.badgeFullstack}
                </div>
              </div>

              {/* Terminal Launcher Trigger Footer */}
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  id="hero-launch-cli-btn"
                  title="Open AmineOS Interactive Terminal"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(56, 189, 248, 0.08)",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    color: "var(--accent-cyan)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(56, 189, 248, 0.18)";
                    e.currentTarget.style.borderColor = "var(--accent-cyan)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(56, 189, 248, 0.08)";
                    e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.25)";
                  }}
                >
                  <Terminal size={15} />
                  <span>{ui.hero.runCliBtn}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Human Metrics & Milestones Row */}
        <div
          style={{
            marginTop: "4.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "1.6rem 1.4rem",
                textAlign: "center",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div
                className="gradient-text"
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 800,
                  marginBottom: "0.2rem",
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: "var(--text-main)", fontSize: "0.95rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                {stat.label}
              </div>
              {stat.sub && (
                <div style={{ color: "var(--text-dim)", fontSize: "0.8rem", lineHeight: 1.4 }}>
                  {stat.sub}
                </div>
              )}
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
