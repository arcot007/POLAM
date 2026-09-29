// OTP Verification page
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';

export const OTPVerification: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyOtp } = useAuth();
  const phone = (location.state as { phone?: string })?.phone || '9876543210';
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    setLoading(true);
    const code = otp.join('');
    const success = await verifyOtp(code);
    if (success) navigate('/');
    setLoading(false);
  };

  return (
    <div className="page" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
      <button className="page-back-btn mb-xl" onClick={() => navigate(-1)} style={{ alignSelf: 'flex-start' }}>
        <ArrowLeft size={20} />
      </button>

      <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
        <h1 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>Verify OTP</h1>
        <p className="text-secondary">
          Enter the 4-digit code sent to<br />
          <span className="font-semibold">+91 {phone}</span>
        </p>
      </div>

      <div className="otp-container mb-xl">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            className="otp-input"
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            id={`otp-input-${i}`}
          />
        ))}
      </div>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={handleVerify}
        loading={loading}
        disabled={otp.some(d => !d)}
        id="otp-verify"
      >
        Verify & Continue
      </Button>

      <p className="text-center text-sm text-secondary" style={{ marginTop: 'var(--space-xl)' }}>
        Didn't receive code? <span className="text-teal font-semibold" style={{ cursor: 'pointer' }}>Resend</span>
      </p>
    </div>
  );
};
