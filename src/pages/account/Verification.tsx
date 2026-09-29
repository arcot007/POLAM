// Verification page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Shield } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

export const Verification: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="page" id="verification-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Verification</h1>
      </div>

      <Card className="mb-xl" style={{ textAlign: 'center' }}>
        <Shield size={40} color="var(--teal)" style={{ margin: '0 auto var(--space-md)' }} />
        <h3 className="font-bold">Trust & Verification</h3>
        <p className="text-sm text-secondary">Multi-level verification for everyone's safety</p>
      </Card>

      <div className="flex flex-col gap-md">
        {user?.verifications.map((v, i) => (
          <Card key={v.type} compact style={{ animation: `fadeInUp 0.3s ease ${i * 0.05}s both` }}>
            <div className="flex items-center gap-md">
              <div style={{
                width: 40, height: 40, borderRadius: 'var(--radius-full)',
                background: v.status === 'verified' ? 'var(--success-light)' : v.status === 'pending' ? 'var(--warning-light)' : 'var(--bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {v.status === 'verified'
                  ? <CheckCircle size={20} color="var(--success)" />
                  : <Clock size={20} color={v.status === 'pending' ? 'var(--warning)' : 'var(--text-tertiary)'} />
                }
              </div>
              <div className="flex-1">
                <div className="font-semibold">{v.label}</div>
                <div className="text-sm text-secondary">
                  {v.status === 'verified' ? `Verified on ${v.verifiedAt}` : v.status === 'pending' ? 'Verification pending' : 'Not verified'}
                </div>
              </div>
              <span className={`badge ${v.status === 'verified' ? 'badge-verified' : v.status === 'pending' ? 'badge-warning' : 'badge-navy'}`}>
                {v.status}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Button variant="outline" fullWidth className="mt-xl">Verify More</Button>
    </div>
  );
};
