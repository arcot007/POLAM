// Rating component
import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  size?: number;
  readonly?: boolean;
}

export const Rating: React.FC<RatingProps> = ({ value, onChange, size = 18, readonly = false }) => {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={`star ${star <= Math.round(value) ? 'filled' : ''}`}
          onClick={() => !readonly && onChange?.(star)}
          fill={star <= Math.round(value) ? 'currentColor' : 'none'}
          style={{ cursor: readonly ? 'default' : 'pointer' }}
        />
      ))}
    </div>
  );
};

export const RatingBadge: React.FC<{ value: number; count?: number }> = ({ value, count }) => (
  <span className="flex items-center gap-xs">
    <Star size={14} fill="currentColor" className="text-teal" style={{ color: 'var(--warning)' }} />
    <span className="font-semibold">{value.toFixed(1)}</span>
    {count !== undefined && <span className="text-secondary text-sm">({count})</span>}
  </span>
);
