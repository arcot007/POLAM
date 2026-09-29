// SOS page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { SOSButton } from '../../components/safety/SOSButton';
import { EmergencyCard } from '../../components/safety/EmergencyCard';
import { useGuardian } from '../../hooks/useGuardian';
import { Button } from '../../components/common/Button';

export const SOS: React.FC = () => {
  const navigate = useNavigate();
  const { contacts } = useGuardian();

  return (
    <div className="page" id="sos-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Emergency SOS</h1>
      </div>

      <div className="flex flex-col items-center mt-xl mb-xl">
        <SOSButton tripId="trip-live" />
      </div>

      <h3 className="section-title mb-md">Emergency Contacts</h3>
      <div className="flex flex-col gap-sm mb-xl">
        {contacts.map(c => <EmergencyCard key={c.id} contact={c} />)}
      </div>

      <Button variant="emergency" fullWidth icon={<Phone size={18} />}>
        Call Police (100)
      </Button>
    </div>
  );
};
