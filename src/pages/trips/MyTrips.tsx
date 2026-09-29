// My Trips page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { EmptyState } from '../../components/common/EmptyState';
import { useTrip } from '../../hooks/useTrip';
import { formatCurrency } from '../../utils/formatters';

export const MyTrips: React.FC = () => {
  const navigate = useNavigate();
  const { trips } = useTrip();
  const [tab, setTab] = useState<'all' | 'completed' | 'cancelled'>('all');

  const filtered = tab === 'all' ? trips : trips.filter(t => t.status === tab);

  return (
    <div className="page" id="my-trips-page">
      <h1 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700, marginBottom: 'var(--space-xl)' }}>My Trips</h1>

      <div className="tabs mb-xl">
        {(['all', 'completed', 'cancelled'] as const).map(t => (
          <button key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={<MapPin size={48} />}
          title="No trips yet"
          description="Your trip history will appear here"
          actionLabel="Find a Ride"
          onAction={() => navigate('/find-ride')}
        />
      ) : (
        <div className="flex flex-col gap-md">
          {filtered.map((trip, i) => (
            <Card
              key={trip.id}
              compact
              clickable
              onClick={() => navigate(`/my-trips/${trip.id}`)}
              style={{ animation: `fadeInUp 0.3s ease ${i * 0.05}s both` }}
            >
              <div className="flex items-center gap-md mb-sm">
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-md)',
                  background: trip.status === 'completed' ? 'var(--success-light)' : 'var(--emergency-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {trip.status === 'completed'
                    ? <CheckCircle size={20} color="var(--success)" />
                    : <XCircle size={20} color="var(--emergency)" />
                  }
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{trip.origin.name} → {trip.destination.name}</div>
                  <div className="flex items-center gap-sm text-sm text-secondary">
                    <Clock size={11} />
                    <span>{new Date(trip.departureTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{formatCurrency(trip.totalFare)}</div>
                  <span className={`badge ${trip.status === 'completed' ? 'badge-verified' : 'badge-emergency'}`}>
                    {trip.status}
                  </span>
                </div>
              </div>
              <div className="text-sm text-secondary">
                Trip Code: <span className="font-semibold">{trip.tripCode}</span> • {trip.totalDistance} km
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
