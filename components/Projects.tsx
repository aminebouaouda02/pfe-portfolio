"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ExternalLink, Info, Sparkles, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "data", label: "Big Data & ML" },
    { id: "iot", label: "IoT & Embedded" },
    { id: "systems", label: "Systems & Simulation" },
    { id: "fullstack", label: "Full-Stack Web" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Featured Portfolio</div>
          <h2 className="section-title">
            Engineering <span className="gradient-text">Showcase</span>
          </h2>
          <p className="section-subtitle">
            A selection of production systems, real-time digital simulations, and distributed architecture projects.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              id={`filter-${cat.id}`}
              style={{
                padding: "0.55rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.88rem",
                fontWeight: 600,
                transition: "all 0.2s ease",
                background:
                  activeCategory === cat.id
                    ? "var(--gradient-accent)"
                    : "rgba(255, 255, 255, 0.05)",
                color: activeCategory === cat.id ? "#fff" : "var(--text-muted)",
                border:
                  activeCategory === cat.id
                    ? "1px solid transparent"
                    : "1px solid var(--border-subtle)",
                boxShadow:
                  activeCategory === cat.id ? "var(--shadow-glow)" : "none",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="glass-card project-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
                position: "relative",
              }}
            >
              <div>
                {/* Header row: category + featured badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.2rem",
                  }}
                >
                  <span
                    className="badge-pill"
                    style={{ textTransform: "capitalize", fontSize: "0.78rem" }}
                  >
                    <FolderGit2 size={13} /> {project.category}
                  </span>

                  {project.featured && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.78rem",
                        color: "var(--accent-amber)",
                        fontWeight: 600,
                      }}
                    >
                      <Sparkles size={14} /> Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    marginBottom: "0.8rem",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {project.title}
                </h3>

                {/* Summary */}
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.93rem",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.summary}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.45rem",
                    marginBottom: "1.8rem",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  id={`details-btn-${project.id}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.85rem",
                    color: "var(--accent-cyan)",
                    fontWeight: 600,
                    transition: "opacity 0.2s",
                  }}
                >
                  <Info size={15} /> Case Study
                </button>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      style={{
                        color: "var(--text-muted)",
                        padding: "0.3rem",
                        borderRadius: "6px",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ padding: "0.45rem 1rem", fontSize: "0.82rem" }}
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
