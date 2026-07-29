'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    const stars = [];
    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2 + 0.5;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 4;
      const dur = 2 + Math.random() * 3;
      star.style.cssText = `position:absolute;top:${top}%;left:${left}%;width:${size}px;height:${size}px;border-radius:50%;background:var(--accent-2);animation:twinkle ${dur}s ease-in-out infinite;animation-delay:${delay}s;`;
      container.appendChild(star);
      stars.push(star);
    }
    return () => stars.forEach((s) => s.remove());
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
      <div className="absolute -inset-[30%] blur-[80px] opacity-40">
        <motion.div animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-orange-600" />
        <motion.div animate={{ x: [0, -40, 0], y: [0, 20, 0], scale: [1, 1.15, 1] }} transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-[35%] right-[15%] w-56 h-56 rounded-full bg-amber-500" />
        <motion.div animate={{ x: [0, 20, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[10%] left-[40%] w-60 h-60 rounded-full bg-red-600" />
        <motion.div animate={{ x: [0, -20, 0], y: [0, -20, 0], scale: [1, 1.25, 1] }} transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-[30%] right-[30%] w-44 h-44 rounded-full bg-orange-400 opacity-40" />
      </div>
      <div ref={starsRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-[var(--bg)] opacity-45" />
      <style jsx global>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }
      `}</style>
    </div>
  );
}