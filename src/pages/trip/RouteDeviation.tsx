// Route Deviation — AI-detected route deviation alert
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Shield, Phone, MapPin } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { SOSButton } from '../../components/safety/SOSButton';

export const RouteDeviation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page" id="route-deviation-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Route Alert</h1>
      </div>

      <Card variant="emergency" className="mb-xl" style={{ animation: 'fadeInUp 0.3s ease' }}>
        <div className="flex items-center gap-md mb-md">
          <AlertTriangle size={24} color="var(--emergency)" />
          <div>
            <h2 className="font-bold">Route Deviation Detected</h2>
            <p className="text-sm" style={{ color: 'var(--emergency)' }}>AI detected a 800m deviation from planned route</p>
          </div>
        </div>
        <div className="flex flex-col gap-sm text-sm">
          <div className="flex items-center gap-sm">
            <MapPin size={14} /> <span>Current: Perungudi Signal (off-route)</span>
          </div>
          <div className="flex items-center gap-sm">
            <MapPin size={14} /> <span>Expected: Taramani Link Road</span>
          </div>
        </div>
      </Card>

      <Card className="mb-xl" style={{ animation: 'fadeInUp 0.3s ease 0.1s both' }}>
        <div className="flex items-center gap-md mb-md">
          <Shield size={20} color="var(--teal)" />
          <h3 className="font-semibold">AI Safety Response</h3>
        </div>
        <div className="flex flex-col gap-sm text-sm text-secondary">
          <p>✅ Guardian contacts have been notified automatically</p>
          <p>✅ Your live location is being shared with emergency contacts</p>
          <p>✅ Route monitoring is on high-alert mode</p>
          <p>⏳ Waiting for driver to return to planned route...</p>
        </div>
      </Card>

      <div className="flex flex-col gap-md mb-xl">
        <Button variant="outline" fullWidth icon={<Phone size={16} />}>Call Driver</Button>
        <Button variant="secondary" fullWidth onClick={() => navigate('/live-trip')}>Back to Trip</Button>
      </div>

      <div className="flex flex-col items-center mt-xl">
        <SOSButton tripId="trip-live" />
      </div>
    </div>
  );
};
