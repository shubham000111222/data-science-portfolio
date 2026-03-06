'use client';

import { motion } from 'framer-motion';
import { HiExternalLink, HiBadgeCheck } from 'react-icons/hi';

const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    date: 'Mar 2024',
    credentialId: 'GDAC-XXXXXX',
    link: '#',
    badge: '📊',
    color: 'from-green-500/20 to-teal-500/10 border-green-500/20',
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM / Coursera',
    date: 'Jan 2024',
    credentialId: 'IBM-DS-XXXXXX',
    link: '#',
    badge: '🔵',
    color: 'from-indigo-500/20 to-violet-500/10 border-indigo-500/20',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI / Coursera',
    date: 'Sep 2023',
    credentialId: 'DL-XXXXXX',
    link: '#',
    badge: '🤖',
    color: 'from-violet-500/20 to-purple-500/10 border-violet-500/20',
  },
];



export function Certifications() {
  return (
    <section id="certifications" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          Verified credentials from industry-leading platforms.
        </p>
      </div>

      {/* Certifications grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`rounded-2xl p-5 flex flex-col gap-3 border bg-gradient-to-br ${cert.color} glass hover:shadow-lg transition-all`}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-3xl">{cert.badge}</span>
              <HiBadgeCheck className="text-green-400 text-xl mt-1 shrink-0" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cert.issuer}</p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/10">
              <span className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</span>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Verify <HiExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
