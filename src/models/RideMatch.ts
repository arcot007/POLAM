// Ride Match model — result of AI matching
export interface RideMatch {
  id: string;
  rideId: string;
  requestId: string;
  matchPercentage: number;
  routeOverlap: number; // percentage
  departureDifference: number; // minutes
  passengerDistance: number; // km for this passenger
  passengerDuration: number; // minutes for this passenger
  totalFare: number;
  passengerShare: number;
  estimatedSavings: number;
  pickupWalkDistance: number; // meters to pickup
  pickupSuggestion?: SafePickupSuggestion;
  matchReasons: string[];
  safetyScore: number; // 0–100
  verificationScore: number; // 0–100
  rank: number;
}

export interface SafePickupSuggestion {
  name: string;
  address: string;
  lat: number;
  lng: number;
  type: 'main_road' | 'college_gate' | 'bus_stop' | 'metro_station' | 'shop' | 'public_building' | 'well_lit';
  distanceFromUser: number; // meters
  distanceFromDriver: number; // meters
  safetyFeatures: string[];
}
