// FareCard — fare breakdown display
import React from 'react';
import { formatCurrency } from '../../utils/formatters';
import { TrendingDown } from 'lucide-react';

interface FareCardProps {
  passengerShare: number;
  totalFare: number;
  savings: number;
  distance: number;
}

export const FareCard: React.FC<FareCardProps> = ({ passengerShare, totalFare, savings, distance }) => (
  <div className="card">
    <div className="flex items-center justify-between mb-md">
      <span className="section-title">Fare Breakdown</span>
      {savings > 0 && (
        <span className="badge badge-verified">
          <TrendingDown size={12} /> Save {formatCurrency(savings)}
        </span>
      )}
    </div>

    <div className="flex flex-col gap-sm">
      <div className="info-row">
        <span className="info-row-label">Your distance</span>
        <span className="info-row-value">{distance} km</span>
      </div>
      <div className="info-row">
        <span className="info-row-label">Total ride fare</span>
        <span className="info-row-value">{formatCurrency(totalFare)}</span>
      </div>
      <div className="info-row">
        <span className="info-row-label">Your share (split)</span>
        <span className="info-row-value font-bold text-lg">{formatCurrency(passengerShare)}</span>
      </div>
      {savings > 0 && (
        <div className="info-row" style={{ borderTop: '1px dashed var(--border)', paddingTop: 'var(--space-md)' }}>
          <span className="info-row-label">Compared to auto</span>
          <span className="info-row-value fare-saved">{formatCurrency(savings)} saved</span>
        </div>
      )}
    </div>
  </div>
);
