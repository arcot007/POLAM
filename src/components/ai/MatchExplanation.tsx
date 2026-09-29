// MatchExplanation — AI explains why a ride matches
import React from 'react';
import { RideMatch } from '../../models/RideMatch';
import { Sparkles, CheckCircle, Shield, Clock, MapPin, Wallet } from 'lucide-react';

interface Props {
  match: RideMatch;
}

export const MatchExplanation: React.FC<Props> = ({ match }) => (
  <div className="card" style={{ background: 'linear-gradient(135deg, rgba(25,167,168,0.04), rgba(18,59,93,0.04))' }}>
    <div className="flex items-center gap-sm mb-md">
      <Sparkles size={18} color="var(--teal)" />
      <span className="font-semibold">AI Match Explanation</span>
    </div>

    <div className="flex flex-col gap-md">
      <div className="flex items-center gap-sm">
        <MapPin size={14} color="var(--teal)" />
        <span className="text-sm">{match.routeOverlap}% route overlap with your journey</span>
      </div>
      <div className="flex items-center gap-sm">
        <Clock size={14} color="var(--teal)" />
        <span className="text-sm">{match.departureDifference} min departure difference</span>
      </div>
      <div className="flex items-center gap-sm">
        <Wallet size={14} color="var(--teal)" />
        <span className="text-sm">₹{match.estimatedSavings} savings vs solo ride</span>
      </div>
      <div className="flex items-center gap-sm">
        <Shield size={14} color="var(--teal)" />
        <span className="text-sm">Safety score: {match.safetyScore}/100</span>
      </div>

      <div className="divider divider-sm" />

      {match.matchReasons.map((reason, i) => (
        <div key={i} className="flex items-center gap-sm text-sm">
          <CheckCircle size={12} color="var(--success)" />
          <span>{reason}</span>
        </div>
      ))}
    </div>
  </div>
);
