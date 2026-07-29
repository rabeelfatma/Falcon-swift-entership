'use client';
import { motion } from 'framer-motion';
import TypedOnView from './TypedOnView';

const strengths = ['Quick Learner', 'Hardworking', 'Problem Solver', 'Detail-Oriented', 'Analytical', 'Works Under Pressure'];
const stats = [
  { label: 'CGPA', value: '3.76/4.00' },
  { label: 'Semesters Completed', value: '7' },
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
        who has completed 7 semesters. I'm passionate about full-stack web development with
        Laravel and the MERN Stack, mobile applications with Flutter, Firebase and SQLite, and
        desktop applications with WPF and Windows Forms. I love turning ideas into real, working products.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 70 }}
        className="text-[var(--text-dim)] leading-relaxed mb-10"
      >
        Most of what I've built has grown directly out of my coursework — every semester
        pairs theory with a hands-on project, and that's how my academic portfolio came together:
        full-stack systems like the Expense Management System and Coffee Management System, desktop
        apps like the Hostel, Inventory and Hospital Management Systems, a Machine Learning based
        House Rent Prediction System, and a suite of 7 Flutter mobile apps built across my Mobile
        Application Development labs. None of these were side projects — they're all part of the
        same academic journey, each one adding a new tool to what I can build end to end.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
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
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
}