// Safety Event model
export type SafetyEventType = 'route_deviation' | 'sos_triggered' | 'safe_arrival_pending' | 'safe_arrival_confirmed' | 'guardian_alert' | 'emergency_shared' | 'night_safety_active';

export interface SafetyEvent {
  id: string;
  tripId: string;
  userId: string;
  type: SafetyEventType;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  location?: { lat: number; lng: number };
  timestamp: string;
  resolved: boolean;
  resolvedAt?: string;
  resolution?: string;
}
