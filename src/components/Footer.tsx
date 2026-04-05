"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-primary)",
        padding: "80px 0 60px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 48,
        }}
      >
        {/* Logo + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--text-primary)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bg-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="2" width="14" height="14" rx="3" opacity="0.4" />
                <rect x="2" y="8" width="14" height="14" rx="3" />
              </svg>
            </div>
            <span
              style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}
            >
              OpenMirror
            </span>
          </div>
          <p
            style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: 240, lineHeight: 1.6 }}
          >
            Instant screen sharing from your phone to any browser.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 80, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Connect</span>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="https://twitter.com/openmirror_app" className="footer-link" style={{ color: "var(--text-secondary)" }}>Twitter</a>
            </nav>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Legal</span>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="footer-link" style={{ color: "var(--text-secondary)" }}>Privacy Policy</span>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ textAlign: "right", alignSelf: "flex-end" }}>
          <p
            style={{ fontSize: "0.85rem", color: "var(--text-muted)", letterSpacing: "-0.01em" }}
          >
            © {new Date().getFullYear()} OpenMirror
          </p>
        </div>
      </div>
    </footer>
  );
}
