import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const Hero = ({ scrollTo }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Available for Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6"
          >
            Dulitha<br />
            <span className="text-blue-600">Matharaarachchi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed mb-8"
          >
            AI Undergraduate & Full-Stack Developer crafting intelligent, 
            data-driven software solutions. Specializing in Machine Learning, 
            web development, and turning complex ideas into elegant applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-7 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-7 py-3.5 border-2 border-slate-200 text-slate-800 rounded-xl font-semibold hover:border-slate-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </button>
            <a
              href="/CV.pdf"
              download="Dulitha_Matharaarachchi_CV.pdf"
              className="flex items-center gap-2 px-7 py-3.5 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={16} /> CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-5"
          >
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Find me on</span>
            <a href="https://github.com/dulitha-m" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/dulitha-matharaarachchi-5b00922b4/" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:dulithamathara@gmail.com" className="p-2.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-red-500 hover:text-white transition-all">
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Image + Stats Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:grid grid-cols-2 gap-4"
        >
          {[
            { label: 'Degree', value: 'BSc AI', sub: 'SLIIT • 2024–2028', color: 'bg-blue-50 border border-blue-100' },
            { label: 'Phone', value: '077 966 2291', sub: 'Available anytime', color: 'bg-green-50 border border-green-100' },
            { label: 'Location', value: 'Battaramulla', sub: 'Colombo, Sri Lanka', color: 'bg-violet-50 border border-violet-100' },
            { label: 'Email', value: 'dulithamathara', sub: '@gmail.com', color: 'bg-amber-50 border border-amber-100' },
          ].map((card, i) => (
            <div key={i} className={`${card.color} rounded-2xl p-6`}>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{card.label}</div>
              <div className="font-display text-lg font-bold text-slate-900">{card.value}</div>
              <div className="text-sm text-slate-500">{card.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors"
      >
        <span className="text-xs font-medium">Scroll Down</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
};

export default Hero;
