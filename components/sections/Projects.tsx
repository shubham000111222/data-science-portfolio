'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Stock Portfolio Analytics Dashboard',
    emoji: '📈',
    problem:
      'Evaluating multi-asset portfolios requires combining risk metrics, benchmark comparisons, and factor exposures — often needing expensive enterprise tools.',
    approach:
      'Engineered an interactive analytics dashboard fetching real-time market data via Yahoo Finance. Implemented rolling volatility, drawdown analysis, and Fama-French style factor beta regressions to evaluate asset contributions.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'yfinance'],
    results: [
      'Real-time portfolio evaluation against configurable benchmarks (SPY, QQQ)',
      'Automated generation of PDF performance tear sheets',
      'Interactive monthly return heatmaps and drawdown curves',
      'Graceful error handling for API rate limits and missing data',
    ],
    github: 'https://github.com/shubham000111222/stock-portfolio-analytics',
    demo: 'https://stock-portfolio-analytics-5ustsrbxfa4aqzcmnehqwt.streamlit.app/',
  },
  {
    title: 'Telco Customer Churn Prediction Engine',
    emoji: '🔮',
    problem:
      'Telecom customers churn with little warning — retention teams have no way to intervene before it happens.',
    approach:
      'Conducted feature engineering on a public telecom churn dataset. Built an ensemble model (XGBoost + LightGBM) with SHAP-based explainability to surface top churn drivers. Deployed via FastAPI with a real-time scoring endpoint.',
    stack: ['Python', 'XGBoost', 'LightGBM', 'SHAP', 'FastAPI', 'PostgreSQL', 'Docker'],
    results: [
      'ROC-AUC: 0.717 on IBM Telco held-out test set (7,043 real records)',
      'Recall: 64.2% on churn class with threshold-tuned decision boundary',
      'SHAP waterfall plots for per-customer explainability',
      'Dockerised and deployable end-to-end',
    ],
    github: 'https://github.com/shubham000111222/telco-churn-prediction',
    demo: 'https://telco-churn-prediction-nzpu7s6k2r6mspjzcbahj9.streamlit.app/',
  },
  {
    title: 'IPL Analytics (2008–2024)',
    emoji: '📊',
    problem:
      'Cricket franchises and analysts lack open tools for deep statistical analysis — player performance, team strategy, and win factors remain buried in raw ball-by-ball data.',
    approach:
      'Analysed 300K+ IPL deliveries using 20+ SQL window function queries (CTEs, ROW_NUMBER, LAG). Built KMeans clustering for player profiling, logistic regression win-probability model, and 20 visualisations covering phase-wise performance, matchup matrices, and toss strategy trends.',
    stack: ['Python', 'SQL', 'SQLite', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Streamlit'],
    results: [
      '✓ 20+ SQL queries: Orange Cap race, death over specialists, H2H win matrix',
      '✓ KMeans clustering classifies batsmen as Anchors (Dhoni, Gambhir) vs Aggressors (Kohli, Rohit)',
      '✓ Win probability model: 64.7% accuracy — top feature: powerplay wickets lost',
      '✓ 8-page Streamlit dashboard: player comparison, match simulator, rivalry deep-dive',
    ],
    github: 'https://github.com/shubham000111222/IPL-analytics',
    demo: 'https://ipl-analytics-btw4n5hcm5n6q8whulymxe.streamlit.app',
  },
  {
    title: 'NLP-Powered Financial Sentiment Analyser',
    emoji: '📰',
    problem:
      'Manually tracking sentiment across hundreds of financial news headlines is slow and inconsistent.',
    approach:
      'Fine-tuned FinBERT on a labelled financial headlines dataset (Financial PhraseBank). Built an automated pipeline to fetch and score headlines. Integrated sentiment scores into a live Tableau dashboard.',
    stack: ['Python', 'HuggingFace Transformers', 'FinBERT', 'Airflow', 'PostgreSQL', 'Tableau'],
    results: [
      '87% sentiment classification accuracy on test set',
      'Automated pipeline replacing manual headline review',
      'Live dashboard covering 500+ tickers',
      'End-to-end from raw news feed to visual insight',
    ],
    github: 'https://github.com/shubham000111222/financial-sentiment',
    demo: 'https://financial-sentiment-94rstxb2smxghvvjnbj7jp.streamlit.app/',
  },
  {
    title: 'Retail Demand Forecasting System',
    emoji: '📦',
    problem:
      'Retail stockout and overstock problems are hard to anticipate using simple historical averages.',
    approach:
      'Implemented a Prophet + LSTM hybrid forecasting model on a public retail sales dataset (Kaggle Store Sales). Added external regressors for promotions and holidays. Automated weekly retraining via an Airflow DAG.',
    stack: ['Python', 'Prophet', 'LSTM', 'Keras', 'Apache Airflow', 'BigQuery', 'Looker'],
    results: [
      'MAPE reduced from 22% to 9% vs baseline',
      'Forecasts generated for 1,200 simulated SKUs',
      'Automated weekly retraining pipeline',
      'External regressors (holidays, promotions) improve accuracy',
    ],
    github: 'https://github.com/shubham000111222/demand-forecasting',
    demo: 'https://demand-forecasting-gwtanbwch4vydbnexsccxh.streamlit.app/',
  },
  {
    title: 'Multimodal Medical Image Classifier',
    emoji: '🏥',
    problem:
      'Chest X-ray screening requires expert radiologist time — automation could help triage and prioritise cases.',
    approach:
      'Fine-tuned EfficientNet-B4 on the publicly available NIH ChestX-ray14 dataset. Applied Grad-CAM for visual explainability. Built a FastAPI + Streamlit interface to demonstrate clinical usability.',
    stack: ['Python', 'PyTorch', 'EfficientNet', 'Grad-CAM', 'FastAPI', 'Streamlit', 'AWS S3'],
    results: [
      '91.2% classification accuracy across 14 conditions',
      'Grad-CAM heatmaps for model interpretability',
      'Interactive Streamlit demo for clinician review',
      'Trained on NIH ChestX-ray14 (public dataset)',
    ],
    github: 'https://github.com/shubham000111222/medical-classifier',
    demo: 'https://medical-classifier-nxsgzc3dekbyqef8kvc8w6.streamlit.app/',
  },
  {
    title: 'Real-Time Sales Analytics Dashboard',
    emoji: '📊',
    problem:
      'Sales teams often rely on stale daily reports — a live dashboard enables faster, data-driven decisions.',
    approach:
      'Built an end-to-end pipeline: a simulated live transaction stream feeds a FastAPI backend persisting to PostgreSQL. A Streamlit dashboard renders live KPIs, regional heatmaps, product leaderboards, and a Prophet/ARIMA revenue forecast — auto-refreshing every 30 seconds.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Streamlit', 'Plotly', 'Seaborn', 'Prophet', 'ARIMA', 'Docker'],
    results: [
      'Simulated live data stream at 2 TPS (Kafka-ready architecture)',
      'Prophet & ARIMA 30-day revenue forecast with 90% CI',
      'Region × Category heatmap for drill-down analysis',
      'One-click CSV export up to 100K rows',
    ],
    github: 'https://github.com/shubham000111222/real-time-sales-dashboard',
    demo: 'https://real-time-sales-dashboard-rxhjichtxwswzwqgn7pncb.streamlit.app/',
  },
  {
    title: 'ResumeRank AI — Resume Screening System',
    emoji: '🎯',
    problem:
      'Manually shortlisting resumes from a large applicant pool is time-consuming and inconsistent.',
    approach:
      'Built an NLP pipeline: PDF/DOCX extraction → NLTK preprocessing → TF-IDF + BERT (all-MiniLM-L6-v2) embeddings → cosine similarity ranking. Added spaCy NER skill extraction against an 80+ skill taxonomy with configurable composite scoring.',
    stack: ['Python', 'Sentence-Transformers', 'BERT', 'TF-IDF', 'spaCy', 'NLTK', 'Streamlit', 'Docker'],
    results: [
      'BERT + TF-IDF ensemble ranking with configurable weights',
      '80+ skills extracted across 7 categories via NER',
      'Evaluated with Precision@K, MRR, and NDCG@K metrics',
      'Skill heatmap, radar chart, and CSV export',
    ],
    github: 'https://github.com/shubham000111222/resume-screening',
    demo: 'https://shubh10099-resume-screening.hf.space',
  },
  {
    title: 'AI Mock Interviewer',
    emoji: '🎙️',
    problem:
      'Candidates preparing for data science roles lack access to personalised, on-demand interview practice with real feedback.',
    approach:
      'Built a full interview pipeline: user uploads a job description → GPT-4o-mini / Llama 3 generates role-specific questions → candidate records or types answers → OpenAI Whisper transcribes audio → librosa extracts acoustic features → a dual feedback engine scores content quality and confidence separately.',
    stack: ['Python', 'Whisper', 'GPT-4o-mini', 'Llama 3', 'librosa', 'Streamlit', 'Plotly', 'Docker'],
    results: [
      'Role-specific questions generated in <5 sec via GPT or offline via mock mode',
      'Confidence scored across 5 acoustic + linguistic dimensions',
      'Content graded A–F with keyword gap analysis',
      'Downloadable JSON interview report',
    ],
    github: 'https://github.com/shubham000111222/ai-mock-interviewer',
    demo: 'https://shubh10099-ai-mock-interviewer.hf.space',
  },
  {
    title: 'SaaS Customer Churn Prediction Engine',
    emoji: '🏢',
    problem:
      'A SaaS company was losing 12% of customers monthly with no early-warning system, putting ~$1.2M annual revenue at risk.',
    approach:
      'Engineered an end-to-end ML system on 3M+ transaction records using RFM scoring and behavioural telemetry. Built an XGBoost + LightGBM ensemble tuned with Optuna and served via FastAPI.',
    stack: ['Python', 'XGBoost', 'LightGBM', 'FastAPI', 'MLflow', 'Docker', 'SHAP'],
    results: [
      'ROC-AUC of 0.94 and Precision of 0.89 on test set',
      'Inference latency < 50ms via FastAPI with Redis caching',
      'Protected ~$1.2M annual revenue by identifying churners 30 days in advance',
      'Used SHAP TreeExplainer for per-customer reason codes',
    ],
    github: 'https://github.com/shubham000111222/saas-churn-prediction',
  },
  {
    title: 'Real-Time Cricket Analytics Dashboard',
    emoji: '🏏',
    problem:
      'Cricket fans and analysts often lack accessible real-time dashboards with ball-by-ball simulated models and rich visualizations.',
    approach:
      'Built a live IPL/cricket match analytics dashboard with ball-by-ball simulation using a Logistic Regression win-probability model updated live from a CricAPI stream.',
    stack: ['Python', 'Streamlit', 'Docker', 'Logistic Regression', 'Plotly'],
    results: [
      'Event-driven data pipeline integrating real-time CricAPI streaming',
      'Modular ML model trained on 3,000 synthetic IPL innings',
      '7+ real-time interactive chart types (batting worm, wagon wheel)',
      'Deployed full app using Docker and Streamlit',
    ],
    github: 'https://github.com/shubham000111222/cricket-analytics',
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
              {r.startsWith('✓') ? null : <span className="text-green-400 mt-0.5">✓</span>}
              {r}
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
