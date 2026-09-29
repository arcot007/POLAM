// Trip model — an active/completed trip
export type TripStatus = 'confirmed' | 'waiting_pin' | 'pin_verified' | 'in_progress' | 'deviation_detected' | 'completed' | 'cancelled';

export interface TripParticipant {
  userId: string;
  role: 'driver' | 'passenger';
  pickupLocation: { name: string; lat: number; lng: number };
  dropLocation: { name: string; lat: number; lng: number };
  distance: number;
  fare: number;
  status: 'confirmed' | 'picked_up' | 'dropped' | 'cancelled';
}

export interface Trip {
  id: string;
  tripCode: string; // e.g. POLAM1234
  rideId: string;
  driverId: string;
  vehicleId: string;
  pin: string;
  status: TripStatus;
  participants: TripParticipant[];
  origin: { name: string; lat: number; lng: number };
  destination: { name: string; lat: number; lng: number };
  plannedRoute: { lat: number; lng: number }[];
  departureTime: string;
  estimatedArrival: string;
  actualDeparture?: string;
  actualArrival?: string;
  totalDistance: number;
  totalFare: number;
  paymentId?: string;
  safeArrivalConfirmed: boolean;
  guardianEnabled: boolean;
  sharedWithContacts: string[];
  createdAt: string;
}
