'use client';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import TypedOnView from './TypedOnView';

const REPO = 'https://github.com/rabeelfatma/Flutter-Sp23-BSE-032-6A-Rabeel-Fatima';

const webProjects = [
  {
    title: 'Expense Management System',
    desc: 'Full-stack app for personal finance tracking with real-time expense entries and category breakdown.',
    tech: 'MERN Stack — MongoDB, Express, React, Node.js',
    github: 'https://github.com/rabeelfatma/advance_web_Rabeel_032',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_expense-manager-mern-stack-application-activity-7472646697081266176-XFdg',
    video: 'https://drive.google.com/file/d/1hq1B16LGDoSFykg9nbvW6mToiWu6GBBn/preview',
  },
  {
    title: 'Portfolio Website',
    desc: 'This personal portfolio website itself — built with Next.js, Tailwind CSS, Framer Motion and interactive charts.',
    tech: 'Next.js, Tailwind CSS, Framer Motion',
    github: 'https://github.com/rabeelfatma/advance_web_Rabeel_032/tree/main/portfolio',
    linkedin: null,
    video: 'https://drive.google.com/file/d/1JK-ASZ1Nh5K-KLZU8XjUkxHJjch-fSYv/preview',
  },
  {
    title: 'Coffee Management System',
    desc: 'Full-stack web app for products, categories, recipes and orders with a live sales dashboard.',
    tech: 'Laravel',
    github: 'https://github.com/rabeelfatma/Web-Technology',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_coffee-shop-management-system-laravel-activity-7474081379945811969-a6rC',
    video: 'https://drive.google.com/file/d/1H-ppv5mhLfw3Z-jyC259RZ6VTh4m4gnf/preview',
  },
];

const desktopProjects = [
  {
    title: 'Hostel Management System',
    desc: 'Desktop application handling room allocation, student registration and fee management.',
    tech: 'C#, WPF, XAML, SQL Server LocalDB',
    github: 'https://github.com/rabeelfatma/Visual-Programming',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_hostel-management-system-hms-description-activity-7473789970743418880-6ru_',
    video: 'https://drive.google.com/file/d/1-VhD5-YiPmUAIhYYqtZIGbbJowqGrTna/preview',
  },
  {
    title: 'Inventory Management System',
    desc: 'Desktop app for stock tracking, product & supplier management with report generation.',
    tech: 'C#, WPF, XAML, SQL Server LocalDB',
    github: 'https://github.com/rabeelfatma/Software-Construction-and-Development',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_im-excited-to-share-my-latest-desktop-application-activity-7475867816559169536-KKPK',
    video: 'https://drive.google.com/file/d/1_hj5GS1cQN65OVCOGij6vNxyeEO5qUAc/preview',
  },
  {
    title: 'Hospital Management System',
    desc: 'Desktop application for managing patient records, doctor schedules and hospital operations.',
    tech: 'C#, Windows Forms, Database: SQL Server',
    github: 'https://github.com/rabeelfatma/Project-Hospital-Management-System',
    linkedin: 'https://lnkd.in/p/dzZVpXy2',
    video: 'https://drive.google.com/file/d/1-7UEQcP3on0OyzWj7q1VHpctA6-x3OHU/preview',
  },
];

const networkingProjects = [
  {
    title: 'Hospital Management System (Networking)',
    desc: 'Network design for a hospital management system connecting multiple departments, showing routers, switches, servers and end devices across LAN/WAN topology.',
    tech: 'Networking, Cisco Packet Tracer, LAN/WAN Design',
    image: null,
    github: 'https://github.com/rabeelfatma/Networking-project-4th-Semester-Hospital-Management-System',
    linkedin: null,
    video: null,
  },
];

const mlProjects = [
  {
    title: 'House Rent Prediction System',
    desc: 'Machine learning project that predicts house rental prices using regression based on user input.',
    tech: 'Python, Machine Learning',
    image: null,
    github: 'https://github.com/rabeelfatma/Machine-Learning-Project-House-Rent-Prediction-5th-Semester-',
    linkedin: null,
    video: null,
  },
];

