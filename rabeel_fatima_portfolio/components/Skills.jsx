'use client';
import { motion } from 'framer-motion';
import { Code2, Globe, Layers, Smartphone, MonitorSmartphone } from 'lucide-react';
import TypedOnView from './TypedOnView';

// Proficiency levels are derived from real usage across my academic projects
// (e.g. C# / WPF / SQL Server power 3 desktop apps, Flutter powers 7 mobile apps,
// MERN powers the Expense Management System, Laravel powers the Coffee Management System).
const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    items: [
      { name: 'C#', level: 88 },
      { name: 'Python', level: 72 },
      { name: 'PHP', level: 74 },
      { name: 'C++', level: 65 },
      { name: 'Java', level: 60 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    items: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 87 },
      { name: 'JavaScript', level: 85 },
      { name: 'Laravel', level: 78 },
    ],
  },
  {
    title: 'MERN Stack',
    icon: Layers,
    items: [
      { name: 'React.js', level: 85 },
      { name: 'Node.js', level: 83 },
      { name: 'MongoDB', level: 82 },
      { name: 'Express.js', level: 82 },
    ],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    items: [
      { name: 'Flutter', level: 90 },
      { name: 'Dart', level: 87 },
      { name: 'Firebase', level: 82 },
      { name: 'SQLite', level: 80 },
    ],
  },
  {
    title: 'Desktop',
    icon: MonitorSmartphone,
    items: [
      { name: 'SQL Server', level: 84 },
      { name: 'WPF', level: 85 },
      { name: 'XAML', level: 83 },
      { name: 'Windows Forms', level: 82 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <TypedOnView text="Skills" as="h2" className="text-3xl font-bold mb-10 gradient-text text-center block" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {skillGroups.map((group, gi) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50, rotate: -2, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: gi * 0.1, type: 'spring', stiffness: 110 }}
              whileHover={{ borderColor: 'var(--accent)', y: -5 }}
              className="card rounded-2xl p-6 transition"
            >
              <div className="flex items-center gap-2 mb-5">
                <Icon size={20} className="text-[var(--accent)]" />
                <h3 className="text-[var(--accent-2)] font-semibold">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.items.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm text-[var(--text-dim)] mb-1">
                      <span>{skill.name}</span>
                      <span className="text-[var(--accent-2)]">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[var(--hairline)] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}