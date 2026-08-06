// components/Achievements.jsx
"use client";

import { useEffect, useRef, useState } from "react";

// Easily add or modify stat items here
const achievements = [
  {
    value: 3.76,
    decimals: 2,
    suffix: "",
    label: "CGPA",
    desc: "Maintained 3.76 CGPA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
      </svg>
    ),
  },
  {
    value: 15,
    decimals: 0,
    suffix: "+",
    label: "Projects",
    desc: "Completed 15+ projects across web, mobile & AI",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
];

const EYEBROW_TEXT = "MY ACHIEVEMENTS";

function useCountUp(target, decimals, active, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = null;
    let frame;

    const step = (t) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value.toFixed(decimals);
}

function StatCard({ item, index, active }) {
  const displayValue = useCountUp(item.value, item.decimals, active, 1300 + index * 200);

  return (
    <div
      className="group relative w-full rounded-2xl border border-orange-500/25 bg-neutral-950/80 backdrop-blur-sm p-6 overflow-hidden hover:border-orange-500 hover:-translate-y-1 transition-all duration-300 animate-fadeUp"
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: "backwards" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />

      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-orange-400 bg-orange-500/10 border border-orange-500/40 shadow-[0_0_18px_rgba(255,122,26,0.35)] mb-4">
        {item.icon}
      </div>

      <div className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums">
        {displayValue}
        <span className="text-orange-500">{item.suffix}</span>
      </div>

      <p className="mt-1 text-sm font-semibold text-neutral-200">{item.label}</p>
      <p className="mt-1 text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default function Achievements() {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setTyped(EYEBROW_TEXT.slice(0, i));
      if (i >= EYEBROW_TEXT.length) clearInterval(t);
    }, 80);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const b = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(b);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Deterministic star field to prevent hydration mismatch
  const stars = Array.from({ length: 26 }, (_, i) => ({
    top: (i * 37) % 100,
    left: (i * 53) % 100,
    size: (i % 3) + 1,
    delay: (i % 5) * 0.6,
  }));

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative bg-black text-neutral-100 px-6 md:px-16 py-20 overflow-hidden"
    >
      {/* Dynamic Starfield Background */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-orange-300 animate-twinkle pointer-events-none"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            opacity: 0.5,
          }}
        />
      ))}

      {/* Top Ambient Light Glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-orange-600/10 blur-3xl rounded-full" />

      {/* Typewriter Section Header */}
      <p className="relative text-orange-500 text-2xl md:text-3xl tracking-[0.25em] font-bold mb-12 font-mono">
        {typed}
        <span className="inline-block w-[0.55ch]" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
      </p>

      {/* Main Grid: Left = Vertical Stacked Cards, Right = Floating Trophy */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
        
        {/* LEFT COLUMN: Vertical Stat Cards */}
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto md:mx-0">
          {achievements.map((item, idx) => (
            <StatCard key={item.label} item={item} index={idx} active={inView} />
          ))}
        </div>

        {/* RIGHT COLUMN: Floating Trophy Illustration */}
        <div 
          className="relative w-full flex justify-center md:justify-end animate-fadeUp" 
          style={{ animationDelay: "300ms", animationFillMode: "backwards" }}
        >
          <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px]">
            {/* Glowing background halo */}
            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[60px]" />

            <svg
              viewBox="0 0 200 200"
              className="relative w-full h-full animate-float drop-shadow-[0_10px_25px_rgba(255,122,26,0.3)]"
            >
              <defs>
                <linearGradient id="trophyGold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffd27a" />
                  <stop offset="45%" stopColor="#ff9a3d" />
                  <stop offset="100%" stopColor="#ff7a1a" />
                </linearGradient>
                <linearGradient id="trophyBase" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff9a3d" />
                  <stop offset="100%" stopColor="#c85a10" />
                </linearGradient>
              </defs>

              {/* Side Handles */}
              <path d="M62 55c-18 0-28 14-28 28 0 16 13 26 27 27l3-14c-8-1-15-6-15-14 0-9 6-15 15-15z" fill="url(#trophyGold)" opacity="0.9" />
              <path d="M138 55c18 0 28 14 28 28 0 16-13 26-27 27l-3-14c8-1 15-6 15-14 0-9-6-15-15-15z" fill="url(#trophyGold)" opacity="0.9" />

              {/* Main Cup Body */}
              <path d="M65 40h70l-6 55c-3 24-24 38-29 38s-26-14-29-38z" fill="url(#trophyGold)" />
              
              {/* Rim Rim Top */}
              <rect x="60" y="34" width="80" height="12" rx="6" fill="#ffdca0" />

              {/* Emblem Star */}
              <path
                d="M100 68l6.5 13 14.5 2-10.5 10 2.5 14.5-12.5-7-12.5 7 2.5-14.5-10.5-10 14.5-2z"
                fill="#160c05"
                opacity="0.85"
              />

              {/* Trophy Stem & Stand Base */}
              <path d="M92 133h16l3 22h-22z" fill="url(#trophyBase)" />
              <rect x="75" y="155" width="50" height="10" rx="3" fill="url(#trophyBase)" />
              <rect x="65" y="165" width="70" height="10" rx="3" fill="#7a3608" />
            </svg>
          </div>
        </div>

      </div>

      {/* Styled Component Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.6s ease-out; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float { animation: float 3.5s ease-in-out infinite; }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.9; }
        }
        .animate-twinkle { animation: twinkle 2.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}