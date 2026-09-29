// Ride Request model — a passenger's search request
export interface RideRequest {
  id: string;
  passengerId: string;
  pickup: {
    name: string;
    address: string;
    lat: number;
    lng: number;
  };
  destination: {
    name: string;
    address: string;
    lat: number;
    lng: number;
  };
  date: string;
  departureTime: string;
  flexibleTime: number; // minutes of flexibility
  expectedArrival?: string;
  maxBudget: number;
  passengerCount: number;
  safetyPreferences: {
    womenOnly: boolean;
    verifiedOnly: boolean;
    communityOnly: boolean;
    nightSafety: boolean;
  };
  createdAt: string;
}
