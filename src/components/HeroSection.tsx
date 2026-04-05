"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SCENES = [
  // { label: "Portrait screen mirroring", src_pc: "/images/hero/portrait-pc.png",    src_phone: "/images/hero/portrait-phone.png" },
  { label: "In conference rooms",       src_pc: "/images/hero/present-pc.png",   src_phone: "/images/hero/present-phone.png" },
  { label: "For mobile app demos",      src_pc: "/images/hero/gaming-pc.png",    src_phone: "/images/hero/gaming-phone.png" },
  { label: "In the classroom",          src_pc: "/images/hero/present-pc.png",   src_phone: "/images/hero/present-phone.png" },
  { label: "For remote support",        src_pc: "/images/hero/gaming-pc.png",    src_phone: "/images/hero/gaming-phone.png" },
];

function HeroMockup({ currentIndex }: { currentIndex: number }) {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {/* PC Mockup Container - Persistent Floating */}
      <div 
        className="relative z-10 w-[95%] lg:w-[125%] animate-float"
        style={{ animationDelay: "0s" }}
      >
        <div className="relative w-full h-auto">
          {SCENES.map((scene, idx) => (
            <div
              key={idx}
              className={`transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={scene.src_pc}
                alt={`OpenMirror Desktop View ${idx}`}
                width={1600}
                height={1000}
                className="w-full h-auto mockup-shadow-pc"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Phone Mockup Container - Persistent Floating */}
      <div 
        className="absolute bottom-[17%] left-[-2%] lg:left-[-10%] w-[45%] lg:w-[52%] z-20 animate-float"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="relative w-full h-auto">
          {SCENES.map((scene, idx) => (
            <div
              key={idx}
              className={`transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={scene.src_phone}
                alt={`OpenMirror Mobile View ${idx}`}
                width={500}
                height={1000}
                className="w-full h-auto mockup-shadow-phone"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SCENES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center bg-[var(--bg-primary)] overflow-hidden">
      <div className="container py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-16 lg:gap-12">
          
          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-start lg:translate-x-12">
            {/* Rotary Label - Spun up with more margin */}
            <div className="h-6 mb-4 overflow-hidden relative w-full">
              {SCENES.map((scene, idx) => (
                <div
                  key={idx}
                  className={`absolute transition-all duration-600 ease-in-out font-mono text-[13px] text-[var(--text-secondary)] ${
                    idx === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {scene.label}
                </div>
              ))}
            </div>

            {/* Headline - Relaxed line-height and increased margin */}
            <h1 
              className="font-display leading-[1.1] text-[var(--text-primary)] mb-10"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Share your screen. Instantly.
            </h1>

            {/* Subtitle - Increased margins */}
            <p 
              className="font-sans text-[1.1rem] leading-relaxed text-[var(--text-secondary)] max-w-[540px]"
              style={{ marginBottom: "100px" }}
            >
              OpenMirror streams your phone display to any browser over Wi-Fi &mdash; 
              no cables, no accounts, no friction.
            </p>

            {/* Support/CTA Block */}
            <div className="flex flex-col gap-10 w-full">
              <div className="flex flex-wrap gap-5">
                <a href="https://play.google.com/store/apps/details?id=com.openmirror" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Download for Android
                </a>
              </div>
            </div>
          </div>

          {/* Visual Content: Overlap System */}
          <div className="relative order-first lg:order-last px-12 lg:px-0 lg:-translate-y-4 lg:translate-x-12">
            <HeroMockup currentIndex={currentIndex} />
          </div>

        </div>
      </div>
    </section>
  );
}
