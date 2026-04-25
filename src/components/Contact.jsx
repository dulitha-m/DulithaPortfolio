import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const contactDetails = [
  { icon: <Mail size={20} />, label: 'Email', value: 'dulithamathara@gmail.com', href: 'mailto:dulithamathara@gmail.com', color: 'text-red-500 bg-red-50' },
  { icon: <Phone size={20} />, label: 'Phone', value: '077 966 2291', href: 'tel:+94779662291', color: 'text-green-600 bg-green-50' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Battaramulla, Colombo, Sri Lanka', href: null, color: 'text-blue-600 bg-blue-50' },
];

const socials = [
  { icon: <GithubIcon size={18} />, label: 'GitHub', href: 'https://github.com/dulitha-m', hoverClass: 'hover:bg-slate-900 hover:text-white hover:border-slate-900' },
  { icon: <LinkedinIcon size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dulitha-matharaarachchi-5b00922b4/', hoverClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600' },
  { icon: <Mail size={18} />, label: 'Email', href: 'mailto:dulithamathara@gmail.com', hoverClass: 'hover:bg-red-500 hover:text-white hover:border-red-500' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    const subject = encodeURIComponent(form.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:dulithamathara@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            Get In Touch
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Let's work together.
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            I'm open to freelance projects, internships, and full-time opportunities. Send me a message and let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactDetails.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {c.href ? (
                  <a href={c.href} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${c.color}`}>{c.icon}</div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">{c.label}</div>
                      <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{c.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${c.color}`}>{c.icon}</div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase">{c.label}</div>
                      <div className="font-semibold text-slate-900">{c.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="p-6 bg-slate-900 rounded-2xl mt-2">
              <h4 className="text-white font-bold mb-4">Find me online</h4>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.label}
                    className={`w-11 h-11 rounded-xl bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all ${social.hoverClass}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl">
              <p className="text-sm text-blue-800 font-medium">💡 Available for <strong>internships</strong>, <strong>freelance work</strong>, and <strong>full-time roles</strong>.</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm"
          >
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500">Thanks for reaching out. I'll get back to you soon.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 px-6 py-2.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Hi Dulitha, I'd love to discuss..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Opening Email...' : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
