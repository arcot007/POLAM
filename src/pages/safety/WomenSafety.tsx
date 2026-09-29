// Women Safety page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Moon, Users, CheckCircle } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { useAuth } from '../../hooks/useAuth';

export const WomenSafety: React.FC = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();

  const features = [
    { title: 'Women-Only Rides', desc: 'Get matched only with female drivers & passengers', icon: <Users size={20} />, active: user?.preferences.womenOnlyRides },
    { title: 'Night Safety Mode', desc: 'Enhanced monitoring between 8 PM – 6 AM', icon: <Moon size={20} />, active: user?.preferences.nightSafetyMode },
    { title: 'Verified Rides Only', desc: 'Only ride with fully verified drivers', icon: <Shield size={20} />, active: user?.preferences.verifiedRidesOnly },
  ];

  return (
    <div className="page" id="women-safety-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Women Safety</h1>
      </div>

      <Card variant="women-safety" className="mb-xl">
        <div className="flex items-center gap-md">
          <Shield size={24} color="var(--women-safety)" />
          <div>
            <h2 className="font-bold">Safety First</h2>
            <p className="text-sm" style={{ color: 'var(--women-safety)' }}>Extra protection features for women riders</p>
          </div>
        </div>
      </Card>

      <div className="flex flex-col gap-md">
        {features.map((f, i) => (
          <Card key={i} compact clickable onClick={() => {
            if (f.title.includes('Women')) updateProfile({ preferences: { ...user!.preferences, womenOnlyRides: !f.active } });
            else if (f.title.includes('Night')) updateProfile({ preferences: { ...user!.preferences, nightSafetyMode: !f.active } });
            else updateProfile({ preferences: { ...user!.preferences, verifiedRidesOnly: !f.active } });
          }}>
            <div className="flex items-center gap-md">
              <div style={{
                width: 44, height: 44, borderRadius: 'var(--radius-md)',
                background: f.active ? 'var(--women-safety-light)' : 'var(--bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: f.active ? 'var(--women-safety)' : 'var(--text-tertiary)',
              }}>{f.icon}</div>
              <div className="flex-1">
                <div className="font-semibold">{f.title}</div>
                <div className="text-sm text-secondary">{f.desc}</div>
              </div>
              <div style={{
                width: 44, height: 24, borderRadius: 12,
                background: f.active ? 'var(--women-safety)' : 'var(--border)',
                position: 'relative', transition: 'background 0.2s',
              }}>
                <div style={{
                  width: 20, height: 20, borderRadius: '50%', background: 'white',
                  position: 'absolute', top: 2, left: f.active ? 22 : 2,
                  transition: 'left 0.2s', boxShadow: 'var(--shadow-sm)',
                }} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
