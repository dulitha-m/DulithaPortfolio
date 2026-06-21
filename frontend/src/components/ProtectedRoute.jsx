import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#030712',
        color: '#06b6d4',
        fontSize: '1.5rem',
        fontFamily: "'Outfit', sans-serif"
      }}>
        <i className="ri-loader-4-line ri-spin" style={{ marginRight: '10px' }}></i> Loading Portal...
      </div>
    );
  }

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
