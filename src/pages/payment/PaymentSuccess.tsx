// Payment Success
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { formatCurrency } from '../../utils/formatters';

export const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh' }} id="payment-success-page">
      <div style={{ animation: 'fadeInUp 0.5s ease' }}>
        <div style={{
          width: 80, height: 80, borderRadius: 'var(--radius-full)',
          background: 'var(--success-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto var(--space-xl)',
        }}>
          <CheckCircle size={40} color="var(--success)" />
        </div>

        <h1 className="text-2xl font-bold mb-sm">Payment Successful!</h1>
        <p className="text-secondary mb-xl">Your payment of {formatCurrency(85)} has been processed</p>

        <div className="card mb-xl">
          <div className="flex flex-col gap-sm">
            <div className="info-row"><span className="info-row-label">Amount Paid</span><span className="info-row-value font-bold">{formatCurrency(85)}</span></div>
            <div className="info-row"><span className="info-row-label">Payment Method</span><span className="info-row-value">UPI</span></div>
            <div className="info-row"><span className="info-row-label">Transaction ID</span><span className="info-row-value">TXN{Date.now()}</span></div>
            <div className="info-row"><span className="info-row-label">You Saved</span><span className="info-row-value fare-saved">{formatCurrency(35)}</span></div>
          </div>
        </div>

        <div className="flex flex-col gap-md">
          <Button variant="primary" fullWidth onClick={() => navigate('/digital-receipt')}>View Digital Receipt</Button>
          <Button variant="ghost" fullWidth onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
};
