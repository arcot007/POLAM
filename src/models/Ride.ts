// Ride model — an available ride offered by a driver
export type RideStatus = 'available' | 'full' | 'in_progress' | 'completed' | 'cancelled';

export interface RideLocation {
  name: string;
  address: string;
  lat: number;
  lng: number;
}

export interface Ride {
  id: string;
  driverId: string;
  vehicleId: string;
  origin: RideLocation;
  destination: RideLocation;
  waypoints: RideLocation[];
  departureTime: string;
  estimatedArrivalTime: string;
  totalDistance: number; // km
  totalDuration: number; // minutes
  totalSeats: number;
  availableSeats: number;
  pricePerKm: number;
  baseFare: number;
  totalFare: number;
  status: RideStatus;
  isWomenOnly: boolean;
  isVerifiedOnly: boolean;
  isCommunityRide: boolean;
  communityId?: string;
  route: RoutePoint[];
  createdAt: string;
}

export interface RoutePoint {
  lat: number;
  lng: number;
  name?: string;
}
