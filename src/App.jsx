import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero scrollTo={scrollTo} />
        <About scrollTo={scrollTo} />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default App;
