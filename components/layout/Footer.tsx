'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const links = [
  { icon: <FaGithub />, href: 'https://github.com/yourusername', label: 'GitHub' }, // PLACEHOLDER
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' }, // PLACEHOLDER
  { icon: <FaTwitter />, href: 'https://twitter.com/yourusername', label: 'Twitter' }, // PLACEHOLDER
  { icon: <HiMail />, href: 'mailto:your@email.com', label: 'Email' }, // PLACEHOLDER
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {/* PLACEHOLDER: Your Name */} Your Name. All rights reserved.
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
