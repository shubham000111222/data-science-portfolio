'use client';

import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactInfo = [
  {
    icon: <HiMail className="text-indigo-400" size={22} />,
    label: 'Email',
    value: 'your@email.com', // PLACEHOLDER
    href: 'mailto:your@email.com', // PLACEHOLDER
  },
  {
    icon: <FaLinkedin className="text-blue-400" size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourusername', // PLACEHOLDER
    href: 'https://linkedin.com/in/yourusername', // PLACEHOLDER
  },
  {
    icon: <FaGithub className="text-gray-400" size={20} />,
    label: 'GitHub',
    value: 'github.com/yourusername', // PLACEHOLDER
    href: 'https://github.com/yourusername', // PLACEHOLDER
  },
  {
    icon: <HiLocationMarker className="text-rose-400" size={22} />,
    label: 'Location',
    value: 'Your City, Country', // PLACEHOLDER
    href: null,
  },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // PLACEHOLDER: Integrate with EmailJS, Formspree, or your backend API
    // Example with EmailJS:
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY');
    console.log('Form data:', data);
    await new Promise((r) => setTimeout(r, 1000)); // Simulate API call
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Open to Data Science, ML Engineering, and Analytics roles. Reach out for
            collaborations, opportunities, or just a chat about data.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Let&apos;s connect</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or are exploring
              candidates for your team — I&apos;d love to hear from you.
            </p>

            <div className="space-y-4 mt-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              {[
                { icon: <FaGithub size={20} />, href: 'https://github.com/yourusername' },
                { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/yourusername' },
                { icon: <FaTwitter size={20} />, href: 'https://twitter.com/yourusername' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    placeholder="John Doe"
                    className="w-full bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
                    Email
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
                    })}
                    placeholder="john@example.com"
                    type="email"
                    className="w-full bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
                  Subject
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  placeholder="Hiring inquiry / Collaboration / Just saying hi"
                  className="w-full bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
                {errors.subject && (
                  <p className="text-xs text-rose-400 mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'At least 20 characters' } })}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-rose-400 mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 text-sm font-medium"
                >
                  <HiCheckCircle size={18} /> Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
