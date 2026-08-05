'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Expense Management System',
    desc: 'MERN Stack app for personal finance and real-time expense tracking.',
    tech: 'MongoDB, Express, React, Node.js',
    github: 'https://github.com/rabeelfatma/advance_web_Rabeel_032',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_expense-manager-mern-stack-application-activity-7472646697081266176-XFdg',
    video: 'https://drive.google.com/file/d/1hq1B16LGDoSFykg9nbvW6mToiWu6GBBn/preview',
  },
  {
    title: 'Hostel Management System',
    desc: 'Desktop app for room allocation, student registration and fee management.',
    tech: 'C#, WPF, XAML, SQL Server LocalDB',
    github: 'https://github.com/rabeelfatma/Visual-Programming',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_hostel-management-system-hms-description-activity-7473789970743418880-6ru_',
    video: 'https://drive.google.com/file/d/1-VhD5-YiPmUAIhYYqtZIGbbJowqGrTna/preview',
  },
  {
    title: 'Coffee Management System',
    desc: 'Full-stack app for products, categories, recipes, orders with live dashboard.',
    tech: 'Laravel',
    github: 'https://github.com/rabeelfatma/Web-Technology',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_coffee-shop-management-system-laravel-activity-7474081379945811969-a6rC',
    video: 'https://drive.google.com/file/d/1H-ppv5mhLfw3Z-jyC259RZ6VTh4m4gnf/preview',
  },
  {
    title: 'Hospital Management System (Database)',
    desc: 'Database-driven app for managing patient records, doctor schedules and appointments.',
    tech: 'C#, Windows Forms, SQL Server',
    github: 'https://github.com/rabeelfatma/DataBase-Systems-Project-Hospital-Management-System-SQL-',
    linkedin: null,
    video: null,
  },
  {
    title: 'Hospital Management System (Networking)',
    desc: 'Networked hospital management software system designed to communicate across client-server infrastructure.',
    tech: 'C#, Socket Programming, Networking',
    github: 'https://github.com/rabeelfatma/Networking-project-4th-Semester-Hospital-Management-System',
    linkedin: null,
    video: null,
  },
  {
    title: 'House Rent Prediction System',
    desc: 'ML project predicting house rental prices using regression based on key input parameters.',
    tech: 'Python, Machine Learning',
    github: 'https://github.com/rabeelfatma/Machine-Learning-Project-House-Rent-Prediction-5th-Semester-',
    linkedin: null,
    video: null,
  },
  {
    title: 'Inventory Management System',
    desc: 'Desktop app for stock tracking, product & supplier management and reports.',
    tech: 'C#, WPF, XAML, SQL Server LocalDB',
    github: 'https://github.com/rabeelfatma/Software-Construction-and-Development',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_im-excited-to-share-my-latest-desktop-application-activity-7475867816559169536-KKPK',
    video: 'https://drive.google.com/file/d/1_hj5GS1cQN65OVCOGij6vNxyeEO5qUAc/preview',
  },
  {
    title: 'TaskBoard Pro (Task Management System)',
    desc: 'Smart task management system for tracking tasks and progress.',
    tech: 'Web App',
    github: 'https://github.com/rabeelfatma/Flutter-Sp23-BSE-032-6A-Rabeel-Fatima/tree/main/labmid/task_management',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_taskboard-pro-smart-task-management-activity-7473069095521771520-fHDp',
    video: null,
  },
  {
    title: 'Smart POS Inventory Management App',
    desc: 'Comprehensive point of sale and inventory management application.',
    tech: 'Flutter, Mobile App',
    github: null,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_smart-pos-inventory-management-app-ugcPost-7472660765087293441-nlC7',
    video: null,
  },
  {
    title: 'Profile App',
    desc: 'Custom developer profile and portfolio application.',
    tech: 'Flutter, Mobile App',
    github: null,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_profile-app-made-with-flutter-description-activity-7473044659074785281-uNul',
    video: null,
  },
  {
    title: 'Smart Math Counter App',
    desc: 'Interactive counter and mathematical utility app.',
    tech: 'Flutter, Mobile App',
    github: null,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_smart-math-counter-app-flutter-activity-7473007137758142464-eGPm',
    video: null,
  },
  {
    title: 'Committee Management System',
    desc: 'Financial committee and group pool management app.',
    tech: 'Flutter, Mobile App',
    github: null,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_committee-management-system-app-flutter-activity-7473004126117761024-rj7i',
    video: null,
  },
  {
    title: 'BMI Calculator App',
    desc: 'Health metrics tracking and body mass index calculator.',
    tech: 'Flutter, Mobile App',
    github: null,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_bmi-calculator-app-using-flutter-activity-7472713555851526144-Ok23',
    video: null,
  },
  {
    title: 'Multi-Player Dice Game',
    desc: 'Interactive multi-player game application.',
    tech: 'Flutter, Mobile App',
    github: null,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_multi-player-dice-game-app-using-flutter-activity-7472712738067243008-HFt8',
    video: null,
  },
  {
    title: 'Advanced CGPA Calculator App',
    desc: 'Academic grade point average calculation utility.',
    tech: 'Flutter, Mobile App',
    github: null,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_advanced-cgpa-calculator-app-description-activity-7472711091798622208-puT4',
    video: null,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 text-center gradient-text"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 transition overflow-hidden flex flex-col"
          >
            {p.video && (
              <iframe
                src={p.video}
                allow="autoplay"
                className="w-full aspect-video"
              />
            )}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-3 flex-1">{p.desc}</p>
              <p className="text-xs text-cyan-300 mb-4">{p.tech}</p>
              <div className="flex gap-4 text-sm">
                {p.github && (
                  <a href={p.github} target="_blank" className="text-cyan-400 hover:underline">GitHub →</a>
                )}
                {p.linkedin && (
                  <a href={p.linkedin} target="_blank" className="text-blue-400 hover:underline">LinkedIn Post →</a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}