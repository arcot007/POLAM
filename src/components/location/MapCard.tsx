// MapCard component — visual map placeholder
import React from 'react';

interface MapCardProps {
  from?: string;
  to?: string;
  tall?: boolean;
  className?: string;
}

export const MapCard: React.FC<MapCardProps> = ({ from, to, tall = false, className = '' }) => (
  <div className={`map-container ${tall ? 'tall' : ''} ${className}`}>
    <div className="map-route-line" />
    {from && to && (
      <div style={{
        position: 'absolute', bottom: 12, left: 12, right: 12,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 'var(--font-xs)', color: 'var(--text-secondary)',
      }}>
        <span style={{ background: 'rgba(255,255,255,0.9)', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>{from}</span>
        <span style={{ background: 'rgba(255,255,255,0.9)', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>{to}</span>
      </div>
    )}
  </div>
);
