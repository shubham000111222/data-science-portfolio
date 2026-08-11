'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiDownload, HiChevronDown } from 'react-icons/hi';

interface ResumeDropdownProps {
  children: React.ReactNode;
  className?: string;
  menuPosition?: 'bottom-right' | 'bottom-left' | 'top-center';
}

const resumeOptions = [
  { label: 'Data Science & Analytics', href: '/resume.pdf' },
  { label: 'Applied AI Engineering', href: '/resume_ai.pdf' },
  { label: 'Data Analyst', href: '/resume_analyst.pdf' },
];

export function ResumeDropdown({ children, className, menuPosition = 'bottom-right' }: ResumeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const positionClasses = {
    'bottom-right': 'top-full right-0 mt-2',
    'bottom-left': 'top-full left-0 mt-2',
    'top-center': 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className={`inline-flex items-center justify-center gap-2 ${className}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {children}
        <HiChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 w-56 origin-top-right rounded-xl bg-white dark:bg-gray-800 shadow-xl ring-1 ring-black/5 dark:ring-white/10 focus:outline-none overflow-hidden ${positionClasses[menuPosition]}`}
          >
            <div className="py-1 flex flex-col">
              {resumeOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  download
                  className="group flex items-center gap-3 px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <HiDownload className="text-gray-400 group-hover:text-indigo-500 transition-colors" size={16} />
                  {option.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
