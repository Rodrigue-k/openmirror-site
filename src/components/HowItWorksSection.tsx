"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Connect to the same Wi-Fi",
    description:
      "Make sure your phone and the viewer's device are on the same local network. Home Wi-Fi, office LAN, or hotspot — it works anywhere.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Copy the link from your phone",
    description:
      "Open Mirror generates a local URL and QR code automatically. Copy it or let viewers scan it — no typing required.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Open it in any browser",
    description:
      "Chrome, Firefox, Safari — any modern browser works. No extension, no plugin, no install. The screen streams directly to the page.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      style={{ padding: "60px 0", background: "var(--bg-secondary)", overflow: "hidden" }}
    >
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span 
            className="reveal"
            style={{ 
              fontFamily: "var(--font-dm-mono)", 
              fontSize: "11px", 
              opacity: 0.5, 
              textTransform: "uppercase", 
              letterSpacing: "0.2em" 
            }}
          >
            The Process
          </span>
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
            Three steps. That&apos;s it.
          </h2>
        </div>

        {/* Steps Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative reveal"
          style={{ width: "100%", maxWidth: 1000 }}
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{ 
                position: "relative",
                padding: "24px",
                borderRight: i < 2 ? "1px solid var(--border)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: 8
              }}
              className="step-col"
            >
              {/* Number above title */}
              <span 
                style={{ 
                  fontFamily: "var(--font-dm-mono)", 
                  fontSize: "13px", 
                  color: "#0F1A0F", 
                  opacity: 0.35,
                  marginBottom: 4
                }}
              >
                {step.num}
              </span>
              
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                  fontSize: "14px",
                  opacity: 0.65,
                  maxWidth: "90%"
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Browser Mockup Bar */}
        <div
          className="reveal"
          style={{ 
            marginTop: 32, 
            width: "460px", 
            maxHeight: "80px", 
            background: "var(--bg-secondary)", 
            border: "1px solid var(--border)", 
            borderRadius: "8px",
            overflow: "hidden",
            fontFamily: "var(--font-dm-mono)",
            fontSize: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
          }}
        >
          {/* Top Bar */}
          <div style={{ display: "flex", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid var(--border)", gap: 12 }}>
            <div style={{ display: "flex", gap: 5 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-muted)", opacity: 0.4 }} />
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-muted)", opacity: 0.4 }} />
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-muted)", opacity: 0.4 }} />
            </div>
            <div style={{ color: "var(--text-secondary)", opacity: 0.8, background: "var(--bg-primary)", padding: "2px 10px", borderRadius: "100px", flex: 1, fontSize: "11px" }}>
              http://192.168.1.42:8080
            </div>
          </div>
          {/* Content Area */}
          <div style={{ padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
            <span style={{ color: "var(--text-secondary)", fontSize: "11px" }}>[ Screen streaming... <span style={{ fontWeight: 600 }}>LIVE</span> ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}

