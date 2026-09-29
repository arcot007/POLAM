// Live Trip — real-time trip tracking
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Navigation, Phone, Shield, AlertTriangle } from 'lucide-react';
import { useTrip } from '../../hooks/useTrip';
import { useGuardian } from '../../hooks/useGuardian';
import { MapCard } from '../../components/location/MapCard';
import { GuardianStatus } from '../../components/safety/GuardianStatus';
import { SOSButton } from '../../components/safety/SOSButton';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { formatCurrency, formatDuration, getInitials } from '../../utils/formatters';
import { getUser } from '../../data/users';
import { getVehicle } from '../../data/vehicles';

export const LiveTrip: React.FC = () => {
  const navigate = useNavigate();
  const { activeTrip, tracking, updateTripStatus } = useTrip();
  const { isActive: guardianActive } = useGuardian();
  const [timeRemaining, setTimeRemaining] = useState(32);
  const [distRemaining, setDistRemaining] = useState(7.2);

  const driver = activeTrip ? getUser(activeTrip.driverId) : null;
  const vehicle = activeTrip ? getVehicle(activeTrip.vehicleId) : null;

  // Simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(t => Math.max(0, t - 1));
      setDistRemaining(d => Math.max(0, d - 0.2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleComplete = () => {
    if (activeTrip) updateTripStatus(activeTrip.id, 'completed');
    navigate('/safe-arrival');
  };

  if (!activeTrip) {
    return (
      <div className="page" style={{ textAlign: 'center', paddingTop: 'var(--space-5xl)' }}>
        <p className="text-secondary">No active trip</p>
        <Button variant="primary" onClick={() => navigate('/')} className="mt-lg">Go Home</Button>
      </div>
    );
  }

  return (
    <div className="page page-full" id="live-trip-page">
      {/* Map area */}
      <MapCard from={activeTrip.origin.name} to={activeTrip.destination.name} tall />

      <div style={{ padding: 'var(--space-lg)' }}>
        {/* Live status */}
        <Card className="mb-lg" style={{ borderLeft: '4px solid var(--teal)' }}>
          <div className="flex items-center justify-between mb-sm">
            <span className="badge badge-teal">● Live Trip</span>
            <span className="font-bold">{activeTrip.tripCode}</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-sm">
              <Clock size={16} color="var(--text-tertiary)" />
              <span className="font-semibold">{formatDuration(timeRemaining)} left</span>
            </div>
            <div className="flex items-center gap-sm">
              <MapPin size={16} color="var(--text-tertiary)" />
              <span className="font-semibold">{distRemaining.toFixed(1)} km left</span>
            </div>
            <div className="flex items-center gap-sm">
              <Navigation size={16} color="var(--text-tertiary)" />
              <span>{tracking?.speed || 32} km/h</span>
            </div>
          </div>
          {/* Progress */}
          <div className="progress-bar mt-md">
            <div className="progress-fill" style={{ width: `${Math.max(5, 100 - (distRemaining / 7.2 * 100))}%` }} />
          </div>
        </Card>

        {/* Driver info */}
        {driver && vehicle && (
          <Card compact className="mb-lg">
            <div className="flex items-center gap-md">
              <div className="avatar">{getInitials(driver.name)}</div>
              <div className="flex-1">
                <div className="font-semibold">{driver.name}</div>
                <div className="text-sm text-secondary">{vehicle.color} {vehicle.make} {vehicle.model} • {vehicle.registrationNumber}</div>
              </div>
              <a href={`tel:${driver.phone}`} className="btn btn-outline btn-sm btn-icon">
                <Phone size={16} />
              </a>
            </div>
          </Card>
        )}

        {/* Guardian */}
        <div className="mb-lg">
          <GuardianStatus />
        </div>

        {/* Route deviation warning (demo) */}
        <Card variant="warning" compact className="mb-lg" onClick={() => navigate('/route-deviation')} style={{ cursor: 'pointer' }}>
          <div className="flex items-center gap-md">
            <AlertTriangle size={20} color="var(--warning)" />
            <div className="flex-1">
              <div className="font-semibold text-sm">Demo: Simulate Route Deviation</div>
              <div className="text-sm" style={{ color: '#92400E' }}>Tap to see AI safety detection</div>
            </div>
          </div>
        </Card>

        {/* SOS */}
        <div className="flex flex-col items-center gap-lg mt-xl mb-xl">
          <SOSButton tripId={activeTrip.id} />
        </div>

        {/* Complete Trip (demo) */}
        <Button variant="success" size="lg" fullWidth onClick={handleComplete}>
          Complete Trip (Demo)
        </Button>
      </div>
    </div>
  );
};
