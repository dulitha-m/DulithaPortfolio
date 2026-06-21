import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await axios.post('/api/messages', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Reach Out</p>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="contact-grid">
          <style>{`
            @media (min-width: 992px) {
              .contact-grid { grid-template-columns: 1fr 1.5fr !important; }
            }
          `}</style>

          {/* Left Side: Contact Information cards */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Let's discuss something great</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
              I am open to discuss AI projects, freelance full-stack gigs, or collaborate on team development. 
              Drop me an email or call me directly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Card 1: Email */}
              <div className="glass" style={{
                padding: '1.25rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email Me</p>
                  <a href="mailto:dulithamathara@gmail.com" style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }} onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'} onMouseLeave={e => e.target.style.color = '#fff'}>
                    dulithamathara@gmail.com
                  </a>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="glass" style={{
                padding: '1.25rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-indigo)'
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Call Me</p>
                  <a href="tel:0779662291" style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }} onMouseEnter={e => e.target.style.color = 'var(--accent-indigo)'} onMouseLeave={e => e.target.style.color = '#fff'}>
                    077 966 2291
                  </a>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="glass" style={{
                padding: '1.25rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)'
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</p>
                  <p style={{ fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="glass" style={{
            padding: '2.5rem',
            borderRadius: '24px'
          }}>
            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '2rem 0'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '2rem'
                }}>
                  <i className="ri-checkbox-circle-fill"></i>
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Thank you for reaching out, Dulitha will get back to you shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div style={{
                    color: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    marginBottom: '1.25rem',
                    fontSize: '0.85rem'
                  }}>
                    {error}
                  </div>
                )}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.25rem',
                  marginBottom: '1.25rem'
                }} className="form-row">
                  <style>{`
                    @media (min-width: 768px) {
                      .form-row { grid-template-columns: 1fr 1fr !important; }
                    }
                  `}</style>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Job Offer"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Hi Dulitha, I would love to collaborate..."
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  {loading ? (
                    <>
                      <i className="ri-loader-4-line ri-spin" style={{ marginRight: '8px' }}></i> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
