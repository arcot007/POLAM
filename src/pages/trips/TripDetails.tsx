// Trip Details page
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, User, Car, Shield, CheckCircle } from 'lucide-react';
import { getTrip } from '../../data/trips';
import { getUser } from '../../data/users';
import { getVehicle } from '../../data/vehicles';
import { MapCard } from '../../components/location/MapCard';
import { Button } from '../../components/common/Button';
import { formatCurrency, formatTime } from '../../utils/formatters';

export const TripDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const trip = getTrip(id || 'trip-001');
  const driver = trip ? getUser(trip.driverId) : null;
  const vehicle = trip ? getVehicle(trip.vehicleId) : null;

  if (!trip) return <div className="page"><p>Trip not found</p></div>;

  return (
    <div className="page" id="trip-details-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Trip Details</h1>
      </div>

      <div className="flex items-center gap-sm mb-lg">
        <span className="badge badge-verified"><CheckCircle size={12} /> {trip.status}</span>
        <span className="font-bold">{trip.tripCode}</span>
      </div>

      <MapCard from={trip.origin.name} to={trip.destination.name} className="mb-xl" />

      <div className="card mb-lg">
        <div className="flex flex-col gap-md">
          <div className="flex items-center gap-sm"><MapPin size={14} color="var(--teal)" /> <span className="text-sm"><strong>From:</strong> {trip.origin.name}</span></div>
          <div className="flex items-center gap-sm"><MapPin size={14} color="var(--navy)" /> <span className="text-sm"><strong>To:</strong> {trip.destination.name}</span></div>
          <div className="flex items-center gap-sm"><Clock size={14} color="var(--text-tertiary)" /> <span className="text-sm">{trip.actualDeparture ? formatTime(trip.actualDeparture) : ''} → {trip.actualArrival ? formatTime(trip.actualArrival) : ''}</span></div>
          {driver && <div className="flex items-center gap-sm"><User size={14} color="var(--text-tertiary)" /> <span className="text-sm">{driver.name} ({driver.rating}★)</span></div>}
          {vehicle && <div className="flex items-center gap-sm"><Car size={14} color="var(--text-tertiary)" /> <span className="text-sm">{vehicle.color} {vehicle.make} {vehicle.model}</span></div>}
          {trip.guardianEnabled && <div className="flex items-center gap-sm"><Shield size={14} color="var(--success)" /> <span className="text-sm text-success">Guardian Mode was active</span></div>}
        </div>
      </div>

      <div className="card mb-xl">
        <div className="flex justify-between mb-sm">
          <span className="text-secondary">Distance</span>
          <span className="font-semibold">{trip.totalDistance} km</span>
        </div>
        <div className="flex justify-between mb-sm">
          <span className="text-secondary">Total Fare</span>
          <span className="font-bold text-lg">{formatCurrency(trip.totalFare)}</span>
        </div>
        {trip.participants[0] && (
          <div className="flex justify-between">
            <span className="text-secondary">Your Share</span>
            <span className="font-bold text-teal">{formatCurrency(trip.participants[0].fare)}</span>
          </div>
        )}
      </div>

      <Button variant="outline" fullWidth onClick={() => navigate('/digital-receipt')}>View Receipt</Button>
    </div>
  );
};
