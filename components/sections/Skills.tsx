'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Python', level: 95, color: 'from-indigo-500 to-blue-500' },
  { name: 'Machine Learning', level: 90, color: 'from-violet-500 to-purple-500' },
  { name: 'Deep Learning / NLP', level: 82, color: 'from-purple-500 to-pink-500' },
  { name: 'SQL & Data Engineering', level: 88, color: 'from-cyan-500 to-teal-500' },
  { name: 'Data Visualization', level: 85, color: 'from-teal-500 to-green-500' },
  { name: 'Cloud (AWS / GCP)', level: 75, color: 'from-orange-500 to-amber-500' },
  { name: 'MLOps & Deployment', level: 78, color: 'from-rose-500 to-red-500' },
  { name: 'Statistical Analysis', level: 87, color: 'from-indigo-400 to-sky-500' },
];

const toolBadges = [
  { category: 'Languages', items: ['Python', 'R', 'SQL', 'JavaScript', 'Bash'] },
  { category: 'ML Frameworks', items: ['Scikit-learn', 'XGBoost', 'LightGBM', 'TensorFlow', 'PyTorch', 'Keras'] },
  { category: 'NLP & LLMs', items: ['HuggingFace', 'LangChain', 'spaCy', 'NLTK', 'OpenAI API'] },
  { category: 'Data Stack', items: ['Pandas', 'NumPy', 'Polars', 'Spark', 'dbt', 'Airflow'] },
  { category: 'Visualization', items: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI', 'Looker'] },
  { category: 'Cloud & MLOps', items: ['AWS', 'GCP', 'Docker', 'MLflow', 'FastAPI', 'Streamlit'] },
];

function SkillBar({ skill, i }: { skill: (typeof skills)[0]; i: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
        <span className="text-gray-500 dark:text-gray-400 text-xs">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            A comprehensive toolkit built through projects, internships, and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Progress bars */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6">Proficiency Levels</h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} i={i} />
            ))}
          </div>

          {/* Tool badges */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6">Tools &amp; Technologies</h3>
            {toolBadges.map((cat) => (
              <div key={cat.category}>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">
                  {cat.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="px-3 py-1 text-xs font-medium rounded-full glass text-gray-700 dark:text-gray-200 border border-white/10 hover:border-indigo-400/40 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
