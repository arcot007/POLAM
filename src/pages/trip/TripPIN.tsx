// TripPIN — verify PIN to start trip
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useTrip } from '../../hooks/useTrip';

export const TripPIN: React.FC = () => {
  const navigate = useNavigate();
  const { activeTrip, updateTripStatus } = useTrip();
  const [verified, setVerified] = useState(false);

  const pin = activeTrip?.pin || '4827';

  const handleVerify = () => {
    setVerified(true);
    if (activeTrip) updateTripStatus(activeTrip.id, 'in_progress');
    setTimeout(() => navigate('/live-trip'), 1500);
  };

  return (
    <div className="page" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
      <div className="page-header" style={{ position: 'absolute', top: 0, left: 0, right: 0, background: 'transparent' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
      </div>

      {!verified ? (
        <div style={{ animation: 'fadeInUp 0.4s ease' }}>
          <div style={{
            width: 72, height: 72, borderRadius: 'var(--radius-full)',
            background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto var(--space-xl)',
          }}>
            <Shield size={32} color="white" />
          </div>

          <h1 className="text-2xl font-bold mb-sm">Trip Verification PIN</h1>
          <p className="text-secondary mb-xl">Show this PIN to your driver to start the trip</p>

          <div className="pin-display mb-xl">
            {pin.split('').map((d, i) => (
              <div key={i} className="pin-digit" style={{ animation: `fadeInUp 0.3s ease ${i * 0.1}s both` }}>{d}</div>
            ))}
          </div>

          <p className="text-sm text-secondary mb-xl">
            The driver will enter this PIN to confirm you're the right passenger. This ensures your safety.
          </p>

          <Button variant="primary" size="lg" fullWidth onClick={handleVerify}>
            Driver Verified My PIN
          </Button>
        </div>
      ) : (
        <div style={{ animation: 'fadeInUp 0.4s ease' }}>
          <div style={{
            width: 80, height: 80, borderRadius: 'var(--radius-full)',
            background: 'var(--success-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto var(--space-xl)',
          }}>
            <CheckCircle size={40} color="var(--success)" />
          </div>
          <h2 className="text-2xl font-bold mb-sm">PIN Verified! ✓</h2>
          <p className="text-secondary">Starting your trip...</p>
        </div>
      )}
    </div>
  );
};
