// Ratings page — placeholder
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Rating } from '../../components/common/Rating';

export const Ratings: React.FC = () => {
  const navigate = useNavigate();

  const pastRatings = [
    { tripCode: 'POLAM1234', driver: 'Arun Selvam', rating: 5, date: '18 Dec 2024' },
    { tripCode: 'POLAM1567', driver: 'Kavitha Rajan', rating: 4, date: '15 Dec 2024' },
  ];

  return (
    <div className="page" id="ratings-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>My Ratings</h1>
      </div>

      <div className="flex flex-col gap-md">
        {pastRatings.map((r, i) => (
          <Card key={i} compact>
            <div className="flex items-center gap-md">
              <div className="flex-1">
                <div className="font-semibold">{r.driver}</div>
                <div className="text-sm text-secondary">{r.tripCode} • {r.date}</div>
              </div>
              <Rating value={r.rating} readonly size={16} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
