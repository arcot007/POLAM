// Route Comparison — compare transport options
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useJourney } from '../../hooks/useJourney';
import { RouteCard } from '../../components/location/RouteCard';
import { formatCurrency, formatDuration } from '../../utils/formatters';

export const RouteComparison: React.FC = () => {
  const navigate = useNavigate();
  const { transportOptions, pickup, destination } = useJourney();

  return (
    <div className="page" id="route-comparison-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Compare Routes</h1>
      </div>

      <p className="text-secondary mb-lg">
        {pickup?.name || 'Taramani'} → {destination?.name || 'Guindy'} — all available options
      </p>

      <div className="flex flex-col gap-md mb-xl">
        {transportOptions.map(option => (
          <RouteCard
            key={option.id}
            option={option}
            selected={option.recommended}
            onClick={() => option.mode === 'polam' && navigate('/ai-matching')}
          />
        ))}
      </div>

      {/* Comparison table */}
      <div className="card mb-xl">
        <h3 className="section-title mb-md">Side-by-Side Comparison</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Mode</th>
                <th>Cost</th>
                <th>Time</th>
                <th>Safety</th>
                <th>Eco</th>
              </tr>
            </thead>
            <tbody>
              {transportOptions.map(opt => (
                <tr key={opt.id} className={opt.recommended ? 'recommended' : ''}>
                  <td>{opt.label}</td>
                  <td className="font-semibold">{formatCurrency(opt.cost)}</td>
                  <td>{formatDuration(opt.duration)}</td>
                  <td>{'★'.repeat(opt.safetyRating)}{'☆'.repeat(5 - opt.safetyRating)}</td>
                  <td>{opt.environmentalImpact === 'low' ? '🌿' : opt.environmentalImpact === 'medium' ? '🌤️' : '🏭'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
