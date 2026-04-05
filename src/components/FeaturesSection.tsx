"use client";

import { useRef } from "react";
import { Zap, Globe, Shield, Monitor } from "lucide-react";

const features = [
  {
    id: "instant",
    icon: Zap,
    title: "Instant sharing",
    description: "Sub-20ms latency. No cloud relay, no encoding overhead.",
    stat: "< 20ms",
    statLabel: "Typical latency",
  },
  {
    id: "any-browser",
    icon: Globe,
    title: "Any browser",
    description: "Zero install. Viewers just open a URL on any device.",
    stat: "0",
    statLabel: "Viewer installs",
  },
  {
    id: "local-only",
    icon: Shield,
    title: "100% local",
    description: "Privacy by design. Data never leaves your network.",
    stat: "0",
    statLabel: "Bytes to cloud",
  },
  {
    id: "quality",
    icon: Monitor,
    title: "Up to 1080p",
    description: "High fidelity with multiple Quality presets (480p to 1080p).",
    stat: "1080p",
    statLabel: "Max resolution",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef} 
      id="features" 
      className="bg-[var(--bg-primary)] py-24 relative"
      style={{ zIndex: 1 }}
    >
      <div className="container" style={{ maxWidth: 1000, margin: "0 auto", position: "relative" }}>
        
        {/* Header - Conformité absolue avec How it Works */}
        <div style={{ marginBottom: "48px", textAlign: "left" }}>
          <h2 
            className="font-display" 
            style={{ 
              fontFamily: "var(--font-fraunces)",
              fontSize: "2.2rem", 
              fontWeight: 400, 
              letterSpacing: "-0.01em", 
              lineHeight: 1.1, 
              color: "var(--text-primary)" 
            }}
          >
            Built for performance.
            <br />
            Seamless by design.
          </h2>
        </div>

        {/* Feature grid - 2x2 Layout, gap constant */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          {features.map((f) => (
            <div
              key={f.id}
              style={{
                padding: "24px",
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
              }}
              className="hover:bg-[var(--bg-secondary)]"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <f.icon size={18} strokeWidth={2.5} className="text-[var(--text-primary)] opacity-80" />
                <h3 
                  style={{ 
                    fontSize: "16px", 
                    fontWeight: 600, 
                    fontFamily: "var(--font-dm-sans)", 
                    color: "var(--text-primary)" 
                  }}
                >
                  {f.title}
                </h3>
              </div>

              <p 
                style={{ 
                  fontSize: "14px", 
                  color: "var(--text-secondary)", 
                  opacity: 0.65, 
                  lineHeight: 1.5,
                  marginBottom: "24px"
                }}
              >
                {f.description}
              </p>

              <div style={{ height: "1px", background: "var(--border)", marginBottom: "20px", opacity: 0.5 }} />

              <div className="flex flex-col">
                <span 
                  className="font-display" 
                  style={{ 
                    fontSize: "2.2rem", 
                    fontWeight: 400, 
                    color: "var(--text-primary)", 
                    lineHeight: 1, 
                    letterSpacing: "-0.02em" 
                  }}
                >
                  {f.stat}
                </span>
                <span 
                  style={{ 
                    fontFamily: "var(--font-dm-mono)", 
                    fontSize: "11px", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.2em", 
                    opacity: 0.5, 
                    marginTop: 8,
                    fontWeight: 400
                  }}
                >
                  {f.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Browser compatibility - Espacement équilibré (40px) */}
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <span 
            style={{ 
              fontFamily: "var(--font-dm-mono)", 
              fontSize: "11px", 
              opacity: 0.5, 
              textTransform: "uppercase", 
              letterSpacing: "0.15em" 
            }}
          >
            Compatible with Chrome, Firefox, Safari, Edge — Native Web APIs only
          </span>
        </div>
      </div>
    </section>
  );
}
