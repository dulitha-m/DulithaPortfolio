import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback skills list
  const fallbackSkills = [
    { name: 'React.js', category: 'Frontend', proficiencyLevel: 90, iconClass: 'ri-reactjs-fill' },
    { name: 'HTML5', category: 'Frontend', proficiencyLevel: 95, iconClass: 'ri-html5-fill' },
    { name: 'CSS3', category: 'Frontend', proficiencyLevel: 90, iconClass: 'ri-css3-fill' },
    { name: 'Node.js', category: 'Backend', proficiencyLevel: 85, iconClass: 'ri-node-js' },
    { name: 'Express.js', category: 'Backend', proficiencyLevel: 85, iconClass: 'ri-terminal-box-line' },
    { name: 'MongoDB', category: 'Backend', proficiencyLevel: 80, iconClass: 'ri-database-2-fill' },
    { name: 'SQL / MySQL', category: 'Backend', proficiencyLevel: 85, iconClass: 'ri-database-fill' },
    { name: 'JavaScript', category: 'Language', proficiencyLevel: 90, iconClass: 'ri-javascript-fill' },
    { name: 'Python', category: 'Language', proficiencyLevel: 85, iconClass: 'ri-file-code-fill' },
    { name: 'Java', category: 'Language', proficiencyLevel: 80, iconClass: 'ri-cup-fill' },
    { name: 'R', category: 'Language', proficiencyLevel: 70, iconClass: 'ri-line-chart-fill' },
    { name: 'Git & GitHub', category: 'Tool', proficiencyLevel: 90, iconClass: 'ri-github-fill' },
    { name: 'Linux', category: 'Tool', proficiencyLevel: 80, iconClass: 'ri-ubuntu-fill' }
  ];

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get('/api/skills');
        if (res.data && res.data.length > 0) {
          setSkills(res.data);
        } else {
          setSkills(fallbackSkills);
        }
      } catch (error) {
        console.error('Error fetching skills, using fallback data:', error.message);
        setSkills(fallbackSkills);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Group skills by category
  const categories = ['Frontend', 'Backend', 'Language', 'Tool'];
  const getSkillsByCategory = (cat) => skills.filter(s => s.category === cat);

  return (
    <section id="skills" style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Competencies</p>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', color: 'var(--accent-cyan)' }}>
            <i className="ri-loader-4-line ri-spin" style={{ fontSize: '2rem' }}></i>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem'
          }} className="skills-grid">
            <style>{`
              @media (min-width: 768px) {
                .skills-grid { grid-template-columns: 1fr 1fr !important; }
              }
            `}</style>
            
            {categories.map((cat, idx) => {
              const catSkills = getSkillsByCategory(cat);
              if (catSkills.length === 0) return null;

              return (
                <div key={idx} className="glass" style={{
                  padding: '2rem',
                  borderRadius: '16px'
                }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    color: '#fff',
                    marginBottom: '1.5rem',
                    borderBottom: '1px solid var(--glass-border)',
                    paddingBottom: '0.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span>{cat} Skills</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 400 }}>
                      {catSkills.length} Items
                    </span>
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {catSkills.map((skill, sIdx) => (
                      <div key={sIdx}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '0.5rem'
                        }}>
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: 500,
                            color: '#fff'
                          }}>
                            {skill.iconClass ? (
                              <i className={skill.iconClass} style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem' }}></i>
                            ) : (
                              <i className="ri-code-s-slash-line" style={{ color: 'var(--accent-cyan)' }}></i>
                            )}
                            {skill.name}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            {skill.proficiencyLevel}%
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div style={{
                          height: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '3px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            height: '100%',
                            width: `${skill.proficiencyLevel}%`,
                            background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-indigo))',
                            borderRadius: '3px'
                          }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
