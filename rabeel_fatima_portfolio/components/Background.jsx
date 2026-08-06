"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

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

    // Orange / black palette matching the portfolio theme
    const palette = [
      "rgba(255, 138, 61, ALPHA)", // main orange
      "rgba(255, 106, 0, ALPHA)", // deep orange
      "rgba(255, 190, 130, ALPHA)", // light peach
      "rgba(255, 220, 180, ALPHA)", // near white warm
      "rgba(120, 60, 20, ALPHA)", // dim ember
    ];

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
        this.color = palette[Math.floor(rand(0, palette.length))];
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
        const c = this.color.replace("ALPHA", this.alpha.toFixed(3));
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
            this.color.replace("ALPHA", (this.alpha * 0.35).toFixed(3))
          );
          glow.addColorStop(1, this.color.replace("ALPHA", "0"));
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
      const g = ctx.createRadialGradient(
        W * 0.5,
        H * 0.45,
        0,
        W * 0.5,
        H * 0.45,
        Math.max(W, H) * 0.75
      );
      g.addColorStop(0, "#1a0d05");
      g.addColorStop(0.5, "#100702");
      g.addColorStop(1, "#050201");
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

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
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