import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Github, Cpu } from 'lucide-react';

const footerLinks = [
  {
    label: 'Navigation',
    links: [
      { title: 'Home', href: '#hero' },
      { title: 'About Me', href: '#about' },
      { title: 'Skills', href: '#skills' },
      { title: 'Projects', href: '#projects' },
      { title: 'Contact', href: '#contact' },
    ],
  },
  {
    label: 'Expertise',
    links: [
      { title: 'Machine Learning', href: '#skills' },
      { title: 'Full-Stack Web Dev', href: '#skills' },
      { title: 'Data Analytics', href: '#skills' },
      { title: 'AI Automation', href: '#skills' },
    ],
  },
  {
    label: 'Get in Touch',
    links: [
      { title: 'dulithamatharaarachchi@gmail.com', href: 'mailto:dulithamatharaarachchi@gmail.com' },
      { title: 'Colombo, Sri Lanka', href: '#contact' },
      { title: 'Available for Internships', href: '#contact' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { title: 'LinkedIn', href: 'https://linkedin.com/in/dulitha-matharaarachchi/', icon: Linkedin },
      { title: 'GitHub', href: 'https://github.com/dulitha-matharaarachchi', icon: Github },
      { title: 'Instagram', href: '#', icon: Instagram },
      { title: 'Facebook', href: '#', icon: Facebook },
    ],
  },
];


export function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-glow-line" />

      <div className="footer-grid-main">
        <AnimatedContainer className="footer-brand-col">
          <div style={{ marginBottom: '0.75rem' }}>
            <img 
              src="/logo.png" 
              alt="Dulitha Logo" 
              style={{ 
                height: '46px', 
                maxWidth: '100%', 
                objectFit: 'contain',
                display: 'block'
              }} 
            />
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, maxWidth: '280px', marginBottom: '1rem' }}>
            AI Developer & Full-Stack Engineer bridging intelligent models with modern web interfaces.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} Dulitha.AI. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="footer-grid-links">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1} className="footer-link-group">
              <div>
                <h3>{section.label}</h3>
                <ul className="footer-link-list">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="footer-anchor"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.icon && <link.icon size={16} style={{ marginRight: '6px' }} />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

function AnimatedContainer({ className, delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
