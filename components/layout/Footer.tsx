'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const links = [
  { icon: <FaGithub />, href: 'https://github.com/shubham000111222', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/shubham-kumar-288b7437b', label: 'LinkedIn' },
  { icon: <HiMail />, href: 'mailto:yshubham0103@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Shubham Kumar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
              className="text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors text-lg"
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
