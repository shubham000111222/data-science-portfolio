'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-indigo-500 font-semibold text-sm uppercase tracking-widest"
          >
            👋 Hello, I&apos;m
          </motion.p>

          {/* PLACEHOLDER: Replace with your full name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            Your Name
          </motion.h1>

          <motion.div variants={itemVariants}>
            <span className="text-2xl sm:text-3xl font-bold gradient-text">
              Data Science &amp; AI Enthusiast
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            I transform raw data into actionable intelligence — building ML pipelines,
            predictive models, and data-driven products that move the needle for
            real-world decision-making.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-2">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              <HiDownload size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-gray-800 dark:text-white font-semibold border border-white/20 hover:border-indigo-400/50 transition-all hover:-translate-y-0.5"
            >
              Get in Touch <HiArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-2">
            {/* PLACEHOLDER: Replace with your social links */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-2xl text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="text-2xl text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        {/* Avatar / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/40"
            />
            {/* Inner glow card */}
            <div className="absolute inset-4 rounded-full glass flex items-center justify-center">
              {/* PLACEHOLDER: Replace with your profile photo — add /profile.jpg to /public */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 flex items-center justify-center text-white text-7xl font-bold select-none">
                {/* PLACEHOLDER: Replace with your initials */}
                YN
              </div>
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-4 glass rounded-xl px-3 py-1.5 text-xs font-semibold text-indigo-400 border border-indigo-500/20"
            >
              🤖 ML Engineer
            </motion.div>
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-6 glass rounded-xl px-3 py-1.5 text-xs font-semibold text-cyan-400 border border-cyan-500/20"
            >
              📊 Data Analyst
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-indigo-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
