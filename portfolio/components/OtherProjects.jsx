'use client';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import TypedOnView from './TypedOnView';

const projects = [
  {
    title: 'TaskBoard Pro',
    desc: 'Smart task management system to create, track and organize tasks with reminders and repeat rules.',
    tech: 'Task Management App',
    image: '/images/taskboard.png',
    github: 'https://github.com/rabeelfatma/Flutter-Sp23-BSE-032-6A-Rabeel-Fatima/tree/main/labmid/task_management',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_taskboard-pro-smart-task-management-activity-7473069095521771520-fHDp',
  },
  {
    title: 'Hospital Management System (Database)',
    desc: 'Desktop app for managing patient records, doctor schedules and appointments.',
    tech: 'C#, Windows Forms, SQL Server LocalDB',
    image: null,
    github: 'https://github.com/rabeelfatma/DataBase-Systems-Project-Hospital-Management-System-SQL-',
    linkedin: null,
  },
  {
    title: 'Hospital Management System (Networking)',
    desc: 'C# Socket programming based hospital network management system for multi-client communications.',
    tech: 'C#, Networking, Socket Programming',
    image: null,
    github: 'https://github.com/rabeelfatma/Networking-project-4th-Semester-Hospital-Management-System',
    linkedin: null,
  },
  {
    title: 'House Rent Prediction System',
    desc: 'Machine learning project that predicts house rental prices using regression based on user input.',
    tech: 'Python, Machine Learning',
    image: null,
    github: 'https://github.com/rabeelfatma/Machine-Learning-Project-House-Rent-Prediction-5th-Semester-',
    linkedin: null,
  },
];

export default function OtherProjects() {
  return (
    <section id="other-projects" className="py-24 px-6 max-w-6xl mx-auto">
      <TypedOnView text="Other Projects" as="h2" className="text-3xl font-bold mb-10 text-center gradient-text block" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.15, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -8, borderColor: 'var(--accent)', boxShadow: '0 0 30px rgba(251,122,31,0.25)' }}
            className="rounded-2xl bg-[var(--card-bg)] border border-[var(--hairline)] transition overflow-hidden flex flex-col"
          >
            {p.image && <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 text-[var(--text)]">{p.title}</h3>
              <p className="text-[var(--text-dim)] text-sm mb-3 flex-1">{p.desc}</p>
              <p className="text-xs text-[var(--accent-2)] mb-4">{p.tech}</p>
              <div className="flex gap-5 text-sm">
                {p.github && (
                  <a href={p.github} target="_blank" className="flex items-center gap-1.5 text-[var(--accent)] hover:underline">
                    <GithubIcon size={16} /> GitHub
                  </a>
                )}
                {p.linkedin && (
                  <a href={p.linkedin} target="_blank" className="flex items-center gap-1.5 text-[var(--accent-3)] hover:underline">
                    <LinkedinIcon size={16} /> LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}