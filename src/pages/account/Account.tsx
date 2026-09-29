// Account page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Shield, CreditCard, Lock, ChevronRight, LogOut, CheckCircle, Star, MapPin } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';
import { getInitials, formatCurrency } from '../../utils/formatters';

export const Account: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout, verificationCount } = useAuth();

  const menuItems = [
    { icon: <Shield size={20} />, label: 'Verification', desc: `${verificationCount} verified`, path: '/verification' },
    { icon: <User size={20} />, label: 'Emergency Contacts', desc: 'Manage trusted people', path: '/trusted-people' },
    { icon: <CreditCard size={20} />, label: 'Wallet & Payments', desc: `Balance: ${formatCurrency(350)}`, path: '/payment' },
    { icon: <Lock size={20} />, label: 'Privacy & Data', desc: 'Manage your data', path: '/privacy' },
    { icon: <Star size={20} />, label: 'My Ratings', desc: 'View trip ratings', path: '/ratings' },
  ];

  return (
    <div className="page" id="account-page">
      {/* Profile card */}
      <Card className="mb-xl" style={{ textAlign: 'center' }}>
        <div className="avatar avatar-xl" style={{ margin: '0 auto var(--space-lg)' }}>
          {user ? getInitials(user.name) : 'U'}
        </div>
        <h2 className="font-bold text-lg">{user?.name || 'User'}</h2>
        <p className="text-secondary text-sm">{user?.phone}</p>

        <div className="flex flex-wrap justify-center gap-xs mt-md mb-md">
          {user?.verifications.filter(v => v.status === 'verified').map(v => (
            <span key={v.type} className="badge badge-verified">
              <CheckCircle size={10} /> {v.label}
            </span>
          ))}
        </div>

        <div className="flex justify-around mt-md" style={{ borderTop: '1px solid var(--border-light)', paddingTop: 'var(--space-md)' }}>
          <div className="text-center">
            <div className="font-bold text-lg">{user?.totalTrips || 0}</div>
            <div className="text-sm text-secondary">Trips</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">{user?.rating || 0}★</div>
            <div className="text-sm text-secondary">Rating</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg" style={{ color: 'var(--success)' }}>{formatCurrency(user?.totalSavings || 0)}</div>
            <div className="text-sm text-secondary">Saved</div>
          </div>
        </div>
      </Card>

      {/* Menu */}
      <div className="flex flex-col gap-sm mb-xl">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="list-item"
            onClick={() => navigate(item.path)}
            style={{ animation: `fadeInUp 0.3s ease ${i * 0.05}s both` }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 'var(--radius-md)',
              background: 'var(--teal-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--teal)',
            }}>{item.icon}</div>
            <div className="list-item-content">
              <div className="list-item-title">{item.label}</div>
              <div className="list-item-subtitle">{item.desc}</div>
            </div>
            <ChevronRight size={18} color="var(--text-tertiary)" />
          </div>
        ))}
      </div>

      <Button variant="ghost" fullWidth onClick={() => { logout(); navigate('/login'); }} icon={<LogOut size={16} />} style={{ color: 'var(--emergency)' }}>
        Sign Out
      </Button>
    </div>
  );
};
