// Payment page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, Smartphone, CreditCard } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { FareCard } from '../../components/ride/FareCard';
import { formatCurrency } from '../../utils/formatters';
import { demoWallet } from '../../data/payments';

type Method = 'upi' | 'google_pay' | 'phonepe' | 'polam_wallet';

const methods: { id: Method; label: string; icon: React.ReactNode; detail: string }[] = [
  { id: 'upi', label: 'UPI', icon: <Smartphone size={20} />, detail: 'Pay via any UPI app' },
  { id: 'google_pay', label: 'Google Pay', icon: <Smartphone size={20} />, detail: 'Google Pay UPI' },
  { id: 'phonepe', label: 'PhonePe', icon: <Smartphone size={20} />, detail: 'PhonePe UPI' },
  { id: 'polam_wallet', label: 'POLAM Wallet', icon: <Wallet size={20} />, detail: `Balance: ${formatCurrency(demoWallet.balance)}` },
];

export const Payment: React.FC = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Method>('upi');
  const [loading, setLoading] = useState(false);
  const amount = 85;

  const handlePay = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    navigate('/payment-success');
  };

  return (
    <div className="page" id="payment-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Payment</h1>
      </div>

      <FareCard passengerShare={amount} totalFare={120} savings={35} distance={7.2} />

      <h3 className="section-title mt-xl mb-md">Choose Payment Method</h3>
      <div className="flex flex-col gap-md mb-xl">
        {methods.map(m => (
          <div
            key={m.id}
            className={`payment-option ${selected === m.id ? 'selected' : ''}`}
            onClick={() => setSelected(m.id)}
          >
            <div className="payment-radio" data-selected={selected === m.id ? '' : undefined}>
              {selected === m.id && <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--teal)' }} />}
            </div>
            <div style={{
              width: 40, height: 40, borderRadius: 'var(--radius-md)',
              background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--teal)',
            }}>{m.icon}</div>
            <div className="flex-1">
              <div className="font-semibold">{m.label}</div>
              <div className="text-sm text-secondary">{m.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <Button variant="primary" size="lg" fullWidth onClick={handlePay} loading={loading}>
        Pay {formatCurrency(amount)}
      </Button>
    </div>
  );
};
