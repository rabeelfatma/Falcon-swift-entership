'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, GraduationCap } from 'lucide-react';
import TypedOnView from './TypedOnView';

const education = {
  institute: 'COMSATS University Islamabad, Vehari Campus',
  department: 'Computer Science',
  program: 'Software Engineering',
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <TypedOnView text="Education" as="h2" className="text-3xl font-bold mb-10 gradient-text" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: 'spring' }}
        whileHover={{ y: -4 }}
        className="card rounded-xl p-6"
      >
        {/* University row */}
        <div className="flex items-center gap-4 mb-6">
          <span className="shrink-0 w-14 h-14 rounded-full overflow-hidden bg-white flex items-center justify-center border border-[var(--accent)]/40">
            <Image
              src="/images/comsats-logo.png"
              alt="COMSATS University Islamabad logo"
              width={56}
              height={56}
              className="object-contain"
            />
          </span>
          <h3 className="text-lg font-semibold text-[var(--text)]">{education.institute}</h3>
        </div>

        {/* Department & Program boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 bg-[var(--card-bg)] border border-[var(--hairline)] rounded-xl p-4"
          >
            <span className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--card-bg)] border border-[var(--hairline)] text-[var(--accent)]">
              <BookOpen size={18} />
            </span>
            <div>
              <p className="text-[var(--accent)] text-xs font-medium">Department</p>
              <p className="text-[var(--text-dim)] text-sm mt-0.5">{education.department}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 bg-[var(--card-bg)] border border-[var(--hairline)] rounded-xl p-4"
          >
            <span className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--card-bg)] border border-[var(--hairline)] text-[var(--accent)]">
              <GraduationCap size={18} />
            </span>
            <div>
              <p className="text-[var(--accent)] text-xs font-medium">Program</p>
              <p className="text-[var(--text-dim)] text-sm mt-0.5">{education.program}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}