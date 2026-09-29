// AI Ride Matching — shows matched rides
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { useJourney } from '../../hooks/useJourney';
import { MatchCard } from '../../components/ride/MatchCard';
import { LoadingState } from '../../components/common/LoadingState';
import { Button } from '../../components/common/Button';

export const AIRideMatching: React.FC = () => {
  const navigate = useNavigate();
  const { matches, selectMatch, step, pickup, destination } = useJourney();

  const handleSelect = (match: typeof matches[0]) => {
    selectMatch(match);
    navigate('/safe-pickup');
  };

  if (step === 'searching') {
    return (
      <div className="page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <div style={{
          width: 80, height: 80, borderRadius: 'var(--radius-full)',
          background: 'linear-gradient(135deg, var(--teal), var(--navy))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 'var(--space-xl)', animation: 'pulse 2s infinite',
        }}>
          <Sparkles size={36} color="white" />
        </div>
        <h2 className="font-bold text-lg mb-sm">AI is finding your rides...</h2>
        <p className="text-secondary text-center" style={{ maxWidth: 280 }}>
          Analyzing route overlap, driver ratings, safety scores, and fare splits
        </p>
        <div className="progress-bar mt-xl" style={{ width: '80%' }}>
          <div className="progress-fill" style={{ width: '70%', animation: 'shimmer 1.5s infinite' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="page" id="ai-matching-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Ride Matches</h1>
      </div>

      {/* Route summary */}
      <div className="card card-navy mb-xl" style={{ animation: 'fadeInUp 0.3s ease' }}>
        <div className="flex items-center gap-md">
          <div className="route-indicator">
            <div className="route-dot" style={{ background: 'var(--teal)', boxShadow: '0 0 0 2px var(--teal)' }} />
            <div className="route-line" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <div className="route-dot" style={{ background: 'white', boxShadow: '0 0 0 2px white' }} />
          </div>
          <div className="flex-1">
            <div className="text-sm" style={{ opacity: 0.7 }}>From</div>
            <div className="font-semibold">{pickup?.name || 'Taramani'}</div>
            <div className="text-sm mt-sm" style={{ opacity: 0.7 }}>To</div>
            <div className="font-semibold">{destination?.name || 'Guindy'}</div>
          </div>
          <div className="badge badge-match">
            <Sparkles size={12} /> {matches.length} matches
          </div>
        </div>
      </div>

      {/* Compare routes button */}
      <Button
        variant="outline"
        fullWidth
        onClick={() => navigate('/route-comparison')}
        className="mb-xl"
        icon={<Sparkles size={16} />}
      >
        Compare All Transport Options
      </Button>

      {/* Match cards */}
      <div className="flex flex-col gap-lg">
        {matches.map(match => (
          <MatchCard key={match.id} match={match} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};
