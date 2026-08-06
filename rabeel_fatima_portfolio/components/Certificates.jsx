// components/Certificates.jsx
"use client";

import { useEffect, useState } from "react";

// Add more certificates by pushing another object into this array.
const certificates = [
  {
    title: "Full Stack AI Engineering",
    issuer: "Falcon Swift",
    date: "2026",
    image: "/images/fullstack-ai.png", // updated path based on your public/images folder
    link: "https://example.com/verify/credential-id", // verification / view link
  },
  // {
  //   title: "Another Certificate Title",
  //   issuer: "Issuing Organization",
  //   date: "2026",
  //   image: "/images/another-cert.png",
  //   link: "https://example.com/verify/another-id",
  // },
];

const EYEBROW_TEXT = "MY CREDENTIALS";

export default function Certificates() {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter effect — types out the eyebrow text on mount
  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setTyped(EYEBROW_TEXT.slice(0, i));
      if (i >= EYEBROW_TEXT.length) clearInterval(typeInterval);
    }, 80);
    return () => clearInterval(typeInterval);
  }, []);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setShowCursor((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      id="certificates"
      className="relative bg-black text-neutral-100 px-6 md:px-16 py-20 overflow-hidden"
    >
      {/* faint orange glow accents, matches hero */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-orange-600/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 bg-orange-600/10 blur-3xl rounded-full" />

      <p className="text-orange-500 text-2xl md:text-3xl tracking-[0.25em] font-bold mb-3 font-mono">
        {typed}
        <span
          className="inline-block w-[0.55ch]"
          style={{ opacity: showCursor ? 1 : 0 }}
        >
          |
        </span>
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-neutral-200 mb-10 animate-fadeUp">
        Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <div
            key={cert.title}
            className="group border border-orange-500/40 rounded-2xl overflow-hidden bg-neutral-950 hover:border-orange-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 animate-fadeUp"
            style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "backwards" }}
          >
            <div className="aspect-video w-full bg-neutral-900 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-neutral-400 mt-1">
                {cert.issuer} &middot; {cert.date}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-orange-500 hover:text-orange-400 transition-colors"
              >
                View Certificate
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}