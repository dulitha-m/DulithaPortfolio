import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Education', href: 'education' },
  { name: 'Contact', href: 'contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map(l => document.getElementById(l.href));
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(section.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border border-slate-200/60 rounded-2xl px-6 py-3 mt-3' : ''}`}>
        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="font-display text-xl font-bold text-slate-900 tracking-tight">
          DM<span className="text-blue-600">.</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${active === link.href ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="ml-4 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl p-4 flex flex-col gap-1"
          >
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
