// DriverVehicleCard — driver & vehicle info card
import React from 'react';
import { User } from '../../models/User';
import { Vehicle } from '../../models/Vehicle';
import { getInitials } from '../../utils/formatters';
import { CheckCircle, Star, Car } from 'lucide-react';

interface Props {
  driver: User;
  vehicle: Vehicle;
}

export const DriverVehicleCard: React.FC<Props> = ({ driver, vehicle }) => (
  <div className="card">
    <div className="flex items-center gap-md mb-md">
      <div className="avatar avatar-lg">{getInitials(driver.name)}</div>
      <div className="flex-1">
        <div className="flex items-center gap-sm">
          <span className="font-bold text-lg">{driver.name}</span>
          <CheckCircle size={16} color="var(--success)" fill="var(--success-light)" />
        </div>
        <div className="flex items-center gap-sm text-sm">
          <Star size={14} fill="var(--warning)" color="var(--warning)" />
          <span className="font-semibold">{driver.rating}</span>
          <span className="text-secondary">• {driver.totalTrips} trips</span>
        </div>
        <div className="flex flex-wrap gap-xs mt-sm">
          {driver.verifications.filter(v => v.status === 'verified').map(v => (
            <span key={v.type} className="badge badge-verified">{v.label}</span>
          ))}
        </div>
      </div>
    </div>
    <div className="divider" />
    <div className="flex items-center gap-md">
      <div style={{
        width: 48, height: 48, borderRadius: 'var(--radius-md)',
        background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Car size={24} color="var(--navy)" />
      </div>
      <div className="flex-1">
        <div className="font-semibold">{vehicle.make} {vehicle.model} ({vehicle.year})</div>
        <div className="text-sm text-secondary">{vehicle.color} • {vehicle.registrationNumber}</div>
      </div>
      <div className="flex flex-col items-end gap-xs">
        {vehicle.isAC && <span className="badge badge-navy">AC</span>}
        {vehicle.isVerified && <span className="badge badge-verified">Verified</span>}
      </div>
    </div>
  </div>
);
