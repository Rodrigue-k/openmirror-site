"use client";

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
                border: "1px solid var(--border)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--bg-surface)",
              }}
            >
              <div style={{ width: 12, height: 12, border: "2px solid var(--text-primary)", borderRadius: 3, opacity: 0.8 }} />
            </div>
            <span
              style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.01em" }}
            >
              OpenMirror
            </span>
          </div>
          <p
            style={{ fontSize: "0.9rem", color: "var(--text-secondary)", maxWidth: 240, lineHeight: 1.6 }}
          >
            The high-performance, open-source local screen sharing engine.
          </p>
          <span
            style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 500 }}
          >
            Made with ❤️ in Togo 🇹🇬
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: 80, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Connect</span>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="https://github.com/openmirror/openmirror" className="footer-link" style={{ color: "var(--text-secondary)" }}>GitHub</a>
              <a href="https://twitter.com/openmirror_app" className="footer-link" style={{ color: "var(--text-secondary)" }}>Twitter</a>
              <a href="https://github.com/openmirror/openmirror/releases" className="footer-link" style={{ color: "var(--text-secondary)" }}>Releases</a>
            </nav>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Legal</span>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="footer-link" style={{ color: "var(--text-secondary)" }}>MIT License</span>
              <span className="footer-link" style={{ color: "var(--text-secondary)" }}>Privacy Policy</span>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ textAlign: "right", alignSelf: "flex-end" }}>
          <p
            style={{ fontSize: "0.85rem", color: "var(--text-muted)", letterSpacing: "-0.01em" }}
          >
            © {new Date().getFullYear()} Open Mirror Project
          </p>
        </div>
      </div>
    </footer>
  );
}
