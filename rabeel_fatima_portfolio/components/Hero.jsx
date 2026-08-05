'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

// Inline icons (add to BrandIcons.jsx later if you'd like)
function TwitterIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.83 14.02c-.24.68-1.39 1.3-1.92 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.09.99-2.37c.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.17.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.64-.14.26.09 1.67.79 1.96.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 pt-28 pb-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -60, rotate: -2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 90 }}
        className="text-center md:text-left max-w-xl z-10"
      >
        <p className="text-[var(--accent-2)] mb-2">Hello, It's Me</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">Rabeel Fatima</span>
        </h1>
        <div className="text-xl md:text-2xl text-[var(--text)] mb-6">
          And I'm a{' '}
          <TypeAnimation
            sequence={[
              'Full Stack AI Engineer', 2000,
              '', 500,
            ]}
            wrapper="span"
            speed={50}
            deletionSpeed={60}
            repeat={Infinity}
            cursor={true}
            className="gradient-text font-semibold"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, type: 'spring' }}
          className="text-[var(--text-dim)] mb-2"
        >
          Always curious, always building.I enjoy picking up new tools and frameworks
          quickly and shipping projects that actually work end to end.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, type: 'spring' }}
          className="text-[var(--text-dim)] mb-8"
        >
          Turning ideas into intelligent, real-world solutionsone project at a time.
        </motion.p>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <motion.a
            href="#projects"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6, type: 'spring', stiffness: 150 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 35px rgba(251,122,31,0.55)' }}
            whileTap={{ scale: 0.92 }}
            className="inline-block bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)] text-white px-6 py-3 rounded-full font-medium transition"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6, type: 'spring', stiffness: 150 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 35px rgba(251,122,31,0.55)' }}
            whileTap={{ scale: 0.92 }}
            className="inline-block bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)] text-white px-6 py-3 rounded-full font-medium transition"
          >
            Hire Me
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex gap-6 justify-center md:justify-start mt-6 text-[var(--text-dim)] flex-wrap"
        >
          <motion.a href="https://github.com/rabeelfatma" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.25, color: 'var(--accent)', y: -3 }} className="flex items-center gap-1.5">
            <GithubIcon size={20} /> GitHub
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/rabeel-fatima-0bb5b7415" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.25, color: 'var(--accent)', y: -3 }} className="flex items-center gap-1.5">
            <LinkedinIcon size={20} /> LinkedIn
          </motion.a>
          <motion.a href="https://x.com/rabeelfati39638" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.25, color: 'var(--accent)', y: -3 }} className="flex items-center gap-1.5">
            <TwitterIcon size={20} /> Twitter
          </motion.a>
          <motion.a href="https://wa.me/923150164322" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.25, color: 'var(--accent)', y: -3 }} className="flex items-center gap-1.5">
            <WhatsAppIcon size={20} /> WhatsApp
          </motion.a>
          <motion.a href="mailto:rabeel1937a@gmail.com" whileHover={{ scale: 1.25, color: 'var(--accent)', y: -3 }} className="flex items-center gap-1.5">
            <Mail size={20} /> Email
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 90 }}
        className="flex-shrink-0 z-10 relative w-64 h-64 md:w-80 md:h-80"
      >
        {/* Rotating partial gradient arc — not a full ring, just a glowing sweep */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute -inset-3 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, transparent 78%, rgba(251,122,31,0.9) 92%, transparent 100%)',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px))',
          }}
        />

        {/* Pulsing "+" accent marks at the four diagonal corners */}
        {[
          { top: '-6%', left: '-6%', delay: 0 },
          { top: '-6%', right: '-6%', delay: 0.4 },
          { bottom: '-6%', left: '-6%', delay: 0.8 },
          { bottom: '-6%', right: '-6%', delay: 1.2 },
        ].map((pos, i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.15, 0.8] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: pos.delay, ease: 'easeInOut' }}
            className="absolute text-[var(--accent)] text-xl md:text-2xl font-light select-none"
            style={{ top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom }}
          >
            +
          </motion.span>
        ))}

        <motion.div
          animate={{ boxShadow: ['0 0 40px 5px rgba(251,122,31,0.3)', '0 0 70px 15px rgba(255,91,31,0.4)', '0 0 40px 5px rgba(251,122,31,0.3)'] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--accent)]/50"
        >
          <img
            src="/images/image.jpg"
            alt="Rabeel Fatima"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[var(--accent)]"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}