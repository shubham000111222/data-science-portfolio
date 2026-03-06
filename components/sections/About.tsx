'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: '💻 Programming',
    skills: ['Python', 'R', 'SQL', 'JavaScript', 'Bash'],
  },
  {
    title: '🤖 ML / AI',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Keras', 'XGBoost', 'LangChain'],
  },
  {
    title: '📊 Data Analytics',
    skills: ['Pandas', 'NumPy', 'Polars', 'Spark', 'dbt'],
  },
  {
    title: '📈 Visualization',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
  },
  {
    title: '🛠 Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'GCP', 'Jupyter', 'Airflow', 'MLflow'],
  },
];

function SkillTag({ skill, i }: { skill: string; i: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: i * 0.05 }}
      className="px-3 py-1 text-xs sm:text-sm font-medium rounded-full glass text-gray-700 dark:text-gray-200 border border-white/10 hover:border-indigo-500/40 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default"
    >
      {skill}
    </motion.span>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm uppercase tracking-widest">
            Quick overview
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Professional Summary */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-indigo-500 mb-2">Professional Summary</h3>
            {/* PLACEHOLDER: Replace with your actual professional summary */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a B.Tech Computer Science student with hands-on experience building
              end-to-end ML pipelines, NLP systems, and data analytics solutions. I enjoy
              working across the full stack — from data ingestion and feature engineering
              to model training and deployment.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;ve worked on projects spanning NLP, computer vision, time-series
              forecasting, and tabular ML using datasets from finance, healthcare, and retail.
              All projects are open-source with live demos.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Seeking a Data Science / ML internship where I can apply these skills to
              real-world problems.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              {[
                { label: 'Projects', value: '8' },
                { label: 'Certifications', value: '3' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <p className="text-2xl font-extrabold gradient-text">{stat.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-indigo-500 mb-2">Technical Skills</h3>
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {cat.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <SkillTag key={skill} skill={skill} i={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
