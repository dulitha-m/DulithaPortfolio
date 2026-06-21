import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Mail, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const details = [
    { icon: <User size={18} />, label: 'Name', value: 'Dulitha Matharaarachchi' },
    { icon: <Calendar size={18} />, label: 'Born', value: 'April 17, 2004' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Colombo, Sri Lanka' },
    { icon: <Mail size={18} />, label: 'Email', value: 'dulithamathara@gmail.com' }
  ];

  const education = [
    {
      degree: 'BSc (Hons) in Artificial Intelligence',
      school: 'Sri Lanka Institute of Information Technology (SLIIT)',
      period: '2024 - Present',
      location: 'Malabe',
      description: 'Focusing on Machine Learning models, Neural Networks, Python development, and Database Design.'
    },
    {
      degree: 'G.C.E. Advanced Level',
      school: 'Nalanda College, Colombo',
      period: '2021 - 2023',
      location: 'Colombo',
      description: 'Physical Science Stream (Mathematics, Physics, Chemistry).'
    },
    {
      degree: 'G.C.E. Ordinary Level',
      school: 'Nalanda College, Colombo',
      period: '2019 - 2020',
      location: 'Colombo',
      description: 'Passed with high distinctions.'
    }
  ];

  const certifications = [
    {
      title: 'Complete Full Stack Web Development Bootcamp',
      issuer: 'Udemy',
      period: 'Jan 2026 - Present',
      details: 'Modern Stack - JavaScript, Node.js, React, MongoDB, Linux, and REST API development.'
    }
  ];

  const references = [
    { name: 'Banuka Bandara', position: 'Software Engineer', email: 'banupawan12@gmail.com', phone: '076 532 4824' },
    { name: 'Osanda Chalukya', position: 'Architect at Micd Associates', email: 'osanda28@gmail.com', phone: '076 559 7747' }
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Biography</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="about-grid">
          <style>{`
            @media (min-width: 992px) {
              .about-grid { grid-template-columns: 1fr 1fr !important; }
            }
          `}</style>
          
          {/* Left Column: Bio & Info Cards */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Who am I?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              I am an enthusiastic second-year undergraduate student specializing in Artificial Intelligence. 
              My academic foundation is built on machine learning algorithms, database administration, and programming. 
              I love engineering end-to-end full-stack applications and solving analytical problems.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {details.map((item, idx) => (
                <div key={idx} className="glass" style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{ color: 'var(--accent-cyan)' }}>{item.icon}</div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{item.label}</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* References Card */}
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#fff' }}>References</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {references.map((ref, idx) => (
                <div key={idx} className="glass" style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--accent-indigo)'
                }}>
                  <p style={{ fontWeight: 600, color: '#fff' }}>{ref.name}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', marginBottom: '0.25rem' }}>{ref.position}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <i className="ri-mail-line" style={{ marginRight: '4px' }}></i> {ref.email} | <i className="ri-phone-line" style={{ marginRight: '4px' }}></i> {ref.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Timeline */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap style={{ color: 'var(--accent-cyan)' }} /> Education Timeline
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
              {education.map((edu, idx) => (
                <div key={idx} className="glass" style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    fontSize: '0.8rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600,
                    background: 'rgba(6, 182, 212, 0.1)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px'
                  }}>{edu.period}</span>
                  <h4 style={{ color: '#fff', marginBottom: '0.25rem', fontSize: '1.1rem', paddingRight: '80px' }}>{edu.degree}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{edu.school}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications Card */}
            <h3 style={{ fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award style={{ color: 'var(--accent-indigo)' }} /> Certifications
            </h3>
            {certifications.map((cert, idx) => (
              <div key={idx} className="glass" style={{
                padding: '1.25rem',
                borderRadius: '16px',
                borderLeft: '4px solid var(--accent-cyan)'
              }}>
                <h4 style={{ color: '#fff', marginBottom: '0.25rem' }}>{cert.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{cert.issuer} ({cert.period})</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{cert.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
