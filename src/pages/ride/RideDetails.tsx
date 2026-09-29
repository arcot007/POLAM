// Ride Details page
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getRide } from '../../data/rides';
import { getUser } from '../../data/users';
import { getVehicle } from '../../data/vehicles';
import { RideDetailsCard } from '../../components/ride/RideDetailsCard';
import { DriverVehicleCard } from '../../components/ride/DriverVehicleCard';
import { FareCard } from '../../components/ride/FareCard';
import { MapCard } from '../../components/location/MapCard';
import { Button } from '../../components/common/Button';

export const RideDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const ride = getRide(id || 'ride-001');
  const driver = ride ? getUser(ride.driverId) : null;
  const vehicle = ride ? getVehicle(ride.vehicleId) : null;

  if (!ride || !driver || !vehicle) return <div className="page"><p>Ride not found</p></div>;

  return (
    <div className="page" id="ride-details-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Ride Details</h1>
      </div>

      <MapCard from={ride.origin.name} to={ride.destination.name} tall className="mb-xl" />
      <div className="flex flex-col gap-lg">
        <DriverVehicleCard driver={driver} vehicle={vehicle} />
        <RideDetailsCard ride={ride} />
        <FareCard passengerShare={85} totalFare={ride.totalFare} savings={35} distance={7.2} />
        <Button variant="primary" size="lg" fullWidth onClick={() => navigate('/find-ride')}>
          Book This Ride
        </Button>
      </div>
    </div>
  );
};
