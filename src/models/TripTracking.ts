// Trip Tracking model
export interface TripTracking {
  tripId: string;
  currentLocation: { lat: number; lng: number };
  speed: number; // km/h
  heading: number; // degrees
  distanceRemaining: number; // km
  timeRemaining: number; // minutes
  eta: string;
  isOnRoute: boolean;
  deviationDistance: number; // meters from planned route
  lastUpdated: string;
}
