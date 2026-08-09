'use client';
import { motion } from 'framer-motion';
import { Smartphone, Layers, Monitor, Download } from 'lucide-react';
import TypedOnView from './TypedOnView';

const languages = [
  { name: 'English', level: 85 },
  { name: 'Urdu', level: 85 },
  { name: 'Punjabi', level: 65 },
];

const interests = [
  { icon: Smartphone, label: 'Mobile Application Development' },
  { icon: Layers, label: 'Full Stack Development' },
  { icon: Monitor, label: 'Desktop Application Development' },
];

const strengths = ['Quick Learner', 'Hardworking', 'Problem Solver', 'Detail-Oriented', 'Analytical', 'Works Under Pressure'];

const stats = [
  { label: 'Academic Projects', value: '15+' },
  { label: 'Technologies Used', value: '12+' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <TypedOnView text="About Me" as="h2" className="text-3xl font-bold mb-6 gradient-text" />

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 70 }}
        className="text-[var(--text-dim)] leading-relaxed mb-6"
      >
        I'm a Software Engineering student at COMSATS University Islamabad, Vehari Campus,
        with a strong foundation in designing and building reliable, scalable software systems.
        I enjoy breaking down complex, real world problems into clean, well structured code and
        turning ideas into fully working, user focused products.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 70 }}
        className="text-[var(--text-dim)] leading-relaxed mb-10"
      >
        My academic journey has been driven by consistent, hands on learning. Every semester
        pairs core software engineering theory with a practical project, which is how my
        experience across full stack, desktop and mobile development came together. I care
        about writing maintainable code, following good design practices, and understanding
        a problem fully before building the solution.
      </motion.p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40, scale: 0.8, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, type: 'spring', stiffness: 160 }}
            whileHover={{ scale: 1.1, borderColor: 'var(--accent)', boxShadow: '0 0 25px rgba(251,122,31,0.35)' }}
            className="card rounded-xl py-5 text-center"
          >
            <p className="text-2xl font-bold gradient-text">{s.value}</p>
            <p className="text-xs text-[var(--text-dim)] mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
        className="card rounded-xl p-6 mb-10"
      >
        <h3 className="text-lg font-semibold gradient-text mb-4">Languages</h3>
        <div className="space-y-4">
          {languages.map((lang, i) => (
            <div key={lang.name}>
              <div className="flex justify-between text-sm text-[var(--text-dim)] mb-1">
                <span>{lang.name}.</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[var(--hairline)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2, var(--accent)))' }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Interests */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold gradient-text mb-4">Interests</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25, rotate: -3, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09, type: 'spring', stiffness: 150 }}
              whileHover={{ scale: 1.08, backgroundColor: 'rgba(251,122,31,0.12)' }}
              className="bg-[var(--card-bg)] border border-[var(--hairline)] rounded-xl py-4 px-3 flex flex-col items-center justify-center gap-2 text-center text-sm text-[var(--text-dim)]"
            >
              <item.icon size={18} className="text-[var(--accent)]" />
              <span>{item.label}.</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Strengths */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold gradient-text mb-4">Strengths</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {strengths.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 25, rotate: -3, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09, type: 'spring', stiffness: 150 }}
              whileHover={{ scale: 1.08, backgroundColor: 'rgba(251,122,31,0.12)' }}
              className="bg-[var(--card-bg)] border border-[var(--hairline)] rounded-xl py-3 text-center text-sm text-[var(--text-dim)]"
            >
              {s}.
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download CV - separate standalone row */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center sm:justify-start"
      >
        <motion.a
          href="/images/Rabeel_Fatima_CV.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-white font-semibold px-6 py-3 rounded-xl text-sm"
        >
          Download CV <Download size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
}