"use client";

import { useEffect, useRef } from "react";

/* QR Code placeholder SVG with Brume Verte theme */
function QRPlaceholder() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 120, height: 120 }}
    >
      <rect width="120" height="120" rx="16" fill="rgba(15,26,15,0.02)" />
      {/* Top-left finder */}
      <rect x="15" y="15" width="30" height="30" rx="6" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.8" />
      <rect x="22" y="22" width="16" height="16" rx="3" fill="var(--text-primary)" opacity="0.6" />
      {/* Top-right finder */}
      <rect x="75" y="15" width="30" height="30" rx="6" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.8" />
      <rect x="82" y="22" width="16" height="16" rx="3" fill="var(--text-primary)" opacity="0.6" />
      {/* Bottom-left finder */}
      <rect x="15" y="75" width="30" height="30" rx="6" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.8" />
      <rect x="22" y="82" width="16" height="16" rx="3" fill="var(--text-primary)" opacity="0.6" />
      {/* Data cells decoration */}
      {[
        [50,20],[60,20],[50,30],[50,40],[60,40],[70,40],
        [20,50],[30,50],[40,50],[50,50],[60,50],[70,50],[80,50],[90,50],
        [20,60],[40,60],[60,60],[80,60],[90,60],
        [50,70],[70,70],[80,70],[90,70],
        [75,75],[85,75],[75,85],[85,85],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="5" height="5" rx="1.5" fill="var(--text-primary)" opacity={0.1 + (i % 3) * 0.08} />
      ))}
    </svg>
  );
}

export default function DownloadSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="download"
      className="bg-[var(--bg-secondary)] py-32"
    >
      <div className="container relative z-10 text-center">
        
        {/* Label */}
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] animate-fade-in">
          Get started
        </span>

        {/* Headline */}
        <h2
          className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-[var(--text-primary)] leading-[1.1] tracking-[-0.01em] mt-8 mb-6"
        >
          Ready to mirror?
        </h2>

        {/* Subtext */}
        <p
          className="text-[1.15rem] text-[var(--text-secondary)] max-w-[480px] mx-auto mb-16 leading-relaxed"
        >
          No accounts. No subscriptions. No nonsense.<br />
          Just pure screen sharing for everyone.
        </p>

        {/* Download panel */}
        <div
          className="inline-flex items-center gap-16 lg:gap-24 bg-[var(--bg-surface)] border border-[var(--border)] rounded-[40px] p-12 lg:p-20 flex-wrap justify-center box-shadow: 0 8px 40px rgba(15,26,15,0.05)"
        >
          {/* QR Code */}
          <div className="flex flex-col items-center gap-6">
            <div
              className="p-4 bg-[var(--bg-primary)] border border-[var(--border)] rounded-3xl"
            >
              <QRPlaceholder />
            </div>
            <span
              className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-medium"
            >
              Scan for Play Store
            </span>
          </div>

          {/* Divider (Desktop) */}
          <div className="hidden md:block w-px h-40 bg-[var(--border)]" />

          {/* CTA buttons */}
          <div className="flex flex-col items-center gap-10">
            <div className="text-center">
              <h3 className="font-display text-[1.75rem] text-[var(--text-primary)] mb-3">
                Android Application
              </h3>
              <p className="text-[1rem] text-[var(--text-muted)] font-medium">
                High-performance broadcast engine
              </p>
            </div>

            <a
              id="download-google-play"
              href="https://play.google.com/store/apps/details?id=com.openmirror"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get it on Google Play
            </a>
          </div>
        </div>

        {/* GitHub fallback */}
        <p
          className="mt-16 text-[var(--text-muted)] text-[0.95rem]"
        >
          Or{" "}
          <a
            href="https://github.com/openmirror/openmirror/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-primary)] font-medium hover:underline decoration-dotted transition-all"
          >
            Download the latest APK directly from GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
