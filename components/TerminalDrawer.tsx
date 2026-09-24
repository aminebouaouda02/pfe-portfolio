"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Terminal, X } from "lucide-react";

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TerminalHistoryItem {
  command?: string;
  output: string | React.ReactNode;
  isError?: boolean;
}

export default function TerminalDrawer({ isOpen, onClose }: TerminalDrawerProps) {
  const { data, locale } = useLanguage();
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalHistoryItem[]>([]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case "help":
        output = (
          <div style={{ lineHeight: 1.6 }}>
            <span style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
              {data.ui.terminal.commandsTitle}
            </span>
            <br />
            • <strong style={{ color: "#38bdf8" }}>about</strong> : {data.ui.terminal.cmdAbout}
            <br />
            • <strong style={{ color: "#38bdf8" }}>ensam</strong> : {data.ui.terminal.cmdEnsam}
            <br />
            • <strong style={{ color: "#38bdf8" }}>skills</strong> : {data.ui.terminal.cmdSkills}
            <br />
            • <strong style={{ color: "#38bdf8" }}>projects</strong> : {data.ui.terminal.cmdProjects}
            <br />
            • <strong style={{ color: "#38bdf8" }}>hadoop</strong> : {data.ui.terminal.cmdHadoop}
            <br />
            • <strong style={{ color: "#38bdf8" }}>contact</strong> : {data.ui.terminal.cmdContact}
            <br />
            • <strong style={{ color: "#38bdf8" }}>clear</strong> : {data.ui.terminal.cmdClear}
            <br />
            • <strong style={{ color: "#38bdf8" }}>exit</strong> : {data.ui.terminal.cmdExit}
          </div>
        );
        break;

      case "about":
        output = (
          <div>
            <strong>{data.personal.name}</strong> — {data.personal.role}
            <br />
            <span style={{ color: "var(--text-muted)" }}>{data.personal.bio}</span>
          </div>
        );
        break;

      case "ensam":
        output = (
          <div>
            <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>
              🎓 ENSAM Casablanca (2025 — Present)
            </span>
            <br />
            Master en Big Data &amp; Internet of Things (BDIoT).
            <br />
            <span style={{ color: "var(--text-muted)" }}>
              {data.ui.terminal.ensamSpecialization}
            </span>
          </div>
        );
        break;

      case "skills":
        output = (
          <div>
            <span style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
              {data.ui.terminal.matrixTitle}
            </span>
            <br />
            📁 Big Data: Hadoop (HDFS, YARN), Apache Spark, Kafka, NoSQL, PostgreSQL
            <br />
            🧠 AI &amp; ML: Python, Scikit-Learn, n8n Automation, Data Science
            <br />
            💻 Languages: Java, Spring Boot, Flutter, Dart, PHP, Laravel, C/C++, JS
            <br />
            ☁️ Infra/IoT: Docker, Linux Shell, Arduino Uno, AWS Cloud, Git CI/CD
          </div>
        );
        break;

      case "projects":
        output = (
          <div>
            <span style={{ color: "var(--accent-emerald)", fontWeight: 600 }}>
              {data.ui.terminal.featuredTitle}
            </span>
            {data.projects.slice(0, 4).map((p, idx) => (
              <div key={p.id}>
                {idx + 1}. <strong>{p.title}</strong> ({p.tags.slice(0, 3).join(", ")})
              </div>
            ))}
          </div>
        );
        break;

      case "hadoop":
        output = (
          <div style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
            [HADOOP CLUSTER TELEMETRY]
            <br />
            &bull; Master Node: active (HDFS NameNode + YARN ResourceManager)
            <br />
            &bull; DataNodes: 3 containers running (HDFS capacity: 100% healthy)
            <br />
            &bull; Spark Context: ready (PySpark session active)
            <br />
            &bull; Docker Network: bridge-ensam-bdiot (172.20.0.0/16)
          </div>
        );
        break;

      case "contact":
        output = (
          <div>
            📧 Email: {data.personal.email}
            <br />
            💼 LinkedIn: {data.personal.linkedin}
            <br />
            🐙 GitHub: {data.personal.github}
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
        onClose();
        setInputVal("");
        return;

      default:
        output = (
          <span style={{ color: "#f87171" }}>
            {data.ui.terminal.cmdNotFound}: &quot;{cmd}&quot;. Type &quot;help&quot; for a list of available commands.
          </span>
        );
        break;
    }

    setHistory((prev: TerminalHistoryItem[]) => [...prev, { command: cmd, output }]);
    setInputVal("");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      id="terminal-emulator-dialog"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(3, 7, 18, 0.8)",
        backdropFilter: "blur(12px)",
        zIndex: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.25rem",
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "760px",
          height: "540px",
          background: "rgba(8, 12, 22, 0.95)",
          border: "1px solid var(--border-active)",
          borderRadius: "var(--radius-lg)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 35px rgba(56, 189, 248, 0.2)",
          overflow: "hidden",
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            padding: "0.85rem 1.25rem",
            background: "rgba(255, 255, 255, 0.04)",
            borderBottom: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                onClick={onClose}
                style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }}
                aria-label="Close"
              />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                marginLeft: "0.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <Terminal size={14} color="var(--accent-cyan)" />
              amine-bouaouda@ensam-casa:~
            </span>
          </div>

          <button
            onClick={onClose}
            style={{ color: "var(--text-dim)", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
            aria-label="Close Terminal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Terminal Body */}
        <div
          style={{
            flex: 1,
            padding: "1.25rem",
            overflowY: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: "0.88rem",
            lineHeight: 1.6,
          }}
        >
          {/* Welcome Banner */}
          <div style={{ marginBottom: "0.9rem" }}>
            <span style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>
              {data.ui.terminal.welcomeTitle}
            </span>
            <br />
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
              {data.ui.terminal.welcomeSubtitle}{" "}
              <span style={{ color: "var(--accent-emerald)" }}>help</span>{" "}
              {locale === "fr" ? "pour afficher les commandes disponibles." : "to list available commands."}
            </span>
          </div>

          {history.map((item: TerminalHistoryItem, idx: number) => (
            <div key={idx} style={{ marginBottom: "0.9rem" }}>
              {item.command && (
                <div style={{ color: "var(--accent-cyan)", marginBottom: "0.25rem" }}>
                  <span style={{ color: "var(--accent-emerald)" }}>guest@amine-bouaouda</span>
                  <span style={{ color: "var(--text-dim)" }}>:</span>
                  <span style={{ color: "var(--accent-purple)" }}>~</span>$ {item.command}
                </div>
              )}
              <div style={{ color: "#e2e8f0" }}>{item.output}</div>
            </div>
          ))}

          {/* Prompt line */}
          <form onSubmit={handleCommand} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "var(--accent-emerald)" }}>guest@amine-bouaouda</span>
            <span style={{ color: "var(--text-dim)" }}>:</span>
            <span style={{ color: "var(--accent-purple)" }}>~</span>$
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={data.ui.terminal.inputPlaceholder}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                fontFamily: "var(--font-mono)",
                fontSize: "0.88rem",
              }}
            />
          </form>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
}
