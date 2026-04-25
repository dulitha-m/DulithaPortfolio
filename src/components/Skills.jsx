import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    color: 'blue',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'JavaScript', level: 83 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'R', level: 65 },
    ],
  },
  {
    title: 'AI & Data Science',
    color: 'violet',
    skills: [
      { name: 'TensorFlow / Keras', level: 80 },
      { name: 'Scikit-learn', level: 82 },
      { name: 'Pandas / NumPy', level: 84 },
      { name: 'Flask API', level: 76 },
      { name: 'Data Analysis', level: 80 },
    ],
  },
  {
    title: 'Web Development',
    color: 'emerald',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'Node.js & Express', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'MySQL', level: 75 },
      { name: 'HTML & CSS', level: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
    color: 'amber',
    skills: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'Docker', level: 60 },
      { name: 'Postman', level: 78 },
      { name: 'AWS Basics', level: 55 },
      { name: 'Figma (UI Design)', level: 65 },
    ],
  },
];

const colorMap = {
  blue: { bar: 'bg-blue-500', bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
  violet: { bar: 'bg-violet-500', bg: 'bg-violet-50', border: 'border-violet-100', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-700' },
  emerald: { bar: 'bg-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-700' },
  amber: { bar: 'bg-amber-500', bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-700' },
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 bg-slate-50/70">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            Technical Skills
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            My technology stack.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
                className={`bg-white border ${c.border} rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-5 ${c.badge}`}>
                  {cat.title}
                </div>
                <div className="space-y-5">
                  {cat.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-semibold text-slate-800">{skill.name}</span>
                        <span className="text-xs font-bold text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIdx * 0.1 + skillIdx * 0.05, ease: 'easeOut' }}
                          className={`h-full ${c.bar} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Logos Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white border border-slate-100 rounded-2xl p-6 flex flex-wrap justify-center gap-3"
        >
          {['Python', 'React', 'Node.js', 'MongoDB', 'TensorFlow', 'Java', 'Flask', 'MySQL', 'AWS', 'Docker', 'Git', 'Pandas', 'Scikit-learn', 'JavaScript', 'Express', 'HTML5', 'CSS3', 'Postman'].map((tech, i) => (
            <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
