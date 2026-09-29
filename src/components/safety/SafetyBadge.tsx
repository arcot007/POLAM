// SafetyBadge — visual safety score badge
import React from 'react';
import { Shield } from 'lucide-react';

interface SafetyBadgeProps {
  score: number;
  label?: string;
  size?: 'sm' | 'md';
}

export const SafetyBadge: React.FC<SafetyBadgeProps> = ({ score, label = 'Safety Score', size = 'md' }) => {
  const color = score >= 80 ? 'var(--success)' : score >= 60 ? 'var(--warning)' : 'var(--emergency)';

  return (
    <div className="flex items-center gap-sm">
      <div className={`safety-indicator ${score >= 80 ? 'safe' : score >= 60 ? 'warning' : 'danger'}`}>
        <Shield size={size === 'sm' ? 14 : 18} color={color} />
        <span style={{ fontWeight: 600 }}>{score}</span>
      </div>
      {label && <span className="text-sm text-secondary">{label}</span>}
    </div>
  );
};
