"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle2, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      id="project-detail-modal"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(3, 7, 18, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "fadeIn 0.2s ease-out",
      }}
    >
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "680px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "2.2rem",
          borderRadius: "var(--radius-lg)",
          position: "relative",
          border: "1px solid var(--border-active)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="modal-close-btn"
          aria-label="Close dialog"
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-muted)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.16)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-muted)";
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Category & Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
          <span className="badge-pill" style={{ textTransform: "capitalize" }}>
            <Layers size={13} /> {project.category}
          </span>
          {project.featured && <span className="badge-pill status">Featured</span>}
        </div>

        <h2 style={{ fontSize: "1.85rem", marginBottom: "1rem" }}>{project.title}</h2>

        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.8rem" }}>
          {project.description}
        </p>

        {/* Highlights */}
        <div style={{ marginBottom: "1.8rem" }}>
          <h4 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: "0.8rem" }}>
            Key Technical Highlights
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {project.highlights.map((highlight, idx) => (
              <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.92rem", color: "var(--text-main)" }}>
                <CheckCircle2 size={17} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div style={{ marginBottom: "2rem" }}>
          <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-dim)", marginBottom: "0.7rem" }}>
            Technologies &amp; Architecture
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem" }}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="modal-live-demo-btn"
            >
              Open Live Demo <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="modal-github-btn"
            >
              <GithubIcon size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
