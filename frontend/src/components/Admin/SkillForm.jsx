import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const SkillForm = ({ skill, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Frontend',
    proficiencyLevel: 80,
    iconClass: ''
  });

  useEffect(() => {
    if (skill) {
      setFormData({
        name: skill.name || '',
        category: skill.category || 'Frontend',
        proficiencyLevel: skill.proficiencyLevel || 80,
        iconClass: skill.iconClass || ''
      });
    }
  }, [skill]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'proficiencyLevel' ? Number(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
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
      zIndex: 100
    }}>
      <div className="glass" style={{
        width: '100%',
        maxWidth: '450px',
        borderRadius: '24px',
        padding: '2.5rem',
        position: 'relative'
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
          {skill ? 'Edit Skill' : 'Add New Skill'}
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Skill Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="e.g. React.js"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-input"
              style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)' }}
            >
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Language">Language</option>
              <option value="Tool">Tool</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Proficiency Level ({formData.proficiencyLevel}%)</label>
            <input
              type="range"
              name="proficiencyLevel"
              min="0"
              max="100"
              value={formData.proficiencyLevel}
              onChange={handleChange}
              style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--accent-cyan)' }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label">Icon Class (Remix Icon CSS Class)</label>
            <input
              type="text"
              name="iconClass"
              value={formData.iconClass}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g. ri-reactjs-fill"
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillForm;
