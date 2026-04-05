"use client";

import { useEffect, useRef } from "react";

const useCases = [
  {
    id: "conferences",
    tag: "01 — CONFERENCE",
    title: "Conferences & presentations",
    description:
      "Project your slides or demos from your phone directly to your PC browser — and let every attendee follow along on their own device.",
    visual: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
        {/* Laptop Frame */}
        <rect x="60" y="30" width="160" height="90" rx="4" stroke="#0F1A0F" strokeWidth="1.5" strokeOpacity="0.4" fill="transparent" />
        <path d="M50 120H230V124C230 126.209 228.209 128 226 128H54C51.7909 128 50 126.209 50 124V120Z" fill="#0F1A0F" fillOpacity="0.1" stroke="#0F1A0F" strokeWidth="1.5" strokeOpacity="0.15" />
        {/* Slides Content */}
        <rect x="75" y="45" width="130" height="60" rx="2" fill="#0F1A0F" fillOpacity="0.05" />
        <rect x="85" y="55" width="60" height="4" rx="2" fill="#0F1A0F" fillOpacity="0.2" />
        <rect x="85" y="65" width="110" height="2" rx="1" fill="#0F1A0F" fillOpacity="0.1" />
        <rect x="85" y="72" width="100" height="2" rx="1" fill="#0F1A0F" fillOpacity="0.1" />
        {/* Wi-Fi Icon */}
        <g opacity="0.4">
          <path d="M205 45C207 43 210 43 212 45" stroke="#0F1A0F" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M202 42C206 38 211 38 215 42" stroke="#0F1A0F" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="208.5" cy="49.5" r="1.5" fill="#0F1A0F" />
        </g>
      </svg>
    ),
  },
  {
    id: "teaching",
    tag: "02 — EDUCATION",
    title: "Teaching & training",
    description:
      "Let students follow your screen in real time without crowding around. Works in classrooms, workshops, and any shared network.",
    visual: (
      <svg viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%" }}>
        {/* Dashboard Frame */}
        <rect x="50" y="25" width="180" height="110" rx="6" stroke="#0F1A0F" strokeWidth="1.5" strokeOpacity="0.4" fill="transparent" />
        <rect x="50" y="25" width="180" height="20" rx="6" fill="#0F1A0F" fillOpacity="0.1" />
        {/* Bars Graph */}
        <rect x="70" y="80" width="15" height="35" rx="2" fill="#0F1A0F" fillOpacity="0.15" />
        <rect x="95" y="65" width="15" height="50" rx="2" fill="#0F1A0F" fillOpacity="0.15" />
        <rect x="120" y="90" width="15" height="25" rx="2" fill="#0F1A0F" fillOpacity="0.15" />
        {/* Text area */}
        <rect x="150" y="65" width="60" height="4" rx="2" fill="#0F1A0F" fillOpacity="0.2" />
        <rect x="150" y="75" width="50" height="2" rx="1" fill="#0F1A0F" fillOpacity="0.1" />
        <rect x="150" y="82" width="55" height="2" rx="1" fill="#0F1A0F" fillOpacity="0.1" />
        <rect x="150" y="89" width="45" height="2" rx="1" fill="#0F1A0F" fillOpacity="0.1" />
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
        {/* Phone Mockup */}
        <rect x="110" y="20" width="60" height="120" rx="12" stroke="#0F1A0F" strokeWidth="1.5" strokeOpacity="0.4" fill="transparent" />
        <circle cx="140" cy="132" r="3" stroke="#0F1A0F" strokeWidth="1.5" strokeOpacity="0.15" />
        <rect x="130" y="28" width="20" height="2" rx="1" fill="#0F1A0F" fillOpacity="0.15" />
        {/* Mobile UI Schematic */}
        <rect x="118" y="40" width="44" height="10" rx="2" fill="#0F1A0F" fillOpacity="0.1" />
        <rect x="118" y="55" width="44" height="25" rx="4" fill="#0F1A0F" fillOpacity="0.05" />
        <rect x="118" y="85" width="30" height="3" rx="1.5" fill="#0F1A0F" fillOpacity="0.15" />
        <rect x="118" y="94" width="44" height="2" rx="1" fill="#0F1A0F" fillOpacity="0.05" />
        <rect x="118" y="100" width="40" height="2" rx="1" fill="#0F1A0F" fillOpacity="0.05" />
        <rect x="118" y="106" width="42" height="2" rx="1" fill="#0F1A0F" fillOpacity="0.05" />
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
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label reveal">Scenarios</span>
          <h2
            className="reveal font-display"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "2.2rem",
              fontWeight: 400,
              marginTop: 12,
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
                borderRadius: "12px",
                background: "var(--bg-surface)",
                boxShadow: "0 4px 20px rgba(15,26,15,0.02)",
              }}
            >
              {/* Text */}
              <div style={{ padding: "52px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: 16,
                  }}
                >
                  {uc.tag}
                </span>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    marginBottom: 16,
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
                    lineHeight: 1.6,
                    fontSize: "1rem",
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
                  padding: "38px",
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
