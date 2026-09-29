// Location Selector component
import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { CHENNAI_LOCATIONS } from '../../utils/constants';

interface LocationSelectorProps {
  label: string;
  placeholder?: string;
  value: { name: string; address: string; lat: number; lng: number } | null;
  onChange: (loc: { name: string; address: string; lat: number; lng: number }) => void;
  icon?: 'pickup' | 'destination';
}

// Simplified geocoding for demo — map name to lat/lng
const locationCoords: Record<string, { lat: number; lng: number }> = {
  'Taramani': { lat: 12.9862, lng: 80.2433 },
  'Guindy': { lat: 13.0067, lng: 80.2206 },
  'Velachery': { lat: 12.9815, lng: 80.2180 },
  'Adyar': { lat: 13.0063, lng: 80.2574 },
  'Tambaram': { lat: 12.9249, lng: 80.1000 },
  'Anna Nagar': { lat: 13.0850, lng: 80.2101 },
  'T. Nagar': { lat: 13.0418, lng: 80.2341 },
  'Sholinganallur': { lat: 12.9010, lng: 80.2279 },
  'Porur': { lat: 13.0382, lng: 80.1584 },
  'Chrompet': { lat: 12.9516, lng: 80.1418 },
  'Pallavaram': { lat: 12.9675, lng: 80.1497 },
  'Perungudi': { lat: 12.9611, lng: 80.2399 },
  'Kotturpuram': { lat: 13.0120, lng: 80.2420 },
  'Koyambedu': { lat: 13.0694, lng: 80.1948 },
  'Vadapalani': { lat: 13.0501, lng: 80.2124 },
  'Mylapore': { lat: 13.0368, lng: 80.2676 },
  'Thiruvanmiyur': { lat: 12.9830, lng: 80.2594 },
};

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  label,
  placeholder = 'Search location...',
  value,
  onChange,
  icon = 'pickup',
}) => {
  const [query, setQuery] = useState(value?.name || '');
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = CHENNAI_LOCATIONS.filter(loc =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  const selectLocation = (name: string) => {
    const coords = locationCoords[name] || { lat: 13.0, lng: 80.2 };
    onChange({ name, address: `${name}, Chennai`, ...coords });
    setQuery(name);
    setShowDropdown(false);
  };

  return (
    <div className="input-group" style={{ position: 'relative' }}>
      <label className="input-label">{label}</label>
      <div className="input-with-icon">
        <span className="input-icon">
          {icon === 'pickup' ?
            <Navigation size={18} color="var(--teal)" /> :
            <MapPin size={18} color="var(--navy)" />
          }
        </span>
        <input
          className="input"
          placeholder={placeholder}
          value={query}
          onChange={(e) => { setQuery(e.target.value); setShowDropdown(true); }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        />
      </div>
      {showDropdown && filtered.length > 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--bg-white)', borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)', zIndex: 30, maxHeight: 200,
          overflowY: 'auto', border: '1px solid var(--border)',
          marginTop: 4,
        }}>
          {filtered.map(loc => (
            <button
              key={loc}
              className="list-item"
              onClick={() => selectLocation(loc)}
              style={{ width: '100%', textAlign: 'left' }}
            >
              <MapPin size={16} color="var(--text-tertiary)" />
              <div className="list-item-content">
                <div className="list-item-title">{loc}</div>
                <div className="list-item-subtitle">{loc}, Chennai</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
