"use client";

import { useEffect, useRef } from "react";

const useCases = [
  {
    id: "conferences",
    tag: "01 — CONFERENCE",
    title: "Conferences & presentations",
    description:
      "Project your slides or demos from your phone to the room display — or let every attendee follow along on their own device. No HDMI adapter panic.",
    visual: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
        {/* Conference screen */}
        <rect x="60" y="10" width="160" height="100" rx="8" fill="var(--bg-secondary)" stroke="var(--border)" strokeWidth="1" />
        <rect x="68" y="22" width="144" height="80" rx="4" fill="var(--bg-primary)" opacity="0.5" />
        {/* Slide content */}
        <rect x="78" y="32" width="80" height="6" rx="2" fill="var(--text-primary)" opacity="0.1" />
        <rect x="78" y="44" width="120" height="3" rx="1" fill="var(--text-primary)" opacity="0.05" />
        <rect x="78" y="51" width="100" height="3" rx="1" fill="var(--text-primary)" opacity="0.05" />
        {/* Chart */}
        <rect x="78" y="68" width="12" height="24" rx="2" fill="var(--bg-interactive-active)" opacity="0.2" />
        <rect x="94" y="74" width="12" height="18" rx="2" fill="var(--bg-interactive-active)" opacity="0.1" />
        <rect x="110" y="62" width="12" height="30" rx="2" fill="var(--bg-interactive-active)" opacity="0.3" />
        
        {/* Audience phones */}
        {[40, 100, 160, 220].map((x, i) => (
          <g key={i}>
            <rect x={x} y={138} width={20} height={14} rx={3} fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="0.5" />
            <rect x={x+4} y={142} width={12} height={2} rx={0.5} fill="var(--text-primary)" opacity="0.1" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: "teaching",
    tag: "02 — EDUCATION",
    title: "Teaching & training",
    description:
      "Let students follow your screen in real time without crowding around. Works in classrooms, workshops, online sessions via local LAN.",
    visual: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
        {/* Whiteboard */}
        <rect x="20" y="10" width="240" height="120" rx="12" fill="var(--bg-secondary)" stroke="var(--border)" strokeWidth="1" />
        {/* Code on board */}
        <rect x="40" y="40" width="100" height="6" rx="2" fill="var(--text-primary)" opacity="0.15" />
        <rect x="40" y="54" width="140" height="3" rx="1" fill="var(--text-secondary)" opacity="0.1" />
        <rect x="40" y="62" width="120" height="3" rx="1" fill="var(--text-secondary)" opacity="0.05" />
        <rect x="40" y="70" width="130" height="3" rx="1" fill="var(--text-secondary)" opacity="0.08" />
        {/* Signal from board */}
        <path d="M220 60 Q250 40 265 80" stroke="var(--bg-interactive-active)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: "demos",
    tag: "03 — DEMOS",
    title: "App demos",
    description:
      "Show off your mobile app to clients or colleagues without cables. Point them to the URL, they see your screen instantly.",
    visual: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
        {/* Phone center */}
        <rect x="105" y="15" width="70" height="130" rx="16" fill="var(--bg-surface)" stroke="var(--border)" strokeWidth="1" />
        <rect x="112" y="25" width="56" height="110" rx="10" fill="var(--bg-primary)" opacity="0.5" />
        {/* App content */}
        <rect x="120" y="40" width="40" height="40" rx="8" fill="var(--bg-interactive-active)" opacity="0.1" />
        <rect x="120" y="90" width="40" height="4" rx="2" fill="var(--text-primary)" opacity="0.1" />
        <rect x="120" y="100" width="20" height="4" rx="2" fill="var(--text-primary)" opacity="0.05" />
      </svg>
    ),
  },
];

export default function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="use-cases"
      className="relative py-32 bg-[var(--bg-primary)]"
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <span className="section-label reveal">Scenarios</span>
          <h2
            className="reveal font-display"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 400,
              marginTop: 24,
              letterSpacing: "-0.01em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Universal utility.<br />
            Wherever screens matter.
          </h2>
        </div>

        {/* Use case cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {useCases.map((uc) => (
            <div
              key={uc.id}
              id={`usecase-${uc.id}`}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 0,
                overflow: "hidden",
                border: "1px solid var(--border)",
                borderRadius: "32px",
                background: "var(--bg-surface)",
                boxShadow: "0 4px 20px rgba(15,26,15,0.02)",
              }}
            >
              {/* Text */}
              <div style={{ padding: "64px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 20,
                  }}
                >
                  {uc.tag}
                </span>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    marginBottom: 20,
                    color: "var(--text-primary)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {uc.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    fontSize: "1.05rem",
                  }}
                >
                  {uc.description}
                </p>
              </div>

              {/* Visual */}
              <div
                style={{
                  background: "var(--bg-secondary)",
                  borderLeft: "1px solid var(--border)",
                  padding: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {uc.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
