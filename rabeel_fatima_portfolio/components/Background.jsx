'use client';
import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width, height;
    let particles = [];

    // pull colors from your CSS variables so theme stays consistent
    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue('--accent').trim() || '#3b82f6';
    const accent2 = styles.getPropertyValue('--accent-2').trim() || '#a855f7';

    const hexToRgb = (hex) => {
      const clean = hex.replace('#', '');
      const bigint = parseInt(clean.length === 3
        ? clean.split('').map((c) => c + c).join('')
        : clean, 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    };

    const c1 = hexToRgb(accent.startsWith('#') ? accent : '#3b82f6');
    const c2 = hexToRgb(accent2.startsWith('#') ? accent2 : '#a855f7');

    const lerpColor = (t) => {
      const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
      const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
      const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
      return `${r},${g},${b}`;
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const PARTICLE_COUNT = 70;
    const MAX_DIST = 140;

    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const t = Math.random();
        particles.push({
          x: Math.random() * width * 0.65, // keep cluster on left/bottom like reference
          y: height * 0.25 + Math.random() * height * 0.75,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.8 + 0.6,
          t,
          glow: Math.random() > 0.85, // some particles get a ring/glow like the image
        });
      }
    }

    function drawWaveLayer(offset, amplitude, speed, colorRgb, alpha, yBase) {
      const time = Date.now() * 0.0002 * speed;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 6) {
        const y =
          yBase +
          Math.sin(x * 0.004 + time + offset) * amplitude +
          Math.sin(x * 0.011 + time * 1.4) * (amplitude * 0.3);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(${colorRgb},${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // flowing wave lines, layered, colors blending between accent -> accent-2
      const waveCount = 10;
      for (let i = 0; i < waveCount; i++) {
        const t = i / waveCount;
        drawWaveLayer(
          i * 0.6,
          18 + i * 3,
          0.6 + i * 0.05,
          lerpColor(t),
          0.05 + (1 - t) * 0.06,
          height * (0.55 + t * 0.28)
        );
      }

      // update + draw particles
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width * 0.75) p.vx *= -1;
        if (p.y < height * 0.15 || p.y > height) p.vy *= -1;
      }

      // connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${lerpColor((a.t + b.t) / 2)},${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // draw particle dots
      for (let p of particles) {
        const color = lerpColor(p.t);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},0.9)`;
        ctx.shadowColor = `rgba(${color},0.8)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (p.glow) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r + 4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${color},0.5)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
      {/* soft ambient glow blobs behind the network, using your theme colors */}
      <div className="absolute -inset-[20%] blur-[100px] opacity-30">
        <div className="absolute top-[20%] left-[5%] w-72 h-72 rounded-full bg-[var(--accent)]" />
        <div className="absolute bottom-[10%] left-[35%] w-80 h-80 rounded-full bg-[var(--accent-2)]" />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="absolute inset-0 bg-[var(--bg)] opacity-30" />
    </div>
  );
}