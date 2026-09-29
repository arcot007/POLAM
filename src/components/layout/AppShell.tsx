// App Shell — layout wrapper
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { BottomNavigation } from './BottomNavigation';

const noNavPaths = ['/login', '/otp', '/setup', '/splash', '/live-trip', '/sos'];

export const AppShell: React.FC = () => {
  const location = useLocation();
  const showNav = !noNavPaths.some(p => location.pathname.startsWith(p));

  return (
    <div className="app-shell">
      {showNav && <Header />}
      <main className={`app-content ${!showNav ? 'no-bottom-nav' : ''}`}>
        <Outlet />
      </main>
      {showNav && <BottomNavigation />}
    </div>
  );
};
