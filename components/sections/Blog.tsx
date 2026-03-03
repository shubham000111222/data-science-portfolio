'use client';

import { motion } from 'framer-motion';
import { HiArrowRight, HiClock } from 'react-icons/hi';

// PLACEHOLDER: Replace with your actual blog posts or integrate with a CMS (Hashnode, Dev.to, Medium)
const posts = [
  {
    title: 'How I Built a Real-Time Fraud Detection System from Scratch',
    excerpt:
      'A step-by-step walkthrough of designing, training, and deploying an ML-based fraud detection system handling 10K transactions/sec using Kafka and XGBoost.',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    tags: ['ML', 'Fraud Detection', 'Kafka', 'XGBoost'],
    href: '#', // PLACEHOLDER: Link to actual post
    emoji: '🔍',
  },
  {
    title: 'RAG Pipelines in Production: Lessons Learned the Hard Way',
    excerpt:
      'After deploying three Retrieval-Augmented Generation systems in production, here are the architectural decisions, pitfalls, and optimisations no tutorial covers.',
    date: 'Dec 28, 2025',
    readTime: '12 min read',
    tags: ['LLMs', 'RAG', 'LangChain', 'Production'],
    href: '#', // PLACEHOLDER
    emoji: '🤖',
  },
  {
    title: 'The Data Analyst Edge: 10 SQL Patterns That Saved My Job',
    excerpt:
      'Advanced SQL window functions, CTEs, and analytical patterns I use daily as a data analyst — with real business contexts and performance considerations.',
    date: 'Nov 10, 2025',
    readTime: '6 min read',
    tags: ['SQL', 'Analytics', 'Career'],
    href: '#', // PLACEHOLDER
    emoji: '📊',
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Latest <span className="gradient-text">Articles</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          I write about data science, machine learning engineering, and the craft of
          building intelligent systems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass rounded-2xl p-6 flex flex-col gap-4 border border-white/10 hover:border-indigo-500/30 transition-all"
          >
            <span className="text-4xl">{post.emoji}</span>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-full bg-indigo-500/10 text-indigo-400 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-400 transition-colors leading-snug">
              {post.title}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <HiClock size={12} />
                <span>{post.readTime}</span>
              </div>
              <span>{post.date}</span>
            </div>

            <div className="flex items-center gap-1 text-sm font-semibold text-indigo-400 group-hover:gap-2 transition-all">
              Read article <HiArrowRight size={14} />
            </div>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-10">
        {/* PLACEHOLDER: Change this link to your actual blog URL */}
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 hover:border-indigo-500/40 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-400 transition-all"
        >
          View all articles <HiArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
