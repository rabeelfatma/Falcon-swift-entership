'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const REPO = 'https://github.com/rabeelfatma/Flutter-Sp23-BSE-032-6A-Rabeel-Fatima';

const webProjects = [
  {
    title: 'Expense Management System',
    techStack: 'MongoDB, Express.js, React.js, Node.js (MERN Stack)',
    image: '/images/expense-management.png',
    github: 'https://github.com/rabeelfatma/advance_web_Rabeel_032',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_expense-manager-mern-stack-application-activity-7472646697081266176-XFdg',
    video: 'https://drive.google.com/file/d/1hq1B16LGDoSFykg9nbvW6mToiWu6GBBn/preview',
  },
  {
    title: 'Portfolio Website',
    techStack: 'Next.js, React, Tailwind CSS',
    image: '/images/portfolio.png',
    github: 'https://github.com/rabeelfatma/advance_web_Rabeel_032/tree/main/portfolio',
    linkedin: 'https://lnkd.in/p/dzEBsGua',
    video: 'https://drive.google.com/file/d/1cZTTft5kaYGUX1nJqGqSv95HOcm8GTWW/view?usp=drive_link',
  },
  {
    title: 'Coffee Management System',
    techStack: 'Laravel, PHP, MySQL, HTML5, CSS3, JavaScript',
    image: '/images/coffee-management.png',
    github: 'https://github.com/rabeelfatma/Web-Technology',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_coffee-shop-management-system-laravel-activity-7474081379945811969-a6rC',
    video: 'https://drive.google.com/file/d/1H-ppv5mhLfw3Z-jyC259RZ6VTh4m4gnf/preview',
  },
];

const desktopProjects = [
  {
    title: 'Hostel Management System',
    techStack: 'C#, WPF, XAML, Microsoft SQL Server LocalDB',
    image: '/images/hostel-management.png',
    github: 'https://github.com/rabeelfatma/Visual-Programming',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_hostel-management-system-hms-description-activity-7473789970743418880-6ru_',
    video: 'https://drive.google.com/file/d/1-VhD5-YiPmUAIhYYqtZIGbbJowqGrTna/preview',
  },
  {
    title: 'Inventory Management System',
    techStack: 'C#, WPF, XAML, Microsoft SQL Server LocalDB',
    image: '/images/inventory-management.png',
    github: 'https://github.com/rabeelfatma/Software-Construction-and-Development',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_im-excited-to-share-my-latest-desktop-application-activity-7475867816559169536-KKPK',
    video: 'https://drive.google.com/file/d/1_hj5GS1cQN65OVCOGij6vNxyeEO5qUAc/preview',
  },
  {
    title: 'Hospital Management System',
    techStack: 'C#, Windows Forms, Microsoft SQL Server',
    image: '/images/hospital-management.png',
    github: 'https://github.com/rabeelfatma/Project-Hospital-Management-System',
    linkedin: 'https://lnkd.in/p/dzZVpXy2',
    video: 'https://drive.google.com/file/d/1-7UEQcP3on0OyzWj7q1VHpctA6-x3OHU/preview',
  },
];

const networkingProjects = [
  {
    title: 'Hospital Management System (Networking)',
    techStack: 'C#, Windows Forms, Networking, Sockets',
    image: '/images/networking-hospital.png',
    github: 'https://github.com/rabeelfatma/Networking-project-4th-Semester-Hospital-Management-System',
    linkedin: null,
    video: null,
  },
];

const mlProjects = [
  {
    title: 'House Rent Prediction System',
    techStack: 'Python, Machine Learning',
    image: '/images/house-rent.png',
    github: 'https://github.com/rabeelfatma/Machine-Learning-Project-House-Rent-Prediction-5th-Semester-',
    linkedin: null,
    video: null,
  },
];

