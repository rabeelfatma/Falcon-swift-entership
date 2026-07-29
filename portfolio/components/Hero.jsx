'use client';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 pt-20 relative">
      <motion.div
        initial={{ opacity: 0, x: -60, rotate: -2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 90 }}
        className="text-center md:text-left max-w-xl"
      >
        <p className="text-[var(--accent-2)] mb-2">Hello, It's Me</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">Rabeel Fatima</span>
        </h1>
        <div className="text-xl md:text-2xl text-[var(--text)] mb-6">
          And I'm a{' '}
          <TypeAnimation
            sequence={[
              'Software Engineering Student', 2000,
              'MERN Stack Developer', 2000,
              'Flutter Developer', 2000,
              'Full Stack Web Developer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text font-semibold"
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, type: 'spring' }}
          className="text-[var(--text-dim)] mb-2"
        >
          Software Engineering student at COMSATS University Islamabad, Vehari Campus,
          having successfully completed 7 semesters with a CGPA of 3.76.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
          className="text-[var(--text-dim)] mb-2"
        >
          I build full-stack web applications with the MERN stack, cross-platform mobile
          apps with Flutter, and desktop applications with C# — turning ideas into real,
          working products from database to interface.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, type: 'spring' }}
          className="text-[var(--text-dim)] mb-8"
        >
          Always curious, always building — I enjoy picking up new tools and frameworks
          quickly and shipping projects that actually work end to end.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6, type: 'spring', stiffness: 150 }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 35px rgba(251,122,31,0.55)' }}
          whileTap={{ scale: 0.92 }}
          className="inline-block bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)] text-white px-6 py-3 rounded-full font-medium transition mr-4"
        >
          View My Work
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex gap-6 justify-center md:justify-start mt-6 text-[var(--text-dim)]"
        >
          <motion.a href="https://github.com/rabeelfatma" target="_blank" whileHover={{ scale: 1.25, color: 'var(--accent)', y: -3 }} className="flex items-center gap-1.5">
            <GithubIcon size={20} /> GitHub
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/rabeel-fatima-0bb5b7415" target="_blank" whileHover={{ scale: 1.25, color: 'var(--accent)', y: -3 }} className="flex items-center gap-1.5">
            <LinkedinIcon size={20} /> LinkedIn
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
      >
        <motion.div
          animate={{ boxShadow: ['0 0 40px 5px rgba(251,122,31,0.3)', '0 0 70px 15px rgba(255,91,31,0.4)', '0 0 40px 5px rgba(251,122,31,0.3)'] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--accent)]/50"
        >
          <img src="/images/profile.jpg" alt="Rabeel Fatima" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--accent)]"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}