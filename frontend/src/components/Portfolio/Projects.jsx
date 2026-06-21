import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  // Fallback projects list
  const fallbackProjects = [
    {
      _id: 'fb1',
      title: 'Hotel Management System',
      description: 'A comprehensive management platform built for Grand Terrace Colombo. The system streamlines booking services, nightlife table reservations, shisha inventory, and automated billing workflows for a seamless guest experience.',
      category: 'Web App',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
      githubLink: 'https://github.com/dulitha-matharaarachchi',
      liveDemoLink: '',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop',
      dateString: 'Feb 2026 - Apr 2026'
    },
    {
      _id: 'fb2',
      title: 'Spa Management System',
      description: 'Developed for Samsara Wellness Spa & Yoga located at the Grand Oriental Hotel in Colombo. Provides scheduling for guest spa treatments and massage therapies, manages shifts of professional masseurs, and generates performance and sales reports.',
      category: 'Web App',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
      githubLink: 'https://github.com/dulitha-matharaarachchi',
      liveDemoLink: '',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop',
      dateString: 'Apr 2026 - Jun 2026'
    },
    {
      _id: 'fb3',
      title: 'Event Management System',
      description: 'A full-scale booking and planning portal created for Infinity Events & Entertainment Pvt Ltd. Manages creative audio-visual setups, advanced lighting cues, drone show schedules, and client contracts for large corporate and international events.',
      category: 'Web App',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
      githubLink: 'https://github.com/dulitha-matharaarachchi',
      liveDemoLink: '',
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop',
      dateString: 'Apr 2026 - Jun 2026'
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/api/projects');
        if (res.data && res.data.length > 0) {
          setProjects(res.data);
          setFilteredProjects(res.data);
        } else {
          setProjects(fallbackProjects);
          setFilteredProjects(fallbackProjects);
        }
      } catch (error) {
        console.error('Error fetching projects, using fallback data:', error.message);
        setProjects(fallbackProjects);
        setFilteredProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleFilter = (category) => {
    setActiveFilter(category);
    setShowAll(false);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === category));
    }
  };

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleFilter(cat)}
              className={`btn ${activeFilter === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', color: 'var(--accent-cyan)' }}>
            <i className="ri-loader-4-line ri-spin" style={{ fontSize: '2rem' }}></i>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }} className="projects-grid">
            <style>{`
              @media (min-width: 768px) {
                .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
              }
              @media (min-width: 992px) {
                .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
              }
            `}</style>

            {(showAll ? filteredProjects : filteredProjects.slice(0, 6)).map((project) => (
              <div key={project._id} className="glass" style={{
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'var(--transition-smooth)',
                position: 'relative'
              }} onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.15)';
              }} onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {/* Project Image */}
                <div style={{
                  height: '200px',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(0,0,0,0.2)'
                }}>
                  <img
                    src={project.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop'}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--glass-border)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    color: 'var(--accent-cyan)'
                  }}>{project.category}</span>
                </div>

                {/* Project Content */}
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'block' }}>
                    {project.dateString}
                  </span>
                  <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    marginBottom: '1.5rem',
                    flexGrow: 1
                  }}>
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} style={{
                        fontSize: '0.75rem',
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-secondary)',
                        padding: '0.1rem 0.5rem',
                        borderRadius: '4px'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '1rem',
                    marginTop: 'auto'
                  }}>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        transition: 'var(--transition-smooth)'
                      }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.liveDemoLink && (
                      <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        transition: 'var(--transition-smooth)'
                      }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProjects.length > 6 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-primary"
              style={{
                padding: '0.75rem 2rem',
                fontSize: '0.9rem',
                borderRadius: '99px',
                transition: 'var(--transition-smooth)',
                fontWeight: '600'
              }}
            >
              {showAll ? 'Show Less' : 'Discover More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
