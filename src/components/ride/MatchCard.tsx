// MatchCard — shows an AI-matched ride
import React from 'react';
import { RideMatch } from '../../models/RideMatch';
import { getUser } from '../../data/users';
import { getVehicle } from '../../data/vehicles';
import { getRide } from '../../data/rides';
import { formatCurrency, formatDuration, getInitials } from '../../utils/formatters';
import { CheckCircle, Clock, MapPin, Star, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

interface MatchCardProps {
  match: RideMatch;
  onSelect: (match: RideMatch) => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match, onSelect }) => {
  const ride = getRide(match.rideId);
  const driver = ride ? getUser(ride.driverId) : null;
  const vehicle = ride ? getVehicle(ride.vehicleId) : null;

  if (!ride || !driver) return null;

  return (
    <div className="card" id={`match-card-${match.id}`} style={{ animation: `fadeInUp 0.4s ease ${match.rank * 0.1}s both` }}>
      {/* Match score header */}
      <div className="flex items-center justify-between mb-md">
        <div className="flex items-center gap-sm">
          <span className="badge badge-match">
            <Sparkles size={12} /> {match.matchPercentage}% Match
          </span>
          <span className="text-sm text-secondary">Rank #{match.rank}</span>
        </div>
        <div className="text-right">
          <div className="fare-amount" style={{ fontSize: 'var(--font-xl)' }}>{formatCurrency(match.passengerShare)}</div>
          {match.estimatedSavings > 0 && (
            <div className="fare-saved">Save {formatCurrency(match.estimatedSavings)} vs auto</div>
          )}
        </div>
      </div>

      {/* Driver info */}
      <div className="flex items-center gap-md mb-md">
        <div className="avatar">
          {getInitials(driver.name)}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-sm">
            <span className="font-semibold">{driver.name}</span>
            {driver.verifications.some(v => v.status === 'verified') && (
              <CheckCircle size={14} color="var(--success)" fill="var(--success-light)" />
            )}
          </div>
          <div className="flex items-center gap-sm text-sm text-secondary">
            <Star size={12} fill="var(--warning)" color="var(--warning)" />
            <span>{driver.rating}</span>
            <span>•</span>
            <span>{driver.totalTrips} trips</span>
          </div>
        </div>
        {vehicle && (
          <div className="text-right text-sm">
            <div className="font-medium">{vehicle.make} {vehicle.model}</div>
            <div className="text-secondary">{vehicle.color} • {vehicle.isAC ? 'AC' : 'Non-AC'}</div>
          </div>
        )}
      </div>

      {/* Route info */}
      <div className="flex items-center gap-md mb-md" style={{ padding: 'var(--space-sm) 0' }}>
        <div className="route-indicator">
          <div className="route-dot" />
          <div className="route-line" />
          <div className="route-dot destination" />
        </div>
        <div className="flex-1 flex flex-col gap-sm">
          <div className="text-sm">{ride.origin.name}</div>
          <div className="text-sm">{ride.destination.name}</div>
        </div>
        <div className="text-right text-sm text-secondary">
          <div className="flex items-center gap-xs"><Clock size={12} /> {formatDuration(match.passengerDuration)}</div>
          <div className="flex items-center gap-xs"><MapPin size={12} /> {match.passengerDistance} km</div>
        </div>
      </div>

      {/* Match reasons */}
      <div className="flex flex-col gap-xs mb-md">
        {match.matchReasons.slice(0, 3).map((reason, i) => (
          <div key={i} className="flex items-center gap-sm text-sm text-secondary">
            <CheckCircle size={12} color="var(--teal)" />
            <span>{reason}</span>
          </div>
        ))}
      </div>

      <Button variant="primary" fullWidth onClick={() => onSelect(match)} size="lg">
        Select This Ride
      </Button>
    </div>
  );
};
