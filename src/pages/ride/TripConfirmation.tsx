// Trip Confirmation — booking confirmed
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, MapPin, Clock, User, Car, Shield } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useJourney } from '../../hooks/useJourney';
import { useTrip } from '../../hooks/useTrip';
import { getRide } from '../../data/rides';
import { getUser } from '../../data/users';
import { getVehicle } from '../../data/vehicles';
import { formatCurrency } from '../../utils/formatters';
import { DEMO_TRIP_PIN, DEMO_TRIP_CODE } from '../../data/demoScenario';

export const TripConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const { selectedMatch, selectedPickup, reset } = useJourney();
  const { startDemoTrip } = useTrip();

  const ride = selectedMatch ? getRide(selectedMatch.rideId) : null;
  const driver = ride ? getUser(ride.driverId) : null;
  const vehicle = ride ? getVehicle(ride.vehicleId) : null;

  const handleStartTrip = () => {
    startDemoTrip();
    reset();
    navigate('/trip-pin');
  };

  return (
    <div className="page" style={{ textAlign: 'center' }} id="trip-confirmation-page">
      <div style={{ animation: 'fadeInUp 0.5s ease', paddingTop: 'var(--space-4xl)' }}>
        <div style={{
          width: 80, height: 80, borderRadius: 'var(--radius-full)',
          background: 'var(--success-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto var(--space-xl)',
        }}>
          <CheckCircle size={40} color="var(--success)" />
        </div>

        <h1 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700, marginBottom: 'var(--space-sm)' }}>
          Ride Confirmed! 🎉
        </h1>
        <p className="text-secondary mb-xl">Your trip has been booked successfully</p>

        {/* Trip Code */}
        <div className="card card-navy mb-xl" style={{ textAlign: 'center' }}>
          <div className="text-sm" style={{ opacity: 0.7 }}>Trip Code</div>
          <div style={{ fontSize: 'var(--font-2xl)', fontWeight: 800, letterSpacing: 2 }}>{DEMO_TRIP_CODE}</div>
        </div>

        {/* PIN Display */}
        <div className="mb-xl">
          <p className="text-sm text-secondary mb-md">Share this PIN with the driver to start</p>
          <div className="pin-display">
            {DEMO_TRIP_PIN.split('').map((d, i) => (
              <div key={i} className="pin-digit" style={{ animation: `fadeInUp 0.3s ease ${i * 0.1}s both` }}>{d}</div>
            ))}
          </div>
        </div>

        {/* Details */}
        {driver && vehicle && (
          <div className="card mb-xl" style={{ textAlign: 'left' }}>
            <div className="flex flex-col gap-md">
              <div className="flex items-center gap-md">
                <User size={16} color="var(--teal)" />
                <span className="text-sm"><strong>Driver:</strong> {driver.name} ({driver.rating}★)</span>
              </div>
              <div className="flex items-center gap-md">
                <Car size={16} color="var(--teal)" />
                <span className="text-sm"><strong>Vehicle:</strong> {vehicle.color} {vehicle.make} {vehicle.model} • {vehicle.registrationNumber}</span>
              </div>
              <div className="flex items-center gap-md">
                <MapPin size={16} color="var(--teal)" />
                <span className="text-sm"><strong>Pickup:</strong> {selectedPickup?.name || 'Taramani MRTS Station'}</span>
              </div>
              <div className="flex items-center gap-md">
                <Clock size={16} color="var(--teal)" />
                <span className="text-sm"><strong>Departure:</strong> 5:30 PM Tomorrow</span>
              </div>
            </div>
            <div className="divider" />
            <div className="flex justify-between items-center">
              <span className="text-secondary">Your fare</span>
              <span className="fare-amount">{formatCurrency(selectedMatch?.passengerShare || 85)}</span>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-md">
          <Button variant="primary" size="lg" fullWidth onClick={handleStartTrip} icon={<Shield size={20} />}>
            Start Trip with PIN
          </Button>
          <Button variant="secondary" fullWidth onClick={() => navigate('/payment')}>
            Pay Now ({formatCurrency(selectedMatch?.passengerShare || 85)})
          </Button>
          <Button variant="ghost" fullWidth onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};
