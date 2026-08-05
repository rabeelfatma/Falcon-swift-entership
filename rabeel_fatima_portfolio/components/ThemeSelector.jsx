'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';

const themes = [
  { name: 'Orange', accent: '#fb7a1f', accent3: '#ff5b1f' },
  { name: 'Cyan', accent: '#06b6d4', accent3: '#3b82f6' },
  { name: 'Purple', accent: '#a855f7', accent3: '#ec4899' },
  { name: 'Emerald', accent: '#10b981', accent3: '#059669' },
  { name: 'Rose', accent: '#f43f5e', accent3: '#e11d48' },
  { name: 'Amber', accent: '#f59e0b', accent3: '#d97706' },
];

export default function ThemeSelector() {
  const [activeTheme, setActiveTheme] = useState('Orange');
  const [isOpen, setIsOpen] = useState(false);

  const changeTheme = (theme) => {
    setActiveTheme(theme.name);
    // Dynamic CSS variables change karna
    document.documentElement.style.setProperty('--accent', theme.accent);
    document.documentElement.style.setProperty('--accent-3', theme.accent3);
    setIsOpen(false); // Color select hone ke baad dropdown band ho jayega
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Main Symbol Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[var(--card-bg)]/80 backdrop-blur-md border border-[var(--hairline)] flex items-center justify-center text-[var(--accent)] shadow-2xl transition"
        title="Change Accent Theme"
      >
        <Palette size={22} />
      </motion.button>

      {/* Colors List (Shows on click) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -15, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -15, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-[var(--card-bg)]/90 backdrop-blur-md border border-[var(--hairline)] p-2.5 rounded-full flex items-center gap-2 shadow-2xl"
          >
            {themes.map((t) => (
              <motion.button
                key={t.name}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => changeTheme(t)}
                title={t.name}
                className={`w-6 h-6 rounded-full transition-all border-2 ${
                  activeTheme === t.name ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-80 hover:opacity-100'
                }`}
                style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent3})` }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}