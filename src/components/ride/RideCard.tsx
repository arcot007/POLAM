// RideCard — compact ride listing card
import React from 'react';
import { Ride } from '../../models/Ride';
import { getUser } from '../../data/users';
import { getVehicle } from '../../data/vehicles';
import { formatCurrency, formatTime, getInitials } from '../../utils/formatters';
import { Clock, Users, Star, CheckCircle } from 'lucide-react';

interface RideCardProps {
  ride: Ride;
  onClick?: () => void;
}

export const RideCard: React.FC<RideCardProps> = ({ ride, onClick }) => {
  const driver = getUser(ride.driverId);
  const vehicle = getVehicle(ride.vehicleId);

  return (
    <div className="card card-compact card-clickable" onClick={onClick} id={`ride-${ride.id}`}>
      <div className="flex items-center gap-md">
        <div className="avatar">
          {driver ? getInitials(driver.name) : '?'}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-sm">
            <span className="font-semibold">{driver?.name || 'Driver'}</span>
            {driver?.verifications.some(v => v.status === 'verified') && (
              <CheckCircle size={12} color="var(--success)" />
            )}
          </div>
          <div className="flex items-center gap-sm text-sm text-secondary">
            <Star size={11} fill="var(--warning)" color="var(--warning)" /> {driver?.rating || 0}
            <span>•</span>
            {vehicle?.make} {vehicle?.model}
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold">{formatCurrency(ride.totalFare)}</div>
          <div className="text-sm text-secondary">{ride.totalDistance} km</div>
        </div>
      </div>

      <div className="divider divider-sm" />

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-sm">
          <div className="route-dot" style={{ width: 8, height: 8 }} />
          <span>{ride.origin.name}</span>
          <span className="text-tertiary">→</span>
          <div className="route-dot destination" style={{ width: 8, height: 8 }} />
          <span>{ride.destination.name}</span>
        </div>
        <div className="flex items-center gap-md text-secondary">
          <span className="flex items-center gap-xs"><Clock size={12} /> {formatTime(ride.departureTime)}</span>
          <span className="flex items-center gap-xs"><Users size={12} /> {ride.availableSeats}</span>
        </div>
      </div>

      <div className="flex gap-xs mt-sm">
        {ride.isVerifiedOnly && <span className="badge badge-verified">Verified Only</span>}
        {ride.isWomenOnly && <span className="badge badge-women-safety">Women Only</span>}
        {ride.isCommunityRide && <span className="badge badge-teal">Community</span>}
        {vehicle?.isAC && <span className="badge badge-navy">AC</span>}
      </div>
    </div>
  );
};
