"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Do I really not need an account?",
    answer: "Correct. OpenMirror requires zero sign-up. Open the app, tap Start Sharing, and you're live. No email, no password, no subscription."
  },
  {
    question: "Is my screen data secure?",
    answer: "Yes. Everything runs on your local network — your screen data never touches an external server. No cloud, no logs, no third party involved."
  },
  {
    question: "What kind of latency should I expect?",
    answer: "Under 20ms on a solid Wi-Fi connection. Performance depends on your network quality, but on a standard home or office Wi-Fi it feels instant."
  },
  {
    question: "Which devices are supported?",
    answer: "OpenMirror runs on Android phones. The viewer side works on any device with a modern browser — PC, Mac, tablet, or another phone."
  },
  {
    question: "Does the viewer need to install anything?",
    answer: "No. Viewers just open a URL in any browser — Chrome, Firefox, Safari, Edge. Zero install, zero account on their side."
  }
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
      id="faq"
      className="relative py-32 bg-[var(--bg-secondary)]"
    >
      <div className="container max-w-4xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label reveal">Support</span>
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
            Common Questions.
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: activeIndex === i ? "0 10px 30px rgba(15,26,15,0.05)" : "none",
              }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "24px 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {faq.question}
                </span>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease",
                    transform: activeIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                    color: "var(--text-muted)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>
              
              <div
                style={{
                  maxHeight: activeIndex === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div
                  style={{
                    padding: "0 32px 32px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    fontSize: "1rem",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
