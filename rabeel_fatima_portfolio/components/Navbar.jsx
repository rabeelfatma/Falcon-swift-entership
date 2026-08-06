'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Palette } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import ThemeToggle from './ThemeToggle';

const links = [
  'Home',
  'About',
  'Services',
  'Education',
  'Experience',
  'Skills',
  'Achievements',
  'Certificates',
  'Projects',
  'Testimonials',
  'Contact'
];

// 6 Accent Color Themes
const accentThemes = [
  { name: 'Orange', accent: '#fb7a1f', accent3: '#ff5b1f' },
  { name: 'Cyan', accent: '#06b6d4', accent3: '#3b82f6' },
  { name: 'Purple', accent: '#a855f7', accent3: '#ec4899' },
  { name: 'Emerald', accent: '#10b981', accent3: '#059669' },
  { name: 'Rose', accent: '#f43f5e', accent3: '#e11d48' },
  { name: 'Amber', accent: '#f59e0b', accent3: '#d97706' },
];

export default function Navbar() {
  const [activeTheme, setActiveTheme] = useState('Orange');
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const changeAccent = (theme) => {
    setActiveTheme(theme.name);
    // Dynamic CSS variables change karna
    document.documentElement.style.setProperty('--accent', theme.accent);
    document.documentElement.style.setProperty('--accent-3', theme.accent3);
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 90 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--bg-soft)]/60 flex justify-between items-center px-6 md:px-8 py-4"
    >
      <span className="text-xl font-bold gradient-text">Rabeel Fatima</span>

      {/* Nav Links - Spacing reduced here (changed from gap-6 lg:gap-8 to gap-3 lg:gap-4) */}
      <div className="hidden md:flex items-center gap-3 lg:gap-4">
        {links.map((link) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            whileHover={{ scale: 1.15, color: 'var(--accent)', y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative transition text-[var(--text)] text-sm font-medium"
          >
            {link}
          </motion.a>
        ))}
      </div>

      {/* Right Controls: Theme Selector & Theme Toggle together, then Links */}
      <div className="flex items-center gap-3 text-[var(--text-dim)]">
        
        {/* 1. Theme Palette Icon (With Expandable Popup) */}
        <div className="relative flex items-center">
          <motion.button
            whileHover={{ scale: 1.2, color: 'var(--accent)' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="p-1 rounded-full text-[var(--accent)] cursor-pointer transition-colors"
            title="Toggle Accent Colors"
          >
            <Palette size={20} />
          </motion.button>

          {/* Animated Expandable Color Pill */}
          <AnimatePresence>
            {isThemeOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-8 left-0 flex items-center gap-1.5 bg-[var(--card-bg)]/95 backdrop-blur-md border border-[var(--hairline)] px-2.5 py-1.5 rounded-full shadow-2xl z-50 min-w-max"
              >
                {accentThemes.map((t) => (
                  <motion.button
                    key={t.name}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => changeAccent(t)}
                    title={`${t.name} Theme`}
                    className={`w-4 h-4 rounded-full transition-all border cursor-pointer ${
                      activeTheme === t.name
                        ? 'border-white scale-110 shadow-md ring-1 ring-[var(--accent)]'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                    style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent3})` }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 2. Theme Toggle (Right next to Palette) */}
        <ThemeToggle />

        {/* Vertical Separator */}
        <span className="w-px h-5 bg-[var(--hairline)] mx-1" />

        {/* 3. Social Links (Placed after the toggle) */}
        <div className="flex items-center gap-3">
          <motion.a 
            href="https://github.com/rabeelfatma" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.25, color: 'var(--accent)' }}
          >
            <GithubIcon size={18} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/rabeel-fatima-0bb5b7415" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.25, color: 'var(--accent)' }}
          >
            <LinkedinIcon size={18} />
          </motion.a>
          <motion.a 
            href="mailto:rabeel1937a@gmail.com" 
            whileHover={{ scale: 1.25, color: 'var(--accent)' }}
          >
            <Mail size={18} />
          </motion.a>
        </div>

      </div>
    </motion.nav>
  );
}