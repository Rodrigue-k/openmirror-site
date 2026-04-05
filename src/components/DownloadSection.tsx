"use client";



export default function DownloadSection() {


  return (
    <section

      id="download"
      className="bg-[var(--bg-secondary)] pt-32 pb-48"
    >
      <div className="container relative z-10 text-center">
        {/* Headline */}
        <h2
          className="font-display animate-fade-in"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: "2.2rem",
            fontWeight: 400,
            marginTop: 0,
            marginBottom: 20,
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            color: "var(--text-primary)",
          }}
        >
          Ready to mirror?
        </h2>

        {/* Subtitle */}
        <p
          className="text-[1.2rem] text-[var(--text-secondary)] max-w-[520px] mx-auto leading-relaxed opacity-80"
          style={{ marginBottom: 48 }}
        >
          No accounts. No subscriptions.<br />
          Just pure screen sharing for everyone.
        </p>

        {/* Primary CTA */}
        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: 48 }}>
          <a
            id="download-google-play"
            href="https://play.google.com/store/apps/details?id=com.openmirror"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: "16px 48px",
              fontSize: "1.1rem"
            }}
          >
            Download for Android
          </a>
        </div>
      </div>
    </section>
  );
}
