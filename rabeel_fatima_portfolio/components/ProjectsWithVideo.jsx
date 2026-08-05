'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const REPO = 'https://github.com/rabeelfatma/Flutter-Sp23-BSE-032-6A-Rabeel-Fatima';

const webProjects = [
  {
    title: 'Expense Management System',
    image: '/images/expense-management.png',
    github: 'https://github.com/rabeelfatma/advance_web_Rabeel_032',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_expense-manager-mern-stack-application-activity-7472646697081266176-XFdg',
    video: 'https://drive.google.com/file/d/1hq1B16LGDoSFykg9nbvW6mToiWu6GBBn/preview',
  },
  {
    title: 'Portfolio Website',
    image: '/images/portfolio.png',
    github: 'https://github.com/rabeelfatma/advance_web_Rabeel_032/tree/main/portfolio',
    linkedin: null,
    video: 'https://drive.google.com/file/d/1JK-ASZ1Nh5K-KLZU8XjUkxHJjch-fSYv/preview',
  },
  {
    title: 'Coffee Management System',
    image: '/images/coffee-management.png',
    github: 'https://github.com/rabeelfatma/Web-Technology',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_coffee-shop-management-system-laravel-activity-7474081379945811969-a6rC',
    video: 'https://drive.google.com/file/d/1H-ppv5mhLfw3Z-jyC259RZ6VTh4m4gnf/preview',
  },
];

const desktopProjects = [
  {
    title: 'Hostel Management System',
    image: '/images/hostel-management.png',
    github: 'https://github.com/rabeelfatma/Visual-Programming',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_hostel-management-system-hms-description-activity-7473789970743418880-6ru_',
    video: 'https://drive.google.com/file/d/1-VhD5-YiPmUAIhYYqtZIGbbJowqGrTna/preview',
  },
  {
    title: 'Inventory Management System',
    image: '/images/inventory-management.png',
    github: 'https://github.com/rabeelfatma/Software-Construction-and-Development',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_im-excited-to-share-my-latest-desktop-application-activity-7475867816559169536-KKPK',
    video: 'https://drive.google.com/file/d/1_hj5GS1cQN65OVCOGij6vNxyeEO5qUAc/preview',
  },
  {
    title: 'Hospital Management System',
    image: '/images/hospital-management.png',
    github: 'https://github.com/rabeelfatma/Project-Hospital-Management-System',
    linkedin: 'https://lnkd.in/p/dzZVpXy2',
    video: 'https://drive.google.com/file/d/1-7UEQcP3on0OyzWj7q1VHpctA6-x3OHU/preview',
  },
];

const networkingProjects = [
  {
    title: 'Hospital Management System (Networking)',
    image: '/images/networking-hospital.png',
    github: 'https://github.com/rabeelfatma/Networking-project-4th-Semester-Hospital-Management-System',
    linkedin: null,
    video: null,
  },
];

const mlProjects = [
  {
    title: 'House Rent Prediction System',
    image: '/images/house-rent.png',
    github: 'https://github.com/rabeelfatma/Machine-Learning-Project-House-Rent-Prediction-5th-Semester-',
    linkedin: null,
    video: null,
  },
];

const mobileApps = [
  {
    title: 'Dice App',
    image: '/images/dice-app.png',
    video: 'https://drive.google.com/file/d/1X90fTXM52tz_rakMRKCGdD3tBEXyi0Io/preview',
    github: `${REPO}/tree/main/lab6/my_dice_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_multi-player-dice-game-app-using-flutter-activity-7472712738067243008-HFt8',
  },
  {
    title: 'Profile App',
    image: '/images/profile-app.png',
    video: 'https://drive.google.com/file/d/1qjinvTe-KxO9iz3QGBGJALv4a21-aa6X/preview',
    github: `${REPO}/tree/main/lab5/flutter_create_profile_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_profile-app-made-with-flutter-description-activity-7473044659074785281-uNul',
  },
  {
    title: 'CGPA Calculator',
    image: '/images/cgpa-calculator.png',
    video: 'https://drive.google.com/file/d/1HjOfD7CSbdb4rDNt-N7lPuEcZLyl4HDN/preview',
    github: `${REPO}/tree/main/lab7/cgpa_calculator1`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_advanced-cgpa-calculator-app-description-activity-7472711091798622208-puT4',
  },
  {
    title: 'BMI App',
    image: '/images/bmi-app.png',
    video: 'https://drive.google.com/file/d/1D-CBmy4qaW504akEo-QrxaLRtWih0U8V/preview',
    github: `${REPO}/tree/main/bmi/bmi_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_bmi-calculator-app-using-flutter-activity-7472713555851526144-Ok23',
  },
  {
    title: 'Counter App',
    image: '/images/counter-app.png',
    video: 'https://drive.google.com/file/d/1ZjHWyWNKawbBSYyVXjwztutwFtijVhQ8/preview',
    github: `${REPO}/tree/main/lab4/counter_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_smart-math-counter-app-flutter-activity-7473007137758142464-eGPm',
  },
  {
    title: 'Committee Management App',
    image: '/images/committee-app.png',
    video: 'https://drive.google.com/file/d/1KB-u6sSTqqzGS5HXE_PNA-jJZWL3kX1b/preview',
    github: `${REPO}/tree/main/lab8/committe_app`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_committee-management-system-app-flutter-activity-7473004126117761024-rj7i',
  },
  {
    title: 'POS App',
    image: '/images/pos-app.png',
    video: 'https://drive.google.com/file/d/1pQ0zFytzovvUfgQAathXCccjRmK5_ISH/preview',
    github: `${REPO}/tree/main/labfinal/pospharmacy`,
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_smart-pos-inventory-management-app-ugcPost-7472660765087293441-nlC7',
  },
  {
    title: 'TaskBoard Pro',
    image: '/images/taskboard.png',
    github: 'https://github.com/rabeelfatma/Flutter-Sp23-BSE-032-6A-Rabeel-Fatima/tree/main/labmid/task_management',
    linkedin: 'https://www.linkedin.com/posts/rabeel-fatima-0bb5b7415_taskboard-pro-smart-task-management-activity-7473069095521771520-fHDp',
  },
];

