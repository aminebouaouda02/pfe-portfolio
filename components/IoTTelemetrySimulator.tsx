"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Activity,
  Droplets,
  Thermometer,
  Sun,
  Zap,
  Radio,
  RotateCcw,
  AlertTriangle,
  Cpu,
  CheckCircle,
  Sliders,
  Power,
  ChevronRight,
} from "lucide-react";

interface TelemetryPoint {
  time: string;
  moisture: number;
  temp: number;
}

interface PacketLog {
  id: string;
  timestamp: string;
  topic: string;
  payload: string;
}

const TEXT = {
  en: {
    tag: "Live Edge Telemetry",
    title: "Interactive IoT & Sensor",
    titleAccent: "Simulator",
    subtitle:
      "A real-time telemetry simulator modeled after my Automated Smart Greenhouse project. Test actuators, inject anomalies, and observe edge MQTT data flow in real time.",
    brokerStatus: "MQTT Broker Connected",
    brokerUrl: "broker.amine-iot.lab:8883 (TLS v1.3 • QoS 1)",
    nodeId: "Edge Node: ESP32-ENSAM-GH01",
    moistureLabel: "Soil Moisture",
    tempLabel: "Ambient Temp",
    humidityLabel: "Air Humidity",
    solarLabel: "Solar / Light",
    pumpRelay: "Water Pump Relay",
    pumpStateOn: "PUMPING (2.4 L/min)",
    pumpStateOff: "IDLE / OFF",
    autoMode: "Auto-Regulation AI",
    autoModeDesc: "Triggers pump automatically when moisture < 35%",
    injectAnomaly: "Simulate Heatwave / Drought",
    resetBtn: "Reset Simulation",
    liveGraphTitle: "Live Sensor Waveform (Last 20 Samples)",
    moistureLegend: "Soil Moisture (%)",
    tempLegend: "Ambient Temp (°C)",
    rawPacketsTitle: "Live MQTT JSON Payloads (Topic: ensam/greenhouse/telemetry)",
    alertActive: "ALERT: Soil moisture below threshold (<35%). Automated irrigation triggered!",
    optimalStatus: "System Nominal: Microclimate balanced within optimal bounds.",
    activePower: "3.3V / 48mA Draw",
    latency: "Latency: 14ms",
  },
  fr: {
    tag: "Télémétrie Edge en Direct",
    title: "Simulateur Interactif IoT &",
    titleAccent: "Capteurs",
    subtitle:
      "Simulateur de télémétrie en temps réel inspiré de mon projet de Serre Connectée. Testez les actionneurs, injectez des anomalies et observez le flux MQTT Edge en direct.",
    brokerStatus: "Broker MQTT Connecté",
    brokerUrl: "broker.amine-iot.lab:8883 (TLS v1.3 • QoS 1)",
    nodeId: "Nœud Edge : ESP32-ENSAM-GH01",
    moistureLabel: "Humidité du Sol",
    tempLabel: "Temp. Ambiante",
    humidityLabel: "Humidité de l'Air",
    solarLabel: "Luminosité Solaire",
    pumpRelay: "Relais Pompe à Eau",
    pumpStateOn: "EN COURS (2.4 L/min)",
    pumpStateOff: "VEILLE / ARRÊT",
    autoMode: "Régulation Auto AI",
    autoModeDesc: "Active la pompe automatiquement si humidité < 35%",
    injectAnomaly: "Simuler Sécheresse / Canicule",
    resetBtn: "Réinitialiser",
    liveGraphTitle: "Onde Télémétrique en Temps Réel (20 derniers points)",
    moistureLegend: "Humidité Sol (%)",
    tempLegend: "Temp. (°C)",
    rawPacketsTitle: "Paquets Bruts MQTT JSON (Topic : ensam/greenhouse/telemetry)",
    alertActive: "ALERTE : Humidité sous le seuil (<35%). Irrigation d'urgence déclenchée !",
    optimalStatus: "Système Nominal : Paramètres climatiques optimaux.",
    activePower: "3.3V / 48mA Consommation",
    latency: "Latence : 14ms",
  },
};

