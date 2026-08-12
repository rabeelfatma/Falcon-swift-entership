"use client";

import { useEffect, useRef } from "react";

function toRgbTriplet(color) {
  const trimmed = color.trim();
  if (trimmed.startsWith("#")) {
    let hex = trimmed.slice(1);
    if (hex.length === 3) {
      hex = hex.split("").map((c) => c + c).join("");
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  }
  const match = trimmed.match(/\d+/g);
  if (match && match.length >= 3) {
    return `${match[0]}, ${match[1]}, ${match[2]}`;
  }
  return "251, 122, 31";
}

const DEFAULT_PALETTE = {
  accentTriplet: "251, 122, 31",
  accent2Triplet: "255, 157, 77",
  accent3Triplet: "255, 91, 31",
};

function readPalette() {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return DEFAULT_PALETTE;
  }
  const styles = getComputedStyle(document.documentElement);
  const accent = toRgbTriplet(styles.getPropertyValue("--accent") || "#fb7a1f");
  const accent2 = toRgbTriplet(styles.getPropertyValue("--accent-2") || "#ff9d4d");
  const accent3 = toRgbTriplet(styles.getPropertyValue("--accent-3") || "#ff5b1f");

  return {
    accentTriplet: accent,
    accent2Triplet: accent2,
    accent3Triplet: accent3,
  };
}

export default function Background() {
  const canvasRef = useRef(null);
  const paletteRef = useRef(DEFAULT_PALETTE);

  useEffect(() => {
    paletteRef.current = readPalette();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H;
    let animationId;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = rand(0, W);
        this.y = rand(0, H);
        this.r = rand(0.6, 1.4); // Dots size reduced for a refined look
        this.speedX = rand(-0.25, 0.25);
        this.speedY = rand(-0.25, 0.25);
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < -10) this.x = W + 10;
        if (this.x > W + 10) this.x = -10;
        if (this.y < -10) this.y = H + 10;
        if (this.y > H + 10) this.y = -10;
      }
      draw() {
        const { accent2Triplet, accentTriplet } = paletteRef.current;

        ctx.beginPath();
        ctx.fillStyle = `rgb(${accent2Triplet})`;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();

        const glow = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.r * 3.5
        );
        glow.addColorStop(0, `rgba(${accentTriplet}, 0.35)`);
        glow.addColorStop(1, `rgba(${accentTriplet}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * 3.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    const PARTICLE_COUNT = 65;
    const MAX_DIST = 125;

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function connectParticles() {
      const { accentTriplet } = paletteRef.current;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.22;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${accentTriplet}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      // Check if light mode is active on html tag
      const isLightMode = document.documentElement.classList.contains("light");

      ctx.clearRect(0, 0, W, H);

      // Light mode mein background animation skip kar do
      if (!isLightMode) {
        connectParticles();
        for (const p of particles) {
          p.update();
          p.draw();
        }
      }

      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);

    const observer = new MutationObserver(() => {
      paletteRef.current = readPalette();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}