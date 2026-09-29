// Login page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (phone.length < 10) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    navigate('/otp', { state: { phone } });
  };

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
        <div style={{
          width: 64, height: 64, borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, var(--teal), var(--navy))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto var(--space-lg)',
          fontSize: 'var(--font-2xl)', fontWeight: 800, color: 'white',
        }}>P</div>
        <h1 style={{ fontSize: 'var(--font-2xl)', fontWeight: 800, marginBottom: 'var(--space-sm)' }}>Welcome to POLAM</h1>
        <p className="text-secondary">Enter your phone number to get started</p>
      </div>

      <div className="input-group mb-xl">
        <label className="input-label">Phone Number</label>
        <div className="input-with-icon">
          <Phone size={18} className="input-icon" />
          <input
            className="input"
            type="tel"
            placeholder="Enter 10-digit number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
            id="login-phone-input"
          />
        </div>
        <span className="input-helper">We'll send you a verification code</span>
      </div>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={handleLogin}
        loading={loading}
        disabled={phone.length < 10}
        id="login-submit"
      >
        Continue
      </Button>

      <p className="text-center text-sm text-tertiary" style={{ marginTop: 'var(--space-2xl)' }}>
        By continuing, you agree to our Terms of Service & Privacy Policy
      </p>
    </div>
  );
};
