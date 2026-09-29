// Journey Search — the ride search page (/find-ride)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Wallet, Users, Sparkles } from 'lucide-react';
import { Button } from '../../components/common/Button';
import { LocationSelector } from '../../components/location/LocationSelector';
import { useJourney } from '../../hooks/useJourney';

export const JourneySearch: React.FC = () => {
  const navigate = useNavigate();
  const {
    pickup, destination, date, time, budget, passengerCount,
    setPickup, setDestination, setDate, setTime, setBudget, setPassengerCount,
    searchRides, isReady, step,
  } = useJourney();

  const handleSearch = async () => {
    await searchRides();
    navigate('/ai-matching');
  };

  return (
    <div className="page" id="journey-search-page">
      <div className="page-header" style={{ margin: 'calc(-1 * var(--space-lg))', marginBottom: 'var(--space-lg)', padding: 'var(--space-lg)' }}>
        <button className="page-back-btn" onClick={() => navigate(-1)}><ArrowLeft size={20} /></button>
        <h1>Find a Ride</h1>
      </div>

      <div className="flex flex-col gap-xl">
        {/* Location inputs */}
        <LocationSelector
          label="Pickup"
          placeholder="Where from?"
          value={pickup}
          onChange={setPickup}
          icon="pickup"
        />

        <LocationSelector
          label="Destination"
          placeholder="Where to?"
          value={destination}
          onChange={setDestination}
          icon="destination"
        />

        {/* Date & Time */}
        <div className="flex gap-md">
          <div className="input-group flex-1">
            <label className="input-label">Date</label>
            <div className="input-with-icon">
              <Clock size={18} className="input-icon" />
              <select
                className="input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ appearance: 'none' }}
              >
                <option>Today</option>
                <option>Tomorrow</option>
              </select>
            </div>
          </div>
          <div className="input-group flex-1">
            <label className="input-label">Time</label>
            <div className="input-with-icon">
              <Clock size={18} className="input-icon" />
              <select
                className="input"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ appearance: 'none' }}
              >
                {['8:00 AM', '9:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '5:00 PM', '5:30 PM', '6:00 PM', '7:00 PM'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Budget & Passengers */}
        <div className="flex gap-md">
          <div className="input-group flex-1">
            <label className="input-label">Max Budget</label>
            <div className="input-with-icon">
              <Wallet size={18} className="input-icon" />
              <input
                className="input"
                type="number"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                placeholder="₹100"
              />
            </div>
          </div>
          <div className="input-group flex-1">
            <label className="input-label">Passengers</label>
            <div className="input-with-icon">
              <Users size={18} className="input-icon" />
              <select
                className="input"
                value={passengerCount}
                onChange={(e) => setPassengerCount(Number(e.target.value))}
                style={{ appearance: 'none' }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
        </div>

        {/* Safety preferences */}
        <div className="flex flex-wrap gap-sm">
          {['Verified drivers only', 'Women-only ride', 'Community ride'].map(pref => (
            <button key={pref} className="chip">{pref}</button>
          ))}
        </div>

        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={handleSearch}
          disabled={!isReady}
          loading={step === 'searching'}
          icon={<Sparkles size={20} />}
          id="search-rides-btn"
        >
          {step === 'searching' ? 'AI is matching rides...' : 'Find Matching Rides'}
        </Button>
      </div>
    </div>
  );
};
