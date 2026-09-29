// Safe Pickup — choose safe pickup location
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { useJourney } from '../../hooks/useJourney';
import { SafePickupCard } from '../../components/location/SafePickupCard';
import { MapCard } from '../../components/location/MapCard';
import { MatchExplanation } from '../../components/ai/MatchExplanation';
import { Button } from '../../components/common/Button';

export const SafePickup: React.FC = () => {
  const navigate = useNavigate();
  const { safePickups, selectedPickup, selectPickup, selectedMatch, confirmRide, step } = useJourney();

  const handleConfirm = async () => {
    await confirmRide();
    navigate('/trip-confirmation');
  };

  return (
    <div className="page" id="safe-pickup-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Choose Pickup Point</h1>
      </div>

      <MapCard from="You" to="Pickup" tall className="mb-xl" />

      {/* AI explanation */}
      {selectedMatch && (
        <div className="mb-xl">
          <MatchExplanation match={selectedMatch} />
        </div>
      )}

      <div className="flex items-center gap-sm mb-md">
        <Shield size={18} color="var(--success)" />
        <h2 className="section-title">AI-Suggested Safe Pickup Points</h2>
      </div>
      <p className="text-sm text-secondary mb-lg">
        These locations are public, well-lit, and convenient for both you and the driver.
      </p>

      <div className="flex flex-col gap-md mb-xl">
        {safePickups.map(pickup => (
          <SafePickupCard
            key={pickup.name}
            pickup={pickup}
            selected={selectedPickup?.name === pickup.name}
            onClick={() => selectPickup(pickup)}
          />
        ))}
      </div>

      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={handleConfirm}
        disabled={!selectedPickup}
        loading={step === 'confirming'}
        id="confirm-ride-btn"
      >
        {step === 'confirming' ? 'Confirming ride...' : 'Confirm Ride'}
      </Button>
    </div>
  );
};
