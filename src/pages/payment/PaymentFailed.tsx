// Payment Failed
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const PaymentFailed: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh' }}>
      <div style={{ animation: 'fadeInUp 0.5s ease' }}>
        <div style={{
          width: 80, height: 80, borderRadius: 'var(--radius-full)',
          background: 'var(--emergency-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto var(--space-xl)',
        }}>
          <XCircle size={40} color="var(--emergency)" />
        </div>
        <h1 className="text-2xl font-bold mb-sm">Payment Failed</h1>
        <p className="text-secondary mb-xl">Your payment could not be processed. Please try again.</p>
        <div className="flex flex-col gap-md">
          <Button variant="primary" fullWidth onClick={() => navigate('/payment')}>Retry Payment</Button>
          <Button variant="ghost" fullWidth onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
};