const mobileApps = [
  {
    title: 'CGPA Calculator',
    techStack: 'Flutter, Dart',
    image: '/images/cgpa-calculator.png',
    video: 'https://drive.google.com/file/d/1HjOfD7CSbdb4rDNt-N7lPuEcZLyl4HDN/preview',
    github: `${REPO}/tree/main/lab7/cgpa_calculator1`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_advanced-cgpa-calculator-app-description-activity-7472711091798622208-puT4',
  },
  {
    title: 'BMI App',
    techStack: 'Flutter, Dart',
    image: '/images/bmi-app.png',
    video: 'https://drive.google.com/file/d/1D-CBmy4qaW504akEo-QrxaLRtWih0U8V/preview',
    github: `${REPO}/tree/main/bmi/bmi_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_bmi-calculator-app-using-flutter-activity-7472713555851526144-Ok23',
  },
  {
    title: 'Counter App',
    techStack: 'Flutter, Dart',
    image: '/images/counter-app.png',
    video: 'https://drive.google.com/file/d/1ZjHWyWNKawbBSYyVXjwztutwFtijVhQ8/preview',
    github: `${REPO}/tree/main/lab4/counter_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_smart-math-counter-app-flutter-activity-7473007137758142464-eGPm',
  },
  {
    title: 'Committee Management App',
    techStack: 'Flutter, Firebase, SQLite',
    image: '/images/committee-app.png',
    video: 'https://drive.google.com/file/d/1KB-u6sSTqqzGS5HXE_PNA-jJZWL3kX1b/preview',
    github: `${REPO}/tree/main/lab8/committe_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_committee-management-system-app-flutter-activity-7473004126117761024-rj7i',
  },
  {
    title: 'POS App',
    techStack: 'Flutter, Firebase, SQLite',
    image: '/images/pos-app.png',
    video: 'https://drive.google.com/file/d/1pQ0zFytzovvUfgQAathXCccjRmK5_ISH/preview',
    github: `${REPO}/tree/main/labfinal/pospharmacy`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_smart-pos-inventory-management-app-ugcPost-7472660765087293441-nlC7',
  },
  {
    title: 'TaskBoard Pro',
    techStack: 'Flutter, SQLite',
    image: '/images/taskboard.png',
    github: 'https://github.com/rabeelfatma/Flutter-Sp23-BSE-032-6A-Rabeel-Fatima/tree/main/labmid/task_management',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_taskboard-pro-smart-task-management-activity-7473069095521771520-fHDp',
  },
];

const CARD_ASPECT = 'aspect-video';

function SectionHeading({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayedText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 120);
    } else if (!isDeleting && displayedText.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, 70);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text]);

  return (
    <h3 
      className="text-2xl font-bold mb-6 pl-3 inline-flex items-center border-l-4"
      style={{
        borderColor: 'var(--accent)',
        color: 'var(--accent)',
      }}
    >
      <span>{displayedText}</span>
      <span className="ml-1 animate-pulse" style={{ color: 'var(--accent)' }}>|</span>
    </h3>
  );
}

function MediaBox({ item }) {
  return (
    <div 
      className={`w-full overflow-hidden flex items-center justify-center ${CARD_ASPECT}`}
      style={{ backgroundColor: 'var(--card-bg)' }}
    >
      <div className="relative overflow-hidden w-full h-full group" style={{ backgroundColor: 'var(--card-bg)' }}>
        {item.image ? (
          <>
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            
            {/* Theme Overlay Tint */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-20 group-hover:opacity-10"
              style={{ 
                backgroundColor: 'var(--accent)',
                mixBlendMode: 'color'
              }}
            />
          </>
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center text-center p-3 border border-dashed rounded-xl"
            style={{ 
              borderColor: 'var(--hairline)',
              backgroundColor: 'var(--card-bg)'
            }}
          >
            <div>
              <p className="font-semibold text-xs mb-1" style={{ color: 'var(--foreground)' }}>
                {item.title}
              </p>
              <p className="text-[10px]" style={{ color: 'var(--muted-foreground)' }}>
                Preview Card
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: (i % 3) * 0.1, type: 'spring', stiffness: 120 }}
      whileHover={{ 
        y: -8, 
        borderColor: 'var(--accent)', 
        boxShadow: '0 0 25px var(--accent-glow, rgba(249,115,22,0.25))' 
      }}
      className="rounded-2xl border transition overflow-hidden flex flex-col justify-between shadow-xl"
      style={{ 
        backgroundColor: 'var(--card-bg)', 
        borderColor: 'var(--hairline)' 
      }}
    >
      <MediaBox item={p} />

      <div 
        className="p-5 flex flex-col flex-1 justify-between border-t"
        style={{ 
          backgroundColor: 'var(--card-bg)', 
          borderColor: 'var(--hairline)' 
        }}
      >
        <div>
          <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
            {p.title}
          </h3>
          {p.techStack && (
            <p className="text-xs font-medium mb-4" style={{ color: 'var(--muted-foreground)' }}>
              <span className="font-semibold" style={{ color: 'var(--foreground)' }}>
                Technology Stack:{' '}
              </span>
              {p.techStack}
            </p>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm pt-2">
          {p.video && (
            <a
              href={p.video}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border font-medium transition-all duration-300"
              style={{
                borderColor: 'var(--accent)',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                color: 'var(--accent)'
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M8 5v14l11-7-11-7z" />
              </svg>
              Watch Video
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              <GithubIcon size={18} /> GitHub
            </a>
          )}
          {p.linkedin && (
            <a
              href={p.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {items.map((p, i) => (
        <ProjectCard key={p.title} p={p} i={i} />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto" style={{ color: 'var(--foreground)' }}>
      <div className="text-center mb-14">
        <SectionHeading text="Projects" />
      </div>

      <div className="mb-16">
        <SectionHeading text="Web Applications" />
        <ProjectGrid items={webProjects} />
      </div>

      <div className="mb-16">
        <SectionHeading text="Desktop Applications" />
        <ProjectGrid items={desktopProjects} />
      </div>

      <div className="mb-16">
        <SectionHeading text="Machine Learning" />
        <ProjectGrid items={mlProjects} />
      </div>

      <div className="mb-16">
        <SectionHeading text="Networking" />
        <ProjectGrid items={networkingProjects} />
      </div>

      <div>
        <SectionHeading text="Mobile Apps Suite" />
        <ProjectGrid items={mobileApps} />
      </div>
    </section>
  );
}