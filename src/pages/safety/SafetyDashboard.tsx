// Safety Dashboard
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, AlertTriangle, Users, Phone, Eye, ChevronRight, Moon } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { GuardianStatus } from '../../components/safety/GuardianStatus';
import { useGuardian } from '../../hooks/useGuardian';
import { useAuth } from '../../hooks/useAuth';

export const SafetyDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { contacts } = useGuardian();
  const { user } = useAuth();

  const features = [
    { icon: <Eye size={20} />, label: 'Guardian Mode', desc: 'Live trip sharing with contacts', path: '' },
    { icon: <AlertTriangle size={20} />, label: 'SOS Emergency', desc: 'Instant help in emergencies', path: '/sos' },
    { icon: <Users size={20} />, label: 'Trusted People', desc: `${contacts.length} emergency contacts`, path: '/trusted-people' },
    { icon: <Moon size={20} />, label: 'Women Safety', desc: 'Women-only rides & night safety', path: '/women-safety' },
    { icon: <Shield size={20} />, label: 'Safety Reports', desc: 'Report unsafe behaviour', path: '/safety-report' },
  ];

  return (
    <div className="page" id="safety-dashboard-page">
      <h1 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700, marginBottom: 'var(--space-xl)' }}>Safety Center</h1>

      <GuardianStatus />

      {/* Safety score */}
      <Card className="mt-lg mb-xl" style={{ textAlign: 'center' }}>
        <div style={{
          width: 80, height: 80, borderRadius: 'var(--radius-full)',
          background: 'linear-gradient(135deg, var(--success-light), var(--teal-bg))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto var(--space-md)',
        }}>
          <span className="text-2xl font-bold" style={{ color: 'var(--success)' }}>92</span>
        </div>
        <h3 className="font-semibold">Your Safety Score</h3>
        <p className="text-sm text-secondary">Based on {user?.totalTrips || 0} trips with zero incidents</p>
      </Card>

      {/* Features */}
      <div className="flex flex-col gap-sm">
        {features.map((f, i) => (
          <div
            key={i}
            className="list-item"
            onClick={() => f.path && navigate(f.path)}
            style={{ animation: `fadeInUp 0.3s ease ${i * 0.05}s both` }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 'var(--radius-md)',
              background: 'var(--teal-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--teal)',
            }}>{f.icon}</div>
            <div className="list-item-content">
              <div className="list-item-title">{f.label}</div>
              <div className="list-item-subtitle">{f.desc}</div>
            </div>
            {f.path && <ChevronRight size={18} color="var(--text-tertiary)" />}
          </div>
        ))}
      </div>
    </div>
  );
};
