import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import ProjectForm from './ProjectForm';
import SkillForm from './SkillForm';
import { Plus, Edit2, Trash2, Layout, Database, LogOut, ExternalLink, Globe, Mail, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('projects');
  const [loading, setLoading] = useState(true);

  // Modals state
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const { logout, user } = useAuth();

  const fetchData = async () => {
    setLoading(true);
    try {
      const projectsRes = await axios.get('/api/projects');
      const skillsRes = await axios.get('/api/skills');
      const messagesRes = await axios.get('/api/messages');
      setProjects(projectsRes.data);
      setSkills(skillsRes.data);
      setMessages(messagesRes.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Project CRUD Actions
  const handleSaveProject = async (projectData) => {
    try {
      if (selectedProject) {
        // Edit existing project
        await axios.put(`/api/projects/${selectedProject._id}`, projectData);
      } else {
        // Create new project
        await axios.post('/api/projects', projectData);
      }
      setShowProjectModal(false);
      setSelectedProject(null);
      fetchData();
    } catch (error) {
      alert('Error saving project: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleDeleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await axios.delete(`/api/projects/${id}`);
        fetchData();
      } catch (error) {
        alert('Error deleting project: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  // Skill CRUD Actions
  const handleSaveSkill = async (skillData) => {
    try {
      if (selectedSkill) {
        // Edit existing skill
        await axios.put(`/api/skills/${selectedSkill._id}`, skillData);
      } else {
        // Create new skill
        await axios.post('/api/skills', skillData);
      }
      setShowSkillModal(false);
      setSelectedSkill(null);
      fetchData();
    } catch (error) {
      alert('Error saving skill: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleDeleteSkill = async (id) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      try {
        await axios.delete(`/api/skills/${id}`);
        fetchData();
      } catch (error) {
        alert('Error deleting skill: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await axios.put(`/api/messages/${id}/read`);
      fetchData();
    } catch (error) {
      alert('Error updating message: ' + (error.response?.data?.message || error.message));
    }
  };

  const handleDeleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await axios.delete(`/api/messages/${id}`);
        fetchData();
      } catch (error) {
        alert('Error deleting message: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        {/* Dashboard Header */}
        <div className="glass" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2rem',
          borderRadius: '20px',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', color: '#fff' }}>Dashboard</h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Logged in as <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{user?.username}</span>
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
              <Globe size={16} /> View Website
            </Link>
            <button onClick={logout} className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('projects')}
            className={`btn ${activeTab === 'projects' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Layout size={18} /> Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`btn ${activeTab === 'skills' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Database size={18} /> Skills ({skills.length})
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`btn ${activeTab === 'messages' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Mail size={18} /> Messages ({messages.filter(m => !m.isRead).length} new)
          </button>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--accent-cyan)' }}>
            <i className="ri-loader-4-line ri-spin" style={{ fontSize: '3rem' }}></i>
          </div>
        ) : (
          <div>
            {/* PROJECTS TAB */}
            {activeTab === 'projects' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.25rem', color: '#fff' }}>Manage Projects</h2>
                  <button onClick={() => { setSelectedProject(null); setShowProjectModal(true); }} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    <Plus size={16} /> Add Project
                  </button>
                </div>

                <div style={{ overflowX: 'auto' }} className="glass">
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                        <th style={{ padding: '1.25rem', color: 'var(--accent-cyan)' }}>Project Title</th>
                        <th style={{ padding: '1.25rem', color: 'var(--accent-cyan)' }}>Category</th>
                        <th style={{ padding: '1.25rem', color: 'var(--accent-cyan)' }}>Period</th>
                        <th style={{ padding: '1.25rem', color: 'var(--accent-cyan)' }}>Links</th>
                        <th style={{ padding: '1.25rem', color: 'var(--accent-cyan)', textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map((proj) => (
                        <tr key={proj._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                          <td style={{ padding: '1.25rem', fontWeight: 600, color: '#fff' }}>{proj.title}</td>
                          <td style={{ padding: '1.25rem', color: 'var(--text-secondary)' }}>{proj.category}</td>
                          <td style={{ padding: '1.25rem', color: 'var(--text-secondary)' }}>{proj.dateString}</td>
                          <td style={{ padding: '1.25rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                              {proj.githubLink && <a href={proj.githubLink} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)' }}><i className="ri-github-fill"></i></a>}
                              {proj.liveDemoLink && <a href={proj.liveDemoLink} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-indigo)' }}><i className="ri-external-link-line"></i></a>}
                            </div>
                          </td>
                          <td style={{ padding: '1.25rem', textAlign: 'right' }}>
                            <button
                              onClick={() => { setSelectedProject(proj); setShowProjectModal(true); }}
                              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', marginRight: '1rem' }}
                              title="Edit"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteProject(proj._id)}
                              style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SKILLS TAB */}
            {activeTab === 'skills' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.25rem', color: '#fff' }}>Manage Skills</h2>
                  <button onClick={() => { setSelectedSkill(null); setShowSkillModal(true); }} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    <Plus size={16} /> Add Skill
                  </button>
                </div>

                <div style={{ overflowX: 'auto' }} className="glass">
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '500px' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                        <th style={{ padding: '1.25rem', color: 'var(--accent-cyan)' }}>Skill Name</th>
                        <th style={{ padding: '1.25rem', color: 'var(--accent-cyan)' }}>Category</th>
                        <th style={{ padding: '1.25rem', color: 'var(--accent-cyan)' }}>Proficiency</th>
                        <th style={{ padding: '1.25rem', color: 'var(--accent-cyan)' }}>Icon</th>
                        <th style={{ padding: '1.25rem', color: 'var(--accent-cyan)', textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {skills.map((sk) => (
                        <tr key={sk._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                          <td style={{ padding: '1.25rem', fontWeight: 600, color: '#fff' }}>{sk.name}</td>
                          <td style={{ padding: '1.25rem', color: 'var(--text-secondary)' }}>{sk.category}</td>
                          <td style={{ padding: '1.25rem', color: 'var(--text-secondary)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <div style={{ width: '60px', height: '6px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                                <div style={{ width: `${sk.proficiencyLevel}%`, height: '100%', backgroundColor: 'var(--accent-cyan)' }}></div>
                              </div>
                              {sk.proficiencyLevel}%
                            </div>
                          </td>
                          <td style={{ padding: '1.25rem' }}>
                            {sk.iconClass ? <i className={sk.iconClass} style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem' }}></i> : 'None'}
                          </td>
                          <td style={{ padding: '1.25rem', textAlign: 'right' }}>
                            <button
                              onClick={() => { setSelectedSkill(sk); setShowSkillModal(true); }}
                              style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', marginRight: '1rem' }}
                              title="Edit"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteSkill(sk._id)}
                              style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* MESSAGES TAB */}
            {activeTab === 'messages' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.25rem', color: '#fff' }}>Inbox Messages</h2>
                </div>

                {messages.length === 0 ? (
                  <div className="glass" style={{ padding: '3rem', textAlign: 'center', borderRadius: '16px', color: 'var(--text-secondary)' }}>
                    No messages received yet.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {messages.map((msg) => (
                      <div
                        key={msg._id}
                        className="glass"
                        style={{
                          padding: '1.5rem',
                          borderRadius: '16px',
                          borderLeft: msg.isRead ? '1px solid var(--glass-border)' : '4px solid var(--accent-cyan)',
                          position: 'relative'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                          <div>
                            <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: 0, fontWeight: msg.isRead ? 500 : 700 }}>
                              {msg.subject}
                            </h3>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                              From: <span style={{ color: '#fff', fontWeight: 600 }}>{msg.name}</span> ({msg.email})
                            </p>
                          </div>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                            {new Date(msg.createdAt).toLocaleString()}
                          </span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-wrap', marginBottom: '1rem' }}>
                          {msg.message}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '0.75rem' }}>
                          {!msg.isRead && (
                            <button
                              onClick={() => handleMarkAsRead(msg._id)}
                              className="btn btn-secondary"
                              style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                            >
                              <Check size={14} /> Mark as Read
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteMessage(msg._id)}
                            className="btn"
                            style={{
                              padding: '0.4rem 0.8rem',
                              fontSize: '0.8rem',
                              backgroundColor: 'rgba(239, 68, 68, 0.1)',
                              border: '1px solid rgba(239, 68, 68, 0.2)',
                              color: '#ef4444',
                              borderRadius: '99px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.3rem'
                            }}
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Forms Modals */}
      {showProjectModal && (
        <ProjectForm
          project={selectedProject}
          onSave={handleSaveProject}
          onClose={() => { setShowProjectModal(false); setSelectedProject(null); }}
        />
      )}

      {showSkillModal && (
        <SkillForm
          skill={selectedSkill}
          onSave={handleSaveSkill}
          onClose={() => { setShowSkillModal(false); setSelectedSkill(null); }}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
