import { motion } from 'framer-motion';
import { Download, Code, Brain, Server, Users } from 'lucide-react';

const About = ({ scrollTo }) => {
  const traits = [
    { icon: <Brain size={20} />, title: 'AI Focused', desc: 'Deep interest in ML, data science and building intelligent systems.', color: 'text-blue-600 bg-blue-50' },
    { icon: <Code size={20} />, title: 'Full-Stack Dev', desc: 'Building scalable web apps from front-end to back-end.', color: 'text-violet-600 bg-violet-50' },
    { icon: <Server size={20} />, title: 'Problem Solver', desc: 'Analytical thinker who loves to engineer clean, efficient solutions.', color: 'text-emerald-600 bg-emerald-50' },
    { icon: <Users size={20} />, title: 'Team Leader', desc: 'Experienced leading teams in group projects and hackathons.', color: 'text-amber-600 bg-amber-50' },
  ];

  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Photo */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-slate-100 aspect-[4/5] max-w-sm mx-auto">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Dulitha Matharaarachchi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating experience card */}
            <div className="absolute -bottom-6 -right-4 md:right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">2+</div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Years of</div>
                <div className="text-sm font-bold text-slate-900">Development</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              About Me
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Passionate about<br /> building <span className="text-blue-600">AI solutions</span>.
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
              <p>
                I'm Dulitha Matharaarachchi, a second-year AI undergraduate at SLIIT, Colombo. 
                I have a deep passion for technology — both in developing intelligent software 
                systems and building robust full-stack web applications.
              </p>
              <p>
                My core interests lie in Machine Learning, data-driven problem solving, and 
                creating polished user experiences. I'm always eager to learn, collaborate, 
                and grow through challenging projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Battaramulla, Colombo', '077 966 2291', 'dulithamathara@gmail.com'].map((info, i) => (
                <span key={i} className="text-sm text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg font-medium">{info}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/CV.pdf"
                download="Dulitha_Matharaarachchi_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Download size={16} /> Download CV
              </a>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 border-2 border-slate-200 text-slate-800 rounded-xl font-semibold hover:border-slate-900 transition-all duration-300"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trait Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${trait.color} mb-4`}>{trait.icon}</div>
              <h3 className="font-display font-bold text-slate-900 mb-2">{trait.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
