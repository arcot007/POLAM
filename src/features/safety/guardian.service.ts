// Guardian Service — Trip Guardian monitoring
import { SAFETY_CONFIG } from '../../utils/constants';
import { TripTracking } from '../../models/TripTracking';

export interface GuardianAlert {
  type: 'deviation' | 'delay' | 'stop';
  message: string;
  severity: 'low' | 'medium' | 'high';
  location?: { lat: number; lng: number };
}

export const checkDeviation = (tracking: TripTracking): GuardianAlert | null => {
  if (tracking.deviationDistance > SAFETY_CONFIG.deviationThreshold) {
    return {
      type: 'deviation',
      message: 'Your route appears different from the planned route. Are you safe?',
      severity: 'high',
      location: tracking.currentLocation,
    };
  }
  return null;
};

export const checkDelay = (tracking: TripTracking, expectedArrival: string): GuardianAlert | null => {
  const expected = new Date(expectedArrival).getTime();
  const eta = new Date(tracking.eta).getTime();
  const delayMinutes = (eta - expected) / 60000;

  if (delayMinutes > 15) {
    return {
      type: 'delay',
      message: `Your trip is running ${Math.round(delayMinutes)} minutes late.`,
      severity: 'medium',
    };
  }
  return null;
};
