"use client";

import { useEffect, useRef } from "react";

export default function OpenSourceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="open-source"
      className="relative py-40 bg-[var(--bg-primary)] overflow-hidden"
    >
      <div className="container relative z-10" style={{ textAlign: "center" }}>
        {/* Label */}
        <span className="section-label reveal">Community</span>

        {/* Main statement */}
        <h2
          className="reveal font-display"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 400,
            marginTop: 24,
            marginBottom: 32,
            letterSpacing: "-0.01em",
            lineHeight: 1.0,
            color: "var(--text-primary)",
          }}
        >
          Built in the open.
        </h2>

        <p
          className="reveal"
          style={{
            fontSize: "1.15rem",
            color: "var(--text-secondary)",
            maxWidth: 600,
            margin: "0 auto 64px",
            lineHeight: 1.7,
          }}
        >
          Open Mirror is free and open-source software. No hidden trackers, no proprietary black boxes. Owned by the community, for the community.
        </p>

        {/* GitHub card (Light glassmorphism version) */}
        <div
          className="reveal"
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 40,
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: 32,
            padding: "48px 64px",
            marginBottom: 64,
            minWidth: 380,
            boxShadow: "0 10px 40px rgba(15,26,15,0.03)",
          }}
        >
          {/* GitHub icon */}
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "28px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-primary)",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </div>

          {/* Repo Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <p style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
              openmirror / openmirror
            </p>
            <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--bg-interactive-active)" }} />
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>1.2k stars</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-muted)", opacity: 0.3 }} />
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>MIT Licensed</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            id="cta-view-github"
            href="https://github.com/openmirror/openmirror"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ width: "100%", justifyContent: "center", padding: "12px 32px", fontSize: "0.9rem" }}
          >
            Contribute on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