const mobileApps = [
  { 
    title: 'Dice App', 
    video: 'https://drive.google.com/file/d/1X90fTXM52tz_rakMRKCGdD3tBEXyi0Io/preview', 
    github: `${REPO}/tree/main/lab6/my_dice_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_multi-player-dice-game-app-using-flutter-activity-7472712738067243008-HFt8'
  },
  { 
    title: 'Profile App', 
    video: 'https://drive.google.com/file/d/1qjinvTe-KxO9iz3QGBGJALv4a21-aa6X/preview', 
    github: `${REPO}/tree/main/lab5/flutter_create_profile_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_profile-app-made-with-flutter-description-activity-7473044659074785281-uNul'
  },
  { 
    title: 'CGPA Calculator', 
    video: 'https://drive.google.com/file/d/1HjOfD7CSbdb4rDNt-N7lPuEcZLyl4HDN/preview', 
    github: `${REPO}/tree/main/lab7/cgpa_calculator1`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_advanced-cgpa-calculator-app-description-activity-7472711091798622208-puT4'
  },
  { 
    title: 'BMI App', 
    video: 'https://drive.google.com/file/d/1D-CBmy4qaW504akEo-QrxaLRtWih0U8V/preview', 
    github: `${REPO}/tree/main/bmi/bmi_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_bmi-calculator-app-using-flutter-activity-7472713555851526144-Ok23'
  },
  { 
    title: 'Counter App', 
    video: 'https://drive.google.com/file/d/1ZjHWyWNKawbBSYyVXjwztutwFtijVhQ8/preview', 
    github: `${REPO}/tree/main/lab4/counter_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_smart-math-counter-app-flutter-activity-7473007137758142464-eGPm'
  },
  { 
    title: 'Committee Management App', 
    video: 'https://drive.google.com/file/d/1KB-u6sSTqqzGS5HXE_PNA-jJZWL3kX1b/preview', 
    github: `${REPO}/tree/main/lab8/committe_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_committee-management-system-app-flutter-activity-7473004126117761024-rj7i'
  },
  { 
    title: 'POS App', 
    video: 'https://drive.google.com/file/d/1pQ0zFytzovvUfgQAathXCccjRmK5_ISH/preview', 
    github: `${REPO}/tree/main/labfinal/pospharmacy`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_smart-pos-inventory-management-app-ugcPost-7472660765087293441-nlC7'
  },
  {
    title: 'TaskBoard Pro',
    desc: 'Smart task management system to create, track and organize tasks with reminders and repeat rules.',
    image: '/images/taskboard.png',
    github: 'https://github.com/rabeelfatma/Flutter-Sp23-BSE-032-6A-Rabeel-Fatima/tree/main/labmid/task_management',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_taskboard-pro-smart-task-management-activity-7473069095521771520-fHDp',
  },
];

function ProjectGrid({ items, isMobile = false }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {items.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: (i % 3) * 0.1, type: 'spring', stiffness: 120 }}
          whileHover={{ y: -8, borderColor: 'var(--accent)', boxShadow: '0 0 30px rgba(251,122,31,0.25)' }}
          className="rounded-2xl bg-[var(--card-bg)] border border-[var(--hairline)] transition overflow-hidden flex flex-col justify-between shadow-xl"
        >
          {p.video ? (
            <div className={`w-full bg-black/40 overflow-hidden flex items-center justify-center p-4 ${isMobile ? 'h-[360px] sm:h-[400px]' : 'h-[320px] sm:h-[360px]'}`}>
              <div className={`h-full rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-neutral-800 ring-4 ring-neutral-900/50 ${isMobile ? 'w-[185px] sm:w-[200px] aspect-[9/19]' : 'w-full aspect-video'}`}>
                <iframe src={p.video} allow="autoplay" className="w-full h-full border-0 pointer-events-auto" />
              </div>
            </div>
          ) : p.image ? (
            <div className={`w-full bg-black/40 overflow-hidden flex items-center justify-center p-4 ${isMobile ? 'h-[360px] sm:h-[400px]' : 'h-[320px] sm:h-[360px]'}`}>
              <div className={`h-full rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-neutral-800 ring-4 ring-neutral-900/50 ${isMobile ? 'w-[185px] sm:w-[200px] aspect-[9/19]' : 'w-full aspect-video'}`}>
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ) : (
            <div className={`w-full bg-black/40 overflow-hidden flex items-center justify-center p-4 ${isMobile ? 'h-[360px] sm:h-[400px]' : 'h-[320px] sm:h-[360px]'}`}>
              <div className={`h-full rounded-xl overflow-hidden shadow-2xl bg-neutral-900/80 border-2 border-dashed border-neutral-700 flex items-center justify-center text-center p-6 ${isMobile ? 'w-[185px] sm:w-[200px] aspect-[9/19]' : 'w-full aspect-video'}`}>
                <div>
                  <p className="text-[var(--text)] font-semibold text-sm mb-1">{p.title}</p>
                  <p className="text-[var(--text-dim)] text-xs">Preview / Mockup in Progress</p>
                </div>
              </div>
            </div>
          )}
          <div className="p-6 flex flex-col flex-1 justify-between bg-[var(--card-bg)] border-t border-[var(--hairline)]">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-[var(--text)]">{p.title}</h3>
              {p.desc && <p className="text-[var(--text-dim)] text-sm mb-3">{p.desc}</p>}
              {p.tech && <p className="text-xs text-[var(--accent-2)] mb-4">{p.tech}</p>}
            </div>
            <div className="flex flex-wrap gap-4 text-sm pt-2">
              {p.github && (
                <a href={p.github} target="_blank" className="flex items-center gap-1.5 text-[var(--accent)] hover:underline">
                  <GithubIcon size={18} /> GitHub
                </a>
              )}
              {p.linkedin && (
                <a href={p.linkedin} target="_blank" className="flex items-center gap-1.5 text-[var(--accent-3)] hover:underline">
                  <LinkedinIcon size={18} /> LinkedIn
                </a>
              )}
              {p.video && (
                <a href={p.video} target="_blank" className="flex items-center gap-1.5 text-sky-400 hover:underline">
                  ▶ Watch Video
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <TypedOnView text="Projects" as="h2" className="text-3xl font-bold mb-14 text-center gradient-text block" />

      {/* Mobile Apps Suite */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-[var(--text)] border-l-4 border-[var(--accent)] pl-3">Mobile Apps Suite</h3>
        <ProjectGrid items={mobileApps} isMobile={true} />
      </div>

      {/* Web Applications */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-[var(--text)] border-l-4 border-[var(--accent)] pl-3">Web Applications</h3>
        <ProjectGrid items={webProjects} isMobile={false} />
      </div>

      {/* Desktop Applications */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-[var(--text)] border-l-4 border-[var(--accent)] pl-3">Desktop Applications</h3>
        <ProjectGrid items={desktopProjects} isMobile={false} />
      </div>

      {/* Machine Learning */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-[var(--text)] border-l-4 border-[var(--accent)] pl-3">Machine Learning</h3>
        <ProjectGrid items={mlProjects} isMobile={false} />
      </div>

      {/* Networking */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-[var(--text)] border-l-4 border-[var(--accent)] pl-3">Networking</h3>
        <ProjectGrid items={networkingProjects} isMobile={false} />
      </div>
    </section>
  );
}