// Splash screen
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_NAME, APP_TAGLINE_TAMIL, APP_TAGLINE_ENGLISH, APP_POSITIONING } from '../../utils/constants';

export const Splash: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen" id="splash-screen">
      <div className="splash-logo" style={{
        width: 80, height: 80, borderRadius: 'var(--radius-xl)',
        background: 'linear-gradient(135deg, var(--teal), var(--teal-dark))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 'var(--font-3xl)', fontWeight: 800, color: 'white',
      }}>
        P
      </div>
      <h1 className="splash-title">{APP_NAME}</h1>
      <p className="splash-tamil">{APP_TAGLINE_TAMIL}</p>
      <p className="splash-tagline">{APP_TAGLINE_ENGLISH}</p>
      <p className="splash-positioning">{APP_POSITIONING}</p>
    </div>
  );
};
