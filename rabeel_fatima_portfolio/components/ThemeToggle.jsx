'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isLight = saved === 'light';
    setLight(isLight);
    document.documentElement.classList.toggle('light', isLight);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle('light', next);
    localStorage.setItem('theme', next ? 'light' : 'dark');
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle light and dark theme"
      className="theme-toggle"
    >
      <motion.span
        className="knob"
        animate={{ x: light ? 24 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {light ? <Sun size={12} color="#0a0a12" /> : <Moon size={12} color="#0a0a12" />}
      </motion.span>
    </motion.button>
  );
}