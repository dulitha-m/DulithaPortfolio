import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const education = [
  {
    type: 'degree',
    degree: 'BSc (Hons) in Artificial Intelligence',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Malabe, Colombo',
    period: '2024 – 2028 (Ongoing)',
    description: 'Specializing in Machine Learning, Deep Learning, Natural Language Processing, and Software Engineering. Actively participating in group projects and AI-related coursework.',
    highlights: ['Machine Learning', 'Data Structures & Algorithms', 'Deep Learning', 'Software Engineering', 'Database Management'],
    color: 'blue',
  },
  {
    type: 'degree',
    degree: 'G.C.E. Advanced Level (Physical Science)',
    institution: 'Nalanda College, Colombo',
    location: 'Colombo 10',
    period: '2021 – 2023',
    description: 'Completed A/Levels in the Physical Science stream with subjects focused on Mathematics, Physics, and Chemistry, building a strong analytical foundation.',
    highlights: ['Mathematics', 'Physics', 'Chemistry'],
    color: 'violet',
  },
  {
    type: 'cert',
    degree: 'IT Diploma Certificate',
    institution: 'ESoft Metro Campus',
    location: 'Colombo',
    period: '2021',
    description: 'Completed a comprehensive introductory IT diploma covering computer fundamentals, basic programming principles, and software applications.',
    highlights: ['Programming Fundamentals', 'Office Applications', 'Networking Basics'],
    color: 'emerald',
  },
];

const achievements = [
  'Team Leader in multiple university group projects',
  'Developed an end-to-end ML-powered gym management system',
  'Built and deployed a full-stack hotel management platform',
  'Created a peer-to-peer vehicle rental marketplace',
  'Contributed to a Java-based movie booking system',
];

const colorMap = {
  blue: { icon: 'bg-blue-600', border: 'border-blue-200', badge: 'bg-blue-50 text-blue-700 border-blue-100', dot: 'bg-blue-600', line: 'border-blue-200' },
  violet: { icon: 'bg-violet-600', border: 'border-violet-200', badge: 'bg-violet-50 text-violet-700 border-violet-100', dot: 'bg-violet-600', line: 'border-violet-200' },
  emerald: { icon: 'bg-emerald-600', border: 'border-emerald-200', badge: 'bg-emerald-50 text-emerald-700 border-emerald-100', dot: 'bg-emerald-600', line: 'border-emerald-200' },
};

const Education = () => {
  return (
    <section id="education" className="py-28 px-6 bg-slate-50/70">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            Education
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Academic journey.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Education Cards */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, i) => {
              const c = colorMap[edu.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white border ${c.border} rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`mt-1 w-11 h-11 rounded-xl ${c.icon} flex items-center justify-center text-white flex-shrink-0`}>
                      <GraduationCap size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-bold text-slate-900">{edu.degree}</h3>
                      </div>
                      <p className="font-semibold text-slate-700 mb-1">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                        <span className="flex items-center gap-1"><MapPin size={13} /> {edu.location}</span>
                        <span className="flex items-center gap-1"><Calendar size={13} /> {edu.period}</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((h, j) => (
                          <span key={j} className={`px-3 py-1 rounded-lg text-xs font-semibold border ${c.badge}`}>{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievements Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-2xl p-7 text-white h-fit"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center">
                <Award size={20} className="text-slate-900" />
              </div>
              <h3 className="font-display font-bold text-lg">Key Achievements</h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></div>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
