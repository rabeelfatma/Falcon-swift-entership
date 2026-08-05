'use client';
import { motion } from 'framer-motion';
import TypedOnView from './TypedOnView';

const experiences = [
  {
    role: 'Full Stack AI Engineer',
    company: 'FalconSwift',
    period: 'Present',
    status: 'Active Engagement',
    description:
      'Working alongside the engineering team at FalconSwift to design, build, and deploy production-grade web applications tightly integrated with cutting-edge artificial intelligence systems.',
    skills: [
      {
        name: 'Python',
        icon: (
          <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.627 0-6 2.748-6 5.5v2.5h6v1h-7.5c-3.153 0-4.5 1.488-4.5 4.5s1.347 4.5 4.5 4.5h2v-2.25c0-1.79 1.46-3.25 3.25-3.25h4.25v-3c0-2.752.627-5.5-6-5.5zm-3.25 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7.75 11c-1.79 0-3.25 1.46-3.25 3.25v2.25h-2.5c-3.153 0-4.5-1.488-4.5-4.5s1.347-4.5 4.5-4.5h7.5v-2.5c0-2.752-.627-5.5 6-5.5 6.627 0 6 2.748 6 5.5v2.5h-6z" />
          </svg>
        ),
      },
      {
        name: 'HTML5',
        icon: (
          <svg className="w-4 h-4 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.65 5.5H6.85l.19 2.1h11.91l-.64 7.2-4.41 1.22-4.43-1.22-.3-3.3h2.12l.14 1.5 2.45.68 2.44-.68.32-3.6H7.13l-.53-6h13.19l-.24 2.1z" />
          </svg>
        ),
      },
      {
        name: 'CSS3',
        icon: (
          <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm17.65 5.5H6.85l.19 2.1h11.91l-.32 3.6H6.72l.19 2.1h11.72l-.64 7.2-4.41 1.22-4.43-1.22-.3-3.3h2.12l.14 1.5 2.45.68 2.44-.68.32-3.6H8.25l-.53-6h12.19l-.24-2.1z" />
          </svg>
        ),
      },
      {
        name: 'JavaScript',
        icon: (
          <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm14.54 13.55c-.61-.92-1.21-1.84-1.82-2.76-.32.22-.64.44-.96.66-.46.32-.93.63-1.39.95-.53-.47-1.07-.94-1.6-1.41-.47-.41-.95-.82-1.42-1.23-.42.45-.85.9-1.27 1.35.32.26.65.51.97.77.38.3.76.6 1.14.9-.53.47-1.07.94-1.6 1.41-.42-.45-.85-.9-1.27-1.35-1.09 1.15-2.18 2.31-3.27 3.46 1.15 1.15 2.31 2.31 3.46 3.46 1.05-1.05 2.1-2.1 3.15-3.15.53.47 1.07.94 1.6 1.41.42-.45.85-.9 1.27-1.35-.32-.26-.65-.51-.97-.77-.38-.3-.76-.6-1.14-.9.53-.47 1.07-.94 1.6-1.41.42.45.85.9 1.27 1.35 1.09-1.15 2.18-2.31 3.27-3.46z" />
          </svg>
        ),
      },
      {
        name: 'React.js',
        icon: (
          <svg
            className="w-4 h-4 text-cyan-400 animate-spin"
            style={{ animationDuration: '10s' }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <ellipse cx="12" cy="12" rx="3" ry="8" />
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        ),
      },
      {
        name: 'Next.js',
        icon: (
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.891 19.856L9.52 9.065V19.5H7.5V4.5h2.02l8.261 10.791V4.5h2.02v15.356h-1.91z" />
          </svg>
        ),
      },
      {
        name: 'Node.js',
        icon: (
          <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L1.732 6v12L12 24l10.268-6V6L12 0zm0 2.23l8.268 4.77v9.5L12 21.27l-8.268-4.77v-9.5L12 2.23z" />
          </svg>
        ),
      },
      {
        name: 'TensorFlow',
        icon: (
          <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l-12 6v12l12 6 12-6V6l-12-6zm-1 9.5h-2v5h-2v-5h-2v-2h6v2zm6 5h-2v-3h-2v3h-2v-7h6v7z" />
          </svg>
        ),
      },
      {
        name: 'LangChain',
        icon: (
          <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
      },
      {
        name: 'OpenAI',
        icon: (
          <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.9807 5.9807 0 0 0 .5157 4.9108 6.051 6.051 0 0 0 6.5098 2.9A6.0651 6.0651 0 0 0 19.0193 19.8182a5.9847 5.9847 0 0 0 3.9977-2.9 6.0462 6.0462 0 0 0-.7351-7.0971z" />
          </svg>
        ),
      },
      {
        name: 'FastAPI',
        icon: (
          <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.905 17.653V13.5h-3.81v4.153h-2.154V6.347h2.154v4.153h3.81V6.347h2.154v11.306h-2.154z" />
          </svg>
        ),
      },
      {
        name: 'Docker',
        icon: (
          <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.185h-2.119a.186.186 0 0 0-.185.185v1.887c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.185V3.576a.186.186 0 0 0-.186-.185h-2.118a.186.186 0 0 0-.185.185v1.887c0 .102.083.185.185.185m0 2.715h2.118a.186.186 0 0 0 .186-.185V6.29a.186.186 0 0 0-.186-.185h-2.118a.186.186 0 0 0-.185.185v1.887c0 .102.083.185.185.185m0 2.715h2.118a.186.186 0 0 0 .186-.185V9.005a.186.186 0 0 0-.186-.185h-2.118a.186.186 0 0 0-.185.185v1.887c0 .102.083.185.185.185m-2.955 0h2.119a.186.186 0 0 0 .185-.185V9.005a.186.186 0 0 0-.185-.185H8.074a.186.186 0 0 0-.185.185v1.887c0 .102.083.185.185.185m2.954 2.715h2.118a.186.186 0 0 0 .186-.185v-1.887a.186.186 0 0 0-.186-.185h-2.118a.186.186 0 0 0-.185.185v1.887c0 .102.083.185.185.185m-2.955 0h2.119a.186.186 0 0 0 .185-.185v-1.887a.186.186 0 0 0-.185-.185H8.074a.186.186 0 0 0-.185.185v1.887c0 .102.083.185.185.185m-2.954 0h2.118a.186.186 0 0 0 .186-.185v-1.887a.186.186 0 0 0-.186-.185H5.12a.186.186 0 0 0-.185.185v1.887c0 .102.083.185.185.185m14.652-3.837c-1.385-.11-2.955-.788-3.414-1.97-.037-.09-.145-.13-.238-.088l-.759.349c-.089.04-.127.145-.084.232.748 1.54 2.585 2.502 4.495 2.502.26 0 .47-.21.47-.47v-.505c0-.03-.02-.05-.04-.05m-3.468-4.475c-.214 0-.388.174-.388.388v1.164c0 .214.174.388.388.388h1.164c.214 0 .388-.174.388-.388V5.093a.388.388 0 0 0-.388-.388h-1.164z" />
          </svg>
        ),
      },
    ],
    highlights: [
      {
        title: 'Full-Stack Architecture',
        text: 'End-to-end system design across frontend, backend, and infra layers.',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        ),
      },
      {
        title: 'ML & Deep Learning',
        text: 'Model design, training pipelines, and applied deep learning fundamentals.',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="6" width="12" height="12" rx="2" />
            <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
          </svg>
        ),
      },
      {
        title: 'Generative AI & Agents',
        text: 'Building intelligent agent workflows on top of generative models.',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
            <circle cx="12" cy="12" r="3.2" />
          </svg>
        ),
      },
      {
        title: 'LangChain, LangGraph & RAG',
        text: 'Advanced retrieval-augmented generation and orchestrated LLM chains.',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M8.5 8.5 15.5 15.5" />
            <circle cx="18" cy="6" r="3" />
            <path d="M15.5 8.5 12 12" />
          </svg>
        ),
      },
      {
        title: 'Deployment & Containers',
        text: 'Production deployment pipelines with Docker-based containerization.',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 8 12 3 3 8l9 5 9-5z" />
            <path d="M3 8v8l9 5 9-5V8" />
            <path d="M12 13v8" />
          </svg>
        ),
      },
      {
        title: 'Scalable App Architecture',
        text: 'Portfolio and application structures built to scale cleanly.',
        icon: (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        ),
      },
    ],
  },
];