const MOBILE_WIDTH = 'w-[140px] sm:w-[160px]';
const MOBILE_ASPECT = 'aspect-[9/19]';
const DESKTOP_ASPECT = 'aspect-video';

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
    <h3 className="text-2xl font-bold mb-6 text-orange-500 border-l-4 border-orange-500 pl-3 inline-flex items-center">
      <span>{displayedText}</span>
      <span className="ml-1 text-orange-500 animate-pulse">|</span>
    </h3>
  );
}

function MediaBox({ item, isMobile }) {
  return (
    <div
      className={
        'w-full bg-black/50 overflow-hidden flex items-center justify-center ' +
        (isMobile ? 'py-4 px-2 h-[280px] sm:h-[320px]' : DESKTOP_ASPECT)
      }
    >
      <div
        className={
          'relative overflow-hidden bg-black ' +
          (isMobile
            ? `${MOBILE_WIDTH} ${MOBILE_ASPECT} rounded-2xl border-2 border-neutral-800 ring-2 ring-neutral-900/50 shadow-xl`
            : 'w-full h-full')
        }
      >
        {item.image ? (
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-center p-3 border border-dashed border-neutral-700 rounded-xl bg-neutral-900/80">
            <div>
              <p className="text-white font-semibold text-xs mb-1">{item.title}</p>
              <p className="text-neutral-400 text-[10px]">Preview Card</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ p, i, isMobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: (i % 3) * 0.1, type: 'spring', stiffness: 120 }}
      whileHover={{ y: -8, borderColor: '#f97316', boxShadow: '0 0 30px rgba(249,115,22,0.25)' }}
      className="rounded-2xl bg-[var(--card-bg)] border border-[var(--hairline)] transition overflow-hidden flex flex-col justify-between shadow-xl"
    >
      <MediaBox item={p} isMobile={isMobile} />

      <div className="p-5 flex flex-col flex-1 justify-between bg-[var(--card-bg)] border-t border-[var(--hairline)]">
        <h3 className="text-lg font-semibold text-orange-500 mb-4">{p.title}</h3>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          {p.video && (
            <a
              href={p.video}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 font-medium hover:bg-orange-500 hover:text-black hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] transition-all duration-300"
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
              className="flex items-center gap-1.5 text-orange-500 hover:underline"
            >
              <GithubIcon size={18} /> GitHub
            </a>
          )}
          {p.linkedin && (
            <a
              href={p.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[var(--accent-3)] hover:underline"
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectGrid({ items, isMobile = false }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {items.map((p, i) => (
        <ProjectCard key={p.title} p={p} i={i} isMobile={isMobile} />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <SectionHeading text="Projects" />
      </div>

      <div className="mb-16">
        <SectionHeading text="Web Applications" />
        <ProjectGrid items={webProjects} isMobile={false} />
      </div>

      <div className="mb-16">
        <SectionHeading text="Desktop Applications" />
        <ProjectGrid items={desktopProjects} isMobile={false} />
      </div>

      <div className="mb-16">
        <SectionHeading text="Machine Learning" />
        <ProjectGrid items={mlProjects} isMobile={false} />
      </div>

      <div className="mb-16">
        <SectionHeading text="Networking" />
        <ProjectGrid items={networkingProjects} isMobile={false} />
      </div>

      <div>
        <SectionHeading text="Mobile Apps Suite" />
        <ProjectGrid items={mobileApps} isMobile={true} />
      </div>
    </section>
  );
}