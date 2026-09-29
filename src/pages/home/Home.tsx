// Home page — main landing screen
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Clock, TrendingDown, Shield, Sparkles, ArrowRight, Users } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useJourney } from '../../hooks/useJourney';
import { useTrip } from '../../hooks/useTrip';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { MapCard } from '../../components/location/MapCard';
import { GuardianStatus } from '../../components/safety/GuardianStatus';
import { getTimeGreeting, formatCurrency } from '../../utils/formatters';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { loadDemoJourney } = useJourney();
  const { pastTrips } = useTrip();

  const handleQuickSearch = () => {
    loadDemoJourney();
    navigate('/find-ride');
  };

  return (
    <div className="page" id="home-page">
      {/* Greeting */}
      <div className="mb-xl" style={{ animation: 'fadeInUp 0.4s ease' }}>
        <h1 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700, marginBottom: 'var(--space-xs)' }}>
          {getTimeGreeting()}, {user?.name?.split(' ')[0] || 'there'} 👋
        </h1>
        <p className="text-secondary">Where are you heading today?</p>
      </div>

      {/* Quick Search Card */}
      <Card className="mb-xl" style={{ animation: 'fadeInUp 0.4s ease 0.1s both' }}>
        <div
          className="flex items-center gap-md"
          onClick={() => navigate('/find-ride')}
          style={{ cursor: 'pointer', padding: 'var(--space-sm) 0' }}
          id="quick-search"
        >
          <div style={{
            width: 44, height: 44, borderRadius: 'var(--radius-full)',
            background: 'var(--teal-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Search size={20} color="var(--teal)" />
          </div>
          <div className="flex-1">
            <div className="font-medium" style={{ color: 'var(--text-tertiary)' }}>Where to?</div>
          </div>
          <ArrowRight size={18} color="var(--text-tertiary)" />
        </div>

        <div className="divider divider-sm" />

        {/* Saved places */}
        {user?.savedPlaces.map(place => (
          <div
            key={place.id}
            className="flex items-center gap-md"
            style={{ padding: 'var(--space-sm) 0', cursor: 'pointer' }}
            onClick={handleQuickSearch}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 'var(--radius-full)',
              background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <MapPin size={16} color={place.type === 'home' ? 'var(--navy)' : 'var(--teal)'} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">{place.name}</div>
              <div className="text-sm text-secondary truncate">{place.address}</div>
            </div>
          </div>
        ))}
      </Card>

      {/* Demo Quick Action */}
      <Card variant="teal" className="mb-xl" style={{ animation: 'fadeInUp 0.4s ease 0.15s both', cursor: 'pointer' }} onClick={handleQuickSearch}>
        <div className="flex items-center gap-md">
          <Sparkles size={24} />
          <div className="flex-1">
            <div className="font-bold">Try AI Ride Matching</div>
            <div style={{ opacity: 0.85, fontSize: 'var(--font-sm)' }}>Taramani → Guindy • ₹85 • Save ₹35</div>
          </div>
          <ArrowRight size={20} />
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="flex gap-md mb-xl" style={{ animation: 'fadeInUp 0.4s ease 0.2s both' }}>
        <Card compact className="flex-1" style={{ textAlign: 'center' }}>
          <div className="text-2xl font-bold text-teal">{user?.totalTrips || 0}</div>
          <div className="text-sm text-secondary">Rides Taken</div>
        </Card>
        <Card compact className="flex-1" style={{ textAlign: 'center' }}>
          <div className="text-2xl font-bold" style={{ color: 'var(--success)' }}>{formatCurrency(user?.totalSavings || 0)}</div>
          <div className="text-sm text-secondary">Total Saved</div>
        </Card>
        <Card compact className="flex-1" style={{ textAlign: 'center' }}>
          <div className="text-2xl font-bold" style={{ color: 'var(--navy)' }}>{user?.rating || 0}★</div>
          <div className="text-sm text-secondary">Rating</div>
        </Card>
      </div>

      {/* Guardian Status */}
      <div className="section" style={{ animation: 'fadeInUp 0.4s ease 0.25s both' }}>
        <div className="section-header">
          <h2 className="section-title">Safety</h2>
          <button className="section-action" onClick={() => navigate('/safety')}>View all</button>
        </div>
        <GuardianStatus />
      </div>

      {/* Recent Trips */}
      {pastTrips.length > 0 && (
        <div className="section" style={{ animation: 'fadeInUp 0.4s ease 0.3s both' }}>
          <div className="section-header">
            <h2 className="section-title">Recent Trips</h2>
            <button className="section-action" onClick={() => navigate('/my-trips')}>See all</button>
          </div>
          {pastTrips.slice(0, 2).map(trip => (
            <Card key={trip.id} compact clickable onClick={() => navigate(`/my-trips/${trip.id}`)} className="mb-sm">
              <div className="flex items-center gap-md">
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-md)',
                  background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <MapPin size={18} color="var(--teal)" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{trip.origin.name} → {trip.destination.name}</div>
                  <div className="text-sm text-secondary flex items-center gap-sm">
                    <Clock size={11} /> {new Date(trip.departureTime).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                    <span>•</span>
                    <span>{formatCurrency(trip.totalFare)}</span>
                  </div>
                </div>
                <span className="badge badge-verified">Completed</span>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* How it works */}
      <div className="section" style={{ animation: 'fadeInUp 0.4s ease 0.35s both' }}>
        <h2 className="section-title mb-md">How POLAM Works</h2>
        <div className="flex flex-col gap-md">
          {[
            { icon: <Search size={20} />, title: 'Search Your Route', desc: 'Enter pickup & destination' },
            { icon: <Sparkles size={20} />, title: 'AI Matches Rides', desc: 'Smart matching with verified co-riders' },
            { icon: <TrendingDown size={20} />, title: 'Save 40-60%', desc: 'Share ride costs fairly' },
            { icon: <Shield size={20} />, title: 'Travel Safely', desc: 'Guardian mode, SOS, verified drivers' },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-md">
              <div style={{
                width: 44, height: 44, borderRadius: 'var(--radius-full)',
                background: 'var(--teal-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--teal)', flexShrink: 0,
              }}>{step.icon}</div>
              <div>
                <div className="font-semibold text-sm">{step.title}</div>
                <div className="text-sm text-secondary">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
