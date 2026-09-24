"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Copy, Check, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const { data } = useLanguage();
  const { personal, ui } = data;
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: "rgba(10, 15, 29, 0.4)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">{ui.contact.tag}</div>
          <h2 className="section-title">
            {ui.contact.title} <span className="gradient-text">{ui.contact.titleAccent}</span>
          </h2>
          <p className="section-subtitle">
            {ui.contact.subtitle}
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Quick Copy */}
          <div>
            <div
              className="glass-card"
              style={{
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
                marginBottom: "1.5rem",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.8rem" }}>{ui.contact.directContactTitle}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.8rem" }}>
                {ui.contact.directContactDesc}
              </p>

              {/* Copy Email Button Box */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.85rem 1.2rem",
                  marginBottom: "1.8rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", overflow: "hidden" }}>
                  <Mail size={18} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.88rem",
                      color: "var(--text-main)",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {personal.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  id="copy-email-btn"
                  aria-label="Copy email address"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "var(--radius-sm)",
                    background: copied ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.08)",
                    color: copied ? "var(--accent-emerald)" : "var(--text-main)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    transition: "all 0.2s",
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={14} /> {ui.contact.copiedBtn}
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> {ui.contact.copyBtn}
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.8rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                    <GithubIcon size={18} color="var(--text-muted)" />
                    <span style={{ fontSize: "0.92rem", fontWeight: 500 }}>GitHub</span>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-cyan)" }}>{ui.contact.viewRepos}</span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.8rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                    <LinkedinIcon size={18} color="var(--text-muted)" />
                    <span style={{ fontSize: "0.92rem", fontWeight: 500 }}>LinkedIn</span>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-purple)" }}>{ui.contact.connectLinkedin}</span>
                </a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    padding: "0.8rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                  }}
                >
                  <MapPin size={18} color="var(--accent-emerald)" />
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div
            className="glass-card"
            style={{
              padding: "2.2rem",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{ui.contact.sendMessageTitle}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "1.8rem" }}>
              {ui.contact.sendMessageDesc}
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label
                  htmlFor="contact-name"
                  style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}
                >
                  {ui.contact.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder={ui.contact.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    color: "#fff",
                    fontSize: "0.92rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}
                >
                  {ui.contact.emailLabel}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder={ui.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    color: "#fff",
                    fontSize: "0.92rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.4rem" }}
                >
                  {ui.contact.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder={ui.contact.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    color: "#fff",
                    fontSize: "0.92rem",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                disabled={formStatus === "submitting"}
                className="btn-primary"
                style={{ width: "100%", marginTop: "0.5rem" }}
              >
                {formStatus === "submitting" ? (
                  ui.contact.submittingBtn
                ) : formStatus === "sent" ? (
                  ui.contact.submittedBtn
                ) : (
                  <>
                    {ui.contact.submitBtn} <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr 1.25fr;
          }
        }
      `}</style>
    </section>
  );
}