// Orchestrated stagger — sections reveal one after another, not all at once
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <TypedOnView
        text="Professional Experience"
        as="h2"
        className="text-3xl font-bold mb-14 text-center gradient-text block"
      />

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-6"
          >
            {/* ── Header card ─────────────────────────────── */}
            <motion.div
              variants={blockVariants}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="rounded-2xl p-7 md:p-8 border border-[var(--hairline)] bg-[var(--card-bg)] shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text)]">{exp.role}</h3>
                  <p className="text-[var(--accent)] font-semibold text-base mt-1 flex flex-wrap items-center gap-2">
                    <span>@ {exp.company}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                      {exp.status}
                    </span>
                  </p>
                </div>
                <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-neutral-900 text-neutral-300 border border-neutral-800 w-fit shadow-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-[var(--text-dim)] text-base leading-relaxed mt-5 relative z-10">
                {exp.description}
              </p>
            </motion.div>

            {/* ── Tech stack card ─────────────────────────── */}
            <motion.div
              variants={blockVariants}
              className="rounded-2xl p-7 md:p-8 border border-[var(--hairline)] bg-[var(--card-bg)] shadow-xl"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-dim)] mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                Technologies & Technical Stack
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {exp.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.04, duration: 0.35, ease: 'easeOut' }}
                    whileHover={{ y: -4, scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-xl bg-neutral-900/70 border border-neutral-800 hover:border-[var(--accent)]/50 hover:shadow-[0_0_20px_-4px_var(--accent)] transition-shadow cursor-default text-center"
                  >
                    {skill.icon}
                    <span className="text-[11px] font-medium text-neutral-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Core modules card ────────────────────────── */}
            <motion.div
              variants={blockVariants}
              className="rounded-2xl p-7 md:p-8 border border-[var(--hairline)] bg-[var(--card-bg)] shadow-xl"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-dim)] mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                Key Focus & Core Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exp.highlights.map((item, hIdx) => (
                  <motion.div
                    key={hIdx}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: hIdx * 0.07, duration: 0.4, ease: 'easeOut' }}
                    whileHover={{ y: -3, borderColor: 'var(--accent)' }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/70 transition-colors"
                  >
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-200">{item.title}</p>
                      <p className="text-xs text-[var(--text-dim)] mt-1 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}