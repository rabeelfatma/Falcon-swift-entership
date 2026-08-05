import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-[var(--hairline)]">
      <div className="flex justify-center gap-8 mb-4 text-[var(--text-dim)]">
        <a href="https://github.com/rabeelfatma" target="_blank" className="flex items-center gap-1.5 hover:text-[var(--accent)]">
          <GithubIcon size={16} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/rabeel-fatima-0bb5b7415" target="_blank" className="flex items-center gap-1.5 hover:text-[var(--accent)]">
          <LinkedinIcon size={16} /> LinkedIn
        </a>
        <a href="mailto:rabeel1937a@gmail.com" className="flex items-center gap-1.5 hover:text-[var(--accent)]">
          <Mail size={16} /> rabeel1937a@gmail.com
        </a>
      </div>
      <p className="text-[var(--text-dim)] text-sm">© 2026 Rabeel Fatima. All rights reserved.</p>
    </footer>
  );
}