'use client';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Monitor, Server } from 'lucide-react';
import TypedOnView from './TypedOnView';

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'Designing pixel-perfect interfaces and robust, end-to-end web applications using MERN, MEAN, Next.js, and dynamic PHP.',
    icon: Layout,
    tech: 'MERN Stack, MEAN Stack, Next.js, Dynamic PHP, HTML5/CSS3',
  },
  {
    title: 'Backend & Database Systems',
    description: 'Developing secure server logic, RESTful APIs, and managing relational & non-relational databases with Node.js, Express, PHP, and MySQL.',
    icon: Server,
    tech: 'Node.js, Express, PHP, MySQL, SQL, MongoDB, REST APIs',
  },
  {
    title: 'Mobile App Development',
    description: 'Building cross-platform mobile applications for Android & iOS using Flutter with real-time Firebase backends and SQLite databases.',
    icon: Smartphone,
    tech: 'Flutter, Dart, Firebase, SQLite',
  },
  {
    title: 'Desktop Software Development',
    description: 'Designing custom desktop management software and business systems using WPF, Windows Forms, and SQL Server LocalDB.',
    icon: Monitor,
    tech: 'C#, WPF, XAML, Windows Forms, SQL Server',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <TypedOnView 
        text="Services I Offer" 
        as="h2" 
        className="text-3xl font-bold mb-3 text-center gradient-text block" 
      />
      <p className="text-center text-[var(--text-dim)] mb-12 max-w-xl mx-auto">
        Turning complex requirements into functional, high-performance web, mobile, and desktop applications.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1, 
                type: 'spring', 
                stiffness: 90 
              }}
              whileHover={{ 
                y: -8, 
                borderColor: 'var(--accent)', 
                boxShadow: '0 0 30px color-mix(in srgb, var(--accent) 20%, transparent)' 
              }}
              className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--hairline)] transition-all flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-3)] flex items-center justify-center text-white mb-5 shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--text)]">{s.title}</h3>
                <p className="text-[var(--text-dim)] text-sm mb-6 leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--accent-2)] tracking-wide uppercase">
                  {s.tech}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}