export default function IoTTelemetrySimulator() {
  const { locale } = useLanguage();
  const t = TEXT[locale] || TEXT.en;

  // Simulator State
  const [moisture, setMoisture] = useState<number>(44.5);
  const [temp, setTemp] = useState<number>(24.2);
  const [airHumidity, setAirHumidity] = useState<number>(63.8);
  const [lux, setLux] = useState<number>(760);
  const [pumpActive, setPumpActive] = useState<boolean>(false);
  const [autoMode, setAutoMode] = useState<boolean>(true);
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const [packets, setPackets] = useState<PacketLog[]>([]);

  const historyRef = useRef<TelemetryPoint[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize history buffer
  useEffect(() => {
    const initial: TelemetryPoint[] = [];
    const now = Date.now();
    for (let i = 20; i >= 0; i--) {
      const ts = new Date(now - i * 1500);
      initial.push({
        time: ts.toLocaleTimeString([], { minute: "2-digit", second: "2-digit" }),
        moisture: 42 + Math.sin(i * 0.4) * 3,
        temp: 24 + Math.cos(i * 0.3) * 0.8,
      });
    }
    historyRef.current = initial;
  }, []);

  // Real-time ticking simulation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setMoisture((prevMoisture) => {
        let nextMoisture = prevMoisture;
        if (pumpActive) {
          // Pump running: soil gets watered
          nextMoisture = Math.min(78, +(prevMoisture + 1.6 + Math.random() * 0.6).toFixed(1));
        } else {
          // Slow evaporation
          nextMoisture = Math.max(18, +(prevMoisture - 0.28 - Math.random() * 0.15).toFixed(1));
        }

        // Auto-regulation trigger
        if (autoMode) {
          if (nextMoisture < 35 && !pumpActive) {
            setPumpActive(true);
            setIsAlert(true);
          } else if (nextMoisture >= 58 && pumpActive) {
            setPumpActive(false);
            setIsAlert(false);
          }
        } else {
          setIsAlert(nextMoisture < 35);
        }

        return nextMoisture;
      });

      // Fluctuate temperature and humidity slightly
      setTemp((prev) => {
        const delta = (Math.random() - 0.48) * 0.2;
        return +(prev + delta).toFixed(1);
      });

      setAirHumidity((prev) => {
        const delta = (Math.random() - 0.5) * 0.3;
        return +(prev + delta).toFixed(1);
      });

      setLux((prev) => {
        const delta = Math.floor((Math.random() - 0.5) * 8);
        return Math.max(200, Math.min(1200, prev + delta));
      });

      // Update time & packets
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { minute: "2-digit", second: "2-digit" });

      // Add to packet log
      const newPacket: PacketLog = {
        id: Math.random().toString(36).substring(2, 9),
        timestamp: now.toTimeString().split(" ")[0],
        topic: "ensam/greenhouse/zone1/telemetry",
        payload: JSON.stringify({
          node: "ESP32-GH01",
          soil_moisture: moisture,
          temp_c: temp,
          humidity_pct: airHumidity,
          pump: pumpActive,
          rssi: -58,
        }),
      };

      setPackets((prev) => [newPacket, ...prev.slice(0, 4)]);

      // Append point to history buffer
      historyRef.current = [
        ...historyRef.current.slice(-20),
        { time: timeStr, moisture, temp },
      ];

      // Redraw waveform on canvas
      drawWaveform();
    }, 1400);

    return () => clearInterval(interval);
  }, [moisture, temp, airHumidity, pumpActive, autoMode]);

  // Canvas waveform rendering
  const drawWaveform = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    const height = (canvas.height = 160);

    ctx.clearRect(0, 0, width, height);

    // Draw background grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let y = 30; y < height; y += 35) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const points = historyRef.current;
    if (points.length < 2) return;

    const step = width / (points.length - 1);

    // 1. Draw Soil Moisture Waveform (Cyan Glow)
    ctx.beginPath();
    points.forEach((pt, i) => {
      // Map 0 - 100% to canvas height (inverted)
      const y = height - (pt.moisture / 100) * (height - 30) - 15;
      const x = i * step;
      if (i === 0) ctx.moveTo(x, y);
      else {
        // Smooth curve
        const prev = points[i - 1];
        const prevX = (i - 1) * step;
        const prevY = height - (prev.moisture / 100) * (height - 30) - 15;
        const midX = (prevX + x) / 2;
        ctx.bezierCurveTo(midX, prevY, midX, y, x, y);
      }
    });

    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2.5;
    ctx.shadowColor = "rgba(56, 189, 248, 0.6)";
    ctx.shadowBlur = 10;
    ctx.stroke();
    ctx.shadowBlur = 0; // reset

    // 2. Draw Temperature Waveform (Purple Glow)
    ctx.beginPath();
    points.forEach((pt, i) => {
      // Map 15°C - 40°C to height
      const normalizedTemp = Math.max(0, Math.min(1, (pt.temp - 15) / 25));
      const y = height - normalizedTemp * (height - 40) - 20;
      const x = i * step;
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prev = points[i - 1];
        const prevNorm = Math.max(0, Math.min(1, (prev.temp - 15) / 25));
        const prevX = (i - 1) * step;
        const prevY = height - prevNorm * (height - 40) - 20;
        const midX = (prevX + x) / 2;
        ctx.bezierCurveTo(midX, prevY, midX, y, x, y);
      }
    });

    ctx.strokeStyle = "#a855f7";
    ctx.lineWidth = 2;
    ctx.shadowColor = "rgba(168, 85, 247, 0.5)";
    ctx.shadowBlur = 8;
    ctx.stroke();
    ctx.shadowBlur = 0;
  };

  // Anomaly trigger (Drought simulation)
  const handleInjectAnomaly = () => {
    setMoisture(21.4);
    setTemp(34.8);
    setAirHumidity(31.0);
    setIsAlert(true);
  };

  // Reset to ideal baseline
  const handleReset = () => {
    setMoisture(48.0);
    setTemp(24.0);
    setAirHumidity(65.0);
    setLux(750);
    setPumpActive(false);
    setIsAlert(false);
    setAutoMode(true);
  };

  return (
    <section id="telemetry" className="section-wrapper" style={{ position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div
            className="section-tag"
            style={{
              color: "var(--accent-cyan)",
              borderColor: "rgba(56, 189, 248, 0.3)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Radio size={13} className="animate-pulse" />
            {t.tag}
          </div>
          <h2 className="section-title">
            {t.title} <span className="gradient-text">{t.titleAccent}</span>
          </h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        {/* Simulator Main Card */}
        <div
          className="glass-card"
          style={{
            borderRadius: "var(--radius-lg)",
            border: isAlert
              ? "1px solid rgba(244, 63, 94, 0.45)"
              : "1px solid var(--border-subtle)",
            boxShadow: isAlert
              ? "0 0 35px rgba(244, 63, 94, 0.15)"
              : "var(--shadow-card)",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
        >
          {/* Top Status Bar */}
          <div
            style={{
              padding: "1rem 1.6rem",
              background: "rgba(6, 9, 19, 0.75)",
              borderBottom: "1px solid var(--border-subtle)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              fontSize: "0.85rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexWrap: "wrap" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--accent-emerald)",
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--accent-emerald)",
                    boxShadow: "0 0 8px var(--accent-emerald)",
                  }}
                />
                {t.brokerStatus}
              </span>
              <span style={{ color: "var(--text-dim)" }}>|</span>
              <span style={{ color: "var(--text-muted)" }}>{t.brokerUrl}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--text-dim)" }}>
              <span>{t.nodeId}</span>
              <span>•</span>
              <span style={{ color: "var(--accent-cyan)" }}>{t.latency}</span>
            </div>
          </div>

          {/* Alert / Nominal Banner */}
          <div
            style={{
              padding: "0.75rem 1.6rem",
              background: isAlert
                ? "rgba(244, 63, 94, 0.12)"
                : "rgba(16, 185, 129, 0.08)",
              borderBottom: "1px solid var(--border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              fontSize: "0.86rem",
              fontWeight: 500,
              color: isAlert ? "#fb7185" : "var(--accent-emerald)",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              {isAlert ? <AlertTriangle size={17} /> : <CheckCircle size={17} />}
              <span>{isAlert ? t.alertActive : t.optimalStatus}</span>
            </div>
            <span
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {t.activePower}
            </span>
          </div>

          {/* Sensor Gauges Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1px",
              background: "var(--border-subtle)",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            {/* Sensor 1: Soil Moisture */}
            <div
              style={{
                background: "rgba(12, 18, 34, 0.8)",
                padding: "1.4rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                }}
              >
                <span>{t.moistureLabel}</span>
                <Droplets size={16} color="var(--accent-cyan)" />
              </div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-mono)",
                  color: moisture < 35 ? "#fb7185" : "var(--accent-cyan)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "4px",
                }}
              >
                {moisture.toFixed(1)}
                <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-dim)" }}>
                  %
                </span>
              </div>
              {/* Progress Bar */}
              <div
                style={{
                  width: "100%",
                  height: "5px",
                  borderRadius: "3px",
                  background: "rgba(255, 255, 255, 0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${Math.min(100, Math.max(0, moisture))}%`,
                    background:
                      moisture < 35
                        ? "linear-gradient(90deg, #f43f5e, #fb7185)"
                        : "linear-gradient(90deg, #38bdf8, #3b82f6)",
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>

            {/* Sensor 2: Ambient Temp */}
            <div
              style={{
                background: "rgba(12, 18, 34, 0.8)",
                padding: "1.4rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                }}
              >
                <span>{t.tempLabel}</span>
                <Thermometer size={16} color="#a855f7" />
              </div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-mono)",
                  color: temp > 30 ? "#fb7185" : "#c084fc",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "4px",
                }}
              >
                {temp.toFixed(1)}
                <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-dim)" }}>
                  °C
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "5px",
                  borderRadius: "3px",
                  background: "rgba(255, 255, 255, 0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${Math.min(100, (temp / 45) * 100)}%`,
                    background: "linear-gradient(90deg, #8b5cf6, #ec4899)",
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>

            {/* Sensor 3: Air Humidity */}
            <div
              style={{
                background: "rgba(12, 18, 34, 0.8)",
                padding: "1.4rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                }}
              >
                <span>{t.humidityLabel}</span>
                <Activity size={16} color="var(--accent-emerald)" />
              </div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent-emerald)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "4px",
                }}
              >
                {airHumidity.toFixed(1)}
                <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-dim)" }}>
                  %
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "5px",
                  borderRadius: "3px",
                  background: "rgba(255, 255, 255, 0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${airHumidity}%`,
                    background: "linear-gradient(90deg, #10b981, #34d399)",
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>

            {/* Sensor 4: Solar Irradiance */}
            <div
              style={{
                background: "rgba(12, 18, 34, 0.8)",
                padding: "1.4rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                }}
              >
                <span>{t.solarLabel}</span>
                <Sun size={16} color="var(--accent-amber)" />
              </div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  fontFamily: "var(--font-mono)",
                  color: "var(--accent-amber)",
                  display: "flex",
                  alignItems: "baseline",
                  gap: "4px",
                }}
              >
                {lux}
                <span style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text-dim)" }}>
                  lx
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "5px",
                  borderRadius: "3px",
                  background: "rgba(255, 255, 255, 0.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${Math.min(100, (lux / 1000) * 100)}%`,
                    background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Interactive Controls & Chart Section */}
          <div
            style={{
              padding: "1.8rem",
              display: "grid",
              gridTemplateColumns: "1fr 340px",
              gap: "1.8rem",
              background: "rgba(10, 15, 29, 0.65)",
            }}
            className="telemetry-inner-grid"
          >
            {/* Left: Waveform Chart */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--text-main)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Activity size={16} color="var(--accent-cyan)" />
                  {t.liveGraphTitle}
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.2rem",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--accent-cyan)" }}>
                    <span style={{ width: "10px", height: "3px", background: "#38bdf8", borderRadius: "2px" }} />
                    {t.moistureLegend}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#a855f7" }}>
                    <span style={{ width: "10px", height: "3px", background: "#a855f7", borderRadius: "2px" }} />
                    {t.tempLegend}
                  </span>
                </div>
              </div>

              {/* Canvas Container */}
              <div
                style={{
                  background: "rgba(4, 7, 15, 0.95)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.8rem",
                  position: "relative",
                  boxShadow: "inset 0 2px 10px rgba(0, 0, 0, 0.8)",
                }}
              >
                <canvas ref={canvasRef} style={{ width: "100%", height: "160px", display: "block" }} />
              </div>

              {/* Raw JSON MQTT Packets */}
              <div style={{ marginTop: "1.4rem" }}>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {t.rawPacketsTitle}
                </span>
                <div
                  style={{
                    background: "rgba(4, 7, 15, 0.95)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.75rem 1rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.76rem",
                    color: "#94a3b8",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                    maxHeight: "110px",
                    overflowY: "hidden",
                  }}
                >
                  {packets.map((pkt, idx) => (
                    <div
                      key={pkt.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        opacity: 1 - idx * 0.22,
                      }}
                    >
                      <span style={{ color: "var(--accent-cyan)", flexShrink: 0 }}>[{pkt.timestamp}]</span>
                      <ChevronRight size={12} color="var(--text-dim)" />
                      <span
                        style={{
                          color: pkt.payload.includes('"pump":true') ? "var(--accent-emerald)" : "#e2e8f0",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {pkt.payload}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Controls */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                padding: "1.4rem",
                background: "rgba(6, 10, 22, 0.75)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--text-main)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Sliders size={17} color="var(--accent-cyan)" />
                <span>Actuators & Controls</span>
              </div>

              {/* Pump Toggle Button */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-main)" }}>
                    {t.pumpRelay}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-mono)",
                      padding: "2px 8px",
                      borderRadius: "var(--radius-full)",
                      background: pumpActive ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.06)",
                      color: pumpActive ? "var(--accent-emerald)" : "var(--text-dim)",
                    }}
                  >
                    {pumpActive ? t.pumpStateOn : t.pumpStateOff}
                  </span>
                </div>

                <button
                  onClick={() => setPumpActive(!pumpActive)}
                  id="telemetry-pump-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    padding: "0.65rem 1rem",
                    background: pumpActive
                      ? "linear-gradient(135deg, #10b981, #059669)"
                      : "rgba(255, 255, 255, 0.08)",
                    border: pumpActive ? "1px solid #10b981" : "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    color: pumpActive ? "#ffffff" : "var(--text-main)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Power size={15} />
                  <span>{pumpActive ? "Stop Pump (Manual Override)" : "Activate Water Pump"}</span>
                </button>
              </div>

              {/* Auto Mode Switch */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-sm)",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-main)" }}>
                    {t.autoMode}
                  </span>
                  <button
                    onClick={() => setAutoMode(!autoMode)}
                    id="telemetry-auto-toggle"
                    style={{
                      width: "42px",
                      height: "22px",
                      borderRadius: "11px",
                      background: autoMode ? "var(--accent-cyan)" : "rgba(255, 255, 255, 0.15)",
                      border: "none",
                      position: "relative",
                      cursor: "pointer",
                      transition: "background 0.25s ease",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: "2px",
                        left: autoMode ? "22px" : "2px",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "#fff",
                        transition: "left 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </button>
                </div>
                <p style={{ fontSize: "0.78rem", color: "var(--text-dim)", lineHeight: 1.4 }}>
                  {t.autoModeDesc}
                </p>
              </div>

              {/* Test Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "auto" }}>
                <button
                  onClick={handleInjectAnomaly}
                  id="telemetry-anomaly-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 0.9rem",
                    background: "rgba(244, 63, 94, 0.12)",
                    border: "1px solid rgba(244, 63, 94, 0.3)",
                    borderRadius: "var(--radius-sm)",
                    color: "#fb7185",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(244, 63, 94, 0.22)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(244, 63, 94, 0.12)";
                  }}
                >
                  <AlertTriangle size={15} />
                  <span>{t.injectAnomaly}</span>
                </button>

                <button
                  onClick={handleReset}
                  id="telemetry-reset-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 0.9rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-muted)",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--text-main)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  }}
                >
                  <RotateCcw size={14} />
                  <span>{t.resetBtn}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.telemetry-inner-grid) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
