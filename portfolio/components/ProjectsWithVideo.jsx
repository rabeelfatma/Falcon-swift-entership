'use client';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import TypedOnView from './TypedOnView';

const projects = [
  {
    title: 'Expense Management System',
    desc: 'Full-stack app for personal finance tracking with real-time expense entries and category breakdown.',
    tech: 'MERN Stack — MongoDB, Express, React, Node.js',
    category: 'Web',
    github: 'https://github.com/rabeelfatma/advance_web_Rabeel_032',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_expense-manager-mern-stack-application-activity-7472646697081266176-XFdg',
    video: 'https://drive.google.com/file/d/1hq1B16LGDoSFykg9nbvW6mToiWu6GBBn/preview',
  },
  {
    title: 'Portfolio Website',
    desc: 'This personal portfolio website itself — built with Next.js, Tailwind CSS, Framer Motion and interactive charts.',
    tech: 'Next.js, Tailwind CSS, Framer Motion',
    category: 'Web',
    github: 'https://github.com/rabeelfatma/advance_web_Rabeel_032/tree/main/portfolio',
    linkedin: null,
    video: 'https://drive.google.com/file/d/1JK-ASZ1Nh5K-KLZU8XjUkxHJjch-fSYv/preview',
  },
  {
    title: 'Hostel Management System',
    desc: 'Desktop application handling room allocation, student registration and fee management.',
    tech: 'C#, WPF, XAML, SQL Server LocalDB',
    category: 'Desktop',
    github: 'https://github.com/rabeelfatma/Visual-Programming',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_hostel-management-system-hms-description-activity-7473789970743418880-6ru_',
    video: 'https://drive.google.com/file/d/1-VhD5-YiPmUAIhYYqtZIGbbJowqGrTna/preview',
  },
  {
    title: 'Coffee Management System',
    desc: 'Full-stack web app for products, categories, recipes and orders with a live sales dashboard.',
    tech: 'Laravel',
    category: 'Web',
    github: 'https://github.com/rabeelfatma/Web-Technology',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_coffee-shop-management-system-laravel-activity-7474081379945811969-a6rC',
    video: 'https://drive.google.com/file/d/1H-ppv5mhLfw3Z-jyC259RZ6VTh4m4gnf/preview',
  },
  {
    title: 'Inventory Management System',
    desc: 'Desktop app for stock tracking, product & supplier management with report generation.',
    tech: 'C#, WPF, XAML, SQL Server LocalDB',
    category: 'Desktop',
    github: 'https://github.com/rabeelfatma/Software-Construction-and-Development',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_im-excited-to-share-my-latest-desktop-application-activity-7475867816559169536-KKPK',
    video: 'https://drive.google.com/file/d/1_hj5GS1cQN65OVCOGij6vNxyeEO5qUAc/preview',
  },
];

export default function ProjectsWithVideo() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <TypedOnView text="Featured Projects" as="h2" className="text-3xl font-bold mb-3 text-center gradient-text block" />
      <p className="text-center text-[var(--text-dim)] mb-10">Watch a quick demo of each project below</p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 60, scale: 0.9, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.15, type: 'spring', stiffness: 90 }}
            whileHover={{ y: -8, borderColor: 'var(--accent)', boxShadow: '0 0 30px rgba(251,122,31,0.25)' }}
            className="rounded-2xl bg-[var(--card-bg)] border border-[var(--hairline)] transition overflow-hidden flex flex-col"
          >
            {p.video ? (
              <iframe src={p.video} allow="autoplay" className="w-full aspect-video" />
            ) : (
              <div className="w-full aspect-video bg-[var(--card-bg)] flex items-center justify-center text-[var(--text-dim)] text-sm">
                Demo video coming soon
              </div>
            )}
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