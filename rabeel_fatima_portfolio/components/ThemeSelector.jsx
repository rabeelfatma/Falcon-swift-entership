'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';

const themes = [
  {
    name: 'Orange',
    accent: '#fb7a1f',
    accent2: '#ff9d4d',
    accent3: '#ff5b1f',
  },
  {
    name: 'Cyan',
    accent: '#06b6d4',
    accent2: '#22d3ee',
    accent3: '#3b82f6',
  },
  {
    name: 'Purple',
    accent: '#a855f7',
    accent2: '#c084fc',
    accent3: '#ec4899',
  },
  {
    name: 'Emerald',
    accent: '#10b981',
    accent2: '#34d399',
    accent3: '#059669',
  },
  {
    name: 'Rose',
    accent: '#f43f5e',
    accent2: '#fb7185',
    accent3: '#e11d48',
  },
  {
    name: 'Amber',
    accent: '#f59e0b',
    accent2: '#fbbf24',
    accent3: '#d97706',
  },
];

export default function ThemeSelector() {
  const [activeTheme, setActiveTheme] = useState('Orange');
  const [isOpen, setIsOpen] = useState(false);

  // Apply theme colors to the whole website
  const applyTheme = (theme) => {
    const root = document.documentElement;

    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-2', theme.accent2);
    root.style.setProperty('--accent-3', theme.accent3);

    localStorage.setItem('accentTheme', theme.name);
    setActiveTheme(theme.name);
  };

  // Load saved theme when website opens
  useEffect(() => {
    const savedTheme = localStorage.getItem('accentTheme');

    const theme =
      themes.find((t) => t.name === savedTheme) || themes[0];

    applyTheme(theme);
  }, []);

  const changeTheme = (theme) => {
    applyTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">

      {/* Main Palette Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[var(--card-bg)]/80 backdrop-blur-md border border-[var(--hairline)] flex items-center justify-center text-[var(--accent)] shadow-2xl transition"
        title="Change Accent Theme"
        aria-label="Change Accent Theme"
      >
        <Palette size={22} />
      </motion.button>

      {/* Color Selector */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: -15,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: -15,
              scale: 0.9,
            }}
            transition={{
              duration: 0.2,
            }}
            className="bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--hairline)] p-2.5 rounded-full flex items-center gap-2 shadow-2xl"
          >

            {themes.map((theme) => (
              <motion.button
                key={theme.name}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => changeTheme(theme)}
                title={theme.name}
                aria-label={`Select ${theme.name} theme`}
                className={`w-6 h-6 rounded-full transition-all border-2 ${
                  activeTheme === theme.name
                    ? 'border-white scale-110 shadow-lg'
                    : 'border-transparent opacity-80 hover:opacity-100'
                }`}
                style={{
                  background: `linear-gradient(
                    135deg,
                    ${theme.accent},
                    ${theme.accent3}
                  )`,
                }}
              />
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}