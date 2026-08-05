'use client';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import TypedOnView from './TypedOnView';

const education = [
  { degree: 'BS Software Engineering', institute: 'COMSATS University Islamabad, Vehari Campus', result: 'CGPA: 3.76 / 4.00 — 7 semesters completed' },
  { degree: 'Intermediate (FSc Pre-Medical)', institute: 'Punjab Group of Colleges, Burewala — BISE Multan', result: '1030 / 1100 — 93.6% — Grade A+' },
  { degree: 'Matric (Science Group)', institute: 'Jinnah Model Girls High School, Burewala — BISE Multan', result: '1039 / 1100 — 94.4% — Grade A+' },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <TypedOnView text="Education" as="h2" className="text-3xl font-bold mb-10 gradient-text" />
      <div className="relative border-l border-[var(--card-border)] pl-8 space-y-10">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, type: 'spring' }}
            whileHover={{ x: 4 }}
            className="relative"
          >
            <span className="absolute -left-[46px] top-0 w-8 h-8 rounded-full bg-[var(--card-bg)] border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)]">
              <GraduationCap size={16} />
            </span>
            <h3 className="text-lg font-semibold text-[var(--text)]">{e.degree}</h3>
            <p className="text-[var(--text-dim)] text-sm">{e.institute}</p>
            <p className="text-[var(--accent-2)] text-sm mt-1">{e.result}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}