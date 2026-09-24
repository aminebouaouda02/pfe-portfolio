"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

export default function Timeline() {
  const { timeline } = portfolioData;

  return (
    <section id="timeline" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Career Journey</div>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of professional experience, engineering roles, and academic foundation.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            position: "relative",
            paddingLeft: "2rem",
          }}
        >
          {/* Vertical continuous line */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              bottom: "20px",
              left: "17px",
              width: "2px",
              background: "linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple), transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {timeline.map((item) => (
              <div
                key={item.id}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Node Marker Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-2.6rem",
                    top: "0.2rem",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "var(--bg-main)",
                    border: "2px solid var(--accent-cyan)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 15px rgba(56, 189, 248, 0.4)",
                    zIndex: 2,
                  }}
                >
                  {item.type === "work" ? (
                    <Briefcase size={16} color="var(--accent-cyan)" />
                  ) : (
                    <GraduationCap size={16} color="var(--accent-purple)" />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: "1.8rem",
                    borderRadius: "var(--radius-md)",
                    marginLeft: "0.5rem",
                  }}
                >
                  {/* Top metadata line */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                        color: "var(--accent-cyan)",
                        fontWeight: 600,
                      }}
                    >
                      <Calendar size={13} /> {item.year}
                    </span>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.82rem",
                        color: "var(--text-dim)",
                      }}
                    >
                      <MapPin size={13} /> {item.location}
                    </span>
                  </div>

                  {/* Role & Org */}
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                    {item.role}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--accent-purple)",
                      fontWeight: 600,
                      marginBottom: "0.85rem",
                    }}
                  >
                    {item.organization}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.93rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                      marginBottom: "1.2rem",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Skills tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {item.skills.map((skill) => (
                      <span key={skill} className="tech-tag" style={{ fontSize: "0.74rem" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
