// Bottom Navigation component
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, MapPin, Shield, User } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';

const iconMap: Record<string, React.ReactNode> = {
  home: <Home size={22} />,
  find: <Search size={22} />,
  trips: <MapPin size={22} />,
  safety: <Shield size={22} />,
  account: <User size={22} />,
};

export const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-nav" id="bottom-navigation">
      {NAVIGATION_ITEMS.map((item) => (
        <button
          key={item.id}
          className={`bottom-nav-item ${isActive(item.path) ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
          aria-label={item.label}
          id={`nav-${item.id}`}
        >
          {iconMap[item.id]}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};
