"use client";

import { useEffect, useRef } from "react";

// Convert "#fb7a1f" or "rgb(251,122,31)" to "r, g, b" string
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
  return "251, 122, 31"; // fallback orange
}

function readPalette() {
  const styles = getComputedStyle(document.documentElement);
  const accent = toRgbTriplet(styles.getPropertyValue("--accent") || "#fb7a1f");
  const accent2 = toRgbTriplet(styles.getPropertyValue("--accent-2") || "#ff9d4d");
  const accent3 = toRgbTriplet(styles.getPropertyValue("--accent-3") || "#ff5b1f");
  const bg = styles.getPropertyValue("--bg").trim() || "#05050a";

  return {
    particles: [
      `rgba(${accent2}, ALPHA)`,
      `rgba(${accent3}, ALPHA)`,
      `rgba(${accent}, ALPHA)`,
      `rgba(255, 255, 255, ALPHA)`,
      `rgba(${accent3}, ALPHA)`,
    ],
    accentTriplet: accent,
    accent3Triplet: accent3,
    bg,
  };
}

export default function Background() {
  const canvasRef = useRef(null);
  const paletteRef = useRef(readPalette());

  useEffect(() => {
    const canvas = canvasRef.current;
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
        this.r = rand(0.5, 2);
        this.baseAlpha = rand(0.15, 0.55);
        this.speedX = rand(-0.08, 0.08);
        this.speedY = rand(-0.08, 0.08);
        this.colorIndex = Math.floor(rand(0, paletteRef.current.particles.length));
        this.twinkleSpeed = rand(0.0015, 0.005);
        this.twinklePhase = rand(0, Math.PI * 2);
      }
      update(t) {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < -10) this.x = W + 10;
        if (this.x > W + 10) this.x = -10;
        if (this.y < -10) this.y = H + 10;
        if (this.y > H + 10) this.y = -10;
        this.alpha =
          this.baseAlpha *
          (0.75 + 0.25 * Math.sin(t * this.twinkleSpeed + this.twinklePhase));
      }
      draw() {
        const list = paletteRef.current.particles;
        const template = list[this.colorIndex] || list[0];
        const c = template.replace("ALPHA", this.alpha.toFixed(3));
        ctx.beginPath();
        ctx.fillStyle = c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        if (this.r > 1.6) {
          const glow = ctx.createRadialGradient(
            this.x,
            this.y,
            0,
            this.x,
            this.y,
            this.r * 6
          );
          glow.addColorStop(
            0,
            template.replace("ALPHA", (this.alpha * 0.35).toFixed(3))
          );
          glow.addColorStop(1, template.replace("ALPHA", "0"));
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r * 6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const particles = [];
    const PARTICLE_COUNT = 90;
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function drawBackgroundGradient() {
      const { accentTriplet, accent3Triplet, bg } = paletteRef.current;
      const g = ctx.createRadialGradient(
        W * 0.5,
        H * 0.45,
        0,
        W * 0.5,
        H * 0.45,
        Math.max(W, H) * 0.75
      );
      // Now fully driven by the active accent instead of fixed orange
      g.addColorStop(0, `rgba(${accentTriplet}, 0.12)`);
      g.addColorStop(0.5, `rgba(${accent3Triplet}, 0.05)`);
      g.addColorStop(1, bg);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    function animate(t) {
      drawBackgroundGradient();
      for (const p of particles) {
        p.update(t);
        p.draw();
      }
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);

    // Re-read colors whenever theme changes (ThemeSelector sets CSS vars via root.style,
    // and light/dark toggle changes the `light` class)
    const observer = new MutationObserver(() => {
      paletteRef.current = readPalette();
      particles.forEach((p) => {
        p.colorIndex = Math.floor(rand(0, paletteRef.current.particles.length));
      });
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
      }}
    />
  );
}