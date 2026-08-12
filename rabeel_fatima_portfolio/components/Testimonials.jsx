"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Chaudary Abdullah Akram",
    role: "Client",
    initials: "AA",
    rating: 5,
    text: "Rabeel is an excellent developer. He delivered the project ahead of schedule with clean, well-structured code.",
  },
  {
    name: "Muhammad Umar Ajmal",
    role: "Client",
    initials: "UA",
    rating: 5,
    text: "Great communication and technical skills. Highly recommended. Always ready to explain the process clearly.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function TypingHeading({ text = "Testimonials" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[var(--accent)]">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-[var(--accent)] ml-1 align-middle"
      />
    </h2>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* ambient glow accents — now theme-reactive */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "color-mix(in srgb, var(--accent-3) 20%, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <TypingHeading text="Testimonials" />
        </motion.div>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -6,
                borderColor: "color-mix(in srgb, var(--accent) 50%, transparent)",
                boxShadow: "0 0 30px color-mix(in srgb, var(--accent) 18%, transparent)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="rounded-xl border p-6"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)"
              }}
            >
              {/* quote text */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-dim)" }}
              >
                "{t.text}"
              </p>

              {/* author row */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-black"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-3))",
                    boxShadow: "0 0 0 2px color-mix(in srgb, var(--accent) 30%, transparent)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--accent)]">
                    {t.name}
                  </h4>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>

              {/* stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + idx * 0.07, duration: 0.3 }}
                  >
                    <Star
                      className="h-3.5 w-3.5"
                      style={{ fill: "var(--accent)", color: "var(--accent)" }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}