import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Tag } from 'lucide-react';

const projects = [
  {
    title: 'FitGenius AI – Gym Management System',
    category: 'AI / Full Stack',
    desc: 'A comprehensive gym management platform powered by machine learning. Features an AI-personalized diet plan generator that takes age, weight, height, goals, and budget as inputs to create custom meal plans using Scikit-learn models. Includes member management, trainer dashboards, and a payment tracking module.',
    tech: ['React', 'Python', 'Flask', 'Scikit-learn', 'Pandas', 'MongoDB', 'Node.js', 'Express'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop',
    github: 'https://github.com/dulitha-m',
    live: null,
    featured: true,
  },
  {
    title: 'Grand Terrace – Hotel & Nightlife Management',
    category: 'Full Stack',
    desc: 'A full-featured management platform for a vibrant hotel and nightlife venue. Handles reservations, customer management, table bookings, event scheduling, and administrator panels. Designed with a luxurious UI that matched the brand.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=900&auto=format&fit=crop',
    github: 'https://github.com/dulitha-m',
    live: null,
    featured: true,
  },
  {
    title: 'Rentik – Peer-to-Peer Vehicle Rental',
    category: 'Marketplace',
    desc: 'A peer-to-peer vehicle rental marketplace connecting car owners with renters. Owners can list vehicles with pricing, availability, and images. Renters can search, filter, and book directly. Includes reviews, payment simulation, and an admin dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1449965020452-96c82c21444e?q=80&w=900&auto=format&fit=crop',
    github: 'https://github.com/dulitha-m',
    live: null,
    featured: false,
  },
  {
    title: 'Movie Ticket Booking System',
    category: 'Web App',
    desc: 'A Java-based online movie ticket booking system. Users can browse films, select showtimes, choose seats on an interactive map, and complete a booking. Admin can manage screenings, movies, and view sales reports.',
    tech: ['Java', 'Servlet', 'JSP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=900&auto=format&fit=crop',
    github: 'https://github.com/dulitha-m',
    live: null,
    featured: false,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI / Full Stack', 'Full Stack', 'Marketplace', 'Web App'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest mb-5">
              Portfolio
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Featured projects.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${filter === cat ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden relative bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold rounded-full flex items-center gap-1">
                      <Tag size={10} /> {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">Featured</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, ti) => (
                      <span key={ti} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-4 border-t border-slate-100 pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                    >
                      <Code size={16} /> View Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
