'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// PLACEHOLDER: Replace with your actual projects
const projects = [
  {
    title: 'Customer Churn Prediction Engine',
    emoji: '🔮',
    problem:
      'A SaaS company was losing 12% of customers monthly with no early-warning system in place.',
    approach:
      'Conducted feature engineering on 3M+ records. Built an ensemble model (XGBoost + LightGBM) with SHAP-based explainability. Deployed via FastAPI with a real-time scoring endpoint.',
    stack: ['Python', 'XGBoost', 'LightGBM', 'SHAP', 'FastAPI', 'PostgreSQL', 'Docker'],
    results: [
      '23% reduction in monthly churn',
      'Model AUC: 0.94',
      'Real-time inference < 50ms',
      '$1.2M annualized revenue protected',
    ],
    github: 'https://github.com/shubham000111222/churn-prediction',
    demo: 'https://churn-prediction-grph4xyczphtcaaqfwdh3d.streamlit.app/',
  },
  {
    title: 'NLP-Powered Financial Sentiment Analyser',
    emoji: '📰',
    problem:
      'Investment teams spent 4+ hours daily manually reading financial news to gauge market sentiment.',
    approach:
      'Fine-tuned FinBERT on 80K labelled financial headlines. Built an automated ETL pipeline pulling from major news APIs. Integrated sentiment scores into a live Tableau dashboard.',
    stack: ['Python', 'HuggingFace Transformers', 'FinBERT', 'Airflow', 'PostgreSQL', 'Tableau'],
    results: [
      '87% sentiment classification accuracy',
      '4 hours/day analyst time saved',
      'Coverage of 500+ tickers simultaneously',
      'Integrated with 3 live trading strategies',
    ],
    github: 'https://github.com/shubham000111222/financial-sentiment',
    demo: null,
  },
  {
    title: 'Retail Demand Forecasting System',
    emoji: '📦',
    problem:
      'A retail chain had 18% stockout rate on top SKUs and $800K in excess inventory costs annually.',
    approach:
      'Implemented Prophet + LSTM hybrid forecasting on 2 years of sales data. Added external regressors (promotions, holidays, weather). Automated weekly retraining via Airflow DAG.',
    stack: ['Python', 'Prophet', 'LSTM', 'Keras', 'Apache Airflow', 'BigQuery', 'Looker'],
    results: [
      '18% → 6% stockout rate',
      'MAPE reduced from 22% to 9%',
      '$340K annual inventory savings',
      'Forecasts generated for 1,200 SKUs weekly',
    ],
    github: 'https://github.com/shubham000111222/demand-forecasting',
    demo: 'https://demand-forecasting-gzyokdmynnlsqdgibsfqwr.streamlit.app/',
  },
  {
    title: 'Multimodal Medical Image Classifier',
    emoji: '🏥',
    problem:
      'Radiologists had a 6-day backlog for chest X-ray preliminary screening in rural clinics.',
    approach:
      'Fine-tuned EfficientNet-B4 on the NIH ChestX-ray14 dataset. Applied Grad-CAM for visual explainability. Built a FastAPI + Streamlit interface for clinical staff.',
    stack: ['Python', 'PyTorch', 'EfficientNet', 'Grad-CAM', 'FastAPI', 'Streamlit', 'AWS S3'],
    results: [
      '91.2% classification accuracy (14 conditions)',
      '6-day → same-day preliminary screening',
      'Grad-CAM heatmaps for radiologist review',
      'HIPAA-compliant data pipeline',
    ],
    github: 'https://github.com/shubham000111222/medical-classifier',
    demo: null,
  },
  {
    title: 'Real-Time Sales Analytics Dashboard',
    emoji: '📊',
    problem:
      'Sales teams had no live visibility into performance — reports were 24 hours stale, causing missed targets and reactive decisions.',
    approach:
      'Built an end-to-end data engineering pipeline: a simulated live transaction stream (Kafka-ready) feeds a FastAPI backend that persists data to PostgreSQL. A Streamlit dashboard renders live KPIs, regional heatmaps, product leaderboards, and a Prophet/ARIMA revenue forecast — all auto-refreshing every 30 seconds.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Streamlit', 'Plotly', 'Seaborn', 'Prophet', 'ARIMA', 'Docker'],
    results: [
      'Live data stream at 2 TPS (Kafka-ready)',
      'Prophet & ARIMA 30-day revenue forecast with 90% CI',
      'Region × Category Seaborn heatmap',
      'One-click CSV export up to 100K rows',
    ],
    github: 'https://github.com/shubham000111222/real-time-sales-dashboard',
    demo: null,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 sm:p-8 flex flex-col gap-5 hover:border-indigo-500/30 transition-all border border-white/10 group"
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        <span className="text-4xl">{project.emoji}</span>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Problem */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-1">
          Problem
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.problem}</p>
      </div>

      {/* Approach */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-1">
          Approach
        </p>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.approach}</p>
      </div>

      {/* Results */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">
          Results
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {project.results.map((r) => (
            <li
              key={r}
              className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200"
            >
              <span className="text-green-400 mt-0.5">✓</span> {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 text-xs rounded-full bg-indigo-500/10 text-indigo-400 font-medium border border-indigo-500/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-2 border-t border-white/10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-400 transition-colors"
        >
          <FaGithub size={16} /> GitHub
        </a>
        {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <FaExternalLinkAlt size={14} /> Live Demo
        </a>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
          End-to-end case studies — from problem definition through model deployment
          and measurable business impact.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
