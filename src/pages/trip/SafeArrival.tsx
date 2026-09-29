// Safe Arrival — post-trip safety confirmation
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Shield, Star } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Rating } from '../../components/common/Rating';
import { useTrip } from '../../hooks/useTrip';

export const SafeArrival: React.FC = () => {
  const navigate = useNavigate();
  const { activeTrip, confirmSafeArrival } = useTrip();
  const [confirmed, setConfirmed] = useState(false);
  const [rating, setRating] = useState(0);

  const handleConfirm = () => {
    if (activeTrip) confirmSafeArrival(activeTrip.id);
    setConfirmed(true);
  };

  return (
    <div className="page" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '80vh' }} id="safe-arrival-page">
      {!confirmed ? (
        <div style={{ animation: 'fadeInUp 0.4s ease' }}>
          <div style={{
            width: 80, height: 80, borderRadius: 'var(--radius-full)',
            background: 'var(--teal-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto var(--space-xl)',
          }}>
            <Shield size={40} color="var(--teal)" />
          </div>
          <h1 className="text-2xl font-bold mb-sm">Have you arrived safely?</h1>
          <p className="text-secondary mb-xl">Your guardian contacts will be notified</p>

          <div className="flex flex-col gap-md">
            <Button variant="success" size="lg" fullWidth onClick={handleConfirm} icon={<CheckCircle size={20} />}>
              Yes, I'm Safe! ✓
            </Button>
            <Button variant="ghost" fullWidth onClick={() => navigate('/sos')}>
              I need help
            </Button>
          </div>
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
          <h1 className="text-2xl font-bold mb-sm">Glad you're safe! 🎉</h1>
          <p className="text-secondary mb-xl">Your contacts have been notified of your safe arrival</p>

          <div className="card mb-xl">
            <h3 className="font-semibold mb-md">Rate your ride</h3>
            <div className="flex justify-center mb-md">
              <Rating value={rating} onChange={setRating} size={32} />
            </div>
            {rating > 0 && <p className="text-sm text-teal">Thanks for your feedback!</p>}
          </div>

          <div className="flex flex-col gap-md">
            <Button variant="primary" fullWidth onClick={() => navigate('/payment')}>
              Pay & View Receipt
            </Button>
            <Button variant="ghost" fullWidth onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
