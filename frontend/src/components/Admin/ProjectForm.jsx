import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ProjectForm = ({ project, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Web App',
    technologies: '',
    githubLink: '',
    liveDemoLink: '',
    imageUrl: '',
    dateString: '',
    isFeatured: false
  });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        description: project.description || '',
        category: project.category || 'Web App',
        technologies: Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies || '',
        githubLink: project.githubLink || '',
        liveDemoLink: project.liveDemoLink || '',
        imageUrl: project.imageUrl || '',
        dateString: project.dateString || '',
        isFeatured: project.isFeatured || false
      });
    }
  }, [project]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Parse technologies back to array if needed
    const parsedData = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean)
    };
    onSave(parsedData);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      zIndex: 100,
      overflowY: 'auto'
    }}>
      <div className="glass" style={{
        width: '100%',
        maxWidth: '600px',
        borderRadius: '24px',
        padding: '2.5rem',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary)',
          cursor: 'pointer'
        }}>
          <X size={20} />
        </button>

        <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem' }}>
          {project ? 'Edit Project' : 'Add New Project'}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Project Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="e.g. Hotel Management System"
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
          }}>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
                style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}
              >
                <option value="Web App">Web App</option>
                <option value="AI / ML">AI / ML</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Date String</label>
              <input
                type="text"
                name="dateString"
                value={formData.dateString}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g. Feb 2026 - Apr 2026"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="form-input"
              placeholder="Provide a description of the project"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Technologies (comma separated)</label>
            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              className="form-input"
              placeholder="React, Node.js, MongoDB, etc."
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
          }}>
            <div className="form-group">
              <label className="form-label">GitHub Repository Link</label>
              <input
                type="url"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                className="form-input"
                placeholder="https://github.com/..."
              />
            </div>
            <div className="form-group">
              <label className="form-label">Live Demo Link</label>
              <input
                type="url"
                name="liveDemoLink"
                value={formData.liveDemoLink}
                onChange={handleChange}
                className="form-input"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Project Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="form-input"
              placeholder="Image URL or placeholder link"
            />
          </div>

          <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            <input
              type="checkbox"
              name="isFeatured"
              id="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <label htmlFor="isFeatured" style={{ color: '#fff', fontSize: '0.9rem', cursor: 'pointer' }}>
              Feature this project on home page
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
