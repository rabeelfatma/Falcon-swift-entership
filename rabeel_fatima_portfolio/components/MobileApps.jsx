'use client';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import TypedOnView from './TypedOnView';

const REPO = 'https://github.com/rabeelfatma/Flutter-Sp23-BSE-032-6A-Rabeel-Fatima';

const apps = [
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
];

// All project categories calculation for chart bottom summary
const allCategoriesCount = {
  'Web Apps': 4,
  'Desktop Apps': 3,
  'Flutter Apps': 8,
  'Networking': 1,
  'ML / Data': 1,
};

const pieData = Object.entries(allCategoriesCount).map(([name, value]) => ({ name, value }));
const COLORS = ['#fb7a1f', '#ff9d4d', '#ff5b1f', '#ffb877', '#36a2eb'];

export default function MobileApps() {
  return (
    <section id="mobile-apps" className="py-24 px-4 max-w-7xl mx-auto">
      <TypedOnView text="Mobile Apps Suite (Flutter)" as="h2" className="text-3xl font-bold mb-4 text-center gradient-text block" />
      <p className="text-center text-[var(--text-dim)] mb-12">
        Seven Flutter apps built with Firebase & SQLite —{' '}
        <a href={REPO} target="_blank" className="text-[var(--accent)] hover:underline">
          view all on GitHub
        </a>
      </p>

      {/* Grid: 3 columns per line on medium/large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {apps.map((app, i) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.1, type: 'spring', stiffness: 120 }}
            whileHover={{ borderColor: 'var(--accent)', scale: 1.02 }}
            className="rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--hairline)] transition flex flex-col justify-between shadow-xl"
          >
            {/* Height increased to 480px so full app screen is visible and play icon looks small */}
            <div className="w-full h-[420px] sm:h-[480px] bg-black/40 overflow-hidden">
              <iframe 
                src={app.video} 
                allow="autoplay" 
                className="w-full h-full border-0" 
              />
            </div>
            <div className="flex items-center justify-between px-5 py-4 bg-[var(--card-bg)] border-t border-[var(--hairline)]">
              <p className="text-base font-semibold text-[var(--text)]">{app.title}</p>
              <div className="flex items-center gap-4">
                {app.github && (
                  <a href={app.github} target="_blank" className="text-[var(--accent)] hover:opacity-80 transition" title="GitHub">
                    <GithubIcon size={18} />
                  </a>
                )}
                {app.linkedin && (
                  <a href={app.linkedin} target="_blank" className="text-[var(--accent-3)] hover:opacity-80 transition" title="LinkedIn">
                    <LinkedinIcon size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pie Chart placed at the very end of Mobile Apps Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="card rounded-2xl p-6 max-w-md mx-auto border border-[var(--hairline)] bg-[var(--card-bg)] shadow-xl"
      >
        <p className="text-center text-[var(--accent-2)] font-semibold mb-2">Overall Project Breakdown</p>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={45} outerRadius={80} paddingAngle={3}>
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} stroke="none" />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: 'var(--bg-soft)', border: '1px solid var(--card-border)', borderRadius: 8, color: 'var(--text)' }} />
            <Legend wrapperStyle={{ fontSize: 12, color: 'var(--text-dim)' }} />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </section>
  );
}