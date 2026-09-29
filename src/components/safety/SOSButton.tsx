// SOS Button component
import React, { useState, useEffect } from 'react';
import { useGuardian } from '../../hooks/useGuardian';

interface SOSButtonProps {
  tripId?: string;
}

export const SOSButton: React.FC<SOSButtonProps> = ({ tripId }) => {
  const { triggerSOS, sosTriggered, cancelSOS } = useGuardian();
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (holding) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            if (tripId) triggerSOS(tripId);
            setHolding(false);
            return 100;
          }
          return p + 5;
        });
      }, 100);
    } else {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [holding, tripId, triggerSOS]);

  if (sosTriggered) {
    return (
      <div className="flex flex-col items-center gap-md">
        <div className="sos-button" style={{ background: 'var(--emergency)', animation: 'pulse-sos 1s infinite' }}>
          SOS
        </div>
        <p className="text-sm text-emergency font-semibold">Emergency contacts notified!</p>
        <button className="btn btn-secondary btn-sm" onClick={cancelSOS}>Cancel SOS</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-md">
      <button
        className="sos-button"
        onMouseDown={() => setHolding(true)}
        onMouseUp={() => setHolding(false)}
        onMouseLeave={() => setHolding(false)}
        onTouchStart={() => setHolding(true)}
        onTouchEnd={() => setHolding(false)}
        aria-label="Hold for SOS"
        id="sos-trigger"
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        SOS
        {holding && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, height: 4,
            width: `${progress}%`, background: 'white',
            borderRadius: 'var(--radius-full)', transition: 'width 100ms linear',
          }} />
        )}
      </button>
      <p className="text-sm text-secondary">Hold for 2 seconds to trigger SOS</p>
    </div>
  );
};
