import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const Footer = ({ scrollTo }) => {
  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Education', href: 'education' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold mb-3">
              DM<span className="text-blue-400">.</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              AI Undergraduate & Full-Stack Developer passionate about building intelligent, impactful software.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://github.com/dulitha-m" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <GithubIcon size={17} />
              </a>
              <a href="https://www.linkedin.com/in/dulitha-matharaarachchi-5b00922b4/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <LinkedinIcon size={17} />
              </a>
              <a href="mailto:dulithamathara@gmail.com" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors">
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <a href="mailto:dulithamathara@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                ✉ dulithamathara@gmail.com
              </a>
              <a href="tel:+94779662291" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                📞 077 966 2291
              </a>
              <p className="flex items-center gap-2 text-slate-400 text-sm">
                📍 Battaramulla, Colombo, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Dulitha Matharaarachchi. All rights reserved.</p>
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
