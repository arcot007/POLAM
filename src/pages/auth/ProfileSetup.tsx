// Profile Setup page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../hooks/useAuth';

export const ProfileSetup: React.FC = () => {
  const navigate = useNavigate();
  const { updateProfile } = useAuth();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSetup = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    updateProfile({ name, gender: gender as 'male' | 'female' | 'other' | 'prefer_not_to_say' });
    navigate('/');
    setLoading(false);
  };

  return (
    <div className="page">
      <button className="page-back-btn mb-xl" onClick={() => navigate(-1)} style={{ alignSelf: 'flex-start' }}>
        <ArrowLeft size={20} />
      </button>

      <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
        <div className="avatar avatar-xl" style={{ margin: '0 auto var(--space-lg)' }}>
          <User size={32} />
        </div>
        <h1 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700 }}>Set Up Profile</h1>
        <p className="text-secondary">Tell us a bit about yourself</p>
      </div>

      <div className="flex flex-col gap-xl">
        <div className="input-group">
          <label className="input-label">Full Name</label>
          <input className="input" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="input-group">
          <label className="input-label">Gender</label>
          <div className="flex gap-sm flex-wrap">
            {['Female', 'Male', 'Other', 'Prefer not to say'].map(g => (
              <button
                key={g}
                className={`chip ${gender === g.toLowerCase().replace(/ /g, '_') ? 'selected' : ''}`}
                onClick={() => setGender(g.toLowerCase().replace(/ /g, '_'))}
              >{g}</button>
            ))}
          </div>
        </div>

        <Button variant="primary" size="lg" fullWidth onClick={handleSetup} loading={loading} disabled={!name}>
          Complete Setup
        </Button>
      </div>
    </div>
  );
};
