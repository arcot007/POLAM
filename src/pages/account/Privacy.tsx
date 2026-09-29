// Privacy page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Eye, Database, Trash2 } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';

export const Privacy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page" id="privacy-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Privacy & Data</h1>
      </div>

      <Card className="mb-xl">
        <div className="flex items-center gap-md mb-md">
          <Lock size={20} color="var(--teal)" />
          <h3 className="font-semibold">Your Data is Protected</h3>
        </div>
        <p className="text-sm text-secondary">
          POLAM uses privacy-first architecture. Your exact location is never shared with co-riders — only the pickup point. Trip data is encrypted end-to-end.
        </p>
      </Card>

      <div className="flex flex-col gap-md">
        {[
          { icon: <Eye size={20} />, label: 'Location Sharing', desc: 'Only pickup point shared, not home address' },
          { icon: <Database size={20} />, label: 'Data Retention', desc: 'Trip history kept for 6 months' },
          { icon: <Lock size={20} />, label: 'Encryption', desc: 'End-to-end encryption for all data' },
        ].map((item, i) => (
          <Card key={i} compact>
            <div className="flex items-center gap-md">
              <div style={{
                width: 40, height: 40, borderRadius: 'var(--radius-md)',
                background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--teal)',
              }}>{item.icon}</div>
              <div>
                <div className="font-semibold">{item.label}</div>
                <div className="text-sm text-secondary">{item.desc}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button variant="ghost" fullWidth className="mt-xl" style={{ color: 'var(--emergency)' }} icon={<Trash2 size={16} />}>
        Delete My Account
      </Button>
    </div>
  );
};
