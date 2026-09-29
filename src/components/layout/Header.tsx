// Header component
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Shield } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { getInitials } from '../../utils/formatters';

export const Header: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="header" id="app-header">
      <div className="header-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <div className="header-logo" style={{
          background: 'linear-gradient(135deg, var(--teal), var(--teal-dark))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 'var(--font-sm)', color: 'white',
        }}>
          P
        </div>
        <span className="header-title">POLAM</span>
      </div>
      <div className="header-actions">
        <button className="header-icon-btn" onClick={() => navigate('/safety')} aria-label="Safety">
          <Shield size={20} />
        </button>
        <button className="header-icon-btn" aria-label="Notifications">
          <Bell size={20} />
        </button>
        <button
          className="avatar avatar-sm"
          onClick={() => navigate('/account')}
          aria-label="Account"
          style={{ fontSize: 'var(--font-xs)' }}
        >
          {user ? getInitials(user.name) : 'U'}
        </button>
      </div>
    </header>
  );
};
