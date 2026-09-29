// RideDetailsCard — shows ride summary details
import React from 'react';
import { Ride } from '../../models/Ride';
import { formatTime, formatDuration, formatCurrency } from '../../utils/formatters';
import { Clock, MapPin, Users } from 'lucide-react';

interface Props {
  ride: Ride;
}

export const RideDetailsCard: React.FC<Props> = ({ ride }) => (
  <div className="card">
    <h3 className="section-title mb-md">Ride Details</h3>

    <div className="flex items-center gap-md mb-lg">
      <div className="route-indicator">
        <div className="route-dot" />
        <div className="route-line" />
        <div className="route-dot destination" />
      </div>
      <div className="flex-1 flex flex-col gap-md">
        <div>
          <div className="font-medium">{ride.origin.name}</div>
          <div className="text-sm text-secondary">{ride.origin.address}</div>
        </div>
        <div>
          <div className="font-medium">{ride.destination.name}</div>
          <div className="text-sm text-secondary">{ride.destination.address}</div>
        </div>
      </div>
    </div>

    <div className="flex justify-between">
      <div className="flex items-center gap-sm text-sm">
        <Clock size={14} color="var(--text-tertiary)" />
        <span>{formatTime(ride.departureTime)} → {formatTime(ride.estimatedArrivalTime)}</span>
      </div>
      <div className="flex items-center gap-sm text-sm">
        <MapPin size={14} color="var(--text-tertiary)" />
        <span>{ride.totalDistance} km • {formatDuration(ride.totalDuration)}</span>
      </div>
    </div>

    <div className="flex gap-sm mt-md">
      <div className="flex items-center gap-xs text-sm">
        <Users size={14} />
        <span>{ride.availableSeats} seats available</span>
      </div>
      <span className="font-bold">{formatCurrency(ride.totalFare)}</span>
    </div>
  </div>
);
