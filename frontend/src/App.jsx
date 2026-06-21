import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Common Components
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import BackToTop from './components/Common/BackToTop';

// Portfolio Sections
import { Component as Hero } from './components/ui/horizon-hero-section';
import About from './components/Portfolio/About';
import Skills from './components/Portfolio/Skills';
import Projects from './components/Portfolio/Projects';
import Contact from './components/Portfolio/Contact';

// Admin Components
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';

import './App.css';

// Public Portfolio View Component
const PortfolioView = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

// Admin View Component (No regular navbar/footer, dashboard has its own layout)
const AdminView = () => {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          {/* Animated Background Grids */}
          <div className="bg-grid">
            <div className="bg-blur-indigo"></div>
            <div className="bg-blur-cyan"></div>
          </div>

          <Routes>
            <Route path="/" element={<PortfolioView />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminView />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
