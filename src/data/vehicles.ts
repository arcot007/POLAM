// Demo Vehicles
import { Vehicle } from '../models/Vehicle';

export const demoVehicles: Vehicle[] = [
  {
    id: 'veh-001',
    ownerId: 'user-002',
    type: 'sedan',
    make: 'Maruti Suzuki',
    model: 'Ciaz',
    year: 2022,
    color: 'White',
    registrationNumber: 'TN 09 AB 1234',
    fuelType: 'petrol',
    totalSeats: 4,
    availableSeats: 2,
    isVerified: true,
    isAC: true,
    rating: 4.8,
  },
  {
    id: 'veh-002',
    ownerId: 'user-003',
    type: 'hatchback',
    make: 'Hyundai',
    model: 'i20',
    year: 2023,
    color: 'Silver',
    registrationNumber: 'TN 22 CD 5678',
    fuelType: 'petrol',
    totalSeats: 4,
    availableSeats: 3,
    isVerified: true,
    isAC: true,
    rating: 4.9,
  },
  {
    id: 'veh-003',
    ownerId: 'user-004',
    type: 'suv',
    make: 'Tata',
    model: 'Nexon',
    year: 2023,
    color: 'Blue',
    registrationNumber: 'TN 07 EF 9012',
    fuelType: 'petrol',
    totalSeats: 5,
    availableSeats: 3,
    isVerified: true,
    isAC: true,
    rating: 4.6,
  },
];

export const getVehicle = (id: string): Vehicle | undefined => demoVehicles.find(v => v.id === id);
export const getVehicleByOwner = (ownerId: string): Vehicle | undefined => demoVehicles.find(v => v.ownerId === ownerId);
