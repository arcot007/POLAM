// SafePickupCard — AI-suggested safe pickup locations
import React from 'react';
import { SafePickupSuggestion } from '../../models/RideMatch';
import { Shield, MapPin } from 'lucide-react';

interface SafePickupCardProps {
  pickup: SafePickupSuggestion;
  selected?: boolean;
  onClick?: () => void;
}

const typeLabels: Record<string, string> = {
  main_road: '🛣️ Main Road',
  college_gate: '🏫 College Gate',
  bus_stop: '🚏 Bus Stop',
  metro_station: '🚇 Metro Station',
  shop: '🏪 Shop',
  public_building: '🏢 Public Building',
  well_lit: '💡 Well-Lit Area',
};

export const SafePickupCard: React.FC<SafePickupCardProps> = ({ pickup, selected, onClick }) => (
  <div
    className={`card card-compact card-clickable`}
    onClick={onClick}
    style={{
      border: selected ? '2px solid var(--success)' : '1px solid var(--border)',
      background: selected ? 'var(--success-light)' : undefined,
    }}
    id={`pickup-${pickup.type}`}
  >
    <div className="flex items-center gap-md mb-sm">
      <MapPin size={18} color={selected ? 'var(--success)' : 'var(--teal)'} />
      <span className="font-semibold flex-1">{pickup.name}</span>
      <span className="text-sm text-secondary">{pickup.distanceFromUser}m walk</span>
    </div>
    <div className="text-sm text-secondary mb-sm">{typeLabels[pickup.type] || pickup.type}</div>
    <div className="flex flex-wrap gap-xs">
      {pickup.safetyFeatures.map((f, i) => (
        <span key={i} className="badge badge-verified" style={{ fontSize: 'var(--font-xs)' }}>
          <Shield size={10} /> {f}
        </span>
      ))}
    </div>
  </div>
);
