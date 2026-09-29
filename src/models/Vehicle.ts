// Vehicle model
export type VehicleType = 'sedan' | 'suv' | 'hatchback' | 'auto' | 'bike' | 'ev';
export type FuelType = 'petrol' | 'diesel' | 'electric' | 'cng' | 'hybrid';

export interface Vehicle {
  id: string;
  ownerId: string;
  type: VehicleType;
  make: string;
  model: string;
  year: number;
  color: string;
  registrationNumber: string;
  fuelType: FuelType;
  totalSeats: number;
  availableSeats: number;
  isVerified: boolean;
  isAC: boolean;
  rating: number;
}
