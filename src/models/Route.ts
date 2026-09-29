// Route model
export interface Route {
  id: string;
  name: string;
  origin: { name: string; lat: number; lng: number };
  destination: { name: string; lat: number; lng: number };
  distance: number; // km
  duration: number; // minutes
  waypoints: { name: string; lat: number; lng: number }[];
  polyline: { lat: number; lng: number }[];
}

export interface TransportOption {
  id: string;
  mode: 'polam' | 'bus' | 'metro' | 'auto' | 'walk' | 'bus_metro';
  label: string;
  cost: number;
  duration: number; // minutes
  distance: number; // km
  transfers: number;
  availability: 'available' | 'limited' | 'unavailable';
  eta: string;
  safetyRating: number; // 1–5
  environmentalImpact: 'low' | 'medium' | 'high';
  recommended?: boolean;
  details?: string;
}
